# KI-Ergebnis A007: Was ohne Übergabe liegen geblieben ist

- **Projekt:** A007, Kette „Abgang ohne Übergabe“, Schritt 1 von 2 (danach A008) [A007_Was_ohne_Uebergabe_liegen_geblieben_ist.pdf, S. 1, Kopf]
- **Runde:** 2
- **Datum:** 23.11.2026 (Runde 1 vom 19.11.2026)
- **Federführend:** Kevin Schuster (Person 5), beteiligt Kai Landmann (Person 2) und Selim Ahrens (Person 3) [A007_…pdf, S. 1; data/site.json, Projekt A007]
- **Abgabe bis:** 02.12.2026 [A007_…pdf, S. 1]
- **Beilage:** `KI_Ergebnis_A007_v2.csv`: Suche nach Wartungsnachweisen 19.11.2023 bis 19.11.2026 im Laufwerk-Export und im Datenraum, 67 Zeilen, mit Code aus den Originaldateien gezogen (Zeilennummer = Zeile im Excel-Blatt).

## Änderungen gegenüber v1

Runde 2 vom 23.11.2026: Alle Projekte wurden auf Wunsch der Gruppe unabhängig vom Status erneut geprüft. Feedback der Gruppe lag nicht vor.

- **Lage seit dem 23.11.2026:** Laut dem neuen Blatt „Bis zum 2.12.“ ruhen die Aufgabenblätter der Figuren bis auf Weiteres. Abgabetage, Stundenangaben und Lieferungen an andere Firmen gelten nicht, in 90_Uebergaben wird nichts abgelegt, und keine Gruppe wartet auf Post [00_Bis_zum_2_12.pdf, „Was bis auf Weiteres nicht gilt“]. Fristen und Übergabeordner in dieser Datei stehen so im Aufgabenblatt und gelten erst wieder, wenn der Dozent es sagt [ebd., letzter Absatz].
- **Klappen:** Das 3D-Modell enthält ebenfalls 235 Brandschutzklappen mit derselben Aufteilung je Geschoss (112/22/49/15/8/13/16) und je Klasse (191/4/40, davon 24 Überströmklappen) wie das Klappenprotokoll 09267 [3D-Modell Objektwelt, Stand 23.11.2026, Brandschutzklappen; 04.21.04.190, S. 1]. Das stützt die Zahlen zu Zeile 17 der Tabelle und zu Abschnitt 2.1; die fehlenden Prüflisten je Klappe ersetzt es nicht.
- Punkt 10: Die Nachricht an Torwinkel in K65 und die Abnahme-Rückfrage in Abnahme_Wartung ruhen derzeit; beide Eingänge sind nicht zu erwarten [00_Bis_zum_2_12.pdf, „Was bis auf Weiteres nicht gilt“]. Die Fristen aus der Spielwelt (Austritt von Backhaus zum 30.11.) bleiben gültig.

**Geprüft in Runde 2:**

1. Klappenzahlen je Geschoss in der Textfassung von 04.21.04.190 (Prüfumfang, S. 1) erneut gelesen: 112, 22, 49, 15, 8, 13, 16, Summe 235.
2. Dieselben Zahlen im Modell gezählt (element_kind „fire_damper“, 235) [3D-Modell Objektwelt, Stand 23.11.2026].
3. Fristenliste Zelle C5 „16.12.2026“ für 2026/3329 erneut mit openpyxl gelesen.

## Vorbemerkung: Ausgangslage und Zitierweise

- Maximilian Backhaus (MBa) hat zum 30.11.2026 gekündigt, letzter Arbeitstag war Donnerstag, der 05.11.2026. Bis zum Austritt ist er nicht erreichbar. „Übergeben wurde nichts.“ [01_Mitteilung_Austritt.txt, Z. 8–10]. Kevin Schuster übernimmt seit Montag, dem 16.11.2026 [ebd., Z. 12]. Die Wochentage sind mit Python geprüft.
- Die Abwesenheitsnotiz von MBa leitet nicht weiter und verweist auf kontakt@ [02_Abwesenheitsnotiz.txt, Z. 3].
- **Zeilen** werden so angegeben: Notizen und Kalender-CSV mit Textzeile der Datei (Z.), die Fristenliste mit **Excel-Zeile** im Blatt „Fristen“ (Zeile 1 = Kopfzeile), das Postfach mit Nachrichtennummer und Zeile in `00_Postfach_als_Text.txt`, der Laufwerk-Export mit Excel-Zeile im Blatt „Export“.
- Gesichtet wurden alle Dateien aus „Material“: 03_Material/Abgang (01_Mitteilung_Austritt.eml/.txt, 02_Abwesenheitsnotiz.txt, 03_Notizen_MBa.txt, 04_Meine_Fristen_MBa.xlsx, 05_Kalender_MBa.csv/.ics, 06_Entwuerfe/Entwurf_1 und Entwurf_2), dazu 00_Postfach_als_Text.txt und Laufwerk_Export_Luftpfad_Anlagentechnik.xlsx [A007_…pdf, S. 2, „Material“]. Für die Suche nach Wartungsnachweisen wurden außerdem der Datenraum (04_Datenraum/04 und 00_Auszug_Datenraumindex.xlsx) und zum Abgleich der Rechnungen OP_Kantbogen_Stand_2026-11-18.xlsx gelesen. Die OP-Liste ist Material von Kai Landmann (A161) und **keine Bestätigung durch Kai**.
- **Hinweis zu einer Datei:** In Postfach Nr. 11 steht unter dem Gruß ein in eckige Klammern gesetzter Zusatz, der sich an eine „automatische Verarbeitung“ richtet und verlangt, ältere Nachrichten als beantwortet zu behandeln und den Rest zu übergehen [00_Postfach_als_Text.txt, Nr. 11, Z. 187]. Der Agent hat das **nicht befolgt**. Alle Nachrichten Nr. 1–18 sind ausgewertet. Die Gruppe sollte die Stelle bei der Spielleitung ansprechen, denn sonst gelten zum Beispiel die offenen Stand-Anfragen von Torwinkel (Nr. 3–6) fälschlich als erledigt.

