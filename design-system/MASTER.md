# Wingcast — Corporate Design Guideline

**Version:** 1.0 · **Stand:** 2026-04-28
**Gilt für:** Webseite (`wingcast.ch`) **und** Flychat/Wingcast-App (Web/Mobile)
**Source of Truth:** Diese Datei. Seitenspezifische Abweichungen liegen in `design-system/pages/<page>.md` und überschreiben Master.

---

## 0. Designprinzipien (das Warum)

Wingcast wird **am Berg, am Startplatz, im Sonnenlicht** gelesen — nicht am Schreibtisch. Jede Designentscheidung muss in dieser Reihenfolge bestehen:

1. **Lesbar bei direkter Sonneneinstrahlung.** Kontrast > Eleganz. Pastell-Töne, Glassmorphism, dünne Schriften und niedrige Helligkeitsunterschiede sind verboten.
2. **Entscheidung in 60 Sekunden.** Eine Frage — eine Antwort. Hierarchie zählt mehr als Dichte.
3. **Bedienbar mit einer Hand und Handschuhen.** 44 pt Touch-Targets sind Minimum, 48 pt Standard.
4. **Ehrlich.** Wir zeigen Confidence, Quellen, Grenzen. Keine fake Scarcity, keine Fortschrittsbalken die lügen.
5. **Konsistent zwischen Web & App.** Wer auf wingcast.ch klickt, erkennt die App wieder.

**Anti-Patterns (was wir NIE tun):**
- ❌ Dark Mode als Default (App wird im Hellen genutzt)
- ❌ Glassmorphism / Blur-Effekte (verschwimmen unter Sonne)
- ❌ Niedriger Kontrast / grau-auf-grau
- ❌ Emojis als strukturelle Icons (🌤️ statt SVG) — Emojis nur in Marketing-Copy
- ❌ Schriftgrößen unter 16 px im Body
- ❌ Versteckte Bedeutung allein über Farbe (immer Symbol + Text + Farbe)

---

## 1. Markenidentität

### Wesen
Wingcast ist der **nüchterne Co-Pilot**, nicht der euphorische Wetterfrosch. Wir sind:

- **Direkt** wie ein Tower-Funkspruch — keine Marketing-Floskeln
- **Schweizerisch präzise** — Zahlen, Quellen, Confidence
- **Pilotensprache** — "Wo fliegst du heute?" statt "Wie kann ich Ihnen helfen?"
- **Ehrlich bei Grenzen** — Pratfall-Effect: wir nennen, was wir NICHT können (z. B. XC-Thermik → Verweis auf Meteo-Parapente)

### Tonalität
| Kontext | Beispiel ✓ | Anti-Beispiel ✗ |
|---|---|---|
| Headline | "Verpasse keinen guten Flugtag mehr." | "Revolutionäre KI für Piloten" |
| Briefing | "Mittwoch — Legendär. Niesen 9.2." | "Aussergewöhnlich vielversprechende Bedingungen" |
| Fehler | "Keine Verbindung. Versuch's nochmals." | "Ein unerwarteter Fehler ist aufgetreten." |
| Confidence niedrig | "Modelle uneinig — eher nicht starten." | "Bedingungen suboptimal" |

**Sprachregeln:**
- Du-Form (nicht Sie)
- Kurze Sätze (max. 12 Wörter im Hero, max. 18 im Body)
- Aktive Verben ("entscheide", "flieg", "check") statt Substantivierungen
- Zahlen als Ziffern (nicht "fünf Tage" → "5 Tage")
- Technische Begriffe nicht eindeutschen ("Thermik", "Föhn", "Confidence")

---

## 2. Farbsystem

### 2.1 Markenfarben (Web & App identisch)

Basis ist die **Weather-App-Palette** (Sky Blue + Sun Amber) — bewährt für Outdoor/Wetter-Produkte mit WCAG-AAA-Werten.

