# GEO-Analyse — Gleitcast Landing-Page

**Datum:** 2026-04-29
**Ziel:** Sichtbarkeit in AI-Suche (Google AI Overviews, ChatGPT, Perplexity, Bing Copilot)
**Methodik:** seo-geo Skill (v1.8.1, Feb 2026)
**Status:** Pre-Launch (Mai 2026)

---

## GEO Readiness Score: 79 / 100

Solide AI-Search-Readiness fuer Pre-Launch. Domain-Authority & Brand-Mentions koennen erst nach Launch wachsen.

### Platform-Breakdown (geschaetzt fuer Mai-2026)

| Plattform | Score | Bemerkung |
|---|---|---|
| Google AI Overviews | **75/100** | Schema + FAQ-Page sehr gut, Top-10-Ranking fehlt noch (Pre-Launch) |
| ChatGPT (web search) | **72/100** | llms.txt + GPTBot allow + klare Definition vorhanden; Wikipedia-Praesenz fehlt |
| Perplexity | **65/100** | Reddit-Praesenz fehlt komplett (Perplexity zitiert 46.7 % aus Reddit) |
| Bing Copilot | **78/100** | Standard-SEO + Schema decken Bing gut ab |

---

## Was diese Iteration veraendert hat

### Neu seit Phase 2

| Aenderung | Datei | GEO-Effekt |
|---|---|---|
| `app/robots.ts` | Next-API | Explizite Allow-Liste fuer GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended |
| `app/sitemap.ts` | Next-API | Auto-generierter sitemap.xml unter `/sitemap.xml` |
| `public/llms.txt` | static | Strukturierte Site-Beschreibung fuer AI-Crawler — Definition, Personas, Founder, Fakten |
| `lib/schema.ts` | TS-Modul | JSON-LD: Organization, WebSite, SoftwareApplication, FAQPage |
| `app/layout.tsx` | global | Organization + WebSite Schema in `<head>`-Equivalent, html `lang="de-CH"` (war `de`), Meta-Description aligned |
| `app/page.tsx` | home | SoftwareApplication + FAQPage Schema injiziert |
| `lib/faq.ts` | content | „Was ist Gleitcast?" als erste FAQ-Frage — self-contained Definition (139 Woerter, optimal 134-167) |
| `Solution.tsx` | content | Spots-Karte-Visual eingebaut + Niesen-Beispiel-Snippet bereits in Phase 2 |

---

## AI-Crawler-Access-Status

| Crawler | Status | Konfiguriert in |
|---|---|---|
| GPTBot | ✅ Allow | robots.ts |
| OAI-SearchBot | ✅ Allow | robots.ts |
| ChatGPT-User | ✅ Allow | robots.ts |
| ClaudeBot | ✅ Allow | robots.ts |
| anthropic-ai | ✅ Allow | robots.ts |
| PerplexityBot | ✅ Allow | robots.ts |
| Google-Extended | ✅ Allow | robots.ts |
| Applebot-Extended | ✅ Allow | robots.ts |
| CCBot | ✅ Allow | robots.ts (Common Crawl — Trainings-Data, optional Block) |
| Bytespider | ✅ Allow | robots.ts (TikTok/Douyin) |
| cohere-ai | ✅ Allow | robots.ts |

Alle relevanten Search-Bots erlaubt. Bei Bedarf CCBot blocken — beeintraechtigt aber AI-Visibility kaum, da Search-Bots eigene Crawler nutzen.

---

## llms.txt-Status

✅ **Vorhanden** unter `/llms.txt` (236 Zeilen).

**Inhalt:**
- Direkt-Definition (Block "Was Gleitcast ist") — 80 Woerter, AI-zitierfaehig
- Negativ-Abgrenzung (Block "Was Gleitcast nicht ist")
- Personas (Lukas, Sarah, Marco)
- Founder mit Stadt + Schmerzpunkt
- Fakten-Block (488 Spots, 1 km Aufloesung, CH-only)
- Kontakt

**Einschaetzung:** GPT/Claude/Perplexity bekommen sauberen Context fuer Brand-Queries.

---

## Brand-Mention-Analysis

**Befund:** Nullpunkt (Pre-Launch).

| Kanal | Praesenz | Korrelation mit AI-Citations |
|---|---|---|
| YouTube | ❌ | 0.737 (staerkster Faktor) |
| Reddit | ❌ | hoch |
| Wikipedia | ❌ | hoch |
| LinkedIn | ❌ | mittel |
| Backlinks (Domain Rating) | 0 | 0.266 (schwach) |

