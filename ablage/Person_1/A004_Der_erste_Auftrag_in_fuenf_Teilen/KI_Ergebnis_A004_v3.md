# KI-Ergebnis A004: Der erste Auftrag in fünf Teilen

- **Projekt:** A004, Kette „Einstieg“
- **Runde:** 3
- **Datum:** 25.11.2026 (Runde 1 vom 19.11., Runde 2 vom 23.11.2026)
- **Federführend:** Henrike Baum (Person 1) [A004_Der_erste_Auftrag_in_fuenf_Teilen.pdf, S. 1, Kopf]
- **Rechentabelle:** `KI_Ergebnis_A004_v2.csv` (Laufzeitabschnitte des Vertrags, unverändert gültig)

## Änderungen gegenüber v2

Henrike Baum hat am 23.11.2026 drei Dateien angehängt, jeweils mit dem Text „Siehe angehängte Dateien“ (einmal als gelieferte Info, zweimal als Verbesserung):

| Eintrag | Datei | Befund | Was geändert |
|---|---|---|---|
| 23.11.2026, 14:05, Art „infos“ | `Verbesserungen/2026-11-23_1405_A004_Der_erste_Auftrag_in_fuenf_Teilen.pdf` | **Byte für Byte gleich** mit dem Aufgabenblatt `files/Person_1/02_Aufgaben/A004_Der_erste_Auftrag_in_fuenf_Teilen.pdf` (mit `cmp` geprüft). Keine neue Angabe. | keine inhaltliche Änderung nötig; das Blatt war schon Grundlage von v1/v2 |
| 23.11.2026, 14:07 | `…_1407_A002_Unsere_Firma_auf_einer_Seite.pdf` | gleich mit `files/0_Allgemein/02_Aufgaben/A002_Unsere_Firma_auf_einer_Seite.pdf` | als Hinweis verstanden, die offene Frage aus Kais Aufgabe A002 selbst abzuleiten: **neuer Abschnitt 1.0, Kandidat B** |
| 23.11.2026, 14:08 | `…_1408_A001_Projektmappe_fuer_die_eigene_Firma_anlegen.pdf` | gleich mit `files/0_Allgemein/02_Aufgaben/A001_Projektmappe_fuer_die_eigene_Firma_anlegen.pdf` | ebenso für Selims Aufgabe A001: **neuer Abschnitt 1.0, Kandidat A** |

Die gesuchte Info aus v2 („welche Frage Selim und Kai im Firmenbriefing offen gelassen haben“) steht in keiner der drei Dateien; es sind die Aufgabenblätter selbst. Statt weiter zu warten, leitet der Agent die offenen Fragen aus den Ergebnissen von A001 und A002 ab (dort sind die offenen Stellen als Abweichungslisten belegt). Die Frage selbst wählt Henrike; Selim und Kai können die Kandidaten bestätigen, das ist aber für das Ergebnis nicht nötig, weil das Blatt die eigene Frage ausdrücklich erlaubt („nehmen Sie eine davon, wenn sie zu Ihrer Aufgabe passt“) [A004_…pdf, S. 1–2, „Eingang aus Ihrer Gruppe“]. Status deshalb **„KI erledigt“** statt „Infos benötigt“.

**Geprüft in Runde 3:**

1. Alle drei Anhänge mit `cmp` gegen die Originale in `files/` verglichen: identisch.
2. Firmenbriefing, PDF-Seite 2 (Abschnitt 4, Chronik „02.11.2020 Bestellung Kai Landmann“), Seite 3 (Abschnitt 4, „Kai Landmann, Kaufmännischer Geschäftsführer, 01.11.2020 bis heute“) und Seite 8 (Abschnitt 10, „seit 01.11.2020“) in der Textfassung nachgelesen.
3. Firmenbriefing, PDF-Seite 1 (Abschnitt 1, „gegründet 2002“) und Seite 2 (Abschnitt 4, „2002: Gründung …“): kein Tag genannt; Eintragung „13.06.2002“ nur in der Chronik (S. 2).

## 1.0 Offene Fragen aus A001 und A002 (neu)

