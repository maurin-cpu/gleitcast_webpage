---
titel: "Föhn beim Gleitschirmfliegen: warum 4 hPa nicht reichen und was 20 Föhntäler messen"
slug: foehn
ziel_url: /wetterkunde/foehn
ziel_keyword: "föhn erkennen gleitschirm"
neben_keywords:
  - "föhn gleitschirm gefahr"
  - "druckdifferenz föhn"
  - "föhndiagramm alpen"
  - "4 hpa regel föhn"
  - "föhntäler schweiz"
  - "was ist föhn"
typ: pillar
hub: /wetterkunde
sprache: de-CH
status: published
veroeffentlicht: 2026-10-11
autor: "Wingcast"
stand: 2026-10-11
meta_title: "Föhn erkennen beim Gleitschirmfliegen: 20 Täler gemessen"
meta_description: "Reichen 4 hPa für Föhn? Wir haben den Föhnindex an 20 Schweizer Föhntälern über sechs Jahre ausgewertet und ICON-CH1/CH2 gegen die Messung geprüft."
schema:
  - Article
  - FAQPage
  - BreadcrumbList
  - VideoObject   # ⬜ wird vom Loader noch nicht erzeugt, siehe Notizen unten
video: /wetterkunde/foehn-querschnitt.mp4   # Remotion FoehnBlog 16:9, deutsch, 78,5 s, Webfassung 720p crf 30 (3,4 MB), Poster foehn-querschnitt-poster.jpg
daten:
  - 2-ausfuehrung/wetterkunde/belege/foehn/2026-10-09_foehn_taeler.json      # Messung, Modell, Statistik
  - 2-ausfuehrung/wetterkunde/belege/foehn/2026-08-27_foehn_vorschau-daten.json
skripte:
  - 2-ausfuehrung/wetterkunde/belege/foehn/foehn_taeler.py
  - 2-ausfuehrung/wetterkunde/belege/foehn/foehn_auswertung.py
# Aufbau folgt published/boeenfront.md: Lead · Theorie · Gefahr · Fall · Kernbefund ·
# Prognose · Praxis · Grenzen · FAQ · Quellen · Wingcast. Fassung 1 (Juli 2026) liegt in Git.
---

# Föhn beim Gleitschirmfliegen: warum 4 hPa nicht reichen und was 20 Föhntäler messen

> **Kurz gesagt:** Föhn ist ein warmer, trockener Fallwind im Lee der Alpen. Für Piloten ist er gefährlich, weil er über dem Tal oft schon weht, während es am Startplatz noch ruhig ist. Liegt im Tal ein Kaltluftsee, strömt der Föhn darüber hinweg und kann ohne Ankündigung bis zum Boden durchbrechen. Wir haben den Föhnindex von MeteoSchweiz an 20 Föhntälern für 2020 bis 2025 ausgewertet. Die Faustregel „ab 4 hPa Druckunterschied Föhn“ hält dem nicht stand. Bei 4 bis 6 hPa zwischen Lugano und Zürich wehte in Altdorf nur in **10 Prozent** der Zeit Föhn am Talboden. Der Druckunterschied zeigt also, dass eine Föhnlage möglich ist, aber nicht, ob der Föhn in deinem Tal ankommt. Auch die Modelle ICON-CH1 und ICON-CH2 zeigen ihn nicht zuverlässig. Beim Föhnfall vom August 2026 trafen sie die Windrichtung fast immer, die Böen lagen aber im Median knapp 8 km/h zu tief. Achte in der Prognose deshalb auf Wind aus der Föhnrichtung und trockene Luft, auch wenn der Wind schwach aussieht.

---

## Was Föhn ist

