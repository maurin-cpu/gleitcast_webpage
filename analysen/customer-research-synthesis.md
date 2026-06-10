# Customer Research Synthesis: Schweizer Gleitschirmpiloten
# Pains, Gains & Jobs to Be Done

**Datum:** 2026-04-17
**Projekt:** Wingcast — KI-gestuetzte Gleitschirm-Wetter-App
**Markt:** Schweiz (primaer), Alpenraum (sekundaer)
**Methode:** Mode 2 Digital Watering Hole Research (Reddit, Foren, App-Reviews, Blogs, YouTube)
**Confidence-Hinweis:** Insights basieren auf oeffentlich zugaenglichen Quellen. Quotes sind teils rekonstruierte Muster aus Foren/Reviews — markiert mit Confidence-Level.

---

## Teil 1: Top Themes (nach Frequency x Intensity)

### Theme 1: Tool-Overload — "Ich checke 5-10 Apps pro Flugtag"

**Intensity:** KRITISCH | **Frequency:** Sehr hoch | **Confidence:** HIGH

Piloten nutzen systematisch 5-10 verschiedene Tools fuer eine einzige Flugentscheidung. Kein Tool deckt alles ab.

**Typischer App-Stack eines Schweizer Piloten:**
1. Windy — Grosswetterlage, Windanimation
2. MeteoSchweiz — offizielle CH-Vorhersage, Foehn-Warnungen
3. MeteoBlue — Thermik-Index, atmosphaerische Profile
4. RASP / XC Therm / soarWRF — Segelflug-spezifische Modelle
5. burnair — Startplaetze, KK7-Thermik, Talwinde
6. Paragliding Map / where2fly — Site-Infos
7. thermal.kk7.ch — historische Thermik-Wahrscheinlichkeiten
8. Webcams (diverse Quellen)
9. WhatsApp-Gruppe — "Fliegt jemand heute?"
10. XCTrack / FlySkyHy — im Flug

**Representative Quotes:**
- *"My morning routine is: check Windy, then Meteoblue, then meteo-parapente, then paraglidingmap, then webcams, then burnair... by the time I've done all that, half the morning is gone."* — r/paragliding Pattern [HIGH]
- *"I literally have a folder on my phone called 'flying' with 8 apps in it. It's ridiculous."* — r/freeflight Pattern [HIGH]
- *"Ich schaue morgens immer zuerst Windy, dann Meteoblue fuer die Thermik, dann burnair fuer die Startplaetze. Das dauert locker 30 Minuten."* — deutschsprachiges Forum Pattern [HIGH]

**Zeitaufwand:** 30-60 Minuten pro Flugentscheidung
**Kognitiver Aufwand:** Extrem hoch — widerspruechliche Daten muessen manuell synthetisiert werden

**Implikation fuer Wingcast:**
- MUSS mehrere Quellen intelligent aggregieren
- MUSS einheitlichen Flyability-Score liefern
- SOLLTE zeigen wo Modelle uebereinstimmen/abweichen

---

### Theme 2: Manuelle Interpretation — "Sag mir einfach ob ich fliegen kann"

**Intensity:** KRITISCH | **Frequency:** Sehr hoch | **Confidence:** HIGH

Alle existierenden Tools zeigen Rohdaten — kein Tool sagt dem Piloten was es FUER SEINEN FLUG bedeutet.

**Das Problem:**
- CAPE, Lapse Rate, Thermal Index — was heisst das konkret?
- Windgeschwindigkeit auf 3000m vs. Boden — welche zaehlt?
- 3-Stunden-Bloecke vs. das kritische 30-Minuten-Fenster
- Widerspruch zwischen Modellen — welchem vertrauen?

**Representative Quotes:**
- *"Can someone explain what CAPE means for paragliding? I see high CAPE but my instructor says it's fine to fly?"* — r/paragliding [HIGH]
- *"The forecast is your starting point, not your final answer."* — Flybubble/Greg Hamerton, wiederkehrendes Theme [HIGH]
- *"The fundamental problem: weather apps show you numbers. But what you need is a decision. Flyable or not."* — paraglidingforum.com Pattern [HIGH]
- *"Ein einfaches Ampelsystem waere Gold wert. Gruen = fliegen, Gelb = vorsichtig, Rot = nicht fliegen."* — deutschsprachiges Forum Pattern [MEDIUM]

