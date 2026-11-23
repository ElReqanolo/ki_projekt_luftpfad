# KI-Ergebnis START: Was ist am Mittwoch wirklich fällig?

- **Projekt:** START, Startfrage, Kette „Einstieg“ [data/site.json, projekte, START]
- **Runde:** 2
- **Datum:** 23.11.2026 (Runde 1 vom 19.11.2026)
- **Federführend:** Kai Landmann (Person 2) [00_Startfrage.md, „Wer was beiträgt“: „verantwortet das Ergebnis“]
- **Rechentabelle:** `KI_Ergebnis_START_v2.csv` (Trennzeichen Semikolon, Dezimalpunkt; mit Python aus der OP-Liste berechnet, Fälligkeit nach Vertrag neu gerechnet und mit OP-Liste, Notizen, Fristenliste und Kalender von Maximilian Backhaus verglichen)

## Änderungen gegenüber v1

Runde 2 vom 23.11.2026: Alle Projekte wurden auf Wunsch der Gruppe unabhängig vom Status erneut geprüft. Feedback der Gruppe lag nicht vor.

- **Lage seit dem 23.11.2026:** Laut dem neuen Blatt „Bis zum 2.12.“ ruhen die Aufgabenblätter der Figuren bis auf Weiteres. Abgabetage, Stundenangaben und Lieferungen an andere Firmen gelten nicht, in 90_Uebergaben wird nichts abgelegt, und keine Gruppe wartet auf Post [00_Bis_zum_2_12.pdf, „Was bis auf Weiteres nicht gilt“]. Fristen und Übergabeordner in dieser Datei stehen so im Aufgabenblatt und gelten erst wieder, wenn der Dozent es sagt [ebd., letzter Absatz].
- Die Startfrage ist jetzt eine **freiwillige kleine Übung**: noch einmal, diesmal ohne Zeitdruck [00_Bis_zum_2_12.pdf, „Was freiwillig ist“]. Der Dozent gibt Lösungen mit Rechenweg heraus; erst nach dem eigenen Versuch vergleichen [ebd.]. Abgegeben wird nichts [ebd.].
- Die drei Beträge sind unverändert. Neu geprüft (siehe unten): alle sieben Belege direkt aus der OP-Liste, die Vertragsregel § 16 und die Summen. Kein Fehler gefunden.
- Punkt 6 unter „Was die Gruppe …“ angepasst: Die Analysefolie für den Vortrag entfällt; es bleibt nur, die Folien der Antrittsvorstellung in 91_Abgabe/Luftpfad_Anlagentechnik nachzulegen, falls sie dort fehlen [00_Bis_zum_2_12.pdf, „Was bleibt“].

**Geprüft in Runde 2:**

1. OP-Liste mit openpyxl gelesen: sieben Belege 2026/3322 bis 2026/3329 und 2026-1182, Netto, USt, Brutto und „fällig am“ wie in v1; bei 2026-1182 ist „fällig am“ leer [OP_Kantbogen_Stand_2026-11-18.xlsx, Zeilen 5–11].
2. Summe fällig 275,65 + 291,24 + 638,63 + 139,75 + 2.422,16 = 3.767,43 EUR mit Python nachgerechnet; 18.11.2026 ist ein Mittwoch.
3. Wortlaut „Die Zahlung erfolgt binnen dreißig Tagen nach Zugang“ in der Textfassung des Vertrags gefunden [04.03.01.018, S. 3, § 16].

## Vorbemerkung

Die Startfrage verlangt eine Zahl, auf die sich alle verlassen können, und sagt ausdrücklich: „Maßgeblich ist der Vertrag, nicht eine Liste.“ [00_Startfrage.md, „Die Frage“]. Der Agent hat deshalb jede Fälligkeit aus der Vertragsregel neu gerechnet und die OP-Liste nur als Belegverzeichnis benutzt. Die Analysefolie selbst und die „erste KI-Antwort“ aus dem eigenen Chat der Gruppe kann der Agent nicht liefern (siehe unten).

