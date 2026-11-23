# KI-Ergebnis A166: Regierechnung Forum, Messung und Nachweise zum Vertrag

- **Projekt:** A166, Ketten „Vertrag VTR-1005“ (Teil 1), „Forum zu warm“ (Teil 2), Teil 3 bleibt zunächst in der Gruppe [A166_Regierechnung_Forum_Messung_und_Versicherungsnachweis.pdf, S. 1, Kopf]
- **Runde:** 1 (Teilergebnis, Status „infos“)
- **Datum:** 23.11.2026 (Runde 1 vom 20.11.2026)
- **Federführend:** Kai Landmann (Person 2), beteiligt Personen 1 und 4 [data/site.json, Projekt A166]
- **Fristen:** Absatz zu 2026-1182 im Schreiben an Kantbogen bis 25.11. in Uebergaben/K61; kaufmännische Antwort an Signalsteg bis 30.11. in Uebergaben/K64; Nachricht an Detlef Brede im Kurschat Objektwelt; Vermerk zu den Nachweisen bis 2.12. [A166_….pdf, S. 1 „Auftrag“, S. 2 „Übergabe“; 00_Bis_zum_2_12.md, Zeilen 25.11. und 30.11.]
- **Rechentabelle:** `KI_Ergebnis_A166_v2.csv` (Forum-Einsätze der Einsatzliste mit Nachrechnung, Trennzeichen Semikolon, mit Python direkt aus der XLSX erzeugt)

## Änderungen gegenüber v1

Runde 2 vom 23.11.2026: Alle Projekte wurden auf Wunsch der Gruppe unabhängig vom Status erneut geprüft. Feedback der Gruppe lag nicht vor.

- **Lage seit dem 23.11.2026:** Laut dem neuen Blatt „Bis zum 2.12.“ ruhen die Aufgabenblätter der Figuren bis auf Weiteres. Abgabetage, Stundenangaben und Lieferungen an andere Firmen gelten nicht, in 90_Uebergaben wird nichts abgelegt, und keine Gruppe wartet auf Post [00_Bis_zum_2_12.pdf, „Was bis auf Weiteres nicht gilt“]. Fristen und Übergabeordner in dieser Datei stehen so im Aufgabenblatt und gelten erst wieder, wenn der Dozent es sagt [ebd., letzter Absatz].
- **Status von „Infos benötigt“ auf „Von KI erledigt“:** Die fehlenden Eingänge kommen derzeit nicht, weil die Firmen einander bis auf Weiteres nichts liefern [00_Bis_zum_2_12.pdf, „Was bis auf Weiteres nicht gilt“]. Sie stehen jetzt hier statt in der Statusliste: Angebot von Signalsteg für die Messung im Forum (Signalsteg (Konrad Elster), Uebergaben/K64); Rückmeldung, wer den Einsatz am Forum-Regler am 30.10.2026 bestellt hat, mit Bestellnummer (Rechnung 2026-1182) (Raumlot (Jonas Heller/Farid Mertens), Kurschat Objektwelt). Alles, was ohne sie geht, ist fertig; der Rest bleibt als Gerüst.
- Teil 2 (Messangebot von Signalsteg) ruht; das Angebot kommt nicht [00_Bis_zum_2_12.pdf, „Was bis auf Weiteres nicht gilt“]. Die Prüfung der Regierechnung 2026-1182 und der Vermerk zu den Nachweisen §§ 7, 8, 10 sind fertig.
- Die Rückmeldung von Raumlot zur Bestellnummer über den Kurschat ist ebenfalls eine Lieferung einer anderen Firma und ruht damit; Kai kann die Bestellung aber weiter mit den eigenen Unterlagen klären (Postfach Nr. 10 und 15).

**Geprüft in Runde 2:**

1. Rechnung 2026-1182: 833,00 / 158,27 / 991,27 EUR, Belegdatum 02.11.2026, Fälligkeit leer, mit openpyxl gelesen.
2. Vier Forum-Einsätze in der Einsatzliste mit openpyxl gefunden, Summe 915,47 EUR netto.
3. Suche nach „1182“ in der Einsatzliste: kein Treffer (wie v1).

## Vorbemerkung

