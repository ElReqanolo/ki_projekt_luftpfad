# KI-Ergebnis A162: Wartungstermine 2027 und Abschaltungen festlegen

- **Projekt:** A162, Kette „Jahresterminplan 2027“, Schritt 1 von 2 [A162_Wartungstermine_2027_und_Abschaltungen_festlegen.pdf, S. 1, Kopf]
- **Runde:** 1
- **Datum:** 19.11.2026
- **Federführend:** Selim Ahrens (Person 3), beteiligt Personen 5 und 1 [data/site.json, Projekt A162]
- **Frist:** Terminliste bis 25.11. in Uebergaben/K63, Rückmeldung Torwinkel und Abstimmungsnotiz Thermenfeld bis 30.11., Abgabe 2.12. [A162_…pdf, „Übergabe“; 00_Bis_zum_2_12.md, Zeile 25.11.]
- **Rechentabelle:** `KI_Ergebnis_A162_v1.csv` (99 Zeilen: 97 Positionen des Plans 2026 und 2 Positionen, die nur im Briefing stehen; mit Python aus der XLSX erzeugt, Trennzeichen Semikolon)

## Vorbemerkung

- Die Aufgabe sagt, was **Behalten** ist: welche Termine mit Abschaltung festgelegt werden, die Sommerreserve und welches Personal eingesetzt wird [A162_…pdf, „Einsatz von KI“]. Alles dazu ist unten ein **Vorschlag mit Begründung**. Selim entscheidet.
- **Abgegeben** werden darf der Umbau des Plans 2026 in eine Tabelle für 2027 und das Zählen der Einsätze je Monat. **Geteilt** wird der Abgleich Plan gegen Protokolle [ebd.]. Das liefert diese Datei vollständig.
- **Feiertage:** Das Haus liegt in Stuttgart-Vaihingen [Firmenbriefing, S. 3, Abschnitt 6], Luftpfad sitzt in Stuttgart [Firmenbriefing, S. 1, Abschnitt 1]. Deshalb wurden die Feiertage von **Baden-Württemberg** angesetzt, nicht die von Niedersachsen [Annahme]. Ostern 2027 ist der 28.03. Feiertage an Werktagen: 01.01. (Fr), 06.01. (Mi), 26.03. (Fr), 29.03. (Mo), 06.05. (Do), 17.05. (Mo), 27.05. (Do), 01.11. (Mo). Der 01.05., der 03.10. und der 25./26.12. fallen auf Sa/So [Rechnung mit Python, Annahme BW].
- **Dauer in Stunden:** Der Plan 2026 nennt keine Dauern [04.05.028_2025-11-15_Jahresterminplan_Torwinkel.xlsx, Blatt „Jahres-, Prüf“, Spalten OZ bis „Fällig im Monat“]. Belegt sind nur sechs Dauern aus den Wartungsprotokollen 2026 (siehe 1.1). Alle anderen Dauern stehen als „nicht belegt“ in der CSV. Hier wurde **keine Zahl erfunden**.

---

## 1 Ergebnis

### 1.1 Terminliste 2027

**Vollständige Liste:** `KI_Ergebnis_A162_v1.csv`. Ihre Spalten folgen den Pflichtangaben: Anlage, Leistung, Monat (Plan 2026 und Vorschlag 2027), Dauer in Stunden mit Quelle, Abschaltung ja/nein mit Art, Personal (Vorschlag), Betroffene nach Flächenspiegel, was im selben Zeitraum sonst in den Unterlagen liegt, Begründung und Quelle mit OZ [A162_…pdf, „Was Sie abgeben“, Punkt 1].

**Wie die Tabelle entstanden ist**