## 1 Ergebnis: die drei Beträge brutto

| Größe | Betrag brutto | Quelle |
|---|---:|---|
| **Fällig und unbezahlt am Mi, 18.11.2026** | **3.767,43 EUR** | 5 Belege: 2026/3322, 3325, 3326, 3327, 3328 [OP_Kantbogen_Stand_2026-11-18.xlsx, Blatt OP Debitor 10014, Zeilen 5–9; Fälligkeit nach 04.03.01.018 Wartungsvertrag, S. 3, § 16] |
| **Noch nicht fällig am 18.11.2026** | **1.287,84 EUR** | 2026/3329 (296,57) und 2026-1182 (991,27), **beide fällig ab Mi, 02.12.2026** [OP-Liste, Zeilen 10–11; Vertrag S. 3, § 16; Zugang am Belegdatum = Annahme] |
| **Gesamtstand aller offenen Posten** | **5.055,27 EUR** | 7 Belege [OP-Liste, Zeilen 5–11; Summenformel F13 = SUM(F5:F11), im Export ohne gespeicherten Wert, Summe vom Agenten nachgerechnet] |

Fällig ist, was am 18.11.2026 oder früher fällig geworden ist [00_Startfrage.md, „Die Frage“]. Deshalb zählt 2026/3328 (fällig genau am 18.11.2026) zu den fälligen Posten.

## 2 Rechenweg

### 2.1 Vertragsregel

- **§ 16 Abrechnung und Zahlung:** „Die Zahlung erfolgt binnen dreißig Tagen nach Zugang.“ [04.03.01.018_2018-03-06_Wartungsvertrag_Torwinkel.pdf, S. 3, § 16]
- **§ 3 Pauschalvergütung:** „Die Rechnungen werden als PDF gestellt, die Zahlungsfrist beträgt dreißig Tage.“ [04.03.01.018 …, S. 1, § 3]
- Beide Stellen stimmen überein; § 16 legt den Fristbeginn fest: **Zugang** der Rechnung, nicht Belegdatum.
- Mail Nr. 15 bestätigt das für die Regierechnung: „Nach Vertrag sind es 30 Tage nach Zugang.“ [00_Postfach_als_Text.txt, Nr. 15]
- Rechenregel: Fälligkeit = Zugangstag + 30 Kalendertage (der Zugangstag zählt nicht mit) [Annahme, übliche Fristberechnung; der Vertrag sagt nichts dazu].
- Zugangstag = Belegdatum, weil die Rechnungen als PDF per Mail gehen [Annahme; Vertrag S. 1, § 3 nennt den PDF-Versand, ein Versand- oder Zugangsdatum steht in keiner Unterlage].

### 2.2 Tabelle (Kurzfassung der CSV)

| Beleg | Belegdatum | Leistung | Netto | Brutto | Fällig laut Vertrag | OP-Liste „fällig am“ | Stand 18.11.2026 |
|---|---|---|---:|---:|---|---|---|
| 2026/3322 | 15.09.2026 | Wartung | 231,64 | 275,65 | 15.10.2026 (Do) | 15.10.2026 | fällig, 34 Tage überfällig |
| 2026/3325 | 05.10.2026 | Wartung | 244,74 | 291,24 | 04.11.2026 (Mi) | 04.11.2026 | fällig, 14 Tage überfällig |
| 2026/3326 | 07.10.2026 | Wartung | 536,66 | 638,63 | 06.11.2026 (Fr) | 06.11.2026 | fällig, 12 Tage überfällig |
| 2026/3327 | 16.10.2026 | Wartung | 117,44 | 139,75 | 15.11.2026 (So) | 15.11.2026 | fällig (siehe Hinweis Sonntag) |
| 2026/3328 | 19.10.2026 | Wartung | 2.035,43 | 2.422,16 | 18.11.2026 (Mi) | 18.11.2026 | fällig am Stichtag |
| 2026/3329 | 02.11.2026 | Wartung | 249,22 | 296,57 | 02.12.2026 (Mi) | 02.12.2026 | noch nicht fällig |
| 2026-1182 | 02.11.2026 | Regie Forum | 833,00 | 991,27 | 02.12.2026 (Mi) | **leer** | noch nicht fällig |
| **Summe fällig** | | | | **3.767,43** | | | |
| **Summe nicht fällig** | | | | **1.287,84** | | | |
| **Gesamt** | | | **4.248,13** | **5.055,27** | | | |

