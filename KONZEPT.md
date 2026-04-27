# Gleitcast Webpage — Konzept

**Stand:** 2026-04-27
**Produkt:** Gleitcast — KI-Co-Pilot für Gleitschirmpiloten (Schweiz)
**Backend:** Bestehende Flask-App in `C:\Users\user\OneDrive\Projekte\flychat`

---

## 1. Ziel der Webpage

> **Eine Landing-Page, die Gleitschirmpiloten in 60 Sekunden überzeugt, sich für das wöchentliche KI-Flugwetter-Briefing einzutragen.**

Sekundärziel: Bestehende Flychat-App (Chat + Karte + Newspaper) als Live-Demo zugänglich machen — Beweis statt Versprechen.

### Was die Webpage NICHT ist
- Kein zweites Burnair-Dashboard
- Keine eigene Wetter-App (das ist Flychat)
- Keine reine Waitlist (wir haben ein funktionierendes Produkt)

---

## 2. Zielgruppe & Mindset

| Persona | Pain | Was sie auf der Page suchen |
|---|---|---|
| **Sarah** (Standard-Pilotin, B-Schirm, 50 Flüge/Jahr) | "30 Min für Wetter-Check, dann immer noch unsicher" | Schnelle Antwort, Vertrauen, Beispiel sehen |
| **Lukas** (Anfänger, A-Schirm, Flugschule) | Angst vor falscher Entscheidung | Sicherheits-Framing, Einfachheit |
| **Marco** (XC-Pilot, D-Schirm, 150+ Flüge) | Will Vorhersage-Qualität validieren | Modell-Quellen, Confidence, Ehrlichkeit bei Grenzen |

**Emotionale Trigger (priorisiert nach Marketing-Research):**
1. **FOMO / Loss Aversion** — "Verpasse keinen guten Flugtag mehr"
2. **Sicherheit** — "Fundierte Entscheidung statt Bauchgefühl"
3. **Zeitersparnis** — "30 Sekunden statt 30 Minuten"

---

## 3. Seitenstruktur (One-Pager)

```
┌──────────────────────────────────────────────────┐
│  1. HERO                                         │  Above the fold
│     Problem-Hook + CTA                           │
├──────────────────────────────────────────────────┤
│  2. DAS PROBLEM                                  │  Empathie aufbauen
│     "Kennst du das?"                             │
├──────────────────────────────────────────────────┤
│  3. DIE LÖSUNG (3-Schritt-Demo)                  │  Wie es funktioniert
├──────────────────────────────────────────────────┤
│  4. BEISPIEL-BRIEFING (Live-Preview)             │  Beweis durch Sichtbarkeit
├──────────────────────────────────────────────────┤
│  5. WAS DICH ERWARTET (Feature-Block)            │  5-Farben-Tier, Föhn, etc.
├──────────────────────────────────────────────────┤
│  6. VERTRAUEN (Datenquellen, Confidence)         │  Trust-Elemente
├──────────────────────────────────────────────────┤
│  7. ANMELDUNG (E-Mail + Regionen)                │  Conversion
├──────────────────────────────────────────────────┤
│  8. FAQ                                          │  Einwände abräumen
├──────────────────────────────────────────────────┤
│  9. FOOTER (Disclaimer, Impressum, Live-App)     │
└──────────────────────────────────────────────────┘
```

### Section 1: Hero

**Headline (Loss-Aversion-Frame):**
> **Verpasse keinen guten Flugtag mehr.**

**Subline:**
> Jeden Montag eine E-Mail. 5 Tage Flugwetter für die Schweiz. KI-analysiert, in 60 Sekunden gelesen.

**Visual:** Screenshot oder animiertes Mockup des Briefings (Handy-Mockup, weil 50% der Piloten am Berg auf dem iPhone lesen).

**Primary CTA:** `[Kostenlos eintragen]` → scrollt zu Sektion 7

**Sekundärer CTA:** `[Live-Demo ansehen]` → linkt zu `/newspaper` der Flychat-App

**Trust-Pill unter CTA:** `Basierend auf ICON-CH1, ICON-D2, ECMWF · 488 Startplätze in der Schweiz`