1. Grundlage sind die 97 Positionen des Plans 2026 mit Intervall und Fälligkeitsmonat [04.05.028, Blatt „Jahres-, Prüf“, Zeilen 2–98].
2. Die Intervalle stimmen bei allen Positionen, die sich zuordnen lassen, mit dem Leistungsverzeichnis im Briefing überein (12, 36, 3 und 6 Monate) [Firmenbriefing, S. 4–7, Abschnitt 8; Abgleich mit Python].
3. Zwei Positionen stehen im Briefing, fehlen aber im Plan. Sie sind in der CSV ergänzt: die Hygieneinspektion RLT UG (36 Monate) und die Prüfung der Unterverteilungen der Gebäudeautomation (48 Monate) [Firmenbriefing, S. 5 und S. 6, Abschnitt 8].
4. Eine Position wurde aus einem dieser drei Gründe verschoben: (a) Plan und Protokoll nennen verschiedene Monate, dann gilt der tatsächliche Rhythmus; (b) eine Abschaltung fiele in Juni bis August (Sommerregel, siehe 1.3); (c) Abschaltungen derselben Anlage lassen sich in einem Fenster bündeln. Die Begründung steht in jeder Zeile der CSV.
5. **Abschaltung ja/nein:** In den Unterlagen ist das nur einmal belegt. Nach der Prüfung der Wärmerückgewinnung der Etagenzentralen steht im Protokoll „Anlage nach Wartung wieder in Betrieb“ [04.21.04.192_2026-11-02_Wartungsprotokoll, S. 1]. Alle anderen Einstufungen sind eine technische Annahme nach der Art der Leistung [Annahme]. Danach schalten ab: Wartung Zentralgerät, Hygieneinspektion, Ventilator und Antrieb, Wärmeübertrager, Register, Absperr- und Außenluftklappen sowie die Reinigung der Küchenabluft (ganze Anlage), außerdem Volumenstromregler (geschossweise) und Brandschutzklappen (abschnittsweise). Keine Abschaltung: Filterkontrolle, Fühler und Stellantriebe, Automationsstationen, Racks, Mischer, Kondensathebeanlagen.
6. **Betroffene:** Sie sind über den Anlagennamen dem Geschoss im Flächenspiegel zugeordnet [03.10.02.017_2026-11-03_Flaechenspiegel, S. 1; Zuordnung Anlage → Bereich: Annahme]. Für „Zentrale RLT-Anlage“ und „RLT-Zentralgerät, Gebäudeautomation“ ist der Versorgungsbereich in den Unterlagen **nicht belegt**. Dort steht deshalb vorsorglich „alle Mieter“.

**Ergebnis in Zahlen** [Rechnung mit Python aus der CSV]

| | Plan 2026 | Vorschlag 2027 |
|---|---|---|
| Positionen | 97 | 99 (2 ergänzt, davon 1 mit offenem Monat) |
| Positionen mit Abschaltung | – | 59 (davon nur 1 belegt, 58 nach Annahme) |
| Termine Jun / Jul / Aug | 5 / 13 / 5 | 3 / 4 / 3, **keine davon mit Abschaltung** |
| Termine Sep | 11 | 20 (15 mit Abschaltung) |

**Abschaltfenster 2027 (zusammengefasst, Vorschlag)**

| Monat | Anlage / Bündel | Leistungen (OZ) | Dauer h | Abschaltung | Personal (Vorschlag) | Betroffene (Flächenspiegel) | sonst im Zeitraum |
|---|---|---|---|---|---|---|---|
| Jan | RLT A, Außenluft, Zuluft 1./3.OG, RLT B, RLT UG, Küchenabluft | 21014, 19021, 19029, 19042, 19044, 19051, 19076 | nicht belegt | ja | Felix Thom / Philipp Wiese | Küche Hofmaß (21014); 1.OG Signalsteg, Feldkreis; 3.OG Achsenraum, Bauteilbogen; sonst nicht belegt | Kündigungszugang VTR-1005 für Ende 02.04.2027 spätestens 02.01.2027 (Sa) [04.03.01.018, S. 2, § 11; Rechnung] |
| Feb | RLT B, Gastro-RLT, RLT UG | 19050, 19068, 19073 | nicht belegt | ja | Philipp Wiese | Büros 1.–5.OG (19050, RLT B); Hofmaß (19068); RLT UG ohne Mietfläche (19073) | – |
| Mär | WRG getrennte Luftwege, RLT A, Gastro-RLT, RLT UG | 19023, 19036, **19067**, 19075 | 1,0 (19067) [04.21.04.180, S. 1] | ja | Philipp Wiese | Hofmaß (19067) | Karfreitag 26.03., Ostermontag 29.03. [Annahme BW] |
| Apr | Sanitärfortluft, Abluftventilator, RLT A, Zuluft 4.OG, Etage 2./3.OG | **19013**, 19027, 19033, 19045, **19061**, **19062** | 1,5 (19013) [04.21.04.184, S. 1]; 4,0 (19062) [04.21.04.182, S. 1] | ja | Felix Thom mit Kevin Schuster | alle Mieter (Sanitär); 2.OG Raumpuls, Pfadklar; 3.OG Achsenraum, Bauteilbogen; 4.OG Werkraum, Raumpuls | Ende der laufenden Vertragsperiode am 02.04.2027, falls gekündigt [04.03.01.018, S. 2, § 11] |
| Mai | **Zentrale RLT-Anlage (Jahreswartung)**, RLT UG, Fortluft, RLT A Lufterhitzer, Etage EG, Sanitärfortluft West, GA-Zentralgerät | **19003**, **19012**, **19028**, **19032**, 19037, **19059**, **19077**, 19080, 34089 | nicht belegt | ja | Philipp Wiese, Vertretung Felix Thom | vorsorglich alle Mieter; EG Hofmaß, Lernhafen, Achsenraum | nur 18 Arbeitstage (Feiertage) [Annahme BW] |
| Jun–Aug | – (nur Filter, Fühler, Automation ohne Abschaltung) | 19047, 19072, 19097, 34086, 34101, Filter vierteljährlich | 2,5 je Filtertermin Abluft (19026) [04.21.04.189, S. 1] | nein | Elena Voss, Kevin Schuster | – | Einsatzspitze „zu warm“ (1.2) |
| **Sep** | **Hygieneinspektion** (alle sechs RLT-Anlagen) | 19002, 19005, 19008, 19079, 34088, RLT UG (ergänzt) | nicht belegt | ja | **offen** | alle Mieter; Gastro; Büros 1.–5.OG | fällig spätestens Okt 2027 (1.4) |
| **Sep** | **Brandschutzklappen** (Sammelposten mit Küchenabluft, RLT A, RLT UG, Sanitärfortluft West) | 19015, 19035, 19074, 19081, 21083 | nicht belegt | ja, geschossweise | **offen** | 1.UG bis 5.OG, alle Mieter [04.21.04.190, S. 1, Prüfumfang] | „Nächste Prüfung laut Plan: 02.10.2027“ [04.21.04.190, S. 1] |
| **Sep** | **Gastro-Fenster** (Zusatz-RLT, Ventilator, Fettfilter, Küchenabluftventilator) | 19009, 19066, **19069**, **21082** | nicht belegt | ja | Felix Thom / Philipp Wiese | Hofmaß Betriebsgastronomie, Bistro mit Küche, EG, 318,59 m² | zusammen mit Hygiene 19008 und Klappen 21083 legen |
| Okt | RLT B (Wartung und Ventilator gebündelt), Heizregister, Antriebe, Zuluft 2.OG | 19006, **19048**, 19024, 19039, 19043 | nicht belegt | ja | Philipp Wiese | Büros 1.–5.OG; 2.OG Raumpuls, Pfadklar | RLT-Besetzung zwei Wochen anderweitig reserviert (aus dem eigenen Personenbriefing, nur für Selim Ahrens) |
| Nov | Etagenzentralen EG/1.OG (gebündelt), Etage 1.OG, Etage 4.OG | **19054**, 19055, **19056**, 19060, **19063** | 4,0 (19056) [04.21.04.192, S. 1]; 2,0 (19063) [04.21.04.193, S. 1, Scan geprüft] | ja | Philipp Wiese; Felix Thom | EG Hofmaß, Lernhafen, Achsenraum; 1.OG Signalsteg, Feldkreis; 4.OG Werkraum, Raumpuls | Allerheiligen 01.11. [Annahme BW] |
| Dez | Forum, Zuluftventilator, Zuluft EG/5.OG, Etage 5.OG | 19018, 19025, 19041, 19046, 19064 | nicht belegt | ja | Felix Thom | Forum (Mieter im Flächenspiegel nicht genannt); EG; 5.OG Werkraum | – |

