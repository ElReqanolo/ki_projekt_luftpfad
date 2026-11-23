# KI-Ergebnis A161: Offene Rechnungen, Preisanpassung und Laufzeit

- **Projekt:** A161, Kette „Vertrag VTR-1005“, Schritt 1 von 2 [A161_Offene_Rechnungen_Preisanpassung_und_Kuendigungsfenster.pdf, S. 1, Kopf]
- **Runde:** 2
- **Datum:** 23.11.2026 (Runde 1 vom 19.11.2026)
- **Federführend:** Kai Landmann (Person 2), Entscheidungen gemeinsam mit Henrike Baum (Person 1) [A161_….pdf, S. 1, Auftrag, letzter Absatz]
- **Rechentabelle:** `KI_Ergebnis_A161_v2.csv` (OP-Abgleich, Zinsen, Preisanpassung, Laufzeit; alles mit Python aus den Zeilen der Originaldateien gerechnet)

## Änderungen gegenüber v1

Runde 2 vom 23.11.2026: Alle Projekte wurden auf Wunsch der Gruppe unabhängig vom Status erneut geprüft. Feedback der Gruppe lag nicht vor.

- **Lage seit dem 23.11.2026:** Laut dem neuen Blatt „Bis zum 2.12.“ ruhen die Aufgabenblätter der Figuren bis auf Weiteres. Abgabetage, Stundenangaben und Lieferungen an andere Firmen gelten nicht, in 90_Uebergaben wird nichts abgelegt, und keine Gruppe wartet auf Post [00_Bis_zum_2_12.pdf, „Was bis auf Weiteres nicht gilt“]. Fristen und Übergabeordner in dieser Datei stehen so im Aufgabenblatt und gelten erst wieder, wenn der Dozent es sagt [ebd., letzter Absatz].
- **Status von „Infos benötigt“ auf „Von KI erledigt“:** Die fehlenden Eingänge kommen derzeit nicht, weil die Firmen einander bis auf Weiteres nichts liefern [00_Bis_zum_2_12.pdf, „Was bis auf Weiteres nicht gilt“]. Sie stehen jetzt hier statt in der Statusliste: Antwort von Kantbogen auf das Schreiben (für den Vermerk) (Kantbogen (Sophia Albrecht / Eva Brandt), Uebergaben/K61). Alles, was ohne sie geht, ist fertig; der Rest bleibt als Gerüst.
- Das Schreiben an Kantbogen in K61 (Entwurf 1.6) wird derzeit nicht übergeben [00_Bis_zum_2_12.pdf, „Was bis auf Weiteres nicht gilt“]. Die Antwort an Jasmin Ebert (1.5) ist gruppenintern und bleibt verwendbar.
- Zahlen unverändert: fällig 3.767,43 EUR, gesamt 5.055,27 EUR brutto, Kündigung spätestens 02.01.2027 zum 02.04.2027. Sie stimmen mit START und A004 überein.

**Geprüft in Runde 2:**

1. OP-Liste erneut mit openpyxl gelesen; Summen wie in START (siehe dort).
2. 02.01.2027 = Samstag mit Python bestätigt.
3. Zahlungsregel § 16 in der Textfassung von 04.03.01.018 gefunden.

Abkürzungen der Quellen in dieser Datei:
- **VTR** = 04.03.01.018_2018-03-06_Wartungsvertrag_Torwinkel.pdf (Scan, 3 Seiten, im Original geprüft)
- **OP** = OP_Kantbogen_Stand_2026-11-18.xlsx, Blatt „OP Debitor 10014“
- **IDX** = Indexreihen_VPI_Basiszins.xlsx, Blätter „VPI“ und „Basiszins“
- **ANG** = 07.19.02.040_2018-02-27_Angebot_Luftpfad_Anlagentechnik.pdf
- **PA23** = 07.24.03.011_2023-12-04_Indexberechnung_Luftpfad_Anlagentechnik.pdf
- **Nr. N** = Postfach-Mail Nr. N in 0_Allgemein/03_Material/Postfach/

**Status dieser Datei:** Alles hier ist Vorarbeit und Entwurf. Nichts ist abgeschickt, nichts entschieden, nichts unterschrieben. Keine Rechtsberatung: Aussagen zu Verzug, Zinsen und Kündigung sind Lesarten des Vertragstexts und vor Verwendung zu prüfen.

---

## 1 Ergebnis

### 1.1 Offene-Posten-Abgleich (Stand 18.11.2026)

Alle Posten der Liste; Beträge in EUR, Spalten ausdrücklich netto / USt / brutto [OP, Zeilen 5–11]. „Erinnerung“ = Mail von Henrike Baum „Zahlungseingang fehlt“ [Nr. 9, 10, 13, 14].