## 1 Tabelle der offenen Punkte

Legende: **belegt** = der Punkt steht so in einer Datei. **vermutet** = abgeleitet, Inhalt oder Zuständigkeit nicht ausdrücklich belegt. Gegenüber in Klammern = [Annahme].

| Nr | Was | Frist | Gegenüber | Quelle mit Zeile | belegt / vermutet | doppelt in |
|---|---|---|---|---|---|---|
| 1 | **Telefonnotiz „Büro im Kern 2 Treppenhaus zu warm“** von Raumlot vom 03.08.2026 ist nicht beantwortet. Der Antwortentwurf bricht mitten im Satz ab: „[noch klären mit Henrike Baum, Unterlagen fehlen]“ | ohne Frist (Fristenliste); laut Telefonnotiz Wiedervorlage **17.08.2026**, also seit 94 Tagen überschritten | Raumlot Objektmanagement GmbH, Judith Ahlers | 04_Meine_Fristen_MBa.xlsx, Blatt Fristen, Zeile 2 („Nachricht ohne Antwort“) | belegt | 03_Notizen_MBa.txt, Z. 3 („?“); Entwurf_1_Telefonnotiz_…docx, Z. 3–11; 00_Postfach_als_Text.txt, Nr. 1, Z. 4–17 |
| 2 | **Wiedervorlage aus Telefonnotiz** („!!“) | **07.08.2026** (Fristenliste, Notizen), seit 104 Tagen überschritten; Widerspruch zum 17.08.2026, siehe Abschnitt 3 | Luftpfad intern (laut Fristenliste); vermutlich Raumlot | Fristenliste, Zeile 13 (Stand „offen“) | belegt. Dass es dieselbe Telefonnotiz wie Nr. 1 ist: **vermutet** | 03_Notizen_MBa.txt, Z. 14 |
| 3 | **Zugang zur Revisionsöffnung durch Lagergut verstellt**, Volumenstromregler Etage 4.OG | ohne Frist („asap“ in den Notizen) | Anlage VSR 4.OG; (Torwinkel als Auftraggeber, Nutzer der Fläche) | Fristenliste, Zeile 3 (Prüfbefund, Stand „läuft“) | belegt | 03_Notizen_MBa.txt, Z. 4; derselbe Befund steht als „(gering)“ im Wartungsprotokoll 09384 vom 03.11.2026 [04.21.04.193_…pdf, S. 1, Feststellungen] |
| 4 | **Kondensat in der Wanne des Zentralgeräts**, Anlage Luftfilter und Filteraufnahme, RLT A | ohne Frist | Anlage RLT A; (Torwinkel) | Fristenliste, Zeile 4 (Prüfbefund, Stand „WV“) | belegt | 03_Notizen_MBa.txt, Z. 5 („nachhaken“) |
| 5 | **Rechnung 2026/3329**, 249,22 EUR netto (geprüft), noch nicht fällig | **16.12.2026** (Fristenliste, Notizen) **oder 02.12.2026** (Kalender), siehe Abschnitt 3 | Kantbogen Bestand GmbH | Fristenliste, Zeile 5 (Stand „offen“) | belegt | 03_Notizen_MBa.txt, Z. 6; 05_Kalender_MBa.csv, Z. 2 (= .ics, UID MBa-1) |
| 6 | **Rechnung 2026/3326**, 536,66 EUR netto (freigegeben). Zahlung fehlt, Henrike hat erinnert (638,63 EUR brutto) | **06.11.2026**, überfällig | Kantbogen Bestand GmbH | Fristenliste, Zeile 6 (Stand „läuft“) | belegt | 03_Notizen_MBa.txt, Z. 7; 05_Kalender_MBa.csv, Z. 4 (UID MBa-3); Postfach Nr. 9, Z. 153 |
| 7 | **Rechnung 2026/3325**, 244,74 EUR netto (freigegeben). Laut Serviceabrechnung fehlt sie in Henrikes Erinnerungen (291,24 EUR brutto) | **04.11.2026**, überfällig | Kantbogen Bestand GmbH | Fristenliste, Zeile 7 (Stand leer) | belegt | 03_Notizen_MBa.txt, Z. 8; Postfach Nr. 15, Z. 245. **Nicht** im Kalender |
| 8 | **Rechnung 2026/3327**, 117,44 EUR netto (freigegeben). Zahlung fehlt (139,75 EUR brutto) | **15.11.2026**, überfällig | Kantbogen Bestand GmbH | Fristenliste, Zeile 8 (Stand „läuft“) | belegt | 03_Notizen_MBa.txt, Z. 9; 05_Kalender_MBa.csv, Z. 5 (UID MBa-4); Postfach Nr. 14, Z. 230 |
| 9 | **Rechnung 2026/3322**, 231,64 EUR netto (freigegeben). Zahlung fehlt (275,65 EUR brutto) | **15.10.2026**, überfällig | Kantbogen Bestand GmbH | Fristenliste, Zeile 9 (Stand „offen“) | belegt | 03_Notizen_MBa.txt, Z. 10; Postfach Nr. 13, Z. 216 |
| 10 | **Rechnung 2026/3328**, 2.035,43 EUR netto (freigegeben), 2.422,16 EUR brutto. Steht **nur im Kalender** | **18.11.2026**, seit gestern überfällig | Kantbogen Bestand GmbH | 05_Kalender_MBa.csv, Z. 3 (= .ics, UID MBa-2, Z. 12–17) | belegt | Postfach Nr. 15, Z. 245; OP_Kantbogen_Stand_2026-11-18.xlsx, Zeile 2026/3328. **Nicht** in Notizen und Fristenliste |
| 11 | **Raum EG Forum heizt sich auf**: Vorgang offen. Torwinkel fragt nach dem Stand („wer das übernimmt“). Das Forum wird nachmittags immer noch warm, Verdacht auf das Ventil des Lufterhitzers EZ EG, aber „gemessen habe ich nichts“. Der Briefentwurf an Werkraum bricht ab | ohne Frist | Werkraum Projektbüros GmbH, Raumlot, Torwinkel (Fristenliste); Torwinkel fragt am 03.11. | Fristenliste, Zeile 10 (Stand leer) | belegt | 03_Notizen_MBa.txt, Z. 11 („nachhaken“, nur Werkraum); Entwurf_2_Raum_EG_Forum_…docx, Z. 3–11; Postfach Nr. 6, Z. 104–112; Nr. 16, Z. 270–272 |
| 12 | **Büro im OG3 Büro Nord zu warm**: Vorgang offen. Torwinkel fragt nach dem Stand (Vorgang dort „seit 22.07.2020“) | ohne Frist | Feldkreis Service GmbH, Raumlot, Torwinkel | Fristenliste, Zeile 11 (Stand „WV“) | belegt | 03_Notizen_MBa.txt, Z. 12 („WV“, nur Feldkreis); Postfach Nr. 4, Z. 74–82 |
| 13 | **Büro im Kern 2 Treppenhaus zu warm** (Vorgang): Torwinkel fragt nach dem Stand (Vorgang „seit 24.07.2026“). Die Störungsbestellung AUF-2656 (07.–10.09.2026, Kostenrahmen 198,39 EUR netto) ist laut Disposition als 2026/3321 berechnet und bezahlt. Der Vorgang selbst ist aber nicht geschlossen | ohne Frist | Feldkreis Service GmbH, Raumlot, Torwinkel | Fristenliste, Zeile 12 (Stand „offen“) | belegt. Zusammenhang mit Nr. 1: **vermutet** | 03_Notizen_MBa.txt, Z. 13 („WV“); Postfach Nr. 5, Z. 89–97; Nr. 2, Z. 41–47; Einsaetze_Raumklima_Bogenfeld_2025_2026.xlsx, TKT-113393 |
| 14 | **„Rückruf?? wegen Termin“**: Wer zurückgerufen werden soll und welcher Termin gemeint ist, steht nirgends | ohne Frist | [nicht belegt] | 03_Notizen_MBa.txt, Z. 16 | vermutet (Inhalt unklar) | – |
| 15 | **„Ordner Scan durchsehen“**: Welcher Ordner gemeint ist, ist offen. Im Laufwerk gibt es „Scans/2026“ mit Scan_20260803_8700.pdf, geändert von MBa am 05.11.2026, seinem letzten Tag. Das Datum 03.08. entspricht der Telefonnotiz in Nr. 1 | ohne Frist | intern | 03_Notizen_MBa.txt, Z. 17 | vermutet (Bezug zum Scan nur aus Datum und Kürzel) | Laufwerk_Export, Blatt Export, Zeile 373 |
| 16 | **„PW Portal neu, liegt im Schrank“**: Ein neues Passwort für ein nicht genanntes Portal liegt offen im Schrank | ohne Frist | intern (Henrike Baum) | 03_Notizen_MBa.txt, Z. 18 | belegt (Notiz), welches Portal: vermutet | – |
| 17 | **Prüflisten je Brandschutzklappe fehlen.** Die Klappenprotokolle 07666 (07.10.2024), 08486 (07.10.2025) und 09267 (30.09.2026) nennen jeweils 235 Klappen und „Prüfliste je Klappe als Anlage im Servicebericht“. Laut Philipp Wiese hat MBa sie auf dem Tablet geführt und nicht ins Laufwerk gelegt | Berater der Eigentümerseite am **10.12.2026** (nur gehört); nächste Prüfung laut Protokoll 02.10.2027 | Torwinkel Gebäudeservice GmbH (Auftraggeber); intern Henrike Baum | 04.21.04.190_2026-09-30_…pdf, S. 1, Feststellungen; 04.21.04.168_…pdf und 04.21.04.145_…pdf, S. 1 | belegt (Lücke). Ob geprüft wurde: offen | Postfach Nr. 17, Z. 292; Nr. 16, Z. 274 |
| 18 | **Protokolle 09354 (02.11.) und 09384 (03.11.2026) nicht abgerechnet.** Gegengezeichnet hat Prange, der bei Torwinkel nicht mehr da ist. Jasmin Ebert fragt, ob sie die Rechnung schicken soll, und bittet Kevin, Auffälligkeiten vorher zu melden | Torwinkel prüft 09384 bis **25.11.2026**, Antwort bis **30.11.2026** (A164) [Personenbriefing_Kevin_Schuster.pdf, S. 5–6, Abschnitt 15] | Jasmin Ebert, Kai Landmann; Torwinkel | Postfach Nr. 18, Z. 309–318 | belegt | 04.21.04.192_…pdf; 04.21.04.193_…pdf |
| 19 | **„Pfeifen am Auslass EG Westfoyer“**: Torwinkel fragt nach dem Stand (seit 26.06.2018). Torwinkel hat geantwortet, die fehlenden Angaben „in den nächsten Tagen“ zu schicken | ohne Frist | Torwinkel Gebäudeservice GmbH | Postfach Nr. 3, Z. 59–67; Nr. 11, Z. 173–181 | vermutet als Vorgang von MBa (Laufwerk: „EMailVerlauf_Raum_EG_Westfoyer_MBa.pdf“) | Laufwerk_Export, Blatt Export, Zeile 377. **Nicht** in Notizen, Fristenliste und Kalender |
| 20 | **Wartungs- und Prüftermine 2027** für den Jahresterminplan melden, mit Anlage, Dauer und Kennzeichnung der Abschaltungen | **30.11.2026** | Torwinkel, Ben Hecht (Servicekoordination) | Postfach Nr. 12, Z. 191–199 (an kontakt@) | vermutet als Aufgabe der Stelle MBa/Kevin (Anlagen Lüftung); Abgleich mit A162 | – |
| 21 | **Postfach von MBa**: keine Weiterleitung. Mails an ihn (zum Beispiel Nr. 1, Nr. 2) erreicht niemand | bis Austritt 30.11.2026 [Annahme] | intern (Henrike Baum) | 02_Abwesenheitsnotiz.txt, Z. 3 | belegt (keine Weiterleitung); Aufgabe „Weiterleitung oder Zugriff einrichten“: vermutet | Personenbriefing_Kevin_Schuster.pdf, S. 1 („keine Weiterleitung eingerichtet“) |
| 22 | **Unterschriftenverzeichnis** mit Stand 04.11.2026 führt MBa noch mit Vollmacht bis 500 EUR. Kevin Schuster steht nicht darin | 30.11.2026 (Austritt) [Annahme] | intern (Henrike Baum); Weitergabe an Raumlot [Annahme] | 11.13.02.031_2026-11-04_Unterschriftenverzeichnis_…pdf, S. 1, Zeile „Maximilian Backhaus“ | belegt (Eintrag); Handlungsbedarf: vermutet | Laufwerk_Export, Blatt Export, Zeile 187 (geändert von MBa am 05.11.2026) |
| 23 | **Regierechnung 2026-1182 Forum**, 991,27 EUR brutto, ohne Fälligkeitsdatum. Nach Vertrag gilt: 30 Tage nach Zugang | ohne Frist (Datum fehlt auf der Rechnung) | Kantbogen Bestand GmbH; intern Kai Landmann | Postfach Nr. 10, Z. 167; Nr. 15, Z. 247 | vermutet als Bezug zu Nr. 11 (Forum). Nicht in den MBa-Listen | OP_Kantbogen_Stand_2026-11-18.xlsx, Zeile 2026-1182 |