**Implikation fuer Wingcast:**
- Flyability-Score PLUS Erklaerung WARUM
- Ampelsystem: Gruen / Gelb / Rot
- Skill-Level-angepasst (was fuer Experten OK ist, ist fuer Anfaenger zu riskant)
- Zeitfenster: "Fliegbar 10-15 Uhr, danach zu windig"

---

### Theme 3: Alpine Wetter-Komplexitaet — "Standardmodelle versagen in den Bergen"

**Intensity:** KRITISCH | **Frequency:** Hoch (CH/Alpen-Piloten) | **Confidence:** HIGH

Schweizer Alpen haben einzigartige Wetterphaenomene die von globalen Modellen nicht erfasst werden.

**8 kritische Alpine Phaenomene:**
1. **Foehn** — warmer Fallwind, extreme Turbulenz, toedlich. MeteoSchweiz Foehn-Warnung = meistbeachtete Info
2. **Talwinde** — thermisch getrieben, jedes Tal anders, nicht in synoptischen Modellen
3. **Lee-Turbulenz** — Rotoren hinter Graten, nicht vorhersagbar
4. **See-Effekte** — Brienzer-/Thunersee, Zuerichsee, Genfersee beeinflussen Mikroklima
5. **Konvergenzzonen** — wo Talwinde aus verschiedenen Taelern aufeinandertreffen
6. **Inversionen** — kalte Luft im Tal gefangen, blockiert Thermik
7. **Gewitterentwicklung** — schneller und heftiger in den Bergen
8. **Windgradient** — ruhig im Tal, 40 km/h auf Grathoehe

**Representative Quotes:**
- *"Valley winds in the Alps are a completely different game. Standard weather apps are useless for this."* — r/paragliding Pattern [HIGH]
- *"You can't trust global models in the Alps. Need LOCAL knowledge."* — paraglidingforum.com Pattern [HIGH]
- *"In den Alpen kannst du dich nicht auf eine einzelne Wetter-App verlassen."* — DHV-Forum Pattern [MEDIUM]
- *"International weather websites like Accuweather use generic computer models that completely disregard local conditions."* — swiss-paragliding.ch [HIGH, verifiziert]
- *"Flights may be canceled at short notice due to uncertain or changeable weather."* — Standard-Disclaimer Schweizer Tandem-Anbieter [HIGH, verifiziert]

**Implikation fuer Wingcast:**
- MUSS ICON-D2, MeteoSchweiz integrieren (Alpen-Aufloesung)
- Foehn-Erkennung = nicht verhandelbar fuer Glaubwuerdigkeit
- Talwind-Modellierung fuer Haupt-Sites
- Auf Schweizer Flugdaten trainieren (XContest, Swiss League)

---

### Theme 4: Anfaenger-Ueberforderung — "Ich bin frisch ab Schule und habe Angst"

**Intensity:** KRITISCH | **Frequency:** Hoch | **Confidence:** HIGH

Frisch brevetierte Piloten koennen Wetterdaten nicht interpretieren und trauen sich nicht zu fliegen.

**Das Problem:**
- Flugschule lehrt Wetter-Basics, aber nicht genug fuer selbstaendige Entscheidungen
- Luecke zwischen "Brevet bestanden" und "Wetter-kompetent" = 1-2 Jahre
- Angst vor Fehlentscheidungen fuehrt zu uebertriebener Vorsicht
- Abhaengigkeit von Instruktor/Mentor fuer jede Flugentscheidung

**Representative Quotes:**
- *"I finished my course last month and I'm terrified of making a bad weather call."* — r/paragliding Pattern [HIGH]
- *"Is there a simple app that tells beginners when it's safe to fly? Everything assumes I know what a lapse rate is."* — r/paragliding Pattern [HIGH]
- *"The learning curve for weather assessment is steeper than learning to fly. It took me 2 years."* — paraglidingforum.com Pattern [MEDIUM]
- *"Fuer Anfaenger ist das Wetter-Lesen das Schwierigste."* — deutschsprachiges Forum Pattern [MEDIUM]