Fett gedruckte OZ wurden gegenüber dem Plan 2026 verschoben. Die Begründungen stehen in der CSV und in 1.5.

**Offen gelassene Termine:** die Prüfung der Unterverteilungen (letzte Prüfung nicht belegt; elektrische Prüfung gehört nicht zum Leistungsangebot) [Firmenbriefing, S. 1, Abschnitt 1; S. 6, Abschnitt 8]. Beim Personal sind Hygieneinspektion und Brandschutzklappen offen (1.4).

**Kapazität:** 14 Personen im technischen Außendienst und drei in Planung und Automation. Bogenfeld steht nicht jeden Tag zur Verfügung [Firmenbriefing, S. 1, Abschnitt 1]. Selim setzt Tobias Kernfeld „nicht bei jedem Auftrag“ voraus, weil Kapazität für andere Kunden frei bleiben muss [Personenbriefing Selim Ahrens, S. 1 und S. 2, Abschnitt 7]. Henrike Baum hat außerdem gesagt, dass Tobias nicht für jeden Bogenfeld-Termin eingeplant werden soll (aus dem eigenen Personenbriefing, nur für Selim Ahrens). Tobias ist deshalb nirgends fest eingeplant, sondern nur als Reserve vorgesehen [Vorschlag].

### 1.2 Monatsauswertung der Einsätze 2025 und 2026

Quelle: 80 Zeilen (Zeilen 5–84), alle „bezahlt“, Summe Std Monteur 210,25 h. Das entspricht der Summenformel `=SUM(I5:I84)` in der Datei [Einsaetze_Raumklima_Bogenfeld_2025_2026.xlsx, Blatt Einsaetze; Rechnung mit Python]. Die Zahl 80 nennt auch das Briefing [Firmenbriefing, S. 14, Abschnitt 19].

**Mögliche Zählbasen:** Nur zwei Spalten haben ein Datum, **„gemeldet“** (Spalte B) und **„Einsatz am“** (Spalte H). „Ticket“ und „Rechnung“ sind Nummern ohne Datum und taugen nicht für eine Monatszuordnung [ebd., Kopfzeile 4].