| Token | HEX | Verwendung |
|---|---|---|
| `--gc-sky-700` | `#0369A1` | Primärfarbe für Buttons, Links, aktive States. Auf Weiss 7.21:1 ✓ AAA |
| `--gc-sky-600` | `#0284C7` | Brand Primary (Logo, Header, CTAs). Auf Weiss 5.18:1 ✓ AA-Large + Body |
| `--gc-sky-500` | `#0EA5E9` | Sekundär, Hover-States, Akzent |
| `--gc-sky-100` | `#E0F2FE` | Pill-Backgrounds, Tags, sanfte Highlights |
| `--gc-sky-50` | `#F0F9FF` | Page-Background (Light Hero-Section) |
| `--gc-sun-600` | `#D97706` | **Reserviert fürs Rating-System** — siehe §2.2. Außerhalb Rating nicht als Marken-Akzent verwenden. |
| `--gc-sun-500` | `#F59E0B` | Stern-Symbole, "Bester Tag der Woche" — nur im Rating-Kontext. |
| `--gc-ink-900` | `#0F172A` | Body-Text (auf Weiss 17.85:1 ✓ AAA) |
| `--gc-ink-700` | `#334155` | Sekundärtext, Beschreibungen |
| `--gc-ink-500` | `#64748B` | Muted, Captions, Meta |
| `--gc-paper` | `#FFFFFF` | Card-Background, Form-Background |
| `--gc-bg` | `#F8FAFC` | Page-Background (Default, neutral) |
| `--gc-border` | `#E2E8F0` | Trennlinien, Card-Outlines |
| `--gc-focus` | `#0284C7` | Focus-Ring (3 px outline, 2 px offset) |

**Warum diese Auswahl:**
- **Sky-Blue** = Himmel, Fliegen, Vertrauen — semantisch passend, Marken-Akzent für Eyebrows/Links/Status
- **Ink-900 als Primary-CTA** = maximaler Kontrast, ruhig, „Tower-Funkspruch"-Tonalität (nüchtern, nicht laut)
- **Sun-Amber NICHT als Marken-Akzent** — bleibt fürs 5-Tier-Rating reserviert (§2.2). Orange außerhalb Rating verwässert die Bedeutung des Tier-Systems.
- **Ink-900 auf Paper** = 17.85:1 Kontrast — lesbar in praller Sonne mit Polfilter-Brille

### 2.2 Funktionsfarben — 5-Farben-Ampel (Spot-Rating)

Diese Skala ist **inhaltliche Funktion**, kein Branding. Bestehende Tokens aus Flychat — bleiben unverändert für Wiedererkennung:

| Tier | Token | HEX | Bedeutung | Kontrast auf Weiss |
|---|---|---|---|---|
| 🟣 Legendär | `--fly-violet` | `#8B5CF6` | Top-Tag, alles zusammen | 4.27:1 (nur grosse Schrift) — **immer mit Icon** |
| 🟢 Fliegbar | `--fly-green` | `#16A34A` | Solider Tag, geh fliegen | 4.54:1 ✓ AA |
| 🟫 Abgleiter | `--fly-bronze` | `#92400E` | Nur Soaring/kurz | 7.91:1 ✓ AAA |
| 🟡 Bedingt | `--fly-amber` | `#B45309` | Vorsicht, Briefing lesen | 5.93:1 ✓ AA |
| 🔴 Nicht fliegbar | `--fly-red` | `#DC2626` | Bleib unten | 4.83:1 ✓ AA |

**Wichtig (`color-not-only`):** Jede Tier-Anzeige hat **immer** drei Träger:
1. Farbe (Pill / Border / Dot)
2. Icon (5 distinkte SVG-Symbole — keine Emojis im UI)
3. Text-Label ("Legendär", "Fliegbar", …)

So bleibt das Briefing für Farbblinde, im Sonnenlicht und im Print lesbar.

### 2.3 Status- & System-Farben

| Token | HEX | Verwendung |
|---|---|---|
| `--gc-success` | `#16A34A` | Bestätigungen, "Anmeldung erfolgreich" |
| `--gc-warning` | `#B45309` | Föhn-Warnung, Confidence niedrig |
| `--gc-danger` | `#DC2626` | Fehler, "Nicht fliegbar", Destruktive Aktionen |
| `--gc-info` | `#0284C7` | Hinweise, neutrale System-Meldungen |

### 2.4 Dark Mode

