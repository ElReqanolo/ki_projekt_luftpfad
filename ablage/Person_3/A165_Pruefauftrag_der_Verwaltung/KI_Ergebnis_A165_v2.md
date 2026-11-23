# KI-Ergebnis A165: Prüfauftrag der Verwaltung, zu warme Büros

- **Projekt:** A165, Kette „Raumtemperatur und Mieterbeschwerden“, vorher A012 (Raumlot), fachliche Antwort später in A042 [A165_Pruefauftrag_der_Verwaltung_zu_warme_Bueros.pdf, S. 1, Kopf]
- **Runde:** 1 (Teilergebnis)
- **Datum:** 23.11.2026 (Runde 1 vom 20.11.2026)
- **Federführend:** Selim Ahrens (Person 3), beteiligt Henrike Baum (Person 1), sie unterschreibt die Antwort [A165_…pdf, S. 1, „Ihre Entscheidung“; data/site.json, Projekt A165]
- **Fristen:** Teil 1 ab 19.11.; Prüfauftrag von Raumlot bis 30.11. in Uebergaben/K05; Antwort bis 2.12. in denselben Ordner, dazu kurze Nachricht an Raumlot im Kurschat Objektwelt [A165_…pdf, S. 1 Kopf und S. 2 „Übergabe“]
- **Rechentabelle:** `KI_Ergebnis_A165_v2.csv` (80 Zeilen, je Einsatz eine Zeile mit Nachrechnung des Nettobetrags, Anteil an der Bestellgrenze und Wiederholung im selben Raum; mit Python aus der XLSX erzeugt, Trennzeichen Semikolon, Dezimalkomma)

## Änderungen gegenüber v1

Runde 2 vom 23.11.2026: Alle Projekte wurden auf Wunsch der Gruppe unabhängig vom Status erneut geprüft. Feedback der Gruppe lag nicht vor.

- **Lage seit dem 23.11.2026:** Laut dem neuen Blatt „Bis zum 2.12.“ ruhen die Aufgabenblätter der Figuren bis auf Weiteres. Abgabetage, Stundenangaben und Lieferungen an andere Firmen gelten nicht, in 90_Uebergaben wird nichts abgelegt, und keine Gruppe wartet auf Post [00_Bis_zum_2_12.pdf, „Was bis auf Weiteres nicht gilt“]. Fristen und Übergabeordner in dieser Datei stehen so im Aufgabenblatt und gelten erst wieder, wenn der Dozent es sagt [ebd., letzter Absatz].
- **Status von „Infos benötigt“ auf „Von KI erledigt“:** Die fehlenden Eingänge kommen derzeit nicht, weil die Firmen einander bis auf Weiteres nichts liefern [00_Bis_zum_2_12.pdf, „Was bis auf Weiteres nicht gilt“]. Sie stehen jetzt hier statt in der Statusliste: Prüfauftrag von Raumlot zu den zu warmen Büros (höchstens fünf Fragen) (Raumlot Objektmanagement (Farid Mertens), Uebergaben/K05). Alles, was ohne sie geht, ist fertig; der Rest bleibt als Gerüst.
- Der Prüfauftrag von Raumlot (K05) kommt derzeit nicht, die Antwort je Frage entfällt vorerst [00_Bis_zum_2_12.pdf, „Was bis auf Weiteres nicht gilt“]. Die Einsatzbilanz ist fertig und bleibt die Grundlage, falls das Blatt wieder gilt.
- **Neu: Räume mit Nutzern aus dem 3D-Modell.** Die Webseite zeigt unter „Gebäude“ eine filterbare Raumliste mit Nummer, Geschoss, Nutzung und Fläche [3D-Modell Objektwelt, Stand 23.11.2026]. Damit lassen sich die Räume aus der Einsatzliste (z. B. „OG4 West“, „OG3 Büro Nord“) Mietern zuordnen: Für „OG4 West“ nennt das Modell zum Beispiel 1252 „Werkraum Projektbesprechung West“; Werkraum mietet laut Flächenspiegel das 4. OG Büro West und Nord [3D-Modell Objektwelt, Stand 23.11.2026; 03.10.02.017]. Für „OG3 Büro Nord“ gibt es im Modell keinen Raum mit „Nord“ im Namen; das 3. OG teilen sich Achsenraum (Büro West) und Bauteilbogen (Büro Ost) [03.10.02.017], die Zuordnung bleibt offen. Die Zuordnung je Einsatz bleibt Arbeit für Selim, weil die Einsatzliste in der Spalte „Raum“ nur Bereiche wie „OG4 West“ oder „OG3 Büro Nord“ nennt, keine Raumnummern [Einsaetze_Raumklima_Bogenfeld_2025_2026.xlsx, Blatt Einsaetze, Spalte C].

**Geprüft in Runde 2:**

