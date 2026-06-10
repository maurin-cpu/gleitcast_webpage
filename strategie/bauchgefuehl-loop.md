# Bauchgefühl-Loop — Konzept

**Stand:** 2026-05-21
**Status:** Konzept — noch nicht entschieden
**Zweck:** Den Cast vom One-Way-Newsletter in einen Lern-Loop verwandeln, der den Piloten messbar zum besseren Wetter-Leser macht — und Wingcast in eine Kategorie hebt, die kein Wettbewerber besetzen kann.

---

## 1. Ausgangslage

Wir können die Forecast-Schlacht nicht gewinnen. ICON-CH1, ICON-D2, ECMWF sind Commodity. Burnair, Paraglidable, XC-Therm nutzen ähnliche Quellen. **Wer auf Datenqualität wettet, verliert** — gegen 8 Jahre Marktpräsenz, gegen Premium-Preise, gegen lizenzierte KK7-Hotspots.

Was wir besitzen, das andere nicht haben: **den persönlichen Datenpunkt des Piloten — was er heute beim Cast vermutet hat, wie er entschieden hat, wie es wirklich war.** Niemand sammelt das. Niemand spiegelt es zurück.

---

## 2. Der Pain, den wir adressieren

Aus `personas.md` und `customer-research-synthesis.md` (JTBD 5):

> **„Ich fliege seit 3 Jahren und weiss nicht, ob mein Wetter-Bauchgefühl besser wird."**

Pilot:innen investieren 3–5 Jahre in Wetter-Lesen. Sie sehen *nie* eine Fortschrittskurve. Gym-Apps zeigen *„+20 kg Bankdrücken in 6 Monaten"*. Es gibt **kein Äquivalent für Pilot-Wetter-Können.**

Aktueller Workaround: Drive nach Hause, Debrief im Auto, am Mittwoch vergessen. Im Jahr 4 fliegt der Pilot wetter-mässig wie im Jahr 2.

---

## 3. Die Mechanik

**Drei Buttons. Ein Spiegel. Mehr nicht.**

### Schritt 1 — Frage am Ende der Cast-Mail

Unter dem Cast-Block, getrennt durch eine Linie, ein Reflexions-Block für **gestern**:

> *Wie war's bei dir gestern?*
> *NIESEN — Cast: 🟣 Legendär*
> [ ✓ Wie erwartet ]  [ ≠ War anders ]  [ – Nicht geflogen ]

Ein Klick. Kein Login. Kein Logbuch. Magic-Link, wie wir es heute schon für Subscriber haben.

### Schritt 2 — Bestätigung

Nach dem Klick eine schlichte Seite: *„Danke, Niesen Mi gespeichert."* Optional ein 1-Tag-Chip zur Verfeinerung (*Thermik schwächer · Wind drehte · Föhn-Anrenner · andere*).

### Schritt 3 — Der Spiegel

Nach 8 Antworten kippt es. In der nächsten Cast-Mail ein Banner:

> *Deine 8. Antwort — Spiegel ist bereit.*

Click führt zu einer Seite mit **drei Sätzen** über den Piloten — und einer Visualisierung, wo die Abweichung liegt.

---

## 4. Was der Spiegel sagt

Nicht Achievements. Nicht Statistik-Dashboards. **Drei Sätze, kuratiert, pro User anders.**

| Beobachtung | Was der Spiegel sagt |
|---|---|
| Mittlerer Bias: 22 % vorsichtiger als Cast | *„Du fliegst 22 % vorsichtiger als der Cast. Das hat dich 5 Tage gekostet — und 1 windigen Nachmittag erspart."* |
| 3× *„Thermik schwächer"* nach Kaltfront | *„Schwachstelle: Du überschätzt Thermik nach Kaltfronten. Cast überschätzt sie auch — vielleicht spüren wir beide das gleiche."* |
| 5× *„wie erwartet"* am Niesen | *„Verlässlich: An Niesen liest du das Wetter identisch zum Cast. Vertrau dem Rating dort."* |

Das ist die Aussage. Nichts darüber, nichts darunter. **Wenig Worte, klare Spiegelung.**

---

## 5. Visualisierung — Delta sichtbar machen

Zwei nebeneinanderstehende Werte (*Cast: Violet / Realität: Grün*) zwingen das Hirn zu rechnen. Falsche Darstellung. Wir zeigen immer den **Delta selbst**, mit den Quellwerten als Annotation.

### Pattern A — pro Tag, pro Spot *(in der Cast-Mail)*

Die fünf Rating-Stufen als horizontale Skala. Zwei Punkte, durch eine Linie verbunden. **Die Linie ist der Delta** — Länge = Magnitude, Richtung = Über-/Unterschätzung. Perfekt getroffen = ein einziger Punkt.

### Pattern B — Saison-Spiegel *(nach 8 Antworten)*

Eine Divergence-Bar pro Spot, mit Null-Linie in der Mitte. Bar links = Cast überschätzt, Bar rechts = Cast unterschätzt. Länge = mittlerer Delta. Hirn liest in 2 Sekunden:

- Wo ist Wingcast für *dich* zuverlässig? (kurze Bars)
- Wo musst du dem Cast misstrauen? (lange Bars)
- In welche Richtung? (links/rechts)

### Pattern C — Zeitverlauf pro Spot *(Drill-Down)*

Die letzten 10–30 Cast-Tage als Punkte-Strip. Voll-Punkt = übereinstimmend. Halbmond links = Cast überschätzte. Halbmond rechts = Cast unterschätzte. Auge sucht Muster über Zeit.