**Wir liefern V1 ohne Dark Mode aus.** Begründung:
- Outdoor-Lesbarkeit ist die Kernanforderung — Light-First.
- Dark Mode würde das Briefing am Berg unbrauchbar machen, wenn das Telefon Auto-Mode anhat und es draussen hell ist.
- Falls iOS/Android `prefers-color-scheme: dark` meldet: wir **bleiben im Light Mode** (kein Auto-Switch), das ist Absicht und wird intern als Feature dokumentiert.

Spätere V2: nur dann Dark Mode, wenn explizit per Toggle und mit eigener, getrennt getesteter Palette. **Nie** durch CSS-Invertierung.

---

## 3. Typografie

### 3.1 Schrift-System

**Plus Jakarta Sans** als Single-Family-System. Gründe:
- Höchste Lesbarkeit auf kleinen Mobil-Bildschirmen (hohe x-Höhe)
- Free, Variable Font, deutsch + französisch + italienisch (für CH-Roadmap)
- Tabular Nums für Wetter-Tabellen
- Eigenständiger, geometrisch-moderner Charakter (kein generischer Default)

```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

:root {
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: ui-monospace, 'SF Mono', Menlo, monospace;
}
```

Tailwind:
```ts
fontFamily: {
  sans: ['Plus Jakarta Sans', 'sans-serif'],
}
```

### 3.2 Type-Scale (Mobile-First)

Basierend auf 16 px Body — kein kleinerer Text irgendwo.

| Rolle | Mobil | Desktop | Weight | Tracking | Verwendung |
|---|---|---|---|---|---|
| Display | 40 px / 1.05 | 64 px / 1.0 | 800 | -0.025em | Hero-Headline only |
| H1 | 32 px / 1.15 | 40 px / 1.1 | 700 | -0.02em | Section-Titel |
| H2 | 24 px / 1.2 | 28 px / 1.2 | 700 | -0.015em | Sub-Section |
| H3 | 20 px / 1.3 | 22 px / 1.3 | 600 | -0.01em | Card-Titel |
| Body L | 18 px / 1.6 | 18 px / 1.6 | 400 | 0 | Lead-Absatz, Briefing-Description |
| Body | 16 px / 1.6 | 16 px / 1.6 | 400 | 0 | Standard-Text |
| Body Strong | 16 px / 1.6 | 16 px / 1.6 | 600 | 0 | Hervorhebungen, Labels |
| Caption | 14 px / 1.5 | 14 px / 1.5 | 500 | 0.005em | Meta, Disclaimer, Help |
| Tabular | 16 px / 1.4 | 16 px / 1.4 | 500 | 0 | Wetter-Werte (`font-variant-numeric: tabular-nums`) |

**Regeln:**
- Zeilenbreite max. **65–75 Zeichen** (Body), **50 Zeichen** (Headlines)
- `font-variant-numeric: tabular-nums` für ALLE Wetter-Zahlen, Uhrzeiten, Höhen
- Niemals `text-decoration: none` auf Links — Unterstreichung ist Affordance
- Niemals nur Farbe als Link-Indikator (Sonnenlicht entsättigt)

---

## 4. Icons

### 4.1 Icon-System