- **Behalten** sind laut Blatt: die Entscheidung über die Rechnung, Zahlungsbereitschaft und Bedingungen bei der Messung, wen Kai informiert, die Unterschrift [A166_….pdf, S. 2, „Einsatz von KI“]. Dazu stehen unten nur **Vorschläge mit Begründung**.
- **Abgegeben** werden dürfen Summen und Abgleich der Einsatzliste. Das liefert Teil 1 vollständig. **Geteilt** werden Prüfung des Angebots und Entwurf der Antwort an Signalsteg [ebd.].
- **Teil 2 ist nur vorbereitet.** Das Angebot von Signalsteg liegt nicht im Repository und nicht in der Ablage; es kommt erst ab 27.11. in Uebergaben/K64 [A166_….pdf, S. 2, „Material“ und „Übergabe“; Suche in ablage/ und files/ am 20.11.2026: kein Treffer „Signalsteg“, „Angebot“, „K64“]. Deshalb gibt es hier eine leere Prüftabelle mit Rechenweg, aber **keine Zahlen** zum Angebot.
- Die Rechnung 2026-1182 selbst (das PDF) liegt nicht im Repository. Geprüft wird gegen die OP-Zeile, die Mails Nr. 10 und Nr. 15 und das Firmenbriefing.

---

## 1 Ergebnis Teil 1: Regierechnung 2026-1182

### 1.1 Eckdaten der Rechnung

| Angabe | Wert | Quelle |
|---|---|---|
| Rechnungsnummer | 2026-1182 | [OP_Kantbogen_Stand_2026-11-18.xlsx, Blatt „OP Debitor 10014“, Zeile 11] |
| Rechnungsdatum (Belegdatum) | 02.11.2026 | [ebd.; Postfach Nr. 10] |
| Leistung | „Regie Forum“ | [OP, Zeile 11] |
| Netto | 833,00 EUR | [OP, Zeile 11] |
| USt 19 % | 158,27 EUR (nachgerechnet: 833,00 × 0,19 = 158,27) | [OP, Zeile 11; Rechnung mit Python] |
| Brutto | 991,27 EUR (nachgerechnet: 833,00 + 158,27) | [OP, Zeile 11; Postfach Nr. 10] |
| Fälligkeit auf der Rechnung | **leer**, „bei der Erstellung leer geblieben“ | [OP, Zeile 11, Spalte „fällig am“; Postfach Nr. 15] |
| Fälligkeit nach Vertrag | 30 Tage nach Zugang; bei Zugang am 02.11.2026 der 02.12.2026 | [Wartungsvertrag VTR-1005, S. 3, § 16; Zugang am Belegdatum = Annahme] |
| Mahnstufe | 0 | [OP, Zeile 11] |
| Erinnerung | Nr. 10 vom 10.11. an kontakt@luftpfad, nicht an Kantbogen, „Fälligkeit war .“ | [Postfach Nr. 10] |
| Bestellnummer | keine belegt | [OP, Zeile 11 (keine Spalte); Einsatzliste ohne Treffer, siehe 1.3] |

### 1.2 Prüfung gegen den Vertrag VTR-1005

| Vertragsstelle | Was dort steht | Bedeutung für 2026-1182 |
|---|---|---|
| § 3 Pauschalvergütung | Jahrespauschale für die Leistungen nach Anlage 2, gilt für Arbeitszeit und Anfahrt in der Regelarbeitszeit; Material und Ersatzteile nicht enthalten [VTR-1005, S. 1, § 3] | Die **Wartung** „Klappen, Regler und Stellantriebe, Volumenstromregler Forum“ (Intervall 12 Monate) steht im Leistungsumfang [Firmenbriefing, S. 5, Abschnitt 8]. Soweit die Arbeit am 30.10. Wartung war, ist sie mit der Pauschale bezahlt und **nicht gesondert berechenbar**. |
| § 5 Störungsbeseitigung | „wird nach Zeitaufwand zu den Stundensätzen der Anlage 3 vergütet, soweit die Pauschale sie nicht deckt“; Monteur bei Vertragsbeginn 54,70 EUR/h; Beginn setzt eine Meldung per E-Mail oder Einschreiben voraus, Eingang wird mit Meldenummer bestätigt [VTR-1005, S. 1–2, § 5] | Der Tausch des Stellantriebs nach „Luftmangel im Forum“ (26.10.) ist eher **Störungsbeseitigung** und damit nach Zeitaufwand **berechenbar** [Firmenbriefing, S. 13, Abschnitt 18, Einträge 26.10. und 30.10.]. Voraussetzung: Meldung bzw. Auftrag ist belegt. Meldenummer und Stunden sind in den Unterlagen **nicht belegt**. |
| § 6 Ersatzteile | Teile nach Aufwand zu den Preisen der Anlage 3; bei Einzelwert über 650 EUR **Angebot vor dem Einbau** [VTR-1005, S. 2, § 6] | Der Stellantrieb ist als Ersatzteil **berechenbar**. Ob sein Einzelwert über 650 EUR lag (dann wäre vorher ein Angebot nötig gewesen), ist **nicht belegt**; die Rechnung nennt in der OP-Liste keine Aufteilung Lohn/Material [OP, Zeile 11]. Anlage 3 liegt nicht im Repository [nicht belegt]. |
| § 16 Abrechnung | Rechnungen „prüfbar“, mit „Anlagen, Leistungen und dem Nachweis der Wartung“; Zahlung binnen 30 Tagen nach Zugang [VTR-1005, S. 3, § 16] | **Formal fraglich:** Ohne Bestellnummer, ohne Fälligkeit und, soweit erkennbar, ohne Leistungsnachweis (Arbeitsschein/Protokoll zum 30.10. liegt nicht im Repository) ist die Rechnung nicht prüfbar im Sinne von § 16 [OP, Zeile 11; Postfach Nr. 15; nicht belegt: Rechnungs-PDF]. Das fehlende Fälligkeitsdatum schadet für sich nicht, weil § 16 die Frist selbst regelt [VTR-1005, S. 3, § 16]. |

