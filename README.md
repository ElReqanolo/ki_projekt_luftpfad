# Luftpfad Anlagentechnik GmbH – Projektakte

Webseite für das KI-Vorlesungsprojekt: Unternehmens- und Personendaten der Luftpfad Anlagentechnik GmbH, sortiert nach Projekten, mit Quellenangabe an jeder Aussage, Download aller Originaldateien und einer Datenablage je Person.

## Was die Seite enthält

| Bereich | Inhalt |
|---|---|
| Übersicht | Die fünf Personen, alle Fristen bis 2.12., „Die Lage im November 2026“ |
| Unternehmen | Steckbrief, Leistung, Verträge, Gegenüber, Chronik, Widersprüche zwischen Quellen, Firmenbriefing komplett, Kursunterlagen |
| Personen 1–5 | Kontakt, Profil, Projekte, Personenbriefing (der Teil „Was nur Sie wissen“ ist verdeckt), Unterlagen im Ordner, **Datenablage** |
| Projekte | 20 Projekte (Startfrage, A001–A166, zwei gemeinsame Übungen) mit Zusammenfassung, Fristen, Dateien und Aufgabenblatt |
| Alle Dateien | 130 Originaldateien mit Filter, Vorschau, Textfassung und Download (einzeln oder als ZIP) |
| Suche | Volltextsuche über alle Unterlagen, auch über eingescannte Seiten (Texterkennung) |

**Quellenmarken:** Jede Aussage trägt eine Marke wie `04.03.01.018, S. 2, § 11`. Ein Klick öffnet die Quelle mit dem Text der genannten Seite, Download und Link auf die Originalseite.

## Veröffentlichen mit GitHub Pages

1. Im Repository auf **Settings › Pages** gehen.
2. Bei *Build and deployment* „Deploy from a branch“ wählen, Branch `main`, Ordner `/ (root)`, speichern.
3. Nach ein bis zwei Minuten ist die Seite unter `https://<benutzer>.github.io/ki_projekt_luftpfad/` erreichbar.

Lokal ansehen: `python3 -m http.server` im Repository starten und `http://localhost:8000` öffnen (nicht per Doppelklick, sonst lädt der Browser die Daten nicht).

## Datenablage je Person

Jede Person hat unter *Person › Datenablage* eine eigene Ablage mit Ordnern und Dateien. Beim Hochladen wird die **Herkunft** abgefragt („Antwort Kantbogen aus Uebergaben/K61 vom 30.11.“), damit auch dort jede Information ihre Quelle behält. Ordner, deren Name mit der Projektnummer beginnt (z. B. `A018_…`), erscheinen auch auf der Projektseite.

Zwei Speicherorte (umschaltbar unter *Ablage-Einstellungen*):

- **GitHub-Repository** (Standard, gemeinsam für die Gruppe): Dateien landen als Commit unter `ablage/Person_N/`. Lesen geht ohne Anmeldung. Zum Hochladen braucht jede Person ein eigenes Token: GitHub › Settings › Developer settings › Fine-grained tokens › *Generate new token*, Repository `ki_projekt_luftpfad` auswählen, Berechtigung **Contents: Read and write**. Das Token wird nur im eigenen Browser gespeichert. Für Schreibzugriff muss die Person Mitglied (Collaborator) des Repositorys sein.
- **Nur dieser Browser**: ohne Anmeldung, aber nur auf dem eigenen Gerät sichtbar.

Grenze: Einzelne Dateien bis 50 MB.

## Daten neu bauen

Die Webseite liest `data/site.json`. Die wird aus dem Originalpaket und den handgeschriebenen Zusammenfassungen in `content/` erzeugt:

```bash
python3 tools/build.py <Pfad>/02_Luftpfad_Anlagentechnik .
```

Benötigt: Python 3 mit `openpyxl`, `pandoc`, `poppler-utils` (pdftotext) und `tesseract` mit deutscher Sprache.

Zusammenfassungen ändern: `content/projekte.json`, `content/firma.json`, `content/personen.json`. Quellen schreibt man als `[[Dateischlüssel|Stelle]]`, z. B. `[[04.03.01.018|S. 2, § 11]]` oder `[[Postfach/18_]]`. Der Schlüssel muss genau eine Datei treffen, sonst bricht der Build mit einer Meldung ab. So kann keine Quellenmarke ins Leere zeigen.

## Aufbau

```
index.html            Seite (läuft ohne Server-Code, nur statisch)
assets/               app.js (Ansichten), store.js (Datenablage), zip.js, style.css, config.js
data/site.json        erzeugte Daten; data/text/ Textfassung je Datei; data/search.json Suchindex
files/                Originaldateien wie im Kursteam (0_Allgemein, Person_1 … Person_5)
ablage/Person_N/      Datenablage der Personen (Projektordner sind angelegt)
content/              handgeschriebene Zusammenfassungen mit Quellenmarken
tools/                build.py, extract.py, seed_ablage.py
```
