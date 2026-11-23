# KI-Ergebnis A006: Rundgang als Sprachnotiz

- **Projekt:** A006, Kette „Einstieg“
- **Runde:** 2
- **Datum:** 23.11.2026 (Runde 1 vom 19.11.2026)
- **Federführend:** Kevin Schuster (Person 5); Ziele von Elena Voss (Etagenzentrale EG, A163) und Selim Ahrens (Abschaltbereiche, A162) [A006_Rundgang_als_Sprachnotiz.pdf, S. 1, Kopf und „Eingang aus Ihrer Gruppe“]

## Änderungen gegenüber v1

Runde 2 vom 23.11.2026: Alle Projekte wurden auf Wunsch der Gruppe unabhängig vom Status erneut geprüft. Feedback der Gruppe lag nicht vor.

- **Lage seit dem 23.11.2026:** Laut dem neuen Blatt „Bis zum 2.12.“ ruhen die Aufgabenblätter der Figuren bis auf Weiteres. Abgabetage, Stundenangaben und Lieferungen an andere Firmen gelten nicht, in 90_Uebergaben wird nichts abgelegt, und keine Gruppe wartet auf Post [00_Bis_zum_2_12.pdf, „Was bis auf Weiteres nicht gilt“]. Fristen und Übergabeordner in dieser Datei stehen so im Aufgabenblatt und gelten erst wieder, wenn der Dozent es sagt [ebd., letzter Absatz].
- **Neu: Lücken aus Abschnitt 1.4 mit dem 3D-Modell gefüllt** (Abschnitt „Was das Gebäudemodell ergänzt“). Das Modell verwendet dieselben Raumnummern wie die Grundrisse: Treppen und Aufzüge EG 1000 bis 1004 und UG 1318 bis 1322 [3D-Modell Objektwelt, Stand 23.11.2026, Raumliste]. Damit ist die Zuordnung EG ↔ UG aus 1.1 bestätigt, die in v1 nur eine Annahme war.
- Der Eingang ist im Modell benannt (0131 „Südliche Eingangslobby“, daneben 0109 „Westfoyer“), und für die Etagenzentrale EG gibt es einen klaren Kandidaten (1029 „Lüftungs- und Regelverteilung EG Nordost“). Beides bleibt am Plan und bei Tobias Kernfeld zu bestätigen, weil das Modell ein Planungsmodell ist.

**Geprüft in Runde 2:**

1. Raumnummern 1000 bis 1004 (EG) und 1318 bis 1322 (UG) in data/gebaeude.json nachgeschlagen; Namen wie in der Tabelle [3D-Modell Objektwelt, Stand 23.11.2026].
2. EG-Plan-Nummern aus v1 (Abschnitt 1.1) mit den Modellnummern verglichen: alle fünf stimmen.
3. Flächen der Technikräume aus data/gebaeude.json übernommen, nicht gerundet außer auf 0,1 m².

## Vorbemerkung: Was der Agent liefern kann

Sprachnotiz und Abschrift entstehen erst, wenn Kevin den Weg aufspricht; eine Abschrift ohne Aufnahme wäre erfunden [A006_…pdf, S. 1, „Was Sie abgeben“]. Die Ziele des Wegs sind noch nicht von Elena und Selim geliefert. Diese Datei ist deshalb eine **Planauswertung als Vorbereitung**: welche Nummern der Plan hat, was er nicht zeigt und wie die Wegbeschreibung später geprüft werden kann.

Quellen: **EG** = files/Person_5/03_Material/Geschossplan/Grundriss_EG.png (Planstand 04.11.2026, als Bild angesehen); **UG** = Grundriss_UG.png (Planstand 04.11.2026, Texterkennung data/text/9a24502f82.txt); **FSP** = 03.10.02.017 Flächenspiegel, Stand 03.11.2026.

## 1 Ergebnis: Planauswertung

### 1.1 Treppen und Aufzüge (die Nummern, an denen jede Wegbeschreibung hängt)

| Element | EG-Nummer | Lage im EG | UG-Nummer | Quelle |
|---|---|---|---|---|
| Treppe Nord | 1002 | Nordseite, Mitte, neben 1017 und den Podesten 1036/1037 | 1320 | [EG, Plan oben Mitte]; [UG, Beschriftung] |
| Treppe Südwest | 1000 | Südwestecke, neben 1035 und 1022 | 1318 | [EG]; [UG] |
| Treppe Südost | 1001 | Ostflügel, zwischen 0127 und 0124 | 1319 | [EG]; [UG] |
| Aufzug | 1003 | Westseite, nördlich von 1000 | 1321 | [EG]; [UG] |
| Lastenaufzug | 1004 | Ostflügel, neben 0112 | 1322 | [EG]; [UG] |

