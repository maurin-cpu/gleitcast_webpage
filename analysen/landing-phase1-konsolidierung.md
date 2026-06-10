# Phase-1-Konsolidierung — Wingcast Landing-Page

**Erstellt:** 2026-04-29 nach parallelen Reviews durch academic-psychologist, product-behavioral-nudge-engine und design-ux-researcher
**Quellen:** Discovery-Briefing `landing-briefing-phase1.md` + drei Agent-Audits
**Zweck:** Eingabe fuer Phase 2 (Copy + Re-Architektur) und Phase 3 (Implementierung)

---

## Executive Summary — fuenf Kern-Befunde

1. **AppVision streichen** — alle drei Agents einstimmig. Redundant zu Hero und SubscribeForm, drei identische Checklisten erzeugen semantische Saettigung. Headline „in einer App entschieden" verletzt das Decision-Support-Selbstbild.
2. **Sektions-Reihenfolge wechseln** — `BriefingPreview` vor `Solution` (zeigen, dann erklaeren). `WhyFree` vor `Trust` (Experiment-Narrativ rahmt Trust).
3. **Abgestufter Wert-Pfad sichtbar machen** — der einzige groesste Conversion-Hebel. 3-Stufen-Pill direkt unter Hero-CTA: *„Heute schauen ohne Login → E-Mail = 5 Tage → Briefing wenn's passt"*.
4. **Trust-Brueche sofort fixen** — *„488 manuell kuratiert"* + *„Confidence-Level pro Empfehlung"* versprechen nicht-belegbare bzw. nicht-gebaute Features. Beim ersten App-Kontakt fliegt das auf.
5. **Persona-Asymmetrie ausgleichen** — aktuelle Page ist Sarah-lastig (Wochenend-Plan-Frame), Lukas (Frischbrevetierter) wird nicht abgeholt. Hero-Trigger und JTBD 3 („verstehen warum") brauchen Lukas-Anker.

---

## 1. Konvergenzen — alle drei Agents einig

### 1.1 AppVision-Sektion streichen
- **Begruendung:** redundant (3 Agents), kollidiert mit Decision-Support (Psy + UX), erzeugt CTA-Reaktanz (Behav + UX)
- **Was uebernehmen:** maximal 1 Satz aus AppVision-Sub („Forecast + Briefing in einer Anmeldung") in den Hero verschieben
- **Files:** Streichung in `app/page.tsx:25`, Komponente `components/sections/AppVision.tsx` archivieren

### 1.2 Trust.tsx kuerzen — drei Streichungen
| File:Line | Aktuell | Aktion |
|---|---|---|
| `Trust.tsx:39-41` | „488 Startplaetze manuell kuratiert" | **Streichen.** Briefing 10 sagt: nicht belegbar |
| `Trust.tsx:42-45` | „Confidence-Level pro Empfehlung" | **Streichen** oder als „kommt"-Framing |
| `Features.tsx:22-27` | „Confidence + Datenquellen — wie sicher die Analyse ist" | **Streichen** oder umformulieren auf „Modell-Transparenz" |
| `lib/faq.ts:17` | Confidence-Score-Versprechen | **Streichen** oder „kommt"-Framing |

### 1.3 BriefingPreview vor Solution
**Logik:** Show, don't tell. User sieht den Output (Bild) bevor er die Mechanik (Steps) erklaert bekommt.
- **Aktuell:** `app/page.tsx:21-22` Hero → Problem → Solution → BriefingPreview
- **Empfehlung:** Hero → Problem → **BriefingPreview** → **Solution** → Features → ...

### 1.4 Decision-Support-Konflikt aufloesen
- `AppVision.tsx:21` *„Dein naechster Flugtag, in einer App entschieden."* widerspricht direkt `Trust.tsx:46-49` „Decision Support, nicht Decision Maker"
- **Aktion:** mit AppVision-Streichung automatisch geloest. Als Sicherheitsnetz im Phase-2-Copy: kein „entschieden", „bestimmt", „garantiert" mehr — stattdessen „bereiten vor", „zeigen klar", „du entscheidest klarer"

### 1.5 Wert-Pfad als Drei-Stufen-Visual neu einfuegen
**Position:** entweder direkt unter Hero-CTA (Behavioral-Empfehlung — sofortige Conversion-Wirkung) ODER als eigener Block direkt vor SubscribeForm (UX-Empfehlung — antizipiert Login-Huerde).

**Empfehlung Konsolidierung:** **Mini-Version unter Hero (3 Pills mit Pfeilen)** + **ausfuehrliche Version vor SubscribeForm**. Doppelte Lese-Chance ohne CTA-Spam (weil keine zusaetzliche Aktion, nur Information).

**Mikro-Copy-Vorschlag (Behavioral):**
```
[Heute kostenlos sehen]  →  [E-Mail = 5 Tage]  →  [Briefing wenn's passt]
   kein Login                 1 Klick Magic Link        Wochentage selbst waehlbar
```

---

## 2. Strategische Entscheidungen — Spannungen aufgeloest

### 2.1 Hero-Headline — drei Vorschlaege, eine Entscheidung

**Spannung:** Aktuelle Headline „Wo fliegst du diese Woche?" ist Sarah-lastig (Plan-Frame), Lukas (Tag-Frame, Frust-Antizipation) wird nicht abgeholt.

**Drei Optionen aus Psychologen-Audit:**
1. **„Nie wieder am falschen Spot stehen."** — Anticipated-Regret + sozialer Schmerz, staerkster Hebel fuer Lukas
2. **„Welcher Spot fliegt diese Woche? Du siehst es auf einen Blick."** — Frage-Antwort-Struktur, Sarah-stark, Agency-affirmierend
3. **„Den richtigen Spot finden, bevor du losfaehrst."** — Pre-Decision-Frame, beide Personas, kein Sicherheits-Versprechen

**Empfehlung:** **Option 3 als A-Variante** — am konsensfaehigsten zwischen Lukas und Sarah. Option 1 ist staerker fuer Lukas, riskiert aber Pathos-Drift. Option 2 ist gut fuer Sarah, aber wiederholt im Kern die aktuelle Headline. Option 3 erzeugt klare Job-to-be-done-Klarheit ohne Identitaets-Bias.

**Sub-Headline-Korrektur (Briefing 7):** „5-Tage-Thermik-Forecast" → **„5-Tage-Fliegbarkeits-Forecast: Wind, Thermik, Sicherheit"** (deckt was das Modell tatsaechlich bewertet)

### 2.2 Sektionen-Reihenfolge — finale Empfehlung

**Spannung:** Behavioral und UX-Researcher schlagen leicht unterschiedliche Ordnungen vor. Bei `WhyFree` vs. `Trust`-Position auseinander.

**Begruendung Konsolidierung:** UX-Researcher-Logik staerker — `WhyFree` rahmt das Founder-Narrativ („kein Investor → ehrliches Experiment"), das `Trust` glaubwuerdig macht. Trust ohne WhyFree-Vorbereitung wirkt isoliert.

**Finale Reihenfolge:**

| # | Sektion | Funktion | Aenderung ggue. heute |
|---|---|---|---|
| 1 | **Hero** + 3-Stufen-Wert-Pfad-Mini | Pain-Hook + sofortige Reibungs-Reduktion | Pfad-Mini neu, Headline ueberarbeitet, Sub-Headline korrigiert |
| 2 | **Problem** | Frust-Spiegel — Empathie vor Erklaerung | unveraendert |
| 3 | **BriefingPreview** | Output zeigen vor Erklaerung | **vorgezogen** (war 4) |
| 4 | **Solution** | Logik nach Beweis | **nachgezogen** (war 3) |
| 5 | **Features** | Vertiefung der Differenzierer | unveraendert |
| 6 | **WhyFree** | Founder-Experiment rahmen | **vorgezogen** (war 8) |
| 7 | **Trust** (gekuerzt) | Founder-Mirror + 2 Bullets | **nachgezogen** (war 7), 2 Bullets gestrichen |
| 8 | **NEU: Wert-Pfad-Block (full)** | Login-Huerde antizipieren | neu |
| 9 | **SubscribeForm** | einziger finaler CTA-Block | unveraendert in Position |
| 10 | **FAQ** | Long-Tail-Skeptiker | unveraendert |
| — | **AppVision** | — | **gestrichen** |

### 2.3 CTA-Wording-Set — Konsens aus Behavioral + Psychologe

| CTA | File | Aktuell | Empfehlung | Mechanik |
|---|---|---|---|---|
| Hero Primary | `Hero.tsx:40` | „Zur App" | **„Spots ansehen"** | Curiosity-Gap + JTBD-1-Anker |
| Hero Secondary | `Hero.tsx:47` | „Briefing ansehen" | unveraendert | Low-Commitment-Anker |
| BriefingPreview | `BriefingPreview.tsx:52` | „Briefing live ansehen" | **„Mein Briefing fuer diese Woche"** | Possessiv + IKEA-Effekt |
| SubscribeForm Primary | `SubscribeForm.tsx:62` | „Zur App" | **„Account erstellen"** | wahre Aktion benennen, reduziert Erwartungs-Bruch |
| SubscribeForm Secondary | `SubscribeForm.tsx:69` | „Erst Briefing ansehen" | unveraendert | Implementation-Intention |
| Footer | `Footer.tsx:25` | „Zur Live-App" | unveraendert | Anchoring (Live = echtes Produkt) |
| FloatingAppCTA | `FloatingAppCTA.tsx:30` | „App oeffnen" | **„Spots ansehen"** | Konsistenz mit Hero-Primary |

### 2.4 FloatingAppCTA — Trigger-Logik neu

**Aktuell:** `window.scrollY > 600` (feste Pixelgrenze, ignoriert Bildschirmhoehe, kollidiert mit FAQ-Chevrons auf 360 px)

**Empfehlung:**
- Trigger via **IntersectionObserver auf `#hero`-Sektion** — erscheint nach Hero-Exit
- Versteckt sich, sobald `#subscribe` im Viewport ist (kein doppeltes CTA-Stack)
- Versteckt sich, wenn FAQ-Sektion sichtbar (Daumen-Reichweite-Konflikt mit Chevrons)
- **Sichtbar in:** Solution, BriefingPreview, Features, WhyFree, Trust
- **Versteckt in:** Hero (eigener CTA), Problem (Slate-900-Inversion, optisch konkurrierend), SubscribeForm (eigener CTA), FAQ (Daumen-Konflikt), Footer

### 2.5 Datenquellen rechtssicher formulieren

**Aktuell:** `Solution.tsx:8` listet *„MeteoSchweiz, ECMWF, ICON-CH1, Open-Meteo"* — suggeriert Direkt-Lizenzen.

**Briefing 7 verlangt:** *„Modell-Aggregation via Open-Meteo (inkl. ICON-CH1 von MeteoSchweiz, ECMWF, ICON-D2)"*.

**Konsolidierung:** in **allen** Sektionen (Solution, Trust, Features, Footer) auf **eine einheitliche, rechtssichere Liste** anpassen — Phase 3 Implementierung.

---

## 3. Persona-Lueckenschluss

### 3.1 Lukas-Anker einfuegen (UX-Researcher Befund)
**Problem:** Page ist tonal Sarah-lastig. Lukas (Frischbrevetierter) hat schwaecheres Lesegefuehl.

**Konkrete Massnahmen Phase 2:**
- Hero-Sub: *„fuer alle Erfahrungs-Stufen — von ersten Fluegen bis XC"* (subtiler Skill-Anker)
- BriefingPreview: Mini-Hinweis *„Anfaenger-tauglich, ohne Fachjargon"* irgendwo in der Sektion
- Features: einen Punkt explizit als Lukas-Anker formulieren (z. B. „Klartext statt CAPE und Lapse Rate")

### 3.2 JTBD 3 sichtbar machen — *„hilf mir verstehen warum"*
**UX-Researcher-Befund:** Page sagt 4-mal *„mit Begruendung"*, zeigt nie eine.

**Massnahme Phase 2:** Konkretes 3-Zeilen-Beispiel-Snippet einbauen, z. B. in `Features.tsx` oder als Mini-Sektion zwischen `BriefingPreview` und `Solution`:

> **Beispiel — Niesen heute gelb:**
> Wind 18 km/h Sued passt zur Erfahrung, **aber Lee-Risiko nach 14 Uhr** wegen Suedfoehn-Tendenz. Sicherer Slot: 11–13:30 Uhr.

Hebt JTBD-3-Coverage von 2/5 auf 4/5. Erfordert keine neuen Bilder.

### 3.3 JTBD 6 — *„validiere meine Einschaetzung"* — heute praktisch unsichtbar
**UX-Researcher-Befund:** Sarah-spezifischer Hebel faellt komplett aus. AppVision widerspricht ihm sogar.

**Massnahme Phase 2:** in `Solution.tsx` Schritt 03 oder in `Features.tsx` einen Anker einbauen wie *„Du hast eine Vermutung? Vergleich sie in 30 Sekunden mit allen Modellen, die wir aggregieren."*

---

## 4. Quick Wins — sofort umsetzbar (Phase 3)

Reine Code-Aktionen ohne Copy-Diskussion:

- [ ] `AppVision.tsx`-Komponente streichen + `app/page.tsx:25` Import entfernen
- [ ] `Trust.tsx:39-49` zwei Trust-Bullets streichen (488-kuratiert + Confidence-Level)
- [ ] `Features.tsx:22-27` Confidence-Punkt streichen oder umformulieren
- [ ] `lib/faq.ts:17` Confidence-Erwaehnung streichen oder „kommt"-Framing
- [ ] `Solution.tsx:25` „optional" beim Briefing-Schritt streichen (entwertet JTBD 4)
- [ ] `Solution.tsx:8` Datenquellen-Wording auf Open-Meteo-Aggregation
- [ ] `Footer.tsx:62` Datenquellen-Wording angleichen
- [ ] `Hero.tsx:28` Sub „5-Tage-Thermik-Forecast" → „5-Tage-Fliegbarkeits-Forecast"
- [ ] `Features.tsx:7` Anglizismus „ranked" → deutsch („sortiert" / „nach Eignung gereiht")
- [ ] `Hero.tsx:65` figcaption von `text-slate-500` auf `text-slate-700` (AAA-Outdoor)
- [ ] `Footer.tsx:15`, `Footer.tsx:62` `text-white/70`/`/60` auf `text-white/85` (AAA-Outdoor)
- [ ] `Problem.tsx:46` Karten-Body auf `text-white/90` pruefen
- [ ] `Hero.tsx:53-64` App-Dashboard-Bild auf AVIF/WebP + `srcset` umstellen, Responsive-Sizes (LCP-Killer Briefing 9)
- [ ] `FloatingAppCTA.tsx:13` Trigger von `scrollY > 600` auf `IntersectionObserver` (Hero-Exit)
- [ ] `app/page.tsx` Sektions-Reihenfolge auf neue Konsolidierung umstellen

## 5. Mid-Wins — fuer Phase 2 Copy-Sprint

Erfordern Copy-Arbeit, kein Code-Refactor:

- [ ] Hero-Headline-Entscheidung (Vorschlag: Option 3)
- [ ] Hero-Sub: Skill-Inklusivitaets-Anker fuer Lukas
- [ ] Drei-Stufen-Pfad-Mini unter Hero-CTA bauen
- [ ] Solution-Schritt 02 von KI-Subjekt-Frame („KI bewertet") auf Werkzeug-Frame umschreiben
- [ ] Beispiel-Begruendung-Snippet (JTBD 3 sichtbar) einbauen
- [ ] Pratfall-Anker in Solution oder Trust einbauen („Was wir nicht ersetzen: dein Blick auf den Windsack")
- [ ] CTA-Wordings nach Konsolidierungs-Tabelle aktualisieren
- [ ] AppVision-Substanz (1 Satz) in Hero ueberfuehren
- [ ] Trust-Bullets auf 2 reduzieren (Datenquellen + Founder-Aussage)
- [ ] Wert-Pfad-Block (full version) vor SubscribeForm bauen

## 6. Big-Wins — strukturell, brauchen Design + Asset-Bereitstellung

- [ ] Atmo-Bild beschaffen oder generieren (Pilot/Hand-am-Phone-Moment am Startplatz) → Hero
- [ ] Spots-Karte als Visual bauen (zeigt KI-Sortierung, JTBD 1) → zwischen BriefingPreview und Solution
- [ ] Founder-Foto sobald verfuegbar (Maurin) → Trust ersetzt „M"-Platzhalter

## 7. Conversion-Mess-Setup (cookie-frei)

**Conversion-Ziel Mai-Launch:** **3 % bestaetigte Accounts pro Page-Visit** (Behavioral-Begruendung uebernommen)

**Funktion-Trennung wichtig — zwei Funnels separat messen:**
1. Page-Visit → App-Outbound-Klick (Plausible-Goal auf Page)
2. App-Outbound → bestaetigter Account (App-Backend)

**Fuenf KPIs ohne Cookies:**
| KPI | Quelle | Aussage |
|---|---|---|
| 1 | Outbound-CR pro CTA-Position (`data-position`) | Welcher CTA traegt? |
| 2 | Scroll-50%-Rate | Aufmerksamkeits-Erhalt |
| 3 | Scroll-90%-Rate | Erreichen User SubscribeForm? |
| 4 | FAQ-Open-Events | Welche Skepsis brennt? |
| 5 | Magic-Link-Bestaetigungs-Rate | App-Side-Funnel |

Optional 6.: `Accept-Language`-Verteilung (relevant fuer DE/FR/IT-Roadmap).

---

## 8. Decisions — alle geklaert (2026-04-29)

1. **Hero-Headline:** *„Welcher Spot fliegt diese Woche? Du siehst es auf einen Blick."* (Option 2 — Frage-Antwort-Struktur, Sarah-stark, Agency-affirmierend)
2. **WhyFree-Position:** vor Trust (Position 6) — Founder-Experiment-Narrativ rahmt Trust
3. **Wert-Pfad-Visualisierung:** Mini-Pills unter Hero-CTA **plus** ausfuehrlicher Block vor SubscribeForm (Option C) — doppelte Lese-Chance, zwei verschiedene psychologische Funktionen
4. **Atmo-Bild:** vorerst weglassen, kommt nach Launch wenn eigenes Foto verfuegbar (Option D — keine Stockfotos, kein AI-Generated wegen Authentizitaets-Risiko)
5. **Spots-Karte:** statisches Bild, Screenshot der App-Karte mit gemischten Tier-Farben (Option A — Aufwand minimal, Outdoor-Performance bleibt)
6. **Confidence-Score:** komplett raus aus V1-Copy (Option A) — keine Versprechen fuer nicht-gebaute Features. Wenn Score spaeter kommt, wird er als neues Feature kommuniziert.

---

## 9. Was nicht passieren darf (aus Briefing 12 + Audit-Befunden)

- Keine Konkurrenznennung
- Keine Pricing-Andeutungen (auch nicht „immer gratis" — schafft falsche Erwartung, wenn Paid kommt)
- Keine Social-Proof-Zahlen-Behauptungen
- Keine „garantiert sicher" / „praeziser als" / „besser als alle"-Aussagen
- Keine Decision-Maker-Wordings („entschieden", „bestimmt", „weiss was du fliegen sollst")
- Keine nicht-existenten Feature-Versprechen (Confidence)
- Kein Cookie-Banner (cookie-frei ist gesetzt)
- Kein Exit-Intent-Modal (passt nicht zum Vibe)

---

**Naechster Schritt nach Bestaetigung der offenen Decisions (Sektion 8):**
Phase 2 startet mit den drei Phase-2-Agents — design-visual-storyteller (Founder-Story als rote Linie) + marketing-content-creator (Copy-Sprint) — die auf dieser Konsolidierung als Briefing aufsetzen.
