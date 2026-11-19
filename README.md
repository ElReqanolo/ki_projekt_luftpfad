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

**Anmelden:** Mit dem Login-Dienst (Cloudflare Worker, kostenlos) meldet sich jede Person mit eigenem Benutzernamen und Passwort an und darf in ihrer eigenen Ablage schreiben; das Konto `admin` darf alles und verwaltet die Benutzer unter *Benutzer verwalten*. Niemand braucht ein GitHub-Token. Einrichtung: [`worker/EINRICHTEN.md`](worker/EINRICHTEN.md), Code: `worker/worker.js`.

Ohne Login-Dienst gibt es zwei Ausweichwege (unter *Ablage-Einstellungen*): ein eigenes GitHub-Token je Person oder „Nur dieser Browser“ (nur auf dem eigenen Gerät sichtbar).

Grenze: Einzelne Dateien bis 50 MB.

## Status je Projekt und Tagesagent

Jedes Projekt hat einen Status, sichtbar auf der Übersicht, in der Projektliste und auf der Projektseite:

1. **Offen**: noch nicht bearbeitet. Hinweise für die KI können schon eingetragen werden.
2. **Von KI erledigt**: Der Agent hat ein Ergebnis in die Datenablage der federführenden Person gelegt (`KI_Ergebnis_<ID>_v<Runde>.md`). Es ist auf der Projektseite verlinkt.
3. **Überprüft**: Die Gruppe hat im Textfeld Verbesserungen oder Fehler eingetragen. Der Agent arbeitet sie am nächsten Morgen ein, danach steht das Projekt wieder auf „Von KI überarbeitet (Runde n)“.
4. **Abgenommen**: Jemand hat den Haken „Passt so, perfekt“ gesetzt. Der Agent fasst das Projekt nicht mehr an. Haken entfernen nimmt die Abnahme zurück.

Gespeichert wird alles in `status.json` im Repository (Schreiben braucht das GitHub-Token wie die Datenablage). Der Agent läuft jeden Morgen um 6:40 Uhr als geplanter Claude-Auftrag und folgt `agent/ANLEITUNG.md`. Seine Tagesprotokolle liegen in `agent/protokoll/`.

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
