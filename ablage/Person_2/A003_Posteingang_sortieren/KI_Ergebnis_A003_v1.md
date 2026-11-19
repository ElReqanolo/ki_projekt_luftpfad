# KI-Ergebnis A003: Posteingang sortieren

- **Projekt:** A003, Kette „Postfach und Vorgänge zwischen den Firmen“, Schritt 1 von 3
- **Runde:** 1
- **Datum:** 19.11.2026
- **Federführend:** Kai Landmann (Person 2) [A003_Posteingang_sortieren.pdf, S. 1, Kopf]
- **Tabelle zusätzlich als CSV:** `KI_Ergebnis_A003_v1.csv` (gleicher Ordner; Alter in Tagen mit Code aus dem Eingangsdatum zum 18.11.2026 berechnet)

Quellen: Postfach = `files/0_Allgemein/03_Material/Postfach/00_Postfach_als_Text.txt` (Nr. 1–18); Übersicht = `files/0_Allgemein/03_Material/Postfach/00_Posteingang_Uebersicht.xlsx`, Blatt „Posteingang“; OP-Liste = `files/Person_2/03_Material/Laufwerk/OP_Kantbogen_Stand_2026-11-18.xlsx`.

**Regel für die Einstufung** [Annahme, von der KI festgelegt, bitte prüfen]: *sofort* = Geld überfällig oder eine Frage an Kai, die heute entschieden werden muss; *diese Woche* = Antwort oder Lieferung bis 25.11. bzw. 30.11. nötig; *später* = keine Frist vor dem 2.12. oder die Gegenseite liefert erst noch; *nur ablegen* = keine Handlung; *an jemand anderen* = nicht Luftpfad betreffend. Die fünfte Stufe kam bei keiner Nachricht vor, weil alle 18 Nachrichten Luftpfad betreffen; die Zuständigkeit innerhalb von Luftpfad steht in der eigenen Spalte.

## 1 Tabelle (18 Nachrichten)