Die Zuordnung EG ↔ UG ist nur über die gleichen Namen geschlossen, die Pläne sagen nicht ausdrücklich, dass es dieselben Treppen sind [Annahme].

### 1.2 Flure im EG (Verkehrsflächen mit Nummer)

0002 (Südflur, ganze Breite), 0122 (Nordflur), 0123 (Westflur), 0121 (Ostflur), 1008 (Gang vor dem Bistro, Nordwest), 0120 und 0125, 0130, 0124 (Ostflügel) [EG, hellgraue Flächen mit Nummer; Zuordnung „Flur“ nach Farbe der Legende „Verkehr, Treppen, Aufzüge“ = Annahme].

### 1.3 Technikräume im EG (Kandidaten für die Etagenzentrale)

Laut Legende 11 Räume „Technik und Schächte“ [EG, Legende]. Grau dargestellt und lesbar beschriftet: **1005, 1027, 1028, 1029, 1006, 1030, 1031, 1032**, dazu schmale Schächte bei 1034 [EG, als Bild geprüft]. Welcher davon die **Etagenzentrale EG** ist, steht **nicht im Plan** [nicht belegt]; das muss Elena liefern (A163).

### 1.4 Was der Plan nicht zeigt (Lücken)

1. **Der Eingang ist nicht beschriftet.** Das Aufgabenblatt nennt den „Grundriss EG mit Eingang“ [A006_…pdf, S. 1, „Material“], im Bild steht aber kein Wort „Eingang“, und keine Raumnummer ist als Foyer oder Empfang benannt [EG; Texterkennung data/text/f953eeeae0.txt ohne „Eingang“]. Startpunkt deshalb mit Kevin klären bzw. bei der Spielleitung im Kurschat nachfragen.
2. **Raumfunktionen fehlen** außer bei Treppen, Aufzügen und Podesten; nur Farbe und Mieteinheit sind angegeben [EG, Legende].
3. **Technikzentrale im 1. UG** [Firmenbriefing, S. 3, Abschnitt 6]: Im UG sind laut Legende 14 Räume „Technik und Schächte“, welche davon RLT-Zentrale ist, steht nicht im Text des Plans [UG]. Die Wartungsprotokolle nennen Standorte wie „UG, RLT-Technikraum Süd“ und „UG, RLT Technikraum Bürobereiche“ ohne Raumnummer [04.21.04.189, S. 1; 04.21.04.192, S. 1].
4. **Abschaltbereiche** (Selim, A162): im Plan nicht eingezeichnet [nicht belegt].

### 1.5 Abgleich Plan ↔ Flächenspiegel (Mieteinheiten EG)

| Mieteinheit laut Plan | Fläche Plan | Fläche FSP | Passt? |
|---|---|---|---|
| N-EG-BISTRO, Hofmaß, Räume 1007, 1009–1016, 1018 | rund 319 m² | 318,59 m² | ja |
| N-EG-PROJ, Achsenraum, Räume 0102–0105 | rund 250 m² | 249,61 m² | ja |
| N-EG-SCHUL, Lernhafen, Räume 0001, 0100, 0101, 1019, 1020, 1024, 1025, 1026 | rund 360 m² | 359,57 m² | ja |

[EG, Abschnitt „Mieteinheiten in diesem Geschoss“; FSP, Zeilen EG]. Auffällig: Raum **0101** gehört laut Liste zur Schulungszone, ist im Plan aber gelb wie „Reserve“ eingefärbt [EG, Raum 0101 und Legende]. Die Planlegende sagt zudem „Lage im Geschoss: Nordseite, Südseite“ für die Schulungszone, obwohl FSP sie „Südflügel“ nennt [FSP, Zeile EG Schulungszone].

### 1.6 Muster für die Wegbeschreibung (erst nach Sprachnotiz und Zielen füllen)

```
Ziel: <Raumnummer>, Ziel stammt von <Elena Voss / Selim Ahrens>
1. Start: <Eingang, Raumnummer oder „im Plan nicht beschriftet“>
2. <Flur-Nr.> nach <Richtung> bis <Treppe/Aufzug-Nr.>
3. <Treppe-Nr. EG> ins UG, Ankunft <Treppe-Nr. UG>
4. ...
Jeder Schritt mit vierstelliger Nummer aus dem Plan; Nummern, die nicht im Plan stehen, markieren.
```