**Hinweis Firmenbriefing:** Dort steht zweimal, der Forum-Regler sei „im bereits vorhandenen Auftrag“ wieder funktionsfähig gemacht worden, und der Auftrag vom 26.10.2026 sei „ein Auftrag mit dokumentierter Erweiterung. Diagnose und Reparatur sind getrennte Arbeitsgänge.“ [Firmenbriefing, S. 2, Abschnitt 4; S. 3, Abschnitt 5; S. 13, Abschnitt 18]. Das spricht dafür, dass es einen Auftrag gab, aber **wer** ihn erteilt hat und unter welcher Nummer, steht dort nicht [nicht belegt]. Der Fall hat Vorgeschichte: Am 08.10.2019 klemmte der Stellantrieb am Forum-Regler schon einmal, die Gewährleistung wurde abgelehnt [Firmenbriefing, S. 2, Abschnitt 4, Chronik].

### 1.3 Abgleich mit der Einsatzliste der Disposition

Alle Zeilen „EG Forum“ der Einsatzliste (80 Einsätze von 01.01.2025 bis 18.11.2026) [Einsaetze_Raumklima_Bogenfeld_2025_2026.xlsx, Blatt „Einsaetze“, Kopfzeilen 1–3; Rechnung mit Python]:

| Zeile | Ticket | Einsatz am | Auftragsnummer | Besteller | Bestellgrenze EUR | Netto EUR | Rechnung |
|---|---|---|---|---|---|---|---|
| 29 | TKT-112551 | 19.07.2025 | AUF-2497 | Torwinkel, Haustechniker | 500 | 352,92 | 2025/1358 (bezahlt) |
| 56 | TKT-113267 | 16.07.2026 | AUF-2624 | Torwinkel, Haustechniker | 500 | 296,25 | 2026/3291 (bezahlt) |
| 65 | TKT-113299 | 28.07.2026 | AUF-2629 | Torwinkel, FM-Objektleitung | 200 | 133,15 | 2026/3296 (bezahlt) |
| 82 | TKT-113367 | 24.08.2026 | AUF-2651 | Torwinkel, FM-Objektleitung | 200 | 133,15 | 2026/3317 (bezahlt) |
| | **Summe 4 Einsätze** | | | | | **915,47** | |
| – | 2026-1182 | 30.10.2026 [Firmenbriefing, S. 13] | **keine** | **nicht belegt** | – | **833,00** | 2026-1182 (offen) [OP, Zeile 11] |

[Quellen je Zeile: Einsatzliste, Zeilen 29, 56, 65, 82; Nettobeträge mit Stunden × Satz + Anfahrt + Material nachgerechnet, alle vier stimmen auf den Cent]

**Befund**