Quellen der Spalten: Beleg, Belegdatum, Leistung, Netto, Brutto, „fällig am“ [OP_Kantbogen_Stand_2026-11-18.xlsx, Blatt OP Debitor 10014, Zeilen 5–11]; „Fällig laut Vertrag“ [Vertrag S. 3, § 16, gerechnet mit Code; Wochentage per Code]; Mahnstufe überall 0, Spalte „Zahlung“ überall leer [OP-Liste, Spalten H und I].

Kontrollen (per Code, siehe CSV):

- Bei allen sieben Belegen gilt Netto × 1,19 = Brutto und Netto + USt = Brutto, auf den Cent [OP-Liste, Spalten D–F; Steuersatz 19 % = Annahme, aus den Zahlen abgeleitet].
- Die OP-Liste hat ihre Fälligkeiten als Belegdatum + 30 Tage gebildet; das deckt sich mit dem Vertrag, solange der Zugang am Belegdatum liegt.
- **Hinweis Sonntag:** Der 15.11.2026 ist ein Sonntag. Nach allgemeinem Recht verschiebt sich das Fristende dann auf Montag, 16.11.2026 [Annahme, nicht in den Unterlagen]. Am Ergebnis für den 18.11. ändert das nichts.
- **Empfindlichkeit:** Ginge eine Rechnung erst einen Tag nach dem Belegdatum zu, wäre 2026/3328 am 18.11. noch nicht fällig (erst am 19.11.). Die fällige Summe wäre dann 1.345,27 EUR statt 3.767,43 EUR [Rechnung des Agenten, CSV-Daten]. Die Zahl steht und fällt also mit dem Zugangstag der 2026/3328.

### 2.3 Abgleich mit den Unterlagen von Maximilian Backhaus (Beitrag Selim Ahrens / Kevin Schuster)

| Beleg | Notizen MBa (netto) | Fristenliste MBa | Kalender MBa | Brutto (× 1,19) | Abweichung zur OP-Liste |
|---|---|---|---|---:|---|
| 2026/3322 | 15.10., 231,64 netto | 15.10.2026, „offen“ | fehlt | 275,65 | keine |
| 2026/3325 | 04.11., 244,74 netto | 04.11.2026, Stand leer | fehlt | 291,24 | keine |
| 2026/3326 | 06.11., 536,66 netto | 06.11.2026, „läuft“ | 06.11.2026 | 638,63 | keine |
| 2026/3327 | 15.11., 117,44 netto | 15.11.2026, „läuft“ | 15.11.2026 | 139,75 | keine |
| 2026/3328 | **fehlt** | **fehlt** | 18.11.2026, 2.035,43 netto | 2.422,16 | nur im Kalender |
| 2026/3329 | **16.12.**, 249,22 netto | **16.12.2026** | 02.12.2026 | 296,57 | Notiz und Fristenliste falsch (44 statt 30 Tage) |
| 2026-1182 | fehlt | fehlt | fehlt | 991,27 | nur in der OP-Liste |

Quellen: [03_Notizen_MBa.txt, Zeilen „Rechnung 2026/…“]; [04_Meine_Fristen_MBa.xlsx, Blatt Fristen, Art „Rechnung“]; [05_Kalender_MBa.ics bzw. 05_Kalender_MBa.csv, Termine MBa-1 bis MBa-4]; Brutto mit Code nachgerechnet.

