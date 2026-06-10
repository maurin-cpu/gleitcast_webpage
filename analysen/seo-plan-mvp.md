# SEO-Strategieplan — Wingcast MVP

*Erstellt: 2026-04-20*
*Phase: Pre-Launch / Beta*
*Zielmarkt: Schweiz (primaer), DACH-Alpenraum (sekundaer)*
*Sprache: Deutsch-first, Englisch als sekundaere Hreflang-Variante*

---

## Executive Summary

Wingcast startet als Nischen-SaaS in einem kleinen, aber scharf definierten Markt (~15'200 SHV-lizenzierte Piloten CH, ~150'000 DACH). SEO-Strategie ist daher **Tiefe statt Breite**: wenige, hochrelevante Keywords auf Produktseiten + Content-Hub um Alpine Wetterkunde (Foehn, Talwind, Lee) als E-E-A-T-Fundament. Konkurrenz ist SEO-schwach (burnair, Paraglidable haben minimalen Content-Marketing-Footprint) — Chance fuer schnelle Sichtbarkeit bei korrekter Umsetzung.

**Jahr-1-Ziel:** 1'500 App-Installs, 300 Premium-Konversionen. SEO-Beitrag: 30-40 % der organischen Install-Pipeline (~450-600 Installs) ueber Brand-, Vergleichs- und Content-Keywords.

**Kern-Hebel MVP:**
1. Tight-Knit-Website mit 12-15 Seiten (nicht 50+) — schneller indexierbar, klare Topical Authority
2. Vergleichsseiten vs. burnair/Paraglidable als Conversion-Treiber (4-7 % Conversion-Benchmark)
3. Content-Hub `/wetterkunde` als E-E-A-T-Anker (Foehn, Talwind, Thermik erklaert)
4. GEO-Optimierung fuer AI-Suche (Piloten googeln zunehmend in ChatGPT/Perplexity nach Wetter-Erklaerungen)
5. Hreflang de-CH / de-DE / de-AT fuer spaetere Expansion ohne Refactoring

---

## 1. Discovery & Ausgangslage

### Business Snapshot
- **Produkt:** KI-Copilot fuer Fliegbarkeits-Entscheidung — Multi-Modell-Aggregation (Windy, MeteoSchweiz, MeteoBlue, RASP, KK7) + KI-Synthese
- **Modell:** Freemium (Free: 3 Sites, 3 Tage / Premium: CHF 39/Jahr, alle Sites, 5 Tage, Alerts)
- **Phase:** Pre-Launch, Beta-Tester aus CH-Clubs (Interlaken, Zuerich, Bern) geplant
- **Conversion-Path:** SEO → Landing → App-Install (iOS/Android) → Free-Account → 14-Tage-Trial → Premium