1. **2026-1182 ist keinem Forum-Einsatz der Einsatzliste zuzuordnen.** Die Rechnungsnummer kommt in der ganzen Liste nicht vor, und es gibt keinen Forum-Einsatz im Oktober oder November 2026 [Einsatzliste, Volltextsuche „1182“ und Spalte „Raum“; Rechnung mit Python].
2. Einschränkung: Die Liste enthält nur Einsätze „mit Meldung zu warm“ [Einsatzliste, Zeile 1, Titel]. Der Einsatz vom 26./30.10. lief als „Luftmangel im Forum“ [Firmenbriefing, S. 13]. Er könnte deshalb aus diesem Filter gefallen sein. Ob er in einer anderen Dispositionsliste steht, ist **nicht belegt**; Selim Ahrens (Export SAh) könnte das nachsehen [Einsatzliste, Zeile 2].
3. **Höhe:** 833,00 EUR netto liegt weit über jedem einzelnen Forum-Einsatz (höchstens 352,92) und über dem teuersten der 80 Einsätze insgesamt (381,47) [Einsatzliste; Rechnung mit Python]. Sie liegt fast so hoch wie alle vier Forum-Einsätze zusammen (915,47).
4. **Bestellgrenzen:** Alle bisherigen Forum-Einsätze bestellte Torwinkel, mit Grenze 500 EUR (Haustechniker) bzw. 200 EUR (FM-Objektleitung) [Einsatzliste, Spalten „bestellt von“, „Bestellgrenze EUR“]. 833 EUR liegt über **beiden** Grenzen. Bei Raumlot gibt Jonas Heller Regieaufträge bis 1.000 EUR netto frei, hält sich aber an das Schriftliche [Personenbriefing_Kai_Landmann.pdf, S. 5, „Ihr Gegenüber“]. Eine schriftliche Freigabe liegt nicht vor [nicht belegt].
5. Zum Vergleich: Bei Satz 65,24 EUR/h und Anfahrt 51,60 EUR (Sätze 2026 aus der Liste) entsprächen 833 EUR rund 12 Monteurstunden ohne Material [Einsatzliste, Zeilen 56–82; Rechnung (833 − 51,60) / 65,24 = 11,98; nur rechnerischer Vergleich, die tatsächliche Zusammensetzung ist nicht belegt].

**Wer hat bestellt, und lässt sich das belegen?** Aus den Unterlagen: **nein**. (aus dem eigenen Personenbriefing, nur für Kai Landmann) Kai hat die Rechnung selbst geschrieben. Am 30.10. rief jemand von der Verwaltung an, der Forum-Regler müsse heute laufen, die Bestellnummer komme nach; vermutlich Farid Mertens von Raumlot, sicher ist das nicht. Es gibt keine Notiz, die Nummer kam nie, und ob die Arbeit zur Wartung gehört, weiß Kai nicht [Personenbriefing_Kai_Landmann.pdf, S. 4, „Was nur Sie wissen“].

### 1.4 Vorschlag zur Entscheidung (Behalten, entscheidet Kai)

| Möglichkeit | Folge | Bewertung |
|---|---|---|
| **A Stehen lassen, Nachweis nachliefern** | Hält die Forderung; braucht aber eine schriftliche Bestellung oder Freigabe (Raumlot/Torwinkel) und einen Leistungsnachweis nach § 16. Gegenüber Kantbogen, denen Luftpfad offene Rechnungen vorhält, ist eine selbst nicht prüfbare Rechnung angreifbar. | nur sinnvoll, wenn die Bestellung bis 25.11. schriftlich bestätigt wird |
| **B Korrigiert neu ausstellen** | Neue Rechnung mit Bestellnummer, Fälligkeit, Aufteilung Arbeitszeit (§ 5) / Stellantrieb (§ 6) und Arbeitsschein; Wartungsanteil (§ 3, Pauschale) herausnehmen. Zahlungsfrist beginnt neu mit Zugang [VTR-1005, S. 3, § 16]. | **Vorschlag**, sobald die Bestellung belegt ist |
| **C Bis zur Klärung zurückziehen** | Nimmt Kantbogen ein Argument gegen die übrigen Rechnungen (3.767,43 EUR fällig, siehe START-Ergebnis) [KI_Ergebnis_START_v1.md, Ergebnis]; kostet Zeit und ggf. 833 EUR, wenn sich kein Besteller findet. | **Vorschlag**, falls bis 25.11. keine schriftliche Bestellung vorliegt |

**Vorschlag:** Rechnung 2026-1182 im Schreiben an Kantbogen **bis zur Klärung zurückziehen** (C) und nach Vorliegen der schriftlichen Bestellung **korrigiert neu ausstellen** (B). Begründung: ohne Bestellung, Fälligkeit und Leistungsnachweis nicht prüfbar nach § 16; Betrag über allen bekannten Bestellgrenzen; die übrigen Forderungen werden glaubwürdiger, wenn Luftpfad die eigene fragliche Rechnung selbst aus dem Streit nimmt [Begründung aus 1.2 und 1.3; Wertung = Annahme].