| Beleg | Belegdatum | netto | USt | brutto | fällig am | Stand 18.11.2026 | Erinnerung | Quelle |
|---|---|---:|---:|---:|---|---|---|---|
| 2026/3322 | 15.09.2026 | 231,64 | 44,01 | 275,65 | 15.10.2026 | überfällig (34 Tage), nicht bezahlt | ja, Nr. 13 (16.11.) | [OP, Z. 5; Nr. 13] |
| 2026/3325 | 05.10.2026 | 244,74 | 46,50 | 291,24 | 04.11.2026 | überfällig (14 Tage), nicht bezahlt | **nein** | [OP, Z. 6; Nr. 15] |
| 2026/3326 | 07.10.2026 | 536,66 | 101,97 | 638,63 | 06.11.2026 | überfällig (12 Tage), nicht bezahlt | ja, Nr. 9 (09.11.) | [OP, Z. 7; Nr. 9] |
| 2026/3327 | 16.10.2026 | 117,44 | 22,31 | 139,75 | 15.11.2026 | überfällig (3 Tage), nicht bezahlt | ja, Nr. 14 (18.11.) | [OP, Z. 8; Nr. 14] |
| 2026/3328 | 19.10.2026 | 2.035,43 | 386,73 | 2.422,16 | 18.11.2026 | am Stichtag fällig, nicht bezahlt | **nein** | [OP, Z. 9; Nr. 15] |
| 2026/3329 | 02.11.2026 | 249,22 | 47,35 | 296,57 | 02.12.2026 | offen, noch nicht fällig | nein | [OP, Z. 10] |
| 2026-1182 | 02.11.2026 | 833,00 | 158,27 | 991,27 | **leer** | offen, Fälligkeit nicht eingetragen | ja, Nr. 10 (10.11., „Fälligkeit war .“) | [OP, Z. 11; Nr. 10; Nr. 15] |

Aus den Zeilen gerechnet (nicht aus der Summenzeile; Zeile 13 der Datei enthält nur die Formeln `=SUM(D5:D11)` usw.) [OP, Z. 13; Rechnung in CSV]:

| Summe | netto | USt | brutto |
|---|---:|---:|---:|
| **Fällige Posten** (fällig bis einschl. 18.11.: 3322, 3325, 3326, 3327, 3328) | 3.165,91 | 601,52 | **3.767,43** |
| davon überfällig (fällig vor 18.11.: 3322, 3325, 3326, 3327) | 1.130,48 | 214,79 | 1.345,27 |
| **Gesamtstand** (alle 7 Zeilen) | 4.248,13 | 807,14 | **5.055,27** |

Befunde aus dem Abgleich:
- Netto + USt = brutto in allen Zeilen, USt jeweils 19,00 % [Rechnung]. Fälligkeit = Belegdatum + 30 Tage in allen Zeilen mit Datum [Rechnung; VTR, S. 1, § 3 und S. 3, § 16]. Der Vertrag rechnet die 30 Tage ab **Zugang**, die Liste ab Belegdatum [VTR, S. 3, § 16]; der Zugangstag ist nicht belegt [nicht belegt].
- Die vier „Erinnerungen“ gingen an **kontakt@luftpfad-anlagentechnik.de**, also an die eigene Firmenadresse, nicht an Kantbogen [Nr. 9, 10, 13, 14, Kopfzeile „To“; Nr. 15: „vier Erinnerungen an kontakt@“]. Eine Zahlungserinnerung an Kantbogen ist damit nicht belegt [nicht belegt]. Mahnstufe überall 0 [OP, Spalte I; Nr. 15].
- 2026/3325 und 2026/3328 haben keine Erinnerung; das deckt sich mit Jasmin Ebert [Nr. 15]. Mit dem Personenbriefing stimmt der Stand überein: vier überfällig, eine am 18.11. fällig, 2026-1182 ohne Fälligkeit [Personenbriefing_Kai_Landmann.pdf, S. 4, Abschnitt 12].
- 2026-1182: Nach Vertrag 30 Tage nach Zugang [VTR, S. 3, § 16; Nr. 15]; bei Zugang am 02.11.2026 wäre das der 02.12.2026 [Annahme]. Die Rechnung wird in A166 geprüft [A161_….pdf, S. 1, Kopf].

### 1.2 Zinsrechnung

**Vertragsstelle:** „Bei Zahlungsverzug schuldet der Auftraggeber Zinsen nach dem Gesetz, das sind neun Prozentpunkte über dem Basiszinssatz nach § 247 BGB, soweit er kein Verbraucher ist.“ [VTR, S. 3, § 16, im Original gelesen]. Kantbogen ist eine GmbH [VTR, S. 1, Parteien], also kein Verbraucher [Annahme]. Ob Verzug ohne Mahnung schon mit Ablauf der 30 Tage eintritt, ist eine Rechtsfrage; hier unterstellt [Annahme, keine Rechtsberatung].

