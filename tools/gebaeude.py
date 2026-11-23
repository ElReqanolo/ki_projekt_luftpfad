#!/usr/bin/env python3
"""Zieht Räume, Lüftungsanlagen und Brandschutzklappen aus dem 3D-Modell „Objektwelt“
(https://denizalatas2.github.io/objektwelt-3d/) und schreibt data/gebaeude.json.

Aufruf:  python3 -I tools/gebaeude.py <Pfad zum Klon von denizalatas2/objektwelt-3d> .

Das Modell speichert seine Daten als base64-kodierte gzip-Dateien (*.gz.txt).
Übernommen werden nur Werte, die im Modell stehen; nichts wird geschätzt.
"""
import base64, collections, glob, gzip, json, os, re, sys

MODEL, ROOT = sys.argv[1], sys.argv[2]
URL = 'https://denizalatas2.github.io/objektwelt-3d/'


def load(rel):
    raw = gzip.decompress(base64.b64decode(open(os.path.join(MODEL, 'data', rel)).read()))
    try:
        raw = gzip.decompress(raw)
    except OSError:
        pass
    return json.loads(raw)


manifest = load('manifest.json.gz.txt')
FLOORS = {f['id']: f['label'] for f in manifest['floors']}
FLOOR_ORDER = [f['label'] for f in manifest['floors']]
objs = {}
for f in sorted(glob.glob(os.path.join(MODEL, 'data', 'attr', 'p*.json.gz.txt'))):
    for chunk in load(os.path.relpath(f, os.path.join(MODEL, 'data'))).values():
        objs.update(chunk)

F = lambda o: dict(o.get('f', []))
by_tab = collections.defaultdict(list)
for o in objs.values():
    by_tab[o.get('tab')].append(o)


def td_system(o):
    for r in (o.get('td') or {}).get('w', []):
        if r[0] == 'System':
            return r[1]
    return None


def systems_of(f):
    s = set()
    for k in ('design_system_id', 'design_system_ids'):
        if f.get(k):
            s |= {x.strip() for x in str(f[k]).split(',') if x.strip()}
    return s


# Namen der Anlagen (design_system.<id>.label steht in den Anzeigetabellen)
SYS_NAME = {}
for o in objs.values():
    for r in (o.get('td') or {}).get('w', []):
        if len(r) >= 4 and re.fullmatch(r'design_system\.[A-Z0-9_]+\.label', r[3]):
            SYS_NAME[r[3].split('.')[1]] = r[1]
LUEFTUNG = {k: v for k, v in SYS_NAME.items() if re.search(r'lüftung|abluft', v, re.I)}