| Kandidat | aus | offene Stelle | Frage (Antwort ist ein Datum) | passt zu A004? |
|---|---|---|---|---|
| **A** | A001 (Selim) | Das Briefing nennt für Kai Landmann zwei verschiedene Tage [KI_Ergebnis_A001_v2.md, Abschnitt 1.3, Nr. 3] | **Seit wann ist Kai Landmann Geschäftsführer der Luftpfad Anlagentechnik GmbH?** | **gut:** Die Antwort steht im Briefing an drei Stellen mit zwei verschiedenen Tagen; man sieht sofort, ob eine KI den Widerspruch bemerkt. Schwäche: die Geschäftsführerliste auf S. 3 ist fast eine fertige Tabelle [A004_…pdf, S. 1, „So fangen Sie an“]. |
| **B** | A002 (Kai) | Den Gründungstag nennt nur der CAFM-Export von Raumlot, das Briefing nur das Jahr [KI_Ergebnis_A002_v3.md, Abschnitt 3, Nr. 2] | **An welchem Tag wurde die Luftpfad Anlagentechnik GmbH gegründet?** | **gut als Test auf Erfinden:** Das Briefing kennt keinen Tag. Richtig ist „2002, Tag steht nicht im Briefing“ (allenfalls Eintragung 13.06.2002). Schwäche: Die beste Antwort ist „nicht belegt“, kein Datum. |
| C | bisheriger Vorschlag | Kündigungsfrist VTR-1005 (Abschnitt 1.1) | Bis wann muss eine Kündigung … eingehen? | **am besten zum Blatt:** Datum, muss gerechnet werden, steht nirgends fertig [A004_…pdf, S. 1, Beispiel Stromvertrag]. |

**Vorschlag:** Kandidat C bleibt die Hauptfrage. Will Henrike eine Frage aus der Gruppe nehmen, dann Kandidat A. Belege für A:

| Stelle im Briefing | Wortlaut |
|---|---|
| S. 2, Abschnitt 4 (Chronik der Akte) | „02.11.2020 Bestellung Kai Landmann“ |
| S. 3, Abschnitt 4 („Geschäftsführung und Gesellschafter laut Register“) | „Kai Landmann, Kaufmännischer Geschäftsführer, 01.11.2020 bis heute“ |
| S. 8, Abschnitt 10 | „seit 01.11.2020“ |
| außerhalb des Briefings: 07.01.01.142, Chronologie Nr. 5 | „Eintragung vom 02.11.2020: Als Vertretungsberechtigter ist bestellt: Kai Landmann“ |

[Firmenbriefing, Seiten und Abschnitte wie genannt; 07.01.01.142, S. 1]

**Fassung 1 (Kandidat A):**

```
Seit wann ist Kai Landmann Geschäftsführer der Luftpfad Anlagentechnik GmbH?
```

**Fassung 2 (Kandidat A):**

```
ZIEL: Ich bin technische Geschäftsführerin der Luftpfad Anlagentechnik GmbH und stelle für Kantbogen eine Firmenseite zusammen. Ich brauche das Datum, seit dem Kai Landmann Geschäftsführer ist, mit Beleg.

KONTEXT: Anbei das Firmenbriefing der Luftpfad Anlagentechnik GmbH, Stand 18.11.2026.

AUFGABE: Suche im Briefing jede Stelle, die ein Datum zum Beginn von Kai Landmann als Geschäftsführer nennt. Gib das Datum an, dem du am meisten glaubst, und begründe das.

BEDINGUNGEN: Verwende nur das Briefing. Nenne zu jeder Stelle Seite und Abschnitt. Wenn zwei Stellen Verschiedenes sagen, nenne beide. Was du annimmst, markiere mit [Annahme].

FERTIG, WENN: (1) ein Datum genannt ist, (2) jede Briefingstelle mit einem Datum zu Kai Landmann mit Seite und Abschnitt aufgeführt ist, (3) ein Unterschied zwischen den Stellen genannt oder ausdrücklich ausgeschlossen ist, (4) die Wahl begründet ist.
```

**Referenz für den Vergleich:** Drei Stellen, zwei Tage (01.11.2020 zweimal, 02.11.2020 einmal) [Tabelle oben]. Das Register sagt 02.11.2020 [07.01.01.142, Chronologie Nr. 5]; das Briefing kennt das Register nicht als Anlage, eine KI mit nur dem Briefing kann es also nicht finden. Typische Fehler: nur 01.11.2020 nennen, weil es zweimal vorkommt; den Widerspruch übersehen; „laut Register“ auf S. 3 als Registerbeleg nehmen [Annahme].

Für **Kandidat B** gilt dasselbe Muster; Referenz: Briefing nur „2002“ [FB, S. 1, Abschnitt 1; S. 2, Abschnitt 4], Eintragung 13.06.2002 [FB, S. 2, Abschnitt 4, Chronik]; ein genannter Tag wie „01.01.2002“ stammt **nicht** aus dem Briefing [07.04.02.006; 07.04.02.055].

## Vorbemerkung: Was der Agent hier liefern kann und was nicht

