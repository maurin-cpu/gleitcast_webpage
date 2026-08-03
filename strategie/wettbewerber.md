# Wettbewerber-Übersicht — Wingcast

**Datum:** 2026-05-13
**Status:** Aktiv — Gruppierung durch User 2026-05-13 bestätigt
**Quellen:** 17 YAML-Profile in `analysen/competitor_data/`, dazu Keyword-Analyse `strategie/keywords.md` und VOC-Synthese `analysen/customer-research-synthesis.md`.
**Tabu auf der Landing:** Konkurrenz-Namen werden hier intern genutzt, **nicht** auf wingcast.ch — Memory `feedback_keine_konkurrenz_attacks`.

---

## Schnellübersicht — vier Tiers

| Tier | Was | Wer | Wie wir konkurrieren |
|---|---|---|---|
| **T1 · Direkt** | Spot-/Thermik-Bewerter | XC-Therm, Burnair | Frontal — gleicher Use-Case, gleiche Pilot:innen |
| **T2 · Konzept-Nah** | Andere KI-/Ampel-Ansätze | Paraglidable, Flybubble Weather, Meteo-Parapente, where2fly | Differenzierung Physik+KI / CH-Alpine / Schweizerischer Spot-Datensatz |
| **T3 · Datenlieferanten** | Generelles Wetter | Windy, Meteoblue, MeteoSchweiz, KK7 | Komplementär — ergänzen, nicht ersetzen |
| **T4 · Anderes Segment** | In-Flight / Site-Datenbanken | XCTrack, FlySkyHy, SeeYou, Gaggle, AeroXC, Paragliding-Map | Kein Overlap — nicht Zielgebiet |

---

## T1 — Direkte Wettbewerber

### XC-Therm (`xctherm.com`) — am ähnlichsten

| Aspekt | Status |
|---|---|
| **Use-Case** | Gratis hochauflösende Thermik-Vorhersagen für PG/HG |
| **Pricing** | Komplett gratis |
| **Plattformen** | Web-only — kein Mobile |
| **Abdeckung** | 1 354 Regionen in Europa, 3-sprachig (DE/EN/FR) |
| **Tech** | Modell-basiert (ICON-EU, ICON-D2) — keine KI |
| **SEO-Position** | #1 für `xc therm`, #1 für `thermik prognose` (CPC $42.56!), #3 für `thermikprognose schweiz` |
| **Stärken** | Gratis, gute europäische Abdeckung, pilot-spezifische Aufbereitung |
| **Schwächen** | Nur Web (kein Mobile), reine Modellanzeige ohne Interpretation, keine Startplatz-DB, keine KI |

**Warum am ähnlichsten:** Gleiches Versprechen (Thermik-Forecast für Piloten, gratis), gleiche Daten-Modelle (ICON-Familie). XC-Therm bewertet aber **regional** ohne Spot-Granularität und ohne Bewertungs-Logik — Pilot muss selbst interpretieren.

**Wingcast-Hebel gegen XC-Therm:**

1. **494 spezifische Schweizer Startplätze** statt 1 354 Regionen → näher an der Pilot-Entscheidung
2. **Mobile-First** (App + Mail) statt Web-only
3. **KI-Bewertung mit Klartext-Begründung** statt Roh-Forecast
4. **CH-Alpen-Fokus** mit ICON-CH1 (1 km) + ICON-CH2 (2 km) — XC-Therm nutzt nur ICON-D2/EU

**Gegnerische Hebel:**

- XC-Therm hat 5+ Jahre Such-Reputation auf `thermikprognose` aufgebaut (siehe Keyword-Analyse).
- Mehrsprachig (DE/EN/FR) — Wingcast aktuell DE-only.

---

### Burnair (`burnair.cloud`) — Marktführer Premium-Alpine