# ------------------------------------------------------------------ Räume
NUTZUNG = {
    'office_work': 'Büro', 'meeting': 'Besprechung', 'staff_break': 'Pause/Teeküche', 'storage': 'Lager',
    'sanitary': 'Sanitär', 'staff_sanitary': 'Sanitär Personal', 'accessible_wc_intent': 'WC barrierefrei',
    'common_circulation': 'Flur', 'circulation': 'Flur', 'service_corridor': 'Serviceflur', 'service_circulation': 'Serviceflur',
    'escape_corridor': 'Fluchtweg', 'stair': 'Treppe', 'stair_landing': 'Treppenpodest', 'core_lobby': 'Vorraum Kern',
    'passenger_lift': 'Personenaufzug', 'service_lift': 'Serviceaufzug', 'electrical_distribution': 'Elektroverteilung',
    'electrical_plant': 'Elektrotechnik', 'hvac_distribution': 'Lüftungs-/Regelverteilung', 'ventilation_plant': 'Lüftungstechnik',
    'automation_plant': 'Gebäudeautomation', 'service_distribution': 'Technikverteilung', 'water_distribution': 'Wasserverteilung',
    'water_plant': 'Wassertechnik', 'drainage_plant': 'Entwässerungstechnik', 'service_cabinet': 'Technikschrank',
    'technical_riser': 'Schacht', 'cleaning': 'Reinigung', 'cleaning_storage': 'Reinigung/Lager', 'archive_storage': 'Archiv',
    'light_workshop': 'Werkstatt', 'staff_changing': 'Umkleide', 'operations_storage': 'Betriebslager', 'training': 'Schulung',
    'sample_display': 'Musterraum', 'demonstration': 'Vorführung', 'vehicle_ramp': 'Rampe', 'unfitted_reserve': 'freie Ausbaufläche',
    'core_reservation': 'Kernreserve',
    'air_exhaust_structure': 'Fortluftbauwerk', 'air_intake_structure': 'Zuluftbauwerk', 'bicycle_storage': 'Fahrradraum',
    'built_in_storage': 'Einbaulager', 'cold_storage': 'Kühllager', 'common_entrance': 'Eingang', 'cooling_plant': 'Kältetechnik',
    'dining': 'Gastraum', 'dishwashing': 'Spülraum', 'event_storage': 'Lager Veranstaltung', 'facility_management': 'FM-Büro',
    'food_preparation': 'Küche', 'food_service_circulation': 'Servicegang Gastro', 'food_storage': 'Lebensmittellager',
    'food_waste_holding': 'Abfall Gastro', 'furniture_storage': 'Möbellager', 'garage_parking': 'Garage', 'goods_inspection': 'Wareneingangsprüfung',
    'goods_receiving': 'Warenannahme', 'grease_separation': 'Fettabscheider', 'heating_plant': 'Wärmetechnik', 'it_distribution': 'Datennetz',
    'kitchen_riser': 'Küchenschacht', 'logistics': 'Logistik', 'logistics_storage': 'Logistiklager', 'maintenance_workshop': 'Betriebswerkstatt',
    'reserve': 'Reserve', 'returns_storage': 'Rücklauflager', 'safety_plant': 'Sicherheitstechnik', 'sample_consultation': 'Bemusterung',
    'sample_storage': 'Musterlager', 'sanitary_riser': 'Sanitärschacht', 'spare_parts_storage': 'Ersatzteillager', 'staff_wc': 'WC Personal',
    'technical_reserve': 'Technikreserve', 'telecom_plant': 'Fernmeldetechnik', 'tenant_goods_buffer': 'Mieterlager Puffer',
    'tenant_storage': 'Mieterlager', 'tutorial': 'Tutorium', 'waiting': 'Wartebereich',
}
raeume = []
for o in by_tab['space']:
    f = F(o)
    raeume.append({
        'id': f['space_id'], 'nr': f['space_id'].rsplit('_', 1)[-1], 'name': f['label'],
        'geschoss': FLOORS.get(f['floor_id'], f['floor_id']), 'flaeche': round(float(f['area_m2']), 1),
        'nutzung': NUTZUNG.get(f.get('use_type'), f.get('use_type') or ''), 'kategorie': f.get('category', ''),
    })
raeume.sort(key=lambda r: (FLOOR_ORDER.index(r['geschoss']) if r['geschoss'] in FLOOR_ORDER else 99, r['nr']))

# Nutzer laut Raumbezeichnung: erstes Wort, das mindestens drei Räume als Vorsilbe tragen
GENERISCH = {'Gemeinsamer', 'Gemeinsames', 'Gemeinsame', 'Flur', 'Treppe', 'Sanitär', 'Freie', 'Ausgangsflur', 'Personenaufzug',
             'Serviceaufzug', 'Elektroschrank', 'Etagenverteilung', 'Installationsfeld', 'Betriebszugang', 'Reinigungsraum',
             'Seitennische', 'Schachtzugang', 'Servicequerflur', 'Verbindung', 'WC', 'Wasserverteilung', 'Nordflur', 'Ostflur',
             'Nordwestflur', 'Flurabschnitt', 'Fluchtweg', 'Fluchttreppenhaus', 'Sicherheitsschleuse', 'Mieterarchiv', 'Personal',
             'Rampe', 'Untere', 'RLT', 'Reinigungsgeräte', 'Reinigungstextilien', 'Betriebsmittellager', 'Arbeitsraum'}
