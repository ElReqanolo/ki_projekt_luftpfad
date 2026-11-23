# KI-Ergebnis A004: Der erste Auftrag in fünf Teilen

- **Projekt:** A004, Kette „Einstieg“
- **Runde:** 2
- **Datum:** 23.11.2026 (Runde 1 vom 19.11.2026)
- **Federführend:** Henrike Baum (Person 1) [A004_Der_erste_Auftrag_in_fuenf_Teilen.pdf, S. 1, Kopf]
- **Rechentabelle:** `KI_Ergebnis_A004_v2.csv` (Laufzeitabschnitte des Vertrags, mit Code berechnet)

## Änderungen gegenüber v1

Runde 2 vom 23.11.2026: Alle Projekte wurden auf Wunsch der Gruppe unabhängig vom Status erneut geprüft. Feedback der Gruppe lag nicht vor.

- **Lage seit dem 23.11.2026:** Laut dem neuen Blatt „Bis zum 2.12.“ ruhen die Aufgabenblätter der Figuren bis auf Weiteres. Abgabetage, Stundenangaben und Lieferungen an andere Firmen gelten nicht, in 90_Uebergaben wird nichts abgelegt, und keine Gruppe wartet auf Post [00_Bis_zum_2_12.pdf, „Was bis auf Weiteres nicht gilt“]. Fristen und Übergabeordner in dieser Datei stehen so im Aufgabenblatt und gelten erst wieder, wenn der Dozent es sagt [ebd., letzter Absatz].
- Inhalt unverändert; die Aufgabe hat keine Übergaben an andere Gruppen.
- **Status „Infos benötigt“:** Dem Agenten fehlen Infos, die jemand liefern kann: Welche Frage zum Firmenbriefing in A001 bzw. A002 offen geblieben ist (eine davon kann die Frage für A004 werden) (von Selim Ahrens, Kai Landmann). Bitte im Verbesserungsfeld des Projekts eintragen oder als Datei anhängen; der Agent arbeitet sie beim nächsten Lauf ein.

**Geprüft in Runde 2:**

1. 02.01.2027 ist ein Samstag (Python).
2. Laufzeitregel in der Textfassung von 04.03.01.018, S. 2, § 11 gefunden.
3. Firmenbriefing Abschnitt 19 „Vertrag VTR-1005“ nachgelesen; die drei Jahre Erstlaufzeit fehlen dort weiterhin.

## Vorbemerkung: Was der Agent hier liefern kann und was nicht

Kern der Aufgabe ist, dass Henrike **selbst** zwei Fassungen in **zwei getrennten Chats** stellt und die beiden Antworten **unverändert** abgibt [A004_…pdf, S. 1, „So fangen Sie an“ und „Was Sie abgeben“]. Diese Antworten kann der Agent nicht erzeugen, ohne die Übung zu verfälschen. Er liefert deshalb: einen Vorschlag für die Frage, beide Fassungen fertig zum Einfügen, eine **belegte Referenzantwort** zum Vergleich und eine Prüfliste für das Fertig-wenn.

## 1 Ergebnis

### 1.1 Die Frage (Vorschlag)

> **Bis wann muss eine Kündigung des Wartungsvertrags VTR-1005 bei der anderen Seite eingehen, damit der Vertrag zum nächstmöglichen Termin endet, und welcher Termin ist das?**

Warum diese Frage passt: Die Antwort ist ein Datum, sie steht nicht als fertige Tabelle im Briefing, und das Briefing enthält die nötigen Angaben nur als Satz: „läuft seit 03.04.2018 und verlängert sich jedes Jahr um ein Jahr, wenn niemand mit drei Monaten Frist kündigt“ [Firmenbriefing, S. 14, Abschnitt 19, „Vertrag VTR-1005“]. Sie entspricht dem Beispiel im Blatt (Stromvertrag kündigen) [A004_…pdf, S. 1]. Sie berührt den großen Fall der Gruppe, den Vertrag ab 2028 [00_Start_Gruppe.md, „Ihr großer Fall“], und Kais Aufgabe A161 („Laufzeit“) [content/projekte.json, A161, Titel].

Alternative, falls Selim oder Kai eine offene Frage liefern [A004_…pdf, S. 1–2, „Eingang aus Ihrer Gruppe“]: die nehmen; diese Datei dient dann nur als Muster.

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

1. **Frage festlegen** (diese oder eine von Selim/Kai) [A004_…pdf, S. 1–2].
2. **Beide Chats führen** und die Antworten **unverändert** sichern, Werkzeug und Modell im Lernprotokoll notieren [A004_…pdf, S. 1; 00_Start_Gruppe.md, „Ladeplan“].
3. **Vergleich und Urteil** (fünf Sätze) sind „Behalten“ [A004_…pdf, S. 1, „Einsatz von KI“].
4. **Abweichungsliste**: zu jeder Zahl und Aussage beider Antworten der Abschnitt im Briefing [A004_…pdf, S. 1].
5. **Bildschirmfoto** der Briefingstelle (Vorschlag: Firmenbriefing S. 14, Abschnitt 19, Absatz „Vertrag VTR-1005“).
6. Abstimmung mit Kai (A161), damit dort dasselbe Kündigungsdatum steht.

## 3 Geprüft

1. **Vertragsbeginn und Laufzeitregel**: Vertragsseite 2 (04.03.01.018) als Bild gerendert und § 11 gelesen: „beginnt am 03.04.2018 und läuft drei Jahre … verlängert sich jeweils um ein Jahr … Frist von drei Monaten zum Ende der Laufzeit“.
2. **Briefingwortlaut**: Firmenbriefing, PDF-Seite 14, Abschnitt 19 nachgelesen; die drei Jahre Erstlaufzeit fehlen dort tatsächlich.
3. **Daten der Perioden und Wochentag**: mit Python (dateutil.relativedelta) berechnet, Ergebnis in der CSV; 02.01.2027 = Samstag.