| Aspekt | Status |
|---|---|
| **Use-Case** | Komplette Flugplanung + Live-Tracking für Alpine Piloten |
| **Pricing** | EUR 49/J Basic, EUR 119/J Premium — **kein Free-Tier** |
| **Plattformen** | Web, Android, iOS — **zwei separate Apps** (burnair Go = In-Flight, burnair Map = Planung) |
| **Abdeckung** | 5 000+ Startplätze, Alpen-Schwerpunkt |
| **Tech** | KK7-Thermik-Lizenz, Talwind-Modelle, Lee-Daten, Live-Thermals von Community — **keine KI** |
| **SEO-Position** | #1 für `burnair`, #2 für `burnair map`, #2 für `live tracking`, stark auf Hike-and-Fly |
| **Stärken** | Umfangreichster Alpine-Datensatz, KK7-Integration, Live-Thermals, etablierte Marke, Live-Tracking + Freunde |
| **Schwächen** | Teuer, keine KI/Interpretation, komplexe UI, zwei Apps statt einer, kein Anfänger-Onboarding |

**Häufigste Beschwerden (aus Foren/Reviews):**

- *„Teuer für das, was es bietet"*
- *„Brauche Wetter-Wissen, um die Daten zu nutzen"* ← **direkter Lukas-Schmerz**
- *„Warum zwei Apps statt einer?"*
- *„Vermisse eine einfache Empfehlung, ob fliegbar oder nicht"* ← **direkter Sarah-Schmerz**

**Wingcast-Hebel gegen Burnair:**

1. **Dauerhaft gratis** statt EUR 49–119/J → Sarah-Killer-Argument
2. **KI-Bewertung mit Erklärung** statt Rohdaten-Interpretation → Lukas-Killer-Argument
3. **Eine App** statt Go + Map
4. **Anfänger-freundliche Aufbereitung** ohne Kompromisse bei Modell-Tiefe

**Gegnerische Hebel:**

- 5 000 vs. 494 Spots (10× mehr)
- KK7-Lizenz für Thermik-Hotspots (Wingcast hat keine)
- Live-Tracking + Community-Thermals (Wingcast hat das nicht)
- 8+ Jahre Marktpräsenz, etablierte Marke im SHV-Umfeld

**Switching-Trigger** (wer wechselt von Burnair zu Wingcast):

- Frustriert von manueller Interpretation
- Preis-sensitiv (will EUR 119 nicht zahlen)
- Anfänger:in, die Erklärungen statt Rohdaten will
- Will eine App statt zwei

**Wer bleibt bei Burnair:**

- XC-Pilot:innen, die Live-Thermals brauchen (Marco-Profil)
- Wer Live-Tracking + Freunde-Funktion nutzt
- Wer detaillierte KK7-Hotspot-Karten schätzt

---

## T2 — Konzept-nahe Wettbewerber

### Paraglidable (`paraglidable.com`) — primärer KI-Konkurrent