### 1.5 Absatz für das Schreiben an Kantbogen (K61), Entwurf

> **Rechnung 2026-1182 (Regie Forum).** Unsere Rechnung 2026-1182 vom 02.11.2026 über 833,00 EUR netto, 991,27 EUR brutto, betrifft den Austausch des Stellantriebs am Volumenstromregler Forum am 30.10.2026. Wir haben sie gegen den Wartungsvertrag VTR-1005 geprüft: Die Wartung des Reglers ist durch die Pauschale nach § 3 abgegolten; berechenbar sind nur Störungsbeseitigung nach Zeitaufwand (§ 5) und Ersatzteile (§ 6). Die Rechnung weist keine Bestellnummer und kein Fälligkeitsdatum aus und ist ohne Leistungsnachweis nicht prüfbar im Sinne von § 16. In der Einsatzliste unserer Disposition ist sie keinem Forum-Einsatz zugeordnet. **[Entscheidung Kai, z. B.:]** Wir ziehen die Rechnung 2026-1182 bis zur Klärung der Bestellung zurück und stellen sie gegebenenfalls korrigiert, mit Bestellnummer und Nachweis, neu aus. Sie ist nicht Teil der offenen Posten, die wir Ihnen oben nennen.

[Inhalt: VTR-1005, S. 1–3, §§ 3, 5, 6, 16; OP, Zeile 11; Einsatzliste; Firmenbriefing, S. 13] Den Absatz in KI_Ergebnis_A161_v1.md an der Platzhalterstelle einsetzen [KI_Ergebnis_A161_v1.md, Entwurf Schreiben „Rechnung 2026-1182 (Forum)“]. Wird C gewählt, die OP-Summe im A161-Schreiben ohne 2026-1182 nennen.

**Fragen im Kurschat Objektwelt (Entwurf, abschicken entscheidet Kai):**

> An Raumlot (Jonas Heller, Farid Mertens): Am 30.10.2026 haben wir am Forum-Regler den Stellantrieb getauscht. Die Freigabe kam telefonisch aus der Verwaltung, eine Bestellnummer haben wir nicht erhalten. Wer hat den Auftrag erteilt, und können Sie ihn mit Bestellnummer schriftlich bestätigen? Betrag 833,00 EUR netto.
> An Torwinkel: Liegt der Austausch des Stellantriebs Forum am 30.10.2026 bei Ihnen als Auftrag vor (Vorgang „Raum EG Forum heizt sich auf“ seit 26.01.2021)? [Postfach Nr. 6]

---

## 2 Ergebnis Teil 2: Angebot von Signalsteg (vorbereitet, Angebot fehlt)

### 2.1 Prüfraster, sobald das Angebot vorliegt

Vollständigkeit (je Punkt ja/nein): Anbieter mit Anschrift und Datum; Gegenstand und Ort (Forum EG); Messgrößen und Messplan (Dauer, Messpunkte, Zeitraum Nachmittag); Geräte mit Kalibrierstand; Bericht und Empfänger; Zugang und Rohdaten; Einzelpreise, Menge, Netto, USt, Brutto; Zahlungsbedingungen; Bindefrist; Aufteilung der Kosten zwischen Luftpfad und Thermenfeld [Prüfpunkte aus A166_….pdf, S. 1, Teil 2; Gliederung = Annahme].

Rechenfehler: Summe der Positionen = Netto; Netto × 0,19 = USt; Netto + USt = Brutto; Hälfte = Brutto / 2 [Rechnung, nach Eingang mit Python nachrechnen].

### 2.2 Variantentabelle (leer bis 27.11.)

| Variante | Netto EUR | Brutto EUR | Anteil Luftpfad | Luftpfad netto EUR | Quelle |
|---|---|---|---|---|---|
| laut Angebot (Hälfte Luftpfad, Hälfte Thermenfeld) | [aus Angebot] | [Netto × 1,19] | 50 % | [Netto × 0,5] | [Angebot Signalsteg, Uebergaben/K64, fehlt] |
| Anteil nach Ursache (Lüftung / Heizwasserseite) | [aus Angebot] | | x % nach Messergebnis | [Netto × x] | [Ursache aus A163, Elena Voss] |
| Luftpfad zahlt nichts | [aus Angebot] | | 0 % | 0,00 | |
| Luftpfad zahlt allein (Thermenfeld lehnt ab) | [aus Angebot] | | 100 % | [Netto] | |