---

### Section 2: Das Problem ("Kennst du das?")

Drei kurze Zeilen — Mirror-Pattern, Pilot erkennt sich:

> **Samstag, 6:30 Uhr.**
> Du checkst Windy. Dann Meteo-Parapente. Dann Burnair. Dann zwei Webcams.
> 45 Minuten später bist du **unsicherer als vorher**.

Visuell: 3 Screenshots (Windy / Burnair / Meteo-Parapente) gegen einen Gleitcast-Briefing-Screenshot. "Aus 7 Apps wird 1 E-Mail."

---

### Section 3: Die Lösung (3 Schritte)

| Schritt | Headline | Erklärung |
|---|---|---|
| **1** | Wähle deine Regionen | Berner Oberland, Wallis, Zentralschweiz, ... — wir kennen alle 488 Startplätze. |
| **2** | Bekomm Montag 06:00 dein Briefing | 5 Tage Vorschau. Pro Tag eine Ampelfarbe. Beste Spots automatisch sortiert. |
| **3** | Entscheide und flieg | Eine Frage — eine Antwort. Klick auf den Link für volle Details im Dashboard. |

---

### Section 4: Beispiel-Briefing (Live-Preview)

**Das wichtigste Element der Page** — Show, don't tell.

Eingebettet als HTML-Vorschau (nicht Bild!), mit den interaktiven Wochentag-Tabs aus dem MVP-Konzept:

```
┌──────┬──────┬──────────┬──────┬──────┐
│🔴 Mo │🟤 Di │🟣 Mi ⭐  │🟢 Do │🟡 Fr │  ← klickbar
└──────┴──────┴──────────┴──────┴──────┘

MITTWOCH — 🟣 Legendär

  1. NIESEN (Berner Oberland) 🟣 Rating 9.2
     Fliegbar 10:30–16:00
     Sicherheit: Keine Gefahren. Stabile Luftmasse.
     Fliegbarkeit: Starke Thermik bis 3200m, Peak 2.1 m/s.
     Confidence: 92%
```

**Warum das wirkt:** Pilot sieht sofort die Qualität. Kein "Trust me", sondern "Look at this".

---

### Section 5: Was dich erwartet (Features)

4 Karten, je mit Icon + Pain-adressiertem Nutzen:

| Feature | Pain |
|---|---|
| **5-Farben-Ampel pro Spot** | Tool-Overload, manuelle Interpretation |
| **Sicherheit zuerst, dann Fliegbarkeit** | Anfänger-Angst, Sicherheitsbedürfnis |
| **Föhn-Warnung automatisch** | Alpine Komplexität (Schweiz-spezifisch) |
| **Confidence-Score + Modell-Quellen** | KI-Vertrauen, Vorhersage-Ungenauigkeit |

---

### Section 6: Vertrauen aufbauen

**Trust-Elemente (kompakt, eine Zeile pro Punkt):**

- ✓ Wetterdaten von **ICON-CH1 (1km), ICON-D2, ECMWF, Open-Meteo**
- ✓ **488 Schweizer Startplätze** — manuell kuratiert
- ✓ Jede Empfehlung mit **Confidence-Level** (hoch/mittel/niedrig)
- ✓ **Decision Support** — die finale Entscheidung triffst du

**Pratfall-Effect-Element (Glaubwürdigkeit durch Ehrlichkeit):**
> "Wir können Wind, Sicherheit und Föhn zuverlässig. Bei XC-Thermik geben wir das ehrlich zu — und nennen dir Meteo-Parapente als Ergänzung."

---

### Section 7: Anmeldung (Conversion-Sektion)

**Form-Felder (nur das Nötigste):**
1. E-Mail (Pflicht)
2. Regionen-Auswahl (Multi-Checkbox, Pflicht):
   - ☐ Berner Oberland
   - ☐ Wallis
   - ☐ Zentralschweiz
   - ☐ Glarnerland
   - ☐ Tessin
   - ☐ Jura
   - ☐ Graubünden
   - ☐ Westschweiz