Ergebnis des Abgleichs: Backhaus führt **netto**, die OP-Liste **brutto**. Wer seine Beträge addiert, bekommt zu kleine Zahlen. Die Fristenliste kennt die größte Rechnung 2026/3328 nicht, und für 2026/3329 nennt sie den 16.12.2026 statt 02.12.2026 laut Vertrag. Maßgeblich ist der Vertrag [00_Startfrage.md, „Die Frage“].

### 2.4 Abgleich mit den Mails Nr. 9, 10, 13, 14, 15 (Beitrag Henrike Baum / Kai Landmann)

- Nr. 9 (2026/3326, 638,63, Fälligkeit 06.11.2026), Nr. 13 (2026/3322, 275,65, 15.10.2026), Nr. 14 (2026/3327, 139,75, 15.11.2026): Betrag und Datum stimmen mit OP-Liste und Vertragsrechnung überein [00_Postfach_als_Text.txt, Nr. 9, 13, 14; .eml-Dateien 09, 13, 14].
- Nr. 10 (2026-1182, 991,27): „Fälligkeit war .“, das Datum fehlt; die Mail ging am 10.11.2026, also vor der Fälligkeit am 02.12.2026 [00_Postfach_als_Text.txt, Nr. 10; Vertrag S. 3, § 16].
- **Wichtig:** Alle vier Mails von Henrike Baum gingen an **kontakt@luftpfad-anlagentechnik.de**, also an das eigene Haus, nicht an Kantbogen oder Torwinkel [10_…eml, 09_…eml, 13_…eml, 14_…eml, Kopfzeile „To:“]. Kantbogen hat nach den Unterlagen **keine** Zahlungserinnerung erhalten; die Mahnstufe steht bei allen Belegen auf 0 [OP-Liste, Spalte I; Mail Nr. 15, Frage 1].
- Nr. 15: 2026/3325 (291,24) fehlt bei den Erinnerungen, „seit 04.11. fällig“; 2026/3328 (2.422,16) „heute fällig“; 2026-1182 ohne Fälligkeitsdatum auf der Rechnung, „30 Tage nach Zugang“ [00_Postfach_als_Text.txt, Nr. 15]. Das deckt sich mit der Vertragsrechnung.

## 3 Quellen (für die Folie)

- Vertrag: 04.03.01.018 Wartungsvertrag VTR-1005, **S. 3, § 16** („binnen dreißig Tagen nach Zugang“) und **S. 1, § 3** („Zahlungsfrist beträgt dreißig Tage“), im Original geprüft (siehe „Geprüft“).
- Belege und Beträge: OP_Kantbogen_Stand_2026-11-18.xlsx, Blatt OP Debitor 10014, Zeilen 5–11.
- Fälligkeit 2026-1182 und Hinweis auf 2026/3325: Mail Nr. 15.
- Bestätigung einzelner Beträge: Mails Nr. 9, 13, 14.
- Netto-Angaben Backhaus: 03_Notizen_MBa.txt, 04_Meine_Fristen_MBa.xlsx, 05_Kalender_MBa.ics.

## 4 Erste und geprüfte Antwort

- **Was die KI der Gruppe zuerst sagte:** liegt dem Agenten nicht vor; diese Zeile muss die Gruppe aus ihrem eigenen Chat füllen [nicht belegt].
- **Typische Fehlerquellen, die die Gruppe dabei prüfen sollte** [Abgleich des Agenten, Abschnitte 2.3 und 2.4]:
  - nur die „vier überfälligen“ Rechnungen zählen und 2026/3328 weglassen (dann 1.345,27 statt 3.767,43 EUR), obwohl „am 18.11. oder früher“ fällig zählt;
  - die Regierechnung 2026-1182 als fällig oder gar nicht zählen, weil in der Liste kein Datum steht (richtig nach Vertrag: fällig ab 02.12.2026, wenn Zugang 02.11.2026);
  - die Beträge von Backhaus netto addieren statt brutto;
  - 2026/3329 mit dem 16.12.2026 aus Notiz/Fristenliste führen statt 02.12.2026;
  - die vier Mails von Henrike Baum für Zahlungserinnerungen an Kantbogen halten.
