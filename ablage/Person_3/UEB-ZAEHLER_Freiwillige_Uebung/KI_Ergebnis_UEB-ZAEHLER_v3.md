# KI-Ergebnis UEB-ZAEHLER: Freiwillige Übung „8,4 Millionen kWh?“

- **Projekt:** UEB-ZAEHLER (Kurs, gemeinsame Aufgabe aller Firmen, freiwillig, keine Abgabe)
- **Runde:** 3
- **Datum:** 25.11.2026 (Runde 1 vom 20.11., Runde 2 vom 23.11.2026)
- **Federführend:** Selim Ahrens (Person 3); wer welchen Teil übernimmt, entscheidet die Gruppe [Auftrag_Zaehlerfehler.pdf, S. 1, „Worum es geht“]
- **Rechentabelle:** `KI_Ergebnis_UEB-ZAEHLER_v3.csv` (alle Zahlen dieser Datei, mit Python aus den Originaldateien berechnet)

Kurzformen der Quellen (alle aus `Verbesserungen/2026-11-23_1313_Uebung_zaehlerfehler.zip`, hochgeladen von Selim Ahrens am 23.11.2026): **AUF** = Auftrag_Zaehlerfehler.pdf; **STR** = Zaehlerdaten/Zaehlerstaende_Strom_2017_2026.xlsx (Blatt „Ablesungen“, Zeilennummer wie in Excel, Kopfzeile = 1); **CSV** = Zaehlerdaten/Zaehlerstaende_Strom_Auszug_2025-12_bis_2026-11.csv (Zeilennummer, Kopfzeile = 1); **ZV** = Zaehlerdaten/Zaehlerverzeichnis_Neubau.xlsx; **IDX** = Zaehlerdaten/00_Index_Zaehlerdaten.xlsx; **FMK** = Tickets/FM_Kennzahlen_Monat_2017_2026.xlsx (Blatt „Monatswerte“, Spalte N „Strombezug Hauptzähler“); **EB25** = Daten/11.06_Zaehler_Energie/11.06.027_2026-02-15_Energiebericht_Torwinkel.pdf; **EB26** = 11.06.030_2026-11-04_Energiebericht_Torwinkel.pdf; **ZL** = 11.06.028_2026-06-30_Zaehlerliste_Torwinkel.pdf; **TE** = Daten/07.21.10_Talwerk_Energie/07.21.10.073_2026-06-08_Eingangsrechnung_Talwerk_Energie.pdf.

## Änderungen gegenüber v2

| Feedback / Info | Was geändert | Quelle |
|---|---|---|
| Selim Ahrens, 23.11.2026, Art „infos“: „Hier sind die Angeforderten Dateien“ mit `Uebung_zaehlerfehler.zip` | Der fehlende Auftrag und alle Daten liegen jetzt vor. v2 war nur ein Organisationsblatt; v3 bearbeitet die Übung vollständig (Schritte 2 bis 5) und liefert einen Entwurf des Prüfprotokolls (Schritt 6). Der Punkt in `benoetigt` ist erledigt. | ZIP, alle 14 Dateien gelesen |

Was weiterhin **nur die Gruppe** kann: Schritt 1 (die Frage selbst an eine KI stellen, Antwort im Wortlaut, Anbieter und Modell) und Punkt 7 (Bilanz). Dafür sind unten Platzhalter.

**Hinweis zur Ablage:** Der Auftrag sagt: „Legen oder posten Sie nichts aus dieser Übung im Kursteam … Jede Gruppe soll selbst auf ihr Ergebnis kommen“ [AUF, S. 3, „Hinweise zum Arbeiten“]. Dieses Repository und die Webseite sind öffentlich. Die Daten und diese Lösung sind damit auch für andere Gruppen lesbar. Ob das so bleiben soll, entscheidet die Gruppe (siehe Abschnitt „Was die Gruppe selbst entscheiden oder liefern muss“).

## 1 Ergebnis

### 1.1 Schritt 1: Die KI fragen (Gruppe)

Frage wörtlich aus AUF, S. 1–2, „Schritt 1“. Hochladen: XLSX bei KI mit Code-Ausführung, sonst CSV [ebd.].

