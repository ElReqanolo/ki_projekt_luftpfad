# KI-Ergebnis A005: Wer ist wer im Haus

- **Projekt:** A005, Kette „Einstieg“
- **Runde:** 2
- **Datum:** 23.11.2026 (Runde 1 vom 19.11.2026)
- **Federführend:** Selim Ahrens (Person 3), Abgleich mit Kevin Schuster (Person 5) [A005_Wer_ist_wer_im_Haus.pdf, S. 1, Kopf und „Eingang aus Ihrer Gruppe“]

## Änderungen gegenüber v1

Runde 2 vom 23.11.2026: Alle Projekte wurden auf Wunsch der Gruppe unabhängig vom Status erneut geprüft. Feedback der Gruppe lag nicht vor.

- **Lage seit dem 23.11.2026:** Laut dem neuen Blatt „Bis zum 2.12.“ ruhen die Aufgabenblätter der Figuren bis auf Weiteres. Abgabetage, Stundenangaben und Lieferungen an andere Firmen gelten nicht, in 90_Uebergaben wird nichts abgelegt, und keine Gruppe wartet auf Post [00_Bis_zum_2_12.pdf, „Was bis auf Weiteres nicht gilt“]. Fristen und Übergabeordner in dieser Datei stehen so im Aufgabenblatt und gelten erst wieder, wenn der Dozent es sagt [ebd., letzter Absatz].
- **Neu: Abgleich der Mieter mit dem 3D-Modell** (Abschnitt „Abgleich mit dem Gebäudemodell“). Die Flächen von sieben Mietern stimmen auf 0,2 m² mit dem Flächenspiegel überein; bei Achsenraum (EG) und Lernhafen (EG) tragen die Räume im Modell nicht durchgehend den Mieternamen [3D-Modell Objektwelt, Stand 23.11.2026, Raumliste].
- Thermenfeld: Der Weg über Uebergaben/K64 stammt aus dem alten Blatt und ruht derzeit; der Eintrag „direkt“ bleibt als Sachaussage aus A163 stehen.
- **Status „Infos benötigt“:** Dem Agenten fehlen Infos, die jemand liefern kann: Ob der Stand der Verzeichnisse zu dem passt, was die anderen aus ihren Unterlagen wissen, mit Datum (von Gruppe, vor allem Kevin Schuster (A007)). Bitte im Verbesserungsfeld des Projekts eintragen oder als Datei anhängen; der Agent arbeitet sie beim nächsten Lauf ein.

**Geprüft in Runde 2:**

1. Summe der zwölf vermieteten Flächen aus dem Flächenspiegel (Werte aus v1) erneut mit Python addiert: 6.620,75 m².
2. Flächen je Mieter im Modell mit Python aus data/gebaeude.json summiert (Tabelle oben) [3D-Modell Objektwelt, Stand 23.11.2026].
3. Ansprechpersonen Torwinkel und Raumlot nochmals mit Firmenbriefing S. 10, Abschnitt 12 verglichen; unverändert.

Quellen (Kurzform, mit Stand): **FB** = Firmenbriefing, Stand 18.11.2026 (Seite, Abschnitt); **FSP** = 03.10.02.017 Flächenspiegel Raumlot, Stand 03.11.2026; **UV 2023 / UV 2026** = 11.13.02.013 / 11.13.02.031 Unterschriftenverzeichnis Luftpfad, Stand 02.01.2023 / 04.11.2026; **VTR** = 04.03.01.018 Wartungsvertrag VTR-1005 vom 06.03.2018; **PF Nr.** = 00_Postfach_als_Text.txt, Export 18.11.2026; **STB** = 07.04.02.006 Firmensteckbrief, Stand 15.03.2018; **PB-KSc** = Personenbriefing Kevin Schuster, Stand 18.11.2026 (nur Abschnitte außerhalb „Was nur Sie wissen“).

Die Einordnung in die sechs Gruppen ist ein **Vorschlag**; laut Blatt behält die Gruppe die „Einordnung nach Gebäudemanagement“ [A005_…pdf, S. 1, „Einsatz von KI“].

## 1 Karte (Übersicht)