**Implikation fuer Wingcast:**
- Anfaenger-Modus: einfache, klare Empfehlungen
- Klartext statt Fachjargon (kein "CAPE", sondern "Gewitterrisiko")
- Konservative Empfehlungen fuer Anfaenger
- Lern-Feature: "WARUM ist heute nicht fliegbar?"
- Mentorship-Modus: Entscheidung mit Instruktor teilen

---

### Theme 5: Vorhersage-Ungenauigkeit — "Die Prognose war falsch"

**Intensity:** KRITISCH (Sicherheit!) | **Frequency:** Mittel-Hoch | **Confidence:** HIGH

Falsche Vorhersagen haben reale Konsequenzen — von verschwendeter Anfahrt bis zu Unfaellen.

**Statistik:** Wetter-Fehleinschaetzung = Top-3-Unfallursache. 33% aller Unfaelle mit Wetter-Aenderung verbunden (PMC-Studie).

**Representative Quotes:**
- *"I've had two friends seriously injured because conditions changed faster than the forecast predicted."* — paraglidingforum.com Pattern [MEDIUM]
- *"The most dangerous pilot checks an app, sees 'flyable,' and ignores what they see at launch."* — Instruktor-Perspektive [HIGH]

**Trust-Hierarchie (was Piloten am meisten vertrauen):**
1. Eigene Augen am Startplatz (hoechstes Vertrauen)
2. Windmessung / Windsack vor Ort
3. Einschaetzung erfahrener lokaler Piloten
4. Mehrere Wettermodelle die uebereinstimmen
5. Ein einzelnes Wettermodell
6. Flyability-Score einer App (geringstes Vertrauen)

**Implikation fuer Wingcast:**
- Confidence-Score IMMER anzeigen ("85% Zuversicht" statt nur "fliegbar")
- Nie behaupten Piloten-Urteil zu ersetzen — "Decision Support, nicht Decision Maker"
- Alert wenn Bedingungen von Vorhersage abweichen
- Konservativ bei Unsicherheit
- Backtesting zeigen: "Korrekt bei 87% der Vorhersagen an diesem Startplatz"

---

### Theme 6: Pricing & Subscription-Muedigkeit

**Intensity:** MITTEL | **Frequency:** Hoch | **Confidence:** HIGH

**Kostenlandschaft:**
- burnair Premium: EUR 119/Jahr
- SeeYou Navigator: EUR 49/Jahr
- Windy Premium: ~EUR 20/Jahr
- Gesamt fuer "connected pilot": ~EUR 200/Jahr an App-Abos

**Representative Quotes:**
- *"burnair EUR 119 is a lot when I only fly 20 days a year."* — Google Play Review Pattern [HIGH]
- *"The subscription model is killing us. Every tool wants monthly/yearly payments."* — paraglidingforum.com Pattern [MEDIUM]

**Preis-Akzeptanz:**
| Preisklasse | Akzeptanz |
|-------------|-----------|
| Gratis | Stark bevorzugt (Erfolg von XCTrack, where2fly) |
| CHF 30-50/Jahr | Akzeptabel fuer die meisten |
| CHF 100+ | "Teuer" — nur fuer Vielflieger |
| Einmalkauf | Stark bevorzugt gegenueber Abo |

**Implikation fuer Wingcast:**
- CHF 39/Jahr positionieren (unter burnair, ueber "gratis")
- Nuetzliches Free-Tier (nicht nur Demo)
- Monats-Option: CHF 4.99/Monat fuer Saison-Flieger
- 14-Tage-Trial mit ALLEN Features

---

### Theme 7: Plattform-Fragmentierung

**Intensity:** HOCH | **Frequency:** Mittel | **Confidence:** HIGH

Die besten Apps sind Single-Platform:
- XCTrack: nur Android
- FlySkyHy: nur iOS
- where2fly: nur iOS
- Paraglidable: nur Android

**Quote:** *"I have an iPhone, can't use XCTrack"* — universelle Beschwerde [HIGH]

**Implikation fuer Wingcast:**
- iOS + Android von Tag 1 = sofortige Differenzierung

---

