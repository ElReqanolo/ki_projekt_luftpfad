#!/usr/bin/env python3
"""Baut die Daten der Webseite aus dem Originalpaket.

Aufruf:  python3 -I tools/build.py <Pfad zu 02_Luftpfad_Anlagentechnik> <Repo-Wurzel>

Ergebnis:
  files/...            Originaldateien (zum Herunterladen)
  data/text/<id>.txt   extrahierter Text je Datei (mit Seitenmarken)
  data/site.json       Firma, Personen, Projekte, Dateiindex, Quellen
Die handgeschriebenen Inhalte (Zusammenfassungen) liegen in content/*.json.
Quellenmarken dort: [[Dateischlüssel|Stelle]] – der Schlüssel muss genau eine
Datei treffen (Teil des Pfads), sonst bricht der Build ab.
"""
import json, os, re, shutil, subprocess, sys, hashlib, html

SRC, ROOT = sys.argv[1], sys.argv[2]
sys.path.insert(0, os.path.join(ROOT, 'tools'))
import extract  # noqa: E402

FILES_DIR = os.path.join(ROOT, 'files')
TEXT_DIR = os.path.join(ROOT, 'data', 'text')

TASK_NAMES = {
    'Projektmappe für die eigene Firma anlegen': 'A001',
    'Unsere Firma auf einer Seite': 'A002',
    'Posteingang sortieren': 'A003',
    'Der erste Auftrag in fünf Teilen': 'A004',
    'Wer ist wer im Haus': 'A005',
    'Rundgang als Sprachnotiz': 'A006',
    'Was ohne Übergabe liegen geblieben': 'A007',
    'Übergabeliste prüfen und Nachfolge regeln': 'A008',
    'Hauschronik 1990 bis 2026': 'A014',
    'Wartungsbericht Lüftung': 'A018',
    'Vortrag': 'A097',
    'Offene Rechnungen und Preisanpassung': 'A161',
    'Wartungstermine 2027': 'A162',
    'Trendaufzeichnung Forum': 'A163',
    'Protokoll 09384': 'A164',
    'Prüfauftrag der Verwaltung': 'A165',
    'Regierechnung Forum': 'A166',
    'Antrittsvorstellung': 'START',
    'Erstes Lesen': 'ALLG',
    'Nachschlagen': 'ALLG',
    'Termine bis 2.12.': 'ALLG',
}

KIND = {'pdf': 'PDF', 'docx': 'Word', 'xlsx': 'Excel', 'md': 'Markdown', 'txt': 'Text', 'eml': 'E-Mail',
        'csv': 'CSV', 'ics': 'Kalender', 'png': 'Bild'}


def fid(rel):
    return hashlib.sha1(rel.encode()).hexdigest()[:10]


def area_of(rel):
    top = rel.split('/')[0]
    return top if top.startswith('Person_') else 'Allgemein'


def category_of(rel):
    parts = rel.split('/')
    sub = parts[1] if len(parts) > 2 else ''
    return {
        '01_Briefings': 'Briefings', '02_Aufgaben': 'Aufgaben', '03_Material': 'Material',
        '04_Datenraum': 'Datenraum', '05_Vorlagen': 'Vorlagen',
    }.get(sub, 'Start & Ablauf')


def md_to_html(md):
    return subprocess.run(['pandoc', '-f', 'gfm', '-t', 'html5', '--wrap=none'], input=md,
                          capture_output=True, text=True).stdout


def docx_to_md(p):
    return subprocess.run(['pandoc', p, '-t', 'gfm', '--wrap=none'], capture_output=True, text=True).stdout


def norm(s):
    return re.sub(r'\s+', ' ', s).strip().lower()


def page_of(pages, needle):
    n = norm(needle)[:60]
    for i, t in enumerate(pages, 1):
        if n in norm(t):
            return i
    return None


def split_pages(text):
    parts = re.split(r'^--- Seite (\d+) ---$', text, flags=re.M)
    return [parts[i + 1] for i in range(1, len(parts), 2)]


# ---------------------------------------------------------------- Dateien
def collect_files():
    if os.path.exists(FILES_DIR):
        shutil.rmtree(FILES_DIR)
    os.makedirs(TEXT_DIR, exist_ok=True)
    for old in os.listdir(TEXT_DIR):
        os.remove(os.path.join(TEXT_DIR, old))
    files = []
    for root, _, names in os.walk(SRC):
        for fn in sorted(names):
            p = os.path.join(root, fn)
            rel = os.path.relpath(p, SRC).replace(os.sep, '/')
            dst = os.path.join(FILES_DIR, rel)
            os.makedirs(os.path.dirname(dst), exist_ok=True)
            shutil.copy2(p, dst)
            ext = fn.rsplit('.', 1)[-1].lower()
            text = extract.extract(p)
            i = fid(rel)
            with open(os.path.join(TEXT_DIR, i + '.txt'), 'w') as f:
                f.write(text)
            files.append({
                'id': i, 'path': rel, 'name': fn, 'ext': ext, 'kind': KIND.get(ext, ext.upper()),
                'size': os.path.getsize(p), 'area': area_of(rel), 'category': category_of(rel),
                'pages': len(split_pages(text)) if ext == 'pdf' else None,
                'ocr': '[OCR]' in text, 'projects': [], 'hint': '',
            })
            print('  ', rel)
    files.sort(key=lambda f: f['path'])
    return files