### Constraints
- Kleiner Markt (ceiling ~7'500 app-affine CH-Piloten) — kein Volumen-SEO moeglich
- Safety-Critical (Fliegen) — Content muss autoritativ, konservativ, quellenbasiert sein
- Saisonal (Mai-Oktober Hauptsaison, Nov-Apr flach) — Content-Cadence muss Off-Season nutzen
- Kein E-Commerce-Funnel (App-Store-Redirect) — Tracking-Attribution ueber Deeplinks/UTM

### KPI-Baseline (Pre-Launch = 0)
| Metrik | Monat 3 | Monat 6 | Monat 12 |
|---|---|---|---|
| Organische Sessions/Monat | 500 | 2'500 | 8'000 |
| Indexierte Seiten | 15 | 30 | 60 |
| Ranking-Keywords (Top 20) | 10 | 40 | 120 |
| Ranking-Keywords (Top 3) | 2 | 10 | 35 |
| Domain Rating (Ahrefs) | 5 | 12 | 25 |
| App-Installs aus Organic | 50 | 300 | 1'200 |
| Premium-Conversions aus Organic | 5 | 40 | 180 |
| Core Web Vitals (LCP/INP/CLS) | gruen | gruen | gruen |

---

## 2. Wettbewerbsanalyse

### Direct & Secondary Competitors — SEO-Profil

| Konkurrent | Geschaetzte DR | Kernkeywords | SEO-Schwaechen (= unsere Chance) |
|---|---|---|---|
| **burnair.ch** (CH-Marktfuehrer) | ~25-30 | "burnair", "startplaetze schweiz", "kk7" | Minimaler Content-Marketing-Footprint. Kein Blog. Kein Alpine-Wetter-Guide. Schwache Meta-Descriptions. Zwei Domains (burnair.ch + kk7.ch) zerstreut Link-Equity. |
| **paraglidable.com** | ~15-20 | "paragliding forecast", "flyability" | EN-only. Keine DACH-Keywords. Keine Vergleichsseiten. Schwaches Schema. Android-only = verliert iPhone-Suchanfragen. |
| **windy.com** | ~80 (Giant) | Generisch "wind forecast" | Nicht paragliding-spezifisch — dominiert aber informationelle Queries. **Nicht direkt angreifbar** — wir picken Nischen-Queries. |
| **meteoblue.com** | ~75 (Giant) | Generisch "wetter [ort]" | Wie Windy — breit, aber keine Paragliding-Interpretation. |
| **flybubble.com/weather** | ~35 | "flybubble weather", "rasp uk" | UK-Fokus, kein DACH. Validiert den Ampelsystem-Ansatz → wir uebernehmen das Pattern fuer Alpen. |
| **paraglidingmap.com** | ~40 | "paragliding sites", "startplatz [name]" | Staerkste Site-DB weltweit. **Nicht direkt attackieren** — stattdessen komplementaer (wir = Wetter, sie = Spot-Daten). Link-Partnership-Ziel. |

### Keyword-Gaps (was niemand gut abdeckt)

| Keyword-Cluster | Monatliches Volumen CH | Top-Ranker heute | Gap-Chance |
|---|---|---|---|
| "Foehn erkennen Gleitschirm" | 50-100 | Forenposts, SHV-PDF | **Hoch** — keine saubere Content-Seite |
| "Talwind Alpen erklaert" | 100-200 | MeteoSchweiz generisch | **Hoch** — keine pilotenspezifische Erklaerung |
| "[Startplatz] Wetter fliegen" (30-50 Sites) | 20-100 je Site | burnair, paragliding-map | **Mittel** — programmatic SEO moeglich |
| "Gleitschirm Wetter App" | 200-400 | burnair, paraglidable | **Hoch** — Vergleichs-Content fehlt |
| "burnair Alternative" | 50-100 | Reddit, Foren | **Sehr hoch** — keine dedizierte Seite existiert |
| "Paraglidable iPhone" / "Paraglidable iOS" | 50-100 | Reddit-Threads | **Sehr hoch** — wir = iOS-Alternative |
| "Fliegbarkeit [Ort] heute" | Je nach Site 10-50 | Sporadisch | **Mittel** — mit Schema fuer Rich Results angreifbar |
| "XC Prognose Alpen" | 100-150 | burnair | **Mittel** |

### E-E-A-T-Positionierung
- **Experience:** Piloten-gebaut fuer Piloten — muss ueberall spuerbar sein (Autor-Bios mit Brevet-Nr., Flugstunden, Clubs)
- **Expertise:** Partner / Advisor aus SHV, Flugschulen, Meteorologen (namentlich nennen)
- **Authoritativeness:** Original-Datenanalysen (Backtesting-Reports), Saison-Reviews, Presse-Features
- **Trust:** Transparente Confidence-Scores, Safety-Disclaimer auf jeder Vorhersageseite, HTTPS, klare Impressum/Datenschutz (CH + EU-konform)

---

## 3. Website-Architektur (MVP — 15 Kernseiten)

Bewusst **kleiner** als der SaaS-Standardtempl ate. MVP-Prinzip: wenig, aber topical hochdicht.

```
wingcast.app/
├── /                              ← Homepage (Hero: "Ampel statt Rohdaten")
├── /features                      ← Feature-Uebersicht (KI, Multi-Modell, Alpine, Alerts)
│   ├── /features/alpine-wetter   ← USP-Seite: Foehn/Talwind/Lee
│   ├── /features/ki-aggregation  ← USP-Seite: Multi-Modell + Confidence
│   └── /features/smart-alerts    ← USP-Seite: Push bei gutem Flugtag
├── /preise                        ← Freemium-Matrix + FAQ
├── /vergleich/
│   ├── /burnair-alternative      ← Konkurrenz-Seite (hoechste Prio)
│   ├── /paraglidable-ios         ← Konkurrenz-Seite
│   └── /vs-windy-meteoblue       ← "Warum Wingcast auf Windy/MB aufbaut"
├── /wetterkunde/                  ← Content-Hub (E-E-A-T-Anker)
│   ├── /foehn-gleitschirm        ← Pillar-Artikel
│   ├── /talwind-alpen            ← Pillar-Artikel
│   └── /ampelsystem-fliegbarkeit ← Pillar-Artikel
├── /blog                          ← Start mit 2-3 Artikeln, dann 1-2/Monat
├── /ueber-uns                     ← Team, Piloten-Hintergrund, Mission
├── /kontakt                       ← Plus Beta-Signup-Formular
└── /app                           ← Deeplink/Store-Redirect (iOS/Android)

Legal (noindex-freundlich, aber vorhanden):
├── /impressum
├── /datenschutz
└── /agb
```

### Internal-Linking-Prinzipien
- **Homepage → Features → /app** (Primary Conversion Path)
- **Blog/Wetterkunde → Features (relevante USP) → /app** (Secondary Path)
- **Vergleichsseiten → /preise → /app** (High-Intent Path)
- **Hub-and-Spoke:** `/wetterkunde` ist Hub, alle Pillar-Artikel linken zurueck + untereinander
- **Footer:** Nur rechtlich & Hauptnavigation — kein Link-Stuffing

### Hreflang-Struktur (ab Monat 6)
```
/de-ch/*  (default CH, hauptzielmarkt)
/de-de/*  (Deutschland-Alpenraum Bayern/Allgaeu)
/de-at/*  (Oesterreich-Alpenraum)
/en/*     (ab Phase 4 fuer internationale Piloten in Alpen)
```

---

## 4. Content-Strategie

### Keyword-Map nach Funnel

**BOFU (Bottom of Funnel — Conversion-fokussiert)**
| Zielseite | Primary Keyword | Secondary |
|---|---|---|
| / | "gleitschirm wetter app" | "paragliding app schweiz", "flyability app" |
| /preise | "gleitschirm wetter app kosten" | "burnair preis vergleich" |
| /vergleich/burnair-alternative | "burnair alternative" | "guenstiger als burnair" |
| /vergleich/paraglidable-ios | "paraglidable iphone", "paraglidable iOS" | "paraglidable alternative apple" |
| /features/alpine-wetter | "alpine wetter gleitschirm" | "foehn alarm app" |

**MOFU (Middle — Evaluation)**
| Zielseite | Primary Keyword | Secondary |
|---|---|---|
| /features | "ki gleitschirm wetter" | "multi model wetter prognose" |
| /features/ki-aggregation | "wetter modelle kombinieren" | "windy vs meteoblue was stimmt" |
| /features/smart-alerts | "fluggwetter alert" | "gleitschirm push benachrichtigung" |

**TOFU (Top — Awareness, E-E-A-T-Aufbau)**
| Zielseite | Primary Keyword | Secondary |
|---|---|---|
| /wetterkunde/foehn-gleitschirm | "foehn gleitschirm gefahr" | "foehn erkennen alpen" |
| /wetterkunde/talwind-alpen | "talwind alpen erklaert" | "thermischer talwind" |
| /wetterkunde/ampelsystem-fliegbarkeit | "fliegbarkeit bewerten" | "wann gleitschirm fliegen" |
| /blog (diverse) | Long-Tail Saisonal | s. Content-Kalender unten |

### Content-Prioritaeten MVP

**Priority 1 — Launch-Readiness (Woche 1-4):**
1. Homepage
2. /features + 3 Feature-Subpages
3. /preise
4. /ueber-uns
5. /vergleich/burnair-alternative (hoechster Konversions-Hebel)

**Priority 2 — Topical Authority (Woche 5-12):**
6. /vergleich/paraglidable-ios
7. /vergleich/vs-windy-meteoblue
8. /wetterkunde/foehn-gleitschirm (Pillar, ~2'500 Woerter)
9. /wetterkunde/talwind-alpen (Pillar, ~2'000 Woerter)
10. /wetterkunde/ampelsystem-fliegbarkeit

**Priority 3 — Scale (Woche 13-24):**
11-15. Blog-Artikel + evtl. programmatic Startplatz-Seiten (siehe unten)

### Programmatic SEO — Startplatz-Seiten (Phase 3 Evaluierung)
- **Idee:** `/startplaetze/[slug]` (z.B. `/startplaetze/niesen`, `/startplaetze/fiesch`) mit Live-Fliegbarkeits-Score via SSG/ISR
- **Volumen:** Pro Site ~10-100 Suchen/Monat, 50 Sites = 500-5'000 zusaetzliche Sessions
- **Risiken:** Index-Bloat, Thin-Content-Vorwurf wenn nur Datenbank-Rendering
- **Safeguards:** Pro Seite mind. Beschreibung (150+ Worte unique), lokale Besonderheiten, Foto, Schema `TouristAttraction` + `Place`
- **Entscheidung:** Erst nach Monat 6 testen mit 10 Pilot-Sites (Niesen, Interlaken, Fiesch, Verbier, Fluegen etc.) — wenn Indexierung sauber → skalieren auf 50+

### Content-Kalender — Jahr 1

| Monat | Pillar / Feature | Blog-Artikel (saisonal) |
|---|---|---|
| Monat 1 | Launch-Pages fertigstellen | — |
| Monat 2 | Foehn-Pillar | "Saisonstart: Checkliste fuers erste Fruehjahrsfliegen" |
| Monat 3 | Talwind-Pillar | "Mai-Thermik in den Alpen — was Piloten 2026 erwartet" |
| Monat 4 | Ampelsystem-Pillar | "Foehnlage Mai: Top-5-Tipps wie du sie erkennst" |
| Monat 5 | Vergleich paraglidable-ios | "Wetter-Modell-Showdown: Windy vs MeteoBlue vs RASP" |
| Monat 6 | Vergleich windy-meteoblue | "Jahres-Halbzeit: Wingcast Backtesting Report" (Orig. Data) |
| Monat 7 | Programmatic Pilot: 10 Startplaetze | "Interlaken Flyathon — unsere Auswertung" |
| Monat 8 | — | "XC-Saison: Beste Tage diesen Sommer (Datenanalyse)" |
| Monat 9 | Programmatic Scale auf 50 Sites | "Herbst in den Alpen: Foehn-Season" |
| Monat 10 | — | "Bisherige Beta-Tester-Stories: 5 Piloten, 5 Erkenntnisse" |
| Monat 11 | Winter-Content-Pivot | "Indoor-Training + Theorie: Wetterkunde vertiefen" |
| Monat 12 | Jahresrueckblick | "Wingcast Year in Review — Accuracy Report 2026" |

### E-E-A-T-Plan
- **Autoren-Bios** auf jedem Artikel: Pilot-Brevet-Nr., Jahre Erfahrung, Flugstunden, Clubs
- **Expert-Quotes** einbauen: SHV-Fluglehrer, Meteorologen (z.B. MeteoSchweiz-Kontakte suchen)
- **Original-Daten:** Monatliches Backtesting-Dashboard auf /accuracy (transparent, auch wenn mal schwach)
- **Reviews-Schema** fuer App-Stores (AggregateRating), sobald ≥ 20 Reviews
- **Presse-Erwaehnungen** aktiv suchen: SHV-Magazin, SwissGlider, Cross-Country-Magazin

---

## 5. Technisches Fundament

### Hosting & Performance
- **Stack-Empfehlung:** Next.js (SSG/ISR) auf Vercel oder Cloudflare Pages — optimal fuer Core Web Vitals
- **CDN:** Cloudflare (CH-Piloten sitzen europaweit unterwegs)
- **Bilder:** Next.js `Image` + AVIF/WebP, Lazy Loading, Responsive-Sizes
- **Core Web Vitals Targets:** LCP < 2.0s, INP < 150ms, CLS < 0.05 (alle gruen ab Launch)

### Schema-Markup Plan

| Seite | Schema-Typen |
|---|---|
| Homepage | `Organization`, `WebSite`, `SoftwareApplication`, `SearchAction` |
| /features/* | `SoftwareApplication` mit `featureList` |
| /preise | `SoftwareApplication` + `Offer` (CHF 39/yr, CHF 4.99/mo) |
| /vergleich/* | `FAQPage` + Comparison-Table (strukturiert, kein Schema-Type, aber Table-Markup) |
| /wetterkunde/* | `Article` + `FAQPage` + `BreadcrumbList` |
| /blog/* | `BlogPosting` + `Article` + `Author` (Person-Schema mit credentialLevel) |
| /startplaetze/* (Phase 3) | `Place` + `TouristAttraction` |
| Footer/Global | `BreadcrumbList` auf jeder Seite |
| App-Store-Bewertungen | `AggregateRating` ab 20+ Reviews |

### Technisches SEO Baseline
- **robots.txt** — `/admin`, `/api`, `/preview` disallow
- **XML-Sitemap** — auto-generiert, in Search Console eingereicht
- **Canonical-Tags** — ueberall, explizit self-canonical
- **hreflang** — vorbereitet ab Launch, aktiv ab Monat 6
- **Favicon + PWA-Manifest** — fuer mobile Indexierung
- **llms.txt** — fuer AI-Crawler (s. GEO-Abschnitt)
- **Open Graph + Twitter Cards** — alle Seiten
- **Analytics:** Plausible (cookie-free, GDPR/DSG-konform) + Google Search Console + Bing Webmaster + IndexNow-Ping

### Mobile-First
- Piloten checken Wetter ZU 80%+ auf dem Handy. Alles Mobile-First designen.
- Viewport-Meta, Touch-Targets ≥ 44px, keine horizontalen Scrolls
- App-Banner (Smart Banner iOS, Meta-Tag Android) auf Landing-Seiten fuer Install-Friction

---

## 6. GEO — AI-Suche-Optimierung

Piloten googeln zunehmend Wetter-Fragen in ChatGPT/Perplexity ("Ist heute Foehn am Niesen?", "Welche App besser — burnair oder Paraglidable?"). AI-Citations sind mittel-/langfristig wichtiger als klassische SERPs.

### Konkrete Massnahmen
- **llms.txt** im Root mit klarer Site-Struktur + Firmenbeschreibung
- **AI-Crawler zulassen** in robots.txt: `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`
- **Passage-Citability:** Jeder Absatz ein in sich geschlossener Gedanke mit Schluessel-Fakten. Kurze Listen. Definitive Aussagen ("Foehn entsteht durch..." statt "Man koennte sagen, dass...").
- **Original-Daten** (Backtesting-Reports) publizieren — AI-Modelle zitieren gerne Primaerquellen
- **FAQ-Schema auf allen Vergleichs- und Wetterkunde-Seiten** — direkter AI-Input
- **Brand-Mentions** in relevanten Foren (Paraglidingforum.com, paraglidingforum.ch, Reddit r/paragliding) — AI-Modelle lernen aus solchen Erwaehnungen
- **Monitoring:** monatlich manuelle Abfragen in ChatGPT/Perplexity/Google-AI-Overviews fuer Kern-Queries — tracken ob Wingcast zitiert wird

### AI-optimierte Content-Patterns
```
❌ "Wir glauben, dass unsere App ziemlich gut ist..."
✅ "Wingcast aggregiert 5 Wettermodelle (Windy, MeteoSchweiz, MeteoBlue, RASP, KK7) und liefert pro Startplatz einen Fliegbarkeits-Score von 0-100."

❌ Lange Marketing-Prosa ohne Struktur
✅ H2/H3-Struktur, Bullet-Points, definitive Statements, TL;DR am Anfang
```

---

## 7. Implementierungs-Roadmap

### Phase 1 — Foundation (Wochen 1-4) — "Launch-Ready"
**Ziel:** Domain + 9 Kernseiten live, technisch sauber, erste Indexierung

- [ ] Domain `wingcast.app` aufsetzen (oder .ch / .com entscheiden — .app wirkt modern, App-Store-konform)
- [ ] Next.js-Projekt auf Vercel (oder Cloudflare Pages) deployen
- [ ] Core Web Vitals Baseline messen + Fixes
- [ ] Homepage + /features + 3 Feature-Pages + /preise + /ueber-uns + /kontakt schreiben
- [ ] /vergleich/burnair-alternative (KRITISCH — hoechster Conversion-Hebel)
- [ ] Organization + WebSite + SoftwareApplication Schema
- [ ] robots.txt, sitemap.xml, llms.txt, canonical tags
- [ ] Search Console + Bing Webmaster + Plausible einrichten
- [ ] Open Graph + Twitter Cards auf allen Seiten
- [ ] App-Store-Smart-Banner
- [ ] Legal-Pages (Impressum, Datenschutz, AGB — DSG/DSGVO-konform)

**Exit-Kriterium Phase 1:**
- 10+ Seiten indexiert
- Lighthouse > 90 auf allen Kernseiten
- Brand-Search "Wingcast" rankt #1

### Phase 2 — Expansion (Wochen 5-12) — "Topical Authority"
**Ziel:** Content-Hub aufgebaut, zweite Vergleichsseite live, erste Rankings ausserhalb Brand

- [ ] /wetterkunde/foehn-gleitschirm (2'500 Woerter, Expert-Quotes, Original-Grafiken)
- [ ] /wetterkunde/talwind-alpen
- [ ] /wetterkunde/ampelsystem-fliegbarkeit
- [ ] /vergleich/paraglidable-ios
- [ ] /vergleich/vs-windy-meteoblue
- [ ] /blog starten: 4 Artikel in 8 Wochen (1 alle 2 Wochen)
- [ ] FAQ-Schema auf allen Vergleichs- + Wetterkunde-Seiten
- [ ] Internal Linking auditen (Screaming Frog, kostenlose Version < 500 URLs)
- [ ] Beta-Tester-Testimonials sammeln + auf Homepage einbauen
- [ ] Erste Link-Outreach: SHV-Magazin-Redaktion, Paraglidingforum.ch, Swiss Glider
- [ ] Google Business Profile (optional, wenn physischer Standort/Buero)

**Exit-Kriterium Phase 2:**
- 25+ Seiten indexiert
- 30+ Keywords in Top 50
- Mind. 10 Backlinks aus Paragliding-Community

### Phase 3 — Scale (Wochen 13-24) — "Traffic Growth"
**Ziel:** Skalierbaren Content ausrollen, programmatisch + editorial

- [ ] Programmatic SEO Pilot: 10 Startplatz-Seiten mit einzigartigem Content je Site
- [ ] Bei Erfolg: Scale auf 50-80 Sites
- [ ] Monatliches Backtesting-Dashboard veroeffentlichen (/accuracy — Original-Daten fuer Citations)
- [ ] 1-2 Blog-Artikel/Monat (siehe Content-Kalender)
- [ ] GEO-Monitoring etablieren (monatlich AI-Query-Reviews)
- [ ] Hreflang DE/AT aktivieren wenn erste Downloads aus BY/Tirol
- [ ] Link-Outreach skalieren: Flugschulen-Partnerschaften, Club-Newsletter, Gast-Artikel
- [ ] App Store Optimization (ASO) synchron zu SEO — Keywords konsistent

**Exit-Kriterium Phase 3:**
- 60+ Seiten indexiert
- 100+ Keywords in Top 50
- 2'500+ organische Sessions/Monat
- ≥ 1 AI-Citation nachweisbar (ChatGPT/Perplexity)

### Phase 4 — Authority (Monate 7-12) — "Market Leadership"
**Ziel:** Domain Authority, Presse, Expansion DACH

- [ ] DR 20+ durch quality Backlinks (Ziel: 40+ Referring Domains)
- [ ] Presse-Features: SHV-Magazin, SwissGlider, eventuell Tagespresse (SRF/Blick zu Herbst-Foehn)
- [ ] Gast-Artikel auf Cross-Country-Magazin / Free.Aero
- [ ] Thought-Leadership: Original-Report zur Saison (z.B. "Schweizer Fluegwetter 2026 — Auswertung")
- [ ] DACH-Expansion: hreflang DE-DE & DE-AT aktivieren + regionale Startplatz-Seiten Bayern/Tirol
- [ ] Review-Schema ausrollen (wenn 20+ App-Reviews)
- [ ] Video-SEO: YouTube-Kanal mit Wetterkunde-Tutorials (Backlinks + Embed-Traffic)
- [ ] Kontinuierliches Refresh: Alle Pillar-Artikel alle 3 Monate aktualisieren

**Exit-Kriterium Jahr 1:**
- 8'000+ organische Sessions/Monat
- 35+ Keywords in Top 3
- 1'200+ App-Installs aus Organic
- 180+ Premium-Conversions aus Organic

---

## 8. Ressourcen-Anforderungen

| Bereich | MVP (Monat 1-3) | Scale (Monat 4-12) |
|---|---|---|
| SEO/Content-Lead | 10-15 h/Woche | 8-12 h/Woche |
| Technical Dev (SEO-Umsetzung) | 10-15 h initial, dann 2-3 h/Monat | 2-3 h/Monat |
| Content-Writing (Pilot + Meteorologe) | 1 Pillar-Artikel/Monat | 1 Pillar + 1-2 Blog/Monat |
| Tools/Stack (monatlich) | Plausible CHF 9, Ahrefs/SEMrush CHF 99 (optional, nutzt Free-Tools Phase 1), Screaming Frog Free | +DataForSEO ad-hoc |
| **Monatliches Budget-Minimum** | **CHF 200** (nur Tools) | **CHF 500-1'500** (Tools + gelegentliche Content-Freelance) |

---

## 9. Risiken & Gegenmassnahmen

| Risiko | Wahrscheinlichkeit | Impact | Gegenmassnahme |
|---|---|---|---|
| Safety-Incident nach App-Empfehlung → PR-Schaden | Mittel | Hoch | Strenger Safety-Disclaimer auf jeder Seite, konservative KI-Defaults, klarer "Decision Support, not Decision Maker"-Framing |
| Konkurrenz (burnair) launcht selbst KI-Feature | Mittel | Hoch | Vergleichs-Content laufend aktualisieren, Differenzierung ueber Erklaerbarkeit/Cross-Platform staerken |
| Google-Algorithmus-Update straft Thin Programmatic Pages ab | Hoch | Mittel | Programmatic-Pilot klein starten, strenge Content-Qualitaets-Gates, keine reinen Datenbank-Dumps |
| Zu kleiner Markt → Organic-Ceiling < 8'000 Sessions | Hoch | Mittel | Frueh DACH-Expansion, Content-Hub fuer breitere Meteo-Interessierte oeffnen (z.B. Wanderer, Pilotenstudenten) |
| Saisonal starker Traffic-Einbruch Nov-Apr | Sicher | Mittel | Off-Season: Evergreen-Content, Theorie-Tutorials, App-Features-Deep-Dives, Community-Content; Paid-Push im April rauf |
| Crawl-Budget verschwendet durch /preview oder Staging | Niedrig | Niedrig | robots.txt strikt, noindex auf non-production, sauberes .env-Handling |

---

## 10. Zusammenfassung — Top 10 Sofort-Massnahmen

1. **Domain fixieren** (wingcast.app oder wingcast.ch) + Next.js auf Vercel deployen
2. **Homepage + Features + Preise + Ueber-uns + Kontakt** live schreiben (Woche 1-2)
3. **/vergleich/burnair-alternative** als allererste Vergleichsseite (hoechster ROI-Hebel)
4. **Schema-Markup** (Organization, SoftwareApplication, FAQPage) von Tag 1
5. **Plausible + Search Console + Bing Webmaster** am Launch-Tag einrichten
6. **llms.txt + robots.txt (AI-Crawler allowed)** fuer GEO-Readiness
7. **Wetterkunde-Hub-Pillar #1 (Foehn)** in Woche 4-6 — E-E-A-T-Anker
8. **Beta-Tester-Testimonials** aktiv sammeln (20-30 aus Clubs IL/ZH/BE)
9. **Link-Outreach-Liste**: SHV, Clubs, Flugschulen, Foren, SwissGlider (10-15 Targets in Woche 4)
10. **Monitoring-Setup:** Keyword-Tracking (kostenlos via Search Console), AI-Citation-Check manuell monatlich

---

## Anhang: Industrie-Template Referenz

Basis: `saas.md` (SaaS SEO Template), angepasst fuer:
- Nischen-B2C statt B2B-SaaS (keine Demo-Funnel, sondern App-Install-Funnel)
- Safety-Critical Content (striktere E-E-A-T, konservative Sprache)
- Kleinen, regional konzentrierten Markt (Tiefe > Breite)
- Saisonalitaet (Content-Cadence an Flugsaison angepasst)

Verwandte Skills fuer Deep-Dives:
- `keyword-research` — Vor Phase 2 Keyword-Liste mit echten Volumina verifizieren
- `seo-competitor-pages` — Fuer Vergleichsseiten-Framework
- `schema-markup` — Konkrete JSON-LD-Templates pro Seitentyp
- `content-strategy` — Content-Kalender verfeinern
- `on-page-seo-auditor` — Nach Launch jede Seite audit-en
- `ai-seo` / `geo-content-optimizer` — Vor Phase 3 GEO vertiefen
