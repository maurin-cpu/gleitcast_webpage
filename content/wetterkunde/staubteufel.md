---
titel: "Dust Devils beim Gleitschirmfliegen: woran du einen Dusty-Tag erkennst"
slug: staubteufel
ziel_url: /wetterkunde/staubteufel
ziel_keyword: "staubteufel gleitschirm"
neben_keywords:
  - "dust devil gleitschirm"
  - "dust devil schweiz"
  - "thermikwirbel startplatz"
  - "kleintrombe"
  - "staubteufel gefahr"
  - "wirbel beim start gleitschirm"
typ: pillar
hub: /wetterkunde
sprache: de-CH
status: published
veroeffentlicht: 2026-08-20
autor: "Maurin (Founder & Pilot, Wingcast)"
stand: 2026-08-20
meta_title: "Staubteufel beim Gleitschirmfliegen – Dusty-Tage erkennen"
meta_description: "Keine Prognose zeigt einen Dust Devil. Ob heute ein Dusty-Tag ist, lässt sich aber rechnen: 490 Schweizer Startplätze, 74 Messstationen, ein Sommer."
schema:
  - Article
  - FAQPage
  - BreadcrumbList
og_bild: /og/wetterkunde-staubteufel.png   # ✅ kopiert 20.08. aus assets/og-staubteufel.png
video: /wetterkunde/staubteufel-entstehung.mp4   # Remotion-Video (Abb. 1); E7-Reel separat offen
# Sprachregel: im Fliesstext heisst er durchgehend „Dust Devil". „Staubteufel"
# steht bewusst im Titel-Tag, in der Definition und im Slug — das ist das
# Suchwort, das Piloten eintippen. Siehe Log 16.08.2026.
# Aufbau folgt bewusst published/boeenfront.md (Referenz des Users, 16.08. +
# Review 17.08.): Lead · Grundlagen · Kernbefund · Praxis · Fazit (Pilot-Take-
# aways am Ende der inhaltlichen Strecke) · Grenzen · FAQ · Quellen · Wingcast
# ganz am Schluss.
daten:
  - 2-ausfuehrung/wetterkunde/belege/2026_sommer_staubteufel_bedingungen.csv
  - 2-ausfuehrung/wetterkunde/belege/2026-05-28_2026-08-04_smn_bodengradient.json
  - 2-ausfuehrung/wetterkunde/belege/2026-05-28_2026-08-04_paarvergleich_gradient.json
skripte:
  - 2-ausfuehrung/wetterkunde/belege/staubteufel_fetch.py
  - 2-ausfuehrung/wetterkunde/belege/staubteufel_auswertung.py
  - 2-ausfuehrung/wetterkunde/belege/staubteufel_messkontrolle.py
  - 2-ausfuehrung/wetterkunde/belege/staubteufel_paarvergleich.py
  - 2-ausfuehrung/wetterkunde/belege/staubteufel_nachrechnung.py   # Parameter-Gegenprobe 17.08.
  - 2-ausfuehrung/wetterkunde/belege/staubteufel_grafiken.py   # erzeugt alle 6 Abbildungen
abbildungen:                       # liegen in 2-ausfuehrung/wetterkunde/assets/
  # staubteufel-entstehung.svg ersetzt (20.08.): Abb. 1 ist jetzt das
  # Remotion-Video /wetterkunde/staubteufel-entstehung.mp4 (videos-Repo,
  # remotion/src/wingcast/DustDevilEntstehung.tsx)
  - staubteufel-spannweite.svg
  # staubteufel-gitter.svg raus (19.08., User): sie zeigte den Wirbel in einer
  # 1000-m-Modellzelle — der Absatz dazu ist gestrichen, weil Leser dieses
  # Blogs ohnehin wissen, dass kein Modell den einzelnen Wirbel auflöst. Das
  # Skript erzeugt sie weiter, falls sie für einen Social-Post gebraucht wird.
  - staubteufel-hoehenbaender.svg
  - staubteufel-modell-messung.svg
  - staubteufel-tagesgang.svg
---

# Dust Devils beim Gleitschirmfliegen: woran du einen Dusty-Tag erkennst