**Vorgeschlagene Zählbasis: „Einsatz am“.** Grund: Die Reserve soll Monteurstunden freihalten, und die Stunden wurden am Einsatztag gebunden [Vorschlag]. Die Spalte „gemeldet“ zeigt dagegen, wann die Hitze auftrat.

| Monat | 2025 gemeldet: Anzahl / Std | 2025 Einsatz am: Anzahl / Std | 2026 gemeldet: Anzahl / Std | 2026 Einsatz am: Anzahl / Std |
|---|---|---|---|---|
| Jan | 3 / 8,25 | 3 / 8,25 | 0 / 0 | 0 / 0 |
| Feb | 0 / 0 | 0 / 0 | 1 / 3,00 | 1 / 3,00 |
| Mär | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 |
| Apr | 1 / 2,50 | 1 / 2,50 | 2 / 6,00 | 2 / 6,00 |
| Mai | 3 / 9,50 | 1 / 3,75 | 2 / 7,25 | 2 / 7,25 |
| **Jun** | 8 / 26,75 | 10 / 32,50 | 6 / 13,75 | 6 / 13,75 |
| **Jul** | 12 / 30,00 | 12 / 30,00 | **22 / 54,25** | **16 / 39,00** |
| **Aug** | 9 / 18,75 | 9 / 18,75 | 5 / 13,50 | 11 / 28,75 |
| Sep | 3 / 7,25 | 3 / 7,25 | 2 / 6,00 | 2 / 6,00 |
| Okt | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 |
| Nov | 1 / 3,50 | 1 / 3,50 | 0 / 0 (bis 18.11.) | 0 / 0 |
| Dez | 0 / 0 | 0 / 0 | – | – |
| **Summe** | 40 / 106,50 | 40 / 106,50 | 40 / 103,75 | 40 / 103,75 |

[alle Werte: Einsaetze_Raumklima_Bogenfeld_2025_2026.xlsx, Blatt Einsaetze, Spalten B, H, I; Rechnung mit Python]

**Monat mit den meisten Einsätzen: Juli 2026, nach jeder Zählbasis.**
- nach „gemeldet“: **22 Einsätze, 54,25 h, 5.060,79 EUR netto**
- nach „Einsatz am“: **16 Einsätze, 39,00 h, 3.685,65 EUR netto**
- Der Unterschied kommt von sechs Tickets, die vom 24. bis 31.07.2026 gemeldet und erst vom 01. bis 05.08.2026 ausgeführt wurden (TKT-113310, -113312, -113314, -113319, -113330, -113335). Zählt man nach „Einsatz am“, ist der August 2026 mit 11 Einsätzen fast so stark wie der Juli. Im Juni 2025 verschieben sich zwei Tickets aus dem Mai (TKT-112424, -112426) [ebd., Rechnung mit Python].
- Die Zahl „im Juli 2026 allein 22 Einsätze“ folgt der Zählbasis „gemeldet“ (aus dem eigenen Personenbriefing, nur für Selim Ahrens) [Personenbriefing Selim Ahrens, S. 4, Abschnitt 13].

**Konzentration:** Juni bis August binden nach „Einsatz am“ 64 von 80 Einsätzen und 162,75 von 210,25 Stunden (2025: 31 Einsätze / 81,25 h; 2026: 33 Einsätze / 81,50 h). Nach „gemeldet“ sind es 62 von 80 Einsätzen [Rechnung mit Python].

### 1.3 Sommerreserve 2027 (Vorschlag)

- **Monate:** Juni, Juli, August 2027.
- **Stunden:** **100 h** insgesamt, als Monatsreserve **Jun 33 h, Jul 39 h, Aug 29 h**. Herleitung: der jeweils höhere Monatswert aus 2025 und 2026 nach „Einsatz am“, aufgerundet: 32,50 + 39,00 + 28,75 = 100,25 h [Rechnung aus 1.2]. Nach „gemeldet“ ergäbe dieselbe Regel 26,75 + 54,25 + 18,75 = 99,75 h. Die Gesamtreserve hängt also kaum von der Zählbasis ab, ihre **Verteilung** aber schon: nach „gemeldet“ läge im Juli eine Reserve von 55 h [Rechnung].
- **Welche Wartung nicht in diese Monate:** keine Leistung mit Abschaltung. Aus Juni bis August herausgenommen wurden die OZ 19003, 19005, 19012, 19028, 19032, 19059, 19061, 19062, 19063, 19067, 19069, 19077 und 21082 (Ziel jeweils in der CSV). Im Sommer bleiben nur Filterkontrollen mit festem Vierteljahresrhythmus sowie Automations- und Fühlerprüfungen ohne Abschaltung (19047, 19072, 19097, 34086, 34101) [CSV; Vorschlag].
- **Begründung:** Eine Abschaltung in der Hitze erzeugt neue „zu warm“-Meldungen und bindet dieselben Leute, die die Einsätze fahren [Annahme]. Juli 2026 war der Spitzenmonat (1.2).
- **Hinweis:** Die Reserve ist **Zeit, die nicht verplant wird**, und kein Auftrag. „Reservierte Zeit ist für ihn noch kein wirksamer Auftrag“ [Personenbriefing Selim Ahrens, S. 1, „Wie Sie arbeiten“].