**Strategische Konsequenz nach Launch:** Brand-Mention-Auf bau ist GEO-Hebel #1. Konkrete Schritte:
1. Maurin als Person auf LinkedIn positionieren (Pilot + Builder + Posts ueber Wetter-Modelle)
2. Selektiv in r/paragliding und paraglidingforum.ch beitragen — als hilfreicher Pilot, nicht als Sales
3. YouTube-Video „Wie liest man ICON-CH1 fuer Gleitschirm?" — Pillar-Content, kein Sales
4. Eintrag in adventuro.com / paraglidingtip101.com „Best Paragliding Apps 2026" anstreben

---

## Passage-Level-Citability

Optimum laut Skill: **134-167 Woerter** pro self-contained Block.

| Block | Datei:Stelle | Wortzahl | Citability |
|---|---|---|---|
| FAQ #1 „Was ist Gleitcast?" | `lib/faq.ts` | 139 ✅ | sehr hoch — Definition, Stats, Negativ-Abgrenzung in einem Block |
| Solution-Beispiel „Niesen heute gelb" | `Solution.tsx` | 76 | hoch — unique data, spezifisch, zitierfaehig |
| Trust Founder-Story | `Trust.tsx` | 121 | mittel — gute Authority, aber kein direkter Frage-Kontext |
| Hero-Sub | `Hero.tsx` | 24 | niedrig — Marketing-Stil, schwer zu zitieren |
| llms.txt Block „Was Gleitcast ist" | `public/llms.txt` | 80 | hoch — strukturierte Liste, AI-friendly |

**Empfehlung:** Pro Section eine 134-167-Woerter-Definition. FAQ + llms.txt decken das jetzt ab.

---

## Server-Side-Rendering-Check

✅ **Next.js 15 App Router mit static Pre-Rendering.** Build-Output zeigt: alle 7 Pages als `Static (○)` prerendered. Kein JavaScript-Dependency fuer Initial-Content.

```
Route (app)                  Size  First Load JS
┌ ○ /                     1.64 kB         104 kB
└ ○ /sitemap.xml            127 B         102 kB
○  (Static)  prerendered as static content
```

AI-Crawler bekommen vollstaendigen HTML-Body ohne JS-Execution.

---

## Schema-Markup-Status

✅ **Implementiert** in `lib/schema.ts`:

| Schema | Position | Zweck |
|---|---|---|
| Organization | Layout (global) | Brand-Identitaet, Founder-Person, Adresse CH |
| WebSite | Layout (global) | inLanguage `de-CH`, publisher-Verknuepfung |
| SoftwareApplication | Home-Page | Free Web App, featureList mit USPs, audience CH-Pilots |
| FAQPage | Home-Page | Auto-generiert aus `lib/faq.ts` — 8 Q&A-Paare |
| Person (Maurin) | innerhalb Organization | Founder mit Adresse Zuerich |

Nicht implementiert (bewusst):
- BreadcrumbList — auf One-Pager redundant
- Article — keine Blog-Posts in V1
- AggregateRating — keine Reviews verfuegbar

---

## Top 5 Highest-Impact-Changes (Post-Launch)

In Reihenfolge nach erwartetem GEO-Effekt:

### 1. Reddit-Praesenz aufbauen (Effekt: +5-8 Punkte Perplexity-Score)
Perplexity zitiert 46.7 % aus Reddit. Nicht spam, sondern echte Beitraege:
- r/paragliding (~80k Mitglieder) — auf Wetter-Fragen antworten als helfender Pilot
- paraglidingforum.com (Schweiz/DACH) — gleiche Strategie
- Erst nach 30+ hilfreichen Beitraegen vorsichtig auf Gleitcast verweisen, wenn passend

### 2. YouTube-Video „Wie ICON-CH1 lesen?" (Effekt: +5-10 Punkte all platforms)
YouTube-Mentions korrelieren mit 0.737 zu AI-Citations — staerkster Einzelfaktor.
- 5-8 Min Tutorial: ICON-CH1 vs. ECMWF vs. ICON-D2 fuer Schweizer Alpen
- Maurin spricht als Pilot, nicht als Founder
- Gleitcast als beilaeufiges Tool gezeigt
- Backlink + Brand-Mention im Beschreibungstext

### 3. Original-Daten/Backtesting publizieren (Effekt: +3-5 Punkte Authority)
Eigene Daten = unique citability. Konkret:
- Pre-Launch: nichts moeglich (keine Daten)
- 3 Monate post-Launch: erster „Gleitcast Backtesting Report Q3 2026" als `/blog`-Artikel
- Format: Tabellen mit konkreten Hit-Rate-Zahlen, attribuierbar

### 4. Comparison-Table Wetter-Modelle (Effekt: +2-4 Punkte Citability)
AI Overviews bevorzugen strukturierte Vergleichstabellen. Vorschlag: neue Sektion oder Blog-Post:
- ICON-CH1 vs. ICON-D2 vs. ECMWF — Aufloesung, Lauflaenge, Staerken im Alpenraum
- AI-zitierfreundlich, generiert Long-Tail-SEO-Traffic