- **Was nach Prüfung des Agenten gilt:** 3.767,43 EUR fällig und unbezahlt, 1.287,84 EUR noch nicht fällig (fällig ab 02.12.2026), 5.055,27 EUR Gesamtstand, unter der Annahme Zugang = Belegdatum. Geprüft durch Neuberechnung mit Code und Abgleich am Vertragsscan (siehe „Geprüft“).

## 5 Eine Grenze: was die Unterlagen nicht zeigen

- **Den Zugangstag** der Rechnungen bei Kantbogen. Der Vertrag knüpft an den Zugang an [Vertrag S. 3, § 16], die Unterlagen nennen nur das Belegdatum. Kein Versandprotokoll, keine Mail mit Rechnungsanhang an Kantbogen liegt vor [nicht belegt]. Hängt vor allem an 2026/3328 (siehe Empfindlichkeit, Abschnitt 2.2).
- **Zahlungseingänge nach dem Export** am 18.11.2026 früh [Mail Nr. 15: „Stand heute früh“] sind nicht erfasst.
- Ob Kantbogen einzelne Rechnungen bestreitet (z. B. die Regierechnung 2026-1182, für die keine Bestellnummer belegt ist), zeigen die Startfrage-Unterlagen nicht [nicht belegt].

## 6 Was nur Kai Landmann weiß

(aus dem eigenen Personenbriefing, nur für Kai Landmann) Die Regierechnung 2026-1182 hat Kai selbst geschrieben; die zugesagte Bestellnummer der Verwaltung kam nie, und die Rechnung steht nicht in der Einsatzliste der Disposition [Personenbriefing_Kai_Landmann.pdf, S. 4, „Was nur Sie wissen“]. Für die Startfrage heißt das: Die 991,27 EUR sind rechnerisch erst ab 02.12.2026 fällig und können von Kantbogen bestritten werden. Vorschlag: Auf der Folie die 991,27 EUR getrennt ausweisen (wie hier unter „noch nicht fällig“), ohne die Hintergründe zu nennen; die Entscheidung zur Rechnung gehört in A166 [Personenbriefing_Kai_Landmann.pdf, S. 5, „Ihre Entscheidungen“].

## Was die Gruppe selbst entscheiden oder liefern muss

Vorschläge, keine Entscheidungen; nichts davon ist abgeschickt.