### 1.4 Die drei heikelsten Termine (Vorschlag mit Fundstelle)

**1. Funktionsprüfung Brandschutzklappen, September 2027 (OZ 19015 mit 19035, 19074, 19081, 21083)**
- Laut Plan im Februar fällig [04.05.028, OZ 19015]. Tatsächlich geprüft wurde am 07.10.2024, 07.10.2025 und 30.09.2026 [04.21.04.145, S. 1; 04.21.04.168, S. 1; 04.21.04.190, S. 1]. In den Protokollen steht als „Nächste Prüfung laut Plan“ jeweils der 02.10. des Folgejahres, zuletzt der 02.10.2027 [04.21.04.190, S. 1]. Der 02.10.2027 ist ein **Samstag** [Rechnung].
- Umfang: 235 Klappen vom 1. UG bis 5. OG und die Absperrvorrichtung der Küchenabluft. Ausgeführt hat die Prüfung jeweils nur Maximilian Backhaus [04.21.04.190, S. 1]. Backhaus hatte am 05.11.2026 seinen letzten Arbeitstag, ohne Übergabe [Firmenbriefing, S. 9, Abschnitt 10]. Auch der Gegenzeichner Dennis Prange von Torwinkel ist gegangen [Firmenbriefing, S. 14, Abschnitt 19].
- Kevin Schuster hat die Sachkunde für Kälteanlagen. Eine Schulung für Brandschutzklappen steht nicht in seiner Akte, und Philipp Wiese war nie dabei (aus dem eigenen Personenbriefing, nur für Selim Ahrens). Laut Postfach Nr. 17 hat Philipp geschrieben: „ich war da nie dabei“ [17_2026-11-18_Klappenpruefung_Bogenfeld.eml].
- Vorschlag: Prüfung spätestens Ende September 2027, damit die zwölf Monate seit 30.09.2026 eingehalten sind [Annahme zur Fristrechnung], und vor der Oktober-Reservierung. Personal **offen**: entweder eine Schulung für Kevin Schuster bis zum Sommer oder ein Nachunternehmer. Ein Nachunternehmer braucht die Zustimmung des Auftraggebers in Textform [04.03.01.018, S. 2, § 12]. Wer eingesetzt wird, muss qualifiziert und namentlich benannt sein [04.03.01.018, S. 2, § 8].

**2. Hygieneinspektion aller RLT-Anlagen, September 2027 (OZ 19002, 19005, 19008, 19079, 34088 und RLT UG)**
- Intervall laut Vertrag 36 Monate [Firmenbriefing, S. 4–6, Abschnitt 8]. Letzte Inspektionen: 24.10.2018, 26.10.2021, 14.10.2024 [Personenbriefing Selim Ahrens, S. 3–4, Abschnitt 12; am Original geprüft]. Damit ist die nächste spätestens im Oktober 2027 fällig (14.10.2027 ist ein Donnerstag) [Rechnung].
- Der Plan 2026 führt die Hygieneinspektionen in **Mär, Jul, Sep, Nov und Mai** [04.05.028, OZ 19002, 19005, 19008, 19079, 34088]. Das passt weder zum Oktober-Rhythmus noch zum Dreijahresabstand (2026 war kein Inspektionsjahr). Die Hygieneinspektion **RLT UG** fehlt im Plan ganz [Firmenbriefing, S. 5, Abschnitt 8].
- Im Oktober 2027 sind zwei Wochen der RLT-Besetzung für einen anderen Kunden reserviert, und bei Torwinkel weiß das niemand (aus dem eigenen Personenbriefing, nur für Selim Ahrens). Daher der Vorschlag September: Die Frist wird eingehalten, der Sommer bleibt frei. Personal **offen**, weil die Qualifikation für Hygieneinspektionen im Team nicht belegt ist [nicht belegt].
- Die Inspektion schaltet nach Annahme jede Anlage ab und trifft damit potenziell alle Mieter, auch das Bistro [03.10.02.017, S. 1; Annahme].

**3. Gastro-Abschaltfenster, September 2027 (OZ 19008, 19009, 19066, 19069, 21082, 21083)**
- Es betrifft Hofmaß Betriebsgastronomie, Bistro mit Küche und Nebenräumen im EG, 318,59 m² [03.10.02.017, S. 1]. Hofmaß betreibt das Bistro [Firmenbriefing, S. 3, Abschnitt 6].
- Laut Plan lagen Fettfilter/Abluftwände (19069) und Küchenabluftventilator (21082) im **Juli**, Zusatz-RLT und Hygiene im **September** [04.05.028]. Vorschlag: alles in ein gemeinsames Fenster im September, damit die Küche nur einmal ohne Abluft ist und keine Abschaltung in den Sommer fällt [Vorschlag]. Ein Wochentag mit geschlossenem Bistro ist in den Unterlagen **nicht belegt**.
- Heikel, weil der September durch Hygieneinspektion und Klappenprüfung ohnehin der vollste Monat ist (20 Termine, 15 mit Abschaltung) [CSV, Rechnung].

