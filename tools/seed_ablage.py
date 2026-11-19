"""Legt in ablage/Person_N/ je Projekt der Person einen leeren Ordner an (wie der Button in der Webseite)."""
import json, os, re, sys, unicodedata
root = sys.argv[1]
site = json.load(open(os.path.join(root, 'data', 'site.json'), encoding='utf-8'))
def slug(s):
    for a, b in (('ä','ae'),('ö','oe'),('ü','ue'),('Ä','Ae'),('Ö','Oe'),('Ü','Ue'),('ß','ss')):
        s = s.replace(a, b)
    s = ''.join(c for c in unicodedata.normalize('NFKD', s) if not unicodedata.combining(c))
    s = re.sub(r'[^A-Za-z0-9]+', '_', s).strip('_')[:42]
    return s.rstrip('_')
for p in site['personen']:
    base = os.path.join(root, 'ablage', p['ordner'])
    os.makedirs(base, exist_ok=True)
    for pr in site['projekte']:
        if pr['person'] == p['nr'] or p['nr'] in pr.get('persons', []):
            d = os.path.join(base, f"{pr['id']}_{slug(pr['titel'].split(':')[0])}")
            os.makedirs(d, exist_ok=True)
            open(os.path.join(d, '.gitkeep'), 'a').close()
            print(d)