1. Einsatzliste mit openpyxl: 80 Einsätze, 210,25 Stunden.
2. TKT-113393 (198,39 EUR) und TKT-112491 (381,47 EUR) laut v1; Formel Stunden × Satz + Anfahrt + Material stichprobenhaft an TKT-113397 nachgerechnet (296,25 EUR).
3. Nutzer je Geschoss aus data/gebaeude.json mit dem Flächenspiegel verglichen (siehe A005 v2) [3D-Modell Objektwelt, Stand 23.11.2026].

## Vorbemerkung

- **Teilergebnis:** Teil 1 (eigene Bilanz) ist vollständig. Teil 2 (Antwort je Frage) geht erst, wenn der Prüfauftrag von Raumlot in Uebergaben/K05 liegt. Er ist bis 30.11. angekündigt und liegt **nicht im Repository** [A165_…pdf, S. 2, „Material“ Zeile „Vorarbeit“ und „Übergabe“]. Abschnitt 1.5 ist deshalb ein **Gerüst**: was Luftpfad zu den erwartbaren Fragen schon heute belegen kann, ohne die Fragen von Raumlot zu kennen.
- **Behalten** sind laut Aufgabe: welche Ursache Luftpfad vertritt, der Umgang mit der eigenen Bilanz, Termin und Person für eine Messung [A165_…pdf, S. 1, „Einsatz von KI“]. Dazu stehen in Abschnitt 2 nur Vorschläge. Selim entscheidet, Henrike Baum legt den Preis mit fest und unterschreibt [ebd., „Ihre Entscheidung“].
- **Abgegeben** werden dürfen Summen und Zählung je Raum und Monat, das liefert Abschnitt 1 vollständig [ebd.].

---

## 1 Ergebnis

### 1.1 Einsatzbilanz 2025 und 2026

**Quelle:** Blatt „Einsaetze“, Zeilen 5–84 (80 Einsätze), Export der Dispo vom 18.11.2026 (SAh), „Stunden und Beträge aus der Fakturierung“, Zeitraum 01.01.2025 bis 18.11.2026 [Einsaetze_Raumklima_Bogenfeld_2025_2026.xlsx, Blatt Einsaetze, Zeilen 1–2 und 5–84; Rechnung mit Python].

| Jahr | Einsätze | Std Monteur | davon Arbeit EUR | Anfahrt EUR | Material EUR | **Netto EUR** |
|---|---|---|---|---|---|---|
| 2025 | 40 | 106,50 | 6.806,41 | 2.022,00 | 905,73 | **9.734,16** |
| 2026 (bis 18.11.) | 40 | 103,75 | 6.768,65 | 2.064,00 | 630,88 | **9.463,53** |
| **Gesamt** | **80** | **210,25** | 13.575,06 | 4.086,00 | 1.536,61 | **19.197,69** |

[Einsatzliste, Spalten I, J, K, L, M; Rechnung mit Python. Die Summenzeile der Datei (Zeile 86) enthält nur Formeln `=SUM(I5:I84)` usw. ohne gespeicherte Werte; die Summen oben sind nachgerechnet.]

- Alle 80 Einsätze haben den Status „bezahlt“ [Einsatzliste, Spalte O].
- Die Zahl 80 deckt sich mit dem Firmenbriefing: „Seit Januar 2025 hatten wir am Bogenfeld 80 bezahlte Einsätze wegen zu warmer Räume“ [Firmenbriefing_Luftpfad_Anlagentechnik.pdf, S. 14, Abschnitt 19].
- Sätze: 2025 Monteur 63,91 EUR/h und Anfahrt 50,55 EUR, 2026 Monteur 65,24 EUR/h und Anfahrt 51,60 EUR, einheitlich in jeder Zeile [Einsatzliste, Spalten J, K]. Der Vertrag nennt bei Vertragsbeginn 54,70 EUR/h für Monteur [04.03.01.018_2018-03-06_Wartungsvertrag_Torwinkel.pdf, S. 2, § 5]. Die Fortschreibung auf 63,91/65,24 steht in Anlage 3 bzw. der Preisanpassung, beides liegt nicht im Repository [nicht belegt].
- Bei jeder Zeile gilt: Netto = Std × Satz + Anfahrt + Material, ohne eine einzige Abweichung [Rechnung mit Python, Spalte „Netto_nachgerechnet_EUR“ in der CSV].

**Zählregel (für den Vermerk)**