**Gewählte Rechnung:** 2026/3322 (älteste überfällige Rechnung).

| Angabe | Wert | Quelle |
|---|---|---|
| Betrag brutto | 275,65 EUR | [OP, Z. 5] |
| fällig am | 15.10.2026 | [OP, Z. 5] |
| Zinsbeginn | 16.10.2026 | [Annahme: Tag nach Fälligkeit] |
| Zinsende | 25.11.2026 (Tag, an dem das Schreiben in K61 liegt) | [A161_….pdf, Übergabe; 00_Bis_zum_2_12.md, 25.11.] |
| Zinstage | 41 (16.–31.10. = 16, 01.–25.11. = 25) | [Rechnung] |
| Basiszinssatz | 1,04 % (gültig ab 01.07.2026) | [IDX, Blatt Basiszins, letzte Zeile] |
| Zinssatz | 1,04 + 9 = 10,04 % p. a. | [VTR, S. 3, § 16; IDX] |
| **Zinsbetrag** | 275,65 × 10,04 % × 41/365 = **3,11 EUR** | [Rechnung; Annahme: Zinsen auf brutto, act/365] |

Zum Vergleich, gleiche Annahmen, bis 25.11.2026 [Rechnung, CSV]: 3325: 1,68 EUR (21 Tage); 3326: 3,34 EUR (19 Tage); 3327: 0,38 EUR (10 Tage); 3328: 4,66 EUR (7 Tage). Alle fünf zusammen 13,17 EUR [Rechnung].

**Wie der Basiszinssatz geprüft wurde und was dabei herauskam:**
1. Innere Prüfung der Tabelle: Werte stehen jeweils zum 01.01. und 01.07., wie es § 247 BGB vorsieht [IDX, Blatt Basiszins; Annahme zur Halbjahresregel]. **Lücke:** Zwischen 01.01.2019 (−0,88) und 01.01.2022 (−0,16) fehlen fünf Halbjahre [IDX, Blatt Basiszins]. Für die Zinsrechnung 2026 ist das ohne Folge, zeigt aber, dass die Tabelle von Hand gepflegt ist.
2. Herkunft: Die Tabelle nennt keine Quelle für den Basiszins; das Blatt VPI trägt den Vermerk „nachgetragen JEb aus den Indexberechnungen“ [IDX, Blatt VPI, Zeile 2]. Eine amtliche Quelle ist im Repository nicht vorhanden [nicht belegt].
3. Abgleich mit der amtlichen Veröffentlichung (Deutsche Bundesbank) konnte der Agent nicht durchführen, weil er nur Unterlagen aus dem Repository verwendet. **Hinweis aus dem Wissensstand der KI, nicht aus den Unterlagen belegt:** Die veröffentlichten Werte lagen nach diesem Wissen deutlich anders, z. B. 3,62 % ab 01.01.2024 (Tabelle: 1,21 %) und 2,27 % ab 01.01.2025 (Tabelle: 0,89 %) [nicht belegt, bitte bei der Bundesbank nachsehen]. Den Wert ab 01.07.2026 muss die Gruppe selbst nachsehen.
4. Wirkung: Je Prozentpunkt Abweichung ändert sich der Zins für 2026/3322 um 0,31 EUR [Rechnung].

### 1.3 Preisanpassung zum 1. Januar 2027

**Was der Vertrag sagt** [VTR, S. 1, § 4, im Original gelesen]: Angepasst wird **die Pauschale** zum 1. Januar. Maßgeblich zu **60 % die Tariflöhne im Gewerbe** und zu **40 % die Erzeugerpreise** für die verwendeten Materialien, jeweils ab den Werten bei Vertragsbeginn. Nur wenn diese Werte entfallen, tritt der **Verbraucherpreisindex (Basis 2010 = 100)** an ihre Stelle.

**Stundensätze bei Vertragsbeginn** (§ 5): Fachhelfer 42,65, Monteur 54,70, Meister 68,60, **Ingenieur 89,00 EUR** [VTR, S. 2, § 5 (Fortsetzung oben auf S. 2)]. Ob § 4 auch die Stundensätze erfasst, sagt der Text nicht ausdrücklich („Die Pauschale wird … angepasst“) [VTR, S. 1, § 4; Annahme zur Lesart, keine Rechtsberatung].