Hinweis: Luftpfad kann die Vorsteuer in der Regel abziehen; maßgeblich für die eigene Belastung ist daher meist der Nettobetrag [Annahme, nicht aus den Unterlagen; mit Jasmin Ebert prüfen].

### 2.3 Entwurf der kaufmännischen Antwort an Signalsteg (K64, bis 30.11.)

> Sehr geehrte Damen und Herren, sehr geehrter Herr Elster,
> vielen Dank für Ihr Angebot vom [Datum] zur Messung im Forum. Wir haben es geprüft [Ergebnis Prüfung]. Luftpfad ist bereit, den Auftrag [gemeinsam mit Henrike Baum zu zeichnen / nicht zu zeichnen], und zwar zu folgenden Bedingungen:
> 1. Kostenanteil Luftpfad: [Hälfte / Anteil nach Ursache / nichts], höchstens [Betrag] EUR netto.
> 2. Bezahlung unabhängig vom Ergebnis der Messung [ja/nein].
> 3. Messplan vor Beginn und Bericht an beide Seiten (Luftpfad und Thermenfeld) gleichzeitig.
> 4. Nur kalibrierte Messgeräte, Kalibrierscheine liegen dem Bericht bei.
> 5. Zugang zur Anlage und Rohdaten der Gebäudeautomation nach Absprache mit Elena Voss [Entscheidung Elena, A163].
> Was wir nicht zusagen: [z. B. Kostenübernahme vor Klärung der Ursache, Anerkenntnis einer Verantwortung für die Wärme im Forum].
> Mit freundlichen Grüßen
> Kai Landmann, Kaufmännischer Geschäftsführer · Henrike Baum, Technische Geschäftsführung

[Bedingungen aus A166_….pdf, S. 1, Teil 2; Anrede und Gruß aus Personenbriefing_Kai_Landmann.pdf, S. 2, Abschnitt 5; gemeinsame Zeichnung: Unterschriftenverzeichnis 11.13.02.031 vom 04.11.2026, Gesamtvertretung; Firmenbriefing, S. 14, Abschnitt 19]

Abstimmung: Elena Voss legt eine Empfehlung zu den Kosten vor und antwortet Signalsteg selbst zu Zugang und Rohdaten in K64; beide Antworten dürfen sich nicht widersprechen [A166_….pdf, S. 1; 00_Bis_zum_2_12.md, Zeile 30.11.]. Eigene Kalibrierung: Luftpfad hat einen Kalibrierschein vom 05.09.2026 und ein Geräteverzeichnis vom 04.11.2026 auf dem Laufwerk [Laufwerk_Export_Luftpfad_Anlagentechnik.xlsx, Zeilen 74 und 435]; Inhalt nicht im Repository [nicht belegt].

### 2.4 Entwurf Nachricht an Detlef Brede (Kurschat Objektwelt)

> Hallo Herr Brede, Signalsteg bietet eine Messung im Forum an, Kosten laut Angebot [Betrag] EUR netto, je zur Hälfte Luftpfad und Thermenfeld. Wir schlagen vor: [Hälfte / Anteil nach Ursache], Messplan und Bericht für beide Seiten, kalibrierte Geräte. Der Volumenstrom im Forum stimmt seit dem Tausch des Stellantriebs am 30.10. (1.110 m³/h bei Soll 1.080). Lehnen Sie ab, [beauftragen wir die Messung allein und behalten uns vor, die Kosten nach dem Ergebnis zurückzufordern / verzichten wir auf die Messung]. Bitte Rückmeldung bis [Datum]. Kai Landmann, Luftpfad

[Volumenstrom: Postfach Nr. 16; Firmenbriefing, S. 13, Abschnitt 18; Folge bei Ablehnung = Entscheidung Kai]

---

## 3 Ergebnis Teil 3: Vermerk zu den Nachweisen (für Henrike Baum, Entwurf)

