---
titel: "Böenfront vom 30. Juli 2026: was das Modell sagte — und was gemessen wurde"
slug: boeenfront
ziel_url: /wetterkunde/boeenfront
ziel_keyword: "böenfront gleitschirm"
neben_keywords:
  - "wie hoch reicht eine böenfront"
  - "böenfront erkennen"
  - "gewitterböen gleitschirm"
  - "downburst gleitschirm"
  - "böenwalze"
typ: pillar
hub: /wetterkunde
sprache: de-CH
status: published
veroeffentlicht: 2026-08-03
autor: "Maurin (Founder & Pilot, Wingcast)"
stand: 2026-08-03
meta_title: "Böenfront: wie hoch sie reicht – Messung gegen Prognose | Wingcast"
meta_description: "Am 30. Juli 2026 lief eine trockene Böenfront über die Schweiz. Wir haben 139 SwissMetNet-Stationen ausgewertet und der ICON-CH1-Prognose gegenübergestellt: Oberhalb von rund 2'000 m war die Front kaum noch nachweisbar — deutlich flacher, als das Modell sie zeigte."
schema:
  - Article
  - FAQPage
  - BreadcrumbList
video: GustFrontReel
daten:
  - social/analytics/2026-07-30_boeenfront_swissmetnet.json   # Messwerte
  - social/analytics/2026-07-30_boeenfront_icon-ch1.json      # Prognose
skripte:
  - social/analytics/messwerte_30juli_smn.py
  - social/analytics/messwerte_auswertung.py
  - social/analytics/hoehe_boeenfront.py
---

# Böenfront vom 30. Juli 2026: was das Modell sagte — und was gemessen wurde

> **TL;DR** — Am 30. Juli 2026 zog eine trockene Böenfront über die Schweiz: gemessene Böen bis **121 km/h**, während die Luftmasse laut Prognose zu trocken für die warnende Böenwalze war. Wir haben zwei Datensätze desselben Tages gegeneinandergestellt — die **ICON-CH1-Prognose** für 494 Startplätze und die **gemessenen Zehnminutenwerte von 139 SwissMetNet-Stationen**. Beide zeigen dasselbe Muster: Der Effekt nimmt mit der Höhe stark ab. Aber sie sind sich uneinig, **wo er aufhört**. Die Prognose sah die Signatur noch auf 3'169 m; gemessen wurde sie mit unseren Standardkriterien an **keiner der 16 Stationen über 2'000 m**. Die höchste Station mit vollständiger Front-Signatur war Grimsel Hospiz auf **1'980 m**. Das ist das Ergebnis für **diesen einen Tag** — eine allgemeine Aussage über Böenfronten lässt sich daraus nicht ableiten. Für die Flugplanung heisst es zweierlei: An diesem Tag blieb die Front unten, und **Modell-Böenwerte in der Höhe wollen vorsichtig gelesen werden**.

Über Böenfronten wird viel geschrieben. Was fehlt, sind Zahlen zu einem konkreten Tag. Dieser Artikel nimmt ein reales Ereignis — den **30. Juli 2026 in der Schweiz** — und wertet es zweimal aus: einmal aus der Prognose, mit der wir täglich arbeiten, und einmal aus echten Stationsmessungen. Die beiden Auswertungen sagen nicht dasselbe, und genau das ist der interessante Teil.

---

## Was eine Böenfront ist

Der Deutsche Wetterdienst führt die Böenfront in seinem Wetterlexikon als „linienhaftes mesoskaliges konvektives System" — übersetzt: ein **Band aus Gewittern oder Schauern, einige zehn bis einige hundert Kilometer lang** *(das meint „mesoskalig"; „konvektiv" heisst: von aufsteigender Luft angetrieben)*. Woran man den Durchgang erkennt, beschreibt das Lexikon mit vier Merkmalen [2]:

- Der **Wind springt um** — um bis zu 180 Grad, er kann danach also aus der Gegenrichtung kommen.
- Der **Luftdruck steigt an**, um 3 bis 5 Hektopascal — das ist die Einheit auf dem Barometer; dahinter steckt die schwerere Kaltluft, die mehr auf den Boden drückt.
- Die **Temperatur fällt**, um 5 bis 10 Grad.
- Der Wind erreicht bis zu **Sturm- oder Orkanstärke** — ab etwa 75 beziehungsweise 118 km/h.

Ausdrücklich hält das Lexikon fest, dass der Begriff auch auf Kaltfronten mit starken Böen **ohne Gewitter** angewandt wird [2].

Diese drei Merkmale — Windsprung, Druckanstieg, Temperaturrückgang — sind auch das Nachweiskriterium, mit dem wir weiter unten arbeiten. Wir setzen die Schwellen allerdings **deutlich tiefer** als die DWD-Richtwerte, um auch schwächere Durchgänge zu erfassen. Das Lexikon deckt mit dem Begriff zwei Erscheinungen ab: das ganze Gewittersystem — und den reinen Böen-Durchgang ohne Gewitter. Um die zweite geht es in diesem Artikel.

Für Pilotinnen und Piloten lässt sich die Entstehung in fünf Schritten erzählen:

1. **Es gewittert — irgendwo.** Meist weit weg von dir, oft ausserhalb dessen, was du vom Startplatz aus überhaupt siehst.
2. **Die fallende Luft wird kalt.** Aus dem Gewitter fällt Niederschlag nach unten und zieht Luft mit sich — diesen Abwind nennt die Fachsprache *Downdraft*. Unterwegs verdunstet ein Teil der Tropfen und die Eiskörner schmelzen. Beides braucht Wärme, und die holt sich die Luft aus sich selbst: Sie kühlt ab. Beim DWD steht das so: „Durch Verdunsten von Wassertropfen sowie durch Schmelzen und Sublimieren von Eispartikeln wird die Luft im Downdraft stark abgekühlt" [1]. *(Sublimieren heisst: Eis wird direkt zu Wasserdampf, ohne vorher zu schmelzen.)* Je trockener die Luft ringsum, desto mehr verdunstet — und desto kräftiger fällt der Abwind: Dann können „durch Verdunstungsprozesse in der trockenen Luftmasse die Fallwinde im Bereich eines Gewitters deutlich beschleunigt werden" [4].
3. **Am Boden breitet sie sich flach aus.** Kalte Luft ist schwerer als warme, sie fällt also immer schneller — bis sie unten aufsetzt und nicht weiter kann. Dann strömt sie seitwärts weg, ähnlich wie Wasser, das man auf den Tisch kippt: „Da kalte Luft schwerer ist als warme Luft, wird der Downdraft auf seinem Weg nach unten beschleunigt, bis die Luft am Boden horizontal ausströmt" [1]. Was sich unten sammelt, ist ein flacher See aus kalter Luft — im Fachjargon der *Kältepool*.
4. **Der Kaltluftsee läuft dem Gewitter davon.** Solange sich der Wind mit der Höhe stark genug ändert — Fachwort: Windscherung —, bleibt der See unter dem Gewitter liegen und beides zieht gemeinsam weiter. Wird der See aber zu gross, schiebt er sich vorne unter die warme Luft hinaus, und dem Gewitter geht die warme Zufuhr aus: „fliesst der Kältepool zunehmend in den vorderseitigen Warmluftbereich und die Squall-Line befindet sich im Auflösestadium" [1] *(Squall-Line = die Gewitterlinie)*. Die Vorderkante der Kaltluft läuft weiter, die Gewitter bleiben zurück.
5. **Was bei dir ankommt.** Wo diese Vorderkante schliesslich durchzieht, ist vom Gewitter, das sie erzeugt hat, nichts mehr dabei — es kommt nur noch schnell bewegte Luft an. *(So beschreibt es der DWD [1]. Unser gemessener Durchgang weiter unten passt zu diesem Bild, beweist die Herkunft aber nicht — siehe Grenzen.)*

<figure class="fig-wide">
  <p class="fig-kicker">Querschnitt</p>
  <p class="fig-titel">Vom Gewitter zur abgelösten Kaltluft</p>
  <img src="/wetterkunde/boeenfront-querschnitt.svg" alt="Querschnitt: links ein Gewitter mit Amboss, darunter verdunstender Regen, am Boden eine flache Kaltluftschicht, die nach rechts wegläuft und dort als Böen ankommt." width="1920" height="720" loading="lazy" decoding="async">
  <figcaption>Die Nummern entsprechen den fünf Schritten oben. Schematisch, nicht massstabsgetreu.</figcaption>
</figure>

### Wie stark war dieser Fall im Vergleich zum Lehrbuch?

Der DWD nennt für den Durchgang einer Böenfront einen Temperaturrückgang von „meist innerhalb weniger Minuten um 5 bis 10 Grad oder mehr" [1] und im Wetterlexikon 5 bis 10 Grad zusammen mit 3 bis 5 Hektopascal Druckanstieg [2].

**Unser Fall blieb darunter.** An den SwissMetNet-Stationen lag der stärkste Temperaturrückgang innerhalb einer halben Stunde im Median bei **3,2 Kelvin**; nur 8 von 146 Stationen erreichten 5 Kelvin oder mehr. Über den ganzen Abend gerechnet war der Luftmassenwechsel dagegen deutlich: vom Nachmittagsmaximum zum Abendminimum im Median **13,5 Kelvin**, im stärksten Fall 19,1 Kelvin.

Die Front war beim Durchgang also **thermisch schwächer als der Lehrbuchfall**, die Luftmasse dahinter aber klar kälter. Das ist auch der Grund, warum wir für den Nachweis tiefere Schwellen ansetzen als die DWD-Richtwerte — mit 5 Kelvin als Kriterium hätten wir an diesem Tag fast nichts gefunden.

### Warum sieht man manche Böenfronten und andere nicht?

An der Vorderkante schiebt sich die ausströmende Kaltluft unter die warme Luft davor und hebt sie an. Ist diese Luft feucht genug, kondensiert der Wasserdampf beim Aufsteigen — und man sieht die **Böenwalze**: eine dunkle, walzenförmige Wolke, die vor dem Gewitter herrollt. Der DWD beschreibt ihre Entstehung so: Wo der einströmende Aufwind und der abgekühlte Abwind aufeinandertreffen, entsteht eine horizontale Rotation, und „da der Wasserdampf des Aufwindstroms dabei kondensiert entsteht die walzenförmige Wolke" [3]. Sie ist das klassische Warnzeichen — man sieht die Front kommen, bevor sie da ist.

Trockene Luft verändert daran zwei Dinge, und beide wirken in dieselbe Richtung:

