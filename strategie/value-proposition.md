# Value Proposition — Wingcast

**Datum:** 2026-05-13
**Status:** Aktiv
**Quellen:** `strategie/personas.md` · `strategie/wettbewerber.md` · `strategie/keywords.md` · Memory `project_engine_architecture` + `project_design_system` + `feedback_keine_konkurrenz_attacks`
**Zweck:** Eine einzige Wahrheitsquelle dafür, **was Wingcast verspricht**, **gegenüber wem** und **wie es belegt ist** — damit Landing-Copy, Outreach, Pitch und FAQ konsistent bleiben.

---

## 1 · One-Line-Positioning

> **Für** Schweizer Gleitschirm-Pilot:innen, die schnell entscheiden wollen, wo es diese Woche fliegt, **ist Wingcast** die KI-bewertete Flugwetter-App, **die** 488 Schweizer Startplätze sortiert ausspielt und in Klartext erklärt, weshalb ein Spot gut oder schlecht ist — **dauerhaft gratis**.

### Kurzvarianten (für unterschiedliche Slots)

| Slot | Länge | Variante |
|---|---|---|
| Hero-Headline (aktuell) | ~10 Worte | *„Welcher Spot fliegt diese Woche? Du siehst es auf einen Blick."* |
| Social-Bio | ~10 Worte | *„Schweizer Flugwetter, in Klartext. 488 Spots, sortiert pro Tag, gratis."* |
| Pitch in 1 Satz | ~25 Worte | *„Statt stundenlang durch Wettermodelle zu wühlen, siehst du in 30 Sekunden, welche Schweizer Startplätze fliegen — mit Erklärung in Klartext, weshalb ein Spot heute gut oder schlecht ist."* |
| Pitch in 1 Wort | 1 Wort | **Decision Support.** *(nicht Decision Maker — Memory)* |

---

## 2 · Was wir versprechen — die echten USPs

> **Wichtig:** „Genauere Daten" ist **kein** USP. „Eine App" ist **kein** USP. Andere Apps haben oft die gleichen Modelle. Unser Unterschied liegt darin, **was wir aus den Daten machen** und **wie schnell und verständlich** wir es ausliefern.

### USP 1 · Schnelle Entscheidung statt Daten-Wühlen

> *„Du siehst sofort, welche Gebiete heute oder diese Woche gut sein könnten — ohne dich stundenlang durch Wetterdaten zu wühlen."*

- 488 Schweizer Startplätze werden automatisch pro Tag sortiert
- 5-Tier-Rating mit Farbe + Icon + Text → in Sekunden lesbar
- Aggregierter Forecast statt manuellem Modell-Vergleich
- **Adressiert:** Sarah („45 Min Routine"), Lukas („ich weiss nicht wo anfangen")

### USP 2 · Erklärung in verständlicher Sprache, weshalb gut oder schlecht

> *„Wir helfen und unterstützen schnell eine Entscheidung zu finden — alles erklärt in verständlicher Sprache, weshalb ein Spot gut oder schlecht ist."*

- Jeder Spot kommt mit Klartext-Begründung in Pilotensprache, nicht Rohdaten-Dump
- Beispiel-Output: *„Niesen heute Bedingt — Wind 18 km/h Süd ok, aber Lee-Risiko nach 14 Uhr wegen Südföhn. Sicheres Slot 11–13:30 Uhr."*
- Keine CAPE/Lapse-Rate/hPa-Begriffe ohne Übersetzung
- **Adressiert:** Lukas („verstehe Wetterdaten nicht"), Marco („Score ohne WARUM ist nutzlos")

### USP 3 · Dauerhaft gratis

> *„Keine Kreditkarte, kein Trial-Counter, kein verstecktes Abo."*

- Strategischer Entscheid: Forecast + Cast-Mail bleiben gratis (Memory `project_markt_strategie`)
- **Adressiert:** Lukas (preissensitiv nach Brevet-Investition), Sarah (zahlt bereits anderswo)

### Warum wir das versprechen können — die Proof-Points (kein USP, sondern Begründung)

Diese drei Elemente sind **wie** wir die USPs liefern, nicht **was** wir versprechen:

| Proof-Point | Was es ist | Warum es die USPs ermöglicht |
|---|---|---|
| **Multi-Modell** | 5 Modelle aggregiert (ICON-CH1, ICON-CH2, ICON-D2, ICON-EU, GFS via Open-Meteo) | Solide Datenbasis für die Bewertung — kein einzelnes Modell-Risiko |
| **Deterministische Physik** | Parcel-Methode, Inversions-Erkennung, Föhn-Detektion via Druckgradient + Höhenwind + Feuchte, Gust-Decay, Cloud-Holes | Atmosphären-Realität wird gerechnet, nicht von KI geraten |
| **KI obenauf** | LLM analysiert die gerechnete Physik, bewertet, schreibt Begründung | Aus den Daten wird eine Entscheidung in Klartext |

**Reihenfolge in der Kommunikation:** Erst USP (was hat der Pilot davon), dann Proof (warum dürfen wir das versprechen). Nie umgekehrt — sonst klingt es wie Tech-Marketing.

### Was wir NICHT als USP behaupten

- ❌ *„Wir haben genauere Daten als andere"* — Modelle sind grossteils gleiche Quellen
- ❌ *„Eine App statt zwei"* — funktionale Beobachtung, nicht Differenzierungskern
- ❌ *„Beste Forecast-Qualität"* — nicht messbar, nicht haltbar
- ❌ *„Mehr Modelle als Wettbewerber X"* — Vergleichsstreit, nicht selbstreferenziell

---

---

## 3 · Value Proposition pro Persona

Strukturiert als **Pain → Relief** und **Job → Outcome**, mit *Killer-Hebel* (was diese:n Persona unwiderstehlich macht).

### 3.1 · Lukas (P1) — Der Frischbrevetierte

