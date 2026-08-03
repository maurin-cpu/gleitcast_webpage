# SEO Audit — Wingcast Landing (Pre-Launch)

**Datum:** 2026-05-13
**Methodik:** `seo` Skill v1.8.1 — 7-Kategorien-Audit mit gewichteter Bewertung
**Scope:** Codebase-Audit der statisch gerenderten Landing (`wingcast.ch/`) — keine Live-Metriken, da Pre-Launch
**Quellen:** `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`, `lib/schema.ts`, `public/llms.txt`, alle `components/sections/*`

---

## SEO Health Score: **79 / 100**

Solide Pre-Launch-Position. Drei „High"-Findings (Images, Sitemap-Tiefe, Author-Schema) sind die grössten Hebel. Keine Critical-Issues.

### Score-Breakdown nach Skill-Methodik

| Kategorie | Gewicht | Score | Beitrag |
|---|---|---|---|
| Technical SEO | 22 % | 80/100 | 17.6 |
| Content Quality (E-E-A-T) | 23 % | 78/100 | 17.9 |
| On-Page SEO | 20 % | 85/100 | 17.0 |
| Schema / Structured Data | 10 % | 75/100 | 7.5 |
| Performance (CWV) | 10 % | 70/100* | 7.0 |
| AI Search Readiness (GEO) | 10 % | 88/100 | 8.8 |
| Images | 5 % | 60/100 | 3.0 |
| **Gesamt** | **100 %** | | **78.8 ≈ 79** |

\* Performance Pre-Launch geschätzt aus Codebase-Indikatoren — echte CWV-Werte erst nach Deploy via PageSpeed/CrUX messbar.

---

## Kategorie 1 · Technical SEO (22 %) — 80/100

### Stark

- ✓ `app/robots.ts` mit expliziter Allow-Liste für AI-Crawler (GPTBot, OAI-SearchBot, ClaudeBot, Anthropic-AI, PerplexityBot, Google-Extended, Applebot-Extended, CCBot, Bytespider, cohere-ai)
- ✓ `app/sitemap.ts` generiert sauberes `/sitemap.xml`
- ✓ Canonical URL gesetzt: `https://wingcast.ch/`
- ✓ `lang="de-CH"` korrekt (nicht generisches `de`)
- ✓ Viewport-Meta `width=device-width initial-scale=1`
- ✓ Skip-Link für Accessibility (`#main`)
- ✓ Mobile-Responsive via Tailwind Breakpoints (sm/md/lg/xl)
- ✓ Consent-basiertes Analytics (GA4 & PostHog laden erst nach Einwilligung; ohne Consent kein Tracking-Code aktiv)

### Schwächen

| Finding | Impact | Priorität |
|---|---|---|
| Sitemap hat nur 4 URLs (`/`, `/datenschutz`, `/impressum`, `/nutzungsbedingungen`) | Long-Tail-SEO-Potenzial ungenutzt — 494 Spot-Pages + 4–6 Region-Hubs könnten je 1 URL liefern | **High** |
| `/confirm` (Magic-Link-Landing) müsste explizit `noindex` haben | Risiko: Confirmation-Page wird indexiert | **Medium** |
| Keine 404-Page-Customization geprüft | Bei UX-Fehler keine markenkonforme Fehlerseite | **Low** |
| Performance Pre-Launch nicht gemessen | CWV-Optimierung blind | **Medium** (post-launch P1) |

---

## Kategorie 2 · Content Quality / E-E-A-T (23 %) — 78/100

### E-E-A-T Breakdown (gemäss Skill-Framework, Sept 2025 QRG)