| Feld | Eintrag |
|---|---|
| Anbieter, Modell | [von der Gruppe eintragen] |
| hat gerechnet oder nur gelesen? | [eintragen] |
| Antwort im Wortlaut | [eintragen] |

Was eine rechnende KI erwartbar liefert (zum Abgleich, nicht als Antwort der Gruppe): größter Verbrauch **8.415.823 kWh** am Zähler **21950889** (Unterverteilung Technischer Vertrieb) zwischen **12.06.2026 und 24.06.2026** [Rechnung: STR Z. 5575 minus Z. 5555 = 9.346.940 − 931.117]. Das ist die Zahl „rund 8,4 Millionen kWh in wenigen Tagen“ [AUF, S. 1]. Für das ganze Haus addieren viele KIs alle 19 Zähler: **2.663.916 kWh** [Rechnung, CSV-Tabelle Zeile „naiv_alle_19“].

### 1.2 Schritt 2: Ist das überhaupt möglich? (vier unabhängige Gegenproben)

| Nr. | Gegenprobe | Ergebnis | Fundstelle |
|---|---|---|---|
| G1 | Strombezug des ganzen Hauses | Das ganze Haus bezieht 2025 **1.630.090 kWh** im Jahr, im Juni 2026 **168.523 kWh** im Monat; der höchste Monat seit 2017 hat **181.780 kWh**. 8,4 Mio kWh in 12 Tagen wären gut **5 Jahresverbräuche des ganzen Hauses** – an einem einzigen Unterzähler. | EB25, S. 1, Zeile „Elektrizität“; FMK, Zeile 111 (2026-06), Spalte N; Maximum über Spalte N gerechnet |
| G2 | Hauptzähler im selben Zeitraum | Der Hauptzähler 18838817 (Netzübergabe) misst vom 15.06. bis 22.06.2026 **38.283 kWh** für das ganze Haus. Ein Unterzähler kann nicht mehr messen als der Hauptzähler, durch den sein Strom fließt. | STR Z. 5566, Spalte H; ZV, Zeile 18838817 „Hauptzähler ja“, Zähler 21950889 „nein, Mieter-Unterzähler“ |
| G3 | Derselbe Zähler sonst | 21950889 verbraucht 2026 sonst **2.759 bis 4.553 kWh** je Ableseabstand (Mittel 3.464 kWh, rund 290 kWh am Tag). | STR, alle Zeilen 21950889 im Jahr 2026 außer Z. 5575/5593 |
| G4 | Nötige Dauerleistung | 8.415.823 kWh ÷ (12 Tage × 24 h) = **29.222 kW**, also rund 29 MW ohne Pause, für die Unterverteilung eines Büromieters. Normal sind etwa 12 kW (290 kWh ÷ 24 h). | Rechnung; Zeitraum aus STR Z. 5555 und 5575 |
| G5 | Ablesung direkt danach | Am 06.07.2026 steht der Zähler bei **938.632 kWh**, also **8.408.308 kWh weniger** als am 24.06. Ein Zähler ohne Tausch läuft nie rückwärts. | STR Z. 5593 (CSV Z. 369) |

G1 (FM-Berichte bzw. Energiebericht) und G3/G5 (Ablesereihe desselben Zählers) stammen aus verschiedenen Dateien und sind voneinander unabhängig. Ergebnis: **Die 8,4 Mio kWh sind unmöglich.**

### 1.3 Schritt 3: Die Ursache

**Fehlerhafte Zeile:** STR, Blatt „Ablesungen“, **Zeile 5575** (CSV Zeile 351): Ablesedatum **24.06.2026**, Zählernummer **21950889**, Standort **Unterverteilung Technischer Vertrieb**, Art „Ablesung“, erfasster Zählerstand **9.346.940 kWh**, Verbrauch seit Vorablesung **leer**, Ableser Dennis Prange [STR Z. 5575].

**Art des Fehlers: Erfassungsfehler, eine Ziffer zu viel (angehängte 0).** 9.346.940 ist 934.694 mit einer zusätzlichen Null am Ende. 934.694 liegt genau zwischen dem Stand davor (931.117 am 12.06.) und danach (938.632 am 06.07.) [STR Z. 5555, 5593].

