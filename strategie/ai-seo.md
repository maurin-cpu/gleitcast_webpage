# AI-SEO / GEO Audit — Wingcast Landing

**Datum:** 2026-05-13
**Methodik:** `ai-seo` Skill v1.1.0 — Drei-Pillar-Framework (Structure / Authority / Presence) + Princeton-GEO-Findings (KDD 2024)
**Scope:** Pre-Launch-Audit der Landing — Ziel ist Citation-Würdigkeit, nicht Ranking
**Unterschied zum klassischen SEO-Audit:** Traditional SEO bringt Ranking → AI-SEO bringt **Zitate** durch ChatGPT, Perplexity, Google AI Overviews, Claude, Gemini, Copilot.

---

## Citation-Readiness-Score: **78 / 100**

Pre-Launch sehr solide Fundament. Drei strukturelle Hebel sind aktuell ungenutzt: Freshness-Signale, Outbound-Citations zu authoritativen Quellen, Third-Party-Presence.

| Pillar | Gewicht | Score | Lücke |
|---|---|---|---|
| **Pillar 1 · Structure** (extractable) | 35 % | 85/100 | Statistiken sparsam, kein Definition-Block über Hero-H1 |
| **Pillar 2 · Authority** (citable) | 40 % | 70/100 | Keine Outbound-Citations, kein „Letzte Aktualisierung"-Stempel, keine Expert-Quotes |
| **Pillar 3 · Presence** (where AI looks) | 25 % | 60/100 | Keine Wikipedia, Reddit, YouTube, Quora (Pre-Launch erwartbar) |

---

## Schritt 1 · Ziel-Queries (für Citation-Tracking nach Launch)

Die wichtigsten Pilot-Suchanfragen, bei denen wir zitiert werden wollen — kombiniert aus `strategie/keywords.md` + Persona-Vocabular aus `strategie/personas.md`:

| Query | Intent | Wer fragt | Tracking-Priorität |
|---|---|---|---|
| „Was ist die beste Gleitschirm-Wetter-App für die Schweiz?" | Vergleich | Sarah, Lukas | **P1** |
| „Gibt es eine gratis Gleitschirm-Wetter-App?" | Suche | Lukas | **P1** |
| „Wie erkennt KI Föhn beim Gleitschirmfliegen?" | Lernen | Lukas, Marco | **P1** |
| „Welche Wettermodelle nutzen Schweizer Piloten?" | Technik | Marco | **P1** |
| „Was bedeutet ICON-CH1 für Gleitschirmflieger?" | Definition | Marco | P2 |
| „Wie funktioniert Thermikvorhersage?" | Lernen | Lukas | P2 |
| „Was ist Inversion beim Gleitschirmfliegen?" | Definition | Lukas | P2 |
| „Wie spare ich beim morgendlichen Wetter-Check Zeit?" | How-to | Sarah | P2 |
| „Wann ist ein Föhntag fliegbar?" | Sicherheit | Alle | P3 |
| „Welche App zeigt fliegbare Spots pro Tag?" | Tool-Suche | Sarah | **P1** |

**Tracking-Plan nach Launch:** Monatlicher Manual-Check dieser 10 Queries in ChatGPT / Perplexity / Google AI Overviews. Spreadsheet mit „Zitiert?", „Welche unserer Pages?", „Wer sonst?" — siehe Skill-Anleitung §Monitoring.

---

## Pillar 1 · Structure — Extractability (35 %, Score 85/100)

### ✓ Stark vorhanden