Kern der Aufgabe ist, dass Henrike **selbst** zwei Fassungen in **zwei getrennten Chats** stellt und die beiden Antworten **unverändert** abgibt [A004_…pdf, S. 1, „So fangen Sie an“ und „Was Sie abgeben“]. Diese Antworten kann der Agent nicht erzeugen, ohne die Übung zu verfälschen. Er liefert deshalb: einen Vorschlag für die Frage, beide Fassungen fertig zum Einfügen, eine **belegte Referenzantwort** zum Vergleich und eine Prüfliste für das Fertig-wenn.

## 1 Ergebnis

### 1.1 Die Frage (Vorschlag)

> **Bis wann muss eine Kündigung des Wartungsvertrags VTR-1005 bei der anderen Seite eingehen, damit der Vertrag zum nächstmöglichen Termin endet, und welcher Termin ist das?**

Warum diese Frage passt: Die Antwort ist ein Datum, sie steht nicht als fertige Tabelle im Briefing, und das Briefing enthält die nötigen Angaben nur als Satz: „läuft seit 03.04.2018 und verlängert sich jedes Jahr um ein Jahr, wenn niemand mit drei Monaten Frist kündigt“ [Firmenbriefing, S. 14, Abschnitt 19, „Vertrag VTR-1005“]. Sie entspricht dem Beispiel im Blatt (Stromvertrag kündigen) [A004_…pdf, S. 1]. Sie berührt den großen Fall der Gruppe, den Vertrag ab 2028 [00_Start_Gruppe.md, „Ihr großer Fall“], und Kais Aufgabe A161 („Laufzeit“) [content/projekte.json, A161, Titel].

Alternativen aus der Gruppe: Kandidaten A und B in Abschnitt 1.0 [A004_…pdf, S. 1–2, „Eingang aus Ihrer Gruppe“].

### 1.2 Fassung 1 (ein Satz)

```
Bis wann muss eine Kündigung des Wartungsvertrags VTR-1005 bei der anderen Seite eingehen, damit der Vertrag zum nächstmöglichen Termin endet, und welcher Termin ist das?
```

(Mit angehängtem Firmenbriefing, sonst nichts.)

### 1.3 Fassung 2 (fünf Teile)

```
ZIEL: Ich bin technische Geschäftsführerin der Luftpfad Anlagentechnik GmbH und muss wissen, bis wann wir oder Kantbogen den Wartungsvertrag VTR-1005 spätestens kündigen müssten, damit er zum nächstmöglichen Termin endet. Davon hängt ab, wie viel Zeit wir für die Verhandlung über Preis und Laufzeit mit Kantbogen haben.

KONTEXT: Anbei das Firmenbriefing der Luftpfad Anlagentechnik GmbH, Stand 18.11.2026. Heute ist der 19.11.2026. Der Vertrag ist ein Wartungsvertrag für das Haus am Bogenfeld 12 zwischen Kantbogen Bestand GmbH und Luftpfad.

AUFGABE: Ermittle aus dem Briefing den Vertragsbeginn, die Verlängerungsregel und die Kündigungsfrist. Berechne daraus das Ende der laufenden Vertragsperiode und den letzten Tag, an dem eine Kündigung zugehen muss. Zeige den Rechenweg in drei bis fünf Schritten.

BEDINGUNGEN: Verwende nur das Briefing. Nenne zu jeder Angabe den Abschnitt und die Seite. Wenn das Briefing etwas nicht sagt (zum Beispiel, ob es eine längere Erstlaufzeit gab oder wie die Frist zu rechnen ist), schreibe das als Annahme und markiere es mit [Annahme]. Erfinde keine Vertragsstellen.

FERTIG, WENN: (1) ein Datum für das Ende der laufenden Periode genannt ist, (2) ein Datum für den spätesten Zugang der Kündigung genannt ist, (3) zu beiden die Briefingstelle mit Abschnitt angegeben ist, (4) jede getroffene Annahme (Erstlaufzeit, Fristberechnung, Zugang) ausdrücklich genannt ist.
```

### 1.4 Referenzantwort zum Vergleich (nicht an die KI geben)

| Schritt | Aussage | Quelle |
|---|---|---|
| 1 | Vertragsbeginn 03.04.2018 | Firmenbriefing, S. 14, Abschnitt 19; S. 3, Abschnitt 5; S. 4, Abschnitt 7. Zweite Stelle außerhalb des Briefings: Vertrag 04.03.01.018, S. 2, § 11 |
| 2 | Erstlaufzeit **drei Jahre**, danach Verlängerung um je ein Jahr | **nur im Vertrag**: 04.03.01.018, S. 2, § 11 („läuft drei Jahre. Er verlängert sich jeweils um ein Jahr …“). Das Briefing nennt die drei Jahre nicht [Firmenbriefing, S. 14, Abschnitt 19] |
| 3 | Kündigungsfrist drei Monate zum Ende der Laufzeit, durch Einschreiben oder Textform | Vertrag, S. 2, § 11; Firmenbriefing, S. 14 („mit drei Monaten Frist“, ohne Form) |
| 4 | Perioden: 03.04.2018–02.04.2021, dann jährlich; laufende Periode **03.04.2026–02.04.2027** | Rechnung, siehe CSV [Annahme: Periode endet am Tag vor dem Jahrestag des Beginns] |
| 5 | Kündigung muss spätestens am **02.01.2027** zugehen, damit der Vertrag am **02.04.2027** endet; sonst läuft er bis 02.04.2028 | Rechnung, siehe CSV [Annahme: drei Kalendermonate rückwärts vom Periodenende] |