1. Gezählt wird **jede Zeile der Einsatzliste** = ein Ticket mit Bestellung und Rechnung. Ticket-, Bestell- und Rechnungsnummern sind je Zeile eindeutig (80/80/80), es gibt keine Doppelungen [Einsatzliste, Spalten A, E, N; Rechnung].
2. Die Liste enthält laut Kopf nur Einsätze „mit Meldung zu warm“. Die Meldungstexte lauten „Büro im … zu warm“ (31), „Raum … heizt sich auf“ (29) und „Temperatur … über 27 Grad“ (20). Alle drei Formen zählen [Einsatzliste, Zeile 1 und Spalte D; Rechnung].
3. **Jahr nach „Einsatz am“** (Spalte H). Nach „gemeldet“ (Spalte B) ergibt sich dieselbe Jahresaufteilung 40/40, weil kein Ticket über den Jahreswechsel lief [Rechnung]. Für Monate macht die Zählbasis einen Unterschied (Juli 2026: 16 nach Einsatz, 22 nach Meldung), siehe A162, Abschnitt 1.2 [KI_Ergebnis_A162_v1.md, Abschnitt 1.2].
4. Es zählen **alle Räume**, auch Nicht-Büros. Variante „nur Büro- und Aufenthaltsräume“ ohne Technikzentrale (5) und UG Lager (3): **72 Einsätze, 189,50 h, 17.229,47 EUR netto** (2025: 38 / 99,50 h / 9.106,31 EUR; 2026: 34 / 90,00 h / 8.123,16 EUR) [Rechnung]. Welche Regel gilt, entscheidet Selim [Vorschlag: alle 80, weil Raumlot sonst die Differenz selbst findet].

**Die fünf häufigsten Räume**

| Rang | Raum | Einsätze | 2025 / 2026 | Std | Netto EUR |
|---|---|---|---|---|---|
| 1 | OG2 West | 8 | 5 / 3 | 15,50 | 1.495,87 |
| 2 | OG5 | 7 | 5 / 2 | 21,00 | 1.754,93 |
| 3 | OG3 Büro Süd | 6 | 2 / 4 | 14,75 | 1.466,92 |
| 3 | OG4 West | 6 | 2 / 4 | 18,25 | 1.492,81 |
| 5 | EG Bistro | 5 | 4 / 1 | 13,75 | 1.315,50 |
| 5 | Technikzentrale | 5 | 1 / 4 | 12,75 | 1.198,92 |
| 5 | Teeküche OG1 | 5 | 1 / 4 | 16,75 | 1.408,29 |

[Einsatzliste, Spalten C, H, I, M; Rechnung]. Auf Platz 5 liegen drei Räume gleichauf. „Die fünf häufigsten“ sind deshalb sieben Zeilen; wer streng fünf will, muss eine Regel ergänzen (z. B. nach Stunden: dann Teeküche OG1 mit 16,75 h) [Vorschlag].

**Verteilung nach Monat (Einsatz am)** [Rechnung]

| | Jan | Feb | Mär | Apr | Mai | Jun | Jul | Aug | Sep | Okt | Nov | Dez |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 2025 | 3 | 0 | 0 | 1 | 1 | 10 | 12 | 9 | 3 | 0 | 1 | 0 |
| 2026 | 0 | 1 | 0 | 2 | 2 | 6 | 16 | 11 | 2 | 0 | 0 | – |

- Juni bis August: 64 von 80 Einsätzen [Rechnung; gleiche Zahl in KI_Ergebnis_A162_v1.md, Abschnitt 1.2].
- **Acht Einsätze lagen in der Heizzeit** (Jan, Feb, Apr, Nov): TKT-112088 OG4 Ost 12.01.25, TKT-112105 EG Bistro 21.01.25, TKT-112107 EG Westfoyer 22.01.25, TKT-112282 OG2 West 04.04.25, TKT-112832 OG5 22.11.25, TKT-113067 Kern 1 Treppenhaus 17.02.26, TKT-113151 OG4 West 19.04.26, TKT-113163 Technikzentrale 22.04.26 [Einsatzliste, Spalten A, C, H]. Wenn es im Winter zu warm ist, spricht das eher für Heizung/Regelung als für fehlende Kälte [Annahme, nicht gemessen].
- Letzter Einsatz in der Liste: 15.09.2026 (TKT-113397, OG4 West) [Einsatzliste, Zeile 84].

### 1.2 Räume mit mehreren Einsätzen

**Regel:** Ein Einsatz ist eine **Wiederholung innerhalb von zwölf Monaten**, wenn der vorige Einsatz im selben Raum höchstens 365 Tage vorher lag (nach „Einsatz am“). „Höchstens im 12-Monats-Fenster“ = größte Zahl von Einsätzen im selben Raum innerhalb eines beliebigen Zeitraums von zwölf Monaten [Regel: Vorschlag; Rechnung mit Python]. Alle 19 Räume der Liste hatten mindestens zwei Einsätze.