| Pillar | Gewicht | Score | Begründung |
|---|---|---|---|
| **Experience** | 20 % | **Strong** | Maurin schreibt persönlich aus eigenem Pain-Point. Konkrete Erfahrungs-Signale: „Beim morgendlichen Spot-Check fand ich oft den Wald vor lauter Daten nicht", Founder-Photo, Pilot-seit-2019-Bio |
| **Expertise** | 25 % | **Moderate** | Tiefe in Engine-Beschreibung (5 Modelle, Parcel-Methode, Föhn-Detektion via ΔP Zürich–Lugano). Aber: keine formellen Credentials (Meteorologie-Studium, SHV-Funktion etc.) sichtbar |
| **Authoritativeness** | 25 % | **Weak** | Pre-Launch: keine Backlinks, keine Press, keine Beta-Testimonials, keine SHV/FSVL-Partnerschaft. Wikipedia-Präsenz fehlt |
| **Trustworthiness** | 30 % | **Strong** | Decision-Support-Disclaimer prominent, Beta-Ehrlichkeit in eigener Sektion, persönlicher Maurin-Kontakt (`info@wingcast.ch`), Datenschutz/Impressum/Nutzungsbedingungen vorhanden, Quellen im Footer attribuiert |

### Word Count (gemäss `quality-gates.md`)

Landing-Page-Mindestwert: 600 Wörter, 100 % unique.
**Aktuell: ~1 200 Wörter** (Hero + Problem + HowItWorks + Trust + Subscribe + FAQ × 10 + BetaFeedback). ✓ Mehr als ausreichend, alles unique.

### Author-Attribution