def map_projects(files):
    """Zuordnung Datei -> Projekt aus der Dateiliste im Inhaltsverzeichnis (Spalte 'gebraucht für')."""
    idx = open(os.path.join(SRC, '0_Allgemein', '00_Inhaltsverzeichnis.md'), encoding='utf-8').read()
    table = idx.split('## Dateien', 1)[1]
    by_path = {f['path']: f for f in files}
    for line in table.splitlines():
        cells = [c.strip() for c in line.strip().strip('|').split('|')]
        if len(cells) != 5 or cells[0] in ('Datei', '---'):
            continue
        datei, _, _, used, where = cells
        base = where.replace('Person ', 'Person_') if where.startswith('Person') else '0_Allgemein'
        rel = f'{base}/{datei}'
        f = by_path.get(rel)
        if not f:
            print('   ! nicht gefunden (Inhaltsverzeichnis):', rel)
            continue
        f['hint'] = used
        for name, pid in TASK_NAMES.items():
            if name in used and pid not in f['projects']:
                f['projects'].append(pid)
    # Aufgabenblätter und Startfrage selbst
    for f in files:
        m = re.match(r'A(\d{3})_', f['name'])
        if m and 'A' + m.group(1) not in f['projects']:
            f['projects'].append('A' + m.group(1))
        if f['name'].startswith('00_Startfrage') and 'START' not in f['projects']:
            f['projects'].append('START')


# ------------------------------------------------------------- Quellen
class Sources:
    def __init__(self, files):
        self.files = files
        self.used = {}

    def resolve(self, key):
        key = key.strip()
        hits = [f for f in self.files if key in f['path']]
        if len(hits) > 1:  # PDF bevorzugen, wenn dieselbe Datei als DOCX/MD daneben liegt
            stems = {h['path'].rsplit('.', 1)[0] for h in hits}
            if len(stems) == 1:
                hits = [h for h in hits if h['ext'] == 'pdf'] or [h for h in hits if h['ext'] == 'md'] or hits[:1]
        if len(hits) != 1:
            raise SystemExit(f'Quelle "{key}" trifft {len(hits)} Dateien: {[h["path"] for h in hits][:5]}')
        return hits[0]

    def render(self, text):
        """[[Schlüssel|Stelle]] -> <a class="q"...>; **fett** -> <b>."""
        def rep(m):
            key, _, loc = m.group(1).partition('|')
            f = self.resolve(key)
            self.used.setdefault(f['id'], set()).add(loc.strip())
            label = html.escape(short_label(f) + (', ' + loc.strip() if loc.strip() else ''))
            return (f'<a class="q" href="#/datei/{f["id"]}" data-file="{f["id"]}" '
                    f'data-loc="{html.escape(loc.strip())}" title="Quelle: {html.escape(f["path"])}">{label}</a>')
        out = html.escape(text, quote=False)
        out = re.sub(r'\*\*(.+?)\*\*', r'<b>\1</b>', out)
        return re.sub(r'\[\[(.+?)\]\]', rep, out)


def short_label(f):
    n = f['name'].rsplit('.', 1)[0]
    m = re.match(r'(\d\d\.\d\d\.\d\d(?:\.\d{3})?)', n)
    if m:
        return m.group(1)
    m = re.match(r'(A\d{3})_', n)
    if m:
        return m.group(1)
    if n.startswith('Personenbriefing_'):
        return 'Personenbriefing ' + n.split('_', 1)[1].replace('_', ' ')
    if n.startswith('Firmenbriefing'):
        return 'Firmenbriefing'
    m = re.match(r'(\d\d)_(\d{4}-\d\d-\d\d)_', n)
    if m and 'Postfach' in f['path']:
        return f'Postfach Nr. {int(m.group(1))}'
    return n.replace('_', ' ')


def render_tree(obj, src):
    if isinstance(obj, str):
        return src.render(obj)
    if isinstance(obj, list):
        return [render_tree(x, src) for x in obj]
    if isinstance(obj, dict):
        return {k: (v if k in ('id', 'person', 'persons', 'kette', 'icon', 'due', 'status', 'order', 'files', 'briefing', 'aufgabenblatt', 'startblatt')
                    else render_tree(v, src)) for k, v in obj.items()}
    return obj