| Raum | Einsätze gesamt | Wiederholungen ≤ 12 Monate | höchstens im 12-Monats-Fenster | Einsatztage |
|---|---|---|---|---|
| OG2 West | 8 | 7 | 6 (23.06.25–20.06.26) | 04.04.25, 23.06.25, 05.07.25, 08.08.25, 30.08.25, 09.06.26, 20.06.26, 23.07.26 |
| OG5 | 7 | 6 | 5 (19.06.25–22.11.25) | 19.06.25, 04.07.25, 06.07.25, 24.09.25, 22.11.25, 30.07.26, 01.08.26 |
| OG3 Büro Süd | 6 | 5 | 5 (21.08.25–04.08.26) | 27.06.25, 21.08.25, 20.07.26, 22.07.26, 29.07.26, 04.08.26 |
| OG4 West | 6 | 5 | 4 (19.04.26–15.09.26) | 23.07.25, 04.08.25, 19.04.26, 05.08.26, 18.08.26, 15.09.26 |
| EG Bistro | 5 | 4 | 4 (21.01.25–19.08.25) | 21.01.25, 10.07.25, 09.08.25, 19.08.25, 18.08.26 |
| Technikzentrale | 5 | 4 | 4 (22.04.26–24.07.26) | 05.06.25, 22.04.26, 06.06.26, 28.06.26, 24.07.26 |
| Teeküche OG1 | 5 | 4 | 4 (15.05.26–01.08.26) | 28.06.25, 15.05.26, 29.05.26, 21.07.26, 01.08.26 |
| EG Forum | 4 | 3 | 3 | 19.07.25, 16.07.26, 28.07.26, 24.08.26 |
| Kern 1 Treppenhaus | 4 | 3 | 3 | 27.06.25, 12.07.25, 17.02.26, 10.07.26 |
| EG Westfoyer | 4 | 2 | 3 | 22.01.25, 23.07.26, 24.07.26, 04.08.26 |
| Kern 2 Treppenhaus | 4 | 2 | 2 | 15.05.25, 10.07.25, 01.08.26, 07.09.26 |
| Besprechungsraum OG3 | 3 | 2 | 3 | 04.07.25, 30.07.25, 09.06.26 |
| OG1 Ost | 3 | 2 | 3 | 16.08.25, 15.06.26, 26.07.26 |
| OG2 Ost | 3 | 2 | 3 | 31.07.25, 12.09.25, 27.07.26 |
| Teeküche OG2 | 3 | 2 | 3 | 05.06.25, 27.06.25, 16.07.25 |
| UG Lager | 3 | 2 | 3 | 29.08.25, 24.07.26, 22.08.26 |
| OG3 Büro Nord | 3 | 1 | 2 | 02.06.25, 30.07.26, 09.08.26 |
| OG1 West | 2 | 1 | 2 | 28.08.25, 10.09.25 |
| OG4 Ost | 2 | 1 | 2 | 12.01.25, 07.06.25 |
| **Summe** | **80** | **58** | | |

[Einsatzliste, Spalten C und H; Rechnung; je Zeile in der CSV Spalten „Einsatz_Nr_im_Raum“, „Tage_seit_letztem_Einsatz_im_Raum“, „Wiederholung_innerhalb_12_Monaten“]

**Dieselben Räume schon vor 2025:** Das Firmenbriefing führt Schriftwechsel zu genau diesen Räumen seit 2017, u. a. „Büro im EG Bistro zu warm“ (2017), „Raum UG Lager heizt sich auf“ (2018), „Büro im OG2 Ost zu warm“ (2018), „Büro im Teeküche OG2 zu warm“ (2018), „Temperatur OG5 über 27 Grad“ (2020), „Temperatur Technikzentrale über 27 Grad“ (2020), „Büro im OG3 Büro Nord zu warm“ (2020), „Büro im OG3 Büro Süd zu warm“ (2021), „Raum EG Forum heizt sich auf“ (2021), „Büro im Kern 2 Treppenhaus zu warm“ (2023), „Raum OG5 heizt sich auf“ (2025) [Firmenbriefing, S. 10–11, Abschnitt 14]. Torwinkel führt „Büro im OG3 Büro Nord zu warm“ seit 22.07.2020 [Postfach Nr. 4, 21.10.2026] und „Büro im Kern 2 Treppenhaus zu warm“ seit 24.07.2026 [Postfach Nr. 5, 02.11.2026]; letzteres passt zu TKT-113312, gemeldet 24.07.2026 [Einsatzliste, Zeile 70].

### 1.3 Besteller

| Besteller | Einsätze | Zeitraum (Einsatz am) | Bestellgrenze EUR | höchster Betrag EUR netto | Summe EUR netto | über der Grenze |
|---|---|---|---|---|---|---|
| Torwinkel, Haustechniker | 68 | 12.01.2025–15.09.2026 | 500 | **381,47** (TKT-112491, AUF-2486, Teeküche OG2, 27.06.2025) = 76 % | 17.209,19 | 0 |
| Torwinkel, FM-Objektleitung | 12 | 09.06.2026–07.09.2026 | 200 | **198,39** (TKT-113393, AUF-2656, Kern 2 Treppenhaus, 07.09.2026) = 99,2 % | 1.988,50 | 0 |
| **Gesamt** | **80** | | | | **19.197,69** | **0** |