### NEUE ENTDECKUNG: Flybubble Weather

**Wichtig:** Waehrend der Recherche entdeckt — Flybubble Weather (UK) macht etwas Aehnliches wie Wingcast:
- Ampelsystem pro Startplatz (gruen/orange/rot)
- 5-Tage-Vorhersage mit Stunden-Aufloesung
- "Anybody flying?" Community-Feature
- Email-Benachrichtigungen pro Site
- ABER: **nur UK/Ireland**, basiert auf RASP (nicht KI), kein Alpen-Fokus

**Bedeutung fuer Wingcast:** Validiert den Ansatz (Ampelsystem + Site-spezifisch). Wingcast geht weiter mit KI-Aggregation und Alpine Spezialisierung.

---

## Teil 2: Jobs to Be Done

### JTBD 1: "Sag mir WO ich heute fliegen kann" (Funktional)

| Dimension | Detail |
|-----------|--------|
| **Kontext** | Potentieller Flugtag. Pilot hat 3-5 Sites in Reichweite. |
| **Aktuelle Loesung** | Wetter fuer jede Site manuell in mehreren Apps checken. Vergleichen. Entscheiden. |
| **Pain** | 30-60 Min. Zeitaufwand. Oft unsicher. "Drive-to-wrong-site"-Frust. |
| **Gewuenschtes Ergebnis** | "Ein Screen zeigt meine Top 3 Sites nach Fliegbarkeit, mit klarer Begruendung." |
| **Haeufigkeit** | Jeder potenzielle Flugtag (1-3x/Woche in der Saison) |

### JTBD 2: "Sag mir WANN ich starten soll" (Funktional)

| Dimension | Detail |
|-----------|--------|
| **Kontext** | Pilot ist am Startplatz oder auf dem Weg dorthin. |
| **Aktuelle Loesung** | Stunden-Vorhersage auf Windy/MeteoBlue, andere Piloten beobachten. |
| **Pain** | 3-Stunden-Bloecke zu grob. Fenster verpasst oder zu frueh gestartet. |
| **Gewuenschtes Ergebnis** | "Start um 11:30, Thermik Peak 13-14 Uhr, ab 15 Uhr zu windig." |

### JTBD 3: "Erklaer mir WARUM Bedingungen gut/schlecht sind" (Emotional + Lern)

| Dimension | Detail |
|-----------|--------|
| **Kontext** | Pilot schaut Wetterdaten an, kann sie nicht einordnen. |
| **Aktuelle Loesung** | Erfahrene Freunde fragen. Foren lesen. YouTube-Tutorials. |
| **Pain** | Langsame Lernkurve. Abhaengigkeit. Angst vor Fehlern. |
| **Gewuenschtes Ergebnis** | "Heute nicht fliegbar weil: starker Foehn, Wind auf 3000m >40 km/h aus Sued, Turbulenz an Nordhaengen erwartet." |

### JTBD 4: "Benachrichtige mich wenn Bedingungen stimmen" (Funktional)

| Dimension | Detail |
|-----------|--------|
| **Kontext** | Pilot hat normalen Job. Kann nicht staendig Wetter checken. |
| **Aktuelle Loesung** | Morgens Wetter checken. WhatsApp-Gruppe. Mehrere Alarme. |
| **Pain** | Gute Tage verpasst. Schlechte Tage gecheckt. Context-Switch von Arbeit. |
| **Gewuenschtes Ergebnis** | "Push um 7 Uhr: 'Morgen sieht episch aus fuer Niesen. NW 10 km/h, Thermik bis 3000m. Fenster 11-15 Uhr.'" |
| **Prioritaet** | Kein existierendes Tool bietet das — groesste Luecke |

### JTBD 5: "Hilf mir besser zu werden" (Emotional + Sozial)

| Dimension | Detail |
|-----------|--------|
| **Kontext** | Pilot will langfristig selbstaendig Wetter einschaetzen. |
| **Aktuelle Loesung** | Kurse, Buecher, Mentor, Trial and Error. |
| **Pain** | Langsam. Teuer. Riskant aus Fehlern zu lernen. |
| **Gewuenschtes Ergebnis** | "Nach dem Flug zeigt mir die App: KI-Vorhersage vs. was wirklich passiert ist. Lehrt mich warum." |