### 5. Person-Schema-Tiefe fuer Maurin (Effekt: +1-2 Punkte Authority)
Aktuell nur Name + Titel + Adresse. Erweitern um:
- `sameAs`: LinkedIn-URL, falls vorhanden
- `knowsAbout`: Paragliding, Weather Modeling, Swiss Alpine Meteorology
- erst nach LinkedIn-Aufbau (Punkt 1)

---

## Was bewusst NICHT priorisiert wird

- **Wikipedia-Eintrag** — Notability-Hurde fuer eine Beta-App nicht erreicht. Erst bei Press-Coverage relevant.
- **Article-Schema / Blog** — kommt mit erstem Pillar-Content (laut seo-plan-mvp.md Monat 2-3)
- **Multi-Sprache (FR/IT)** — bis Markt-Penetration in DE-CH validiert
- **Video-Schema** — sobald YouTube-Video existiert (Punkt 2 oben)
- **Programmatic Startplatz-Pages** — laut seo-plan-mvp.md ab Monat 6 evaluieren

---

## Content-Reformatting-Suggestions

Diese Stellen koennen noch zu citability-optimaler Form hin:

### `Hero.tsx` — Sub erweitern
Aktuell: 24 Woerter, zu kurz fuer AI-Citation.
Empfehlung: Sub-Block mit 60-100 Woertern unter dem Hero, als Definition-Anker. Beispiel:
> „Gleitcast ist ein KI-Flugwetter-Tool fuer Schweizer Gleitschirmpiloten. Die App aggregiert Wettermodelle (ICON-CH1, ICON-D2, ECMWF), sortiert 488 Schweizer Startplaetze automatisch nach Fliegbarkeit und liefert eine Begruendung in Klartext — ohne Meteorologie-Studium."

Risiko: doppelt zur FAQ-Antwort. Alternativ als alt-Text/Hidden-Definition fuer Crawler nur. Aktuell ueber FAQ #1 abgedeckt — kein dringender Handlungsbedarf.

### `Trust.tsx` — Founder-Box mit Person-Schema verbinden
Aktuell: Maurin-Card im HTML. Kein konkretes Person-Schema-Markup im DOM (es liegt in JSON-LD).
Empfehlung: Microdata-Attribute auf der Card hinzufuegen (`itemscope itemtype="https://schema.org/Person"`) — verstaerkt das JSON-LD-Signal fuer aelteren Crawler.

Aufwand niedrig, Effekt klein. Nur wenn andere Punkte abgehakt sind.

### `BriefingPreview.tsx` — Frage-basierte H2
Aktuell: H2 „5 Tage. Ein Blick. Klar geordnet."
Empfehlung: ergaenzen oder ersetzen durch Frage-Form, z. B. „Wie sieht ein Wochen-Briefing aus?" — Question-Headings matchen AI-Query-Patterns.

---

## Verification Checklist

Nach Deploy zu pruefen:

- [ ] `https://gleitcast.ch/robots.txt` — alle AI-Crawler erlaubt
- [ ] `https://gleitcast.ch/sitemap.xml` — 3 URLs gelistet
- [ ] `https://gleitcast.ch/llms.txt` — Definition + Personas
- [ ] [Google Rich Results Test](https://search.google.com/test/rich-results) — Organization, SoftwareApplication, FAQPage validiert
- [ ] [Schema.org Validator](https://validator.schema.org/) — alle 5 Schemas
- [ ] Search Console: Sitemap einreichen
- [ ] Bing Webmaster Tools: Sitemap einreichen + IndexNow-Ping
- [ ] Manueller Test (1 Monat post-Launch): ChatGPT „Beste Wetter-App fuer Gleitschirm Schweiz" — wird Gleitcast erwaehnt?
- [ ] Manueller Test (1 Monat post-Launch): Perplexity dieselbe Query
- [ ] Plausible: `pageview`-Goal fuer `/llms.txt` und `/robots.txt` — wer crawlt?

---

## Zusammenfassung

**Vor dieser Iteration:** GEO-Score ~45/100 — keine Schema-Markup, kein llms.txt, keine sitemap.xml, html `lang="de"` zu generisch fuer AI-Lokalisierung.

**Nach dieser Iteration:** **79/100**. Damit liegt Gleitcast oberhalb des Median (typisch 60-65) fuer Pre-Launch-SaaS, aber unterhalb von etablierten Brand-Sites (~85-90).

**Naechster Hebel:** Brand-Mentions auf YouTube + Reddit nach Launch — staerkster Einzelfaktor (Korrelation 0.737 / hoch).

**Pre-Launch-Status:** Ready fuer Mai-Launch.