| Vertragsstelle | Was der Vertrag verlangt | Was Luftpfad heute vorlegen kann | Was nicht |
|---|---|---|---|
| **§ 7 Dokumentation und Prüfbuch** [VTR-1005, S. 2] | Prüfbericht als PDF je Wartung mit Datum, Name Techniker, Arbeiten, Mängel, Empfehlungen; Zugang binnen **zwei Wochen** (Zielwert **10 Werktage**); **Prüfbuch im Technikraum** vom Techniker nachgeführt; Termintreue **98 %** | Wartungsprotokolle als PDF, z. B. 09354 vom 02.11.2026 mit Techniker Maximilian Backhaus, Arbeiten, Befund, 4,0 h, gegengezeichnet Dennis Prange [04.21.04.192_2026-11-02_Wartungsprotokoll, S. 1]; zahlreiche Protokolle 2019–2026 auf dem Laufwerk [Laufwerk_Export, Ordner „Bogenfeld 12/Wartung 20xx“] | **Prüfbuch im Technikraum:** in keiner Unterlage belegt [Volltextsuche „Prüfbuch“ nur im Vertrag und im Aufgabenblatt]. Zugangsdaten der Berichte an den Auftraggeber und Termintreue: **nicht belegt**. Laufwerk ungeordnet (doppelte Dateien, „Kopie.pdf“, „neu.pdf“, eine Datei mit Änderungsdatum **16.12.2026**, also in der Zukunft) [Laufwerk_Export, Zeilen 144–150, 203] |
| **§ 8 Qualifikation des Personals** [VTR-1005, S. 2] | nur ausgebildetes und unterwiesenes Personal mit erforderlicher Befähigung; Nachweis auf Verlangen durch Kopien der Bescheinigungen; **befähigte Person namentlich benannt** | Zertifikat Fachbetrieb TPK vom 06.06.2019 und 01.05.2023 [Laufwerk_Export, Zeilen 5, 14, 245]; Unterweisungsnachweis Torwinkel vom 16.04.2025 [ebd., Zeile 184]; Personalstammblatt vom 23.10.2026 [ebd., Zeile 16]; Berufsabschlüsse im Firmenbriefing (z. B. Philipp Wiese, Geselle HLS 2007; Kevin Schuster, Mechatroniker Kältetechnik 2015) [Firmenbriefing, S. 8–9, Abschnitt 10] | **Namentliche Benennung der befähigten Person** gegenüber Kantbogen: nicht belegt. **Unterweisung von Kevin Schuster** (seit 16.11.2026, übernimmt die Anlagen von Backhaus ohne Übergabe) für den Bogenfeld: nicht belegt [Firmenbriefing, S. 9; Postfach Nr. 18]. Unterschriftenverzeichnis vom 04.11.2026 führt Maximilian Backhaus noch mit Vollmacht 500 EUR, obwohl sein letzter Arbeitstag der 05.11.2026 war [11.13.02.031, S. 1; Firmenbriefing, S. 9] |
| **§ 10 Haftung und Versicherung** [VTR-1005, S. 2, im Scan geprüft] | Betriebshaftpflicht mit Deckung **mindestens 1.769.000 EUR je Schadenfall**; Nachweis auf Anforderung | „Versicherungsbestätigung Haftpflicht 2018.pdf“ [Laufwerk_Export, Zeile 90, Ordner „Bogenfeld 12/Vertrag“, geändert 14.01.2019]; „Versicherungsbestätigung_Haftp_final.pdf“, geändert 17.02.2025 [ebd., Zeile 412, Ordner „Verträge“, Inhalt nicht im Repository]; in der Objektakte vier Bestätigungen 2004–2024 [Firmenbriefing, S. 2, Abschnitt 3] | **Keine gültige Bestätigung für 2026.** (aus dem eigenen Personenbriefing, nur für Kai Landmann) Zum 01.01.2026 wurde die Deckung von 2.000.000 auf **1.500.000 EUR** je Schadenfall gesenkt; das liegt **269.000 EUR unter** der Vertragsforderung (1.769.000 − 1.500.000, Rechnung). Henrike Baum weiß davon nichts; auf dem Laufwerk liegt nur die Bestätigung von 2018 [Personenbriefing_Kai_Landmann.pdf, S. 4, „Was nur Sie wissen“] |

**Anlass:** Am 10.12. sollen Berater der Eigentümerseite nach den Wartungsverträgen fragen; das ist bisher ein Gerücht [Postfach Nr. 16; Firmenbriefing, S. 14, Abschnitt 19].

**Vorschlag, was bis 10.12. in Ordnung gebracht wird (Behalten, entscheidet Kai):**
1. § 10: Deckung beim Versicherer auf mindestens 1.769.000 EUR je Schadenfall anheben und eine aktuelle Bestätigung anfordern (aus dem eigenen Personenbriefing, nur für Kai Landmann). Begründung: Ein Vertragsverstoß, der bei Nachfrage ohnehin auffällt; die Korrektur vorher ist die einzige Variante mit passendem Nachweis.
2. § 8: Befähigte Person schriftlich benennen; Unterweisung Kevin Schuster für den Bogenfeld nachholen und dokumentieren; neues Unterschriftenverzeichnis ohne Maximilian Backhaus.
3. § 7: Prüfbuch im Technikraum durch einen Techniker prüfen lassen (vorhanden, nachgeführt?) und Wartungsprotokolle 2026 in einem Ordner bündeln.