**Grundlage der Anpassung vom 04.12.2023** [PA23, S. 1]: „nach der Gleitklausel des Vertrags VTR-1005“, Satz Ingenieur 95,93 EUR (ab 01.01.2023) → 101,74 EUR (ab 01.01.2024), gerechnet mit dem **Verbraucherpreisindex** 2023-01 = 110,7 und 2024-01 = 117,4, Veränderung 6,05 v. H.

Nachrechnung: 117,4 / 110,7 = 1,060524 → 95,93 × 1,060524 = **101,74 EUR**; rechnerisch stimmt der Brief [Rechnung; IDX, Blatt VPI, Zeilen 2023-01 und 2024-01].

**Passen Vertrag, Angebot und Brief zusammen? Nein, an vier Stellen:**

| Nr. | Unterschied | Beträge / Stellen |
|---|---|---|
| 1 | **Verfahren:** Brief rechnet nur mit VPI; Vertrag verlangt 60 % Tariflohn / 40 % Erzeugerpreis, VPI nur als Ersatz | [PA23, S. 1] gegen [VTR, S. 1, § 4] |
| 2 | **Indexbasis:** Vertrag nennt Basis 2010 = 100; Brief und Tabelle verwenden Werte zur Basis 2020 (bis 2019 Basis 2015) | [VTR, S. 1, § 4]; [IDX, Blatt VPI, Spalte „Basis“] |
| 3 | **Zeitpunkt:** Der Brief ist vom 04.12.2023, nennt aber schon den VPI für **Januar 2024** (117,4). Dieser Wert kann am 04.12.2023 noch nicht veröffentlicht gewesen sein | [PA23, S. 1, Datum und Indexzeile; Annahme zur Veröffentlichung] |
| 4 | **Pauschale:** Vertrag 81.500 EUR Jahrespauschale, zahlbar in vier Raten (je 20.375 EUR), ohne Angabe netto/brutto; Angebot 34.168,74 EUR **netto**, ohne Angabe des Zeitraums. Differenz 47.331,26 EUR, Faktor 2,385 | [VTR, S. 1, § 3]; [ANG, S. 1]; [Firmenbriefing_Luftpfad_Anlagentechnik.pdf, S. 14, Abschnitt 19] |

Weitere Befunde:
- Der Ausgangssatz 2023 (95,93 EUR) ist in keiner Unterlage begründet [nicht belegt]. Rechnerisch passt **89,00 × 110,7 / 102,7 = 95,93**, also VPI April 2018 (Basis 2015) zu Januar 2023 (Basis 2020) [Rechnung; IDX]. Das wäre eine Rechnung über zwei verschiedene Indexbasen hinweg und damit fachlich falsch; es ist nur eine mögliche Erklärung [Annahme].
- Die Tabelle der Buchhaltung wurde „aus den Indexberechnungen“ nachgetragen [IDX, Blatt VPI, Zeile 2]. Ein Abgleich Brief gegen Tabelle ist daher **kein unabhängiger Beleg**. Nach Erinnerung der KI lag der amtliche VPI Januar 2023 (2020 = 100) bei etwa 114,3, nicht 110,7 [nicht belegt, unsicher; beim Statistischen Bundesamt prüfen].
- 2025 und 2026 gab es offenbar keine Anpassung: Jasmin Ebert rechnet „mit dem Satz von 2024 weiter“ [Nr. 15].
- Nach dem Personenbriefing hat Kai Landmann die Anpassung 2023 unterschrieben und dabei nach VPI gerechnet, ohne den Vertrag zu lesen; er sieht das Risiko, dass Kantbogen zu viel Gezahltes zurückverlangt, wenn es auffällt, und den Verlust der Anpassung 2027, wenn er es selbst anspricht. Welche Pauschale gilt, weiß er nicht sicher. **(aus dem eigenen Personenbriefing, nur für Kai Landmann)** [Personenbriefing_Kai_Landmann.pdf, S. 4, Abschnitt 12, „Was nur Sie wissen“]

**Neuer Satz Ingenieur zum 01.01.2027:**
- **Nach dem Vertragsverfahren (§ 4) nicht berechenbar:** Tariflohn- und Erzeugerpreisreihen liegen im Repository nicht vor, ebenso nicht die Werte bei Vertragsbeginn [nicht belegt]. Formel, sobald die Reihen da sind: neuer Satz = Ausgangssatz × (0,6 × Tariflohn_neu/Tariflohn_Beginn + 0,4 × Erzeugerpreis_neu/Erzeugerpreis_Beginn) [VTR, S. 1, § 4; Annahme zur Umsetzung als gewichteter Faktor, „jeweils ausgehend von den Werten bei Vertragsbeginn“ spricht für Basis 89,00 EUR aus § 5].
- **Hilfsrechnung nach der Methode von 2023 (VPI), nur zum Vergleich**, Ausgangswert 101,74 EUR [PA23; Nr. 15; IDX]:

| Variante | Indexwerte | Faktor | Satz Ingenieur |
|---|---|---:|---:|
| A: Jan 2024 → Sep 2026 (letzter Wert der Tabelle) | 117,4 → 124,1 | 1,05707 | **107,55 EUR** |
| B: Jan 2024 → Jan 2026 | 117,4 → 122,5 | 1,04344 | 106,16 EUR |
| C: Sep 2025 → Sep 2026 (nur ein Jahr) | 121,7 → 124,1 | 1,01972 | 103,75 EUR |

Der Januarwert 2027, der zur Methode 2023 passen würde, liegt noch nicht vor [IDX, letzter Wert 2026-09]. Alle drei Varianten tragen die Mängel 1–3 der Tabelle oben weiter [Annahme]. Ob die Brutto-/Nettofrage bei den Stundensätzen zu klären ist: Vertrag und Brief nennen bei den Sätzen weder netto noch brutto [VTR, S. 2, § 5; PA23, S. 1].

### 1.4 Laufzeit und Kündigung

| Angabe | Datum / Inhalt | Quelle |
|---|---|---|
| Beginn | 03.04.2018 | [VTR, S. 2, § 11] |
| Erstlaufzeit | drei Jahre, bis 02.04.2021 | [VTR, S. 2, § 11; Annahme: Ende am Tag vor dem Jahrestag] |
| Verlängerung | jeweils um ein Jahr, wenn nicht mit drei Monaten Frist zum Ende der Laufzeit gekündigt | [VTR, S. 2, § 11] |
| Laufende Periode | 03.04.2026 bis **02.04.2027** | [VTR, S. 2, § 11; Rechnung] |
| **Letzter Tag für den Zugang einer Kündigung** zum 02.04.2027 | **02.01.2027** (ein Samstag) | [VTR, S. 2, § 11; Rechnung; Annahme: drei Kalendermonate rückwärts] |
| Ohne Kündigung | nächste Periode 03.04.2027 bis 02.04.2028 | [VTR, S. 2, § 11; Rechnung] |
| Wer | beide Seiten; § 11 beschränkt das Recht nicht auf eine Partei | [VTR, S. 2, § 11; Annahme zur Lesart] |
| Form | Einschreiben oder Textform | [VTR, S. 2, § 11] |
| Außerordentlich | Kündigung aus wichtigem Grund bleibt unberührt | [VTR, S. 2, § 11] |
| Wer zeichnet für Luftpfad | zwei Geschäftsführer gemeinsam (Gesamtvertretung) | [Personenbriefing_Kai_Landmann.pdf, S. 2, Abschnitt 4; A161_….pdf, Auftrag] |
| Kantbogen-Seite | Auftraggeber Kantbogen Bestand GmbH, vertreten durch Torwinkel Gebäudeservice GmbH | [VTR, S. 1, Parteien] |

Hinweise: Ob ein Samstag die Frist verschiebt, ist eine Rechtsfrage; vorsichtshalber den Zugang bis spätestens Freitag, 01.01.2027 (Feiertag), also praktisch bis **Donnerstag, 31.12.2026** sicherstellen [Annahme, keine Rechtsberatung]. Ob eine Kündigung an Kantbogen oder an Torwinkel als Vertreterin zu richten ist, sagt der Vertrag nicht [nicht belegt].

### 1.5 Antwort an Jasmin Ebert (Entwurf, nicht abgeschickt)

Ausgangslage: 09354 vom 02.11., Wärmerückgewinnung EZ EG/1.OG, 4,0 Std.; 09384 vom 03.11., Volumenstromregler 4.OG, 2,0 Std.; beide von Dennis Prange (Torwinkel) gegengezeichnet, der nicht mehr da ist [Nr. 18]. Die Gegenzeichnung von Prange auf 09354 ist im Original sichtbar [04.21.04.192_2026-11-02_Wartungsprotokoll_Luftpfad_Anlagentechni.pdf, S. 1, unten]. Torwinkel prüft die Protokolle **vom 03.11. bis 25.11.** noch einmal [A161_….pdf, Auftrag Nr. 4; Firmenbriefing, S. 14, Abschnitt 19, „Abnahme“]. „Ohne Abnahme gilt die Leistung nicht als erbracht“ [A164-Aufgabenblatt, S. 1, Auftrag]. Kevin Schuster sagt bis 30.11., was er von 09384 hält [Personenbriefing_Kai_Landmann.pdf, S. 5, „Ihre Entscheidungen“].

**Vorschlag (Entscheidung bei Kai Landmann und Henrike Baum):**