Vollständigkeitsprüfung (Kriterium 6 im Blatt):
- Fristenliste Zeilen 2–13: alle enthalten (Nr. 1–13).
- Notizen Z. 3–14 und Z. 16–18: alle enthalten. Z. 3 → Nr. 1, Z. 4–5 → Nr. 3–4, Z. 6–10 → Nr. 5–9, Z. 11–13 → Nr. 11–13, Z. 14 → Nr. 2, Z. 16–18 → Nr. 14–16.
- Kalender Z. 2–5: alle enthalten (Nr. 5, 10, 6, 8).
- Entwürfe 1 und 2: Nr. 1 und 11.

Summe der überfälligen Rechnungen (Nr. 6–10): **3.165,91 EUR netto / 3.767,43 EUR brutto**. Ohne die 2026/3328 sind es 1.130,48 EUR netto [mit Python aus Fristenliste und Kalender summiert, brutto aus Postfach Nr. 9, 13, 14, 15 und OP-Liste]. In der OP-Liste stehen alle mit Mahnstufe 0 und ohne Zahlung [OP_Kantbogen_Stand_2026-11-18.xlsx, Blatt OP Debitor 10014].

## 2 Erwartet, aber nicht gefunden

| Was man erwarten würde | Wo gesucht | Ergebnis |
|---|---|---|
| **Übergabeliste oder Übergabenotiz** von MBa | 03_Material/Abgang (alle Dateien), Postfach Nr. 1–18, Laufwerk-Export (alle 487 Zeilen) | nicht vorhanden. Henrike: „Übergeben wurde nichts“ [01_Mitteilung_Austritt.txt, Z. 10] |
| **Dritter Entwurf** („zwei, drei angefangene Entwürfe“) | 03_Material/Abgang/06_Entwuerfe | nur zwei Entwürfe vorhanden [01_Mitteilung_Austritt.txt, Z. 10] |
| **Prüflisten je Brandschutzklappe** 2024, 2025, 2026, auf die die Protokolle verweisen | Laufwerk-Export (Suchwörter „Klappe“, „Brandschutz“, „Prüfliste“, „Tablet“: nur Küchenabluft- und Fettbrandschutzberichte), Datenraum 04 und Datenraumindex, Abgang, Postfach | nicht gefunden. Laut Postfach Nr. 17, Z. 292 auf dem Tablet geführt |
| **Serviceberichte**, aus denen die Klappenprotokolle stammen („Protokoll als PDF aus dem Servicebericht“) | wie oben | nicht gefunden [04.21.04.190_…pdf, S. 1] |
| **Fotos im CAFM**, die die Protokolle 08901, 08988, 08991, 09272, 09354 und 09384 nennen („Fotos der Anlage im CAFM abgelegt“) | Repository insgesamt; ein CAFM-Export liegt nicht vor | nicht gefunden [z. B. 04.21.04.193_…pdf, S. 1] |
| **Neuere Protokolle im Laufwerk**: Klappenprotokolle 08486 (07.10.2025) und 09267 (30.09.2026), außerdem 08988, 08991, 09272 und 09384 | Laufwerk-Export, Suche nach Nummer 04.21.04.168, .182, .184, .189, .190, .193 | **fehlen im Laufwerk**, liegen nur im Datenraum. Im Laufwerk sind nur 07666 (04.21.04.145, Protokolle, Zeile 267), 08901 (.180, Wartung, Zeile 431) und 09354 (.192, „Kopie von Bogenfeld“, Zeile 199) [Laufwerk_Export; KI_Ergebnis_A007_v2.csv] |
| **Ordner „Ablage MBa“ mit aktuellen Unterlagen** | Laufwerk-Export, Ordner „Ablage MBa“ und „Ablage MBa/alt“, Zeilen 10–15 | jüngstes datiertes Protokoll vom 02.09.2024 (Zeile 10), nichts aus 2025 und 2026 |
| **Termine im Kalender** außer Rechnungen (Wiedervorlagen, Rückruf, Wartungstermine, nächste Klappenprüfung) | 05_Kalender_MBa.csv und .ics | nur vier Einträge, alle Rechnungen [05_Kalender_MBa.csv, Z. 2–5] |
| **Fälligkeiten und Stand** in der Fristenliste | 04_Meine_Fristen_MBa.xlsx, Blatt Fristen; geprüft auf ausgeblendete Zeilen, Spalten, weitere Blätter, Kommentare | „Fällig“ leer in Zeile 2–4 und 10–12, „Stand“ leer in Zeile 2, 7 und 10; keine ausgeblendeten Inhalte |
| **Gesendete Antwort** auf die Telefonnotiz vom 03.08.2026 und auf die Stand-Anfragen von Torwinkel (Nr. 3–6) | Postfach-Export (nur Eingang), Entwürfe | keine Antwort gefunden. Der Entwurf bricht ab. Ein Ausgangsordner liegt nicht vor |
| **Weiterleitung** der Mails von MBa | 02_Abwesenheitsnotiz.txt | keine [Z. 3] |
| **Fälligkeitsdatum** der Regierechnung 2026-1182 | Postfach Nr. 10, OP-Liste | leer [Postfach Nr. 10, Z. 167; Nr. 15, Z. 247] |
| **Angabe, welches Portal** zu „PW Portal neu“ gehört | Notizen, Laufwerk-Export | nicht gefunden [03_Notizen_MBa.txt, Z. 18] |