[Anforderung „vierstellige Nummer aus dem Plan“, A006_…pdf, S. 2, Punkt 6 und 7]

## Was das Gebäudemodell ergänzt (neu in Runde 2)

Quelle für alle Zeilen: [3D-Modell Objektwelt, Stand 23.11.2026, Raumliste, Geschosse EG und 1. UG]. Die Nummern sind dieselben wie in den Grundrissen.

| Frage aus 1.1 bis 1.4 | Antwort im Modell | Raum, Fläche |
|---|---|---|
| Treppen und Aufzüge EG | 1000 Treppe Südwest, 1001 Treppe Südost, 1002 Treppe Nord, 1003 Personenaufzug West, 1004 Serviceaufzug Ost | wie im Plan; 1004 heißt im Modell „Serviceaufzug“, im Plan „Lastenaufzug“ |
| Treppen und Aufzüge UG | 1318 Treppe Südwest, 1319 Treppe Südost, 1320 Treppe Nord, 1321 Personenaufzug West, 1322 Serviceaufzug Ost | gleiche Namen wie EG, Zuordnung damit belegt |
| Eingang (Lücke 1) | 0131 Südliche Eingangslobby; 0109 Westfoyer | 31,5 m²; 129,5 m² |
| Etagenzentrale EG (Ziel von Elena) | 1029 Lüftungs- und Regelverteilung EG Nordost | 50,5 m² |
| übrige Technikräume EG | 1027 Elektroverteilung EG Nord, 1028 Datennetz EG, 1030 Technikzugang Südost, 1031 Elektroschrank Südost, 1032 Versorgungsraum Südost, 1034 Sanitärsteigeschacht Ost | 1005 und 1006 kommen im Modell nicht vor |
| RLT-Zentrale im 1. UG (Lücke 3) | 0200 RLT-Technikraum Süd, 8027 RLT Technikraum Bürobereiche, 8026 Schaltraum RLT Süd, 8024 Gebäudeautomation, 0201 Montagezugang RLT | 179,8 / 159,8 / 19,9 / 26,7 / 42,7 m² |

Die Abschaltbereiche (Lücke 4) zeigt das Modell nicht als Bereiche; es nennt aber, welche Lüftungsanlage welche Geschosse versorgt (Webseite „Gebäude“, Abschnitt Lüftungsanlagen). Das hilft Selim bei A162.

## 2 Was die Gruppe selbst entscheiden oder liefern muss

1. **Ziele** des Wegs von Elena (Etagenzentrale EG) und Selim (Abschaltbereiche), mit Nennung, von wem welches Ziel stammt [A006_…pdf, S. 1].
2. **Startpunkt/Eingang** festlegen und belegen (im Plan nicht beschriftet, Abschnitt 1.4).
3. **Sprachnotiz** aufnehmen (Audiodatei oder Link), **Abschrift der KI unverändert** sichern.
4. **Wegbeschreibung** mit nummerierten Schritten erstellen lassen und **am Plan prüfen** (Behalten) [A006_…pdf, S. 1, „Einsatz von KI“].
5. **Plan mit eingezeichnetem Weg** als Bild.
6. **Abweichungsliste** Sprachnotiz ↔ Abschrift ↔ Beschreibung ↔ Plan und Notiz zur Abschrift.
7. Hinweis aus dem Personenbriefing (kein persönlicher Teil): Kevin ist neu im Haus, eine Einweisung ins Objekt ist noch nicht terminiert, und er fragt Tobias Kernfeld, bevor er im Haus etwas anfasst [Personenbriefing_Kevin_Schuster, Abschnitte 1 und 7]. Tobias könnte die Raumnummer der Etagenzentrale kennen [Annahme].

## 3 Geprüft

1. **Treppen- und Aufzugsnummern EG** (1000, 1001, 1002, 1003, 1004): im Bild des EG-Plans abgelesen und mit der Texterkennung des Plans abgeglichen.
2. **Treppen- und Aufzugsnummern UG** (1318–1322): in der Texterkennung des UG-Plans gelesen; das UG-Bild habe ich nicht eigens angesehen, deshalb vor Verwendung am Bild prüfen.
3. **Flächen der Mieteinheiten**: Planangaben „rund 319/250/360 m²“ gegen FSP (318,59 / 249,61 / 359,57 m²) verglichen.