| Erklärung | Urteil | Beleg |
|---|---|---|
| Erfassungsfehler (Ziffer zu viel) | **passt** | Ohne die letzte Ziffer fügt sich der Wert nahtlos in die Reihe ein (+3.577 und +3.938 kWh, beide im üblichen Bereich von G3). Das System selbst hat für diese Zeile keinen Verbrauch berechnet, obwohl es eine „Ablesung“ ist; das ist die einzige solche Zeile im ganzen Export [STR Z. 5575, Spalte H leer; Exportinfo, Zeile „Hinweis“: Verbrauch nur bei regulären Ablesungen]. |
| Falsche Einheit (Wh statt kWh) | ausgeschlossen | Alle 5.791 Zeilen tragen die Einheit kWh [STR, Spalte G]. Wh statt kWh wäre Faktor 1.000, hier ist es Faktor 10 [Rechnung]. |
| Umrechnungsfaktor (Wandler) | ausgeschlossen | Ein falscher Wandlerfaktor würde alle folgenden Ablesungen verändern. Schon die nächste Ablesung ist wieder normal [STR Z. 5593]. 21950889 ist kein Wandlerzähler des Netzbetreibers, nur ein Mieter-Unterzähler [ZV, Spalte „Bemerkung“]. |
| Zählertausch | ausgeschlossen | Für 21950889 gibt es keine Zeile „Einbau“ außer 2017 und keinen Ausbau [STR, Spalte E; ZV, Einbau 19.03.2017, Ausbau leer]; die Zählerliste zum 30.06.2026 führt dieselbe Nummer [ZL, S. 1, ZAE-1030]; „Zählerwechsel im Berichtsjahr: keine“ [EB26, S. 1]. Ein neuer Zähler würde zudem nicht bei 938.632 weiterlaufen. |

**Plausibler richtiger Zählerstand am 24.06.2026: 934.694 kWh** (möglich ±1 kWh, siehe 1.5 Nr. 2).
**Richtiger Verbrauch 12.06.–24.06.2026: 3.577 kWh** (934.694 − 931.117), **24.06.–06.07.2026: 3.938 kWh** (938.632 − 934.694) [Rechnung].

**Wie sicher?** Hoch. Drei Dinge passen zusammen: (1) der Wert ohne die letzte Ziffer liegt zwischen beiden Nachbarn, (2) beide Teilverbräuche liegen im üblichen Bereich des Zählers (G3), (3) die Folgezeile nennt selbst „Verbrauch seit Vorablesung 3.937 kWh“, das System rechnet also mit einem Vorwert von rund 934.695 [STR Z. 5593, Spalte H]. Unsicher bleibt nur die letzte Stelle (±1 kWh), weil die Verbrauchsspalte im ganzen Export oft um 1 kWh von der Differenz abweicht (1.5 Nr. 2). Endgültig klärt das nur ein Blick auf das Ableseprotokoll oder Foto vom 24.06.2026, das nicht im Material liegt.

### 1.4 Schritt 4: Die Ausgangsfrage richtig beantworten

**Frage 1 (größter Verbrauch eines Zählers 2026 zwischen zwei Ablesungen):** Nach der Korrektur ist es der **Hauptzähler 18838817 (Netzübergabe) mit 38.284 kWh vom 15.06. bis 22.06.2026** [STR Z. 5557 und 5566; Rechnung als Differenz der Zählerstände; die Verbrauchsspalte nennt 38.283]. Er ist aber der Zähler des ganzen Hauses. **Unter den Unterzählern** ist der größte Wert ein normaler Ableseabstand des Zählers 21950889 mit **4.553 kWh vom 11.08. bis 24.08.2026** [STR Z. 5654 und 5673; Verbrauchsspalte 4.552]. Der korrigierte Wert 3.577 kWh vom 12.06. bis 24.06. ist unauffällig.

**Frage 2 (Stromverbrauch des ganzen Hauses 2026 bis zur letzten Ablesung):** Nur der Zähler mit „Hauptzähler ja“ bildet das ganze Haus ab; die 18 übrigen sind Abgänge der Hauptverteilung oder Mieter-Unterzähler und messen Teile davon [ZV, Spalte „Hauptzähler“; ZL, Spalte „Hauptzähler“]. Wer alle 19 addiert, zählt doppelt.