1. **Erste KI-Antwort aus dem eigenen Chat** neben das geprüfte Ergebnis stellen [00_Startfrage.md, „Das gehört auf die Analysefolie“]. Vorschlag: die Frage aus der Startfrage wörtlich stellen, mit Scan und OP-Liste, und dann gegen die Zahlen hier halten.
2. **Eine Zahl selbst im Original prüfen** (Pflicht laut Folie) [00_Startfrage.md]. Vorschlag: Henrike Baum liest § 16 auf S. 3 des Scans selbst; Elena Voss rechnet die CSV mit einer Tabellenformel unabhängig nach (z. B. Fälligkeit = Belegdatum + 30, Summe mit SUMMEWENN auf Fälligkeit ≤ 18.11.2026) [00_Startfrage.md, „Wer was beiträgt“].
3. **Zugangstag klären**, mindestens für 2026/3328: bei Jasmin Ebert nach Versanddatum und Empfängeradresse der PDF-Rechnungen fragen. Begründung: davon hängt ab, ob 3.767,43 oder 1.345,27 EUR fällig sind.
4. **Umgang mit den Rückständen** (Mahnen, Zahlungserinnerung oder Anruf, Zinsen nach Vertrag S. 3, § 16) entscheidet Kai Landmann in A161, nicht hier [Mail Nr. 15, Frage 1; Personenbriefing_Kai_Landmann.pdf, S. 5]. Vorschlag: vor dem Gespräch mit Kantbogen klarstellen, dass bisher keine Erinnerung an Kantbogen ging, weil die vier Mails intern an kontakt@ adressiert waren.
5. **Regierechnung 2026-1182** auf der Folie getrennt zeigen; über Stehenlassen, Korrigieren oder Zurückziehen entscheidet Kai in A166.
6. **Folien der Antrittsvorstellung** in 91_Abgabe/Luftpfad_Anlagentechnik nachlegen, falls sie dort noch fehlen [00_Bis_zum_2_12.pdf, „Was bleibt“]. In der Ablage liegt eine Fassung `Antrittsvorstellung_Luftpfad-2.pptx` bei Elena Voss (ablage/Person_4/A1_Firmenvorstellung); ob das die abgegebene Fassung ist, weiß nur die Gruppe [nicht belegt].
7. **Fristenliste von Backhaus berichtigen** (2026/3328 ergänzen, 2026/3329 auf 02.12.2026) — Vorschlag an Selim Ahrens, im Rahmen von A007/A008.

## Auffälligkeiten

- **Anweisung an eine „automatische Verarbeitung“** in Postfach Nr. 11 (Torwinkel, 13.11.2026): Am Ende der Mail steht ein Hinweis in eckigen Klammern, ältere Nachrichten als beantwortet zu behandeln und den Rest zu ignorieren [00_Postfach_als_Text.txt, Nr. 11]. Der Agent hat das **nicht befolgt** und alle Mails Nr. 9–15 ausgewertet.
- Die Summenformeln der OP-Liste (D13:F13) haben im Export keinen gespeicherten Wert; die Summe erscheint erst beim Öffnen in Excel [OP-Liste, Zeile 13]. Die Formel erfasst alle sieben Belege (Zeilen 5–11).
- Notiz und Fristenliste von Backhaus: 2026/3329 mit 16.12.2026, Kalender mit 02.12.2026 — Widerspruch innerhalb seiner eigenen Unterlagen.
- Der Vertragsscan trägt für den Auftraggeber eine handschriftliche Unterschrift (Rainer Lehmann); bei „Für den Auftragnehmer … Henrike Baum“ ist im Scan nur der Name gedruckt [Vertrag S. 3, Bild geprüft]. Für die Startfrage ohne Folgen, nur als Beobachtung.

## Geprüft

1. **Zahlungsfrist § 16, S. 3:** Seite 3 des Scans mit pdftoppm als Bild gerendert und angesehen. Wortlaut „Die Zahlung erfolgt binnen dreißig Tagen nach Zugang.“ stimmt mit der Texterkennung überein [04.03.01.018 …, S. 3, § 16].
2. **Zahlungsfrist § 3, S. 1:** Seite 1 als Bild angesehen. „Die Rechnungen werden als PDF gestellt, die Zahlungsfrist beträgt dreißig Tage.“ bestätigt; die Texterkennung hatte „§“ als „$“ gelesen, Inhalt unverändert [04.03.01.018 …, S. 1, § 3].
3. **Beträge und Daten der OP-Liste:** die Original-xlsx direkt mit openpyxl gelesen (nicht die Textfassung), Zellen B5:G11 und die Summenformeln in Zeile 13; Netto × 1,19 = Brutto für alle sieben Belege per Code bestätigt; Brutto von 2026/3326, 3322 und 3327 zusätzlich gegen die .eml-Dateien Nr. 9, 13, 14 geprüft (638,63 / 275,65 / 139,75 EUR) [OP_Kantbogen_Stand_2026-11-18.xlsx; 09_…eml, 13_…eml, 14_…eml].