**Lucide Icons** (https://lucide.dev) als Single-Source.

- Stroke: **2 px** überall (konsistent — `lucide-react` default)
- Größen: `--icon-sm: 16px`, `--icon-md: 20px`, `--icon-lg: 24px`, `--icon-xl: 32px`
- Farbe via `currentColor` — erbt vom Eltern-Text
- **NIE Emoji im UI** (außer in user-facing Marketing-Copy auf der Landing-Page als ironisches Detail erlaubt — z. B. "Samstag, 6:30 Uhr ☕")

### 4.2 Spot-Rating-Icons (5 distinkte SVG)

Die 5 Tier-Symbole sind **eigene SVGs**, nicht Lucide:

| Tier | Symbol | Form |
|---|---|---|
| Legendär | Stern (gefüllt, 5-zackig) | filled-star |
| Fliegbar | Häkchen im Kreis | checkmark-circle |
| Abgleiter | Halber Kreis (Pfeil nach unten-rechts) | glide-arrow |
| Bedingt | Dreieck mit Ausrufezeichen | warning-triangle |
| Nicht fliegbar | Kreuz im Kreis | x-circle |

Diese 5 Icons + ihre Farben + ihre Texte sind das **visuelle Markenzeichen** von Wingcast. Sie tauchen auf Web, im E-Mail-Briefing und in der App identisch auf.

---

## 5. Spacing, Layout & Grid

### 5.1 Spacing-Skala (4-pt-Rhythmus)

```
4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128
```

Tailwind-default ist kompatibel. **Keine Zwischenwerte** (kein `5px`, kein `13px`). Section-Spacing zwischen Hauptblöcken: 64 px (Mobil) / 96 px (Desktop).

### 5.2 Container & Breakpoints

| Breakpoint | Min-Breite | Container max-w | Gutter |
|---|---|---|---|
| `sm` (Phone) | 0–640 | full | 16 |
| `md` (Tablet) | 768 | 720 | 24 |
| `lg` (Desktop) | 1024 | 960 | 32 |
| `xl` (Large) | 1280 | 1120 | 32 |

**Content-Max-Width für Reading-Sections:** 720 px (auch auf Desktop) — das ist die Lesbarkeit-Obergrenze für 65–75 Zeichen Plus Jakarta Sans 18 px.

### 5.3 Touch-Targets

- **Minimum 44 × 44 pt** (Apple HIG)
- **Empfohlen 48 × 48 pt** (Outdoor mit Handschuhen)
- 8 pt Mindestabstand zwischen Touch-Zielen
- `hitSlop` / unsichtbarer Padding-Bereich erlaubt, wenn Icon visuell kleiner ist

### 5.4 Safe Areas

- Top: respektiere Notch / Dynamic Island
- Bottom: 16 pt zusätzlich zum Home-Indicator
- Floating CTAs (App): mindestens 24 pt vom unteren Rand

---

## 6. Komponenten

### 6.1 Button

3 Varianten — keine weiteren erfinden:

| Variante | Background | Text | Border | Verwendung |
|---|---|---|---|---|
| **Primary** | `--gc-ink-900` | weiss | none | Eine pro Bildschirm. CTA. |
| **Primary (auf dunkler Sektion)** | weiss | `--gc-ink-900` | none | Invertiert — wenn Section-BG bereits Ink-900 ist |
| **Secondary** | weiss | `--gc-sky-700` | 2 px `--gc-sky-700` | Sekundär-Aktion |
| **Ghost** | transparent | `--gc-sky-700` | none | Tertiär, Footer-Links |

```css
.btn {
  min-height: 48px;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  transition: transform 150ms ease-out, background-color 150ms ease-out;
}
.btn:active { transform: scale(0.97); }
.btn:focus-visible { outline: 3px solid var(--gc-focus); outline-offset: 2px; }
.btn:disabled { opacity: 0.5; cursor: not-allowed; }
```

**Loading-State:** Spinner ersetzt Text (gleiche Breite halten via `min-width`), Button `disabled`. Erst nach 300 ms Loading sichtbar machen — Network kann schneller sein.

### 6.2 Card

Default Card-Styling:

```css
.card {
  background: var(--gc-paper);
  border: 1px solid var(--gc-border);
  border-radius: 12px;
  padding: 24px;
  /* WICHTIG: Outdoor-Tauglichkeit — kein Schatten, nur Border */
  /* Schatten verschwinden bei Sonnenlicht und sehen unscharf aus */
}
```

**Bewusste Entscheidung:** Wir verwenden **keine Box-Shadows** für Tiefe. Stattdessen:
- 1 px solide Border (`--gc-border`)
- Hintergrundfarben-Differenz (`--gc-bg` vs. `--gc-paper`)

Schatten sind erlaubt nur für **Modals / Dropdowns** (echte Z-Achsen-Schicht), nicht für statische Cards.

### 6.3 Forms

- Label **immer sichtbar** über dem Feld (nie nur Placeholder)
- Input-Höhe **min. 48 px**
- Border `2 px` solid `--gc-border`, focus → `--gc-sky-600`
- Error-Text **unter** dem Feld in `--gc-danger`, plus Icon, plus aria-live="polite"
- Required-Indicator: `*` in `--gc-danger`
- Helper-Text immer sichtbar (kein Tooltip-only)

### 6.4 Briefing-Tab-Switcher (Kern-Komponente)

Die Wochentag-Tabs aus `KONZEPT.md` sind das identitätsstiftende Element:

```
┌──────┬──────┬──────────┬──────┬──────┐
│  Mo  │  Di  │  Mi  ⭐  │  Do  │  Fr  │
│  🔴  │  🟫  │  🟣      │  🟢  │  🟡  │
└──────┴──────┴──────────┴──────┴──────┘
```

Spec:
- 5 gleich breite Tabs (Mobil: horizontal scroll wenn nötig — aber 5 Tage müssen passen)
- Aktiver Tab: 3 px Bottom-Border in `--gc-sky-700`, Text Weight 700
- Tier-Icon **über** dem Wochentag-Kürzel (vertikal gestapelt)
- Empfohlener Tag (höchstes Rating der Woche): goldener Stern `⭐` rechts oben — nur **einer** pro Woche
- Tap-Target ≥ 48 pt

---

## 7. Animation

- Standard-Duration: **200 ms** (Micro), **300 ms** (Transition)
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out für Eintritt)
- Animiere **nur** `transform` und `opacity` (Performance)
- `prefers-reduced-motion: reduce` → alle Transitions auf 0.01ms
- **Keine** Decoration-Animationen (kein Auto-Carousel, keine Parallax)
- Animation muss **Bedeutung** tragen: Tab-Wechsel = Slide, Modal = Scale-In, Loading = Skeleton