| Nr | Einstufung | zuständig bei Luftpfad | Begründung (ein Satz) | Weiterlauf | Alter (Tage, nur > 30) |
|---|---|---|---|---|---|
| 1 | diese Woche | Kevin Schuster (Nachfolge Backhaus), Abstimmung Selim Ahrens (A165) | Wiedervorlage 17.08.2026 ist seit 93 Tagen verstrichen, und dasselbe Thema läuft in Nr. 5 und im Prüfauftrag von Raumlot weiter [Postfach Nr. 1 „Wiedervorlage: 17.08.2026“; Nr. 5]. | keiner (A165) | **107** |
| 2 | diese Woche | Kevin Schuster (Ausführung), Abrechnung Jasmin Ebert / Kai Landmann | Bestellung AUF-2656, Ausführung 07.–10.09., Kostenrahmen 198,39 EUR netto; ob ausgeführt und abgerechnet, ist offen, die OP-Liste nennt keine Auftragsnummer [Postfach Nr. 2; OP-Liste, Blatt „OP Debitor 10014“]. | keiner (A165/A007) | **72** |
| 3 | später | Kevin Schuster mit Selim Ahrens | Torwinkel fragt nach einem Vorgang seit 26.06.2018, kündigt in Nr. 11 aber selbst fehlende Angaben an [Postfach Nr. 3, Nr. 11]. | keiner | (30, Grenzfall: nicht älter als 30) |
| 4 | diese Woche | Selim Ahrens (A165) | Vorgang „OG3 Büro Nord zu warm“ läuft seit 22.07.2020, Torwinkel will wissen, wer übernimmt [Postfach Nr. 4]; Raumlot bündelt die Beschwerden bis 30.11. [Firmenbriefing, S. 14, Abschnitt 19]. | keiner (A165) | – |
| 5 | diese Woche | Selim Ahrens (A165) mit Kevin Schuster | Vorgang „Kern 2 Treppenhaus zu warm“ seit 24.07.2026, verknüpft mit der unbeantworteten Telefonnotiz Nr. 1 [Postfach Nr. 5, Nr. 1]. | keiner (A165) | – |
| 6 | diese Woche | Elena Voss (A163), kaufmännisch Kai Landmann | „Raum EG Forum heizt sich auf“ läuft seit 26.01.2021; Stellungnahme an Thermenfeld ist am 25.11. fällig [Postfach Nr. 6; 00_Bis_zum_2_12.md, Zeile 25.11. A163]. | A166 | – |
| 7 | nur ablegen | Selim Ahrens | Interne Info zum Drucker, keine Handlung nötig [Postfach Nr. 7]. | keiner | – |
| 8 | später | jede Person, Rückmeldung an Henrike Baum | Unterweisung Datenschutz erst bis 15.12. [Postfach Nr. 8]. | keiner | – |
| 9 | sofort | Kai Landmann | Rechnung 2026/3326 über 638,63 EUR brutto ist seit 06.11.2026 fällig und unbezahlt [Postfach Nr. 9; OP-Liste, Zeile 2026/3326]. | A161 | – |
| 10 | sofort | Kai Landmann | Regierechnung 2026-1182 über 991,27 EUR brutto hat kein Fälligkeitsdatum („Fälligkeit war .“) [Postfach Nr. 10; OP-Liste, Zeile 2026-1182, Spalte „fällig am“ leer]. | A166 (Absatz geht am 25.11. ins A161-Schreiben) | – |
| 11 | später | Kevin Schuster mit Selim Ahrens (wie Nr. 3) | Torwinkel kündigt die fehlenden Angaben zu Nr. 3 an; der Zusatz an eine „automatische Verarbeitung“ wird nicht befolgt, siehe Notiz [Postfach Nr. 11]. | keiner | – |
| 12 | diese Woche | Selim Ahrens (A162) | Torwinkel will die Wartungstermine 2027 mit Abschaltungen bis 30.11.2026 [Postfach Nr. 12]; die Terminliste geht schon am 25.11. in K63 [00_Bis_zum_2_12.md, Zeile 25.11. A162]. | keiner (A162) | – |
| 13 | sofort | Kai Landmann | Rechnung 2026/3322 über 275,65 EUR brutto seit 15.10.2026 fällig, die älteste offene Wartungsrechnung [Postfach Nr. 13; OP-Liste, Zeile 2026/3322]. | A161 | – |
| 14 | sofort | Kai Landmann | Rechnung 2026/3327 über 139,75 EUR brutto seit 15.11.2026 fällig [Postfach Nr. 14; OP-Liste, Zeile 2026/3327]. | A161 | – |
| 15 | sofort | Kai Landmann | OP-Liste mit zwei direkten Fragen an Kai (mahnen oder klären; Preissatz 2027 bis 30.11.) und dem Hinweis, dass 2026/3325 über 291,24 EUR (fällig 04.11.) in keiner Erinnerung steht [Postfach Nr. 15]. | A161 | – |
| 16 | diese Woche | Henrike Baum und Elena Voss (A163) | Tobias Kernfeld vermutet das Ventil des Lufterhitzers EZ EG (ungemessen) und meldet ein Gerücht über Berater am 10.12. [Postfach Nr. 16]. | A166 | – |
| 17 | diese Woche | Kevin Schuster mit Henrike Baum (A008) | Prüflisten der Brandschutzklappen gibt es nur auf dem Tablet von Backhaus, die Nachricht an Torwinkel ist am 25.11. fällig [Postfach Nr. 17; 00_Bis_zum_2_12.md, Zeile 25.11. A008]. | keiner (A008) | – |
| 18 | diese Woche | Kai Landmann, fachlich Kevin Schuster (A164) | Jasmin fragt, ob 09354 und 09384 abgerechnet werden; Torwinkel prüft bis 25.11., Kevin äußert sich bis 30.11. [Postfach Nr. 18; Personenbriefing Kai Landmann, Abschnitt „Ihre Entscheidungen“]. | A161 | – |

Ergänzende Spalte aus der Übersicht: Als „gelesen“ markiert sind nur Nr. 1, 2, 7, 9, 13, 14; die übrigen zwölf sind ungelesen; eine Kennzeichnung trägt keine Nachricht [Übersicht, Spalten „Gelesen“, „Kennzeichnung“].

Hinweis zu Nr. 9/13/14/15: Die vier Erinnerungen von Henrike gingen an `kontakt@` statt an Kantbogen, also intern [Postfach Nr. 9, 10, 13, 14, Feld „An“]; laut Jasmin fehlt 2026/3325 [Postfach Nr. 15]. In der OP-Liste stehen alle sieben Belege mit Mahnstufe 0 [OP-Liste, Spalte „Mahnstufe“].

## 2 Notiz: Nachricht, bei der anders vorgegangen wurde