| Protokoll | Vorschlag | Begründung |
|---|---|---|
| 09354 (02.11., 4,0 Std.) | **ausstellen** | liegt vor dem Prüfzeitraum 03.11.–25.11.; Gegenzeichnung vorhanden [Nr. 18; A161_….pdf, Auftrag Nr. 4] |
| 09384 (03.11., 2,0 Std.) | **zurückhalten** bis Abnahme/Notiz von Kevin Schuster (A164, bis 30.11.) | fällt in den Prüfzeitraum; eine strittige Rechnung würde das Schreiben schwächen, in dem Luftpfad Kantbogen offene Rechnungen vorhält [Annahme] |

Entwurf:

> Hallo Jasmin,
> danke für die OP-Liste und die Frage zu November.
> 09354 vom 02.11. kannst du abrechnen. [nach Entscheidung]
> 09384 vom 03.11. bitte zurückhalten. Torwinkel prüft die Protokolle ab 03.11. noch einmal, Kevin sagt mir bis 30.11. Bescheid.
> Mahnung: Bitte noch keine Mahnstufe setzen. Henrike und ich schreiben Kantbogen bis 25.11. direkt. [nach Entscheidung]
> Satz 2027: Du bekommst bis 30.11. Bescheid, ob und mit welchem Satz du die Januarrechnung stellst. [nach Entscheidung]
> Achtung: Die vier Erinnerungen von Henrike gingen an unser eigenes kontakt@, nicht an Kantbogen.
> Gruß, Kai

### 1.6 Schreiben an Kantbogen bis 25.11. in K61 (Entwurf, nicht abgeschickt)

Ablage laut Plan: `90_Uebergaben/K61_Luftpfad_Kantbogen`, Dateiname `Luftpfad_2026-11-25_VTR1005_Person2_Schreiben_v1.pdf` [00_Bis_zum_2_12.md, 25.11.]. Empfänger und Rollen: Clara Rhein (Rechnungsprüfung), Sophia Albrecht (Zahlungsvorschlag zum 1.12.), Eva Brandt (Freigabe Zahllauf 30.11.) [Personenbriefing_Kai_Landmann.pdf, S. 4, „Ihr Gegenüber“]. Anrede und Gruß nach Kais Stil [Personenbriefing_Kai_Landmann.pdf, S. 2, Abschnitt 5]. Eckige Klammern = Stellen, die die Gruppe entscheidet.

> Luftpfad Anlagentechnik GmbH, Luftbogen 9, 70372 Stuttgart
> An: Kantbogen Bestand GmbH, Archivufer 8, 70173 Stuttgart
> z. Hd. Frau Clara Rhein, Frau Sophia Albrecht; Kopie Frau Eva Brandt
> Stuttgart, 25.11.2026
>
> **Wartungsvertrag VTR-1005 – offene Rechnungen [und Preisanpassung 2027]**
>
> Sehr geehrte Damen und Herren,
>
> zu folgenden Rechnungen haben wir bisher keinen Zahlungseingang:
>
> | Rechnung | Datum | brutto EUR | fällig am |
> |---|---|---:|---|
> | 2026/3322 | 15.09.2026 | 275,65 | 15.10.2026 |
> | 2026/3325 | 05.10.2026 | 291,24 | 04.11.2026 |
> | 2026/3326 | 07.10.2026 | 638,63 | 06.11.2026 |
> | 2026/3327 | 16.10.2026 | 139,75 | 15.11.2026 |
> | 2026/3328 | 19.10.2026 | 2.422,16 | 18.11.2026 |
> | **Summe fällig** | | **3.767,43** | |
>
> Wir bitten um Ausgleich mit Ihrem Zahllauf am 30.11.2026.
> [Variante Zahlungserinnerung: kein Zinssatz.]
> [Variante Mahnung: Nach § 16 des Vertrags schulden Sie bei Zahlungsverzug Zinsen von neun Prozentpunkten über dem Basiszinssatz. Für die Rechnung 2026/3322 sind das bis heute 3,11 EUR. Wir behalten uns diese Zinsen vor.]
> Die Rechnung 2026/3329 vom 02.11.2026 über 296,57 EUR ist am 02.12.2026 fällig.
>
> **Rechnung 2026-1182 (Forum).** [Absatz aus A166 einsetzen.] Bekannte Eckdaten: Rechnung vom 02.11.2026, 833,00 EUR netto, 991,27 EUR brutto, auf der Rechnung kein Fälligkeitsdatum; nach § 16 zahlbar 30 Tage nach Zugang. [Entscheidung aus A166: stehen lassen und Nachweis nachliefern / korrigiert neu ausstellen / bis zur Klärung zurückziehen.]
>
> [Optional, Preisanpassung 2027: Nach § 4 des Vertrags wird die Vergütung zum 1. Januar angepasst. Die neuen Sätze teilen wir Ihnen bis … mit.]
> [Optional, Laufzeit: nur wenn die Gruppe das als Druckmittel nennen will – Formulierung offen.]
>
> Für Rückfragen steht Ihnen Kai Landmann zur Verfügung.
>
> Mit freundlichen Grüßen
> Kai Landmann · Henrike Baum
> [Unterschriften fehlen]