**Wen informieren (Vorschlag):** **Henrike Baum sofort**, weil Verträge nach außen nur gemeinsam gebunden werden und sie den Vertrag 2018 unterschrieben hat [VTR-1005, S. 3, Unterschriften; Firmenbriefing, S. 14, Abschnitt 19]. Kantbogen erst nach Abstimmung mit Henrike; ob und wann, entscheidet Kai.

---

## 4 Was die Gruppe selbst entscheiden oder liefern muss

**Entscheidungen (Behalten, Kai mit Henrike):**
- 2026-1182: stehen lassen, korrigieren oder zurückziehen; Absatz in das A161-Schreiben bis 25.11. (Vorschlag oben 1.4).
- Messung: zeichnen ja/nein, Anteil Luftpfad, Bedingungen; gemeinsame Unterschrift mit Henrike.
- Versicherung und Nachweise: wen informieren, was bis 10.12. geändert wird.

**Eingänge anderer Gruppen, die fehlen:**
- **Angebot von Signalsteg** (Konrad Elster) in Uebergaben/K64, bis 27.11. [A166_….pdf, S. 2, „Übergabe“].
- **Rückmeldung von Raumlot** (Jonas Heller / Farid Mertens), wer den Einsatz am 30.10. bestellt hat, mit Bestellnummer; Frage im Kurschat Objektwelt [A166_….pdf, S. 1; Personenbriefing_Kai_Landmann.pdf, S. 5].
- Später: Reaktion von Detlef Brede (Thermenfeld) und Antwort von Kantbogen auf das Schreiben (bis 30.11. in K61) [00_Bis_zum_2_12.md, „Wie Ihre Aufgaben zusammenhängen“].

**Aus der eigenen Gruppe:**
- Empfehlung von Elena Voss zu den Kosten der Messung und ihre Antwort zu Zugang/Rohdaten (A163) [A166_….pdf, S. 1].
- Selim Ahrens: Steht der Einsatz 26./30.10. in einer anderen Dispositionsliste (Arbeitsschein, Stunden, Material)?
- Jasmin Ebert: Rechnungs-PDF 2026-1182 (Positionen, Zugangstag).
- Bildschirmfotos der drei wichtigsten Stellen (OP-Zeile 11, § 10 im Scan, Einsatzliste Forum) [A166_….pdf, S. 2, „Woran es gemessen wird“, Punkt 2].
- Lernprotokoll: was abgegeben, geteilt, behalten wurde.

## 5 Geprüft

1. **2026-1182, 833,00 / 158,27 / 991,27 EUR, Belegdatum 02.11.2026, Fälligkeit leer:** direkt in der XLSX mit openpyxl gelesen (Blatt „OP Debitor 10014“, Zeile 11) und USt/Brutto nachgerechnet; stimmt mit Postfach Nr. 10 (991,27 brutto, 02.11.2026) überein.
2. **Forum-Einsätze und Summe 915,47 EUR:** alle vier Zeilen (29, 56, 65, 82) in der XLSX gelesen; je Zeile Stunden × Satz + Anfahrt + Material nachgerechnet, Abweichung 0,00 EUR; Suche nach „1182“ in allen Zellen: kein Treffer.
3. **§ 10 Deckung 1.769.000 EUR, § 6 Grenze 650 EUR, § 5 Monteur 54,70 EUR:** Vertragsscan Seite 2 als Bild gerendert und abgelesen; stimmt mit der Texterkennung überein.

## 6 Vermerke

- In den Unterlagen zu A166 wurde kein Text gefunden, der sich an eine KI oder eine „automatische Verarbeitung“ richtet.
- Das Laufwerk enthält eine Datei mit Änderungsdatum 16.12.2026 („Kopie von Wartungsprotokoll 2026.pdf“, MBa) [Laufwerk_Export, Zeile 203]; das Datum liegt nach dem Stand der Unterlagen und sollte vor dem 10.12. geklärt werden.
- Stellen mit „(aus dem eigenen Personenbriefing, nur für Kai Landmann)“ nicht ungeprüft an andere weitergeben; ob Kai sie im Vortrag nennt, entscheidet er allein [Personenbriefing_Kai_Landmann.pdf, S. 5, Abschnitt 13].