```
                         EIGENTÜMERIN
                    Kantbogen Bestand GmbH
             (Rechnungen direkt │ Vertrag über Torwinkel)
                               │
        ┌──────────────── VERWALTUNG ────────────────┐
        │                                             │
  Torwinkel Gebäudeservice GmbH              Raumlot Objektmanagement GmbH
  FM im laufenden Betrieb  ◄── direkt ──►    Property Manager   ◄── direkt
        │  (Bestellungen, Abnahme,                     │ (Angebote, Prüfauftrag,
        │   Mieter-Tickets)                            │  bündelt Mieterbeschwerden)
        ▼                                              ▼
   MIETER (über Torwinkel / Raumlot)            DIENSTLEISTER (Weg meist nicht belegt)
   Signalsteg (für die Messung K64 direkt)      Thermenfeld (K64 direkt), Berndt Kälte,
   Werkraum, Raumpuls, Feldkreis, Hofmaß,       Kreisbogen Elektro, Seidlitz Alarmbau, …
   Achsenraum, Lernhafen, Pfadklar, Bauteilbogen
                                                PRÜFER: TPK (direkt laut FB Abschn. 12), Mattern
                                                BEHÖRDEN: Weg nicht belegt
                     ★ Luftpfad Anlagentechnik GmbH (wir): Wartung der Lüftungsanlagen
```

## 2 Tabelle je Firma