**Die Front wird stärker.** Je trockener die Luft, desto mehr Niederschlag verdunstet auf dem Weg nach unten und desto kälter und schwerer wird der Abwind. Der DWD nennt genau das als Grund dafür, dass „durch Verdunstungsprozesse in der trockenen Luftmasse die Fallwinde im Bereich eines Gewitters deutlich beschleunigt werden können" [4].

**Die Front wird unsichtbar.** Die Walze entsteht ausschliesslich durch Kondensation. Fehlt die Feuchte, kondensiert nichts — dann bildet sich keine Wolke, obwohl die Front darunter unverändert vorhanden ist.

Damit nimmt dieselbe Eigenschaft der Luft, die die Front härter macht, ihr zugleich das sichtbare Warnzeichen. Das Wetterlexikon hält fest, dass Böenwalzen „nicht immer anzutreffen" sind [3] — ohne die Trockenheit als Grund zu nennen.

---

## Der 30. Juli 2026

Eine Ereignis-Analyse, die an diesem Abend in Pilotenkreisen zirkulierte, führt den Schweizer Abendwind auf den Kaltluftausfluss kräftiger Gewitter über Frankreich zurück. Das ist eine plausible Lesart, und sie passt zur Mechanik — **belegen können wir sie mit unseren Daten nicht.** Wir sehen die Front über die Schweiz ziehen, nicht ihren Ursprung. Was dieser Artikel zeigt, ist der **Durchgang** und seine Höhenabhängigkeit; woher die Welle kam, ist eine Zuschreibung, die andere Daten bräuchte.

Die Luftmasse, in der die Front lief, war trocken. Zur Stunde der stärksten Böen lag die **tiefe Bewölkung im Median bei 0 %** — an 308 von 494 Startplätzen war sie exakt null (Prognosewerte). Für eine Böenwalze fehlte laut Modell die Feuchte.

Eine Ehrlichkeit dazu: „blauer Himmel" wäre falsch. Die Gesamtbewölkung lag im Median bei rund 87 % — hohe Cirren. Korrekt ist: **auf Böenfront-Höhe war nichts zu sehen.**

### Wie schnell steigt der Wind bei einer Böenfront?

Hier trennen sich Prognose und Messung zum ersten Mal.

**In der Prognose** sprang der Wind zwischen zwei Stundenwerten: am Startplatz Euthal (946 m) von 8 km/h um 17 Uhr auf 80 km/h um 18 Uhr. 25 der 494 Startplätze zeigten denselben Sprung innerhalb einer Stunde, 128 legten um mehr als 40 km/h zu.

<figure class="fig-wide">
  <p class="fig-kicker">Prognose ICON-CH1 · Startplatz Euthal · 946 m</p>
  <p class="fig-titel">Von 8 auf 80 km/h in einer Stunde</p>
  <img src="/wetterkunde/boeenfront-euthal.svg" alt="Windkurve Euthal am 30. Juli 2026: den ganzen Tag unter 26 km/h, um 17 Uhr 8 km/h, um 18 Uhr Spitze bei 80 km/h, danach Rückgang." width="800" height="320" loading="lazy" decoding="async">
  <figcaption>Prognostizierte Stundenwerte. Die Farbbänder entsprechen der Bewertungslogik der App. Stundenwerte zeigen den Sprung härter, als er gemessen war — siehe nächster Abschnitt.</figcaption>
</figure>

**In der Messung** lässt sich das feiner auflösen — SwissMetNet liefert Zehnminutenwerte. Vom letzten ruhigen Wert bis zur Spitze vergingen im **Median 40 Minuten**; der schnellste Fall schaffte es in 10 Minuten, der langsamste brauchte 110. Wichtig: Das ist die **Dauer des Anstiegs selbst, keine Vorwarnzeit** — wann er beginnt, sieht man erst, wenn er begonnen hat. Und im schnellsten gemessenen Fall lagen zwischen ruhigem Wind und Spitze nur zehn Minuten. Wer plant, plant auf den schnellen Rand, nicht auf den Median.

*Methodisch dazu:* Als Anstieg zählt die Spanne vom letzten Wert unter 35 % der Spitze bis zur Spitze. An 5 der 45 Stationen liess sich kein solcher ruhiger Ausgangswert finden — die Zahl beruht auf den übrigen 40.

### Die Front lief nach Osten — gemessen, nicht modelliert

Die Zeitpunkte der Signatur an den Messstationen ergeben eine saubere Kette quer durchs Land (Ortszeit):

| Zeit | Station | Höhe |
|---|---|---|
| 14:50 | Delémont | 439 m |
| 15:00 | Genève / Cointrin · Aigle | 411 m · 381 m |
| 15:40 | Bern / Zollikofen · La Brévine | 553 m · 1'050 m |
| 16:20 | Beznau | 326 m |
| 16:40 | Interlaken | 578 m |
| 17:00 | Zürich / Kloten | 426 m |
| 17:10 | Schaffhausen | 438 m |
| 17:20 | Meiringen | 589 m |

Von Westen nach Osten, über zweieinhalb Stunden. Ein lokaler Effekt wie Talwind oder Seewind erzeugt so ein Muster nicht.

---

## Wie hoch reicht eine Böenfront?