3. (Optional) Vorname

**Submit-Button:** `Briefing kostenlos abonnieren`

**Microcopy unter Button:**
> Kein Spam. Jederzeit kündbar. Erste E-Mail kommt am nächsten Montag um 06:00.

**Optional — Scarcity-Element (nur wenn echt):**
> "Bereits 187 Piloten dabei"

---

### Section 8: FAQ (Einwände)

| Frage | Antwort (kurz) |
|---|---|
| Was kostet es? | Nichts. Aktuell komplett kostenlos. |
| Kann ich der KI vertrauen? | Wir zeigen Confidence + Datenquellen. Die finale Entscheidung triffst du. |
| Wie unterscheidet ihr euch von Burnair / Windy? | Andere zeigen Daten. Wir geben eine Empfehlung — und erklären warum. |
| Funktioniert das auf meinem iPhone? | Ja, E-Mail mit interaktiven Tabs (Apple Mail, Gmail). Outlook Desktop sieht alle Tage gestapelt. |
| Wie aktuell sind die Daten? | Wetterdaten 4× täglich, Analyse Sonntagnacht für die kommende Woche. |
| Speichert ihr meine Daten? | Nur E-Mail + Regionen-Wahl. Kein Tracking, keine Drittanbieter. |

---

### Section 9: Footer

- Impressum / Kontakt
- Datenschutz
- Link: **Live-Dashboard ansehen** → `/newspaper` (öffentlicher Teil der Flychat-App)
- Link: **Chat ausprobieren** → `/` (Chat-Interface)

---

## 4. Tech-Stack-Empfehlung

### Variante A: Statisch + Flask-Backend für Anmeldung (empfohlen)

```
┌─────────────────────────────────┐
│  Public Webpage (gleitcast.ch)  │
│  - HTML/CSS/JS (statisch)       │
│  - Vite oder reines Static      │
│  - Hosting: Vercel / Cloudflare │
└─────────────┬───────────────────┘
              │ POST /api/subscribe
              ▼
┌─────────────────────────────────┐
│  Flychat Flask-Backend          │
│  - Bestehender /api/subscribe   │
│  - InstantDB für Subscribers    │
│  - Resend für E-Mail-Versand    │
└─────────────────────────────────┘
```

**Warum:**
- ✓ Schnell (statisches HTML lädt in <1s)
- ✓ Kein Build-Overhead, einfach zu pflegen
- ✓ Backend existiert bereits — nur API-Call nötig
- ✓ SEO-freundlich (wichtig für organische Reichweite)

### Variante B: Direkt in Flychat-Flask integrieren

Eine neue Route `/` (oder `/landing`) im bestehenden Flask, neues Template `templates/landing.html`.

**Pro:** Ein Deployment, ein Codebase
**Contra:** Vermischt Marketing-Page mit App-Logik, Flask-Templates sind weniger Marketing-freundlich

### Empfehlung

**Variante A** — separates statisches Projekt im Ordner `gleitcast_webpage` (also genau hier), Anmelde-API geht an den bestehenden Flask-Endpoint von Flychat.

**Konkrete Tech:**
- **HTML + Tailwind CSS** (oder die existierende `style.css` aus Flychat wiederverwenden für Design-Konsistenz)
- **Vanilla JS** für Form + Tab-Switcher in der Briefing-Vorschau (kein React nötig)
- **Astro** als Alternative wenn wir später Blog/Content-Pages dazu wollen
- Hosting: **Vercel** oder **Cloudflare Pages** (gratis, schnell)

---

## 5. Design-Sprache

**Konsistent mit Flychat-App** (User soll wiedererkennen):

| Token | Wert | Quelle |
|---|---|---|
| Violet (Top-Tag) | `#8b5cf6` | `--color-fly-violet` |
| Grün (Fliegbar) | `#22c55e` | `--color-fly-green` |
| Bronze (Abgleiter) | `#B08D57` | `--color-fly-gray` |
| Gelb (Bedingt) | Standard-Amber | — |
| Rot (Nicht fliegbar) | Standard-Red | — |