*Kandidat, falls die Gruppe anders gewichtet:* die Jahreswartung der Zentralen RLT-Anlage im **Mai** (OZ 19003). Ihr Versorgungsbereich ist nicht belegt, sie trifft also vorsorglich alle Mieter. Der Mai hat nur 18 Arbeitstage [Rechnung, Annahme BW]. Die laufende Vertragsperiode endet am 02.04.2027, falls rechtzeitig gekündigt wird [04.03.01.018, S. 2, § 11].

### 1.5 Stellen, an denen Plan 2026, Protokolle und Briefing verschiedene Termine nennen

Hinweis: Im Repository liegen nur neun Wartungsprotokolle 2024–2026. In der Objektakte gibt es 185 (2018–2026) [Firmenbriefing, S. 1, Abschnitt 2]. Der Abgleich ist also eine Stichprobe.

| Nr. | Anlage / Leistung | Plan 2026 | Protokoll / Briefing | Entscheidung 2027 (Vorschlag) |
|---|---|---|---|---|
| 1 | Brandschutzklappen Sammelposten (19015) | Feb [04.05.028, OZ 19015] | 07.10.2024, 07.10.2025, 30.09.2026; „Nächste Prüfung laut Plan“ 02.10.2025 / 02.10.2026 / 02.10.2027 [04.21.04.145, .168, .190, je S. 1]; Briefing: „jeweils Ende September oder Anfang Oktober“ (aus dem eigenen Personenbriefing, nur für Selim Ahrens) | **Sep 2027** (Ist-Rhythmus, vor Oktober). Torwinkel auf die Abweichung zum Plan hinweisen |
| 2 | Hygieneinspektion, fünf Anlagen (19002, 19005, 19008, 19079, 34088) | Mär / Jul / Sep / Nov / Mai, im Plan 2026 [04.05.028] | 24.10.2018, 26.10.2021, 14.10.2024, „Hygieneinspektion der Raumlufttechnik“ [Personenbriefing Selim Ahrens, S. 3–4, Abschnitt 12] | **Sep 2027** für alle, fällig bis Okt 2027 |
| 3 | Hygieneinspektion RLT UG | fehlt | 36 Monate im Leistungsverzeichnis [Firmenbriefing, S. 5, Abschnitt 8] | ergänzt, **Sep 2027** |
| 4 | Jahreswartung Lüftung / Wartung Zentralgerät Zentrale RLT-Anlage (19003) | Jul [04.05.028, OZ 19003] | 23.06.2025, 24.06.2026 [Personenbriefing Selim Ahrens, S. 3, Abschnitt 12]. Zuordnung „Jahreswartung“ = OZ 19003 ist eine Annahme | **Mai 2027** (vor dem Sommer) |
| 5 | Wärmerückgewinnung Gastro-RLT (19067) | Aug | 30.03.2026; „Nächster Wartungstermin laut Plan: 02.04.2026“ [04.21.04.180, S. 1] | **Mär 2027** |
| 6 | Volumenstromregler Etage 3.OG (19062) | Jul | 29.04.2026; „laut Plan: 02.05.2026“ [04.21.04.182, S. 1] | **Apr 2027** |
| 7 | Sanitärfortluft Ost und West, Ventilator (19013) | Dez | 30.04.2026; „laut Plan: 02.05.2026“ [04.21.04.184, S. 1] | **Apr 2027** |
| 8 | Wärmerückgewinnung Etagenzentralen EG/1.OG (19056) | Feb | 02.11.2026 [04.21.04.192, S. 1] | **Nov 2027** (zwölf Monate Abstand) |
| 9 | Volumenstromregler Etage 4.OG (19063) | Jul | 03.11.2026, Protokoll 09384 [04.21.04.193, S. 1, Scan am Bild geprüft] | **Nov 2027**. Protokoll 09384 ist Gegenstand der Abnahme-Rückfrage (A164); dessen Ergebnis abwarten |
| 10 | Abluft Filteraufnahme (19026) | Jan, Apr, Jul, Okt | 30.09.2026; „laut Plan: 02.10.2026“ [04.21.04.189, S. 1] | Abweichung nur zwei Tage, **Plan bleibt** |
| 11 | „Alter Stellantrieb“ (34019) | Jan, Bezeichnung „Alter Stellantrieb“ | Briefing: „Ersatz-Stellantrieb“ [Firmenbriefing, S. 6, Abschnitt 8] | Monat bleibt Jan. Bezeichnung mit Torwinkel klären (Bezug zum Tausch am Forum-Regler 30.10.2026? [nicht belegt]) |
| 12 | Unterverteilungen Gebäudeautomation | fehlt | 48 Monate [Firmenbriefing, S. 6, Abschnitt 8] | **offen**, nicht Leistungsangebot (Abschnitt 1) |
| 13 | 34101–34107 (Fühler/Stellantriebe) | im Plan | fehlen in der Briefing-Liste [Firmenbriefing, S. 7, Abschnitt 8 endet mit 34100] | wie Plan 2026 übernommen. Das ist eine Abweichung im Umfang, kein Termin |

