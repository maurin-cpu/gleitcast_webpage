# Gleitcast Landing-Page — Briefing für Phase-1-Review

**Erstellt:** 2026-04-29 nach 10-Block-Discovery mit dem Founder
**Adressaten:** academic-psychologist + product-behavioral-nudge-engine + design-ux-researcher
**Quelle:** Konsolidierte Antworten aus `landing-discovery-fragen.md` + `customer-research-synthesis.md` + `voice-of-customer-paragliding-pilots.md` + `paragliding-app-market-competitor-analysis.md` + `seo-plan-mvp.md`

---

## 1. Markt & Sprache

- **Markt: Schweiz only** (nicht DACH wie ursprünglich gebrieft — Korrektur durch Founder)
- **Sprachen:** DE primär, FR + IT zusätzlich (Schweizer Landessprachen)
- **Tonalität:** Du-Form, neutrales DE (kein Schweizerdeutsch)
- **488 Schweizer Startplätze** in DB — Zahl belegbar

## 2. Personas (Primär)

### Lukas — der Frischbrevetierte
- 28, Software-Entwickler, Bern, iPhone
- Brevet seit 6 Mt., ~15 Flüge, B-Schirm
- *„Ich verstehe die Wetterdaten nicht, traue meiner Einschätzung nicht."*
- Sieht sich eher als *„ich gehe gleitschirmfliegen"*

### Sarah — die Wochenend-Vielfliegerin
- 35, Projektleiterin, Zürich, Android
- 4 J., ~150 Flüge, B-Schirm
- *„45 Min Wetter-Check jeden Samstag ist Wahnsinn"*
- Identitär stärker als Pilot verankert

### Sekundär: Marco (XC, 10+ J., 400+ Flüge)
### Anti-Personas: Tandem-Anbieter, Profi-Wettkampfpiloten mit eigenem RASP

## 3. Conversion-Funnel (kritisch)

### Primärer CTA der Page
**App-Outbound zur Registrierung** — `app.gleitcast.ch`

### Abgestufter Wert-Pfad in der App (psychologischer Hebel!)
1. Klick auf Page-Link → **1 Tag Forecast direkt sichtbar** (kein Login)
2. **Magic-Link-Login (E-Mail)** → 5 Tage Forecast freigeschaltet
3. In App: Briefing-Abo per Button-Klick (Wochentage frei wählbar, kommt 06:00)

→ **Foot-in-the-door + Loss-Aversion** stark einsetzbar — auf Page noch nicht erklärt

### Sekundärer CTA: keiner (alles auf einen Pfad)

### App-Status: **Beta mit Anmeldepflicht**
### Pricing: **Aktuell dauerhaft gratis** (Paid kommt vermutlich später, **auf Page nicht thematisieren**)
### Conversion-Definition: **Account erstellt + Magic Link bestätigt**
### Conversion-Ziel: nicht definiert → **Agents schlagen realistisches Target vor** (Mai-Launch, 0-Baseline)

## 4. Motivation & Schmerzpunkte (Psy-Linse)

### Hauptangst (in dieser Reihenfolge)
1. **Falscher Spot-Wahl-Frust** — „Ich fahre 1.5 h zum nicht fliegbaren Startplatz, stehe alleine da" (Output + sozialer Schmerz)
2. **Sicherheit am Startplatz** — *„Ist es überhaupt sicher hier?"* (real, aber sekundär in Hero)

→ **Frust + sozialer Schmerz** dominiert über reine Sicherheits-Angst. Hero soll auf Spot-Wahl-Frust zielen, nicht primär auf Sicherheit.

### Selbstbild zur Entscheidungskompetenz
**Decision Support, nicht Decision Maker** — User braucht Hilfe, ist aber nicht bereit, Verantwortung abzugeben

### KI-Akzeptanz
- Vermutet skeptisch, aber unbestätigt
- **Wenn KI-Logik erklärt wird: Akzeptanz hoch** → Transparenz nicht verhandelbar
- VOC-Daten zeigen: Anfänger sehr positiv, Intermediate neugierig