Wir haben beide Datensätze mit derselben Methode ausgewertet. Als **von der Front getroffen** zählt ein Standort nur, wenn drei Merkmale gleichzeitig auftreten: ein **Böensprung von mindestens 15 km/h**, ein **Temperatursturz von mindestens 1 Kelvin** und ein **Druckanstieg von mindestens 0,2 Hektopascal** — alle drei im selben Fenster (Messung: 30 Minuten, Prognose: ein Stundenschritt). Diese Kombination ist die Signatur eines Luftmassenwechsels — gewöhnlicher Gradient- oder Talwind erzeugt sie in aller Regel nicht. Was die Signatur **nicht** unterscheidet: ob hinter dem Wechsel ein Gewitterausfluss oder eine flache Kaltfront steckt. Das DWD-Lexikon fasst beides unter dem Begriff Böenfront [2]; für die Höhenfrage spielt die Herkunft keine Rolle, und wir lassen sie offen (siehe Grenzen).

**Die Antwort aus den Messwerten für diesen Tag: Oberhalb von rund 2'000 Metern war die Front kaum noch nachweisbar.** An 139 SwissMetNet-Stationen zeigten 45 die vollständige Signatur. Unterhalb von 1'000 m war es knapp die Hälfte der Stationen, zwischen 1'000 und 1'500 m noch ein Fünftel, zwischen 1'500 und 2'000 m eine einzige von sechzehn. Über 2'000 m: **keine der 16 Stationen** — bei bewusst gelockerten Kriterien zwei, die höchste davon auf 2'668 m. Mit unseren Standard-Schwellen war die höchste Station mit vollständiger Signatur Grimsel Hospiz auf **1'980 m**. Hohe Stationen hatten an diesem Tag durchaus Wind. Die **SwissMetNet-Station Piz Corvatsch** auf 3'294 m meldete eine Spitzenböe von 78 km/h, und in dem Halbstundenfenster mit dem stärksten Anstieg legte der Wind dort um 43 km/h zu. Was in genau diesem Fenster fehlte, war der Luftmassenwechsel: Die gemessene Temperatur fiel um **0,4 Kelvin**, der Luftdruck stieg um **0,1 Hektopascal** — beides unter den Schwellen von 1 Kelvin und 0,2 Hektopascal, ab denen wir von einer Dichteströmung sprechen. Das war Höhenwind, nicht die Front.

An diesem Tag war die Böenfront also eine **bodennahe Erscheinung**. Ob das für Böenfronten allgemein gilt, lässt sich aus einem einzelnen Fall nicht schliessen — dafür bräuchte es mehrere ausgewertete Ereignisse.

<figure class="fig-wide">
  <p class="fig-kicker">Anteil mit vollständiger Front-Signatur</p>
  <p class="fig-titel">Wo die Front aufhörte — Messung gegen Prognose</p>
  <img src="/wetterkunde/boeenfront-hoehenbaender.svg" alt="Balkendiagramm je Höhenband: gemessen 47 Prozent unter 1000 m, 21 Prozent bis 1500 m, 6 Prozent bis 2000 m und 0 Prozent in allen Bändern darüber; die Prognose zeigt in denselben Bändern 88, 74, 78, 52, 35 und 14 Prozent." width="900" height="480" loading="lazy" decoding="async">
  <figcaption>Die Prognose ist schraffiert dargestellt, damit sie sich nicht nur über die Farbe unterscheidet. n = Stationen / Startplätze je Band. Die absoluten Anteile sind nicht direkt vergleichbar (siehe Text) — vergleichbar sind der Verlauf und die Obergrenze.</figcaption>
</figure>

### Wie belastbar ist dieser Befund?

Drei Prüfungen, die eine Bandtabelle allein nicht leistet.

#### 1 · Ist es die Höhe oder der Ort?

Hohe Messstationen stehen auf Gipfeln und Pässen, tiefe im Mittelland, im Jura und in den Talböden. Die fehlende Signatur oben könnte also schlicht daran liegen, dass die Front dort **horizontal** nie ankam. Dagegen spricht schon die Stationsliste: Die Front lief sehr wohl ins Alpeninnere — Grimsel Hospiz, Göschenen, Engelberg, Meiringen, Chur, Andeer und bis 22:10 Uhr ins Bergell.

Am deutlichsten wird es an **Stationspaaren, die praktisch am selben Ort stehen — nur auf verschiedener Höhe** (Distanz 5 bis 8 km, Höhendifferenz 1'300 bis 2'000 m). Die Tabelle zeigt für jede Station das 30-Minuten-Fenster ihres stärksten Böensprungs; **fett** jeweils die Talstation des Paars:

| Station (Höhe) · Zeit | Böensprung | Temperatur | Druck |
|---|---|---|---|
| **Göschenen** (950 m) · 18:40 | +17 km/h | −1,8 K | +0,8 hPa |
| Gütsch, Andermatt (2'286 m) · 14:00 | +19 km/h | +1,6 K | −0,1 hPa |
| **Montagnier, Bagnes** (839 m) · 16:10 | +26 km/h | −2,1 K | +0,3 hPa |
| Les Attelas (2'734 m) · 17:20 | +14 km/h | −1,5 K | 0,0 hPa |
| **Engelberg** (1'036 m) · 17:50 | +27 km/h | −1,5 K | +0,6 hPa |
| Titlis (3'045 m) · 19:30 | +17 km/h | +1,6 K | −0,2 hPa |
| **Luzern** (454 m) · 17:50 | +28 km/h | −2,5 K | +1,1 hPa |
| Pilatus (2'105 m) · 17:20 | +26 km/h | −2,5 K | 0,0 hPa |
| **Andeer** (987 m) · 21:40 | +31 km/h | −1,0 K | +0,3 hPa |
| Piz Martegnas (2'668 m) · 21:20 | +22 km/h | −0,9 K | +0,1 hPa |

Fünf Mal dasselbe Bild: Unten kommen alle drei Merkmale über die Schwellen — Böensprung, Temperatursturz, Druckanstieg. Wenige Kilometer daneben und 1'300 bis 2'000 Meter höher fehlt jedes Mal mindestens eines. Auf dem Titlis und auf Gütsch **stieg** die Temperatur sogar um 1,6 Kelvin, das Gegenteil eines Kaltluftdurchgangs. Und auffällig: An allen fünf Bergstationen fehlte der **Druckanstieg** — das passt zu einer flachen Kaltluftschicht, deren zusätzliches Gewicht nur unterhalb ihrer Obergrenze auf dem Barometer ankommt. „Die Front war in dieser Gegend nicht" lässt sich damit nicht halten — sie war fünf Kilometer entfernt, mit Uhrzeit belegt.

Systematisch geprüft haben wir dasselbe über einen Korridor: nur Stationen, die **höchstens 25 km von einer Station entfernt stehen, die die Front erfasst hat**. Von den 16 Stationen über 2'000 m erfüllen **12** diese Bedingung. In diesem Korridor zeigten **0 von 12** die Signatur, unter 1'000 m dagegen **39 von 68**. Der Höheneffekt verschwindet also nicht, wenn man die Geografie kontrolliert.

Ganz trennen lassen sich die beiden Erklärungen dennoch nicht. Der DWD beziffert die Mächtigkeit eines solchen Gewitterausflusses mit „in der Regel nur eine Mächtigkeit von wenigen hundert Metern" [5]. Bei einer derart flachen, bodengebundenen Strömung ist „sie war zu flach" keine andere Aussage als „sie kam dort oben nicht an" — in der Messung ist beides dasselbe: kein Luftmassenwechsel. Und was in der freien Luft über dem Talboden auf 2'500 Metern geschah, sagen Bodenstationen ohnehin nicht.

#### 2 · Was heisst „0 %" bei 16 Stationen?

Nicht „nie". Das 95-Prozent-Konfidenzintervall (Wilson) für 0 von 16 reicht von **0 bis 19 Prozent**. Beobachtet haben wir keinen Fall; ausschliessen können wir eine Quote bis knapp 20 Prozent nicht.

#### 3 · Hängt das Ergebnis an unseren Schwellen?

Teilweise — und das ist die wichtigste Einschränkung. Die Kriterien (15 km/h, 1 Kelvin, 0,2 Hektopascal) sind **von uns gewählt**, nicht aus der Literatur übernommen. Wir haben sie deshalb variiert — **locker** heisst 10 km/h · 0,5 K · 0,1 hPa, **streng** heisst 20 km/h · 2 K · 0,5 hPa:

| Schwellen | unter 1'000 m | über 2'000 m | höchster Fall |
|---|---|---|---|
| locker | 50/83 | **2/16** | 2'668 m |
| Standard | 39/83 | 0/16 | 1'980 m |
| streng | 14/83 | 0/16 | 1'089 m |

**Robust ist der Verlauf, nicht die Obergrenze.** In allen drei Varianten fällt der Anteil betroffener Stationen mit der Höhe stark ab. Die exakte Zahl „bis 1'980 m" gilt aber nur für unsere mittlere Schwelle — mit lockeren Kriterien finden sich zwei Fälle bis 2'668 m. Die belastbare Formulierung lautet deshalb: **oberhalb von 2'000 m war die Signatur an diesem Tag gar nicht oder nur vereinzelt nachweisbar.**

### Und was sagte die Prognose?

Etwas anderes. In der Tabelle steht **Gemessen** für die 139 SwissMetNet-Stationen und **Prognose** für die 494 Startplätze aus ICON-CH1:

| Höhe | Gemessen | Prognose |
|---|---|---|
| unter 1'000 m | 47 % · n = 83 | 88 % · n = 16 |
| 1'000–1'500 m | 21 % · n = 24 | 74 % · n = 99 |
| 1'500–2'000 m | 6 % · n = 16 | 78 % · n = 174 |
| 2'000–2'500 m | **0 %** · n = 6 | 52 % · n = 164 |
| 2'500–3'000 m | **0 %** · n = 6 | 35 % · n = 34 |
| über 3'000 m | **0 %** · n = 4 | 14 % · n = 7 |
| höchster Fall | **1'980 m** | 3'169 m |

Beide Datensätze zeigen dieselbe Richtung: Der Effekt nimmt mit der Höhe ab. Aber die Prognose sieht die Front **rund 1'200 Meter höher reichen**, als sie gemessen wurde (beide Werte mit den Standardkriterien bestimmt). Auch bei den Spitzenwerten liegen die beiden auseinander — das Modell nannte als höchsten Wert 112,7 km/h (Palfries, 1'746 m), gemessen wurden **121,3 km/h auf dem Chasseral (1'594 m)**.

Die absoluten Prozentzahlen sind bewusst nicht direkt vergleichbar: Messstationen stehen nicht dort, wo Startplätze liegen, und die Zeitfenster unterscheiden sich. Auch die beiden Maximalwerte stammen aus verschiedenen Stichproben an verschiedenen Orten — vergleichbar ist dort die Grössenordnung, nicht der Einzelwert. Belastbar vergleichbar sind die **Form der Kurve** und die **Obergrenze**. Und dort ist der Unterschied deutlich.

### Was aus diesem Fall folgt — und was nicht

Alles Folgende ist das **Fazit für dieses eine Ereignis**: für das, was 139 SwissMetNet-Stationen am 30. Juli 2026 gemessen haben. Es ist keine allgemeine Aussage über Böenfronten. Ob sich andere Fälle genauso verhalten, wissen wir nicht — dafür müsste man weitere Ereignisse gleich auswerten.

**An diesem Tag lag der harte Schlag unten, nicht oben.** Das ist kontraintuitiv; die meisten würden erwarten, dass es in der Höhe schlimmer ist. Ob das die Regel oder die Ausnahme ist, sagt ein einzelner Tag nicht.

**An diesem Tag lag die Prognose in der Höhe zu hoch.** Wenn ein Modell an einem hoch gelegenen Startplatz eine Gewitterböe zeigt, muss das nicht bedeuten, dass die Front dort ankommt. Warum die Prognose oben zu hoch lag, wissen wir nicht sicher — **plausibel, aber unbelegt** ist, dass ein Modell die flache, scharf begrenzte Kaltluft nur geglättet darstellen kann und die Böen-Diagnostik an hohen Gitterpunkten eher den kräftigen Höhenwind widerspiegelt. Der praktische Hinweis bleibt derselbe: die Zahl vorsichtig lesen. Aus einem Tag lässt sich zudem kein systematischer Fehler ableiten; dafür bräuchte es eine Serie von Fällen.

**Und was das alles nicht heisst:** Höhe ist kein Freibrief. Die Auswertung sagt, dass die *Front* an diesem Tag nicht hochreichte — nicht, dass es oben ruhig war. Auf dem Chasseral (1'594 m) wurden 121,3 km/h gemessen. Turbulenz oberhalb der Front, Scherung an ihrer Oberkante und gewöhnlicher Höhenwind sind eigene Themen, zu denen diese Daten nichts sagen.

---

## Was du daraus für die Flugplanung mitnimmst

- **Eine Böenfront kann weit von dort ankommen, wo sie entstand.** Die von uns gemessene Kette lief in zweieinhalb Stunden einmal quer durchs Land — weiter, als man von einem Startplatz aus überblickt. Gewitter weit im Luv sind deshalb kein Grund zur Entwarnung.
- **Das Fehlen einer Böenwalze ist kein Sicherheitszeichen.** Ist die Luft trocken, fehlt sie — und die Front ist dann eher stärker.
- **Der Anstieg ist schnell, im Extremfall sehr schnell.** Gemessen dauerte er 10 bis 110 Minuten, im Median 40. Verlass dich auf den schnellen Rand, nicht auf den Mittelwert — und der Anstieg selbst ist die einzige Warnung.
- **Der Zeitpunkt ist unschärfer als die Tatsache.** Die Landezeit gehört vor das erwartete Zeitfenster, nicht hinein.
- **Ein einzelner Stationswert reicht nicht.** Im schnellsten gemessenen Fall lagen zwischen ruhigem Wind und Spitze zehn Minuten — wer eine Station nur stündlich prüft, sieht den Anstieg erst, wenn er gelaufen ist.

**Gewitter weit im Luv? Früh landen.**

---

## Grenzen dieser Auswertung

- **Über 2'000 m stehen nur 16 Stationen.** „Keine Signatur" heisst: an diesen 16 nicht. Das 95-Prozent-Intervall lässt eine Quote bis 19 Prozent offen.
- **Die Kriterien sind selbst gewählt.** 15 km/h, 1 Kelvin und 0,2 Hektopascal stammen nicht aus der Literatur, sondern von uns. Der Höhenverlauf hält allen geprüften Varianten stand, die exakte Obergrenze nicht.
- **Messstationen sind keine Startplätze.** SwissMetNet steht auf Flugplätzen, in Talböden und auf exponierten Graten — nicht dort, wo Gleitschirme starten. Die Exposition unterscheidet sich.
- **Die beiden Datensätze sind unterschiedlich gebaut.** 139 Stationen gegen 494 Startplätze, 30-Minuten-Fenster gegen Stundenschritte, Messung gegen Prognose. Die absoluten Prozentwerte sind deshalb nicht gegeneinander aufzurechnen — die Höhenabhängigkeit und die Obergrenze schon.
- **Die 13,5 Kelvin Abendabkühlung enthalten auch die gewöhnliche abendliche Abkühlung.** An einem klaren Sommerabend kühlt es auch ohne Front deutlich ab; wie viel die neue Luftmasse beitrug, liesse sich nur mit einem Vergleichstag sauber trennen.
- **Ein Tag ist kein Klima.** Diese Zahlen beschreiben den 30. Juli 2026 — ein sauber dokumentierter Einzelfall, keine Statistik über Böenfronten allgemein.
- **Was wir nicht gemessen haben:** die Turbulenz *oberhalb* der Front. Die Stationen stehen am Boden. Über Scherung und Hebung in der freien Atmosphäre sagen diese Daten nichts.
- **Und wir haben den Ursprung nicht belegt.** Dass die Welle aus französischen Gewittern stammte, ist eine Zuschreibung aus einer fremden Analyse. Unsere Daten zeigen den Durchgang über die Schweiz — nicht, wo er begann.

---

## Häufige Fragen

**Wie hoch reicht eine Böenfront?**
In dem einen Fall, den wir mit Messwerten ausgewertet haben — dem 30. Juli 2026 in der Schweiz — war sie oberhalb von rund 2'000 Metern kaum noch nachweisbar. Von 139 SwissMetNet-Stationen zeigten 45 die vollständige Signatur aus Böensprung, Temperatursturz und Druckanstieg: unterhalb von 1'000 m knapp die Hälfte, zwischen 1'500 und 2'000 m eine von sechzehn, über 2'000 m keine einzige (mit gelockerten Kriterien zwei, bis 2'668 m). Die höchste Station mit voller Signatur lag auf 1'980 m. Das beschreibt dieses Ereignis; eine allgemeingültige Obergrenze für Böenfronten ist es nicht.

**Kann eine Böenfront kommen, ohne dass man sie sieht?**
Ja. Die sichtbare Böenwalze entsteht nur, wenn die Luft feucht genug ist, dass an der Vorderkante Wasserdampf kondensiert. Ist die Luft trocken, fehlt die Wolke — und die Front ist wegen der stärkeren Verdunstungskühlung tendenziell härter.

**Wie viel Vorwarnzeit habe ich?**
Gemessen an den Stationen, die die Front erfasst haben: vom ruhigen Wind bis zur Spitze im Median 40 Minuten, im schnellsten Fall 10, im langsamsten 110. Das ist die Dauer des Anstiegs, keine garantierte Vorwarnzeit — wann er beginnt, zeigt erst der Anstieg selbst. Die häufig zu lesende Aussage, eine Böenfront sei „in Minuten da", traf an diesem Tag nur den schnellsten Teil der Fälle.

**Woran erkenne ich eine Böenfront in den Daten?**
An drei Merkmalen, die gleichzeitig auftreten: einem plötzlichen Böensprung, einem Temperatursturz und einem Druckanstieg. Kommen alle drei zusammen, ist es ein Luftmassenwechsel und kein gewöhnlicher Wind. Die Windrichtung dreht dabei oft mit, aber nicht verlässlich: an den 45 Stationen mit Signatur betrug die Drehung im Median 49 Grad, und nur 13 von ihnen drehten um mehr als 90 Grad. Als alleiniges Erkennungsmerkmal taugt sie nicht.

**Zeigt die Wetterprognose eine Böenfront zuverlässig an?**
Sie zeigt sie an — aber nicht unbedingt in der richtigen Höhe. Am 30. Juli sah die ICON-CH1-Prognose die Signatur noch auf 3'169 m, gemessen wurde sie nur bis 1'980 m. Warum, wissen wir nicht sicher; plausibel, aber unbelegt ist, dass das Modell die flache, scharf begrenzte Kaltluft nur geglättet darstellen kann. Die Warnung stimmte — die vertikale Ausdehnung war an diesem Tag mit Vorsicht zu lesen.

---

## Quellen und Reproduzierbarkeit

**Fachliche Quellen (im Text als [1]–[5] referenziert):**

- **[1]** Deutscher Wetterdienst, *Thema des Tages — Kleine Gewitterkunde, Teil 5: Die Squall-Line (Gewitterlinie)*, Dr. rer. nat. Markus Übel, Vorhersage- und Beratungszentrale Offenbach, 10.09.2023 → [dwd.de/DE/wetter/thema_des_tages/2023/9/10.html](https://www.dwd.de/DE/wetter/thema_des_tages/2023/9/10.html)
- **[2]** Deutscher Wetterdienst, *Wetterlexikon: Böenfront* → [dwd.de — Glossar Böenfront](https://www.dwd.de/DE/service/lexikon/Functions/glossar.html?lv3=100478&lv2=100310)
- **[3]** Deutscher Wetterdienst, *Wetterlexikon: Böenwalze* → [dwd.de — Glossar Böenwalze](https://www.dwd.de/DE/service/lexikon/Functions/glossar.html?lv3=100484&lv2=100310)
- **[4]** Deutscher Wetterdienst, *Thema des Tages — Erst grosse Hitze, dann schwere Gewitter?*, M.Sc. Nico Bauer, 29.07.2026 → [dwd.de/DE/wetter/thema_des_tages/2026/7/29.html](https://www.dwd.de/DE/wetter/thema_des_tages/2026/7/29.html)
- **[5]** Deutscher Wetterdienst, *Thema des Tages — Die Böenfront eines Gewitters und ihre Folgen*, Dipl.-Met. Helge Tuschy, 31.05.2017 → [dwd.de/DE/wetter/thema_des_tages/2017/5/31.html](https://www.dwd.de/DE/wetter/thema_des_tages/2017/5/31.html)

**Daten:**

- **Messwerte:** MeteoSchweiz Open Government Data, SwissMetNet, Zehnminutenwerte vom 30. Juli 2026 — Böenspitze (1-Sekunden-Böe), Lufttemperatur 2 m, Luftdruck auf Barometerhöhe. 146 Stationen ausserhalb des Tessins lieferten Daten; **139** davon liessen sich für die Signatur-Auswertung nutzen (Böen-, Temperatur- und Druckreihe vollständig), die Temperatur-Statistik nutzt alle 146.
- **Prognose:** ICON-CH1 (MeteoSchweiz) über Open-Meteo, 494 Schweizer Startplätze, 30. Juli 2026.
- **Auswertung:** Beide Datensätze und die Rechenskripte sind archiviert und lassen sich nachvollziehen.

---

## Wie Wingcast damit umgeht

Wingcast liest die Wettermodelle jeden Morgen für alle 494 Schweizer Startplätze und schreibt in Klartext, was sie für deinen Startplatz bedeuten. Diese Auswertung ist ein Beispiel dafür, wie wir mit unserer eigenen Datengrundlage umgehen: nachrechnen, gegen Messungen prüfen und die Abweichung benennen, statt sie wegzulassen. Wingcast ist **Decision Support** — wir liefern Daten und Einschätzung, die Entscheidung triffst du.

---

<!-- REDAKTIONELLE NOTIZEN — nicht auf die Seite

⚠️ FASSUNG 2 (2026-08-02). Fassung 1 beruhte ausschliesslich auf ICON-CH1-PROGNOSEdaten
und behauptete, die Front habe Startplätze über 2'500 m getroffen (höchster Fall 3'169 m).
Nach Auswertung echter SwissMetNet-Messungen ist das FALSCH: gemessen reichte die Front
nur bis 1'980 m, über 2'000 m zeigte keine der 16 Stationen die Signatur. Fassung 1 hat
den Modellwert für Realität gehalten.

Zwei weitere Korrekturen gegenüber Fassung 1:
- „Die Frage, die uns ein Leser gestellt hat" war eine erfundene Tatsachenbehauptung — raus.
- Die 3'000-m-Angabe aus einer fremden Ereignis-Analyse ist ersatzlos raus; wir sagen nur,
  was die eigenen Messungen hergeben.
- „Zieht in Minuten durch" ist durch die Messung widerlegt: Median 40 Minuten von ruhig
  bis Spitze (10 bis 100).

🛑 LEITPLANKE: Am 30.07.2026 sind in der Schweiz zwei Gleitschirmpilot:innen tödlich
verunglückt. Ursache offiziell ungeklärt, Untersuchung der Bundesanwaltschaft; Wetter wird
in den Meldungen nicht als Faktor genannt. Die Unfälle kommen in diesem Artikel in KEINER
Form vor.

TABUS geprüft: keine Konkurrenz-Namen; kein „Empfehlung"/„sicher"/„garantiert"; kein
Ersatz-Versprechen; Decision-Support-Framing im Schlussabschnitt.

✅ Video und Caption sind auf die Messwerte nachgezogen (Know-Karte „above 2,000 m we
measured almost nothing", Höhenlinie 2'000 m, Caption mit Korridor- und Schwellen-Hinweis).

FASSUNG 5 (02.08., wissenschaftlicher Review): Vorwarnzeit-Framing korrigiert (Anstiegsdauer
≠ Vorwarnzeit), Signatur als Luftmassenwechsel deklariert (Kaltfront nicht unterscheidbar),
Modell-„Glättung" als Hypothese markiert, TL;DR-Regen-Widerspruch entfernt, Abendabkühlungs-
Caveat ergänzt, FAQ-Zahlen angeglichen (110 min, gelockerte Kriterien), Terminologie-Hinweis
zum DWD-Lexikon ergänzt, Quellenliste restrukturiert (146/139 Stationen).

FASSUNG 6 (03.08.): Entstehungsschritte in Alltagssprache (Fachbegriffe nachgereicht,
DWD-Zitate unveraendert), Meta-Satz zur eigenen Schlussfolgerung entfernt, Bildlegende
ohne Reel-Bezug, Pruefung 1 um fuenf Stationspaare erweitert (gleicher Ort, 1300-2000 m
Hoehendifferenz), Alpen-Aussage korrigiert (die Front lief sehr wohl ins Alpeninnere),
neue Quelle [5] fuer die Maechtigkeit des Ausflusses (DWD/Tuschy 2017, am Original geprueft).

FASSUNG 7 (03.08., User-Review): (1) DWD-Lexikon-Absatz in Alltagssprache — die vier
Durchgangs-Merkmale als Liste, mesoskalig/konvektiv/Hektopascal/Sturm-Orkan erklaert.
(2) Regen-Caveat komplett gestrichen (Entscheid User) — es bleibt nur die Cirren-
Ehrlichkeit; Niederschlagszahlen (378/87/14,9 mm) kommen im Artikel nicht mehr vor.
(3) Schwellen im Methodik-Absatz beziffert (15 km/h / 1 K / 0,2 hPa, Fenster benannt).
(4) Keine Tabelle braucht mehr horizontales Scrollen: Stationspaare jetzt 2 Zeilen pro
Paar MIT den gemessenen Deltas (Boeensprung/dT/dP, nachgerechnet aus dem SwissMetNet-
Archiv, Skript scratchpad/stationspaare_deltas.py nach Methode messwerte_auswertung.py);
Schwellen-Tabelle kompakt (Kriterien in den Text gezogen); Vergleichstabelle mit kurzen
Headern. Neuer belegter Befund: an allen fuenf Bergstationen fehlte der Druckanstieg.

OFFEN:
- OG-Bild /og/wetterkunde-boeenfront.jpg existiert noch nicht
- FR/IT-Übersetzung (Artikel vorerst DE-only)
- Reel-Einbettung, sobald GustFrontReel korrigiert und gepostet ist
- Interne Links auf /wetterkunde/foehn, sobald der Föhn-Pillar live ist
-->