| Aspekt | Status |
|---|---|
| **Use-Case** | KI-gestützte Fliegbarkeits-Vorhersage (Score-basiert) |
| **Pricing** | Freemium (Pricing intransparent) |
| **Plattformen** | Web + Android — **kein iOS** (Lukas hat iPhone!) |
| **Tech** | Neural Network, 10 J. Wetterarchive + 2 Mio. Flüge als Training, ~200 Parameter |
| **Open Source** | Ja — auf GitHub |
| **Stärken** | Stärkste KI-Implementierung im Markt, Flyability + Crossability Scores, 10-Tage-Forecast |
| **Schwächen** | **Score ohne Erklärung** („72 % — but why?"), kein iOS, keine Alpen-Spezialisierung, keine Skill-Level-Anpassung |

**Wingcast-Hebel gegen Paraglidable:**

1. **Erklärbarkeit** — Klartext-Begründung statt nackter Score → Marco-skeptisch-zu-überzeugt-Hebel
2. **iOS-Support** über Web-App
3. **Alpen-spezifische Engine** (ICON-CH1/CH2, Föhn-Detektion via ΔP Zürich–Lugano)
4. **Multi-Modell + Physik-Layer** (Paraglidable: ein Neural Network — Wingcast: 5 Modelle + Parcel-Physik + LLM)

**Hauptbeschwerde aus VOC-Daten:** *„Paraglidable-Score ist nützlich, aber erklärt nicht WARUM"* (Marco-Quote).

---

### Flybubble Weather (`weather.flybubble.com`) — Ampel-Pionier

| Aspekt | Status |
|---|---|
| **Use-Case** | Ampelsystem pro Startplatz (Grün/Orange/Rot) |
| **Pricing** | Komplett gratis |
| **Abdeckung** | **Nur UK + Ireland** — keine Alpen |
| **Tech** | RASP-basiert, keine KI, manuelle Site-Kriterien |
| **Plattformen** | Web-only |
| **Stärken** | Genau das, was Pilot:innen wollen (Ampel pro Site), Wing-Type-Anpassung, „Anybody flying?"-Community, Email-Alerts |
| **Schwächen** | **Nur UK/Ireland**, kein Mobile, keine KI, nur RASP |

**Strategische Relevanz:** Flybubble validiert das **Ampel-Konzept** im Markt (UK-Pilot:innen lieben es). Wingcast hat das gleiche Konzept (5-Tier-Rating: Legendär/Fliegbar/Abgleiter/Bedingt/Nicht fliegbar) — aber für die Alpen + mit KI-Layer.

**Kein direkter Wettbewerb in der Schweiz**, aber wertvolle Referenz für Produkt-Validierung.

---

### Meteo-Parapente (`meteo-parapente.com`) — verlierender Player

| Aspekt | Status |
|---|---|
| **Use-Case** | Gratis-Gleitschirm-Wettervorhersage |
| **Pricing** | Freemium |
| **Plattformen** | Web, Android, iOS |
| **Abdeckung** | 24+ Länder Europa, 2.5 km Auflösung |
| **Stärken** | Gratis, Europa-weit |
| **Schwächen** | Schlechter Developer-Support, *„UI Jahre hinter der Konkurrenz"* (User-Quote), limitierte Features, **verliert aktiv Nutzer** |

**Strategische Relevanz:** **Beste Akquise-Quelle.** Meteo-Parapente-Nutzer:innen sind bereits an eine Gleitschirm-Wetter-App gewöhnt, aber frustriert → idealer Switching-Pool. Memory verbietet Namensnennung in Copy.

---

### where2fly (`where2fly.info`) — Schweizer Gratis-Site-DB

| Aspekt | Status |
|---|---|
| **Use-Case** | Gratis Startplatz-Finder mit Schweiz-Fokus |
| **Pricing** | Komplett gratis + werbefrei (Flugbuch als Einmalkauf) |
| **Plattformen** | **Nur iOS** |
| **Stärken** | Schweizer Schwerpunkt, gratis, werbefrei, ÖV-Anbindung an Startplätze |
| **Schwächen** | Nur iOS, keine Wetter-Bewertung |

**Strategische Relevanz:** **Komplementär**, kein echter Wettbewerb. where2fly = wo sind die Spots, Wingcast = welcher Spot fliegt heute. Potenzielle Kooperation, kein Frontalangriff.

---

## T3 — Datenlieferanten / Generelles Wetter

**Hinweis (User-Klassifikation 2026-05-13):** Windy / MeteoBlue / MeteoSchweiz sind **weniger direkte Konkurrenten** und eher Datenlieferanten — Pilot:innen nutzen sie parallel zu Spezial-Tools, nicht als Ersatz für eine Flyability-Bewertung.

### Windy.com — Industrie-Standard Wetter-Visualisierung

- **Use:** Wetter-Visualisierung, fast jede:r Pilot:in nutzt es
- **Stärken:** 8+ Modelle (ECMWF, GFS, ICON, AROME …), 55 000 Webcams, „Air Profile"-Preset, gratis
- **Schwächen:** Generisch, keine Flyability-Bewertung, keine Spot-DB im PG-Sinn, keine KI
- **Strategie:** **Niemals versuchen, Windy zu ersetzen.** Wingcast positioniert sich als **die Schicht oberhalb von Windy** (*„Windy zeigt dir die Daten, Wingcast sagt dir, was sie bedeuten"*).

### Meteoblue — Schweizer Wetter-Expertise

- **Use:** Professionelle Vorhersage mit Thermik-Spezialität (TI auf 700/800/850/900 hPa)
- **Schweizer Unternehmen aus Basel** — von vielen CH-Pilot:innen als Referenz genutzt
- **Schwäche aus Pilot-Sicht:** Komplex, kein Flyability-Score, keine Spot-DB
- **Strategie:** **Potenzielle Datenquelle** (API verfügbar). Eher Partner als Wettbewerber.

### MeteoSchweiz — offizielle Schweizer Vorhersage

- **Use:** Offizielle Föhn-Warnungen, Vertrauens-Anker für CH-Pilot:innen
- **Strategie:** Wingcast nutzt ICON-CH1/CH2 **via Open-Meteo-Aggregation** (keine Direkt-Lizenz). Wording-Vorgabe: *„Modell-Aggregation via Open-Meteo (inkl. ICON-CH1 von MeteoSchweiz)"* — nicht *„Datenquelle: MeteoSchweiz"*. Siehe `landing-briefing-phase1.md §7`.

### KK7 Thermal Maps (`thermal.kk7.ch`) — historische Thermik-DB

- **Use:** Thermik-Wahrscheinlichkeitskarten aus realen Flugdaten (Master-Thesis-basiert)
- **Status:** **De-facto Standard** im Alpenraum, lizenziert von Burnair
- **Strategie:** **Potenzieller Daten-Partner.** Action-Items aus `competitor_data/kk7-thermal.yaml`: Michael Von Kaenel kontaktieren, Lizenzbedingungen klären, API-Zugang prüfen. **Offene Strategie-Frage:** Will Wingcast KK7 lizenzieren oder weiterhin nur Modell-Forecasts nutzen?

---

## T4 — Andere Segmente (kein direkter Overlap)

### In-Flight-Tools

| Tool | Plattform | Pricing | Rolle |
|---|---|---|---|
| XCTrack | Android | gratis | Standard Android Flight-Computer |
| FlySkyHy | iOS | bezahlpflichtig | iOS-Pendant |
| SeeYou Navigator | beides | bezahlpflichtig | Cross-Country-Planner |
| Gaggle | beides | freemium | Live-Tracking + Social |
| AeroXC | beides | freemium | Cross-Country mit Vario-Integration |

**Strategische Relevanz:** **Anderes Segment.** Wingcast ist **Pre-Flight Decision Support**, In-Flight-Tools sind **während des Flugs**. Kein Frontalwettbewerb, mögliche Komplementarität.

### Site-Datenbanken / Karten

- **Paragliding Map (`paragliding-map.com`)** — globale Startplatz-DB, Free-Tier eingeschränkt
- **where2fly** (siehe T2 oben)

**Strategische Relevanz:** Komplementär. Wingcast hat 494 Spots **mit Wetterbewertung** — Site-DBs haben mehr Spots **ohne Bewertung**.

---

## Strategisches Big Picture

### Wo Wingcast einzigartig steht

> **Nicht „genauere Daten" oder „mehr Modelle" — sondern: schnelle Entscheidung statt Daten-Wühlen, und eine Erklärung in Klartext, weshalb ein Spot gut oder schlecht ist.**

Die meisten Wettbewerber nutzen ähnliche Modell-Quellen. Der Unterschied liegt darin, **was aus den Daten gemacht wird** und **wie verständlich** es geliefert wird.

| Wettbewerber | Sortiert pro Tag | Klartext-Erklärung weshalb | Dauerhaft gratis | CH-Alpen-Fokus |
|---|---|---|---|---|
| XC-Therm | regional, nicht spot-genau | – (nur Forecast-Anzeige) | ✓ | teils |
| Burnair | Spots ohne KI-Sortierung | – (Pilot interpretiert selbst) | – | ✓ |
| Paraglidable | Score pro Spot | – (Score ohne Erklärung) | Freemium | – |
| Flybubble | Ampel pro Site | minimal | ✓ | – (nur UK) |
| Meteo-Parapente | – | – | Freemium | teils |
| **Wingcast** | **pro Tag, pro Spot** | **Klartext warum gut/schlecht** | **dauerhaft** | **fokussiert** |

### Hauptangriffsflächen (geordnet nach Hebel)

1. **Speed-to-Decision** — XC-Therm/Burnair zeigen Daten, Pilot muss synthetisieren. Wingcast sortiert vor → **Sarah-Killer** (45 Min Routine wegfällt)
2. **Klartext-Erklärung** — Paraglidable bietet Score ohne WARUM, Burnair Rohdaten ohne Übersetzung → **Lukas-Killer** (versteht endlich, weshalb)
3. **Preis** — Burnair EUR 49–119/J vs. Wingcast 0 CHF → preissensitive Persona-Schicht
4. **CH-Alpen-Fokus** — Föhn-Erkennung via ΔP Zürich–Lugano + 494 Schweizer Spots — niemand sonst hat diese Lokal-Tiefe

### Was wir NICHT als Vorteil behaupten

- ❌ *„Genauere Daten als andere"* — Modelle sind grossteils dieselben Quellen
- ❌ *„Eine App statt zwei"* — funktional, nicht differenzierend
- ❌ *„Mehr Modelle als X"* — Vergleichsstreit, kein selbstreferenzieller USP

### Hauptverteidigungslinien (Wo wir kämpfen müssen)

1. **Spot-Anzahl** — Burnair 5 000 vs. Wingcast 494 → langfristig auf 1 000+ erweitern
2. **Live-Daten** — Burnair hat KK7-Hotspots + Live-Thermals, Wingcast hat Modellvorhersage → KK7-Lizenz prüfen, Pilot-Live-Submission als V2-Feature
3. **Plattform-Reichweite** — Wingcast aktuell Web-App → native iOS/Android als V2/V3

### Akquise-Strategie (priorisiert)

1. **P1:** Frustrierte Burnair-Basic-Nutzer:innen (EUR-49-zahlend, will Erklärung) — über Reddit, paraglidingforum.com, Facebook „Gleitschirm Schweiz"
2. **P1:** Meteo-Parapente-Wechsler (frustriert, gewöhnt an PG-spezifische App) — über DE/FR-Foren
3. **P1:** Neubrevetierte → Flugschulen, SHV/FSVL-Listen
4. **P2:** XC-Pilot:innen über XContest-Community, Swiss League — aber konvertieren langsamer, hohe Skepsis
5. **Nicht:** Burnair-Premium-Nutzer:innen (XC-Pilot:innen mit Live-Tracking-Bedarf — Burnair-Stärken überwiegen für sie)

---

## Offene strategische Fragen

1. **KK7-Lizenz:** Jetzt verhandeln oder weiterhin nur Modell-Daten? Pro: Vergleichbarkeit mit Burnair. Contra: Lizenzkosten + KK7 ist historisch, nicht prädiktiv (Wingcasts KI deckt Letzteres).
2. **Mehrsprachigkeit:** XC-Therm rankt auf FR + EN — soll Wingcast nach DE auch FR + IT (Memory `project_markt_strategie` plant das)? Frage: Welche Priorität gegenüber V1-Stabilität in DE?
3. **Live-Pilot-Submissions** als V2-Feature gegen Burnair Live-Thermals? Macht das Sinn ohne grosse aktive Pilot-Base?
4. **Native Apps** vs. Web-App: Sarah / Marco wollen Push-Notifications fürs Wochencast. Web-Push reicht heute oder native nötig?

Diese Fragen sind nicht zu beantworten ohne explizite User-Entscheidung — bei nächster Strategie-Runde durchgehen.