[Einsatzliste, Spalten F, G, H, M; Rechnung]

- **Alle 80 Bestellungen kamen von Torwinkel**, keine von Raumlot oder Kantbogen direkt [Einsatzliste, Spalte F].
- **Kein Einsatz lag über der Bestellgrenze.** Bei der FM-Objektleitung lagen 5 von 12 Beträgen bei 90 % der Grenze oder darüber (vier Mal 182,08 EUR = genau 2,00 h, einmal 198,39 EUR) [Einsatzliste, Zeilen 57, 69, 74, 81, 83; Rechnung].
- Die FM-Objektleitung bestellt erst ab Juni 2026 [Einsatzliste, Spalte F]. Warum, ist in den Unterlagen nicht belegt.
- **AUF-2656:** Die Bestellung vom 07.09.2026 nennt einen Kostenrahmen von 198,39 EUR netto, „innerhalb des Freigabelimits der Rolle FM-Objektleitung“ [Postfach Nr. 2, 07.09.2026]. Abgerechnet wurden **genau 198,39 EUR** (2,25 h × 65,24 + 51,60), Einsatz am selben Tag 07.09.2026, Rechnung 2026/3321, bezahlt [Einsatzliste, Zeile 83]. Kostenrahmen und Rechnungsbetrag sind centgenau gleich. Raumlot könnte fragen, wie das zustande kam [Vermerk, keine Bewertung].
- Die Einsatzliste nennt nur Rollen, keine Namen. Die Bestellung AUF-2656 ist von Nora Wendel unterschrieben [Postfach Nr. 2].

### 1.4 Welche Anlagen Luftpfad wartet und welche nicht

**Wartet Luftpfad (Vertrag VTR-1005, Leistungen laut Briefing Abschnitt 8)** [Firmenbriefing, S. 4–7, Abschnitt 8; Vertrag 04.03.01.018, S. 1, Titel und § 1]

- RLT-Anlagen: Zentrale RLT-Anlage, RLT-Gerät B Bürobereiche und Etagenzentralen, Zusatz-RLT Gastronomie, RLT UG (Abscheider- und Entwässerungsräume), Sanitärfortluft Ost und West, Küchenabluft Gastronomie, jeweils mit Ventilatoren, Filtern, Wärmerückgewinnung, Kondensat
- **Heizseite der Lüftung:** Heizregister der Zuluft, Lufterhitzer (RLT A, RLT B, Etagenzentralen EG/1.OG, Gastro-RLT, RLT UG), Mischer, Stellantriebe und Strangventile am Heizkreisverteiler der Etagenzentralen EG/1.OG
- Volumenstromregler Zuluft EG bis 5.OG, Volumenstromregler Etage EG bis 5.OG, Volumenstromregler Forum
- Fühler und Raumbediengeräte (Sammelposten UG bis 5.OG), Stellantriebe Ventile und Klappen
- Gebäudeautomation: Automationsstationen, Schaltschränke, Racks, Unterverteilungen GA (48 Monate)
- Brandschutzklappen, CO-Warnanlage Tiefgarage
- Der Vertragstitel nennt auch **Gasanlagen**; im Leistungsverzeichnis des Briefings steht keine Gas-Position [Vertrag, S. 1, Titel; Firmenbriefing, S. 4–7]. Maßgeblich wäre Anlage 1 (Anlagenliste): „Anlagen, die dort nicht stehen, sind von diesem Vertrag nicht erfasst“ [Vertrag, S. 1, § 1]. **Anlage 1 bis 3 liegen nicht im Repository** [nicht belegt].

**Wartet Luftpfad nicht**

- **Keine Kälteanlagen:** „Zum eigenen Leistungsangebot gehören keine großen Kälteanlagen, keine Aufzugsarbeiten und keine allgemeine Elektroinstallation“ [Firmenbriefing, S. 1, Abschnitt 1; ebenso Firmensteckbrief 07.04.02.006, 15.03.2018]. „Kälteanlagen gehören nicht zu unserem Leistungsangebot“ [Firmenbriefing, S. 14, Abschnitt 19].
- Im Leistungsverzeichnis steht **kein Kühlregister, kein Kaltwasser und keine Kälteerzeugung**, nur Heizregister und Lufterhitzer [Firmenbriefing, S. 4–7, Abschnitt 8; Durchsicht aller Positionen].
- Kälteservice im Haus macht **Berndt Kältetechnik GmbH** („Kälteservice und Kältesatztausch“) [Firmenbriefing, S. 3, Abschnitt 6]. Ob es im Haus eine zentrale Kälteversorgung gibt und was sie versorgt, steht in keiner Unterlage im Repository [nicht belegt].
- Aufzüge (Höhenlauf Aufzugservice), Elektroinstandhaltung (Kreisbogen Elektrotechnik), abgegrenzte Sanitärarbeiten (Thermenfeld) [Firmenbriefing, S. 3, Abschnitt 6].
- Nicht beauftragt ist außerdem die **monatliche Filterkontrolle** (handschriftlicher Randvermerk) [Vertrag, S. 1, § 2].