# ------------------------------------------------------------- Briefings
def briefing(files, docx_rel, pdf_rel, private_heads=('Was nur Sie wissen',)):
    md = docx_to_md(os.path.join(SRC, docx_rel))
    pdf = next(f for f in files if f['path'] == pdf_rel)
    pages = split_pages(open(os.path.join(TEXT_DIR, pdf['id'] + '.txt')).read())
    chunks = re.split(r'^## ', md, flags=re.M)
    intro, sections = chunks[0], []
    for ch in chunks[1:]:
        title, _, body = ch.partition('\n')
        title = title.strip()
        page = page_of(pages, title) or 1
        # Unterabschnitte "### ..." mit eigener Seite und Vertraulich-Markierung
        subs = re.split(r'^### ', body, flags=re.M)
        parts = []
        if subs[0].strip():
            parts.append({'title': '', 'html': md_to_html(subs[0]), 'page': page, 'private': False})
        for s in subs[1:]:
            st, _, sb = s.partition('\n')
            first = next((l for l in sb.splitlines() if len(l.strip()) > 30), st)
            sp = page_of(pages, first[:60]) or page_of(pages, st) or page
            parts.append({'title': st.strip(), 'html': md_to_html(sb), 'page': sp,
                          'private': st.strip() in private_heads})
        sections.append({'title': title, 'page': page, 'parts': parts})
    return {'file': pdf['id'], 'docx': next(f['id'] for f in files if f['path'] == docx_rel),
            'intro': md_to_html(intro), 'sections': sections, 'pageCount': len(pages)}


def task_sheet(files, pid):
    doc = next((f for f in files if f['name'].startswith(pid + '_') and f['ext'] == 'docx'), None)
    pdf = next((f for f in files if f['name'].startswith(pid + '_') and f['ext'] == 'pdf'), None)
    if not doc:
        return None
    md = docx_to_md(os.path.join(SRC, doc['path']))
    return {'file': pdf['id'] if pdf else doc['id'], 'html': md_to_html(md)}


def md_file(files, rel):
    f = next(f for f in files if f['path'] == rel)
    md = open(os.path.join(SRC, rel), encoding='utf-8').read()
    return {'file': f['id'], 'html': md_to_html(md)}


# ------------------------------------------------------------- main
def main():
    print('Dateien kopieren und Texte extrahieren …')
    files = collect_files()
    map_projects(files)
    src = Sources(files)

    content = os.path.join(ROOT, 'content')
    firma = json.load(open(os.path.join(content, 'firma.json'), encoding='utf-8'))
    personen = json.load(open(os.path.join(content, 'personen.json'), encoding='utf-8'))
    projekte = json.load(open(os.path.join(content, 'projekte.json'), encoding='utf-8'))

    print('Briefings und Aufgabenblätter umwandeln …')
    fb = briefing(files, '0_Allgemein/01_Briefings/Firmenbriefing_Luftpfad_Anlagentechnik.docx',
                  '0_Allgemein/01_Briefings/Firmenbriefing_Luftpfad_Anlagentechnik.pdf')
    for p in personen['personen']:
        b = p['briefing']
        p['briefing'] = briefing(files, f'{p["ordner"]}/01_Briefings/{b}.docx', f'{p["ordner"]}/01_Briefings/{b}.pdf')
        start = next(f for f in files if f['path'] == f'{p["ordner"]}/00_Start_{p["ordner"]}.pdf')
        p['startblatt'] = start['id']
    for pr in projekte['projekte']:
        pr['aufgabenblatt'] = task_sheet(files, pr['id']) if pr['id'].startswith('A') else None
        manual = pr.pop('dateien', [])
        for key in manual:  # zusätzlich genannte Dateien (z. B. aus der Startfrage)
            f = src.resolve(key)
            if pr['id'] not in f['projects']:
                f['projects'].append(pr['id'])

    for f in files:
        if not f['projects']:
            f['projects'].append('ALLG')
    with open(os.path.join(ROOT, 'data', 'search.json'), 'w', encoding='utf-8') as sf:
        json.dump({f['id']: re.sub(r'\s+', ' ', open(os.path.join(TEXT_DIR, f['id'] + '.txt')).read())
                   for f in files}, sf, ensure_ascii=False)

    allgemein = {k: md_file(files, f'0_Allgemein/{k}.md') for k in
                 ('00_Start_Gruppe', '00_Ablauf', '00_Bis_zum_2_12', '00_Inhaltsverzeichnis', '00_Startfrage')}

    site = {
        'stand': '19.11.2026',
        'firma': render_tree(firma, src),
        'firmenbriefing': fb,
        'allgemein': allgemein,
        'personen': render_tree(personen['personen'], src),
        'projekte': render_tree(projekte['projekte'], src),
        'ketten': personen.get('ketten', {}),
        'dateien': files,
    }
    with open(os.path.join(ROOT, 'data', 'site.json'), 'w', encoding='utf-8') as f:
        json.dump(site, f, ensure_ascii=False, separators=(',', ':'))
    print(f'Fertig: {len(files)} Dateien, {len(site["projekte"])} Projekte, '
          f'{sum(len(v) for v in src.used.values())} Quellenmarken auf {len(src.used)} Dateien.')


if __name__ == '__main__':
    main()