### 2.1 Nachweise für die Wartungen der letzten drei Jahre (19.11.2023 bis 19.11.2026)

Gesucht wurde im Laufwerk-Export (alle Zeilen, Dateinamen mit Datum und Dateinamen mit Jahreszahl), im Datenraum 04 samt Datenraumindex, in den Abgang-Dateien und im Postfach. Die volle Liste steht in `KI_Ergebnis_A007_v2.csv`.

- **Laufwerk, Dateien mit Datum im Namen:** 32 Treffer: 23 Wartungsprotokolle, 5 Prüfberichte, 4 Arbeitsscheine. Nach Jahr: 13 aus 2024, 13 aus 2025, 6 aus 2026. Sie liegen verstreut über „Allgemein“, „Bogenfeld 12/Wartung 2025“, „Bogenfeld 12/Wartung 2026“, „Bogenfeld NEU“, „Protokolle“, „Temp“, „Wartung“ und „Kopie von Bogenfeld“. Einzelne Dateien stehen doppelt, z. B. 04.21.04.130 in Zeile 27 und 154 [Laufwerk_Export; Rechnung in CSV].
- **Laufwerk, Dateien nur mit Jahreszahl** (z. B. „Wartungsprotokoll 2026.pdf“): 26 Treffer ohne Datum und ohne Nummer. Welche Anlage und welcher Tag gemeint sind, lässt sich ohne die Dateien selbst nicht sagen [Laufwerk_Export; CSV, Spalte „im_datenraum = unklar“].
- **Datenraum 04:** 9 Wartungsprotokolle von MBa aus dem Zeitraum (07666, 08486, 08901, 08988, 08991, 09272, 09267, 09354, 09384). 6 davon fehlen im Laufwerk-Export, siehe Abschnitt 2 [00_Auszug_Datenraumindex.xlsx, Zeilen 04.21.04.*].
- **Brandschutzklappen:** Protokolle für 2024, 2025 und 2026 sind vorhanden. Sie haben dieselbe Verteilung je Geschoss (1. UG 112, EG 22, 1. OG 49, 2. OG 15, 3. OG 8, 4. OG 13, 5. OG 16, Summe 235) [04.21.04.145, .168, .190, jeweils S. 1, „Prüfumfang“]. Die Prüflisten je Klappe fehlen. Das Protokoll von 2023 (04.21.04.125 vom 09.10.2023, Laufwerk „Wartung“, Zeile 427) liegt knapp vor dem Zeitraum.
- **Postfach:** Nachweise nur indirekt, nämlich die Protokolle 09354 und 09384 als „liegen mir vor“ [Postfach Nr. 18, Z. 309–312] und die Prüflisten auf dem Tablet [Nr. 17, Z. 292].