| Lesart | kWh | Fundstelle |
|---|---|---|
| Hauptzähler, letzte Ablesung 2025 bis letzte Ablesung 2026 (29.12.2025 → 02.11.2026) | **1.385.132** | STR Z. 5281 (13.748.599) und Z. 5783 (15.133.731); CSV Z. 57 und 559 |
| Summe der Spalte „Verbrauch seit Vorablesung“ des Hauptzählers, Ablesungen 2026 | **1.385.114** | STR, Spalte H, Zeilen 18838817 mit Datum 2026 |
| Energiebericht 2026 (Zwischenstand bis 3.11.2026) | **1.385.114** | EB26, S. 1, Zeile „Elektrizität“ |
| FM-Monatswerte Januar bis Oktober 2026 | 1.355.938 | FMK, Zeilen 106–115, Spalte N (Kalendermonate, endet am 31.10.) |
| ab 01.01.2026, Stand am 01.01. linear zwischen 29.12.2025 und 05.01.2026 geschätzt | ca. 1.371.205 | STR Z. 5281, 5290, 5783 [Annahme: gleichmäßiger Verbrauch über Neujahr] |
| falsch: alle 19 Zähler addiert | 2.663.916 | Rechnung |

**Antwort:** Das Haus hat 2026 bis zur letzten Ablesung am 02.11.2026 rund **1,385 Mio kWh** bezogen (1.385.132 kWh als Differenz der Zählerstände). Das deckt sich mit dem Energiebericht 2026 (1.385.114 kWh); die 18 kWh Unterschied entstehen, weil der Bericht die Verbrauchsspalte summiert, die oft 1 kWh unter der Differenz liegt (1.5 Nr. 2). **Der Fehler in Zeile 5575 ändert an Frage 2 nichts:** Er sitzt an einem Unterzähler, und auch dort hebt er sich über das Jahr auf (+8.415.823 und −8.408.308) [Rechnung, CSV-Tabelle].

### 1.5 Schritt 5: Weitere Auffälligkeiten

| Nr. | Auffälligkeit | melden oder erklärbar? | Fundstelle |
|---|---|---|---|
| 1 | **Energiebericht 2026 vergleicht 10 Monate mit 12 Monaten:** „−15,0 %“ Strom und „−27,7 %“ Fernwärme gegenüber dem ganzen Vorjahr, obwohl der Bericht nur bis 3.11.2026 reicht. Die fehlenden Monate November/Dezember (2025: 119.949 + 155.394 kWh Strom) erklären fast den ganzen Rückgang. | **melden** (irreführend, Kennzeichnung „Zwischenstand“ reicht nicht für eine Prozentangabe) | EB26, S. 1, Tabelle „Vorjahr / Veränderung“; FMK Zeilen 104–105, Spalte N |
| 2 | **Verbrauchsspalte weicht in 2.870 Zeilen um genau −1 kWh von der Differenz der Zählerstände ab** (2.898 Zeilen stimmen genau). | **erklärbar** (vermutlich Rundung, das System rechnet mit Nachkommastellen [Annahme]); deshalb 1.385.114 statt 1.385.132 | STR, Spalten F und H, Rechnung über alle Zeilen |
| 3 | **Schätzwert unter dem Vorwert:** Zähler 13917722 (Projektbüros Dachgeschoss), 26.10.2023, Art „Schätzung“, 430.508 kWh, 43 kWh **weniger** als die Ablesung vom 16.10.2023 (430.551). Die Folgezeile nennt 2.354 kWh Verbrauch, die Differenz wäre 4.084 bzw. 4.041 kWh. | **melden**, niedrige Priorität (alter Wert, als Schätzung markiert, betrifft die Mieterabrechnung 2023) | STR Z. 3957, 3976, 3996 |
| 4 | **Unterzähler decken den Hauptzähler nicht ganz ab:** 2026 messen die 18 Unterzähler zusammen 1.278.784 kWh, der Hauptzähler 1.385.132 kWh (rund 106.000 kWh bzw. 8 % nicht zugeordnet). | **erklärbar** (Verluste, ungezählte Verbraucher; die 6 Abgänge und 12 Mieterzähler sind nicht als vollständige Aufteilung beschrieben) [Annahme] | Rechnung über STR; ZV |
| 5 | **Rechnung Talwerk ist keine Verbrauchsrechnung:** nur „Entgelt Messstellenbetrieb“ 34,40 EUR netto für Mai 2026, Vertrag VTR-1029, ohne kWh. | **erklärbar**, aber als Gegenprobe ungeeignet | TE, S. 1, Pos. 1 |
| 6 | Der Index nennt Dateien für Kälte, Wärme und Wasser, die nicht beiliegen. | **erklärbar** (Auszug), für die Stromfrage nicht nötig | IDX, Zeilen 3, 5, 6; AUF, S. 1, Materialtabelle |