pref = collections.Counter(r['name'].split()[0] for r in raeume)
nutzer = {}
for r in raeume:
    w = r['name'].split()[0]
    if pref[w] >= 3 and w not in GENERISCH and w[0].isupper() and r['kategorie'] == 'NUF':
        r['nutzer'] = w
        n = nutzer.setdefault(w, {'name': w, 'geschosse': set(), 'raeume': 0, 'flaeche': 0.0})
        n['geschosse'].add(r['geschoss']); n['raeume'] += 1; n['flaeche'] += r['flaeche']
nutzer = sorted(({**n, 'geschosse': sorted(n['geschosse'], key=FLOOR_ORDER.index), 'flaeche': round(n['flaeche'])}
                 for n in nutzer.values()), key=lambda n: (FLOOR_ORDER.index(n['geschosse'][0]), n['name']))

geschosse = []
for lab in FLOOR_ORDER:
    rs = [r for r in raeume if r['geschoss'] == lab]
    geschosse.append({'label': lab, 'raeume': len(rs), 'flaeche': round(sum(r['flaeche'] for r in rs))})

# ------------------------------------------------------------------ Lüftungsanlagen
lueftung = []
for sid, name in sorted(LUEFTUNG.items()):
    terms = [F(o) for o in by_tab['distribution_terminal'] if sid in systems_of(F(o))]
    kinds = collections.Counter(t.get('terminal_kind', '') for t in terms)
    spaces = {t['space_id'] for t in terms if t.get('space_id')}
    floors = {FLOORS.get(t.get('floor_id'), '') for t in terms if t.get('floor_id')} - {''}
    lueftung.append({
        'id': sid, 'name': name,
        'zuluft': sum(n for k, n in kinds.items() if 'supply' in k),
        'abluft': sum(n for k, n in kinds.items() if any(x in k for x in ('return', 'exhaust', 'extract'))),
        'raeume': len(spaces), 'geschosse': sorted(floors, key=FLOOR_ORDER.index),
    })

# ------------------------------------------------------------------ Brandschutzklappen
damp = [o for o in by_tab['fire_stop_element'] if F(o).get('element_kind') == 'fire_damper']
fd = [F(o) for o in damp]
EINBAU = {'vertical_in_wall': 'in Wänden', 'horizontal_in_slab': 'in Decken'}
klappen = {
    'gesamt': len(fd),
    'nachKlasse': [{'klasse': k, 'einbau': EINBAU.get(m, m), 'anzahl': n}
                   for (k, m), n in sorted(collections.Counter((f['class_din_en_13501'], f['mounting']) for f in fd).items(),
                                           key=lambda x: -x[1])],
    'ueberstroem': sum(1 for f in fd if f.get('line_classes') == 'transfer_air'),
    'nachGeschoss': [{'geschoss': lab, 'anzahl': n} for lab in FLOOR_ORDER
                     if (n := sum(1 for f in fd if FLOORS.get(f['floor_id']) == lab))],
    'status': sorted({f.get('status', '') for f in fd}),
    'kuechenabluft': sum(1 for o in by_tab['fire_stop_element'] if F(o).get('element_kind') == 'kitchen_exhaust_shutoff'),
}

out = {'quelle': URL, 'stand': manifest.get('stand'), 'version': manifest.get('version'), 'objekte': len(objs),
       'geschosse': geschosse, 'nutzer': nutzer, 'lueftung': lueftung, 'klappen': klappen, 'raeume': raeume}
with open(os.path.join(ROOT, 'data', 'gebaeude.json'), 'w', encoding='utf-8') as fh:
    json.dump(out, fh, ensure_ascii=False, separators=(',', ':'))
print(f"gebaeude.json: {len(raeume)} Räume, {len(lueftung)} Lüftungsanlagen, {len(fd)} Brandschutzklappen, Modellstand {out['stand']}")