### 1.5 Antwort an Raumlot: Gerüst bis der Prüfauftrag da ist

Der Prüfauftrag von Raumlot (höchstens fünf Fragen) liegt **noch nicht vor** [A165_…pdf, S. 2, „Übergabe“]. Die drei Spalten unten sind nach der Aufgabe gebildet [A165_…pdf, S. 1, Teil 2 und „Was Sie abgeben“]. Sobald die Fragen in K05 liegen, wird jede Frage einer Zeile zugeordnet.

| Erwartbares Thema | aus eigenen Unterlagen belegt | braucht eine Messung | gehört nicht zu Luftpfad |
|---|---|---|---|
| Wie oft war Luftpfad in welchen Räumen? | ja: Abschnitte 1.1–1.3 | – | – |
| Liegt die Hitze an der Lüftung (Volumenstrom, Zulufttemperatur, Heizventil)? | nur teilweise: Wartungsumfang (1.4); acht Einsätze in der Heizzeit (1.1); Volumenstrom Forum am 30.10.2026 1.110 m³/h bei Soll 1.080 [Postfach Nr. 16]; Verdacht Ventil Lufterhitzer EZ EG „ausdrücklich eine Vermutung ohne Messung“ [ebd.] | **ja** (Vorschlag unten) | – |
| Liegt die Hitze an der Kälteversorgung? | nur: Kälte ist nicht im Leistungsangebot und nicht im Leistungsverzeichnis (1.4) | Kälteleistung selbst: nicht durch Luftpfad | **ja**: Kälteanlage, Kaltwasser, Kälteservice (Berndt Kältetechnik) |
| Hätte eine Gewährleistung genutzt werden müssen? | teilweise: Haus fertig 2017 [Firmenbriefing, S. 3, Abschnitt 6]; Wartung ging zum 03.04.2018 von Ostrau Klimatechnik an Luftpfad, Ostrau schrieb, die Gewährleistung gelte nur bei Wartung durch Ostrau oder einen zertifizierten Betrieb, der Brief wurde abgelegt, nicht beantwortet [Personenbriefing Selim Ahrens, S. 4, Abschnitt 12]; 08.10.2019 lehnte Ostrau die Gewährleistung für den Forum-Regler ab [ebd., S. 3]; nach § 15 prüft Luftpfad „vor Beginn die Garantiebedingungen und teilt abweichende Anforderungen mit“ [Vertrag, S. 3, § 15] | – | Laufzeit der Gewährleistung des Errichters und Garantieunterlagen liegen beim Auftraggeber [Vertrag, S. 3, § 15], nicht im Repository |
| Wer zahlt künftig? | Störungsbeseitigung wird nach Zeitaufwand vergütet, „soweit die Pauschale sie nicht deckt“ [Vertrag, S. 1–2, § 5]; Mängel der Wartungsleistung beseitigt Luftpfad kostenfrei [Vertrag, S. 3, § 13] | – | Entscheidung über Kostenübernahme liegt bei Kantbogen/Torwinkel/Raumlot |

**Vorschlag Messung (Behalten: Stunden, Termin, Person entscheidet Selim; Preis mit Henrike Baum)**

| Teil | Inhalt | Stunden | Termin (außerhalb der Spitzen aus A162) | Person |
|---|---|---|---|---|
| A | In den fünf häufigsten Räumen (1.1): Volumenstrom am Auslass, Zuluft- und Raumtemperatur, Stellung Volumenstromregler und Heizventil; Trend der zugehörigen Automationsstation abziehen | 8 h [Annahme] (5 × 1 h vor Ort, 1 h Trendabzug, 2 h Auswertung) | **Februar 2027**: im Terminvorschlag A162 nur drei Positionen (19050, 19068, 19073) [KI_Ergebnis_A162_v1.md, Abschnitt 1.1] | Elena Voss (Regelung) [Firmenbriefing, S. 1, Abschnitt 1] und Kevin Schuster (vor Ort) |
| B | Temperaturlogger in denselben Räumen über einen warmen Zeitraum, setzen und abholen, Auswertung | 5 h [Annahme] (2 × 1,5 h vor Ort, 2 h Auswertung) | **erste Junihälfte 2027**: keine Abschaltungen im Juni, vor der Einsatzspitze Juli; Mai und September sind Wartungsspitzen [KI_Ergebnis_A162_v1.md, Abschnitte 1.1 und 1.3] | Kevin Schuster, Auswertung Elena Voss |