### 1.6 Schritt 6: Entwurf des Prüfprotokolls (1–2 Seiten, zum Übernehmen)

> **Prüfprotokoll „8,4 Millionen kWh?“, Luftpfad Anlagentechnik GmbH, [Datum]**
>
> **1 Frage und KI-Antwort.** Frage wörtlich aus dem Auftrag, Schritt 1. Anbieter/Modell: [ ]. Gerechnet/gelesen: [ ]. Antwort: [ ].
>
> **2 Gegenproben.** (a) Das ganze Haus bezog 2025 1.630.090 kWh (Energiebericht 2025, S. 1), im Juni 2026 168.523 kWh (FM-Kennzahlen, Zeile 2026-06). (b) Der Hauptzähler maß vom 15.06. bis 22.06.2026 38.283 kWh (Strom-Export, Zeile 5566). (c) Zähler 21950889 verbraucht sonst 2.759–4.553 kWh je Ablesung (Strom-Export, 2026). (d) 8,4 Mio kWh in 12 Tagen wären 29 MW Dauerleistung. (e) Die nächste Ablesung am 06.07.2026 liegt 8,4 Mio kWh tiefer (Zeile 5593). Die Zahl ist unmöglich.
>
> **3 Fehlerhafte Zeile.** Strom-Export, Blatt Ablesungen, Zeile 5575 (CSV Zeile 351): 24.06.2026, Zähler 21950889, Unterverteilung Technischer Vertrieb, 9.346.940 kWh. Art: Erfassungsfehler, eine Null zu viel. Ausgeschlossen: falsche Einheit (überall kWh, Faktor 10 statt 1.000), Wandlerfaktor (nächste Ablesung normal), Zählertausch (kein Aus-/Einbau im Zählerverzeichnis, Energiebericht 2026: „Zählerwechsel keine“).
>
> **4 Korrektur.** Richtiger Stand 934.694 kWh (±1), Verbrauch 12.06.–24.06.2026: 3.577 kWh. Frage 1: größter Wert 2026 ist der Hauptzähler mit 38.284 kWh (15.06.–22.06.), unter den Unterzählern 4.553 kWh (21950889, 11.08.–24.08.). Frage 2: nur der Hauptzähler zählt; 1.385.132 kWh vom 29.12.2025 bis 02.11.2026, Energiebericht 2026: 1.385.114 kWh.
>
> **5 Weitere Auffälligkeit.** Der Energiebericht 2026 nennt „−15,0 %“ Strom gegenüber 2025, vergleicht aber zehn Monate mit einem ganzen Jahr. Melden.
>
> **6 Korrekturmeldung (Entwurf, geht nicht hinaus).** An: Torwinkel Gebäudeservice GmbH, Objektbetreuung Haus am Bogenfeld. — „Im Export der Stromablesungen vom 05.11.2026 steht für den Zähler 21950889 (Unterverteilung Technischer Vertrieb) am 24.06.2026 der Stand 9.346.940 kWh. Der Wert passt nicht zu den Ablesungen vom 12.06. (931.117) und 06.07.2026 (938.632); wir gehen von einem Tippfehler aus, richtig wäre etwa 934.694 kWh. Bitte prüfen Sie das Ableseprotokoll vom 24.06.2026 und korrigieren Sie den Wert im Ablesesystem. Außerdem bitten wir, im Energiebericht 2026 die Veränderung gegenüber dem Vorjahr nur für gleich lange Zeiträume anzugeben.“ — **Warum an Torwinkel:** Der Export stammt „aus dem Ablesesystem der Torwinkel Gebäudeservice GmbH“, Ableser und Unterzeichner des Energieberichts ist Dennis Prange von Torwinkel [STR, Blatt Exportinfo, Zeile 2; EB26, S. 1]. Kopie an Kantbogen als Empfängerin der Berichte [Auszug_Datenraumindex.xlsx, Spalte „Empfänger“] ist eine Entscheidung der Gruppe.
>
> **7 Bilanz.** [Gruppe: Was hat die KI gut gemacht, wo hätte sie in die Irre geführt, Anzahl Versuche, was beim nächsten Mal anders.]