| Gruppe | Firma | Rolle im Haus | Ansprechperson, Funktion (Quelle, Stand) | direkt / über | Beleg für den Weg |
|---|---|---|---|---|---|
| Eigentümerin | Kantbogen Bestand GmbH | Eigentümerin und Vermieterin; Eigentümerin des Grundstücks [FB, S. 3 und S. 4, Abschnitt 6] | Eva Brandt, Geschäftsführung; Clara Rhein, Rechnungsprüfung Eigentümer [FB, S. 10, Abschnitt 12, Stand 18.11.2026] | **direkt** für Rechnungen; **über Torwinkel** für Vertrag und Abnahme | Rechnungen an Debitor Kantbogen [OP_Kantbogen_Stand_2026-11-18.xlsx, Blatt „OP Debitor 10014“]; Vertrag „Kantbogen … vertreten durch die Torwinkel Gebäudeservice GmbH“ [VTR, S. 1]; Abnahme durch den Auftraggeber im Protokoll [VTR, S. 2, § 13] |
| Verwaltung | Torwinkel Gebäudeservice GmbH | FM-Dienstleisterin im laufenden Betrieb [FB, S. 3, Abschnitt 6] | Rainer Jungmann, Geschäftsführer; Ben Hecht, Servicekoordination [FB, S. 10, Abschnitt 12, Stand 18.11.2026]; Nora Wendel, Technisches und infrastrukturelles FM [PF Nr. 2, 07.09.2026]; Jannik Vogler, Haustechniker seit 16.11.2026 (Nachfolge Dennis Prange) [PB-KSc, Abschnitt 15 „Ihr Gegenüber“]; Florian Kunze, Abnahme der Protokolle vom 03.11. [A164-Aufgabenblatt, S. 2] | **direkt** | 48 Nachrichten bis 4.11.2026 [FB, S. 10, Abschnitt 12]; Bestellung AUF-2656 [PF Nr. 2]; Jahresterminplan [PF Nr. 12] |
| Verwaltung | Raumlot Objektmanagement GmbH | Property Manager im Betrieb [FB, S. 4, Abschnitt 6] | Uwe Pohl, Geschäftsführer; Farid Mertens, Technisches Property Management [FB, S. 10, Abschnitt 12, Stand 18.11.2026]; Jonas Heller, Property Management [FSP, Unterschrift, Stand 03.11.2026]; Judith Ahlers, ohne Funktionsangabe [PF Nr. 1, 03.08.2026] | **direkt** | „Raumlot stimmt Angebote und Auftragsgrenzen mit Luftpfad ab“, 5 Nachrichten [FB, S. 10, Abschnitt 12]; Telefonnotiz an Backhaus [PF Nr. 1] |
| Mieter | Signalsteg Messtechnik GmbH | Mieterin 1. OG Büro West, 659,28 m² [FSP] | nicht belegt | **direkt** nur für das Messangebot Forum; sonst über Torwinkel/Raumlot [Annahme] | Angebot über Uebergaben/K64 am 27.11. [00_Ablauf.md, „Post anderer Gruppen“] |
| Mieter | Werkraum Projektbüros GmbH | 4. OG Büro West und Nord 838,18 m²; 5. OG Büro West 659,28 m² [FSP] | nicht belegt | **über** Torwinkel/Raumlot | Raumlot bündelt die Beschwerden der Mieter [FB, S. 14, Abschnitt 19]; Notiz „Raum EG Forum heizt sich auf (Werkraum Projektbüros)“ [03_Notizen_MBa.txt, Z. 11] |
| Mieter | Raumpuls Software GmbH | 2. OG Büro West und Nord 798,80 m²; 4. OG Büro Südost 419,49 m² [FSP] | nicht belegt | **über** Torwinkel/Raumlot | wie oben [FB, S. 14, Abschnitt 19] |
| Mieter | Feldkreis Service GmbH | 1. OG Büro Ost 598,92 m² [FSP] | nicht belegt | **über** Torwinkel/Raumlot; Fragen an Feldkreis über die Spielleitung | Notizen „WV … (Feldkreis Service)“ [03_Notizen_MBa.txt, Z. 12–13]; „Mieterin Feldkreis … im Kurschat an die Spielleitung“ [00_Ablauf.md, „Wenn etwas fehlt“] |
| Mieter | Hofmaß Betriebsgastronomie GmbH | EG Bistro mit Küche 318,59 m² [FSP] | nicht belegt | **über** Torwinkel/Raumlot | [FB, S. 14, Abschnitt 19] |
| Mieter | Achsenraum Ingenieurgesellschaft mbH | EG Projektbereich Ost 249,61 m²; 3. OG Büro West 630,49 m² [FSP] | nicht belegt | **über** Torwinkel/Raumlot | [FB, S. 14, Abschnitt 19] |
| Mieter | Lernhafen Akademie GmbH | EG Schulungszone Südflügel 359,57 m² [FSP] | nicht belegt | **über** | [FB, S. 14, Abschnitt 19] |
| Mieter | Pfadklar Projektberatung GmbH | 2. OG Büro Ost 459,51 m² [FSP] | nicht belegt | **über** | [FB, S. 14, Abschnitt 19] |
| Mieter | Bauteilbogen Vertrieb GmbH | 3. OG Büro Ost 629,03 m² [FSP] | nicht belegt | **über**; 2025 stellte Bauteilbogen Luftpfad Antriebstypen vor (fachlich direkt) | [FB, S. 13, Abschnitt 18, Eintrag 2025] |
| Dienstleister | Thermenfeld Wärme und Wasser GmbH | abgegrenzte Sanitärarbeiten [FB, S. 3, Abschnitt 6] | nicht belegt | **direkt** (Stellungnahme A163) | Uebergaben/K64 laut Aufgabenblatt A163; Übergabe ruht derzeit [00_Bis_zum_2_12.pdf, „Was bis auf Weiteres nicht gilt“] |
| Dienstleister | Berndt Kältetechnik GmbH | Kälteservice und Kältesatztausch [FB, S. 3, Abschnitt 6] | Werner Berndt (Funktion nicht belegt) [FB, S. 10, Abschnitt 12, „Rivalität“ mit Henrike Baum] | Weg **nicht belegt** | – |
| Dienstleister | Kreisbogen Elektrotechnik, Seidlitz Alarmbau, Höhenlauf Aufzugservice, Meldepfad Sicherheitstechnik, Datensteg Netzdienste, Klarfenster, Grünsaum, Reinfeld, Kreislaufhof, Tageskorb, Talwerk Energie | je laut FB, S. 3–4, Abschnitt 6 | nicht belegt | Weg **nicht belegt** | – |
| Prüfer | Technische Prüfstelle Kastner GmbH (TPK) | Prüforganisation Aufzüge, Druck, Elektro [FB, S. 4, Abschnitt 6] | Dr. Franco Esposito, Geschäftsstellenleiter; Olaf Marquardt, Geschäftsführer [FB, S. 10, Abschnitt 12, Stand 18.11.2026] | **direkt** (laut FB unter „Mit wem wir am meisten zu tun haben“), Anlass nicht belegt | [FB, S. 10, Abschnitt 12] |
| Prüfer | Mattern Immobilienbewertung Sachverständige GmbH | Gutachter Verkehrswert und Ertragswert [FB, S. 3, Abschnitt 6] | nicht belegt | Weg **nicht belegt** | – |
| Prüfer | Bezirksschornsteinfeger Karl Beuermann | zuständiger Kehrbezirk [FB, S. 4, Abschnitt 6] | Karl Beuermann (Funktion laut Name: Bezirksschornsteinfeger) | Weg **nicht belegt** | – |
| Behörden | Branddirektion Stuttgart; Baurechtsamt; Amt für Umweltschutz; Amtsgericht Stuttgart; Landeshauptstadt Stuttgart | laut FB, S. 3–4, Abschnitt 6 | nicht belegt | Weg **nicht belegt** | – |
| Weitere | Wehrstein Allgemeine Versicherung AG; Dörr und Kollegen Versicherungsmakler; Nordsteg Kreditbank AG; Notariat Hoffmeister; Maßblatt Architektur | laut FB, S. 3–4, Abschnitt 6 | nicht belegt | Weg **nicht belegt**; Nordsteg ist zugleich Bank von Luftpfad [STB, „Bank“] | – |