- Grund für zwei Teile: Im Winter lässt sich die Lüftungsseite (Volumenstrom, Heizventil) prüfen, die Sommerhitze aber nur im Sommer [Annahme].
- **Rechenbeispiel, kein Preis:** 13 h × 65,24 EUR (Satz 2026) + 3 Anfahrten × 51,60 EUR = 848,12 + 154,80 = **1.002,92 EUR netto** [Rechnung; Sätze aus Einsatzliste 2026; Sätze 2027 nicht belegt]. Den Preis legt Selim mit Henrike Baum fest [A165_…pdf, S. 1].
- Kevin Schuster ist Mechatroniker für Kältetechnik [Firmenbriefing, S. 9, Abschnitt 10] und könnte vor Ort erkennen, ob die Kälteseite beteiligt ist. Die Kälteanlage selbst bleibt trotzdem außerhalb des Leistungsangebots (1.4) [Vorschlag].
- Tobias Kernfeld ist nicht fest eingeplant: Henrike Baum hat gesagt, er soll nicht für jeden Bogenfeld-Termin eingeplant werden (aus dem eigenen Personenbriefing, nur für Selim Ahrens) [Personenbriefing Selim Ahrens, S. 4, Abschnitt 13].

**Entwurf der Antwort (Teilen, bis die Fragen da sind nur Rahmen)**

> Sehr geehrte Damen und Herren,
>
> vielen Dank für Ihren Prüfauftrag vom [Datum]. Wir antworten je Frage und trennen, was wir aus unseren Unterlagen belegen können, was eine Messung braucht und was nicht zu unseren Leistungen gehört.
>
> Frage 1: [Wortlaut] – [Art] – [Antwort mit Fundstelle]
> … (bis Frage 5)
>
> Für die Messung schlagen wir [Teil A/B, Stunden, Termin, Person] vor. Kälteanlagen gehören nicht zu unserem Leistungsangebot; dazu wenden Sie sich bitte an den Kälteservice des Hauses.
>
> Mit freundlichen Grüßen
> Henrike Baum, Technische Geschäftsführung
> [Unterschrift]

[Anrede und Gruß nach Personenbriefing Selim Ahrens, S. 2, Abschnitt 5; Unterschrift Henrike Baum nach A165_…pdf, S. 1]

---

## 2 Was die Gruppe selbst entscheiden oder liefern muss

**Fehlt von außen (Grund für Status „infos“)**

- **Prüfauftrag von Raumlot** (Farid Mertens, höchstens fünf Fragen) in Uebergaben/K05, bis 30.11. Fehlt er am Morgen danach, legt die Spielleitung einen in denselben Ordner [A165_…pdf, S. 2, „Was die liefernde Gruppe dazu tut“ und „Übergabe“]. Bitte die Datei in die Ablage dieses Projekts legen oder als Info eintragen.

**Behalten (Vorschläge, Selim entscheidet)**

1. **Welche Ursache Luftpfad vertritt.** Die Daten zeigen beides: 64 von 80 Einsätzen im Sommer (spricht für Kühllast), aber acht in der Heizzeit und ein offener Verdacht auf das Heizventil der EZ EG (spricht für Lüftung/Heizung) (1.1, 1.5). Vorschlag: **keine der beiden Ursachen schriftlich vertreten, bevor gemessen ist**, sondern „Ursache offen, Messung Teil A/B“. Grund: Beide Antworten haben Folgen [A165_…pdf, S. 1, „Ihre Entscheidung“]. Wenn die Hitze an der Kälte lag, hat Luftpfad an etwas verdient, das es nicht beheben konnte; wenn an der Lüftung, hat Luftpfad sie zwei Sommer lang nicht behoben (aus dem eigenen Personenbriefing, nur für Selim Ahrens) [Personenbriefing Selim Ahrens, S. 4, Abschnitt 13].
2. **Ob die Bilanz von sich aus gezeigt wird.** Vorschlag: **ja, die Tabellen 1.1–1.3 offen beilegen.** Gründe: (a) Raumlot fragt nach jeder Antwort ohnehin, was Luftpfad in denselben Räumen getan hat [A165_…pdf, S. 1]; (b) alle Einsätze waren von Torwinkel bestellt, unter der Bestellgrenze und bezahlt (1.3); (c) Raumlot sammelt die Beschwerden und gleicht sie mit dem Ticketjournal ab [A165_…pdf, S. 2], findet die Wiederholungen also auch selbst. In Ihrer Disposition liegt kein Angebot für eine Ursachenklärung über den einzelnen Einsatz hinaus (aus dem eigenen Personenbriefing, nur für Selim Ahrens) [Personenbriefing Selim Ahrens, S. 4, Abschnitt 13]; das ist eine Lücke, die Raumlot ansprechen kann.
3. **Zählregel** alle 80 oder 72 (1.1) und Regel für Platz 5 der häufigsten Räume.
4. **Termin, Stunden und Person der Messung** (1.5), abgestimmt mit der endgültigen Terminliste A162.
5. **Preis der Messung** mit Henrike Baum; Henrike unterschreibt die Antwort.
6. **Lernprotokoll:** Absatz zur Entscheidung (Ursache, Bilanz offen ja/nein) [A165_…pdf, S. 1, „Was Sie abgeben“].