### Pilot-Slang: alles offen, auch Brevet-Frische verstehen ihn
### Status-Signale, Pratfall-Effect: Agents schlagen vor

## 5. USP & Differenzierung (selbstreferenziell, ohne Konkurrenznennung)

### Was Gleitcast nachweislich kann
*„Du siehst direkt, welche Startplätze für gute Thermikflüge geeignet sind — ohne mehrere Meteogramme zu studieren. Die KI übernimmt das."*

### Wettbewerbslage (NICHT in Copy nennen, nur als Kontext)
| Konkurrent | Schwäche | Gleitcast-Hebel |
|---|---|---|
| Paraglidable | KI-Score *ohne Erklärung*, nur Android | KI mit Erklärung, alle Plattformen |
| burnair | Daten ohne KI, 119 €/Jahr | KI-Interpretation, gratis |
| Flybubble Weather | nur UK | Alpen-/Schweiz-Fokus |
| Meteo-Parapente | UI veraltet, keine KI | Modern + KI |

→ **Nirgends sonst:** KI + Erklärung + Alpen + Multi-Plattform — verteidigbare Position

### Erlaubt in Copy
- *„Automatisch sortierte Spot-Empfehlung — gibt's woanders so nicht"*
- *„Thermik-Forecasts gratis — bei den meisten Apps Premium"* (NEUER HEBEL aus Block 9)
- *„Multi-Modell-Aggregation"*

### Tabu in Copy
- Direkter Konkurrenzname (Burnair, Paraglidable, Meteo-Parapente, XCSkies)
- *„präziser als MeteoSchweiz"*
- *„garantiert sicher"*
- *„besser als alle anderen"*

## 6. Vertrauenssignale — leerer Stand

**Kritischer Befund:** **Null Trust-Signale heute:**
- Keine Beta-Nutzer
- Keine Testimonials
- Keine Partner (SHV, Vereine, Flugschulen)
- Keine Press

### Drei verfügbare Trust-Quellen
1. **Founder-Mirror:** *„Maurin fliegt selber, hatte das Problem für sich entdeckt"* — Authentizität
2. **Modell-Quellen-Anker** — sobald Datenquellen-Wording rechtssicher
3. **Erklärbare KI-Logik** als Anti-Skepsis-Hebel

### Beta-Pill = Asset
*„Beta · KI-Experiment"* — positiv framen für Pilot-Tüftler-Energie, nicht verstecken. Zielgruppe ist *„immer auf der Suche nach neuen Tools"*.

### Founder-Foto: Platzhalter vorerst, kommt später

## 7. Datenquellen — rechtssicher formulieren

**Wichtig:** Keine Direkt-Lizenzen. Daten kommen via **Open-Meteo-Aggregation** (Open-Meteo aggregiert ICON-CH1 von MeteoSchweiz, ECMWF, ICON-D2 etc.).

### Wording-Empfehlung
- ❌ *„Datenquelle: MeteoSchweiz"* (suggeriert Direkt-Lizenz)
- ✅ *„Modell-Aggregation via Open-Meteo (inkl. ICON-CH1, ECMWF, ICON-D2)"*

### Modell bewertet
**Fliegbarkeit + Sicherheit** (Wind, Thermik, Niederschlag, Gewitter, weitere Parameter)
→ Aktuelles *„5-Tage-Thermik-Forecast"* zu eng. Besser: *„5-Tage-Fliegbarkeits-Forecast"*.

### Nicht versprechen
- **Confidence-Score** — aktuell nicht eingebaut. Erwähnungen in Copy raus oder als „kommt" framen.

## 8. Distribution-Annahmen

### Channel #1: SEO
Volle Strategie in `seo-plan-mvp.md`. Kern-Targets:
- *„gleitschirm wetter app"*, *„burnair alternative"*, *„paraglidable iOS"*
- Pillar: Föhn / Talwind / Ampelsystem
- Long-Tail: *„[Startplatz] Wetter fliegen"*