Belegung laut Flächenspiegel: 6.620,75 m² von 7.220,06 m² vermietet (91,70 %), 5. OG Ausbaureserve 599,32 m² frei [FSP; Summe mit Code nachgerechnet: 6.620,75 m²].

## 3 Personen oder Funktionen, zu denen zwei Quellen Verschiedenes sagen

| Nr. | Thema | Quelle A | Quelle B |
|---|---|---|---|
| 1 | Geschäftsführung Torwinkel | Petra Ulrich [VTR, Fußzeile S. 1–3, Stand 06.03.2018] | Rainer Jungmann [FB, S. 10, Abschnitt 12, Stand 18.11.2026] |
| 2 | Objektleitung Torwinkel | Rainer Lehmann, „Objektleiter Bogenfeld“ [VTR, S. 1 und S. 3, 2018] | Nora Wendel bestellt innerhalb des „Freigabelimits der Rolle FM-Objektleitung“ [PF Nr. 2, 07.09.2026]; wer heute Objektleitung ist, ist nicht eindeutig belegt |
| 3 | Haustechniker Torwinkel | Dennis Prange, Haustechniker [Protokoll 09384, S. 1, 03.11.2026] | Jannik Vogler seit 16.11.2026 [PB-KSc, Abschnitt 15]; „der Nachfolger ist seit Montag da“ [PF Nr. 17] |
| 4 | Funktion Farid Mertens (Raumlot) | „Property Management“ [STB, Unterschrift, Stand 15.03.2018] | „Technisches Property Management“ [FB, S. 10, Abschnitt 12, Stand 18.11.2026] |
| 5 | Servicetechniker Lüftung und Kälte bei Luftpfad | UV 2026 (Stand 04.11.2026): Maximilian Backhaus mit Vollmacht 500 EUR; Kevin Schuster fehlt | Backhaus letzter Arbeitstag 05.11.2026, Nachfolge Kevin Schuster seit 16.11.2026 [FB, S. 9, Abschnitt 10] |
| 6 | Tobias Kernfeld bei Luftpfad | UV 2023 (Stand 02.01.2023): nicht aufgeführt | UV 2026: TKe, Servicetechniker; FB: seit 15.01.2024 [FB, S. 9, Abschnitt 10]; Firmenchronik: 01.01.2024 [07.04.02.055] |
| 7 | Flächen Werkraum | „Mieterin 840 m2 im OG4“, „Erweiterung 660 m2 im OG5“ [FB, S. 3–4, Abschnitt 6] | 838,18 m² und 659,28 m² [FSP] – nur gerundet, kein echter Widerspruch |
| 8 | Achsenraum | „Projektbereich Erdgeschoss“ und „obere Bürozone Neubau“ [FB, S. 4, Abschnitt 6] | EG Projektbereich Ost und 3. OG Büro West [FSP] – passt, „obere Bürozone“ ist ungenau |

## 4 Gruppen ohne Quelle

- **Ansprechpersonen der Mieter:** für alle neun Mieterfirmen **nicht belegt** (Flächenspiegel und Briefing nennen keine Personen).
- **Ansprechpersonen der Behörden:** **nicht belegt**.
- **Ansprechpersonen der Dienstleister** außer Torwinkel, Raumlot, TPK: **nicht belegt** (bei Berndt nur ein Name ohne Funktion).
- **Weg zu Behörden und zu den meisten Dienstleistern:** **nicht belegt**.