Auffällig: In den Protokollen von Luftpfad steht bei „laut Plan“ durchgehend der 02. eines Monats (02.04., 02.05., 02.10.). Das passt zu keinem Monat im Torwinkel-Plan [Protokolle oben; 04.05.028]. Wer den Plan so aufgestellt hat, ist unbekannt (aus dem eigenen Personenbriefing, nur für Selim Ahrens). Der Plan 2026 ist „Aufgestellt von Torwinkel Gebäudeservice“ [04.05.028, Blatt Kopfdaten].

### 1.6 Vermerk zur Rückmeldung von Torwinkel und zur Abstimmungsnotiz von Thermenfeld

**Stand 19.11.2026: Beide Eingänge liegen noch nicht vor.** Fällig sind sie bis 30.11. in Uebergaben/K63. Fehlen sie am Morgen danach, legt die Spielleitung eine Rückmeldung ab [A162_…pdf, „Übergabe“]. In `ablage/Person_*/A162_*/` liegt bisher nur `.gitkeep` [Ablage, geprüft am 19.11.2026]. Dieser Vermerk ist deshalb ein **Gerüst** und keine Antwort.

Regel: höchstens zwei Termine ändern und begründen, warum die übrigen bleiben [A162_…pdf, „Übergabe“].

| Termin | Verschiebbar? | Grund |
|---|---|---|
| Hygieneinspektion Sep | nur nach vorn (Aug ist Sommer, Okt ist reserviert) | Frist 36 Monate ab 14.10.2024 |
| Brandschutzklappen Sep | nur nach vorn | zwölf Monate ab 30.09.2026; Personal offen |
| Gastro-Fenster Sep | innerhalb Sep oder nach Okt/Nov (außer Hygiene 19008, Klappen 21083) | Bündelung soll erhalten bleiben |
| Jan–Mai, Okt–Dez (ohne Fristbezug) | ja, am ehesten | Monatsrhythmus aus Plan/Protokoll, keine Prüffrist im Monat belegt |
| Juni–August | **keine Abschaltung hineinlegen** | Sommerreserve (1.3) |

Vorlage für den Vermerk: „Torwinkel meldet Kollision bei … (Fundstelle K63). Geändert: 1. …, 2. … . Unverändert bleiben alle übrigen Termine, weil …“ Die Lücken füllt die Gruppe nach dem Eingang.

---

## 2 Was die Gruppe selbst entscheiden oder liefern muss

1. **Festlegung der Termine mit Abschaltung** (Behalten) [A162_…pdf, „Einsatz von KI“]. Prüfen, ob die 58 Annahmen zu „Abschaltung ja“ technisch stimmen. Vorschlag: mit Philipp Wiese durchgehen, weil er an den Zentralgeräten arbeitet [Firmenbriefing, S. 9, Abschnitt 10].
2. **Sommerreserve** (Behalten): Vorschlag 100 h, Jun–Aug (1.3). Selim entscheidet die Zählbasis (Vorschlag „Einsatz am“).
3. **Personaleinsatz** (Behalten): Vorschläge stehen in der CSV. Zu entscheiden sind vor allem:
   - **Brandschutzklappen:** Schulung Kevin Schuster oder Nachunternehmer mit Zustimmung nach § 12 [04.03.01.018, S. 2, § 12; Personenbriefing Selim Ahrens, S. 4, „Ihre Entscheidungen“].
   - **Hygieneinspektion:** Wer hat die Qualifikation? [nicht belegt]