**Liefern**

- Antwort bis 2.12. in Uebergaben/K05 und kurze Nachricht an Raumlot im Kurschat Objektwelt [A165_…pdf, S. 2, „Übergabe“].
- Bildschirmfotos der drei wichtigsten Originalstellen (Vorschlag: Einsatzliste Zeilen 5–84 mit Summenzeile; Postfach Nr. 2 Kostenrahmen 198,39 EUR; Firmenbriefing S. 1 „keine großen Kälteanlagen“) [A165_…pdf, S. 2, „Woran es gemessen wird“, Punkt 2].
- Drei Werte selbst in der Tabelle nachprüfen und im Lernprotokoll vermerken [A165_…pdf, S. 2, „Tabellen“].

**Fragen, die Raumlot stellen könnte (zur Vorbereitung auf den 2.12.)**

- **Reaktionszeit:** Nach § 5 beginnt Luftpfad bei Störungsmeldung per E-Mail oder Einschreiben innerhalb von acht Stunden [Vertrag, S. 1, § 5]. Nur 9 der 80 Einsätze lagen am Meldetag, 16 am Folgetag, 55 zwei oder mehr Tage später, 21 sieben Tage oder später (höchstens 9 Tage) [Einsatzliste, Spalten B und H; Rechnung]. Ob diese Meldungen „Störungen“ im Sinn von § 5 waren, ist nicht belegt.
- **Wochenende:** 21 Einsätze lagen an Samstag oder Sonntag, abgerechnet zu denselben Sätzen [Einsatzliste, Spalten H, J; Rechnung]. Luftpfad ist „werktags 07:00 bis 17:00“ erreichbar, andere Termine „werden gesondert vereinbart“ [Firmenbriefing, S. 1, Abschnitt 1].
- **Anfahrt:** 80 × Anfahrt = 4.086,00 EUR [Rechnung]. Die Pauschale deckt Arbeitszeit und Anfahrt für die Leistungen nach Anlage 2 [Vertrag, S. 1, § 3]; ob Anfahrt bei Störungen gesondert berechnet werden darf, regelt Anlage 3, die nicht vorliegt [nicht belegt].
- **Offene Vorgänge:** Telefonnotiz Raumlot (Judith Ahlers) vom 03.08.2026 zu Kern 2 Treppenhaus mit Wiedervorlage 17.08.2026 [Postfach Nr. 1]; Torwinkel fragt zu Kern 2 und OG3 Büro Nord nach dem Stand [Postfach Nr. 4 und 5]. Beides sollte vor dem 2.12. beantwortet oder in die Antwort aufgenommen werden (vgl. KI_Ergebnis_A007_v1.md, Punkte 1, 12, 13).

---

## 3 Geprüft

1. **Gesamtzahl 80 Einsätze und 210,25 h:** Zeilen 5–84 einzeln gezählt (80 Zeilen mit Ticketnummer, Zeile 85 leer, Zeile 86 Summenformeln `=SUM(I5:I84)`); Stunden mit Python summiert = 210,25; die Zahl 80 stimmt mit dem Firmenbriefing überein [Einsatzliste; Firmenbriefing, S. 14, Abschnitt 19].
2. **Höchster Betrag FM-Objektleitung 198,39 EUR:** in der XLSX Zeile 83 (TKT-113393, 2,25 h × 65,24 + 51,60 = 198,39) und gegen die Bestellung im Postfach geprüft: „Kostenrahmen netto 198,39 EUR“, AUF-2656, Ticket TKT-113393 [Einsatzliste, Zeile 83; Postfach Nr. 2].
3. **Höchster Betrag Haustechniker 381,47 EUR:** Zeile 19 (TKT-112491) nachgerechnet: 3,75 × 63,91 = 239,66; + 50,55 Anfahrt + 91,26 Material = 381,47 [Einsatzliste, Zeile 19]. Zusätzlich alle 80 Nettobeträge mit derselben Formel nachgerechnet, keine Abweichung.

Die XLSX ist eine digitale Datei, kein Scan; eine Prüfung per Bild war nicht nötig. Der Vertrag ist ein Scan mit Texterkennung; die zitierten Stellen (§ 3, § 5, § 13, § 15) enthalten keine Zahlen, die in die Bilanz eingehen, bis auf den Satz 54,70 EUR, der nur als Vergleich genannt ist.

## Vermerke

- Kein Inhalt der Unterlagen für A165 richtete sich an eine KI oder „automatische Verarbeitung“. Der bekannte Zusatz in Postfach Nr. 11 gehört nicht zum Material dieses Projekts und wurde nicht verwendet.
- Persönliche Stellen aus dem Personenbriefing von Selim Ahrens sind oben markiert und nur für ihn bestimmt.