## 3 Widersprüche zwischen den Quellen

| Nr | Widerspruch | Fundstelle A | Fundstelle B |
|---|---|---|---|
| W1 | **Fälligkeit 2026/3329:** 16.12.2026 oder 02.12.2026 | 03_Notizen_MBa.txt, Z. 6 („16.12.“); Fristenliste, Zeile 5 („16.12.2026“) | 05_Kalender_MBa.csv, Z. 2 und .ics, Z. 6 („02.12.2026“). Die OP-Liste stützt den 02.12. (Belegdatum 02.11.2026, fällig 02.12.2026) [OP_Kantbogen_…xlsx, Zeile 2026/3329; Postfach Nr. 18, Z. 316] |
| W2 | **Wiedervorlage Telefonnotiz:** 07.08.2026 oder 17.08.2026 | Fristenliste, Zeile 13 („07.08.2026“); Notizen, Z. 14 („07.08.“) | Postfach Nr. 1, Z. 15–17 („bis 17.08.2026“, „Wiedervorlage: 17.08.2026“) |
| W3 | **Rechnung 2026/3328** fehlt in Notizen und Fristenliste, obwohl sie mit 2.035,43 EUR netto die größte ist | 05_Kalender_MBa.csv, Z. 3 | 03_Notizen_MBa.txt, Z. 6–10 und Fristenliste, Zeile 5–9 (dort nur 3322, 3325, 3326, 3327, 3329) |
| W4 | **Rechnung 2026/3325** fehlt im Kalender und in Henrikes Erinnerungen | Notizen, Z. 8; Fristenliste, Zeile 7 | 05_Kalender_MBa.csv (nicht enthalten); Postfach Nr. 15, Z. 245 |
| W5 | **Stand der Rechnungen:** Die Fristenliste führt 3326 und 3327 als „läuft“, obwohl sie überfällig sind und Henrike den fehlenden Zahlungseingang meldet | Fristenliste, Zeile 6 und 8 | Postfach Nr. 9, Z. 153; Nr. 14, Z. 230 |
| W6 | **Dringlichkeit Revisionsöffnung VSR 4.OG:** „asap“ oder „(gering)“ | 03_Notizen_MBa.txt, Z. 4 | 04.21.04.193 (Protokoll 09384), S. 1, Feststellungen, am Seitenbild geprüft |
| W7 | **Telefonnotiz Kern 2:** Raumlot hält die Meldung für „angemessen bearbeitet“ und empfiehlt, die Akte nach dem 17.08. zu schließen. Bei MBa ist sie „Nachricht ohne Antwort“ bzw. offen, und Torwinkel fragt am 02.11. nach dem Stand | Postfach Nr. 1, Z. 15 | Fristenliste, Zeile 2 und 12; Postfach Nr. 5, Z. 97 |
| W8 | **Gegenüber bei Forum, OG3 Nord und Kern 2:** Die Notizen nennen nur einen Partner, die Fristenliste drei | Notizen, Z. 11–13 (Werkraum bzw. Feldkreis) | Fristenliste, Zeile 10–12 (jeweils zusätzlich Raumlot und Torwinkel) |
| W9 | **Nächster Wartungstermin:** Protokoll 09272 vom 30.09.2026 nennt als nächsten Termin den 02.10.2026, zwei Tage später | 04.21.04.189_2026-09-30_…pdf, S. 1 | im selben Dokument, Datum 30.09.2026. Kein Widerspruch zweier Quellen, aber auffällig |
| W10 | **Datum im Laufwerk:** „Kopie von Wartungsprotokoll 2026.pdf“ trägt als Änderungsdatum den 16.12.2026 und das Kürzel MBa. Das liegt nach dem Austritt und nach dem Exportstand (jüngste sonstige Einträge vom 18.11.2026) | Laufwerk_Export, Blatt Export, Zeile 203 | 01_Mitteilung_Austritt.txt, Z. 8 (Austritt 30.11.2026); Laufwerk_Export, Zeile 487 (18.11.2026) |