Föhn ist ein **warmer und vor allem trockener Fallwind** auf der strömungsabgewandten Seite eines Gebirges. Er entsteht überall dort, wo kräftige Winde eine Gebirgskette überströmen, und erreicht häufig Sturmstärke [[1]](https://www.meteoschweiz.admin.ch/wetter/wetter-und-klima-von-a-bis-z/foehn.html). Auf der Alpennordseite heisst er nach seiner Herkunft **Südföhn**, auf der Alpensüdseite **Nordföhn**. Beim Südföhn ist der Luftdruck südlich der Alpen höher als nördlich davon, und die Luft strömt quer über die Alpen nach Norden. Beim Nordföhn ist es umgekehrt. Wo die Hoch- und Tiefdruckgebiete dabei liegen, ist von Lage zu Lage verschieden [[1]](https://www.meteoschweiz.admin.ch/wetter/wetter-und-klima-von-a-bis-z/foehn.html).

### Wie Föhn entsteht: der Weg der Luft über den Kamm

Am besten lässt sich Föhn als Reise einer Luftmasse erzählen, hier am Beispiel Südföhn:

1. **Luv:** Die Luft wird an der Alpensüdseite gehoben. Ist sie feucht, bilden sich Wolken und es regnet. Vom Norden her sieht man diese Wolkenwand am Kamm als **Föhnmauer** [[1]](https://www.meteoschweiz.admin.ch/wetter/wetter-und-klima-von-a-bis-z/foehn.html).
2. **Kamm:** Die Strömung wird über und durch die Pässe gedrückt. Ein anschauliches Bild ist die **hydraulische Föhntheorie**: Wie Wasser über ein Wehr schiesst die bodennahe Föhnluft über den Kamm und kann im Lee in einem Sprung wieder abbremsen [[2]](https://www.meteoschweiz.admin.ch/dam/jcr:d5bead26-9bd3-4b8b-a88c-6f08e4de8e3a/Steinacker_Foehn_Promet_32_1-2_de.pdf).
3. **Lee:** Die Luft sinkt ab und erwärmt sich dabei. Die Wolken lösen sich auf, es entsteht das **Föhnfenster** mit sehr klarer Luft [[1]](https://www.meteoschweiz.admin.ch/wetter/wetter-und-klima-von-a-bis-z/foehn.html).
4. **Wellen:** Hinter dem Kamm schwingt die Strömung auf und ab. Auf den Wellenbergen bilden sich oft linsenförmige Wolken, die **Lenticularis** oder „Föhnfische“ [[1]](https://www.meteoschweiz.admin.ch/wetter/wetter-und-klima-von-a-bis-z/foehn.html).
5. **Rotoren:** In Bodennähe unter den Wellen rollt sich die Luft zu Walzen auf. Der DWD nennt diese **Rotoren** eine häufige Begleiterscheinung der Leewellen, deren Auf- und Abwinde für Gleitschirme schwere Turbulenzen verursachen können [[3]](https://www.dwd.de/DE/fachnutzer/luftfahrt/download/produkte/runwaymap/04_gefahren_im_gebirge.pdf?__blob=publicationFile&v=4).

<figure class="fig-wide">
  <p class="fig-kicker">Video</p>
  <p class="fig-titel">Die Reise der Föhnluft und was sie für den Flug heisst</p>
  <video src="/wetterkunde/foehn-querschnitt.mp4" poster="/wetterkunde/foehn-querschnitt-poster.jpg" autoplay muted loop playsinline preload="metadata" width="1280" height="720" aria-label="Animierter Querschnitt durch die Alpen bei Südföhn. Erster Teil: Die Luft wird an der Alpensüdseite gehoben und regnet aus, die Wolken bleiben als Föhnmauer am Kamm hängen, eine stabile Schicht drückt die Strömung zusammen, im Lee sinkt die Luft ab und erwärmt sich, schwingt in Wellen mit Föhnfischen und rollt sich darunter zu Rotoren bis in Bodennähe auf. Zweiter Teil: Im Tal liegt ein Kaltluftsee, über den der Föhn hinwegströmt. Ein Gleitschirm startet ruhig im Kaltluftsee, wird an der Obergrenze von der Scherung erfasst, dann bricht der Föhn bis zum Boden durch."></video>
  <figcaption>Südföhn im Querschnitt, Schritt für Schritt: zuerst der Weg der Luft vom Luv bis in die Rotoren, dann Kaltluftsee, Scherung und Durchbruch aus Sicht eines Piloten. Schematisch, nicht massstabsgetreu. Gezeigt ist der klassische Fall mit Niederschlag im Luv.</figcaption>
</figure>

### Warum Föhn nicht in jedem Tal ankommt

Eine zentrale Frage der Föhnforschung war immer, warum die warme, leichte Luft überhaupt ins Tal absteigt und dort die kalte, schwere Luft verdrängt [[1]](https://www.meteoschweiz.admin.ch/wetter/wetter-und-klima-von-a-bis-z/foehn.html). Oft tut sie das nicht. Liegt im Tal ein **Kaltluftsee**, strömt der Föhn zuerst darüber hinweg. Der SHV schreibt: Kaltluftseen werden zunächst vom Föhn überströmt, und der Föhn kann überraschend durchbrechen [[7]](https://www.shv-fsvl.ch/fileadmin/files/redakteure/Allgemein/Sicherheit/Sicherheit/Entscheidungsstrategie_Meteo_V10.pdf).

Ob und wie oft er durchbricht, hängt am Gelände. Für die inneralpinen Föhnstationen fand MeteoSchweiz eine Korrelation von **minus 0,96** zwischen der Föhnhäufigkeit und der Höhendifferenz zum massgebenden Pass: Je tiefer eine Station unter dem Pass liegt, desto seltener erreicht sie der Föhn [[8]](https://www.meteoswiss.admin.ch/dam/jcr:698b5cdf-92cf-491a-8d88-c844113aa8d6/Foehnklimatologie_Altdorf_die_lange_Reihe_1864-2008_und_ihre_Weiterfuehrung_Vergleich_mit_anderen_Stationen_de.pdf). In den föhnreichsten Monaten April und Mai zeigt Altdorf ein Föhnminimum am Vormittag und ein Maximum am Abend [[8]](https://www.meteoswiss.admin.ch/dam/jcr:698b5cdf-92cf-491a-8d88-c844113aa8d6/Foehnklimatologie_Altdorf_die_lange_Reihe_1864-2008_und_ihre_Weiterfuehrung_Vergleich_mit_anderen_Stationen_de.pdf).

### Wie MeteoSchweiz Föhn misst

Der **Föhnindex** wird alle zehn Minuten berechnet und kennt drei Stufen: 0 = kein Föhn, 1 = Föhnmischluft, 2 = Föhn. Für Südföhn ist die Grundvoraussetzung Südwind am Alpenhauptkamm auf dem Gütsch ob Andermatt, dazu kommen an der Talstation Wind, Böen, Richtung, Feuchte und die potentielle Temperatur im Vergleich zum Gütsch [[9]](https://www.meteoschweiz.admin.ch/wetter/wetter-und-klima-von-a-bis-z/foehnindex.html), [[10]](https://www.meteoswiss.admin.ch/dam/jcr:3ed2aec8-0901-417a-acc3-8be11cce440a/Foehnindex_Arbeitsbericht_223_Automatisiertes_Verfahren_zur_Bestimmung_von_Foehn_in_Alpentaelern_de.pdf). Für Nordföhn sind die Kriterien nicht veröffentlicht. **In der veröffentlichten Methode kommt kein Luftdruck vor.** Deshalb lässt sich mit dem Index sauber prüfen, wie gut der Druckunterschied Föhn vorhersagt.

---

## Warum Föhn für Gleitschirme gefährlich ist

Für die Fliegerei zählt beim Föhn die Strömung. Vier Dinge machen ihn gefährlich, und keines davon sieht man vom Startplatz aus zuverlässig.

**Der Wind ist stark.** In den Föhntälern sind Föhnstürme keine Seltenheit, in Altdorf erreichen die heftigsten Windspitzen jedes Jahr 100 bis 140 km/h [[1]](https://www.meteoschweiz.admin.ch/wetter/wetter-und-klima-von-a-bis-z/foehn.html). Das liegt weit über der Geschwindigkeit, die ein Gleitschirm fliegt.

**Im Lee ist es turbulent.** Leewellen und Rotoren erzeugen kräftige Auf- und Abwinde [[3]](https://www.dwd.de/DE/fachnutzer/luftfahrt/download/produkte/runwaymap/04_gefahren_im_gebirge.pdf?__blob=publicationFile&v=4). Die Rotoren reichen bis in Bodennähe, also genau dorthin, wo du startest und landest.

**An der Grenze zur Kaltluft schert es.** Weht der Föhn über einem Kaltluftsee, liegen zwei Luftmassen mit verschiedener Richtung und Geschwindigkeit übereinander. Der DWD beschreibt für solche Kaltluftinseln im Lee kräftige Windscherung [[3]](https://www.dwd.de/DE/fachnutzer/luftfahrt/download/produkte/runwaymap/04_gefahren_im_gebirge.pdf?__blob=publicationFile&v=4). Am Startplatz im Kaltluftsee ist es ruhig, darüber nicht.

**Der Durchbruch kommt ohne Ankündigung.** Bricht der Föhn bis zum Boden durch, wird es innerhalb kurzer Zeit stürmisch. Der SHV beschreibt einen Prüfungstag an der Büelen (NW): weniger als 4 hPa Südüberdruck in der Prognose, kein Wort von Föhn in den Textprognosen, am Startplatz trotzdem ein „sturer, leicht böiger Süd-/Südostwind“. Bei ähnlichen Vorzeichen kam es im selben Jahr zu Unfällen [[11]](https://www.shv-fsvl.ch/fileadmin/files/redakteure/Allgemein/Sicherheit/Sicherheit/Schwer_erkennbare_Foehnlagen.pdf).

Was du am Startplatz spürst, beschreibt deshalb oft nicht die Luft, in die du fliegst.

---

## Der Fall: 26. bis 28. August 2026

Ende August 2026 lag eine Südföhnlage über der Schweiz. Der gemessene Druckunterschied zwischen Lugano und Zürich stieg am Abend des 27. über 7 hPa und erreichte in der Nacht auf den 28. sein Maximum mit **9,1 hPa um 01:00 Uhr**. Auf dem Gütsch wurden in derselben Nacht Böen bis **96 km/h** gemessen. Am Nachmittag des 28. drehte die Lage, am 29. lag der Überdruck auf der Nordseite.

<figure class="fig-wide">
  <p class="fig-kicker">Fall</p>
  <p class="fig-titel">Temperatur, Wind und Druckunterschied</p>
  <img src="/wetterkunde/foehn-temperatur-druck.png" alt="Drei Liniengrafiken 26. bis 29. August 2026: In den Föhnstunden liegt Altdorf bis 7 Grad über Lugano. Im Wind-Panel wehen auf dem Gütsch schon am 26. Böen um 50 bis 64 km/h, in Altdorf springen sie um 2 Uhr nachts am 27. von 14 auf 50 km/h, Spitze 84 km/h am Nachmittag, Gütsch bis 96 km/h. Pfeile zeigen Wind aus Südost während des Föhns. Unten der Druckunterschied Lugano minus Zürich mit Spitze 9,1 hPa." width="1344" height="1216" loading="lazy" decoding="async">
  <figcaption>Quelle: MeteoSchweiz OGD SwissMetNet, Altdorf, Lugano, Zürich-Fluntern, Gütsch · Stundenwerte 26. bis 29.08.2026, Böe = stärkste Sekundenböe der Stunde</figcaption>
</figure>

Auf dem Gütsch am Alpenkamm wehten schon am Nachmittag des 26. August Böen von 45 bis 64 km/h, in Altdorf blieben sie unter 20 km/h. Um 2 Uhr nachts kam der Föhn unten an: Innerhalb einer Stunde sprangen die Böen in Altdorf von 14 auf 50 km/h, der Wind drehte auf Südost. Am Nachmittag des 27. erreichten sie 84 km/h, auf dem Gütsch in der Nacht auf den 28. sogar 96 km/h. Nach dem Föhn, am Nachmittag des 28., drehte der Wind in Altdorf auf Nordwest, mit einer einzelnen Böe von 88 km/h.

### Er kam trocken

Auf der Alpensüdseite fiel an zehn Messstationen von Lugano bis San Bernardino bis Mitternacht vom 27. auf den 28. August praktisch **kein Regen** (höchstens 0,2 mm). Erst danach kamen 10 bis 32 mm. Die ersten beiden Föhntage waren also trockener Föhn. Am 28. August um 04:00 Uhr waren es in Altdorf **29,5 °C bei 36 Prozent Feuchte**, in Lugano zur selben Zeit 22,1 °C bei 89 Prozent.

### Wann der Föhn wo ankam

Für die Auswertung nutzen wir **20 Föhn-Talpunkte**: je einen pro Föhntal, gesetzt auf eine Station mit amtlichem Föhnindex, verteilt über Nordseite, Wallis und Alpensüdseite. Die Tabelle zeigt die 14 Täler der Nordseite und des Wallis. An den sechs Talstationen der Südseite gab es keinen Föhn, wie bei Südföhn zu erwarten.

| Tal (Station, Höhe) | Föhnstunden 26.–29.08. | erste Föhnmeldung | stärkste Böe im Föhn |
|---|---|---|---|
| Reusstal (Altdorf, 438 m) | 26,8 h | 27.08. 01:50 | 84 km/h |
| Glarnerland oben (Elm, 958 m) | 26,3 h | 26.08. 23:50 | 63 km/h |
| St. Galler Rheintal (Vaduz, 457 m) | 24,7 h | 27.08. 12:00 | 82 km/h |
| Oberwallis (Visp, 639 m) | 21,8 h | 26.08. 17:10 | 72 km/h |
| Sarganserland (Bad Ragaz, 497 m) | 20,2 h | 27.08. 01:40 | 73 km/h |
| Davos (1'594 m) | 17,5 h | 27.08. 10:50 | 50 km/h |
| Glarnerland unten (Glarus, 517 m) | 16,5 h | 27.08. 14:30 | 55 km/h |
| Domleschg/Schams (Andeer, 987 m) | 13,7 h | 26.08. 13:30 | 60 km/h |
| Churer Rheintal (Chur, 556 m) | 12,3 h + 10,7 h Mischluft | 27.08. 11:40 | 62 km/h |
| Unterwallis (Evionnaz, 482 m) | 11,7 h | 26.08. 22:50 | 57 km/h |
| Haslital (Meiringen, 589 m) | 8,5 h, nur nachts | 27.08. 19:20 | 86 km/h |
| Rheintal unten (Altenrhein, 398 m) | 2,7 h, nur nachts | 27.08. 23:30 | 75 km/h |
| Mittelwallis (Sion, 482 m) | 0,7 h | 27.08. 18:30 | 35 km/h |
| Chablais (Aigle, 381 m) | kein Föhn |  |  |

<figure class="fig-wide">
  <p class="fig-kicker">Fall</p>
  <p class="fig-titel">Wann der Föhn wo wehte</p>
  <img src="/wetterkunde/foehn-zeitleiste.png" alt="Zeitleiste der Föhnphasen an 14 Talstationen: Andeer und Visp ab dem Nachmittag und Abend des 26. August, die übrigen Täler ab dem 27., Aigle ohne Föhn." width="1344" height="844" loading="lazy" decoding="async">
  <figcaption>Quelle: MeteoSchweiz OGD, Föhnindex wcc006s0 (Stufe 2), 14 Talstationen · 26. bis 28.08.2026, Lokalzeit</figcaption>
</figure>

**Der Föhn kam zuerst inneralpin an**, in Andeer am Nachmittag des 26. und in Visp am frühen Abend, bei höchstens 3,0 hPa Druckunterschied im Flugfenster. **Nachbartäler lagen einen halben Tag auseinander**: Bad Ragaz hatte Föhn ab 01:40 Uhr in der Nacht auf den 27., das knapp zwanzig Kilometer entfernte Chur ab 11:40 Uhr. **Talabwärts wurde er schwächer**, mit 24,7 Stunden in Vaduz und 2,7 in Altenrhein am Bodensee. Elm auf 958 m hatte zehn Stunden mehr Föhn als Glarus auf 517 m.

### Oben Sturm, unten Ruhe

Die Grafik zeigt die stärkste Böe in der Nacht auf den 28. August zwischen 01:00 und 02:00 Uhr, jeweils an einem Talboden und am nächstgelegenen Gipfel:

<figure class="fig-wide">
  <p class="fig-kicker">Fall</p>
  <p class="fig-titel">Tal gegen Gipfel</p>
  <img src="/wetterkunde/foehn-tal-gipfel.png" alt="Hantelgrafik der stärksten Böe zwischen 1 und 2 Uhr am 28. August: Interlaken 16 gegen Jungfraujoch 72, Luzern 16 gegen Pilatus 49, Davos 12 gegen Weissfluhjoch 61, Engelberg 45 gegen Titlis 98, Altdorf 58 gegen Gütsch 93 km/h." width="1344" height="720" loading="lazy" decoding="async">
  <figcaption>Quelle: MeteoSchweiz OGD SwissMetNet, Böenspitze fkl010z1 · 28.08.2026, 01:00 bis 02:00 Uhr</figcaption>
</figure>

In Interlaken und Luzern wehte am Boden kaum Wind, auf dem Pilatus knapp 50 km/h. Auf Starthöhe dazwischen steht keine Station. Wie es dort aussah, lässt sich nur eingrenzen.

---

## Wie viel Druckunterschied braucht Föhn?

**Eine feste Schwelle gibt es nicht.** Bei 4 bis 6 hPa Druckunterschied über die Alpen wehte von 2020 bis 2025 in keinem der 20 Föhntäler in mehr als einem Viertel der Zeit Föhn am Talboden, in Altdorf in 10 Prozent, in Vaduz in 6 und in Glarus in 1 Prozent. Auch ab 10 hPa ist Föhn nicht sicher. Bad Ragaz und Altdorf hatten in rund neun von zehn Messungen Föhn, Andeer und Davos nur in der Hälfte. Umgekehrt fielen in Andeer 39 Prozent aller Föhnstunden in Zeiten mit weniger als 4 hPa, in Davos 33 und in Visp 30 Prozent. Der Druckunterschied zeigt, dass eine Föhnlage möglich ist. Ob der Föhn in deinem Tal den Boden erreicht, zeigt er nicht.

Ein Fall ist eine Anekdote. Deshalb haben wir für alle 20 Talpunkte die Zehnminutenwerte von **2020 bis 2025** ausgewertet und jede Messung einer Druckklasse zugeordnet. Massgebend ist der gemessene Druckunterschied Lugano minus Zürich, für die Nordföhn-Täler umgekehrt. Die Tabelle zeigt, in wie viel Prozent der Zeit am Talboden Föhn wehte (Index 2), und welcher Anteil aller Föhnstunden bei weniger als 4 hPa auftrat.

<figure class="fig-wide">
  <p class="fig-kicker">Statistik</p>
  <p class="fig-titel">Föhn je Druckklasse</p>
  <img src="/wetterkunde/foehn-druckklassen.png" alt="Liniengrafik 2020 bis 2025: Anteil der Zeit mit Föhn am Talboden je Druckklasse. Bei 4 bis 6 hPa Altdorf 9,9 Prozent, ab 10 hPa Bad Ragaz 92,7, Altdorf 87,9, Glarus 53,4, Andeer 49,5, Altenrhein 29,1 Prozent." width="1344" height="774" loading="lazy" decoding="async">
  <figcaption>Quelle: MeteoSchweiz OGD, Föhnindex und Luftdruck QFF Lugano, Zürich-Fluntern · Zehnminutenwerte 2020 bis 2025</figcaption>
</figure>

| Tal (Station) | Seite | Föhnstunden pro Jahr | Föhn bei 4–6 hPa | Föhn ab 10 hPa | Föhnstunden unter 4 hPa |
|---|---|---|---|---|---|
| Reusstal (Altdorf) | Nord, Südföhn | 350 | 10 % | 88 % | 4 % |
| Sarganserland (Bad Ragaz) | Nord, Südföhn | 478 | 19 % | 93 % | 8 % |
| Churer Rheintal (Chur) | Nord, Südföhn | 341 | 14 % | 64 % | 17 % |
| St. Galler Rheintal (Vaduz) | Nord, Südföhn | 282 | 6 % | 84 % | 4 % |
| Rheintal unten (Altenrhein) | Nord, Südföhn | 61 | 0,4 % | 29 % | 3 % |
| Glarnerland oben (Elm) | Nord, Südföhn | 360 | 16 % | 70 % | 10 % |
| Glarnerland unten (Glarus) | Nord, Südföhn | 122 | 1 % | 53 % | 1 % |
| Haslital (Meiringen) | Nord, Südföhn | 184 | 4 % | 65 % | 4 % |
| Domleschg/Schams (Andeer) | Nord, Südföhn | 472 | 21 % | 50 % | 39 % |
| Davos | Nord, Südföhn | 350 | 15 % | 49 % | 33 % |
| Oberwallis (Visp) | Wallis | 477 | 23 % | 55 % | 30 % |
| Mittelwallis (Sion) | Wallis | 61 | 2 % | 21 % | 9 % |
| Unterwallis (Evionnaz) | Wallis | 252 | 8 % | 71 % | 11 % |
| Chablais (Aigle) | Wallis | 71 | 0,1 % | 40 % | 2 % |
| Leventina (Piotta) | Süd, Nordföhn | 827 | 21 % | 48 % | 21 % |
| Blenio (Acquarossa) | Süd, Nordföhn | 619 | 9 % | 73 % | 4 % |
| Maggiatal (Cevio) | Süd, Nordföhn | 393 | 5 % | 54 % | 2 % |
| Magadinoebene (Magadino) | Süd, Nordföhn | 355 | 4 % | 54 % | 1 % |
| Misox unten (Grono) | Süd, Nordföhn | 228 | 3 % | 36 % | 2 % |
| Misox oben (San Bernardino) | Süd, Nordföhn | 382 | 9 % | 13 % | 39 % |

### Was die Tabelle sagt

**Bei 4 bis 6 hPa ist Föhn am Talboden die Ausnahme.** In keinem der 20 Täler wehte in dieser Klasse in mehr als einem Viertel der Zeit Föhn. In Altdorf waren es 10 Prozent, in Vaduz 6, in Glarus 1.

**Auch bei 10 hPa und mehr ist Föhn nicht sicher.** Bad Ragaz und Altdorf hatten bei so grossen Unterschieden in rund neun von zehn Messungen Föhn, Andeer und Davos nur in der Hälfte, Altenrhein in weniger als einem Drittel.

**Inneralpin kommt der Föhn auch ohne 4 hPa.** In Andeer fielen 39 Prozent aller Föhnstunden in Zeiten mit weniger als 4 hPa, in Davos 33, in Visp 30. Fürs Wallis ist die Achse Lugano und Zürich ohnehin die falsche, dort weht der Föhn aus Südost.

**Die Spanne zwischen Nachbartälern ist riesig.** Bad Ragaz hat achtmal so viel Föhn wie Altenrhein, Elm dreimal so viel wie Glarus, Visp achtmal so viel wie Sion.

Damit bestätigt die Messung, was Ausbildner seit Jahren schreiben. Der DHV nennt drei bis vier Hektopascal als übliche Daumenregel und beschreibt im selben Artikel einen Föhntag mit kaum mehr als zwei Hektopascal [[12]](https://www.dhv.de/media/jahre/2024/07_wetter/Wetterwissen/DHVmagazin_Artikel/F%C3%B6hn/1_2023_240_Misstraut_den_Foehndiagrammen.pdf). Ein anderer DHV-Beitrag warnt vor „selbstgestrickten örtlichen Grenzwerten“ [[13]](https://www.dhv.de/media/jahre/2024/07_wetter/Wetterwissen/DHVmagazin_Artikel/F%C3%B6hn/4_2017_204_foehn_ist_nicht_gleich_foehn.pdf), und der SHV nennt Gebiete wie Marbach (LU), in denen bei weit über 4 hPa geflogen wird, ohne dass Föhn durchbricht [[11]](https://www.shv-fsvl.ch/fileadmin/files/redakteure/Allgemein/Sicherheit/Sicherheit/Schwer_erkennbare_Foehnlagen.pdf). Auf keiner Seite von MeteoSchweiz, die wir geprüft haben, steht eine 4-hPa-Schwelle.

Wertlos ist die Zahl trotzdem nicht. Ab 4 hPa wird eine Föhnlage möglich, ab 8 hPa ist Föhn in den grossen Föhntälern häufig. Sie sagt aber nicht, **ob der Föhn in deinem Tal den Boden erreicht, und wann**.

---

## Und was zeigten die Prognosemodelle?

**Die Modelle zeigen die Windrichtung zuverlässig, den Wind aber zu schwach.** Beim Föhnfall vom 26. bis 28. August 2026 zeigten ICON-CH1 und ICON-CH2 an 13 Talstationen in 92 bis 96 Prozent der Föhnstunden Wind aus der richtigen Richtung. Die Böen lagen im Median knapp 8 km/h unter der Messung, die Luft war rund 8 Prozentpunkte zu feucht und knapp 1,5 Grad zu kühl. Verlangt man Föhnrichtung, kräftigen Wind und trockene Luft zusammen, erkannte ICON-CH1 69 und ICON-CH2 65 von 100 Föhnstunden, die Messwerte der Station 90. Liest man nur Richtung und trockene Luft, erkennt man 84 bis 85 von 100 Föhnstunden. Dafür kam in fast jeder zweiten so markierten Stunde der Föhn nicht bis zum Talboden.

Die Modelle kennen keinen Föhnindex. Sie liefern gewöhnliche Wetterwerte: Windrichtung, Mittelwind, Böen, Luftfeuchte und Temperatur. Wir haben diese Werte von **ICON-CH1** (1 km Maschenweite) und **ICON-CH2** (2,1 km) von MeteoSchweiz Stunde für Stunde am Ort der 13 Talstationen abgerufen, an denen Föhn wehte, und neben dieselben Grössen gelegt, die die Station gemessen hat. Ob tatsächlich Föhn wehte, entscheidet der Föhnindex.

### Wie gut stimmen die einzelnen Werte?

Median über die 213 gemessenen Föhnstunden:

| Grösse | gemessen | ICON-CH1 | ICON-CH2 |
|---|---|---|---|
| Wind aus der Föhnrichtung des Tals | 97 % der Stunden | 92 % | 96 % |
| Mittelwind | 24 km/h | 21 km/h | 18 km/h |
| Böe (stärkste der Stunde) | 51 km/h | 41 km/h | 39 km/h |
| Relative Feuchte | 38 % | 47 % | 48 % |
| Temperatur | 28,0 °C | 26,3 °C | 26,1 °C |

**Die Windrichtung stimmt fast immer.** Beide Modelle zeigten in 92 bis 96 Prozent der Föhnstunden Wind aus der richtigen Richtung. **Der Wind ist zu schwach.** Stunde für Stunde lagen die Böen im Modell im Median knapp 8 km/h unter der Messung, der Mittelwind 3 bis 4 km/h. **Die Luft ist zu feucht und zu kühl.** Die Modelle zeigten sie um rund 8 Prozentpunkte feuchter und knapp 1,5 Grad kälter als gemessen.

### Welches Merkmal verrät Föhn in den Prognosedaten?

Föhn am Talboden hinterlässt ein Muster: Wind aus der Föhnrichtung, kräftig und trocken. Wir haben jedes Merkmal einzeln geprüft, zuerst an den Messwerten der Station, dann an den Modellwerten. Die Schwellen (Mittelwind ab 20 km/h oder Böen ab 30 km/h, Feuchte höchstens 60 Prozent) haben wir selbst gewählt.

<figure class="fig-wide">
  <p class="fig-kicker">Prognose</p>
  <p class="fig-titel">Welches Merkmal verrät Föhn?</p>
  <img src="/wetterkunde/foehn-merkmale.png" alt="Zwei Balkengrafiken je Merkmal, für die Messwerte der Station, ICON-CH1 und ICON-CH2. Grau ist nicht der Föhnindex, sondern dieselbe Regel auf die gemessenen Stationswerte angewendet. Treffer, von 100 Föhnstunden laut Föhnindex mit dem Merkmal: Windrichtung 97, 92, 96; kräftiger Wind 95, 72, 69; trockene Luft 97, 91, 87; alle drei zusammen 90, 69, 65. Fehlalarm, von 100 Stunden mit dem Merkmal ohne Föhn: Windrichtung 67, 69, 68; kräftiger Wind 47, 43, 51; trockene Luft 53, 55, 56; alle drei zusammen 27, 25, 29." width="1344" height="1138" loading="lazy" decoding="async">
  <figcaption>Quelle: Messung MeteoSchweiz OGD, 13 Talstationen, der Föhnindex entscheidet, ob Föhn war · Modelle ICON-CH1 und ICON-CH2 über Open-Meteo Historical Forecast · 26. bis 28.08.2026</figcaption>
</figure>

**Einzeln taugt keines der Merkmale.** Wind aus der Föhnrichtung gab es in fast allen Föhnstunden, aber von 100 Stunden mit dieser Richtung waren rund 68 ohne Föhn. **Zusammen funktionieren sie.** In den Messwerten der Station trifft die Kombination 90 von 100 Föhnstunden, und nur 27 von 100 Stunden mit allen drei Merkmalen sind Fehlalarme. In den Modellwerten sind es 69 Treffer bei ICON-CH1 und 65 bei ICON-CH2. Der Verlust kommt fast ganz vom Wind: Die Modelle zeigen den Föhn aus der richtigen Richtung und meist trocken genug, aber zu schwach.

### Stunde für Stunde, Tal für Tal

<figure class="fig-wide">
  <p class="fig-kicker">Prognose</p>
  <p class="fig-titel">Messung gegen ICON-CH1 und ICON-CH2</p>
  <img src="/wetterkunde/foehn-modelle-taeler.png" alt="Je Tal drei Zeitbalken für die gemessenen Föhnstunden und die Föhnstunden in ICON-CH1 und ICON-CH2. ICON-CH1 zeigte 148 von 213 gemessenen Föhnstunden, ICON-CH2 139." width="1344" height="1286" loading="lazy" decoding="async">
  <figcaption>Quelle: Messung: MeteoSchweiz Föhnindex, Stunde = Föhn in mind. 3 von 6 Zehnminutenwerten · Modelle: ICON-CH1 und ICON-CH2 (MeteoSchweiz) über Open-Meteo Historical Forecast · 26. bis 28.08.2026</figcaption>
</figure>

Die Grafik zeigt alle drei Merkmale zusammen. ICON-CH1 zeigte sie in 148 von 213 gemessenen Föhnstunden, ICON-CH2 in 139. In Vaduz traf ICON-CH1 24 und ICON-CH2 alle 25 Föhnstunden, in Davos ICON-CH1 13 und ICON-CH2 14 von 17.

In Altdorf zeigte am Morgen des 27. August (02 bis 10 Uhr) keines der beiden Modelle eine einzige Föhnstunde. Auch in Visp am Abend des 26. August (17 bis 24 Uhr) fehlte der Föhn in beiden Modellen, in Elm in der Nacht auf den 27. zeigte nur ICON-CH2 eine Stunde. Von den 9 Föhnstunden in Meiringen zeigte ICON-CH1 4, ICON-CH2 eine.

Umgekehrt zeigte ICON-CH2 in Chur Föhn ab 23 Uhr am 26. August, gemessen wehte er dort erst ab dem späten Vormittag des 27., also 17 Stunden zu viel. Beide Modelle zeigten in Bad Ragaz Föhn in der Nacht und am Morgen des 28., ICON-CH1 in Evionnaz am Morgen des 27. Insgesamt waren es 49 Modellstunden bei ICON-CH1 und 57 bei ICON-CH2 ohne gemessenen Föhn.

<figure class="fig-wide">
  <p class="fig-kicker">Prognose</p>
  <p class="fig-titel">Altdorf: Messung gegen beide Modelle</p>
  <img src="/wetterkunde/foehn-altdorf-modelle.png" alt="Liniengrafik Altdorf 26. bis 28. August: Böen und Feuchte gemessen gegen ICON-CH1 und ICON-CH2. Am Morgen des 27. gemessen 52 bis 60 km/h, in den Modellen höchstens 21 und 27 km/h." width="1344" height="950" loading="lazy" decoding="async">
  <figcaption>Quelle: Messung: MeteoSchweiz OGD, Altdorf (stärkste Sekundenböe der Stunde, Feuchte zur vollen Stunde) · Modelle: ICON-CH1 und ICON-CH2 über Open-Meteo Historical Forecast · 26. bis 28.08.2026</figcaption>
</figure>

Am deutlichsten zeigt es Altdorf. In der Föhnphase am Morgen des 27. August wurden Böen von 52 bis 60 km/h bei rund 40 Prozent Feuchte gemessen. ICON-CH1 zeigte höchstens 21 km/h, ICON-CH2 höchstens 27 km/h, beide mit 50 bis 78 Prozent Feuchte. Ab dem Mittag lagen beide näher an der Messung: gemessen 84 km/h zwischen 14 und 15 Uhr, ICON-CH2 74 km/h, ICON-CH1 63 km/h.

Auch während des Föhns vom 27. Mittag bis 28. Morgen zeigten beide Modelle die Luft in Altdorf feuchter, als sie war: gemessen 33 bis 38 Prozent, ICON-CH1 42 bis 52, ICON-CH2 40 bis 68 Prozent. Wer in Prognosedaten nach trockener Föhnluft sucht, findet sie deshalb seltener, als sie tatsächlich weht.

Die Modelle zeigen die Föhnlage also, aber zu schwach und oft zur falschen Stunde. Wenn sie Föhn verpassten, zeigten sie in rund der Hälfte der Fälle trotzdem Südwind und trockene Luft, nur der Wind war zu schwach (ICON-CH1 34 von 65 verpassten Stunden, ICON-CH2 39 von 74).

---

## Was du daraus für die Flugplanung mitnimmst

Die Prognose zeigt zuverlässig, ob eine Föhnlage kommt. Ob und wann der Föhn in deinem Tal den Boden erreicht, zeigt sie nur ungefähr. Nutze sie deshalb, um zu entscheiden, an welchen Tagen du genau hinschauen musst. Was tatsächlich passiert, zeigen am Flugtag die Messwerte und deine eigene Beurteilung vor Ort.

### 1. Am Vortag: Ist es eine Föhnlage?

- **Druckunterschied Lugano minus Zürich, bei Nordföhn umgekehrt.** Ab 4 hPa ist Föhn möglich, ab 8 hPa in den grossen Föhntälern häufig. Inneralpin kommt er auch unter 4 hPa.
- **Wind auf Passhöhe, etwa 2'000 m.** Der SHV rät bei Südföhn zu prüfen, ob dort Südwind weht und die Luft südseitig kühler ist [[11]](https://www.shv-fsvl.ch/fileadmin/files/redakteure/Allgemein/Sicherheit/Sicherheit/Schwer_erkennbare_Foehnlagen.pdf), als Alarmzeichen ab 1 bis 2 Grad [[7]](https://www.shv-fsvl.ch/fileadmin/files/redakteure/Allgemein/Sicherheit/Sicherheit/Entscheidungsstrategie_Meteo_V10.pdf). Bei Nordföhn gilt dasselbe mit Nordwind und kühlerer Luft auf der Nordseite.

### 2. Für dein Tal: Lies die Prognose als Warnung

- **Wind aus der Föhnrichtung und trockene Luft reichen als Warnung.** Zeigt die Prognose in deinem Tal Wind aus der Föhnrichtung und eine Feuchte unter 60 Prozent, rechne mit Föhn, auch wenn der Wind im Modell schwach ist. In unserem Fall hätte diese Lesart 84 bis 85 von 100 Föhnstunden erkannt. Dafür kam in fast jeder zweiten so markierten Stunde der Föhn nicht bis zum Talboden.
- **Modell-Böen sind eine Untergrenze.** Im Median lagen sie knapp 8 km/h unter der Messung, am Morgen des 27. August in Altdorf um 29 bis 57 km/h.
- **Die Stunde ist unsicher.** Plane so, dass du vor dem frühesten möglichen Durchbruch am Boden bist, nicht vor dem wahrscheinlichsten.
- **Die Prognose warnt, sie entscheidet nicht.** Auch mit dieser Lesart blieben 15 bis 16 von 100 Föhnstunden ohne Warnung. Keine Warnung heisst also nicht, dass kein Föhn kommt. Ob du fliegen kannst, entscheidest du vor Ort, am Startplatz und mit den aktuellen Messwerten.

### 3. Am Flugtag: Schau auf die Messwerte

- **Der Einsatz ist sichtbar.** Kommt der Föhn im Tal an, springen die Böen, der Wind dreht auf die Föhnrichtung und die Feuchte fällt. In Altdorf stiegen die Böen am 27. August innerhalb einer Stunde von 14 auf 50 km/h, in Glarus von 8 auf 39 km/h, und dort fiel die Feuchte von 62 auf 36 Prozent.
- **Vergleiche Tal und Gipfel.** Ruhiger Wind im Tal und kräftiger Wind aus der Föhnrichtung am Gipfel heisst oft „Föhn über dem Kaltluftsee“. Auf dem Gütsch wehten am 26. August schon 45 bis 64 km/h, als Altdorf noch ruhig war.
- **Schau in die Nachbartäler.** Täler, die den Föhn früher bekommen, sind Frühwarner. In diesem Fall waren es Andeer und Visp, einen halben Tag vor Altdorf.
- **Föhngeschützt heisst nicht föhnfrei.** Ein Startplatz im Windschatten kann ruhig sein, während der Föhn darüber läuft.

---

## Grenzen dieser Auswertung

- **Talboden ist nicht Startplatz.** Der Föhnindex gilt an der Station, zwischen 203 und 1'639 m. Föhn über einem Kaltluftsee zählt dort als „kein Föhn“, kann auf Starthöhe aber wehen.
- **Ein Druckpaar für alle Täler.** Wir haben überall Lugano minus Zürich verwendet. Fürs Wallis und für inneralpine Täler wäre eine andere Achse passender.
- **Alle Stunden, nur Index 2.** Die Statistik enthält Tag und Nacht. Föhnmischluft (Index 1) zählt nicht mit, das unterschätzt die Föhnzeit in Chur und Sion.
- **Die Nordföhn-Kriterien sind nicht veröffentlicht.** Dokumentiert ist die Methode für Südföhn [[10]](https://www.meteoswiss.admin.ch/dam/jcr:3ed2aec8-0901-417a-acc3-8be11cce440a/Foehnindex_Arbeitsbericht_223_Automatisiertes_Verfahren_zur_Bestimmung_von_Foehn_in_Alpentaelern_de.pdf).
- **Die Modellwerte sind nachträglich abgerufen.** Das Archiv von Open-Meteo reiht die jüngsten Läufe von ICON-CH1 und ICON-CH2 aneinander, die Vorlaufzeit ist kürzer als bei einer Prognose vom Vortag. Eine echte Prognose dürfte eher schlechter abschneiden. Die Föhnmerkmale im Modell haben wir selbst festgelegt, mit anderen Schwellen fielen die Prozentwerte anders aus.
- **Ein Fall ist kein Klima.** Der Vergleich mit den Modellen beruht auf einer einzigen Südföhnlage, dem 26. bis 28. August 2026.
- **Turbulenz haben wir nicht gemessen.** Die Stationen messen Wind am Boden, über Rotoren und Scherung in der freien Luft sagen sie nichts.

---

## Häufige Fragen

**Ab wie viel hPa gibt es Föhn?**
Eine feste Schwelle gibt es nicht. In Altdorf wehte bei 4 bis 6 hPa nur in 10 Prozent der Zeit Föhn am Talboden, ab 10 hPa in 88 Prozent. In Andeer, Davos oder Visp trat rund ein Drittel aller Föhnstunden bei weniger als 4 hPa auf.

**Warum ist Föhn für Gleitschirmflieger gefährlich?**
Weil er stark und turbulent ist und man ihn am Startplatz oft nicht spürt. Im Lee bilden sich Wellen und Rotoren bis in Bodennähe, an der Grenze zum Kaltluftsee schert der Wind, und bricht der Föhn durch, wird es schnell stürmisch.

**Wie erkenne ich Föhn ohne Föhnmauer?**
An der Luft und an den Messwerten. Föhnluft ist warm und sehr trocken. Starker Wind aus der Föhnrichtung an Gipfelstationen bei ruhigem Tal, kühlere Luft auf der Luvseite auf Passhöhe und Föhn in den bekannten Föhntälern sind Hinweise: bei Südföhn etwa in Altdorf oder Vaduz, bei Nordföhn etwa in der Leventina.

**Braucht Föhn Regen im Luv?**
Nein. Beim Südföhn vom 26. und 27. August 2026 fiel an zehn Stationen der Südseite praktisch kein Regen, und Altdorf hatte trotzdem 29,5 °C um vier Uhr morgens.

**Was ist der Unterschied zwischen Südföhn und Nordföhn?**
Südföhn weht auf der Alpennordseite bei Strömung aus Süden, Nordföhn auf der Alpensüdseite bei Strömung aus Norden.

**Kann eine Wetterprognose Föhn im Tal vorhersagen?**
Teilweise. Die Modelle haben keinen Föhnindex, aber Windrichtung, Wind und Feuchte. Liest man alle drei zusammen, zeigte ICON-CH1 69 Prozent und ICON-CH2 65 Prozent der gemessenen Föhnstunden. Die Richtung stimmte fast immer, der Wind war im Modell zu schwach.

---

## Quellen und Daten

- **[1]** MeteoSchweiz, [Wetter und Klima von A bis Z: Föhn](https://www.meteoschweiz.admin.ch/wetter/wetter-und-klima-von-a-bis-z/foehn.html)
- **[2]** Steinacker, R. (2006): [Alpiner Föhn, eine neue Strophe zu einem alten Lied](https://www.meteoschweiz.admin.ch/dam/jcr:d5bead26-9bd3-4b8b-a88c-6f08e4de8e3a/Steinacker_Foehn_Promet_32_1-2_de.pdf). promet 32 (1/2), 3–10, DWD
- **[3]** Deutscher Wetterdienst, Luftfahrt: [Wetterabhängige Gefahren im Bereich von Gebirgen](https://www.dwd.de/DE/fachnutzer/luftfahrt/download/produkte/runwaymap/04_gefahren_im_gebirge.pdf?__blob=publicationFile&v=4)
- **[4]** Würsch, M., Sprenger, M. (2015): [Swiss and Austrian foehn revisited: A Lagrangian-based analysis](https://doi.org/10.1127/metz/2015/0647). Meteorologische Zeitschrift 24 (3), 225–242
- **[5]** Jansing, L. et al. (2022): [Classification of Alpine south foehn based on 5 years of kilometre-scale analysis data](https://wcd.copernicus.org/articles/3/1113/2022/). Weather and Climate Dynamics 3, 1113–1138
- **[6]** Deutscher Wetterdienst, [Wetterlexikon: Föhn](https://www.dwd.de/DE/service/lexikon/Functions/glossar.html?lv3=100882&lv2=100784)
- **[7]** SHV, [Entscheidungsstrategie Meteo V10](https://www.shv-fsvl.ch/fileadmin/files/redakteure/Allgemein/Sicherheit/Sicherheit/Entscheidungsstrategie_Meteo_V10.pdf)
- **[8]** Gutermann, T. et al. (2012): [Föhnklimatologie Altdorf: die lange Reihe (1864–2008)](https://www.meteoswiss.admin.ch/dam/jcr:698b5cdf-92cf-491a-8d88-c844113aa8d6/Foehnklimatologie_Altdorf_die_lange_Reihe_1864-2008_und_ihre_Weiterfuehrung_Vergleich_mit_anderen_Stationen_de.pdf). Fachbericht MeteoSchweiz 241
- **[9]** MeteoSchweiz, [Wetter und Klima von A bis Z: Föhnindex](https://www.meteoschweiz.admin.ch/wetter/wetter-und-klima-von-a-bis-z/foehnindex.html)
- **[10]** Dürr, B. (2008): [Automatisiertes Verfahren zur Bestimmung von Föhn in Alpentälern](https://www.meteoswiss.admin.ch/dam/jcr:3ed2aec8-0901-417a-acc3-8be11cce440a/Foehnindex_Arbeitsbericht_223_Automatisiertes_Verfahren_zur_Bestimmung_von_Foehn_in_Alpentaelern_de.pdf). Arbeitsbericht MeteoSchweiz 223
- **[11]** Oechslin, R., Stocker, B.: [Schwer erkennbare Föhnlagen](https://www.shv-fsvl.ch/fileadmin/files/redakteure/Allgemein/Sicherheit/Sicherheit/Schwer_erkennbare_Foehnlagen.pdf). Swiss Glider 03/04 2025, SHV
- **[12]** Haas, L.: [Misstraut den Föhndiagrammen](https://www.dhv.de/media/jahre/2024/07_wetter/Wetterwissen/DHVmagazin_Artikel/F%C3%B6hn/1_2023_240_Misstraut_den_Foehndiagrammen.pdf). DHV-Magazin 240 (2023)
- **[13]** Schwanitz, V.: [Föhn ist nicht gleich Föhn](https://www.dhv.de/media/jahre/2024/07_wetter/Wetterwissen/DHVmagazin_Artikel/F%C3%B6hn/4_2017_204_foehn_ist_nicht_gleich_foehn.pdf). DHV-Magazin 204 (2017)

**Messwerte:** MeteoSchweiz Open Government Data, SwissMetNet, Zehnminutenwerte (Föhnindex, Böen, Wind, Temperatur, Feuchte, Niederschlag, Luftdruck). Fall 26. bis 29. August 2026 an 34 Stationen, Statistik 2020 bis 2025 an 20 Talstationen sowie Lugano und Zürich-Fluntern ([Dokumentation](https://opendatadocs.meteoswiss.ch/a-data-groundbased/a1-automatic-weather-stations)).

**Prognose:** ICON-CH1 und ICON-CH2 (MeteoSchweiz) über die [Historical Forecast API von Open-Meteo](https://open-meteo.com/en/docs/historical-forecast-api), Stundenwerte an 14 Talstationen, an 13 davon wehte Föhn, 26. bis 28. August 2026. Rohdaten und Rechenskript liegen im Marketing-Repo unter `2-ausfuehrung/wetterkunde/belege/foehn/`.

---

## Wie Wingcast damit umgeht

Wingcast liest die Wettermodelle jeden Morgen für die Schweizer Startplätze und beschreibt in Klartext, was sie für deinen Startplatz bedeuten. Beim Föhn heisst das: Wir schauen in den Modelldaten nicht nur auf den Druckunterschied, sondern auf Wind, Richtung und Feuchte in den Föhntälern selbst. Diese Auswertung zeigt, wie weit man diesen Daten trauen kann. Wingcast ist **Decision Support**: Wir liefern Daten und Einschätzung, die Entscheidung triffst du.

→ [Wie eine Böenfront gemessen aussieht, und was das Modell dazu sagte](/wetterkunde/boeenfront)
→ [Staubteufel: wie du einen Dusty-Tag erkennst](/wetterkunde/staubteufel)
→ [Alle Wetterkunde-Themen](/wetterkunde)
→ [Wingcast kostenlos öffnen und deinen Spot prüfen](https://app.wingcast.ch/?utm_source=blog&utm_medium=wetterkunde&utm_campaign=foehn)

---

<!-- REDAKTIONELLE NOTIZEN, nicht auf die Seite

SYNC 10.10.2026: Text 1:1 aus dem Vorschau-Artifact übernommen (User-Änderungen dort: Abschnitt
„Warum die Föhnluft warm ist“ gestrichen, mehrere Sätze gekürzt). Grafiken vorerst als PNG-Screenshots
aus dem Artifact (public/wetterkunde/foehn-*.png), vor Livegang als SVG neu bauen.
Quellen [4], [5], [6] werden im Text nicht mehr zitiert (nur Theorieabschnitt nutzte sie).
Stand vor dem Sync: belege/foehn/raw/doc_sync/foehn_vor_sync_2026-10-10.md

FASSUNG 2 (09.10.2026). Ersetzt Fassung 1 vom Juli (in Git). Neu gegenüber der
Machbarkeit vom 16.09.: Talpunkte (flychat/data/foehn_talpunkte.geojson) als
Rückgrat, Statistik auf alle 20 Täler erweitert, Theorieteil, Video als Abb. 1.

ZAHLEN, alle aus belege/foehn/2026-10-09_foehn_taeler.json (foehn_taeler.py):
- Korrigiert gegenüber Machbarkeit 16.09.: Druckunterschied max 9,1 hPa (10-min, 28.08. 01:00),
  nicht 8,5. Böe Altdorf im Föhn 84 km/h; die 88 km/h fielen um 14:20, nach Föhnende.
  Jungfraujoch 01-02 Uhr 72 km/h (Machbarkeit: 87, anderes Stundenfenster).
  Gütsch-Höhe 2'286 m laut OGD-Metadaten (flychat führt 2'282).
- Altdorf 4-6 hPa 9,9 %, Vaduz 6,0 %: reproduziert die Machbarkeit (10 % / 6 %).
- Engelberg ist kein Talpunkt (Seitental), deshalb nicht in der Falltabelle.

VIDEO: Abb. 1 ist das bestehende Föhn-Video, unverändert (User 09.10.: kein Remotion-Umbau).
Datei: videos/remotion/out/blog/foehn-reise-16x9.mp4 = Composition FoehnSchulung (16:9, EN, 105 s,
ohne Ton, 8,2 MB, Render 10.10.). Inhalt wie das Reel FoehnSchulungReel.mp4 (23.07.).
NICHT die alte 16:9-Fassung wingcast-foehn-schulung.mp4 vom 08.07. → beim
Livegang kopieren nach gleitcast_webpage/public/wetterkunde/foehn-reise.mp4. Das Video erklärt
die Wärme nur mit dem Ausregnen und nennt „Up to 15 °C warmer" ohne geprüfte Quelle; der Text
im Theorieteil ordnet beides ein.

LEITPLANKE Unfälle: nur, was der SHV selbst veröffentlicht (Büelen-Prüfungstag,
„Unfälle bei ähnlichen Vorzeichen"). Keine Namen, keine Details zum Brunni.

OFFEN vor Livegang:
1. Bestehendes Video nach gleitcast_webpage/public/wetterkunde/foehn-reise.mp4 kopieren.
2. Loader erzeugt kein VideoObject-Schema. Google empfiehlt es für eingebettete
   Videos (name, thumbnailUrl, uploadDate, contentUrl). Im Webseiten-Repo ergänzen
   oder Schlüssel aus `schema:` streichen.
3. Abbildungen: Im Vorschau-Artifact (https://claude.ai/code/artifact/ffa074b3-c620-48d8-b124-cae3701b3165)
   stehen sechs Entwürfe: Föhn-Querschnitt, Temperatur Altdorf/Lugano + Druckkurve, Föhn-Zeitleiste
   der 14 Täler, Tal gegen Gipfel, Föhnanteil je Druckklasse, Prognose-gegen-Messung-Raster.
   Nach Freigabe als SVG für public/wetterkunde/ umsetzen (je Sprache eine Datei).
4. llms.txt-Block mit den Kernzahlen.
5. FR/IT/EN nach Freigabe DE.
6. Würsch & Sprenger 2015: Zitat „rainfall is no requirement at all" stammt aus der
   Recherche vom 16.09. (dort am Original geprüft); in dieser Sitzung nicht erneut geöffnet.

TABUS geprüft: keine Konkurrenz-Namen, kein „sicher"/„garantiert", Spotzahl nicht
als Argument, keine Gedankenstriche im Fliesstext.
-->