| Element | Inhalt |
|---|---|
| **Pain** | „Ich verstehe die Wetterdaten nicht und traue meiner eigenen Einschätzung nicht." |
| **Relief** | Die KI **erklärt in Klartext**, was die Modelle für seinen Flug bedeuten — *„Heute Niesen = Bedingt fliegbar, weil Föhn-Tendenz ab 14 Uhr"*. |
| **Job** | Sicher und selbstständig fliegen lernen, ohne ständig den Instruktor fragen zu müssen. |
| **Outcome** | Mehr Flugtage mit ruhigem Bauchgefühl + Lerneffekt („so erkennst du Föhn"). |
| **Killer-Hebel** | **„Dauerhaft gratis"** + **„Erklärung in einfacher Sprache"** + **„Physik rechnet, KI erklärt"** (anti-magie für Anfänger-Skepsis). |
| **Headline-Variante** | *„Versteh, ob du heute fliegen kannst — ohne Wetter-Studium."* |
| **Anti-Claim** | Wir versprechen Lukas **nicht** *„sicher fliegen garantiert"* — er soll dazulernen, nicht ausgeliefert sein. |

### 3.2 · Sarah (P1) — Die Wochenend-Vielfliegerin

| Element | Inhalt |
|---|---|
| **Pain** | „45 Minuten Wetter-Check jeden Samstag ist Wahnsinn — und letzte Woche war die 1.5-h-Fahrt umsonst." |
| **Relief** | **5-Tage-Forecast für alle 488 Spots, sortiert pro Tag** + optionaler Freitag-Wochencast per Mail. |
| **Job** | Maximale Flugtage bei minimalem Planungsaufwand — jeden Samstag den besten Spot finden. |
| **Outcome** | 40 Minuten/Woche zurück + keine umsonst-Fahrten + kein zusätzliches Abo. |
| **Killer-Hebel** | **„0 CHF statt EUR 49"** + **„in 30 Sekunden statt 45 Minuten"** + **„automatisch sortiert pro Tag"**. |
| **Headline-Variante** | *„Welcher Schweizer Spot fliegt diese Woche? In 30 Sekunden statt 45 Minuten."* |
| **Anti-Claim** | Wir versprechen Sarah **nicht** *„ersetzt deine Quellen"* — sie soll weiter verifizieren, das ist Teil ihrer Skill-Identität. |

### 3.3 · Marco (P2) — Der XC-Ambitionierte

| Element | Inhalt |
|---|---|
| **Pain** | „Ich nutze 8+ Tools — KI-Score ohne Erklärung ist nutzlos, ich brauche Rohdaten + Confidence." |
| **Relief** | **Engine-Transparenz**: 5 Modelle, deterministische Physik (Parcel, Föhn-ΔP, Gust-Decay), KI-Bewertung obenauf — alles nachvollziehbar dokumentiert. |
| **Job** | Optimale XC-Tage identifizieren ohne Bevormundung durch eine Black-Box-KI. |
| **Outcome** | Ein Tool, das die anderen vor-sortiert, ohne ihm sein Pilot-Urteil zu nehmen. |
| **Killer-Hebel** | **„Keine Magie — Physik rechnet, KI bewertet"** + **„welche Modelle, welche Physik, was die KI macht"**. |
| **Headline-Variante** | *„Multi-Modell-Aggregation + deterministische Physik + KI-Bewertung — alles sichtbar."* |
| **Anti-Claim** | Wir versprechen Marco **nicht** *„ersetzt deine Erfahrung"* — er ist Decision Maker, Wingcast ist Decision Support. Auch nicht *„Confidence-Score"* (noch nicht eingebaut, siehe `landing-briefing-phase1.md §7`). |

---

## 4 · Was Wingcast bietet, das die Personas wollen (Cross-Check)

Aus `personas.md` „Top-Pains" und `wettbewerber.md` „Was Piloten wollen":

| Pilot-Wunsch | Wer braucht es | Bietet Wingcast? | Wie / wo sichtbar |
|---|---|---|---|
| „Sag mir einfach, ob ich fliegen kann" | Lukas, Sarah | ✓ | 5-Tier-Rating mit Icon + Text + Farbe (HowItWorks-Preview) |
| „Erklär mir WARUM" | Lukas, Marco | ✓ | KI-Klartext-Begründung pro Spot (FAQ + Hero-Pill) |
| „Spar mir Zeit" | Sarah | ✓ | 488 Spots automatisch sortiert pro Tag |
| „Gratis" | Lukas, Sarah | ✓ | Dauerhaft, ohne Kreditkarte (Hero-Subline + FAQ) |
| „Schweizer Alpen-Fokus" | Alle drei | ✓ | ICON-CH1/CH2 + Föhn-ΔP + 488 CH-Spots |
| „Eine App, nicht zwei" | Sarah, Lukas | ✓ | Web-App + optional Cast-Mail |
| „iOS-Support" | Lukas | ✓ | Web-App läuft auf iOS |
| „Zeig mir die Logik" | Marco | ✓ | HowItWorks-Schritte + FAQ „Was macht die KI?" |
| Live-Thermals von Community | Marco | ✗ | **Nicht** geboten — V2-Roadmap |
| KK7-Thermal-Hotspots | Marco | ✗ | **Nicht** geboten — Lizenz offen |
| Route-basierte XC-Vorhersage | Marco | ✗ | **Nicht** geboten — kein V1-Feature |
| Live-Tracking + Freunde | Marco | ✗ | **Nicht** geboten — anderes Segment |
| Confidence-Score je Vorhersage | Marco | ⚠ | Intern in der Engine vorhanden, **nicht** auf der Landing versprochen |
| Push-Notifications für „Morgen fliegbar" | Sarah | ⚠ | E-Mail-Cast vorhanden, Push noch offen |

**Lesart:** Lukas + Sarah bekommen **alles**, was sie wollen. Marco bekommt **das Wichtigste** (Transparenz, gratis, Schweiz), aber drei XC-spezifische Features fehlen — daher P2, nicht P1.

---

## 5 · Boilerplate-Messaging pro Channel

### 5.1 · Landing (wingcast.ch) — aktueller Stand

- **Hero-Headline:** *„Welcher Spot fliegt diese Woche? Du siehst es auf einen Blick."*
- **Subline:** *„5-Tage-Forecast für 488 Schweizer Startplätze — sortiert pro Tag, in Klartext erklärt, von ersten Flügen bis XC. Gratis, keine Kreditkarte."*
- **Trust-Pills:** *488 Schweizer Spots · 5 Wettermodelle aggregiert · KI bewertet, Physik rechnet*

### 5.2 · Outreach / Cold Reach (Reddit, Forum, E-Mail)

```
Hi, ich baue Wingcast — eine gratis Schweizer Flugwetter-App mit
Multi-Modell-Aggregation (ICON-CH1, ICON-CH2, ICON-D2, ICON-EU, GFS)
und KI-Bewertung pro Spot. Aktuell Beta, 488 Spots. Würde mich über
Feedback freuen: wingcast.ch
```

### 5.3 · Pitch im Gespräch / Event

> *„Stell dir vor: Statt am Samstag um 6:30 fünf Apps zu vergleichen, öffnest du eine App und siehst sofort, welcher Spot heute fliegt — mit Begründung, was Wind und Thermik machen. Das ist Wingcast. Multi-Modell-Aggregation aus fünf Wettermodellen, klassische Atmosphären-Physik im Code, und eine KI obenauf, die das in Klartext übersetzt. 488 Schweizer Startplätze. Dauerhaft gratis."*

### 5.4 · Social Bio (Instagram / Twitter / LinkedIn)

> *Schweizer Flugwetter mit KI. 488 Spots aus 5 Modellen, gratis. Beta — bau mit. → wingcast.ch*

### 5.5 · App-Store-Beschreibung (für späteren native-App-Launch)

> *„488 Schweizer Startplätze, 5 Wettermodelle, KI-Bewertung in Klartext. Erfahre in 30 Sekunden, welcher Spot diese Woche fliegt — mit Begründung, ohne Wetter-Studium. Dauerhaft gratis."*

---

## 6 · Tabu — was wir NIE versprechen

Aus Memory + `landing-briefing-phase1.md`:

| Tabu | Warum | Stattdessen |
|---|---|---|
| *„genauere Daten als andere"* | Modelle sind grossteils dieselben Quellen; Anmassung | *„sortiert vor, erklärt in Klartext"* — Unterschied ist Aufbereitung, nicht Datenqualität |
| *„mehrmals täglich aktualisiert"* | Falsch — wir laden Daten einmal morgens für den ganzen Tag (User-Bestätigung 2026-05-13) | *„einmal morgens aggregiert für den ganzen Tag"* |
| *„eine App statt zwei"* | Stich gegen Wettbewerber, funktionale Beobachtung statt USP | Funktion einfach erfüllen, nicht hervorheben |
| *„präziser als MeteoSchweiz"* | Direkt-Lizenz-Suggestion + Anmassung | *„Modell-Aggregation via Open-Meteo, inkl. ICON-CH1 von MeteoSchweiz"* |
| *„garantiert sicher"* | Lebensgefährlich + nicht haltbar | *„Decision Support — du entscheidest am Startplatz"* |
| *„besser als alle anderen"* | Vergleichswettstreit | Selbstreferentielle Differenzierung (USPs in §2) |
| Direkter Konkurrenzname | Memory `feedback_keine_konkurrenz_attacks` | Selbstreferenziell, never Burnair/Paraglidable/Meteo-Parapente |
| *„Decision Maker"* | Pilot bleibt verantwortlich | *„Decision Support"* — siehe Trust-Sektion |
| *„Confidence-Score"* als Versprechen | Auf Landing nicht eingebaut | Engine hat es intern, nicht öffentlich versprechen bis sichtbar |
| Pricing-Versprechen ausser *„dauerhaft gratis"* | Paid-Plan später möglich | *„Aktuell und dauerhaft gratis"* — Paid nicht thematisieren (Memory `project_markt_strategie`) |
| *„ersetzt deine Quellen"* | Sarah/Marco verifizieren weiter | *„nimm die Empfehlung als Startpunkt, gleiche sie mit deinen Quellen ab"* |
| *„KI berechnet Thermik"* | Falsch — Physik rechnet, KI bewertet | *„Physik rechnet, KI bewertet"* — Memory `project_engine_architecture` |
| *„harte Override-Schwellen"* in Marketing-Copy | User-Entscheid 2026-05-13: technisches Detail, nicht Pilot-relevant | *„KI analysiert und bewertet"* statt Override-Mechanik erwähnen |

---

## 7 · Trust-Hebel — was wir EINHALTEN müssen

Damit die Value Proposition glaubwürdig bleibt:

1. **Engine-Transparenz** — Modelle, Physik-Berechnungen, KI-Rolle sind auf der Landing nachvollziehbar (HowItWorks, FAQ).
2. **Klartext-Disclaimer** — *„Decision Support, kein Decision Maker"* sichtbar (Trust-Sektion).
3. **Erklärung statt Score** — jede Empfehlung kommt mit *„weil Wind/Thermik/Föhn …"*.
4. **Beta-Ehrlichkeit** — was nicht funktioniert, wird benannt (BetaFeedback-Sektion).
5. **Founder-Authentizität** — Maurin schreibt persönlich, ist erreichbar (`info@wingcast.ch`), liest jede Mail.
6. **Quellen-Belege** — Footer nennt Open-Meteo + Modelle korrekt; Schema.org `featureList` listet Multi-Modell-Aggregation.

---

## 8 · Validation-Status — was ist belegt, was nicht

| Claim | Status | Beleg |
|---|---|---|
| 488 Spots | ✓ belegt | Datenbank-Anzahl in flychat |
| 5 Wettermodelle | ✓ belegt | `flychat/config.py` (WIND_MODEL, THERMAL_MODEL, FALLBACK_MODEL, validation gusts, GFS) |
| Deterministische Physik-Layer | ✓ belegt | `flychat/thermik_calculator.py`, `foehn_indicators.py`, `gust_calculator.py` |
| KI-Bewertung mit Klartext | ✓ belegt | `flychat/chat_engine.py`, LLM-Output |
| Dauerhaft gratis | ✓ Strategie-Entscheid | Memory `project_markt_strategie` |
| 5-Tage-Forecast | ✓ belegt | Engine + UI |
| CH-Alpen-Fokus | ✓ belegt | ICON-CH1/CH2 + 488 CH-Spots |
| Föhn-Detektion über ΔP Zürich–Lugano | ✓ belegt | `flychat/foehn_indicators.py` |
| „30 Sekunden statt 45 Minuten" | ⚠ plausibel | Nicht gemessen — UX-Annahme. Bei Outreach lieber unterspielen oder mit „in unter einer Minute" arbeiten. |
| „einmal morgens aggregiert für den ganzen Tag" | ✓ belegt | Daten-Update-Rhythmus (User-Bestätigung 2026-05-13) |
| „harte physikalische Override-Schwellen" | ✓ belegt (intern) | `flychat/engine/decision_engine.py` — wird auf Landing nicht mehr betont (User-Entscheid 2026-05-13) |
| 5-Tier-Rating mit eigenen Icons | ✓ belegt | Master §2.2 + Icons.tsx |
| Cast per E-Mail an wählbaren Wochentagen | ✓ belegt | App-Feature |

**Risiko-Claims** (am ehesten anfechtbar):

- „30 Sek statt 45 Min" — UX-Versprechen ohne Messung. Bei kritischer Nachfrage zurücknehmen auf „in einer Minute".
- „immer noch konservativ bei unsicheren Bedingungen" — qualitativ, nicht quantifiziert. Bleibt OK, weil als Tendenz formuliert.

---

## 9 · Mapping Value-Prop → Landing-Sektion

| Sektion (aktuell live) | Value-Prop-Element | Persona-Adressat |
|---|---|---|
| Hero-Headline | One-Liner („Welcher Spot fliegt") | Lukas + Sarah |
| Hero-Subline | Job + Dauerhaft gratis | Lukas + Sarah |
| Hero-Trust-Pills | USP-Stack-Punkte 1, 2/5, 3 | Lukas (Anti-Magie) + Marco (Engine-Glaubwürdigkeit) |
| Hero-Screenshot | „Eine App, sieht so aus" | Alle drei |
| Problem („Samstag 06:30") | Pain-Statement Sarah | Sarah primär, Lukas mit |
| HowItWorks Schritt 1 (Daten) | USP-Punkt 1 (Multi-Modell) | Marco + Lukas |
| HowItWorks Schritt 2 (Physik) | USP-Punkt 2 (Physik-Layer) | Marco + Lukas |
| HowItWorks Schritt 3 (KI) | USP-Punkt 3 (KI mit Klartext) | Lukas primär, Marco verifiziert |
| HowItWorks Cast-Preview | „eine App, so sieht das aus" | Alle drei |
| Trust (Maurin) | Founder-Authentizität | Lukas + Sarah |
| SubscribeForm | Job „loslegen in 60 Sek" | Sarah primär |
| FAQ | Tiefenfragen, Tabu-Themen einordnen | Marco + Lukas |
| BetaFeedback | Beta-Ehrlichkeit + Maurin-Mail | Alle drei |
| Footer | Quellen-Belege | Marco (Glaubwürdigkeit) |

---

## 10 · Offene Value-Prop-Entscheidungen

1. **Mehrsprachigkeit** — Bekommt FR/IT eine eigene Value-Prop-Variante (z. B. *„météo de vol Suisse — IA, 488 sites, gratuit"*)? Hängt an `wettbewerber.md` offene Frage 2.
2. **Marco-spezifische Sub-Page** (`/xc` oder `/pilot-pro`) — Wert für SEO + XC-Community? Würde Headline-Variante 3.3 in eigene Page giessen.
3. **Native-App-Versprechen** — Wenn iOS/Android-App kommt, ändert sich Punkt 6 des USP-Stacks („eine App"). Aktuell „Web-App" → später „iOS + Android + Web".
4. **„Lernen" als expliziter Gewinn für Lukas** — Aktuell implizit. Könnte als eigener Bullet *„Lerne dabei: warum Föhn, was ist Inversion"* aufgenommen werden? Risiko: macht Page edukativ statt entscheidend.

Diese Punkte gehören in die nächste Strategie-Runde — nicht heute lösen.