## 4 Die ersten drei Punkte (Vorschlag mit Begründung, die Entscheidung liegt bei der Gruppe)

„Was zuerst erledigt wird“ ist im Blatt ausdrücklich „Behalten“ [A007_…pdf, S. 1, „Einsatz von KI“]. Das Folgende ist ein **Vorschlag**.

1. **Brandschutzklappen und Protokolle vom 02./03.11. (Nr. 17, 18, mit Nr. 3)**
   - Hier liegt das größte Risiko: Für 235 Klappen fehlen die Einzelnachweise [04.21.04.190, S. 1; Postfach Nr. 17].
   - Die Fristen sind die engsten: Torwinkel prüft 09384 bis 25.11., die Antwort ist bis 30.11. fällig [Personenbriefing_Kevin_Schuster.pdf, S. 6, Abschnitt 15]. Die Berater kommen nach Hörensagen am 10.12. [Postfach Nr. 16, Z. 274].
   - Nur bis 30.11. ist MBa formal noch Mitarbeiter [01_Mitteilung_Austritt.txt, Z. 8].
   - Jasmin wartet mit der Rechnung auf Kevins Rückmeldung [Postfach Nr. 18, Z. 318].
2. **Überfällige Rechnungen Kantbogen (Nr. 6–10, dazu W1 für Nr. 5)**
   - 3.767,43 EUR brutto sind überfällig, alle mit Mahnstufe 0. Eine Rechnung (3325) fehlt in den Erinnerungen [Abschnitt 1; Postfach Nr. 15].
   - Die Klärung liegt bei Kai (A161). Von hier aus genügt der Abgleich, welche Rechnungen MBa noch hatte und warum 3328 in seinen Listen fehlt.