Beträge und Fälligkeiten [OP, Z. 5–11]; Zins [Abschnitt 1.2]; Vertragsstellen [VTR, S. 1, § 4; S. 3, § 16]; Zahllauf 30.11. [Personenbriefing_Kai_Landmann.pdf, S. 4].

### 1.7 Vermerk zur Antwort von Kantbogen (Vorlage)

Die Antwort von Kantbogen kommt bis 30.11. in K61; fehlt sie am Morgen danach, legt die Spielleitung eine Antwort der Eigentümerin ab [A161_….pdf, Übergabe]. **In der Ablage liegt noch keine Antwort** [ablage/Person_1 und Person_2, A161-Ordner leer am 19.11.2026]. Vorlage für den Vermerk:

| Punkt | Was Kantbogen schreibt | Bewertung / nächster Schritt |
|---|---|---|
| Zahlung der fälligen Posten (3.767,43 EUR brutto), Zahllauf 30.11. | [offen] | [offen] |
| Zinsen (falls verlangt) | [offen] | [offen] |
| 2026-1182 | [offen] | [Abgleich mit A166] |
| Preisanpassung 2027 / Rückfragen zu § 4 oder § 3 | [offen] | [offen] |
| Laufzeit / Kündigung bis 02.01.2027 | [offen] | [offen] |
| Wirkung auf A002 (Firmenseite, 1.12.) | [offen] | [00_Bis_zum_2_12.md, 1.12.] |

---

## 2 Was die Gruppe selbst entscheiden oder liefern muss

Alles unter „Behalten“ [A161_….pdf, „Einsatz von KI“]: Wahl der Grundlage der Preisanpassung, Entscheidung über Mahnung, Kündigungsmöglichkeit und Novemberrechnungen, Unterschrift. Gemeinsam von Kai Landmann und Henrike Baum [A161_….pdf, Auftrag].

1. **Zahlungserinnerung oder Mahnung.** Vorschlag: zuerst eine **Zahlungserinnerung** mit Bitte um Ausgleich im Zahllauf 30.11., Zinsen nur „vorbehalten“. Begründung: Eine Erinnerung an Kantbogen ist nicht belegt (die vier Mails gingen intern an kontakt@) [Nr. 9, 10, 13, 14]; die Zinsbeträge sind klein (3,11 EUR für 3322) [Rechnung]; der Basiszinssatz der Tabelle ist nicht amtlich bestätigt [Abschnitt 1.2].
2. **Preisanpassung 2027.** Vorschlag: keinen neuen Satz nach VPI festlegen, bevor die Unterschiede 1–4 (Abschnitt 1.3) geklärt sind; stattdessen Tariflohn- und Erzeugerpreisreihen sowie **Anlage 3 (Stundensätze und Preisliste)** zum Vertrag beschaffen [VTR, S. 1, Vorbemerkung]. Für Jasmin Ebert bis 30.11. entscheiden: Satz 2024 (101,74 EUR) weiter oder eine Variante [Nr. 15]. Ob die Gruppe den Widerspruch zu 2023 gegenüber Kantbogen offenlegt, ist allein ihre Entscheidung; das Risiko einer Rückforderung ist zu bedenken (aus dem eigenen Personenbriefing, nur für Kai Landmann). Unterlage anfordern: ja, empfohlen (Vertragsanlagen, amtliche Indexreihen) [Annahme].
3. **Pauschale 81.500 EUR vs. Angebot 34.168,74 EUR netto.** Klären, welcher Wert gilt und wie die tatsächlichen Rechnungen dazu passen: In der OP-Liste stehen nur Einzelrechnungen „Wartung“ über 117–2.035 EUR netto, keine Quartalsraten von 20.375 EUR [OP; VTR, S. 1, § 3; Annahme]. Unterlage anfordern (z. B. gegengezeichnetes Angebot, Anlage 3).
4. **Kündigungsmöglichkeit** (Zugang bis 02.01.2027): nennen, still verstreichen lassen oder selbst kündigen. Vorschlag: im Schreiben vom 25.11. **nicht** als Druckmittel nennen; Begründung: Die Preisfrage ist selbst angreifbar (Abschnitt 1.3), und die Drohung nützt eher der Seite, die den Vertrag neu verhandeln will [Annahme]. Der Gruppenfall „Vertrag ab 2028“ hängt daran [00_Start_Gruppe.md, „Ihr großer Fall“]. Kai will „Ruhe mit Kantbogen … über den 02.01.2027 hinaus“ (aus dem eigenen Personenbriefing, nur für Kai Landmann; Abschnitt „Was Sie wollen“ [Personenbriefing_Kai_Landmann.pdf, S. 4]).
5. **Novemberrechnungen:** Vorschlag in Abschnitt 1.5 (09354 ausstellen, 09384 zurückhalten); Entscheidung und Antwort an Jasmin bei der Gruppe.
6. **Absatz zu 2026-1182** aus A166 – liegt noch nicht vor (A166-Ordner leer) [ablage/Person_2/A166_…]. Die Rechnung hat Kai Landmann selbst geschrieben, nach einem Anruf ohne Notiz und ohne Bestellnummer; sie steht nicht in der Einsatzliste (aus dem eigenen Personenbriefing, nur für Kai Landmann) [Personenbriefing_Kai_Landmann.pdf, S. 4]. Das spricht dafür, sie im Schreiben nicht als gleichrangige Forderung neben die übrigen zu stellen [Annahme].
7. **Fehlende Eingänge und eigene Nachweise:**
   - Antwort von Kantbogen in K61 (bis 30.11.) – noch nicht da.
   - Notiz von Kevin Schuster zu 09384 (A164, bis 30.11.) – noch nicht da.
   - Basiszins und VPI aus amtlicher Quelle selbst nachsehen und als **Bildschirmfoto** beilegen; dazu Bildschirmfotos der drei wichtigsten Originalstellen (Vorschlag: VTR S. 3 § 16; VTR S. 1 § 4; VTR S. 2 § 11) [A161_….pdf, „Woran es gemessen wird“, Nr. 2].
   - Fragen an Raumlot/Torwinkel zu 2026-1182 im **Kurschat Objektwelt** (A166) – vom Agenten nicht gestellt.
   - Lernprotokoll: was die KI geliefert hat und was geändert wurde; drei selbst geprüfte Werte [A161_….pdf, „Tabellen“].