Hinweise zur Referenz:

- Wer nur das Briefing nimmt und die Erstlaufzeit von drei Jahren nicht kennt, kommt hier **zufällig zum selben Datum**, weil auch bei jährlicher Verlängerung ab 2019 der Jahrestag gleich bleibt [Rechnung, Annahme]. Eine KI-Antwort mit „02.01.2027“ ist also kein Beweis, dass sie die Erstlaufzeit kennt.
- Der 02.01.2027 ist ein **Samstag** [Rechnung mit Python]. Ob sich die Frist dadurch verschiebt, ist eine Rechtsfrage; vorsichtshalber früher zustellen. Das ist keine Rechtsberatung [Annahme].
- Typische Fehler, auf die beim Vergleich zu achten ist: Ende „03.04.“ statt „02.04.“; Frist „drei Monate“ als 90 Tage; Kündigung „zum 31.12.“ wie beim Stromvertrag-Beispiel; Erfinden einer Kündigungsform [Annahme].

### 1.5 Prüfliste Fertig-wenn (für das Lernprotokoll)

| Punkt | erfüllt / nicht erfüllt | Stelle der Prüfung |
|---|---|---|
| (1) Datum Periodenende | [nach Antwort eintragen] | Firmenbriefing, S. 14, Abschnitt 19; Vertrag, S. 2, § 11 |
| (2) Datum spätester Zugang | [eintragen] | ebd.; CSV |
| (3) Briefingstelle mit Abschnitt | [eintragen] | prüfen, ob die KI „Abschnitt 19“ nennt |
| (4) Annahmen genannt | [eintragen] | Erstlaufzeit, Fristberechnung, Zugang |

### 1.6 Gerüst für die fünf Sätze Vergleich

Der Vergleich muss Unterschiede an **Zahlen oder Aussagen** nennen, nicht an Länge oder Stil [A004_…pdf, S. 2, Punkt 6]. Vorschlag für die Reihenfolge: (1) Enddatum Fassung 1 vs. Fassung 2; (2) Zugangsdatum; (3) genannte Fundstellen; (4) Annahmen (ja/nein, welche); (5) Abweichung vom Briefing oder vom Vertrag (z. B. erfundene Klausel).

## 2 Was die Gruppe selbst entscheiden oder liefern muss

1. **Frage festlegen**: Kandidat C (Kündigung VTR-1005) oder A/B aus A001/A002 (Abschnitt 1.0); wer will, lässt Selim und Kai die Kandidaten kurz bestätigen [A004_…pdf, S. 1–2].
2. **Beide Chats führen** und die Antworten **unverändert** sichern, Werkzeug und Modell im Lernprotokoll notieren [A004_…pdf, S. 1; 00_Start_Gruppe.md, „Ladeplan“].
3. **Vergleich und Urteil** (fünf Sätze) sind „Behalten“ [A004_…pdf, S. 1, „Einsatz von KI“].
4. **Abweichungsliste**: zu jeder Zahl und Aussage beider Antworten der Abschnitt im Briefing [A004_…pdf, S. 1].
5. **Bildschirmfoto** der Briefingstelle (Vorschlag: Firmenbriefing S. 14, Abschnitt 19, Absatz „Vertrag VTR-1005“).
6. Abstimmung mit Kai (A161), damit dort dasselbe Kündigungsdatum steht.

## 3 Geprüft (Runde 2, weiterhin gültig; Prüfungen der Runde 3 oben)

1. **Vertragsbeginn und Laufzeitregel**: Vertragsseite 2 (04.03.01.018) als Bild gerendert und § 11 gelesen: „beginnt am 03.04.2018 und läuft drei Jahre … verlängert sich jeweils um ein Jahr … Frist von drei Monaten zum Ende der Laufzeit“.
2. **Briefingwortlaut**: Firmenbriefing, PDF-Seite 14, Abschnitt 19 nachgelesen; die drei Jahre Erstlaufzeit fehlen dort tatsächlich.
3. **Daten der Perioden und Wochentag**: mit Python (dateutil.relativedelta) berechnet, Ergebnis in der CSV; 02.01.2027 = Samstag.