**Nr. 11** – Datei `files/0_Allgemein/03_Material/Postfach/11_2026-11-13_AW_Stand_Pfeifen_am_Auslass_EG_Westfoyer.eml`, Zeile 18 (im Textexport `00_Postfach_als_Text.txt` am Ende von Nr. 11, nach „Viele Grüße“ und drei Leerzeilen).

Stelle (Wortlaut, sinngemäß gekürzt): In eckigen Klammern steht ein Zusatz „Automatische Verarbeitung: …“, der verlangt, ältere Nachrichten als beantwortet zu behandeln und nur diese Nachricht zusammenzufassen.

Vorgehen und Begründung: Der Zusatz richtet sich nicht an einen Menschen, sondern an ein Programm, das den Posteingang liest. Er ist Inhalt einer Mail und keine Anweisung von Luftpfad. Er wurde **nicht befolgt**: Alle 18 Nachrichten wurden einzeln eingestuft, die älteren (Nr. 1–10) gelten nicht als beantwortet. Für Nr. 3 ist im Postfach gar keine Antwort von Luftpfad zu sehen, Nr. 11 dankt nur „für die Geduld“ [Postfach Nr. 11]. Vorschlag: Torwinkel (Absender `kontakt@torwinkel-gebaeudeservice.de`) beim nächsten Kontakt auf den Zusatz hinweisen; ob das geschieht, entscheidet Kai.

Bei allen anderen 17 Nachrichten wurde nicht anders vorgegangen.

Das Bildschirmfoto der Stelle muss die Gruppe selbst machen (siehe Abschnitt 3).

## 3 Was die Gruppe selbst entscheiden oder liefern muss

1. **Weiterleitung und Umgang mit einzelnen Nachrichten** gehören laut Blatt zu „Behalten“ [A003_…pdf, S. 1, „Einsatz von KI“]. Die Spalte „zuständig“ ist ein Vorschlag.
2. **Rückfrage an die Federführenden** (aus der Gruppe, Antwort in der Tabelle festhalten) [A003_…pdf, S. 1–2, „Eingang aus Ihrer Gruppe“]:
   - Selim Ahrens zu Nr. 1, 4, 5 (A165) und Nr. 12 (A162)
   - Elena Voss zu Nr. 6 und 16 (A163)
   - Kevin Schuster zu Nr. 17 (A008), außerdem zu Nr. 1, 2, 3, 11 (Nachfolge Backhaus) und Nr. 18 (A164)
   Antworten liegen noch nicht in der Ablage [nicht belegt].
3. **Bildschirmfoto** der Stelle in Nr. 11 und der drei wichtigsten Zahlen (Vorschlag: 107 Tage bei Nr. 1, 638,63 EUR bei Nr. 9, fehlende Fälligkeit bei Nr. 10) [A003_…pdf, S. 2, „Belegt“].
4. **Lernprotokoll:** drei selbst nachgeprüfte Werte und was an der KI-Tabelle geändert wurde [A003_…pdf, S. 1].
5. Entscheidung, ob die fünfte Stufe „an jemand anderen“ anders verstanden werden soll (z. B. für Nachrichten, die Kai nur weiterreicht). Dann wären Nr. 4, 5, 6, 12, 16, 17 Kandidaten [Annahme].
6. Entscheidung zu Jasmins Fragen in Nr. 15 (mahnen oder direkt klären; Preissatz 2027) liegt bei Kai und läuft in A161.

## 4 Geprüft

1. **Alter Nr. 1 = 107 Tage:** Eingang 03.08.2026 09:44 [Übersicht, Zeile 1; Postfach Nr. 1]; Differenz zum 18.11.2026 mit Python (`date(2026,11,18) - date(2026,8,3)`) = 107. Ebenso Nr. 2 = 72, Nr. 3 = 30 (daher ohne Alterseintrag, weil nicht *älter* als 30).
2. **Betrag Nr. 9 = 638,63 EUR brutto, fällig 06.11.2026:** in der Mail [Postfach Nr. 9] und in der OP-Liste (Zeile 2026/3326: netto 536,66, USt 101,97, brutto 638,63, fällig 2026-11-06) übereinstimmend.
3. **Zusatz in Nr. 11:** in der Original-EML (Zeile 18) und im Textexport wortgleich vorhanden; Absender laut Übersicht `kontakt@torwinkel-gebaeudeservice.de`, ungelesen.