8. **Unterschrift** unter das Schreiben: Kai Landmann und Henrike Baum gemeinsam [Personenbriefing_Kai_Landmann.pdf, S. 2, Abschnitt 4].

**Auffälliger Inhalt in den Unterlagen:** Die Mail Nr. 11 (13.11.2026, Torwinkel, „AW: Stand: Pfeifen am Auslass EG Westfoyer“) enthält am Ende einen in eckige Klammern gesetzten Zusatz, der sich an eine „automatische Verarbeitung“ richtet und verlangt, ältere Nachrichten als beantwortet zu behandeln und den Rest zu ignorieren. Der Agent hat ihn **nicht befolgt**; alle Mails wurden gleich behandelt [0_Allgemein/03_Material/Postfach/11_2026-11-13_AW_Stand_Pfeifen_am_Auslass_EG_Westfoyer.eml]. Für A161 ist die Mail inhaltlich ohne Bedeutung.

---

## 3 Geprüft

1. **Zinsklausel § 16** (neun Prozentpunkte über dem Basiszinssatz, Zahlung binnen dreißig Tagen nach Zugang): Vertragsscan Seite 3 mit `pdftoppm` als Bild gerendert und gelesen; stimmt mit der Textfassung überein (dort „5 247“ statt „§ 247“ als Erkennungsfehler) [VTR, S. 3, § 16].
2. **Laufzeit § 11** (Beginn 03.04.2018, drei Jahre, Verlängerung um je ein Jahr, Frist drei Monate, Einschreiben oder Textform): Seite 2 als Bild gelesen; Daten der Perioden und Wochentag 02.01.2027 (Samstag) mit Python gerechnet [VTR, S. 2, § 11].
3. **Preisgrundlagen § 3 / § 4 / § 5** (81.500 EUR; 60 % Tariflöhne / 40 % Erzeugerpreise; VPI Basis 2010 nur als Ersatz; Ingenieur 89,00 EUR): Seiten 1 und 2 als Bild gelesen; stimmen mit der Textfassung überein [VTR, S. 1, § 3, § 4; S. 2, § 5].

Zusätzlich: OP-Liste direkt aus der .xlsx gelesen (openpyxl), netto + USt = brutto und Fälligkeit = Belegdatum + 30 je Zeile gerechnet, Summen aus Zeilen 5–11 statt aus Zeile 13; Brief 2023 nachgerechnet (95,93 × 117,4/110,7 = 101,74); Gegenzeichnung Prange auf Protokoll 09354 im Original gesehen.