**Farb-System:** Alle drei Patterns nutzen die existierende v3.2-Palette aus `docs/RATING_FARBKONZEPT.md` — Konsistenz mit Karte, Pillen, Meteogramm.

---

## 6. Gamification (optional, Phase 4)

**Wir gamifizieren das Lesen, nie das Fliegen.** Kein Streak, kein Flight-Count, kein Peer-Leaderboard — beides würde Druck zu fliegen erzeugen und den Decision-Support-Anspruch zerlegen.

**Was wir bauen:**

- **Wetter-Lese-Score** (0–100): steigt bei Übereinstimmung *und* bei korrektem Widerspruch. Misst Können, nicht Aktivität. Trend-Pfeil sichtbar (*„+5 in 4 Wochen"*). Kein Vergleich gegen andere.
- **Blind-Spots als aufgedeckte Erkenntnisse**: *Föhn-Erkenner · Kaltfront-Realist · Tessin-Anfahrt-Knacker*. Nicht *„Achievement Unlocked"* sondern *„du hast was verstanden"*. Strava-Logik umgedreht — Belohnung für Selbsterkenntnis, nicht für Skill-Display.
- **Synoptik-Tiefe als Unlock**: Je mehr Reflexionen, desto tiefer der Wetterlage-Block oben in der Cast-Mail. Level 1 = allgemein. Level 3 = personalisiert (*„Letzte Woche Föhn-Anrenner Niesen — diese Woche ähnliche Lage Do"*).

Belohnung ist Wissen, nicht Bling.

---

## 7. Warum das strategisch trägt

| Kriterium | Bauchgefühl-Loop |
|---|---|
| **Adressiert echten Pain?** | Ja — JTBD 5, niemand bedient ihn heute |
| **Braucht neuen Touchpoint?** | Nein — sitzt in der Mail, die ohnehin täglich geht |
| **Wird mit Zeit wertvoller?** | Ja — Klick 1 ist banal, Klick 20 ist süchtig |
| **Kopierbar durch Wettbewerber?** | Nein — braucht den persönlichen Datensatz, den nur wir sammeln |
| **Konsistent mit „Decision Support, nicht Decision Maker"?** | Ja — wir entscheiden nichts, wir spiegeln |
| **Macht Marketing-Story?** | *„Burnair zeigt dir das Wetter. Wingcast macht dich zum Piloten, der das Wetter selbst liest."* |

---

## 8. Build-Phasen (grob)

| Phase | Was | Ungefährer Aufwand | Wann sinnvoll |
|---|---|---|---|
| 1 | Drei-Button-Antwort am Ende der Cast-Mail + simple Bestätigungsseite | ~5 Tage | Sofort, niedriges Risiko |
| 2 | Spiegel-Seite (Pattern B) + Drei-Sätze-Generator | ~1 Woche | Nach 4 Wochen Phase-1-Daten |
| 3 | Zeitverlauf-Strip (Pattern C) | ~3 Tage | Optional, für tiefe Nutzer |
| 4 | Wetter-Lese-Score + Blind-Spots + Synoptik-Unlock | ~2 Wochen | Erst wenn Mechanik 1+2 zieht |

**Total: ~3–4 Wochen Engineering** über mehrere Monate verteilt, je nach Adoption.

---

## 9. Risiken

| Risiko | Mitigation |
|---|---|
| Klick-Rate zu niedrig (< 10 %) | Mechanik nach 4 Wochen reviewen; alternative Trigger (Push, separate Mail) testen |
| Spiegel-Aussagen wirken generisch | Templates kuratiert formulieren, mit Pilot:innen aus Beta-Kohorte gegenlesen, nicht via LLM ausspielen in V1 |
| Falsche Sicherheit durch Score | WLS-Disclaimer prominent: *„Score zeigt Übereinstimmung mit Cast — nicht ob du sicher fliegst"* |
| Datenschutz-Bedenken | Aggregiert anzeigen, keine Roh-Klicks im Admin-View, keine Drittweitergabe |
| Gamification kippt zu Game | Streng am Grundsatz festhalten: kein Streak, kein Peer-Vergleich, kein Confetti |

---

## 10. Kill-Switch

Wenn nach Phase 1+2 (~10 Wochen Live) die Cast-Mail-Open-Rate **sinkt**, Loop abschalten. Annahme war: zusätzlicher Wert steigert Engagement. Wenn falsifiziert — sofort raus, keine sunk-cost-Verteidigung.

---

## 11. Was als nächstes entschieden werden müsste

1. Bauen wir Phase 1 zuerst, oder warten wir auf einen anderen Hebel?
2. Welche 5–7 1-Tag-Chips lassen wir in der Verfeinerungs-Frage zu?
3. Im allerersten Cast nach Anmeldung — schon Feedback-Block oder erst ab Mail 2?
4. Admin-Sicht im `/admin/feedback` aggregiert oder per User?
5. Welche Region/Spot-Auswahl, wenn der User keine Heimspots gesetzt hat?

Keine dieser Fragen ist heute zu lösen. Sie gehören in die Phase-1-Planung, falls wir bauen.

---

## 12. Quellen

- `analysen/customer-research-synthesis.md` — JTBD 5 *„Hilf mir besser werden"*, Trust-Anforderungen Track Record
- `analysen/paragliding-pilot-pain-points-synthesis.md` — Pain #9 *„I want to understand, not just follow"*
- `strategie/value-proposition.md` — USP 2 (Klartext-Erklärung), Tabu *„Decision Maker"*
- `strategie/personas.md` — Lukas (Lern-Identität), Sarah (Zeit-Pain), Marco (Track-Record-Anforderung)
- `docs/RATING_FARBKONZEPT.md` (flychat) — Farb-Palette autoritativ