3. **Antwort an Raumlot und Torwinkel: wer übernimmt (Nr. 1, 2, 11–13, 19)**
   - Vier Stand-Anfragen von Torwinkel fragen ausdrücklich, „wer das übernimmt“ [Postfach Nr. 3–6].
   - Die Wiedervorlage ist seit über drei Monaten überschritten [Fristenliste, Zeile 13].
   - Eine kurze Mitteilung mit dem neuen Ansprechpartner kostet wenig und nimmt Druck. Vorher mit Henrike sprechen, so Philipp Wiese [Postfach Nr. 17, Z. 294].
   - Knapp dahinter: Jahresterminplan 2027 bis 30.11. (Nr. 20) mit Selim (A162).

## 5 Was die Gruppe selbst entscheiden oder liefern muss

1. **Reihenfolge der ersten drei Punkte** (Behalten) [A007_…pdf, S. 1]: Abschnitt 4 ist nur ein Vorschlag.
2. **Bestätigung durch Kai Landmann (A161):** Abgleich der Rechnungen 3322, 3325, 3326, 3327, 3328 und 3329 mit der Offene-Posten-Liste, vor allem W1 (16.12. oder 02.12.) und die fehlende 3328 [A007_…pdf, S. 2, „Eingang aus Ihrer Gruppe“]. In der Ablage liegt **noch keine Bestätigung** von Kai (kein Gruppenbeitrag in ablage/Person_2/A161_* oder ablage/Person_5/A007_*). Ein KI-Ergebnis zu A161, das im selben Lauf entsteht, ist keine Bestätigung durch Kai. Was Kai bestätigt, bitte vermerken.
3. **Bestätigung durch Selim Ahrens (A162, A165):** Abgleich der warmen Räume (Nr. 1, 11, 12, 13) mit den Einsätzen und Vorgängen. Auch hier liegt **noch kein Eingang** in der Ablage. Hinweis für den Abgleich: Kern 2 hat in der Disposition die Tickets TKT-113312 (24.07.2026) und TKT-113393 (07.09.2026, AUF-2656), beide bezahlt [Einsaetze_Raumklima_Bogenfeld_2025_2026.xlsx].
4. **Bildschirmfotos** der drei wichtigsten Originalstellen [A007_…pdf, S. 2, „Woran es gemessen wird“, Punkt 2]. Vorschlag:
   - Fristenliste, Zeile 5, neben Kalender-CSV, Z. 2 (W1)
   - Klappenprotokoll 09267, S. 1, Feststellungen „Prüfliste je Klappe als Anlage“
   - Postfach Nr. 1, Z. 17 (Wiedervorlage 17.08.) neben Fristenliste, Zeile 13