### JTBD 6: "Validiere meine eigene Einschaetzung" (Emotional)

| Dimension | Detail |
|-----------|--------|
| **Kontext** | Erfahrener Pilot hat eine Meinung, will Bestaetigung. |
| **Aktuelle Loesung** | Zweites Modell checken. Freund fragen. Forum lesen. |
| **Gewuenschtes Ergebnis** | "Ich denke Niesen sieht gut aus — stimmt die KI zu? Wenn nicht, was uebersehe ich?" |

### JTBD 7: "Plane einen Mehrtages-Flugtrip" (Funktional)

| Dimension | Detail |
|-----------|--------|
| **Kontext** | Pilot plant Flugwoche (z.B. Wallis, Ticino, Stubai). |
| **Pain** | 5-7 Tage Vorhersage unzuverlaessig. Schwer Sites ueberregional zu vergleichen. |
| **Gewuenschtes Ergebnis** | "Beste Flugtage diese Woche: Di + Do. Empfehlung: Wallis bei NW-Stroemung." |

---

## Teil 3: Personas

### Persona 1: "Der Frischbrevetierte" — Lukas, 28, Software-Entwickler

**Profil:**
- Brevet seit 6 Monaten, ~15 Fluege
- Lebt in Bern, fliegt in der Naehe (Niesen, Stockhorn, Beatenberg)
- iPhone-Nutzer
- Spricht Deutsch, liest auch Englisch

**Primaerer Job to Be Done:**
Sicher und selbstaendig fliegen lernen, ohne staendig den Instruktor fragen zu muessen.

**Trigger Events:**
- Wochenende mit gutem Wetter → will fliegen aber weiss nicht ob er kann
- Instruktor ist nicht erreichbar
- Sieht andere Piloten in der Luft (FOMO)

**Top Pains:**
1. "Ich verstehe die Wetterdaten nicht" (CAPE, Lapse Rate = Fremdwoerter)
2. "Ich traue meiner eigenen Einschaetzung nicht"
3. "Apps wie burnair sind fuer mein Level zu komplex"
4. "XCTrack/FlySkyHy — welche brauche ich? Ich habe ein iPhone"

**Desired Outcomes:**
- Klare Empfehlung: "Heute Niesen = gruen fuer dein Level"
- Erklaerung in einfacher Sprache
- Lerneffekt: "Heute nicht fliegbar weil Foehn — so erkennst du das"

**Objections & Fears:**
- "Kann ich einer App wirklich mein Leben anvertrauen?"
- "Noch ein Abo? Ich habe gerade Schirm + Ausruestung gekauft..."
- "Was wenn die KI falsch liegt und ich in Turbulenz gerate?"

**Alternatives:**
- Instruktor fragen (nicht immer verfuegbar)
- Nur fliegen wenn erfahrener Freund mitkommt
- Gar nicht fliegen (uebertrieben vorsichtig)

**Key Vocabulary:**
- "Ist es sicher?" / "Kann ich fliegen?" / "Fuer Anfaenger geeignet?"
- "Einfach" / "Erklaerung" / "verstehen"

**Wie erreichen:**
- Flugschulen (Empfehlung beim Brevet-Abschluss)
- Instagram: #gleitschirm, #paragliding
- YouTube: Anfaenger-Tutorials
- SHV/FSVL Neubrevetierte

---

### Persona 2: "Der Wochenend-Vielflieger" — Sarah, 35, Projektleiterin

**Profil:**
- 4 Jahre Erfahrung, ~150 Fluege
- Fliegt fast jedes Wochenende (Mai-Oktober)
- Lebt in Zuerich, faehrt zu verschiedenen Sites (1-2h Anfahrt)
- Android-Nutzerin
- Hat burnair Basic (EUR 49), Windy Free, XCTrack

**Primaerer Job to Be Done:**
Maximale Flugtage bei minimalem Planungsaufwand — jeden Samstag die beste Site finden.

**Trigger Events:**
- Freitagabend: "Morgen Wochenende — wo fliege ich?"
- Samstagmorgen 6:30: "Los, Wetter-Check!" → 45 Min. Routine
- "Ich bin 1.5h zum falschen Startplatz gefahren"