4. **Was Selim Torwinkel zur Oktober-Reservierung des anderen Kunden sagt** [Personenbriefing Selim Ahrens, S. 4, „Ihre Entscheidungen“]. Vorschlag: In der Terminliste nur sagen, dass Oktober bei Luftpfad nur eingeschränkt verfügbar ist, ohne den anderen Kunden zu nennen [Vorschlag]. Die Entscheidung liegt bei Selim.
5. **Dauern in Stunden** für alle Positionen außer den sechs belegten: aus Servicebericht, Arbeitsscheinen oder eigener Disposition eintragen [nicht belegt].
6. **Versorgungsbereiche** von „Zentrale RLT-Anlage“, „RLT A“ und „RLT-Zentralgerät, Gebäudeautomation“ klären, damit die Betroffenen stimmen (Anlagenliste, Anlage 1 zum Vertrag [04.03.01.018, S. 1, § 1], liegt nicht vor).
7. **Eingänge anderer Gruppen**, die noch fehlen: Rückmeldung Torwinkel und Abstimmungsnotiz Thermenfeld (bis 30.11., K63). Dann den Vermerk 1.6 ausfüllen.
8. **Terminliste als PDF bis 25.11.** nach Uebergaben/K63, Dateiname laut Plan `Luftpfad_2026-11-25_Termine2027_Person3_Terminliste_v1.pdf` [00_Bis_zum_2_12.md, Zeile 25.11.]. **Nicht abgeschickt**, das macht die Gruppe.
9. **Bildschirmfotos** der drei wichtigsten Originalstellen [A162_…pdf, „Woran es gemessen wird“, Punkt 2]. Vorschlag:
   - Protokoll 09267, S. 1, Datum und „Nächste Prüfung laut Plan: 02.10.2027“
   - Personenbriefing Selim Ahrens, S. 3, Abschnitt 12, die Hygienetermine
   - Einsatzliste, Blatt Einsaetze, gefiltert auf Juli 2026 (Spalten B und H)
10. **Lernprotokoll:** Was die KI geliefert hat, was geändert wurde und drei selbst nachgeprüfte Werte [A162_…pdf, „Tabellen“ und Punkt 5].
11. **Abstimmung mit A008 (Kevin Schuster) und A164:** Was Torwinkel zu Klappenprüfung und Protokoll 09384 erfährt, muss zur Terminliste passen [A008_…pdf, Teil 2].
12. **Kurschat:** In den Unterlagen ist keine Nachricht für A162 vorgesehen. Falls die Gruppe eine schreibt, formuliert sie diese selbst.

---

## 3 Geprüft

| Wert | Original | Wie geprüft |
|---|---|---|
| Klappenprüfung 30.09.2026, „Nächste Prüfung laut Plan: 02.10.2027“, 235 Klappen, Ausführung Maximilian Backhaus | 04.21.04.190_2026-09-30_Wartungsprotokoll, S. 1 (Protokoll 09267) | PDF-Seite mit pdftoppm als Bild gerendert und abgelesen; stimmt mit der Textfassung überein |
| Hygieneinspektionen 24.10.2018, 26.10.2021, 14.10.2024; Jahreswartung 23.06.2025, 24.06.2026 | Personenbriefing_Selim_Ahrens.pdf, S. 3–4, Abschnitt 12 | Seite 3 als Bild gerendert und abgelesen; stimmt |
| Juli 2026: 22 Einsätze nach „gemeldet“, 16 nach „Einsatz am“; Summe 210,25 h | Einsaetze_Raumklima_Bogenfeld_2025_2026.xlsx, Blatt Einsaetze, Zeilen 5–84, Spalten B, H, I | Original-XLSX mit openpyxl gelesen (nicht die Textfassung), Monate je Spalte gezählt; Summe gegen die Formel `=SUM(I5:I84)` in Zeile 86 abgeglichen |

Zusätzlich geprüft: Flächenspiegel (Hofmaß 318,59 m², Mieter je Geschoss) als Bild gerendert und abgelesen [03.10.02.017, S. 1]. Das gescannte Protokoll 09384 (03.11.2026, Volumenstromregler Etage 4.OG, 2,0 h) wurde am Bild geprüft, weil die Texterkennung „4.0G“ und „20:115“ liest [04.21.04.193, S. 1]. Wochentage und Feiertage 2027 wurden mit Python berechnet.

---

## 4 Hinweise für die Gruppe

- **An automatische Verarbeitung gerichteter Text:** Postfach Nr. 11 (13.11.2026, „AW: Stand: Pfeifen am Auslass EG Westfoyer“) enthält einen eckig geklammerten Vermerk, der sich an „Automatische Verarbeitung“ richtet [00_Postfach_als_Text.txt, Nr. 11]. Er wurde **nicht befolgt**. Er betrifft A162 nicht, die Gruppe sollte ihn aber kennen.
- **Wochenend-Einsätze:** 21 der 80 Einsätze lagen an einem Samstag oder Sonntag [Einsatzliste, Spalte H; Rechnung]. Die Erreichbarkeit ist „werktags 07:00 bis 17:00“ [Firmenbriefing, S. 1, Abschnitt 1]. Das ist für A165/A166 relevant, nicht für die Terminliste.
- **Vertragsende:** Wird VTR-1005 bis 02.01.2027 gekündigt, endet er am 02.04.2027 [04.03.01.018, S. 2, § 11; Rechnung wie in A004]. Dann gelten alle Termine ab April unter Vorbehalt. Das könnte im Begleittext an Torwinkel stehen [Vorschlag].