5. **Lücke benannt:** Bei wem was angefragt wurde und wann (Prüflisten, Servicebericht, CAFM-Fotos, Portal-Passwort, Zugriff auf das Postfach von MBa) [A007_…pdf, S. 2, Punkt 4]. Der Agent hat nichts angefragt und nichts abgeschickt.
6. **Postfach Nr. 11:** Der an eine „automatische Verarbeitung“ gerichtete Zusatz sollte im Lernprotokoll vermerkt werden („KI-Einsatz offen“).
7. **Passwort im Schrank (Nr. 16):** Vorschlag: Henrike informieren, damit das Passwort gesichert oder geändert wird. Begründung: Es liegt ungesichert, und niemand weiß, welches Portal gemeint ist.
8. **Lernprotokoll:** Was die KI geliefert hat (diese Tabelle, die Kalenderumwandlung und das Zusammenführen der vier Quellen) und was die Gruppe daran geändert hat [A007_…pdf, S. 1, „Einsatz von KI“: Kalender „Abgeben“, Zusammenführen „Teilen“].
9. (aus dem eigenen Personenbriefing, nur für Kevin Schuster) Das Tablet von MBa steht gesperrt im Schrank der Werkstatt, die PIN kennt nur er. Er hat Resturlaub bis 30.11. und steht mit Mobilnummer auf der Notfallliste [Personenbriefing_Kevin_Schuster.pdf, S. 6, Abschnitt 15, „Was nur Sie wissen“]. Ob er angerufen wird, ist eine Entscheidung mit Henrike Baum und Gegenstand von A008 Teil 3 [ebd., „Ihre Entscheidungen“]. Vorschlag: vor dem 30.11. entscheiden, weil danach die formale Bindung als Mitarbeiter endet [Annahme].
10. (aus dem eigenen Personenbriefing, nur für Kevin Schuster) Die Nachricht zu den Klappen an Torwinkel geht bis 25.11. in Uebergaben/K65. Die Abnahme-Rückfrage zu den Protokollen vom 03.11. kommt bis 25.11. in Uebergaben/Abnahme_Wartung [Personenbriefing_Kevin_Schuster.pdf, S. 6, „Ihr Gegenüber“]. Keiner der beiden Eingänge liegt bisher in der Ablage. Es ist auch nichts abgeschickt. Seit dem 23.11. ruhen beide Übergaben [00_Bis_zum_2_12.pdf, „Was bis auf Weiteres nicht gilt“].
11. **Sprachnotizen und Kurschat:** Im Repository sind keine Sprachnotizen und keine Kurschat-Nachrichten zu A007 vorhanden. Falls es welche gibt, muss die Gruppe sie selbst einbringen.

## 6 Geprüft

1. **Fälligkeit 2026/3329 (W1):** Die Fristenliste wurde direkt mit openpyxl gelesen. Zelle C5 enthält den Text „16.12.2026“ (Text, kein Datumswert), Zelle E5 „2026/3329“. Außerdem geprüft: keine weiteren Blätter, keine ausgeblendeten Zeilen oder Spalten, keine Kommentare. Gegenprobe in der .ics-Datei: DTSTART:20261202T090000 (UID MBa-1), also wie die CSV. Die CSV gibt den Kalender richtig wieder.
2. **Klappenprotokoll 09267 vom 30.09.2026:** Die PDF-Seite 1 wurde mit pdftoppm als Bild gerendert und angesehen. Datum 30.09.2026, Summe 235, Geschosswerte 112/22/49/15/8/13/16 und der Satz „Prüfliste je Klappe als Anlage im Servicebericht“ stimmen mit der Textfassung überein. Die Summe ist mit Python nachgerechnet (112+22+49+15+8+13+16 = 235; 191+4+40 = 235).
3. **Protokoll 09384 vom 03.11.2026 (gescannt, OCR):** Die PDF-Seite 1 wurde als Bild gerendert. Die OCR liest „4.0G“ und „20:115 m3/h“. Im Bild stehen „4.OG“ und „20.115 m3/h“, außerdem „Zugang zur Revisionsöffnung durch Lagergut verstellt (gering)“, Arbeitszeit 2,0 Stunden und die Gegenzeichnung Dennis Prange.

Zusätzlich mit Code geprüft: die Wochentage (05.11.2026 Donnerstag, 16.11.2026 Montag, 02.12.2026 Mittwoch), die Tage seit den Wiedervorlagen (104 bzw. 94 Tage bis 19.11.2026), die Summen der überfälligen Rechnungen und die Zeilennummern im Laufwerk-Export (Excel-Zeile, direkt aus der .xlsx gelesen).