## Abgleich mit dem Gebäudemodell (neu in Runde 2)

Das 3D-Modell „Objektwelt“ führt die Räume mit dem Namen des Nutzers als Vorsilbe, zum Beispiel „Signalsteg Büro Entwicklung West“ [3D-Modell Objektwelt, Stand 23.11.2026, Raumliste auf der Webseite unter „Gebäude“]. Summe der Raumflächen je Mieter, mit Python aus `data/gebaeude.json` gerechnet:

| Mieter | Geschoss | Flächenspiegel m² [FSP] | Modell m² (Räume mit Mietername) | passt? |
|---|---|---:|---:|---|
| Signalsteg | 1. OG | 659,28 | 659,2 | ja |
| Feldkreis | 1. OG | 598,92 | 599,0 | ja |
| Pfadklar | 2. OG | 459,51 | 459,5 | ja |
| Raumpuls | 2. OG / 4. OG | 798,80 / 419,49 | 798,8 / 419,5 | ja |
| Achsenraum | 3. OG | 630,49 | 630,5 | ja |
| Bauteilbogen | 3. OG | 629,03 | 629,1 | ja |
| Werkraum | 4. OG / 5. OG | 838,18 / 659,28 | 838,1 / 659,3 | ja |
| Hofmaß | EG | 318,59 | 318,7 | ja |
| Achsenraum | EG | 249,61 | – (Räume 0102 bis 0105 „Arbeitsraum Ost A/B, Nordost, Südost“ ohne Mietername, zusammen 249,7) | wahrscheinlich [Annahme aus der Fläche] |
| Lernhafen | EG | 359,57 | 149,8 (fünf Räume „Lernhafen …“); mit 0001 Forum 89,8, 0100 Atlas 59,9 und 0101 Reserve 60,0 zusammen 359,5 | wahrscheinlich [Annahme aus der Fläche] |

Folgerung: Modell und Flächenspiegel beschreiben dieselbe Mieterverteilung. Ansprechpersonen der Mieter enthält das Modell nicht; die Lücke aus Abschnitt 4 bleibt. Das Modell ist ein Planungsmodell; bei Widerspruch gilt der Flächenspiegel [Annahme, Regel der Gruppe für die Webseite].

## 5 Was die Gruppe selbst entscheiden oder liefern muss

1. **Einordnung nach Gebäudemanagement** (z. B. ob Torwinkel und Raumlot beide „Verwaltung“ sind oder Torwinkel „Dienstleister“) – Behalten [A005_…pdf, S. 1].
2. **Abgleich mit Kevin Schuster (A007)**, ob der Stand der Verzeichnisse zu seinen Mitteilungen und Notizen passt; Antwort mit Datum als Quelle eintragen [A005_…pdf, S. 1, „Eingang aus Ihrer Gruppe“]. Liegt noch nicht vor.
3. Karte als **Bild** zeichnen lassen oder diese Tabelle abgeben.
4. **Bildschirmfotos** der drei wichtigsten Stellen (Vorschlag: FB S. 10 Abschnitt 12; FSP; VTR S. 1 „vertreten durch die Torwinkel“).
5. Fehlende Ansprechpersonen der Mieter: Anfrage an Raumlot (Jonas Heller) oder im Kurschat an die Spielleitung, mit Datum notieren („Lücke benannt“) [00_Ablauf.md, „Wenn etwas fehlt“].

## 6 Geprüft

1. **Flächen und Belegungsquote**: alle zwölf vermieteten Flächen aus FSP mit Python addiert = 6.620,75 m²; mit 599,32 m² frei = 7.220,07 m² (FSP: 7.220,06, Rundung); Quote 91,70 %.
2. **Ansprechpersonen Torwinkel, Kantbogen, Raumlot, TPK**: mit FB, PDF-Seite 10, Abschnitt 12 Zeichen für Zeichen abgeglichen.
3. **Stand der Verzeichnisse**: UV 2023 „Stand 02.01.2023“ und UV 2026 „Stand 04.11.2026“ im Kopf beider Dokumente gelesen; Unterschied Nr. 5 und 6 durch Zeilenvergleich (UV 2026 hat zusätzlich TKe, sonst gleich).