> **TL;DR** — Ein Dust Devil — auf Deutsch Staubteufel — ist ein rein thermisch angetriebener Drehwirbel, **10 bis 100 m breit**, in Mitteleuropa meist **kürzer als eine Minute** [[2]](https://www.dhv.de/media/jahre/2024/07_wetter/Wetterwissen/DHVmagazin_Artikel/Thermik/19_2014_186_dust_devils.pdf). Gefährlich ist er, weil deine eine Flügelseite Rückenwind bekommt und die andere gleichzeitig Gegenwind — in einer idealisierten Modellrechnung rund **69 km/h Unterschied über 10 m Spannweite**. Und meist fehlt in der Schweiz der Staub, der ihn sichtbar machen würde — am Schwyberg FR riss 2025 ein unsichtbarer Wirbel einen Piloten am grasbewachsenen Startplatz in die Höhe. **Den einzelnen Wirbel sieht keine Prognose.** Was sich rechnen lässt, ist die Stufe davor: ob heute ein Dusty-Tag ist, wo, und wann am Tag. Wir haben das für **490 Schweizer Startplätze über 69 Sommertage** gerechnet und an **74 Messstationen** geprüft: tiefe, trockene Lagen, Höhepunkt **um 13 Uhr**, Wallis vorneweg — und die Faustregel vom Startplatz beschreibt die Schweiz in unseren Daten besser als das Kriterium aus der Fachliteratur.

Über Dust Devils steht in jedem Lehrbuch derselbe Absatz: heisser Boden, aufsteigende Luft, Drehimpuls, fertig. Was fehlt, sind Zahlen für die Schweiz.

Aktuell ist das Thema wie lange nicht: Der **SHV** hat die Ausgabe Juli/August 2026 des *Swiss Glider* damit auf den Titel gemacht — mit dem Bericht eines schwer verunfallten Piloten [[12]](https://www.shv-fsvl.ch/mitgliederservice/swiss-glider/) und einer Wetterkunde von Roger Oechslin, dem Meteoverantwortlichen des Verbands [[11]](https://www.shv-fsvl.ch/mitgliederservice/swiss-glider/). Dazu kommen zwei Texte des DHV [[1]](https://www.dhv.de/media/seiten/07_wetter/Wetterwissen/DustDevils/Dust_Devil_Info_7_2020.pdf) [[2]](https://www.dhv.de/media/jahre/2024/07_wetter/Wetterwissen/DHVmagazin_Artikel/Thermik/19_2014_186_dust_devils.pdf) und einer von Lucian Haas [[10]](https://lu-glidz.blogspot.com/2018/09/meteowissen-dust-devil.html). Alle nennen die Zutaten, und alle nennen sie richtig — nur hat niemand nachgerechnet, **wie oft** sie in der Schweiz zusammenkommen, **wo** und **zu welcher Stunde**. Genau das macht dieser Artikel. Er widerspricht dem SHV nirgends; er beziffert ihn.

*Zur Sprache: Der Wirbel heisst auf Deutsch Staubteufel, in der Schweiz auch **Heuteufel**, meteorologisch Kleintrombe. Am Startplatz sagt trotzdem jeder **Dust Devil** oder **Dusty** — und so nennen wir ihn hier auch.*

---

## Was ein Dust Devil ist

Der Deutsche Wetterdienst führt ihn als „kleinen, eng begrenzten Wirbelwind", der „meist im Sommer durch das plötzliche Aufsteigen einer heissen Luftblase, die am Erdboden erhitzt wurde" entsteht [[3]](https://www.dwd.de/DE/service/lexikon/Functions/glossar.html?lv2=102248&lv3=102604).

**Ein Dust Devil ist kein Tornado.** Der Unterschied ist nicht die Grösse, sondern der Antrieb: Ein Tornado hängt an einer Gewitterwolke und reicht durchgehend bis zur Wolkenuntergrenze, ein Dust Devil hat **keine Verbindung zur Wolke** und wird allein vom überhitzten Boden angetrieben [[4]](https://www.sturmarchiv.ch/index.php/Tornados). Er entsteht deshalb auch bei wolkenlosem Himmel — Blauthermik ist sogar sein Lieblingswetter.

Zwei Dinge sind für dich wichtiger als die Definition. **Die Drehrichtung ist zufällig:** Bei dieser Grösse spielt die Erdrotation keine Rolle, die Drehung entsteht aus dem zufälligen Anströmen [[3]](https://www.dwd.de/DE/service/lexikon/Functions/glossar.html?lv2=102248&lv3=102604) — damit ist nebenbei der Glaube an „meist linksdrehende Thermikschläuche" erledigt [[2]](https://www.dhv.de/media/jahre/2024/07_wetter/Wetterwissen/DHVmagazin_Artikel/Thermik/19_2014_186_dust_devils.pdf). Und **der Staub ist nicht der Wirbel**, er macht ihn nur sichtbar. Über Gras, Fels oder feuchtem Boden dreht derselbe Wirbel unsichtbar weiter; der Staub wirkt, wie es Lucian Haas formuliert, „wie ein Verstärker" [[10]](https://lu-glidz.blogspot.com/2018/09/meteowissen-dust-devil.html).

### Und in der Schweiz? Meistens siehst du ihn nicht

Das ist der Punkt, an dem sich die Schweiz von den Bildern aus Marokko und Arizona unterscheidet — und er steht in kaum einem Lehrbuch. **Den Staub muss der Boden erst liefern.** Schweizer Startplätze und Landewiesen sind Grasland, Alpweide, Wald oder Fels; da liegt kaum loses Material herum. Der Wirbel entsteht trotzdem — er zeigt sich nur nicht.

> ⚠️ **Schwyberg FR, 2. Juli 2025, 13 Uhr.** Ein Pilot mit 45 Jahren Flugpraxis steht auf **1600 m** am Start, eingehängt, die Bremsgriffe noch nicht in den Händen. Der Platz: grasbewachsen, keine schroffen Felsen, seit Jahrzehnten vertraut. Wochen ohne Regen, heiss, windstill, stabil geschichtet. Der Wirbel kommt **von hinten und unsichtbar**, reisst ihn auf 25 bis 30 m Höhe — das Fluginstrument zeichnet 5 m/s Steigen und 60 km/h auf — und lässt ihn im Lee schwer verletzt liegen. Sein Satz dazu: „Dust Devils waren in meinem mentalen Modell nicht vorgesehen" [[12]](https://www.shv-fsvl.ch/mitgliederservice/swiss-glider/).

Sichtbar wird ein Wirbel bei uns fast nur dort, wo loses Material liegt: auf abgeernteten Feldern, über Kies, Baustellen und Sandplätzen — der bestdokumentierte Schweizer Fall zog 2012 minutenlang über den Sandplatz im Dorfzentrum von Schüpfheim LU [[9]](https://www.sturmarchiv.ch/index.php/20120530_01_Staubteufel_Sch%C3%BCpfheim) —, über Geröll und ausgeaperten Skipisten, und generell im Wallis.

Daraus folgt zweierlei. **„Ich habe hier noch nie einen gesehen" ist kein Argument** — es sagt etwas über den Untergrund, nicht über die Wirbel. Der DHV hält für die Alpen fest: „Besonders in den Dolomiten gab es schon vermehrt gefährliche Situationen durch unsichtbare bzw. kaum sichtbare Dust-Devils" [[2]](https://www.dhv.de/media/jahre/2024/07_wetter/Wetterwissen/DHVmagazin_Artikel/Thermik/19_2014_186_dust_devils.pdf). Und **Sichtungsmeldungen taugen nicht als Statistik**, weil gemeldet wird, was man sieht. Deshalb rechnen wir weiter unten mit Bedingungen statt mit Sichtungen.

### Wie er entsteht

In Mitteleuropa entsteht ein Dust Devil meist aus einer kräftigen Thermikablösung — häufig bei Blauthermik — über einer überhitzten, offenen Fläche [[2]](https://www.dhv.de/media/jahre/2024/07_wetter/Wetterwissen/DHVmagazin_Artikel/Thermik/19_2014_186_dust_devils.pdf) — vereinfacht in fünf Schritten:

1. **Der Boden überhitzt.** Direkt über der Oberfläche steht eine dünne, sehr heisse Luftschicht. Sie will nach oben, sie kommt nur nicht los.
2. **Die Blase löst sich.** Sobald die überhitzte Luft sich losreisst, steigt sie als Blase auf.
3. **Darunter entsteht ein lokales Tief.** Wo die Warmluft eben noch war, fehlt sie am Boden: Dort bleibt ein **Unterdruck** zurück. Rundherum steht die Luft unter höherem Druck — und Luft fliesst immer vom höheren zum tieferen Druck. Also strömt sie von allen Seiten in dieses Loch nach.
4. **Der Zustrom ist ungleich, und daraus wird eine Drehung.** Ein Hang, eine Hecke, eine leichte Rückenwindkomponente reichen. Die Luft läuft nicht geradlinig ins Loch, sondern **an ihm vorbei**, und beginnt zu kreisen.
5. **Der Wirbel wird gestreckt und dadurch schnell.** Die Thermik zieht den drehenden Schlauch in die Länge, im Querschnitt wird er dünner — dabei beschleunigt die Drehung enorm, derselbe Effekt wie bei einer Eiskunstläuferin, die die Arme anlegt.

Jetzt kann sich der Wirbel eine Zeit lang selbst erhalten: Die schnelle Drehung erzeugt im Kern einen **noch tieferen Unterdruck**, der weitere Luft ansaugt. Genau dieser Kerndruck bestimmt gleich die Windgeschwindigkeit. Und er endet, wenn der Nachschub abreisst — etwa weil kühlere Luft in seinen Fuss gerät, weil er über feuchteren Boden zieht oder weil ein Windstoss ihn abschert [[11]](https://www.shv-fsvl.ch/mitgliederservice/swiss-glider/). Deshalb lebt er bei uns meist keine Minute. Verlassen kann man sich darauf nicht: Wo einer entstanden ist, entsteht der nächste.

<figure class="fig-wide">
  <p class="fig-kicker">Entstehung</p>
  <p class="fig-titel">Vom überhitzten Boden zum drehenden Schlauch</p>
  <video src="/wetterkunde/staubteufel-entstehung.mp4" autoplay muted loop playsinline preload="metadata" width="1920" height="1080" aria-label="Animierter Ablauf wie ein Film an einem Ort, mit Textkarte links unten: Die Sonne erhitzt trockenen Boden, eine Warmluftblase löst sich und steigt auf, darunter bleibt ein Tief zurück, Luft strömt ungleich stark von beiden Seiten nach, und der Wirbel wächst zum gestreckten, schnell drehenden Staubteufel."></video>
  <figcaption>Ein Ablauf wie im Film, alles am selben Ort; die Textbox links unten erklärt jede Szene, die Nummern entsprechen den fünf Schritten oben. Schematisch, nicht massstabsgetreu.</figcaption>
</figure>

Von normaler Thermik unterscheidet ihn dreierlei. Auch dort steigt Luft vom Boden weg und strömt Luft nach, aber die Drehung bündelt dieselbe Energie auf ein Zehntel der Fläche. Der Übergang ist eine **Kante** statt eines weichen Anstiegs — innerhalb weniger Meter kippt die Windrichtung um 180 Grad. Und er **bleibt am Boden und wandert**, quer über den Startplatz, wenn es dumm läuft. Ein Bodenphänomen, kein Höhenphänomen. An Hangstartplätzen kommt dazu, dass der Anstoss zur Drehung oft aus leichtem Lee stammt — zusammen mit dem Warmluftnachschub eines Südhangs ein idealer Nährboden [[2]](https://www.dhv.de/media/jahre/2024/07_wetter/Wetterwissen/DHVmagazin_Artikel/Thermik/19_2014_186_dust_devils.pdf).

### Warum ein kleiner Wirbel deinen Schirm klappt

Stell dir vor, der Wirbel steht vor dir und dein Schirm liegt quer dazu. Dann läuft die Luft auf deiner **linken** Flügelseite in die eine Richtung, auf der **rechten** in die andere: Die eine Hälfte der Kappe bekommt **Rückenwind**, die andere gleichzeitig **Gegenwind** — über die 10 Meter deiner Spannweite. **Dein Schirm misst nicht die Windstärke, er misst den Unterschied zwischen seinen beiden Enden** — und er passt komplett in den Wirbel hinein.

Wie gross dieser Unterschied werden kann, zeigt eine idealisierte Modellrechnung: Ein Kerndruckabfall von 2 Hektopascal — Simulationen zeigen Wirbel mit „pressure drops of hundreds of pascals" [[6]](https://doi.org/10.1007/s10546-023-00792-3) — ergibt rund 34 km/h auf jeder Seite, also **rund 69 km/h Differenz über die Spannweite**. Das ist eine Grössenordnung, keine Belastungsangabe: Was am Schirm wirklich ankommt, hängt zusätzlich von Radius, Position im Wirbel, Scherung und Dauer ab. Die Folge bestätigt der DHV: In geringer Höhe entstehe oft eine Turbulenz, die „so stark [ist], dass der Gleitschirm massiv kollabiert" [[1]](https://www.dhv.de/media/seiten/07_wetter/Wetterwissen/DustDevils/Dust_Devil_Info_7_2020.pdf).

<figure class="fig-wide">
  <p class="fig-kicker">Der Klappmechanismus</p>
  <p class="fig-titel">Nicht die Windstärke — der Unterschied über die Spannweite</p>
  <img src="/wetterkunde/staubteufel-spannweite.svg" alt="Ein Gleitschirm mit 10 Metern Spannweite steht quer über einem Wirbelkern. Auf der linken Seite läuft die Luft mit 34 Kilometern pro Stunde in die eine Richtung, auf der rechten mit 34 in die andere — 69 Kilometer pro Stunde Unterschied über die Spannweite." width="780" height="680" loading="lazy" decoding="async">
  <figcaption>Idealisierte Modellrechnung für 2 hPa Kerndruckabfall. Schematisch, nicht massstabsgetreu.</figcaption>
</figure>

*Zum Nachrechnen: v = √(Δp / 2ρ) mit ρ = 1,10 kg/m³, aus dem Gleichgewicht von Druckgradient und Fliehkraft am Kernrand — Herleitung bei Jackson [[7]](https://arxiv.org/abs/1910.14135) nach Rennó et al.; sie idealisiert stark. Zur Grösse: In Mitteleuropa lebt ein Dust Devil meist unter einer Minute und bleibt selten höher als 100 m, in Wüsten bis zu einer halben Stunde [[2]](https://www.dhv.de/media/jahre/2024/07_wetter/Wetterwissen/DHVmagazin_Artikel/Thermik/19_2014_186_dust_devils.pdf).*

---

## Ist heute ein Dusty-Tag?

Ob heute ein Dusty-Tag ist, entscheidet sich am Wetter — viel Sonne, trockener Boden, trockene Luft und schwacher Wind ohne klare Richtung, so die Pilotenregel des DHV [[1]](https://www.dhv.de/media/seiten/07_wetter/Wetterwissen/DustDevils/Dust_Devil_Info_7_2020.pdf) — und an einer stark überhitzten Bodenschicht [[5]](https://doi.org/10.1002/2015GL063078). Beim Wind rechnen wir mit der belegten Obergrenze: über rund 25 km/h entstehen kaum noch Dust Devils [[5]](https://doi.org/10.1002/2015GL063078). Die übrigen Zahlenschwellen sind unsere Rechenwahl, der DHV nennt keine (siehe Grenzen). In unserer Auswertung (Wettermodell via Open-Meteo) für 490 Schweizer Startplätze über 69 Sommertage 2026 kamen diese Bedingungen am häufigsten in tiefen, trockenen Lagen zusammen: unter 800 m an rund 20 % der Tagesstunden, über 1600 m an rund 2 %, am ausgeprägtesten im Rhonetal. Die kritische Zeit ist 12 bis 16 Uhr mit dem Höhepunkt um 13 Uhr — gemessen an 74 SwissMetNet-Stationen [[8]](https://data.geo.admin.ch/ch.meteoschweiz.ogd-smn/) war die Bodenschicht zu dieser Stunde an 37,6 % der Stunden steiler als 4 Kelvin pro Meter.

Drei Teilfragen, drei Antworten aus unseren Daten: ob der Tag die Bedingungen überhaupt hergibt, wann sie am dichtesten zusammenkommen und wo.

### Passt das Wetter?

Damit überhaupt ein Dust Devil entstehen kann, müssen laut DHV fünf Bedingungen gleichzeitig erfüllt sein — wir nennen sie hier die **Pilotenregel** [[1]](https://www.dhv.de/media/seiten/07_wetter/Wetterwissen/DustDevils/Dust_Devil_Info_7_2020.pdf). Vier davon gibt jedes Wettermodell aus; die lassen sich für jeden Tag und jeden Startplatz nachrechnen:

- **Viel Sonne, wenig Wolken** (Globalstrahlung ab 700 W/m²) — der Motor.
- **Trockener Boden** (unter 0,10 m³/m³) — nasser Boden verdunstet, statt sich aufzuheizen, und liefert auch keinen Staub.
- **Trockene Luft** (relative Feuchte unter 40 %) — typisch für Blauthermik.
- **Wenig Wind** (unter 7 m/s = 25 km/h) oder keine eindeutige Windrichtung am Boden.

Die Zahlen in den Klammern sind **unsere** Rechenschwellen, nicht die des DHV — er nennt keine. Nur die Windgrenze ist ein belegter Literaturwert [[5]](https://doi.org/10.1002/2015GL063078) (siehe Grenzen).

Die fünfte Bedingung liess sich nicht rechnen: Die Luft muss nach oben hin schnell kälter werden, um mehr als **0,7 °C pro 100 m** — die labile Schichtung, die jeder Thermikflieger kennt. Dafür fehlen uns für die meisten der 69 Tage die Höhendaten (siehe Grenzen). Alle Zahlen zur Pilotenregel in diesem Artikel beruhen deshalb auf **vier von fünf** Bedingungen und fallen eher zu hoch aus als zu tief.

So weit die Pilotenregel — die Faustregel vom Startplatz, die der DHV Piloten an die Hand gibt. Auf dieselbe Frage gibt es aber noch eine zweite Antwort, und die kommt aus der Wissenschaft [[5]](https://doi.org/10.1002/2015GL063078). Dieses **Forschungskriterium** schaut gar nicht auf Sonne, Trockenheit und Wind. Es hängt an einer einzigen Grösse: **wie schnell die Temperatur in den untersten zwei Metern über dem Boden abfällt** — in der Bodenschicht. Weiter unten lassen wir die beiden Listen gegeneinander antreten; bis dahin geht es um diese eine Zahl.

Verwechseln lässt sie sich leicht mit dem DHV-Punkt von eben, weil beide Male ein Temperaturgefälle gemeint ist. Der Unterschied ist die Dicke der Schicht: Die 0,7 °C pro 100 m beschreiben hunderte Meter Atmosphäre, das Forschungskriterium die untersten **zwei** Meter — dort ist das Gefälle rund **1200-mal steiler**, deshalb rechnet man in Kelvin pro Meter statt in Grad pro 100 Meter. Und diese Bodenschicht ist die einzige Grösse der ganzen Geschichte, die sich in der Schweiz **messen statt schätzen** lässt. Deshalb kommen wir immer wieder auf sie zurück.

Steil nennen wir diese Schicht ab **4 Kelvin pro Meter**, was **8 Grad Unterschied zwischen der Bodenoberfläche und der Luft in 2 m Höhe** bedeutet — etwa Boden 36 °C, Luft 28 °C. Die Schwelle stammt nicht von uns: Die globale Studie prüft drei Werte, 4, 8,5 und 10 K/m [[5]](https://doi.org/10.1002/2015GL063078) — die 4 K/m aus allgemeinen Beobachtungen über Land (Oke 2007, nach Ryan 1972), die 8,5 und 10 K/m aus Wüstenmessungen der SAMUM-Kampagne 2009 in Südmarokko (Ansmann et al.).

Wir rechnen deshalb alles mit beiden Schwellen. Die Studie selbst hält 8,5 K/m für ihre beste Schätzung, weil steilere Gradienten global besser zu den Beobachtungen passen; in der Schweiz werden 8,5 K/m aber **selbst in der Messung nur an 0,2 % der Stunden** erreicht, 4 K/m dagegen an 26 %. Wer hier allein mit dem Wüstenwert rechnet, bekommt fast immer eine Null — und eine Null ist kein Befund, sondern womöglich ein Artefakt.

Eine Schwelle ist dabei kein Schalter. Über 4 K/m entsteht nicht plötzlich ein Wirbel; die Bodenschicht ist dann bloss steil genug, dass einer entstehen könnte, sofern die anderen Bedingungen dazukommen und irgendetwas ihm den Dreh gibt. Eine Schwelle, ab der in Mitteleuropa zuverlässig ein Dust Devil auftritt, ist uns aus keiner Messreihe bekannt.

Bleibt der Wind, und da ist die Sache weniger einfach, als sie klingt. Nach oben nennt die Fachliteratur eine klare Grenze: Oberhalb von **rund 7 m/s, also 25 km/h**, werden kaum noch Dust Devils beobachtet [[5]](https://doi.org/10.1002/2015GL063078). Der Wirbel wird dann schneller abgeschert, als er sich aufbauen kann. Windstille ist aber nicht der sicherste Zustand, denn irgendwoher muss die anfängliche Drehung kommen, und die liefert typischerweise genau ein Windstoss oder eine Lee-Situation. Gefährlich ist deshalb nicht viel oder wenig Wind, sondern **schwacher Wind ohne klare Richtung**.

### Wann am Tag?

Am kritischsten ist die Zeit, in der der Boden am meisten vorgelegt hat und die Thermik erstmals voll durchgreift. In unseren Messdaten aus 74 Stationen liegt der Höhepunkt deutlich um **13 Uhr Lokalzeit**: Zu dieser Stunde ist die Bodenschicht an **37,6 %** der Messstunden steiler als die eben erklärten 4 K/m. Kritisch ist grob **12 bis 16 Uhr**; um 18 Uhr sind es noch 6 %, dann ist praktisch Ruhe.

<figure class="fig-wide">
  <p class="fig-kicker">Tagesgang · 74 Stationen · Sommer 2026</p>
  <p class="fig-titel">Der Höhepunkt liegt um 13 Uhr</p>
  <img src="/wetterkunde/staubteufel-tagesgang.svg" alt="Balkendiagramm: Der Anteil der Messstunden mit einem Bodengradienten über 4 Kelvin pro Meter steigt von 25,5 Prozent um 11 Uhr auf 37,6 Prozent um 13 Uhr und fällt bis 18 Uhr auf 6 Prozent." width="820" height="360" loading="lazy" decoding="async">
  <figcaption>Anteil der gemessenen Stunden mit über 4 K/m in den untersten 2 Metern, je Lokalstunde.</figcaption>
</figure>

Drei unabhängige Bestätigungen: Die globale Studie zum Thema fand ihren Höhepunkt zwischen 12 und 13 Uhr [[5]](https://doi.org/10.1002/2015GL063078), der DHV nennt die „späten Vormittags- bis frühen Nachmittagsstunden, wenn die Inversion weggeheizt ist" [[1]](https://www.dhv.de/media/seiten/07_wetter/Wetterwissen/DustDevils/Dust_Devil_Info_7_2020.pdf), und der SHV empfiehlt für **11 bis 16 Uhr** erhöhte Aufmerksamkeit, als Saison Juni bis September [[11]](https://www.shv-fsvl.ch/mitgliederservice/swiss-glider/). Der Unfall am Schwyberg passierte um 13 Uhr.

### Wo?

Grossräumig zeigen unsere Zahlen nach unten und ins Trockene. Der Anteil der Stunden mit erfüllten Bedingungen fällt von rund **20 % unterhalb 800 m** auf **rund 2 % oberhalb 1600 m**. Bei den Messstationen sticht **Sion im Rhonetal** heraus: Dort ist die Bodenschicht im Mittel mehr als doppelt so steil wie anderswo, und neun der zwölf stärksten Einzelstunden des Sommers stammen von dieser einen Station.

Im Gelände selbst hört unsere Rechnung dann auf, denn eine Modellzelle von 1 km kennt weder Waldränder noch Kuppen. Diese Merkmale muss der Pilot mitbringen; der SHV nennt vier [[11]](https://www.shv-fsvl.ch/mitgliederservice/swiss-glider/): **trockene, vegetationsarme Flächen** (Äcker, kurz gemähte Wiesen, Hangflächen über der Baumgrenze), **windgeschützte Bereiche**, in denen sich die Luft ungestört aufheizen kann, **Lee-Lagen hinter Waldrändern oder Gebäuden**, wo lokale Wirbel als Drehimpuls-Geber wirken, und **offene, homogene Topografie mit Kuppen**, wo weder Hangaufwind noch Talwind die Richtung vorgeben. Der Schwyberg trägt genau diese Signatur: flacher Rücken, offenes Gelände, trockenbraune Alpweiden, kein klarer Wind.

Was die Zahlen dir **nicht** sagen, ist alles, was zählt, wenn du schon am Hang stehst: ob der Wirbel gerade auf dich zuläuft, wie er dreht, wie gross er ist. Die Daten sagen *heute Augen auf* — den Rest siehst nur du.

---

## Pilotenregel gegen Forschung

Beide beantworten dieselbe Frage: Ist heute Dust-Devil-Wetter? Wenn beide recht haben, müssen sie bei denselben Stunden anschlagen. Genau das haben wir nachgerechnet — und das Ergebnis hat uns überrascht.

Gerechnet für **490 Startplätze** an **69 Sommertagen** (28. Mai bis 4. August 2026), jede Stunde von 11 bis 18 Uhr. Das ergibt **270'480 Startplatz-Stunden**: ein Ort an einer bestimmten Stunde. Für jede davon haben wir gefragt, ob alle Bedingungen gleichzeitig erfüllt waren. Die Prozentwerte weiter unten sagen, bei wie vielen dieser Stunden das zutraf. **Sie sagen nicht, wie oft wirklich ein Wirbel entstand — wir zählen Gelegenheiten, keine Ereignisse.**

„Alle Bedingungen" heisst dabei je nach Liste etwas anderes — die beiden prüfen **nicht dieselben Grössen**:

| | **Liste A · Pilotenregel** [[1]](https://www.dhv.de/media/seiten/07_wetter/Wetterwissen/DustDevils/Dust_Devil_Info_7_2020.pdf) | **Liste B · Forschung** [[5]](https://doi.org/10.1002/2015GL063078) |
|---|---|---|
| Einstrahlung | ≥ 700 W/m² | — |
| Bodenfeuchte | ≤ 0,10 m³/m³ | — |
| rel. Luftfeuchte | ≤ 40 % | — |
| Wind | ≤ 7 m/s [[5]](https://doi.org/10.1002/2015GL063078) | — |
| Bodenschicht (0–2 m) | — | **> 4 bzw. 8,5 K/m** |
| Auftrieb gegen Reibung | — | **w\*/u\* > 5,0** |

Die Pilotenregel fragt also nach dem **Zustand der Landschaft** — Sonne, Trockenheit, Ruhe. Das Forschungskriterium fragt nach der **Physik der untersten zwei Meter**: wie steil die Bodenschicht ist, und ob der thermische Auftrieb die Reibung dominiert (das ist w\*/u\* — grob: „wie kräftig rührt die Thermik von unten durch" geteilt durch „wie stark bremst der Boden"). Beide Listen behaupten, dasselbe Wetter zu beschreiben. Ob das stimmt, ist die Frage dieses Kapitels.

### Wie heiss der Boden dafür sein muss

8,5 Kelvin pro Meter klingt nach einem Tippfehler. Über 2 Meter gerechnet heisst es: **17 Grad Unterschied zwischen der Bodenoberfläche und der Luft in Kniehöhe**.

Das Entscheidende dabei: **Nicht die Luft ist kalt — der Boden ist heiss.** Gemeint ist die Temperatur der Oberfläche selbst, nicht der Luft knapp darüber. Trockene, dunkle Erde, Fels oder Kies in voller Sonne werden **45 bis 60 °C**, während die Luft in 2 m Höhe bei angenehmen 28 °C steht. Jeder kennt das barfuss auf einem Kiesweg: Der Boden verbrennt dir die Füsse, die Luft um dich herum ist bloss sommerlich warm. Genau dieser Sprung ist der Treibstoff — er ist der Grund, warum die bodennahe Luft überhaupt so dringend nach oben will. Ein gerechnetes Beispiel über besonntem Hochgebirgsfels: **Zermatt-Oberrothorn, 3400 m**, 24. Juni, 14 Uhr — Luft 13,9 °C, Oberfläche 34,9 °C, macht 21 Grad auf 2 Meter = **10,5 K/m**.

### Was dabei herauskommt

Erwartet hätte man, dass beide Listen dieselben Stunden markieren, bloss in anderer Sprache. **Das Gegenteil ist der Fall.** Von 100 Stunden, welche die Pilotenregel als kritisch markiert, erfüllen nur **10** auch das Forschungskriterium; von allen Stunden, die *mindestens eine* der Listen markiert, markieren bloss **5,7 %** beide. Mit der strengen Schwelle von 8,5 K/m feuert Liste B praktisch nie.

Der Widerspruch ist auch kein Rauschen, sondern **systematisch nach Höhe**: Die Pilotenregel feuert unter 800 m an **20,26 %** der Stunden und über 2500 m nur noch an 2,42 % — das Forschungskriterium umgekehrt an 0,12 % unten und **13,43 %** oben.

<figure class="fig-wide">
  <p class="fig-kicker">490 Startplätze · 69 Sommertage · 270'480 Startplatz-Stunden</p>
  <p class="fig-titel">Pilotenregel und Forschungskriterium — gegenläufig nach Höhe</p>
  <img src="/wetterkunde/staubteufel-hoehenbaender.svg" alt="Balkendiagramm je Höhenband: Die Pilotenregel des DHV fällt von 20,26 Prozent der Stunden unter 800 Metern auf 2,42 Prozent über 2500 Metern. Das Forschungskriterium steigt gegenläufig von 0,12 auf 13,43 Prozent." width="900" height="500" loading="lazy" decoding="async">
  <figcaption>Anteil der ausgewerteten Tagesstunden (11–18 Uhr Lokalzeit), an denen die jeweilige Liste erfüllt war — erfüllte Bedingungen, keine nachgewiesenen Dust Devils. Gerechnet aus <code>2026_sommer_staubteufel_bedingungen.csv</code>.</figcaption>
</figure>

Dass die Pilotenregel unten so viel häufiger feuert, liegt daran, dass ihre Bedingungen im Flachland und in den Talregionen leichter zusammenkommen: Unten ist die Luft wärmer und damit relativ trockener, die Böden sind es auch — Ackerland, abgeerntete Felder, das Rhonetal. Oben bleibt der Boden länger feucht, die Alpweide ist grün, die Luft kühler und der Wind im Mittel stärker. **Nur eine Bedingung dreht sich um:** Über besonntem Fels wird die Oberfläche extrem heiss, während die Luft darüber kühl bleibt — die gut 10 K/m aus dem Beispiel oben. Und genau diese eine prüft das Forschungskriterium. Daher der gegenläufige Verlauf. Nur: **Dort oben fehlt die trockene, lose Bodenschicht, die den Wirbel speist** — und der Staub, der ihn zeigen würde. Genau das prüft die Pilotenregel über die Bodenfeuchte ab; dem Forschungskriterium fehlt diese Bedingung, weil es für Wüsten entwickelt wurde.

Dazu kommt, dass eine der beiden B-Bedingungen fast immer erfüllt ist: **w\*/u\* > 5 trifft an 71,9 % aller Sommer-Tagesstunden zu** und ist als Unterscheidungsmerkmal damit fast wertlos. Das deckt sich mit der Quelle selbst, die festhält, dass dieses Kriterium allein nicht verwendet werden darf [[5]](https://doi.org/10.1002/2015GL063078).

> **Vorsicht bei der Zahl 20,26 %.** Das unterste Band besteht aus **sechs** Startplätzen, und die sind sich alles andere als einig: Bogiàn 29,3 %, Oberrieden 27,2 % — aber Kerenzerberg nur 0,4 %. Die Höhe entscheidet nichts, sie verschiebt nur die Wahrscheinlichkeit. Belastbar ist die **Richtung**, nicht die Kommastelle.

### Stimmt das Modell mit der Messung überein?

Jetzt prüfen wir, ob **das Wettermodell auf dasselbe Ergebnis kommt wie die Messstationen**. Der Grund: Alle bisherigen Zahlen zur Bodenschicht stammen aus dem Modell — auch das Forschungskriterium rechnet mit einem Modellwert. Ob dieser Wert stimmt, lässt sich in der Schweiz direkt kontrollieren, denn SwissMetNet misst an vielen Stationen stündlich die Lufttemperatur auf **5 cm und auf 2 m Höhe** [[8]](https://data.geo.admin.ch/ch.meteoschweiz.ogd-smn/). Der globalen Studie stand das nicht zur Verfügung: Sie musste das Gefälle aus einer Modell-Oberflächentemperatur ableiten, eine feinere vertikale Auflösung sei „not possible using ECMWF data" [[5]](https://doi.org/10.1002/2015GL063078). Laufen Modell und Messung auseinander, entscheidet das nebenbei, welcher der beiden Antworten man trauen kann.

Der naheliegende Vergleich wäre, die 490 Startplätze den Stationen gegenüberzustellen. **Er wäre wertlos**, weil Stationen tief und Startplätze hoch liegen — man würde vor allem den Höhenunterschied messen. Wir haben deshalb die **Modelldaten an den Stationskoordinaten** geholt und Stunde für Stunde gegen die Messung derselben Station gestellt: **74 Stationen, 40'711 gepaarte Stunden**, gleicher Ort, gleiche Stunde.

| gepaarter Vergleich | Median | p90 | Maximum |
|---|---|---|---|
| **gemessen** (5 cm → 2 m) | **2,92** | 5,18 | 9,95 |
| **Modell** (Oberfläche → 2 m) | **1,00** | 2,65 | 6,25 |

**Das Modell liegt in 86,5 % der gepaarten Stunden unter der Messung** (95-%-Intervall nach Wilson: 86,2 bis 86,8 %), die Korrelation beträgt nur r = 0,42. An denselben Orten überschreiten die Messwerte die 4-K/m-Schwelle in **26,13 %** der Stunden, das Modell nur in **1,85 %**.

<figure class="fig-wide">
  <p class="fig-kicker">74 Stationen · 40'711 gepaarte Stunden · gleicher Ort, gleiche Stunde</p>
  <p class="fig-titel">Fast jede Station misst mehr, als das Modell rechnet</p>
  <img src="/wetterkunde/staubteufel-modell-messung.svg" alt="Streudiagramm: Für jede der 74 SwissMetNet-Stationen ist der gemessene Bodengradient gegen den Modellwert aufgetragen. 71 der 74 Punkte liegen oberhalb der Winkelhalbierenden, die Messung ist also höher als das Modell. Sion liegt mit 6,44 gegen 1,40 K/m am weitesten davon entfernt." width="820" height="700" loading="lazy" decoding="async">
  <figcaption>Ein Punkt ist eine Station; die Achsen zeigen den Median aller gepaarten Stunden. Läge das Modell richtig, streuten die Punkte um die gestrichelte Linie.</figcaption>
</figure>

Ein Definitionsartefakt ist das nicht. Das Modell rechnet von der Oberfläche bis 2 m, die Messung erst ab 5 cm — der steilste Teil steckt ganz unten, das Modell erfasst ihn mit, die Messung nicht. Der Unterschied müsste den Modellwert also **grösser** machen, nicht kleiner. Gefunden haben wir das Gegenteil, der Befund ist damit eher konservativ. Der plausible, von uns nicht bewiesene Grund: Die Oberflächentemperatur einer 1-km-Zelle ist ein Flächenmittel über Wald, Wiese, Fels und Siedlung, der 5-cm-Fühler steht über einer konkreten, kurzgrasigen Fläche.

Der Fehler hängt nicht an der Höhe — in allen vier Stationsbändern zwischen 0 und 2500 m unterschätzt das Modell um 1,5 bis 2,3 K/m. Er ist aber **kein gleichmässiger Offset**: In Sion misst die Station im Median 6,44 K/m, das Modell sieht 1,40; in Zürich/Affoltern, Genf und Luzern stimmen beide praktisch überein. Der Fehler tritt also genau dort auf, wo es interessant wird — an den trockenen, stark eingestrahlten Standorten. **Das Kriterium aus der Wüstenliteratur stützt sich in der Schweiz damit auf eine Modellgrösse, die ausgerechnet an den relevanten Orten zu niedrig ist.**

### Wie belastbar ist dieser Befund?

Der Höhenwiderspruch könnte auch ein Regionseffekt sein: Tiefe Startplätze liegen im Mittelland, im Tessin, im Wallis und im Jura, hohe im inneralpinen Raum. Wir haben die Frage deshalb noch einmal **innerhalb** jeder Region gestellt, die Startplätze unter 1500 m *und* über 2000 m hat. Neun erfüllen das, und in **9 von 9 fällt die Pilotenregel mit der Höhe**, während das Forschungskriterium in 7 von 9 steigt. Das Muster hält, wenn man die Geografie konstant hält.

**Und die Parameterwahl selbst?** Wir haben die Auswertung mit variierten Parametern gegengerechnet. Beim Wind rechnet die Pilotenregel mit der belegten Obergrenze von 7 m/s [[5]](https://doi.org/10.1002/2015GL063078); mit einer strengeren 5-m/s-Variante ändert sich am Höhenverlauf praktisch nichts. Und gibt man dem Forschungskriterium die Bedingung zurück, die ihm in der Wüste selbstverständlich war — trockener Boden —, bricht sein Höhenanstieg im obersten Band um den Faktor fünf ein: von 13,4 auf 2,6 % der Stunden. Der Widerspruch der beiden Listen hängt also nicht an einer falsch gesetzten Schwelle, sondern zum grössten Teil an genau der Boden-Zutat, die dem Forschungskriterium fehlt.

Zwei Dinge gehören noch offengelegt. **Vier Startplätze sind ausgeschlossen**, weil das Modellgitter sie um mehr als 200 m falsch verortet (einer stand auf 514 m statt 1700 m) — ausgewertet sind 490 von 494. Und **der absolute Wert von Kriterium B ist unsicher**: Er hängt an einer geschätzten Grösse und schwankt je nach Geländerauigkeit um fast den **Faktor 3**; Richtung und Höhenwiderspruch bleiben über alle Varianten bestehen, und die Messwerte hängen von dieser Annahme gar nicht ab.

---

## Was du am Startplatz tust

Das hier stammt nicht von uns, sondern von den Verbänden: aus der „Dust Devil Info" des DHV [[1]](https://www.dhv.de/media/seiten/07_wetter/Wetterwissen/DustDevils/Dust_Devil_Info_7_2020.pdf) und aus der Wetterkunde im *Swiss Glider* [[11]](https://www.shv-fsvl.ch/mitgliederservice/swiss-glider/).

### Vor dem Start

Nicht eingehängt warten — sobald der Schirm sortiert ist, gehören die **Bremsgriffe in die Hände**. Am Schwyberg fehlte genau dieser Handgriff. An heissen, windschwachen Tagen zwischen 11 und 16 Uhr die Umgebung dauernd absuchen, nicht nur die Windfahne. Und reden: Meldungen anderer Piloten vom Vortag oder aus der Nachbarregion sind ein ernstzunehmendes Signal.

### Anzeichen, bevor du ihn siehst

Besonders wichtig hier, wo der Staub meistens fehlt:

- Die Windgeschwindigkeit wird **unregelmässig**; unerwartete Seiten- oder Rückenwindböen
- **Helles Rauschen in Bäumen**, ein zischendes Geräusch durch die Reibung am Boden; Büsche und Bäume werden regelrecht „geschüttelt"
- **Grasspiralen am Boden** und Dinge in der Luft, die dort nicht hingehören: Gras, Blätter, Packsäcke
- **„Flirren" der Luft** über trockenen Flächen — das Zeichen für die überhitzte Bodenschicht
- Piloten in Bodennähe fliegen in stärkstes Steigen ein oder werden ohne eigenes Zutun zur Seite gedreht
- **Wurde heute schon einer gesichtet, kommen mit hoher Wahrscheinlichkeit weitere**

### Wenn einer kommt

Meist ist es sicherer, sich **nicht auszuhängen**, sondern sich sofort auf den Schirm zu werfen, die Eintrittskante zusammenzuraffen und mit dem Körper zu bedecken — ob der Schirm Schaden nimmt, ist in diesem Moment egal. **Nie an den Leinen zur „Tulpe" raffen**: Erfasst ihn der Wirbel, wirst du mitgerissen. Als Helfer sofort laut rufen („Dusty! von links / rechts / hinten") und mit anpacken, aber nicht in die Leinen greifen. Und **einen leeren Schirm nie aus der Luft holen wollen** — es sind zwei Fälle bekannt, in denen Piloten den Schirm an den Tragegurten festhielten, in die Höhe gerissen wurden und tödlich abstürzten [[1]](https://www.dhv.de/media/seiten/07_wetter/Wetterwissen/DustDevils/Dust_Devil_Info_7_2020.pdf).

### Im Flug und bei der Landung

Deutlich mehr Hangabstand, sichtbare Wirbel grossräumig umfliegen — „sie können Haken schlagen wie ein Hase, eine eindeutige Zugrichtung ist oft nicht gegeben". Und: **„Siehst Du einen Dusty auf dem geplanten Landeplatz, ist das nicht mehr Dein Landeplatz."** Ausweichlandeplatz suchen, auch einen deutlich schlechteren. Nach der Landung sofort aushängen — die Gefahr geht vom Boden aus [[1]](https://www.dhv.de/media/seiten/07_wetter/Wetterwissen/DustDevils/Dust_Devil_Info_7_2020.pdf).

---

## Fazit: was du als Pilot mitnimmst

Alles Folgende stützt sich auf **einen Sommer**: 490 Startplätze, 69 Tage, dazu 74 Messstationen. Es sind keine Aussagen über Dust Devils allgemein, sondern das, was sich aus diesen Daten für Schweizer Verhältnisse ableiten lässt.

- **Die Karte kippt nach unten, nicht nach oben.** Gerechnet über 490 Startplätze erfüllten unter 800 m rund **20 %** der Tagesstunden alle Bedingungen, über 1600 m rund **2 %**. Der Ort, an dem du damit rechnen musst, ist die Landewiese im Talgrund und der abgeerntete Acker — nicht der Grat, auf dem es nach Wüste aussieht.
- **Der Abendflug ist ein anderer Tag als der Mittagsflug.** Gemessen an 74 Stationen liegt der Anteil steiler Bodenschichten um 13 Uhr bei **37,6 %**, um 17 Uhr bei **15,0 %**, um 18 Uhr bei **6,0 %**. Zwischen 13 und 17 Uhr fällt die Gelegenheit also auf weniger als die Hälfte, bis 18 Uhr auf ein Sechstel — und zwar ohne dass du auf irgendetwas verzichten musst. Wer das Zeitfenster wählen kann, hat damit den grössten Hebel überhaupt in der Hand.
- **Das eigentliche Vorzeichen ist der trockene Boden, nicht die Sonne.** Von den vier Bedingungen der Pilotenregel war schwacher Wind an **98 %** aller Tagesstunden erfüllt und starke Einstrahlung an **46 %** — trockener Boden nur an **13 %**. Sonne und Windstille hast du an fast jedem Schönwettertag; was den Dusty-Tag ausmacht, sind die Wochen ohne Regen davor.
- **Im Wallis ist es schlimmer, als jede Prognose zeigt.** Im gepaarten Vergleich rechnete das Modell die Bodenschicht in **86,5 %** der Stunden zu flach, in Sion um das **4,6-fache**. Genau dort, wo es trocken und stark eingestrahlt ist, ist die Modellzahl zu harmlos — verlass dich in solchen Regionen auf das, was du siehst, nicht auf einen Wert aus der App.
- **Der fehlende Staub ist keine Entwarnung.** Unsere Messwerte zeigen die Bodenschicht an **26 %** der Stunden über der 4-K/m-Schwelle, gesehen wird bei uns fast nichts davon — über Gras dreht derselbe Wirbel unsichtbar. Am Schwyberg kam er von hinten über eine grüne Alpweide.

**Und was das alles nicht heisst.** Höhe ist kein Freibrief: Über 2000 m steht keine Station mit 5-cm-Fühler, wir konnten dort schlicht nichts prüfen — die Aussage „oben ist es harmloser" gilt für die Pilotenregel, nicht für die Wirklichkeit. Die globale Studie hält sogar fest, dass Dust-Devil-Maxima oft in Gebirgsregionen liegen [[5]](https://doi.org/10.1002/2015GL063078). Ein Sommer ist keine Klimatologie. Und wir haben **keinen einzigen Dust Devil nachgewiesen**; wir haben gezählt, wie oft die Zutaten beisammen waren.

### Und warum die Pilotenregel und nicht das Forschungskriterium?

Weil die Auswertung die beiden gegeneinander laufen liess — und das Forschungskriterium in dieser direkten Übertragung auf die Schweiz durchgefallen ist. Das Forschungskriterium hängt an einer einzigen Grösse, dem Temperatursprung über dem Boden. Diese Grösse haben wir gegen 40'711 gemessene Stunden gehalten — und das Modell, aus dem sie stammt, liegt an 86,5 % der Stunden zu tief. Es sammelt seine Treffer damit fast ausschliesslich dort, wo wir nicht nachmessen konnten (Fels über 2000 m), und schweigt in den Tälern, wo die Messung Alarm schlägt. Die Pilotenregel kommt ohne diese Grösse aus und prüft zusätzlich, ob überhaupt trockener, loser Boden da ist — die Bedingung, die dem Forschungskriterium ganz fehlt und die in der Schweiz den Unterschied macht.

Dass die Studie deshalb schlecht wäre, folgt daraus nicht: Sie ist für Wüsten gebaut, ihre Schwellen stammen aus Südmarokko, und dort ist trockener, loser Boden selbstverständlich. Nur eben nicht bei uns.

**Trockener Sommer, blauer Himmel, kaum Wind, Mittagszeit? Bremsgriffe früh in die Hände.**

---

## Grenzen dieser Auswertung

1. **Die Messung kann den Hochgebirgsbefund nicht prüfen.** Von den 74 Stationen mit 5-cm-Fühler liegt **keine über 2000 m**. Ob das Modell dort oben recht hat, ist offen — wir haben es nicht widerlegt, wir konnten es nicht testen.
2. **Die Pilotenregel ist unvollständig gerechnet.** Von ihren fünf Bedingungen stecken **vier** in unserer Auswertung; die fünfte — Temperaturrückgang über 0,7 °C/100 m — braucht Daten auf mehreren Druckflächen, die für nur rund 12 der 69 Tage vorliegen. Alle A-Werte in diesem Artikel sind deshalb eher zu hoch als zu tief.
3. **Die Zahlenschwellen der Pilotenregel sind unsere Wahl.** Der DHV nennt ausser beim Temperaturgradienten keine Zahlen [[1]](https://www.dhv.de/media/seiten/07_wetter/Wetterwissen/DustDevils/Dust_Devil_Info_7_2020.pdf); 700 W/m², 0,10 m³/m³ und 40 % haben wir aus den Perzentilen unserer Daten gesetzt, die Windgrenze von 7 m/s (25 km/h) übernimmt die belegte Obergrenze der Fachliteratur [[5]](https://doi.org/10.1002/2015GL063078). Andere Schwellen ergäben andere Prozentwerte — belastbar ist der Vergleich der beiden Listen und die Richtung, nicht die Kommastelle.
4. **Messstationen sind keine Startplätze.** SwissMetNet steht auf Flugplätzen und in Talböden; die Übertragung des Modellfehlers auf Startplätze ist eine Annahme.
5. **Der Modellfehler ist beschrieben, nicht erklärt.** Die 1-km-Mittelung als Ursache ist plausibel und unbelegt.
6. **Stundenmittel glätten alles weg, und ein Sommer ist keine Klimatologie.** Ein Wirbel lebt unter einer Minute — **wir haben keinen einzigen Dust Devil nachgewiesen**, wir zählen Gunstbedingungen. Und 69 Tage im Jahr 2026 sind keine Statistik; ein nasser Sommer sähe anders aus.
7. **Zum Trend sagen wir nichts.** Der SHV hält fest, dass Dust Devils durch den Klimawandel häufiger werden [[11]](https://www.shv-fsvl.ch/mitgliederservice/swiss-glider/). Plausibel — **prüfen lässt es sich mit einem Sommer nicht.** Dafür bräuchte es dieselbe Rechnung über zwanzig Jahre.

## Häufige Fragen

**Was ist ein Dust Devil?**
Ein bodennaher, schnell drehender Luftwirbel mit senkrechter Achse, angetrieben allein von einem stark überhitzten Boden. Auf Deutsch Staubteufel oder Heuteufel, meteorologisch Kleintrombe. In Mitteleuropa meist kürzer als eine Minute und selten höher als 100 m [[2]](https://www.dhv.de/media/jahre/2024/07_wetter/Wetterwissen/DHVmagazin_Artikel/Thermik/19_2014_186_dust_devils.pdf).

**Woran erkenne ich einen Dusty-Tag?**
An fünf Grössen, die zusammenkommen müssen: viel Sonne, trockener Boden, trockene Luft, schwacher Wind und eine stark überhitzte Bodenschicht. Am kritischsten ist 12 bis 16 Uhr mit einem Maximum um 13 Uhr, am ehesten in tiefen, trockenen Lagen.

**Ab welcher Windstärke entstehen keine Dust Devils mehr?**
Die Fachliteratur nennt rund **7 m/s (25 km/h)** Umgebungswind als praktische Obergrenze [[5]](https://doi.org/10.1002/2015GL063078); darüber wird der Wirbel meist abgeschert, bevor er sich aufbaut. Umgekehrt ist Windstille nicht der sicherste Zustand: Die anfängliche Drehung stammt oft von einem Windstoss oder aus leichtem Lee. Kritisch ist schwacher Wind **ohne klare Richtung**.

**Gibt es in der Schweiz überhaupt Dust Devils?**
Ja — und sie verletzen Menschen. Am 2. Juli 2025 wurde ein erfahrener Pilot am Schwyberg (FR) auf einem grasbewachsenen Startplatz von einem unsichtbaren Dust Devil erfasst und schwer verletzt [[12]](https://www.shv-fsvl.ch/mitgliederservice/swiss-glider/). Unsere Messauswertung zeigt: An 26 % der ausgewerteten Messstunden war die Bodenschicht steiler als 4 K/m, am ausgeprägtesten im Rhonetal und im Flachland. Sichtbar wird ein Wirbel aber nur über Sand, Kies oder abgeerntetem Feld.

**Nehmen Dust Devils in der Schweiz zu?**
Der SHV geht davon aus: längere Hitzeperioden und trockenere Böden begünstigen sie [[11]](https://www.shv-fsvl.ch/mitgliederservice/swiss-glider/). Unsere Auswertung kann das weder bestätigen noch widerlegen — sie umfasst einen einzigen Sommer.

**Warum ist ein Dust Devil für Gleitschirmflieger gefährlich?**
Weil er dreht. Auf der einen Seite deines Schirms läuft die Luft mit dir, auf der anderen gegen dich — in einer idealisierten Modellrechnung rund 69 km/h Unterschied über 10 Meter Spannweite. Die Folge ist oft ein massiver Klapper in Bodennähe [[1]](https://www.dhv.de/media/seiten/07_wetter/Wetterwissen/DustDevils/Dust_Devil_Info_7_2020.pdf).

**Was mache ich, wenn einer auf den Startplatz zukommt?**
Nicht aushängen, sondern sofort auf den Schirm werfen, die Eintrittskante zusammenraffen und mit dem Körper bedecken. Niemals den Schirm an den Leinen raffen und niemals einen leeren Schirm an den Tragegurten festhalten [[1]](https://www.dhv.de/media/seiten/07_wetter/Wetterwissen/DustDevils/Dust_Devil_Info_7_2020.pdf).

## Quellen und Reproduzierbarkeit

- **[1]** DHV — Sicherheit und Technik: *Dust Devil Info*, Juli 2020, von Volker Schwanitz, Karl Slezak und Lucian Haas. [PDF, dhv.de](https://www.dhv.de/media/seiten/07_wetter/Wetterwissen/DustDevils/Dust_Devil_Info_7_2020.pdf)
- **[2]** DHV-info 186 (2014), Volker Schwanitz: *Dust-Devils*, S. 68–69. [PDF, dhv.de](https://www.dhv.de/media/jahre/2024/07_wetter/Wetterwissen/DHVmagazin_Artikel/Thermik/19_2014_186_dust_devils.pdf)
- **[3]** Deutscher Wetterdienst, Wetterlexikon: *Staubteufel*. [dwd.de](https://www.dwd.de/DE/service/lexikon/Functions/glossar.html?lv2=102248&lv3=102604)
- **[4]** Schweizer Sturmarchiv: *Tornados* — Abgrenzung zu Kleintromben. [sturmarchiv.ch](https://www.sturmarchiv.ch/index.php/Tornados)
- **[5]** Jemmett-Smith, B. C., Marsham, J. H., Knippertz, P. & Gilkeson, C. A. (2015): *Quantifying global dust devil occurrence from meteorological analyses.* Geophysical Research Letters **42**(4), 1275–1282. [doi.org/10.1002/2015GL063078](https://doi.org/10.1002/2015GL063078) — die dort geprüften Schwellen stammen aus Oke et al. (2007) / Ryan (1972) für 4 K/m und die 7-m/s-Windobergrenze sowie aus Ansmann et al. (2009, SAMUM-Kampagne Südmarokko) für 8,5 und 10 K/m. Die Studie berechnet globales *Potenzial* (günstige Stunden), keine beobachteten Einzelereignisse
- **[6]** Giersch, S. & Raasch, S. (2023): *How Do Dust Devil-Like Vortices Depend on Model Resolution?* Boundary-Layer Meteorology **187**, 703–742. [doi.org/10.1007/s10546-023-00792-3](https://doi.org/10.1007/s10546-023-00792-3)
- **[7]** Jackson, B. (2019): *On the Relationship between Dust Devil Radii and Heights.* [arXiv:1910.14135](https://arxiv.org/abs/1910.14135) — enthält die Herleitung nach Rennó, Burkett & Larkin (1998)
- **[8]** MeteoSchweiz, Open Government Data: SwissMetNet-Stundenwerte. [data.geo.admin.ch](https://data.geo.admin.ch/ch.meteoschweiz.ogd-smn/)
- **[9]** Schweizer Sturmarchiv: *Staubteufel Schüpfheim, 30.05.2012* — Sichtung auf einem Sandplatz, mit Fotos und Video. [sturmarchiv.ch](https://www.sturmarchiv.ch/index.php/20120530_01_Staubteufel_Sch%C3%BCpfheim)
- **[10]** Lucian Haas, lu-glidz (2018): *Meteowissen: Dust Devil.* [lu-glidz.blogspot.com](https://lu-glidz.blogspot.com/2018/09/meteowissen-dust-devil.html)
- **[11]** Roger Oechslin, Meteoverantwortlicher SHV: *Tückische Teufel — „Dust Devils" erkennen und einschätzen.* Swiss Glider Nr. 4, Juli/August 2026, S. 22–27. Für SHV-Mitglieder online: [shv-fsvl.ch](https://www.shv-fsvl.ch/mitgliederservice/swiss-glider/)
- **[12]** SHV-Arbeitsgruppe Human Factors: *My Air Lesson — Plötzlich im Strudel.* Interview mit Beat Zahno zum Unfall am Schwyberg vom 2. Juli 2025. Swiss Glider Nr. 4, Juli/August 2026, S. 18–21: [shv-fsvl.ch](https://www.shv-fsvl.ch/mitgliederservice/swiss-glider/)

**Nachrechnen:** Alle Zahlen stammen aus vier Skripten, die Datenabruf und Auswertung vollständig reproduzieren — Modellabruf für die 494 Startplätze, Auswertung von Pilotenregel und Forschungskriterium mit Sensitivitätsrechnung und Höhenfilter, Auswertung der gemessenen Bodengefälle an den SwissMetNet-Stationen und der gepaarte Vergleich Modell gegen Messung. Konfidenzintervalle sind Wilson-Score-Intervalle zum Niveau 95 %, auf Stundenebene gerechnet — die zeitliche Abhängigkeit benachbarter Stunden ist darin nicht berücksichtigt, die Intervalle sind also eher zu schmal. Skripte und aggregierte Daten geben wir auf Anfrage heraus. Eine frühere Fassung verglich den Modell-Trefferanteil an den Startplätzen direkt mit dem Mess-Trefferanteil an den Stationen — unzulässig, weil beide Stichproben verschieden hoch liegen. Der gepaarte Vergleich ersetzt ihn; der Befund fällt sogar deutlicher aus. Der archivierte Modell-Datensatz stammt aus dem Abruf vom 17.08.2026 über die Historical-Forecast-API (fester Datumsbereich 28.05.–04.08.); die Windgrenze der Pilotenregel wurde dabei auf den belegten Literaturwert von 7 m/s umgestellt. Ein fünftes Skript rechnet die Auswertung mit variierten Parametern nach: Richtung und Grössenverhältnisse aller Befunde reproduzieren sich, die absoluten Prozentwerte verschieben sich leicht, weil der Modell-Archivstand der Abruf-API nicht bitgenau stabil ist.

## Wie Wingcast dich dabei unterstützt

Ehrlich gesagt: **Wingcast kann dir keinen Dust Devil vorhersagen.** Niemand kann das. Ein Wirbel von 20 m Durchmesser und 40 Sekunden Lebensdauer liegt um Grössenordnungen unter dem, was ein Vorhersagemodell auflöst.

Was ein Wetterprodukt leisten kann, ist die Stufe davor: **auszurechnen, ob heute so ein Tag ist.** Starke Einstrahlung, trockener Boden, trockene Luft, schwacher Wind, steile Bodenschicht — das sind Grössen, die in den Daten stehen, und Wingcast wertet sie für jeden Schweizer Startplatz täglich aus.

Die Auswertung zeigt aber auch, wie vorsichtig man damit sein muss. Ein etabliertes Kriterium aus der Fachliteratur zeigt in der Schweiz auf **sonnenbeschienenen Hochgebirgsfels, wo es nichts aufzuwirbeln gibt**. Die Faustregel, die Piloten am Startplatz benutzen, trifft es besser — und das bestätigen die Messwerte. Eine Zahl ist nicht deshalb richtig, weil sie aus einem Modell kommt.

Deshalb bleibt es bei dem, was wir überall sagen: **Physik rechnet, du entscheidest.** Die Daten sagen dir, ob du heute besonders aufmerksam sein solltest. Ob der Wirbel gerade auf deinen Startplatz zuläuft, siehst du am Rauschen in den Bäumen, an der Windfahne, am Gras in der Luft — und an sonst nichts.

→ [Wie eine Böenfront gemessen aussieht — und was das Modell dazu sagte](/wetterkunde/boeenfront)
→ [Alle Wetterkunde-Themen](/wetterkunde)
→ [Wingcast kostenlos öffnen und deinen Spot prüfen](https://app.wingcast.ch/?utm_source=blog&utm_medium=wetterkunde&utm_campaign=staubteufel)

*Stand: 17. August 2026 · Autor: Maurin, Founder & Pilot bei Wingcast. Dieser Text ist Wetterkunde, keine Flugfreigabe. Die Bedingungen prüfst und entscheidest du selbst.*