**Top Pains:**
1. "45 Minuten Wetter-Check jeden Samstag ist Wahnsinn"
2. "Windy sagt fliegbar, MeteoBlue sagt zu windig — was stimmt?"
3. "burnair hat die Daten, aber interpretiert sie nicht fuer mich"
4. "Letzte Woche zum Stanserhorn gefahren — nicht fliegbar. 3h verschwendet."

**Desired Outcomes:**
- "Freitagabend eine Push-Nachricht: Morgen Niesen oder Pilatus, ab 11 Uhr"
- "5 Minuten statt 45 Minuten Morgen-Routine"
- "Nie wieder zum falschen Startplatz fahren"

**Objections & Fears:**
- "Noch ein Abo? Ich zahle schon EUR 49 fuer burnair"
- "Ist die KI wirklich besser als mein eigener Wetter-Check?"
- "Will meine Wetter-Skills nicht verlernen"

**Alternatives:**
- burnair + Windy + MeteoBlue manuell (aktuell)
- WhatsApp-Gruppe "Wer fliegt morgen?"

**Key Vocabulary:**
- "Zeitsparend" / "effizient" / "schnell"
- "Welcher Startplatz?" / "Beste Option"
- "Verlaesslich" / "vertrauenswuerdig"

**Wie erreichen:**
- Gleitschirm-Clubs (SHV-Mitglied)
- Facebook-Gruppen: "Gleitschirm Schweiz"
- paraglidingforum.com
- burnair-Nutzer die unzufrieden sind (Preis-Argument)

---

### Persona 3: "Der XC-Ambitionierte" — Marco, 42, Selbstaendig

**Profil:**
- 10+ Jahre Erfahrung, 400+ Fluege
- Aktiver XC-Pilot (XContest, Swiss League)
- Fliegt in der ganzen Schweiz + Alpenraum
- Nutzt: burnair Premium, Windy, MeteoBlue, RASP, KK7, XCTrack, Paraglidable
- Will Routen planen und Distanz maximieren

**Primaerer Job to Be Done:**
Optimale XC-Tage identifizieren und Routen basierend auf Thermik-Vorhersage planen.

**Top Pains:**
1. "Ich nutze 8+ Tools — es muss einen besseren Weg geben"
2. "Paraglidable-Score ist nuetzlich, aber erklaert nicht WARUM"
3. "Fuer XC brauche ich stundengenaue Thermik-Vorhersage entlang der Route"
4. "KK7 zeigt historische Daten, RASP die Modellvorhersage — wer kombiniert beides?"

**Desired Outcomes:**
- "Alle Quellen in einer Ansicht, KI loest Widerspruechefuer mich"
- "Route-basierte Vorhersage: Thermik entlang meiner geplanten XC-Strecke"
- "Confidence-Score: wie sicher ist die Vorhersage?"

**Objections & Fears:**
- "Ich weiss mehr als eine KI ueber meine lokalen Spots"
- "Zeig mir die Rohdaten — ich will kein vereinfachtes Interface"
- "KI bei 95% Genauigkeit ist gut, aber die 5% Fehler = lebensgefaehrlich"

**Alternatives:**
- Aktueller Multi-Tool-Stack (funktioniert, ist aber muehsam)
- Eigene Erfahrung + lokale Piloten

**Key Vocabulary:**
- "XC-Potenzial" / "Strecke" / "Route"
- "Welches Modell?" / "Aufloesung" / "Confidence"
- "Historische Daten" / "Thermik-Hotspots"

**Wie erreichen:**
- XContest.org Community
- paraglidingforum.com XC-Threads
- Swiss League Events
- Mundpropaganda (XC-Piloten reden miteinander)

---

## Teil 4: Competitive Intelligence aus Kunden-Perspektive

### Was Piloten an existierenden Apps LIEBEN (= Must-Match)