### Sekundär: Pilotenforen, Reddit, Vereine, Flugschulen
### Press: keiner geplant
### WhatsApp-Sharing: Ziel → starkes OG-Bild + 1-Satz-Pitch im OG-Title nötig
### Bestehende Assets: Pre-Launch = 0
### Launch: Anfang Mai 2026 — Schweizer Saisonstart

### Reibungspunkte SEO-Plan vs. neuer Stand
- SEO-Plan rechnet mit DACH-Expansion → für V1 entfällt
- SEO-Plan rechnet mit Freemium CHF 39/Jahr → Page kommuniziert „gratis"
- Vergleichsseiten müssen *„kostenlos vs. 119 €"* statt *„CHF 39 vs. 119 €"* argumentieren

## 9. Tech-Constraints

### Sektionen-Reihenfolge
**Agents dürfen umsortieren.** Aktuelle Reihenfolge ist nicht fix.
- Hero → Problem → Solution → BriefingPreview → Features → AppVision → Trust → WhyFree → SubscribeForm → FAQ
- AppVision wirkt als 2. CTA-Block — vermutlich verschmelzbar oder streichbar
- WhyFree-Position offen für Hinterfragung

### Performance-Budget (Mobile-First, Outdoor-3G/4G)
- LCP < 2.0 s, INP < 150 ms, CLS < 0.05
- Mobile JS-Budget ~150 KB, Page-Total ~500 KB
- AVIF/WebP, Lazy Loading

### Image-Strategie (max 5)
1. App-Dashboard (Hero) — bestand
2. Briefing-Mockup — bestand
3. Spots-Karte (KI-Sortierung visualisieren) — neu
4. 1 Atmo-Bild (Pilot/Hand-am-Phone Startplatz) — neu, emotionaler Anker
5. Founder-Foto — sobald verfügbar, vorerst Platzhalter

### Accessibility
- WCAG-AA als Pflicht-Baseline
- **AAA-Kontrast-Niveau für Body-Text** (Outdoor-Lesbarkeit, Light-First)
- 7:1 Kontrast Body, 4.5:1 Buttons/UI

### Analytics: cookie-frei (Plausible-Stil), kein Tracking
### In-Scope: Landing + `app/confirm` (Magic-Link-Landing) + `app/impressum` + `app/datenschutz`

## 10. Codebase-Korrekturen (für Implementierung Phase 2/3)

| Befund | Korrektur |
|---|---|
| `KONZEPT.md` „Briefing Mo fix" | Veraltet → Wochentage frei wählbar, 06:00 Uhr |
| `Solution.tsx` „MeteoSchweiz als Quelle" | Open-Meteo-Aggregation-Wording |
| Hero-Sub „5-Tage-Thermik-Forecast" | Erweitern auf „Fliegbarkeit + Sicherheit" |
| `Trust.tsx` „488 manuell kuratiert" | Streichen — nicht belegbar |
| Beta-Pill positiv framen | Asset, nicht Stigma |
| AppVision = 2. CTA-Block | Mit Hero verschmelzen oder streichen |
| Confidence-Score-Erwähnungen | Raus oder als „kommt" framen |
| Datenquellen-Liste inkonsistent | Einheitliche Liste auf allen Sektionen |

## 11. Hebel, die Phase-2/3-Agents nicht übersehen sollten

1. **Abgestufter Wert-Pfad (1 Tag → 5 Tage Magic Link → Briefing)** — Hero/Problem-Sektion macht das nicht sichtbar. Das ist Conversion-Gold.
2. **„Thermik-Forecasts gratis"** — Differenzierungs-Hebel, der heute nicht in Copy steht
3. **Frust + sozialer Schmerz** > **Sicherheit** als Hero-Trigger (Reihenfolge der Ängste)
4. **Transparenz der KI-Logik** = Trust-Ersatz für fehlenden Social Proof
5. **Founder-Mirror als Authentizitäts-Anker** statt Marketing-Stimme

## 12. Was NICHT in V1

- „X Piloten nutzen es" — keine Beta-Nutzer
- Direkte Konkurrenznennung
- Pricing-Erwähnung
- DACH-Hinweise (CH-only)
- Confidence-Score-Versprechen
- „Decision Maker"-Wording