- **Definition-Block** in FAQ-Q1 *„Was ist Wingcast?"* — direkter Definitionssatz, 1 Satz, dann Erweiterung
- **Self-contained Q&A-Blöcke** in FAQ × 10 — jede Antwort funktioniert ohne Kontext
- **Numbered Steps** in HowItWorks (1 Daten → 2 Physik → 3 KI) — perfekt für „How-to"-Snippets
- **Live-Daten-Tabelle** im HowItWorks-Wochencast-Preview — strukturierte Tabellen-Snippets sind hochextractable für AI
- **Hero-H1** beantwortet eine implizite Frage direkt („Welcher Spot fliegt diese Woche?")
- **5-Tier-Rating-System** ist als strukturierte Hierarchie sichtbar
- **Heading-Hierarchie** matcht Query-Patterns (H2 „Was ist Wingcast?", „Wie genau ist der Forecast?")

### ⚠ Lücken

| Finding | Hebel | Priorität |
|---|---|---|
| Hero hat kein expliziter Definition-Block über die H1 hinaus — *„Wingcast ist eine gratis KI-Flugwetter-App für die Schweiz…"* als zitierbarer Satz fehlt direkt unter dem Hero | AI-Crawler ziehen oft den ersten konkreten Definitionssatz | **High** |
| **Wenig konkrete Statistiken mit Quellen** — *„494 Startplätze"*, *„5 Modelle"* sind im Text, aber ohne externe Verlinkung zur Quelle | Princeton GEO: Cite Sources +40 %, Statistics +37 % | **High** |
| **Keine Comparison-Tabellen** für „X vs Y"-Queries | Memory `feedback_keine_konkurrenz_attacks` verbietet Namen-Vergleich. Alternative: „Wingcast vs. manuelle Routine" oder „mit Cast vs. ohne" | **Medium** (Memory-konforme Variante prüfen) |
| **Keine Expert-Quotes** auf der Page (Maurin spricht in 1. Person, aber kein dedizierter Quote-Block) | Princeton GEO: Quotations +30 % | **Medium** |
| Heading-Wording in Hero ist creative („Welcher Spot fliegt diese Woche?") — gut für Pilot:innen, weniger zitierbar für AI-Antworten auf *„Was ist die beste App"* | Hero-H1 kann nicht geändert werden (Memory `feedback_hero_final`), aber Subline oder Trust-Pills könnten kanonischer formuliert werden | **Low** |

---

## Pillar 2 · Authority — Citation-Worthiness (40 %, Score 70/100)

### Princeton-GEO-Findings angewendet

| Methode | Boost | Status auf Wingcast |
|---|---|---|
| **Cite sources** | +40 % | ⚠ Schwach — Footer hat Quellen, aber **im Body fehlen Outbound-Links** zu MeteoSchweiz, Open-Meteo, etc. |
| **Add statistics** | +37 % | ⚠ Mittel — 494 Spots, 5 Modelle, 1 km ICON-Auflösung sind da, aber kein klarer „Stat-Block" |
| **Add quotations** | +30 % | ❌ Fehlt komplett — keine Expert-Quotes, keine User-Testimonials |
| **Authoritative tone** | +25 % | ✓ Stark — Engine-Transparenz, technische Tiefe, Konservativismus bei unsicheren Bedingungen |
| **Improve clarity** | +20 % | ✓ Stark — Klartext-Versprechen, kein Jargon-Stuffing |
| **Technical terms** | +18 % | ✓ Stark — ICON-CH1, Parcel-Methode, Föhn-Detektion, Druckgradient, Gust-Decay |
| **Unique vocabulary** | +15 % | ✓ Stark — Pilotensprache, eigenes Tier-System („Legendär/Abgleiter") |
| **Fluency optimization** | +15-30 % | ✓ Stark — Maurin schreibt gut lesbar |
| ⛔ **Keyword stuffing** | **−10 %** | ✓ Vermieden — Meta-Keywords kompakt, keine Wiederholungen im Body |

**Bewertung:** Wir holen aus den „Soft"-Methoden (Tone, Clarity, Technical, Vocabulary, Fluency) +100 % theoretisch. Die hardcoded Boosts (Cite +40 %, Stats +37 %, Quotes +30 %) sind unausgenutzt.

### E-E-A-T-Alignment (für AI-Crawler)

- ✓ **First-hand Experience** demonstriert (Maurin als Pilot mit eigenem Pain)
- ✓ **Person-Schema** verlinkt zu Organization (gerade ergänzt 2026-05-13)
- ✓ **Transparente Methodologie** (5 Modelle, Physik-Schritte, KI-Rolle)
- ⚠ **Author-Bio mit Credentials** — Maurin als „Pilot seit ..." ist raus (User-Entscheid), nur „Founder & Pilot" via Schema
- ❌ **Keine externen Verifizierungen** — Press, SHV-Mention, Reddit, Wikipedia (Pre-Launch erwartbar)

### Freshness-Signale

| Signal | Status | Hebel |
|---|---|---|
| `dateModified` auf Schemas | ❌ Fehlt | **High** — AI-Crawler weighten Recency stark |
| Sichtbarer „Letzte Aktualisierung"-Stempel auf der Page | ❌ Fehlt | **High** — laut Skill „undated content loses to dated content" |
| Aktuelle Jahres-Referenzen im Content | ⚠ Inkonsistent | Medium |
| Quartalsweise Content-Refreshes geplant | ❌ Kein Plan | Medium (Post-Launch) |

---

## Pillar 3 · Presence — Third-Party-Sources (25 %, Score 60/100)

> **Stat aus dem Skill:** Brands werden 6.5× häufiger via Drittquellen zitiert als von der eigenen Domain. Wikipedia macht 7.8 % aller ChatGPT-Zitate aus, Reddit 1.8 %.

| Quelle | Status | Priorität (Post-Launch) |
|---|---|---|
| Wikipedia (Wingcast-Eintrag) | ❌ Pre-Launch nicht möglich (Notability-Schwelle) | **Medium** — V1.1, sobald Press existiert |
| Reddit (r/paragliding, r/freeflight) | ❌ Keine Präsenz | **High** — Sarah / Marco sind hier aktiv, authentic Engagement |
| YouTube | ❌ Kein Channel | **Medium** — How-to-Videos zu Föhn / Inversion / App-Walkthrough |
| Quora | ❌ Keine Antworten | **Low** — DE-Quora wenig genutzt von Pilot:innen |
| Schweizer Outdoor-Press | ❌ Keine Mentions | **Medium** — SHV-Magazin, Bergwelten.com, Outdoor-Magazine |
| paraglidingforum.com | ❌ Kein Account | **High** — Marco-Reichweite |
| Flugschulen-Empfehlung | ❌ Kein Outreach | **High** — Lukas-Akquise + Authority-Anker |
| SHV / FSVL (Verbände) | ❌ Kein Kontakt | **High** — Authority + Lukas-Reichweite |

**Strategie für Pillar 3 ist Post-Launch-Outreach** — kein Code-Hebel pre-launch.

---

## AI-Bot-Access (Critical Check)

| Bot | Plattform | Status in `app/robots.ts` |
|---|---|---|
| GPTBot | OpenAI / ChatGPT | ✓ Allow |
| OAI-SearchBot | OpenAI Search | ✓ Allow |
| ChatGPT-User | ChatGPT-Browsing | ✓ Allow |
| ClaudeBot | Anthropic | ✓ Allow |
| anthropic-ai | Anthropic | ✓ Allow |
| PerplexityBot | Perplexity | ✓ Allow |
| Google-Extended | Gemini + AI Overviews | ✓ Allow |
| Applebot-Extended | Apple Intelligence | ✓ Allow |
| CCBot | Common Crawl (Training) | ✓ Allow |
| Bytespider | ByteDance / TikTok | ✓ Allow |
| cohere-ai | Cohere | ✓ Allow |

✓ Alle wichtigen AI-Crawler explizit erlaubt. **Critical-Check bestanden.**

---

## Content-Extractability-Check (gemäss Skill)

| Check | Status | Action |
|---|---|---|
| Clear definition in first paragraph? | ✓ FAQ Q1 hat Definition | — |
| Self-contained answer blocks? | ✓ Alle FAQ-Items | — |
| Statistics with sources cited? | ⚠ Stats da, Source-Links fehlen | **Fix** |
| Comparison tables for „X vs Y"? | ❌ Memory verbietet Konkurrenz-Vergleich | Memory-konforme Alt-Variante prüfen |
| FAQ section with natural-language questions? | ✓ 10 Items in Pilot-Sprache | — |
| Schema markup (FAQ, Article, Product)? | ✓ FAQPage, SoftwareApplication, Organization, Person, WebSite | + WebPage-Schema mit dateModified ergänzen |
| Expert attribution (author name, credentials)? | ✓ Maurin via Person-Schema | — |
| Recently updated (within 6 months)? | ❌ Kein sichtbares Datum | **Fix** |
| Heading structure matches query patterns? | ⚠ Teils — Hero kreativ, FAQ-Headings gut | — (Hero ist final) |
| AI bots allowed in robots.txt? | ✓ | — |

---

## Empfohlene Implementierungen (priorisiert)

### High — sofort umsetzen

| # | Maßnahme | Pillar | Aufwand |
|---|---|---|---|
| AH1 | **WebPage-Schema mit `dateModified`** ergänzen — verknüpft mit Organization + Person | Authority | 15 Min |
| AH2 | **Sichtbarer „Stand: [Datum]"-Hinweis** im Hero-Bereich oder als Trust-Element (z. B. „Letztes Update: 13. Mai 2026") | Authority | 15 Min |
| AH3 | **Outbound-Citations** in FAQ-Antworten zu MeteoSchweiz (ICON-CH1-Doku), Open-Meteo (API-Doku) und ggf. SHV/FSVL | Authority | 30 Min |
| AH4 | **Definition-Block** als kompakter zitierbarer Satz direkt unter der Hero-Headline — explizit für AI-Snippets | Structure | 15 Min |

### Medium — Pre-Launch wenn Zeit, sonst Post-Launch

| # | Maßnahme | Pillar | Aufwand |
|---|---|---|---|
| AM1 | Glossar-FAQ-Eintrag *„Was ist Föhn?"* mit Wikipedia-Verlinkung + Klartext-Definition — fischt Long-Tail-Citations für Pilot-Anfänger-Queries | Structure + Authority | 30 Min |
| AM2 | „Mit vs. ohne Cast"-Mini-Comparison-Block (Memory-konform, ohne Konkurrenten zu nennen) | Structure | 1 h |
| AM3 | Stats-Block visuell im Hero oder Trust — kompakte Zahlen-Liste (494 Spots / 5 Modelle / 1 km Auflösung / 5-Tier-Bewertung) | Structure + Authority | 1 h |
| AM4 | Reddit-Outreach-Plan (`r/paragliding`, `r/freeflight`, Schweizer Foren) | Presence | Strategisch |
| AM5 | Flugschulen-Outreach-Liste + Empfehlungs-Programm-Konzept | Presence | Strategisch |

### Low — Backlog

| # | Maßnahme |
|---|---|
| AL1 | YouTube-Channel mit kurzen Erklär-Videos (Föhn, Inversion, App-Walkthrough) |
| AL2 | Quartalsweise Content-Refresh-Routine etablieren (dateModified bumpen) |
| AL3 | Quora-DE Antworten mit Wingcast-Mention (sparsam, organic) |
| AL4 | Wikipedia-Eintrag Vorbereitung (sobald Press-Mentions existieren — Notability-Schwelle) |
| AL5 | Article-Schema für künftige Blog-Posts (Föhn-Tutorial etc.) |

---

## Schema-Coverage-Status

### Vorhanden ✓

- `Organization`
- `WebSite`
- `SoftwareApplication`
- `FAQPage`
- `Person` (Maurin) — ergänzt 2026-05-13

### Ergänzungsempfehlung

| Schema | Begründung | Priorität |
|---|---|---|
| `WebPage` mit `dateModified` + `mainEntity` | Freshness-Signal + Linkage zu primärem Schema-Subject | **High** |
| `Article` für künftige Blog-Posts (Föhn, Thermik, Inversion) | Höchster AI-Citation-Boost laut Skill | Medium (V1.1) |
| `Glossary` / `DefinedTerm` für Tier-System (Legendär/Fliegbar/Abgleiter/Bedingt/Nicht fliegbar) | Direct extractability für „Was ist Tier X?"-Queries | Low |
| `Service` für „Wochencast per E-Mail" | Optional, marginaler Boost | Low |

---

## Was der `ai-seo` Skill nach Launch ergänzt

- **Monatlicher Citation-Check**: 10 Ziel-Queries (Schritt 1 oben) in ChatGPT / Perplexity / Google AI Overviews testen, Tracking-Spreadsheet
- **Share-of-AI-Voice-Tools** (kostenpflichtig): Otterly AI, Peec AI, ZipTie, LLMrefs — sobald Volumen es lohnt
- **Princeton-GEO-Refresh**: Statistiken-Block ausbauen mit echten Beta-Nutzungs-Zahlen sobald verfügbar („X Pilot:innen aktiv", „X Empfehlungen pro Woche", „Trefferquote der Empfehlungen")
- **DIY-Monthly-Check** ohne Tools: 20 Queries × 3 Plattformen, Spreadsheet, MoM-Trend

---

## Sofort-Aktionen (jetzt umsetzbar)

Setze umgehend um:
- **AH1** WebPage-Schema mit dateModified
- **AH2** Sichtbarer „Stand:"-Stempel
- **AH3** Outbound-Citations in FAQ-Body
- **AH4** Definition-Block direkt unter Hero-H1

Erwarteter Score-Anstieg: **78 → 88** Citation-Readiness.