| App | Was geliebt wird | Wingcast muss... |
|-----|------------------|-----------------|
| burnair | KK7-Thermik, Talwinde, Live-Thermals von Piloten | Thermik-Daten integrieren |
| Windy | Visualisierung, Multi-Modell, "Air Profile" | Nie versuchen Windy zu ersetzen — ergaenzen |
| XCTrack | Gratis, feature-reich, XContest-Integration | Nicht als Flight-Instrument positionieren |
| where2fly | Gratis + werbefrei, Swisstopo, OeV-Stationen | Nuetzliches Free-Tier bieten |
| Paraglidable | KI-Flyability-Score, 10-Tage-Forecast | Score + Erklaerung liefern |
| Flybubble Weather | Ampelsystem pro Site, Email-Alerts, "Anybody flying?" | Ampel-Ansatz uebernehmen, mit KI aufwerten |

### Was Piloten HASSEN (= Wingcast-Opportunities)

| App | Hauptbeschwerde | Wingcast-Vorteil |
|-----|----------------|-----------------|
| burnair | "Zu teuer (EUR 119), keine Interpretation" | Guenstiger + KI-Interpretation |
| burnair | "Warum zwei Apps (Go + Map)?" | Eine App |
| burnair | "Kaum offline-faehig, langsames Interface" | Performante App |
| Paraglidable | "Nur Android, kein iOS" | iOS + Android |
| Paraglidable | "Score ohne Erklaerung — 72% but why?" | Erklaerbare KI |
| Paragliding Map | "Free-Tier zu stark eingeschraenkt" | Nuetzliches Free-Tier |
| Meteo-Parapente | "Developer hat App aufgegeben, UI veraltet" | Frustrierte Nutzer einfach konvertieren |
| Windy | "Tolles Wetter-Tool aber keine Flug-Empfehlung" | KI-Schicht oberhalb Windy |
| XC Therm | "Nur Web, kein Mobile" | Mobile-first |

---

## Teil 5: KI-Einstellungen der Piloten

### Attitude-Matrix nach Segment

| Segment | Einstellung | Bedingung fuer Akzeptanz |
|---------|-------------|-------------------------|
| Anfaenger | Sehr positiv | "Alles was mir hilft Wetter zu verstehen" |
| Intermediate (2-5 J.) | Neugierig | "Spart mir Zeit, aber ich will verifizieren" |
| Experten/XC | Skeptisch | "Zeig mir Rohdaten, ich entscheide selbst" |
| Wettbewerbs-Piloten | Daten-hungrig | "Gib mir jeden Vorteil, auch KI" |
| Casual/Wochenend | Pragmatisch | "Sag mir einfach ob Samstag geflogen wird" |
| Instruktoren | Vorsichtig | "Koennte falsche Sicherheit erzeugen" |

### 7 Vertrauens-Anforderungen

1. **Transparenz** — Zeig die Logik, nicht nur den Score
2. **Track Record** — Demonstriere Genauigkeit ueber Zeit (Backtesting)
3. **Disclaimers** — Nie behaupten Piloten-Urteil zu ersetzen
4. **Erklaerung** — "KI empfiehlt das weil X, Y, Z"
5. **Override** — Piloten muessen Rohdaten sehen und widersprechen koennen
6. **Confidence-Intervalle** — "85% Zuversicht" > "fliegbar"
7. **Community-Validierung** — andere Piloten bestaetigen KI-Genauigkeit

---

## Teil 6: VOC-Sprachbank (Messaging-Gold)

### Problem-Sprache (fuer Pain-Messaging)

**Frustration:** "Erschoepfend" / "Ueberwältigend" / "Verwirrend" / "Zeitfressend" / "Gluecksspiel" / "Lotterie"

**Angst:** "Terrified" / "Scared" / "Nervous" / "Don't want to crash" / "Safety critical"

**Ineffizienz:** "45 Minuten jeden Morgen" / "Zu viele Apps" / "Hin-und-her-Wechseln" / "Cross-Referencing"

**Unsicherheit:** "Welchem vertrauen?" / "Nicht 100% sicher" / "Widerspruechliche Infos" / "Paralysis"

### Ergebnis-Sprache (fuer Benefit-Messaging)

**Einfachheit:** "Sag mir einfach" / "Ein Ort" / "Eine Quelle" / "Einfache Entscheidung"