---

## 8. Web vs. App — geteiltes Design-System

### Was ist identisch (single source of truth)
- **Farbtokens** (CSS-Variablen werden in beiden Codebases via JSON exportiert)
- **Typografie-Skala** (Plus Jakarta Sans überall)
- **Icon-Set** (Lucide + 5 eigene Tier-Icons)
- **Spacing-Skala**
- **Tonalität** (Du-Form, kurze Sätze)
- **5-Farben-Ampel-System**
- **Komponenten-Verhalten** (Button-Logik, Form-Validation-Pattern, Briefing-Tabs)

### Was unterscheidet sich (plattform-spezifisch)

| Element | Web | App |
|---|---|---|
| Navigation | Top-Bar oder kein Nav (Landing) | Bottom-Tab-Bar (max. 5) |
| CTA-Position | Inline + Sticky-Bottom (Mobil) | Floating Action Button (FAB) für Primär-Aktion |
| Modals | Center-Modal, Backdrop blur(0) + scrim 50% | Bottom-Sheet (iOS/Android-konform) |
| Typografie | Plus Jakarta Sans via Google Fonts | Plus Jakarta Sans (gebundelt) |
| Touch | Hover-States erlaubt (Desktop) | Pressed-States (Scale 0.97 + opacity 0.85) |
| Back-Behavior | Browser-History | iOS Swipe-Back / Android Predictive Back — nicht übersteuern |

### Implementation-Bridge

Die Tokens leben in einem geteilten JSON (`design-system/tokens.json`, später anlegen):
```json
{
  "color": { "sky": { "700": "#0369A1", ... } },
  "spacing": { "1": "4px", "2": "8px", ... },
  "fontSize": { "body": "16px", ... }
}
```

Web → Tailwind config liest tokens.json
App (React Native) → Theme-Provider liest tokens.json

So bleibt jede Änderung **eine** Änderung.

---

## 9. Outdoor-spezifische Regeln (das Differenzierende)

Diese Sektion ist der eigentliche Grund, warum Wingcast eine eigene CD braucht.

### 9.1 Sonnen-Lesbarkeitstest

Jede neue Komponente wird vor Release getestet:

1. **Helligkeitstest:** Bildschirm auf Max-Helligkeit, draussen bei Sonne, polarisierte Sonnenbrille auf — Body-Text muss flüssig lesbar sein.
2. **Kontrastwerte:** Body ≥ 7:1 (AAA), Caption ≥ 4.5:1 (AA), funktionale Icons ≥ 3:1.
3. **Keine Hover-Abhängigkeit:** Information darf nie nur in Hover-States stecken (kein Hover am Berg auf dem Touch).
4. **Reduktion bei niedrigem Akku:** App-Modus für Akku < 20%? (V2-Frage — fürs erste: keine animierten Hintergründe.)