**Tonalität:**
- Direkt, pilotensprache ("Wo fliegst du heute?", nicht "Meteorologische Analyse")
- Schweizerdeutsch-tauglich (kein "Du-Versprecher" wie in Marketing-Texten DE)
- Ehrlich bei Grenzen (Pratfall-Effect aus dem MVP-Doc)

**Layout:**
- Mobile-first (Pilot liest auf dem Berg auf dem iPhone)
- Max-width Content: 720px (lesbar wie ein Blog)
- Hero kann full-width mit Berg-Hintergrundbild

---

## 6. Subscriber-Flow (technisch)

```
1. User öffnet gleitcast.ch
2. Füllt Form aus: E-Mail + Regionen
3. POST /api/subscribe → Flychat-Backend
4. Backend speichert in InstantDB (subscriber.py existiert)
5. Bestätigungs-E-Mail (Double-Opt-In) via Resend
6. User klickt Bestätigungslink → /confirm?token=...
7. Status: aktiv → bekommt nächsten Montag das Briefing
```

**Bestehende Bausteine in flychat:**
- `subscriber.py` — Subscriber-CRUD
- `email_service.py` — Resend-Integration
- `templates/email/confirm.html` — Bestätigungs-Mail existiert bereits
- `templates/email/welcome.html` — Welcome-Mail existiert bereits

**Was neu gebaut werden muss:**
- Nur die statische Landing-Page (HTML/CSS/JS) selbst
- Optional: Region-Liste als API-Endpoint statt hardcoded (`/api/regions`)

---

## 7. Erfolgs-Metriken (KPIs)

| Metrik | Ziel nach 4 Wochen |
|---|---|
| Conversion (Visit → Anmeldung) | > 8% |
| Bestätigungs-Rate (Double-Opt-In) | > 70% |
| E-Mail-Öffnungsrate (1. Briefing) | > 60% |
| Bounce-Rate Landing | < 50% |
| Mobile-Anteil | ~70% (erwartet) |

---

## 8. Out of Scope (für V1 der Webpage)

- ❌ Pricing-Seite (Produkt ist gratis)
- ❌ Login-Bereich (es gibt keinen Account, nur E-Mail-Subscription)
- ❌ Blog (später, wenn Content-Strategie steht)
- ❌ Multi-Sprache (Deutsch zuerst, Französisch/Italienisch später)
- ❌ Cookie-Banner mit Tracking (nur essenzielle Cookies, kein GA)
- ❌ App-Download-CTA (es gibt keine native App im MVP)

---

## 9. Nächste Schritte (Empfehlung)

1. **Konzept-Review** mit dir — Stimmen Struktur, Tonalität, Tech-Stack?
2. **Wireframe** der Hero + Briefing-Preview als HTML-Mockup
3. **Region-Liste finalisieren** — welche Regionen zeigen wir auf der Page?
4. **Domain klären** — `gleitcast.ch`? `gleitcast.app`? Andere?
5. **API-Vertrag mit Flychat-Backend** — welcher Endpoint nimmt die Anmeldung entgegen?
6. **Implementierung** in 2 Phasen:
   - Phase 1: Static HTML + Form (3-5 Tage)
   - Phase 2: Briefing-Live-Preview mit echten Daten (2-3 Tage)

---

## Offene Fragen an dich

1. **Domain & Branding:** Heisst das Produkt nach aussen "Gleitcast" oder "Flychat"? In den Marketing-Docs ist es Gleitcast, im Code-Ordner Flychat.
2. **Live-Demo-Link:** Wollen wir den `/newspaper` öffentlich verlinken, oder ist die App im Soft-Launch?
3. **Scarcity-Element:** Ist "Erste 500 Piloten kostenlos" ein realer Plan oder Marketing-Theorie? Wenn theoretisch, weglassen.
4. **Zahlungs-Modell:** Bleibt das Briefing dauerhaft gratis, oder kommt später ein Paid-Tier (siehe `produktkonzept-core-offer.md` mit EUR 4.99/Monat)?
5. **Geografie:** Nur Schweiz, oder auch DACH-weit? (488 Spots sind aktuell nur CH.)