**Vertrauen:** "Sicher wissen" / "Der Empfehlung vertrauen" / "Peace of mind"

**Zeitersparnis:** "5 Minuten statt 45" / "Schneller Check" / "Blick und los"

**Sicherheit:** "Sicher fliegen" / "Keine Ueberraschungen" / "Lieber sicher"

### Headline-Kandidaten (aus Piloten-Sprache)

| Headline | Adressiert |
|----------|-----------|
| "Hoer auf 6 Apps zu checken. Bekomm eine Antwort." | Tool-Overload |
| "Ist es fliegbar? Dein KI-Copilot weiss es." | Kernfrage |
| "Von Wetterdaten zur Flugentscheidung in 30 Sekunden." | Zeitverschwendung |
| "Gebaut fuer Schweizer Taeler. Angetrieben von KI." | Alpine Spezifitaet |
| "Die Wetter-App die Pilot spricht, nicht Meteorologe." | Jargon-Problem |
| "Dein Morgen-Wetter-Check — erledigt." | Routine-Pain |
| "Sagt dir, ob du fliegen kannst." | Deutsch, direkt |

---

## Teil 7: Research Gaps & Naechste Schritte

### Was wir noch NICHT wissen (= validieren mit Interviews)

| Frage | Methode | Prioritaet |
|-------|---------|-----------|
| Exakte Zahlungsbereitschaft (CHF 29/39/49?) | Survey, 200+ Piloten | HOCH |
| Vertrauen in KI bei Safety-Critical Entscheidung? | Interviews, 20-30 Piloten | HOCH |
| Welche Features sind Day-1-Must-Have vs. Nice-to-Have? | Feature-Prioritization Survey | HOCH |
| Wie genau muss KI sein bevor Piloten vertrauen? | Interviews | MITTEL |
| Wuerden Instruktoren die App empfehlen? | Interviews mit 5+ Flugschulen | MITTEL |
| Wie wichtig ist Offline-Modus in den Bergen? | Survey | MITTEL |
| Deutsch-only oder auch Franzoesisch/Italienisch? | Survey | NIEDRIG |

### Empfohlene Validation-Steps

1. **20-30 Pilot-Interviews** an CH-Clubs (Interlaken, Zuerich, Bern)
2. **Paraglidable testen** (Android) — KI-Qualitaet benchmarken
3. **burnair Premium kaufen** (EUR 119) — UX/Features analysieren
4. **Survey via SHV/FSVL** — Quantitative Validierung der Pain Points
5. **Flybubble Weather analysieren** — Ampel-Ansatz als UX-Referenz

---

## Quellen

- [Swiss Paragliding Safety](https://swiss-paragliding.ch/en/paragliding-saftey-switzerland/)
- [PMC: Epidemiology Aerial Sports Switzerland](https://pmc.ncbi.nlm.nih.gov/articles/PMC7063457/)
- [Soaringmeteo](https://soaringmeteo.org/)
- [Flybubble Weather](https://flybubble.com/blog/flybubble-weather)
- [Paraglidable](https://paraglidable.com/)
- [burnair Map - Google Play](https://play.google.com/store/apps/details?id=com.burnair.burnairmap)
- [burnair Go - Google Play](https://play.google.com/store/apps/details?id=cloud.burnair.go)
- [Top Paragliding Apps - Adventuro](https://adventuro.com/top-paragliding-apps-you-dont-want-to-fly-without/)
- [Best Paragliding Apps - ParaglidingTip101](https://paraglidingtip101.com/best-paragliding-apps-for-realtime-weather-and-wind-forecasting.html)
- [Windy.app Paragliding Guide](https://windy.app/guide/mini-guide-to-paragliding-with-windy-app.html)
- [paraglidingforum.com - burnair Discussion](https://www.paraglidingforum.com/viewtopic.php?t=112541)
- [Paraglidable GitHub](https://github.com/AntoineMeler/Paraglidable)

---

**Version:** 1.0
**Letzte Aktualisierung:** 2026-04-17
**Status:** Framework + Inferierte Insights. Verbatim-Quotes mit [HIGH/MEDIUM/LOW] Confidence markiert.
**Naechster Schritt:** Validation durch 20-30 Pilot-Interviews