### 1.7 Was fehlt (Nachweis, Punkt 3)

- **Ableseprotokoll oder Foto der Ablesung vom 24.06.2026** für Zähler 21950889, um die letzte Stelle (934.694 oder 934.695) zu klären. Anfrage: bei Torwinkel, Objektbetreuung [nicht im Material].
- **Rechnung des Stromlieferanten mit Bezugsmenge** als dritte, vom Ablesesystem unabhängige Gegenprobe; im Auszug liegt nur die Messstellenrechnung [TE]. Anfrage: bei Kantbogen als Rechnungsempfängerin [TE, Anschrift].

## 2 Was die Gruppe selbst entscheiden oder liefern muss

1. **Schritt 1 selbst machen:** Frage wörtlich stellen, Anbieter, Modell, „gerechnet oder gelesen“ und Antwort im Wortlaut festhalten; Tipp: zwei Anbieter vergleichen [AUF, S. 2]. Erst danach mit diesem Ergebnis vergleichen; der Dozent gibt eine Lösung mit Rechenweg heraus [00_Bis_zum_2_12.pdf, „Was freiwillig ist“].
2. **Aufteilung der Teile** (Schritt 1/Bilanz, Gegenproben, Ursache, Schritte 4–5, Korrekturmeldung/Protokoll) und die **gemeinsame Abwägung** der Erklärung [AUF, S. 1].
3. **Bildschirmfotos der drei wichtigsten Stellen** [AUF, S. 3, „Nachweis“]. Vorschlag: STR Zeile 5575 mit den Zeilen 5555 und 5593; ZV Zeile 21950889 (Hauptzähler „nein“, kein Ausbau); EB26 Zeile „Elektrizität“.
4. **Bilanz** (Punkt 7) und **Weg** (KI, Excel oder beides) ins Protokoll [AUF, S. 3].
5. **Öffentliche Ablage:** Laut Auftrag soll nichts aus der Übung im Kursteam liegen, damit jede Gruppe selbst auf ihr Ergebnis kommt [AUF, S. 3]. Das Repository ist öffentlich. Vorschlag: die ZIP-Datei und diese Lösung bis nach der Sitzung am 2.12. aus dem öffentlichen Repository nehmen oder das Repository privat stellen. Das entscheidet die Gruppe; der Agent löscht nichts.
6. Ob die Korrekturmeldung abgeschickt würde: Sie bleibt laut Auftrag im Protokoll [AUF, S. 2, Schritt 6 Punkt 6].

## 3 Geprüft

1. **Fehlerhafte Zeile** in beiden Fassungen nachgelesen: XLSX Blatt „Ablesungen“ Zeile 5575 und CSV Zeile 351 zeigen beide „24.06.2026, 21950889, … 9346940, kWh, (leer)“; Nachbarzeilen 5555 (931.117) und 5593 (938.632, Verbrauch 3.937).
2. **Energiebericht 2026** als PDF und XLSX gelesen: beide 1.385.114 kWh; mit Python die Verbrauchsspalte des Hauptzählers für 2026 summiert: genau 1.385.114. Ebenso 2025: Summe 1.630.090 = EB25 = Summe FMK 2025.
3. **Hauptzählerkennzeichen** in ZV und ZL verglichen: nur 18838817 ist beim Strom „ja“; 21950889 ist in beiden „nein“, Einbau 19.03.2017, kein Ausbau.