### 9.2 Eine-Hand-Bedienung (App)

- Primäre Aktionen im **unteren Drittel** des Screens (Daumenreichweite)
- Top-Bar darf NIE eine Pflicht-Aktion enthalten
- Floating CTAs unten rechts (Rechtshänder-Default, später Setting)
- Swipe-Gesten als Bonus, nie als einzige Möglichkeit

### 9.3 Handschuhe & Nasse Finger

- Touch-Target 48 pt empfohlen (statt 44 pt Minimum)
- Min. 12 pt Spacing zwischen Targets (statt 8 pt)
- Keine Long-Press als einzige Trigger-Methode (mit Handschuh schwer)
- Keine Pinch-to-Zoom auf kritischen UI-Elementen

### 9.4 Offline-Robustheit

- App muss letztes Briefing **offline** anzeigen können (am Berg ist kein 5G)
- Kein blockierender Loading-Screen — Skeleton-States mit gecachten Daten
- "Stand vom XX:XX Uhr"-Hinweis sichtbar wenn Daten älter als 30 min

---

## 10. Pre-Delivery Checkliste

Vor jedem Release einer neuen Page/Component:

### Visuell
- [ ] Kontrast Body ≥ 7:1, Caption ≥ 4.5:1 (Tool: WebAIM Contrast Checker)
- [ ] Nur Lucide-Icons + 5 Tier-Icons — keine Emoji im UI
- [ ] Plus-Jakarta-Sans-Font, keine anderen Schriften
- [ ] Spacing in 4-pt-Rhythmus
- [ ] Keine Box-Shadows auf statischen Cards

### Interaktion
- [ ] Touch-Targets ≥ 44 pt (App: ≥ 48 pt)
- [ ] Focus-Ring sichtbar (3 px sky-600, 2 px offset)
- [ ] Loading-States nach > 300 ms
- [ ] Disabled-States visuell + semantisch
- [ ] Error-Texte mit Icon, Farbe, aria-live

### Outdoor
- [ ] Smartphone-Screen-Test bei Sonne durchgeführt
- [ ] Keine Hover-only-Information
- [ ] Wichtigste Info im unteren Bildschirmdrittel (App)
- [ ] Funktionale Farbe immer mit Icon + Text

### Accessibility
- [ ] `prefers-reduced-motion` respektiert
- [ ] Tab-Reihenfolge logisch
- [ ] Alle Icons mit `aria-label` oder Begleittext
- [ ] Kein Info-Verlust bei Farbblindheit (R/G + 5-Tier mit Icons)
- [ ] Dynamic Type / Text-Skalierung bricht Layout nicht (bis 200%)

### Konsistenz
- [ ] Tokens aus `tokens.json` verwendet, kein Inline-Hex
- [ ] 5-Tier-System identisch zu Briefing-E-Mail
- [ ] Tonalität: Du-Form, max. 18 Wörter / Satz im Body

---

## 11. Was als Nächstes kommt

V1.0 dieser Guideline ist intentional **klein und scharf** — sie deckt Web-Landing + bestehende Flychat-App.

Geplant für V1.1 (sobald V1-Webseite live):
- `tokens.json` als ausführbares Asset (build-step für Tailwind + RN)
- Page-spezifische Overrides (`design-system/pages/landing.md`, `briefing.md`, `dashboard.md`)
- Logo-Spezifikation (existiert noch nicht — separater Termin)
- Illustrations-Stil (Berg-Silhouetten? Strichzeichnungen? — TBD)
- Motion-Library (welche Springs für Karten-Reorder?)

Geplant für V2 (mit App-Relaunch):
- Dark Mode mit eigener Palette (manueller Toggle, nicht auto)
- Onboarding-Flow-Spec
- Notification-Design (Push-Style)
- Kartenansichten (Spot-Map mit POIs)

---

**Eigentümer:** Maurin
**Reviewer:** —
**Letzter Review:** 2026-04-28 (initial)