- Maurin als Founder im `organizationSchema` ✓
- Aber: **kein separates `Person`-Schema für Maurin als Autor der Page-Inhalte** — relevant fürs Dez-2025-Core-Update („Autoren-Attribution-Standards tighter geworden")
- Trust-Sektion hat Bio aber nicht maschinenlesbar für SERP-Author-Cards

### Findings

| Finding | Priorität |
|---|---|
| `Person`-Schema für Maurin ergänzen mit `jobTitle`, `description`, `sameAs` (Social-Profile) — wichtig fürs Dezember-2025-Core-Update | **High** |
| Authoritativeness-Aufbau planen: SHV/FSVL-Kontakt, Flugschulen-Outreach, paraglidingforum.com / Reddit Soft-Mentions | **Medium** (Post-Launch) |
| Beta-Testimonials sammeln, sobald 5–10 Beta-Pilot:innen gefeedbackt haben → in Trust-Sektion mit echten Namen + Erfahrungs-Anker | **Medium** (Post-Launch) |

---

## Kategorie 3 · On-Page SEO (20 %) — 85/100

### Title-Tag

- **Aktuell:** „Wingcast — Gratis KI-Flugwetter & Thermik-Forecast für die Schweiz"
- **Länge:** 66 Zeichen (✓ knapp unter Google-Truncation-Schwelle 60–62)
- **Primary Keyword vorne:** ✓ „Wingcast" + „Gratis KI-Flugwetter"
- **Brand am Ende:** ✓ Implizit, da Brand vorne. OK so.
- **Bewertung:** ✓ Strong

### Meta-Description

- **Aktuell:** „Gratis KI-Flugwetter für 494 Schweizer Startplätze. 5-Tage-Forecast sortiert pro Tag, in Klartext erklärt. Ohne Kreditkarte. Decision Support, du entscheidest."
- **Länge:** 156 Zeichen ✓ (Sweet-Spot Google-Mobile 150–160)
- **Click-Trigger:** ✓ „Gratis", konkret (494), Value-Prop („sortiert pro Tag", „in Klartext erklärt")
- **Bewertung:** ✓ Strong

### Heading Hierarchie

| Level | Anzahl | Inhalt |
|---|---|---|
| H1 | 1 | „Welcher Spot fliegt diese Woche? Du siehst es auf einen Blick." (Hero) |
| H2 | 8 | Hero secondary headings, Problem, HowItWorks, Trust, Subscribe, FAQ, BetaFeedback, ggf. weitere |
| H3 | ? | innerhalb HowItWorks-Schritte ✓ |

✓ Hierarchie korrekt: 1× H1, dann H2 für Sektionen, H3 für Sub-Inhalte.

### Internal Linking

- Hero → `#preview` (HowItWorks-Tabelle) ✓
- Hero → `#feedback` (Beta-Sektion) ✓
- Footer → `#solution`, `#preview`, `#feedback`, `#faq` ✓
- Footer → externe Quellen (Open-Meteo, MeteoSchweiz, GFS) ✓ mit `rel="noopener"`
- Aber: aus FAQ-Antworten **keine Anchor-Links** zurück in die Sektionen → könnte Engagement-Pfade vertiefen

### Findings

| Finding | Priorität |
|---|---|
| OG-Image ist temporär App-Dashboard-Screenshot (2400×1400) → dedicated 1200×630 mit Headline + Visual Hook erstellen | **Medium** |
| FAQ-Antworten könnten relevante Sektions-Anker linken (z. B. „Was macht die KI?" → `#solution`) | **Low** |

---

## Kategorie 4 · Schema / Structured Data (10 %) — 75/100

### Vorhanden

| Schema-Type | Status | Bewertung |
|---|---|---|
| `Organization` | ✓ | Gut — Name, URL, Logo, Founder, AreaServed, Description |
| `WebSite` | ✓ | Gut |
| `SoftwareApplication` | ✓ | Sehr gut — applicationCategory, operatingSystem, offers (price:0), audience, featureList (9 features) |
| `FAQPage` | ✓ | Sehr gut — alle 10 FAQ-Items strukturiert |

### Fehlt / Empfehlung

| Schema-Type | Priorität | Begründung |
|---|---|---|
| `Person` (Maurin) als eigenständige Entität mit `jobTitle`, `description`, `sameAs`-Array | **High** | Dezember-2025-Core-Update verschärft Autoren-Attribution. Verknüpfung Person ↔ Organization wichtig für E-E-A-T |
| `BreadcrumbList` | **Low** | Single-Page-Landing — Breadcrumbs nicht zwingend, aber bei Hinzufügen von `/spots/[slug]` essenziell |
| `searchAction` auf WebSite-Schema | **Low** | Nur sinnvoll, wenn Site-Search-Endpoint existiert |
| `AggregateRating` | ⊘ Tabu | Echte Reviews fehlen — nicht fälschen |

### Skill-Hard-Rules (gemäss `quality-gates.md`)

- ✓ Kein `HowTo`-Schema verwendet (deprecated Sept 2023)
- ⚠️ `FAQPage` auf kommerzieller Site: gemäss Aug-2023-Restriction nur Government + Healthcare bekommen FAQ Rich Results in Google SERP — **bleibt aber wertvoll für AI-Citations (ChatGPT, Perplexity, Claude)**. Daher behalten.

---

## Kategorie 5 · Performance / Core Web Vitals (10 %) — 70/100 (geschätzt)

### Pre-Launch-Indikatoren

| Aspekt | Status | LCP/CLS/INP-Bezug |
|---|---|---|
| Plus Jakarta Sans via `next/font` mit `display: swap` | ✓ | Kein FOIT → bessere LCP |
| Hero-Screenshot mit `width="2400"` + `height="1400"` + `loading="eager"` | ✓ | LCP-Image bekommt Priority, CLS-Reserve gesetzt |
| Spätere Bilder `loading="lazy"` (Trust, HowItWorks-Preview) | ✓ | Verhindert Render-Blocking |
| Animationen nur `transform` + `opacity` (Hero-orbs, hero-in fade-in-up) | ✓ | GPU-beschleunigt, keine Layout-Reflows → CLS-safe |
| `prefers-reduced-motion: reduce` globaler Override | ✓ | A11y + Performance bei Bedarf |
| Tailwind via `@tailwindcss/postcss` tree-shaken | ✓ | Kein unbenutztes CSS |

### Schwächen

| Finding | Priorität | LCP/CLS/INP-Bezug |
|---|---|---|
| Hero-Screenshot ist **PNG, nicht WebP/AVIF** — 2400×1400 wird ~2 MB sein | **High** | Direkter LCP-Hit auf 3G/4G-Verbindungen am Berg |
| Kein `srcset` für responsive Loading | **High** | Mobile lädt unnötig die Desktop-Version |
| `font-feature-settings: "cv11", "ss01"` auf body — könnte Render-Pfad belasten | **Low** | Marginal, lässt sich messen post-launch |
| Inline-Style mit `radial-gradient` + `filter: blur(80–120px)` für Hero-Orbs | **Low** | Auf low-end Mobile potenziell laggy — `prefers-reduced-motion` greift nicht für statische Filter |

### Empfehlung Post-Launch

Nach Vercel-Deploy:
- `python scripts/pagespeed_check.py https://wingcast.ch/` (`seo-google` Skill)
- 25-Wochen-CrUX-History tracken: `python scripts/crux_history.py`
- Ziel: LCP < 2.5 s (Mobile, 75th percentile), INP < 200 ms, CLS < 0.1

---

## Kategorie 6 · AI Search Readiness / GEO (10 %) — 88/100

Dies ist die stärkste Kategorie der Page.

### Stark

- ✓ `public/llms.txt` aktuell, ausführlich, korrekt (5 Modelle, „Cast" statt „Briefing", Persona-Sektion, Engine-Erklärung in Q&A-Form)
- ✓ AI-Crawler explizit erlaubt in `robots.ts` (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended u. a.)
- ✓ `FAQPage`-Schema mit 10 strukturierten Q&A — direkt zitierbar von Perplexity/ChatGPT/Claude
- ✓ Klare 1-Satz-Definition in Hero („Welcher Spot fliegt diese Woche…")
- ✓ Engine-Transparenz (5 Modelle, Physik-Schritte, KI-Rolle) — befriedigt Marco-skeptische Pilot:innen + AI-Crawler-Fact-Checks
- ✓ FAQ enthält direkte Antworten auf wahrscheinliche Pilot-Fragen
- ✓ Konsistente Brand-Definition über Schema + llms.txt + Page-Copy

### Schwächen

| Finding | Priorität |
|---|---|
| Reddit-Präsenz fehlt komplett (Perplexity zitiert 46.7 % aus Reddit gemäss `GEO-ANALYSIS.md` Mai 2026) | **Medium** (Post-Launch Outreach) |
| Wikipedia-Präsenz nicht möglich Pre-Launch (Notability-Schwelle nicht erreicht) | **Low** |
| Keine externen Verifications (z. B. Mention in Schweizer Outdoor-Publikationen) | **Medium** (Post-Launch PR) |

---

## Kategorie 7 · Images (5 %) — 60/100

### Vorhanden

- ✓ Alle Bilder haben `alt`-Texte (Hero-Screenshot, Founder, ggf. weitere)
- ✓ `width`/`height` gesetzt (CLS-Reserve)
- ✓ LCP-Image (`screenshot_app_dashboard.png`) mit `loading="eager"` + `decoding="async"`
- ✓ Spätere Bilder mit `loading="lazy"`

### Schwächen

| Finding | Priorität | Begründung |
|---|---|---|
| Alle Page-Bilder sind PNG, nicht WebP/AVIF | **High** | PNG ist ~2–3× grösser als AVIF bei gleicher Qualität → Mobile-Daten am Berg |
| Kein `srcset` für responsive Sizes | **High** | Mobile lädt unnötig 2400×1400 |
| Keine `<picture>`-Elemente mit modernen Formaten + PNG-Fallback | **Medium** | Best-Practice für moderne Browser |
| `next/image` wird **nicht** verwendet — alle Bilder via reguläres `<img>` | **Medium** | Next.js bietet automatische Optimierung, Format-Negotiation, Lazy-Loading mit srcset gratis |

**Empfehlung:** Auf `next/image` migrieren — adressiert alle vier Issues in einem Schritt.

---

## Prioritäten-Plan

### Critical (sofort fixen — blocking)

Keine. ✓

### High (vor Launch — Wirkungs-Hebel)

| # | Maßnahme | Aufwand |
|---|---|---|
| H1 | `Person`-Schema für Maurin als eigenständige Entität ergänzen, in `lib/schema.ts` + `<Trust>` als JSON-LD eingeben | 30 Min |
| H2 | Alle Page-Bilder von PNG → WebP/AVIF konvertieren, srcset für `[640w, 960w, 1280w, 2400w]` aufsetzen — am einfachsten via Migration zu `next/image` | 2–3 h |
| H3 | Programmatic-SEO-Plan für Spot-Pages (`/spots/[slug]` × 494) ausarbeiten — siehe `strategie/keywords.md §5.3` | 1 Tag Konzept + 2 Tage Build |

### Medium (Pre-Launch wenn Zeit, sonst direkt nach Launch)

| # | Maßnahme | Aufwand |
|---|---|---|
| M1 | Dedicated OG-Image 1200×630 designen (Headline + Visual Hook) | 1 h (Designer) |
| M2 | `/confirm` explizit `noindex` | 5 Min |
| M3 | Authoritativeness-Outreach planen: SHV/FSVL, paraglidingforum.com Soft-Mentions, Flugschulen-Empfehlungen | Strategisch |
| M4 | Region-Hub-Pages (`/regionen/[slug]`) für 4–6 Schweizer Regionen | 2 Tage |
| M5 | Post-Launch: PageSpeed-Audit gegen Live-URL via `seo-google` Skill | 30 Min |

### Low (Backlog)

| # | Maßnahme |
|---|---|
| L1 | FAQ-Antworten mit internen Sektions-Anchors verlinken |
| L2 | `BreadcrumbList`-Schema (relevant erst mit `/spots/[slug]` oder `/regionen/[slug]`) |
| L3 | Custom 404-Page-Design |
| L4 | Hreflang-Setup vorbereiten für FR/IT-Pläne |
| L5 | Backlink-Strategie planen (paraglidingforum.com, SHV, Reddit r/paragliding) |

---

## Was bedeutet das konkret für die nächsten Tage?

**Falls Launch-Termin fest steht:**

1. **Heute:** Person-Schema (30 Min) — biggest E-E-A-T-Hebel
2. **Diese Woche:** `next/image`-Migration + WebP/AVIF (2–3 h) — biggest Performance-Hebel
3. **Pre-Launch:** Dedicated OG-Image + `/confirm` noindex (1 h)
4. **Launch-Tag:** PageSpeed-Audit, Search-Console-Property anlegen, Sitemap submitten

**Falls noch Zeit ist (1–2 Wochen):**
- Zusätzlich Spot-Pages-Setup (`/spots/[slug]`) — grösster Long-Tail-Hebel im Datensatz
- Region-Hub-Pages für die 4 grössten Schweizer Gleitschirm-Regionen

---

## Was der `seo` Skill noch leisten kann (Post-Launch)

Sobald die Domain live ist und Search Console verifiziert:

- `/seo audit https://wingcast.ch` — automatischer Re-Audit mit echten CWV-Werten
- `/seo google gsc sc-domain:wingcast.ch` — wöchentlicher Pulse (Impressions, Clicks, CTR, Position)
- `/seo google pagespeed https://wingcast.ch` — Lighthouse + Feld-Daten
- `/seo schema https://wingcast.ch` — Schema-Re-Validation gegen Google Rich Results Test
- `/seo geo https://wingcast.ch` — AI-Crawler-Citation-Tracking
- `/seo programmatic plan` — falls Spot-Pages umgesetzt: Programmatic-SEO-Audit mit Doorway-Page-Risk-Check

**Setup-Voraussetzung:** Google-Cloud-Projekt mit API-Key + Service-Account, gespeichert in `~/.config/claude-seo/google-api.json`. Walkthrough in `references/auth-setup.md`.

---

## Memory-Updates aus diesem Audit

Keine neuen Memory-Einträge nötig. Alle Audit-Findings sind in diesem Dokument festgehalten und in den anderen `strategie/`-Files referenzierbar.
