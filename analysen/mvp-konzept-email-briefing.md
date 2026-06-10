# MVP-Konzept: Wingcast E-Mail-Briefing

## Context

Wingcast hat ein starkes technisches Fundament (488 Startplaetze, Multi-Modell-Wetterdaten, Flyability-Tiers, Foehn-Erkennung, Thermik-Berechnung, LLM-Analysen). Aber dieses Fundament ist ein Proof of Concept — es ist nicht auf die echten Pains der Piloten ausgerichtet.

Die Customer Research zeigt: Das #1-Problem ist **"Ich checke 5-10 Apps pro Flugtag und brauche 30-60 Minuten fuer eine Flugentscheidung — und bin trotzdem unsicher."**

Das MVP loest dieses Problem mit **3 personalisierten Briefings pro Woche**: Montag, Mittwoch und Freitag morgen jeweils eine E-Mail mit einer klaren 5-Tage-Uebersicht — welche Regionen am besten sind, welche Startplaetze sich lohnen, und warum. Das Wochenende wird mit jedem Update genauer (Mi: Sa/So auf 3-4 Tage, Fr: Sa/So auf 1-2 Tage Genauigkeit).

Kein App-Bau. Kein App Store. Nur eine Landing Page, ein Backend und E-Mails.

---

## Markt, Status & Zielgruppe

*Quelle: Discovery vom 2026-04-29 mit Founder. Konsolidiertes Briefing in `landing-briefing-phase1.md`.*

### Markt
- **Schweiz only (CH)** — nicht DACH. Korrektur des urspruenglichen Briefings.
- **488 Schweizer Startplaetze** in der DB (verifiziert)

### Sprachen
- **Landing-Page:** DE primaer + FR + IT (Schweizer Landessprachen, neutrales DE, kein Schweizerdeutsch)
- **E-Mail-Briefing V1:** DE primaer. FR + IT folgen synchron mit Landing-Page-Uebersetzung in Phase 2.
- **Anrede:** Du-Form ueberall

### App-Status & Pricing
- **Beta mit Anmeldepflicht.** Launch der Landing-Page Anfang Mai 2026 zum Schweizer Saisonstart.
- **Aktuell dauerhaft gratis.** Paid-Tier kommt vermutlich spaeter, **wird auf der Landing-Page nicht thematisiert**.
- Conversion-Pfad: Landing → App-Outbound auf `app.wingcast.ch` → Account erstellen + Magic-Link bestaetigen
- Abgestufter Wert in der App: Klick auf Page-Link → 1 Tag Forecast direkt sichtbar (kein Login) → Magic-Link-Login → 5 Tage Forecast → Briefing-Abo nach Account

### Personas

**Primaer-Personas (Landing-Page-Fokus):**

| Persona | Profil | Pain |
|---|---|---|
| **Lukas — der Frischbrevetierte** | 28, Software-Entwickler, Bern, iPhone, Brevet seit 6 Mt., ~15 Fluege, B-Schirm | "Ich verstehe die Wetterdaten nicht, traue meiner Einschaetzung nicht." |
| **Sarah — die Wochenend-Vielfliegerin** | 35, Projektleiterin, Zuerich, Android, 4 J., ~150 Fluege, B-Schirm | "45 Min Wetter-Check jeden Samstag ist Wahnsinn." |

**Sekundaer-Persona:**

| Persona | Profil |
|---|---|
| **Marco — der XC-Ambitionierte** | 42, selbstaendig, 10+ J., 400+ Fluege, XContest-/Swiss-League-Aktiv |

**Anti-Personas (NICHT Zielgruppe):**
- Tandem-Anbieter / kommerzielle Tandem-Piloten
- Profi-Wettkampfpiloten mit eigenem RASP / KK7 / soarWRF-Workflow

### Briefing-Frequenz & -Personalisierung (Klarstellung)
- **User waehlt Wochentage selbst** — keine fixe Mo-/Mi-/Fr-Frequenz mehr (Klarstellung gegenueber frueheren Versionen dieses Konzepts)
- **Versand 06:00 Uhr** am vom User gewaehlten Tag
- User waehlt **mehrere Regionen** (Mehrfachauswahl), bekommt pro Region die besten Spots automatisch sortiert

### Trust-Stand (kritisch)
- **Keine Beta-Nutzer**, keine Testimonials, keine Partner (SHV/Vereine/Flugschulen) per 2026-04-29
- **Confidence-Score noch nicht eingebaut** — Erwaehnungen in Copy raus oder als "kommt" framen
- **Datenquellen:** via Open-Meteo-Aggregation (inkl. ICON-CH1 von MeteoSchweiz, ECMWF, ICON-D2). **Keine Direkt-Lizenzen** → Wording rechtssicher: nicht "Datenquelle MeteoSchweiz", sondern "Modell-Aggregation via Open-Meteo (inkl. ICON-CH1)"

---

## Das eine Problem das wir loesen

> **"Sag mir einfach wann ich diese Woche fliegen kann — wo, wann, und warum."**

Jeder Schweizer Pilot. Jede Woche. 30-60 Minuten verschwendet mit 5-10 Apps. Das loesen wir mit 3 Updates.

---

## Was das Wochen-Briefing liefern MUSS (basierend auf Customer Pains)

### Jedes Briefing beantwortet 4 Fragen in 60 Sekunden:

### Frage 1: "Wann kann ich fliegen?" → Ampel pro Region + Top-Startplaetze

| Pain adressiert | Tool-Overload (KRITISCH), Manuelle Interpretation (KRITISCH) |
|---|---|
| Was der Pilot sieht | 🟣 VIOLET / 🟢 GRUEN / 🟤 BRONZE / 🟡 GELB / 🔴 ROT pro Region + Top-Startplaetze |
| Warum wichtig | Kein anderes Tool gibt eine klare Go/No-Go-Empfehlung pro Region und Woche |
| Existiert technisch | Ja — `fly_status: gray/green/violet` + `safety_status` + `is_conditional` aus Spot-Analyse |

**Mapping auf bestehende Tiers (identisch mit Wingcast-App):**
- `violet` + `safety_status: safe` → 🟣 VIOLET — "Legendaer" (Rating 8.5-10.0, Top-Tag, #8b5cf6)
- `green` + `safety_status: safe` → 🟢 GRUEN — "Fliegbar" (Rating 5.0-8.4, Guter Flugtag, #22c55e)
- `gray` + `safety_status: safe` → 🟤 BRONZE — "Abgleiter" (Rating 2.0-4.9, Fliegbar aber kurz, #B08D57)
- `is_conditional: true` (beliebiger Tier) → 🟡 GELB — "Bedingt" (Skill-Level-abhaengig)
- `safety_status: not_safe` ODER `primary_no_go` vorhanden → 🔴 ROT — "Nicht fliegbar"
- Foehn/Gewitter/Sturm → 🔴 ROT (immer, Override)

**Skill-Level-Anpassung bei GELB (conditional) — OPTIONAL, spaeter:**
- Im MVP: `conditional` → immer 🟡 GELB mit `conditional_reason` (Standard-Modus)
- Spaeter optional:
  - Anfaenger: `conditional` → 🔴 ROT (konservativ, Sicherheit geht vor)
  - Fortgeschritten: `conditional` → 🟡 GELB mit `conditional_reason`
  - Experte: `conditional` → 🟡 GELB mit `conditional_reason` + technische Details

**Rating-Berechnung (deterministisch aus 4 LLM-Sub-Ratings):**
- Gewichte: Thermik 35%, Fenster 25%, Wind 25%, XC 15%
- Ergebnis wird auf Tier-Korridor geclampt (gray 2.0-4.9, green 5.0-8.4, violet 8.5-10.0)
- `not_safe` → Rating immer 0.0

---

### Frage 2: "Wann ist das beste Fenster?" → Zeitfenster pro Startplatz

| Pain adressiert | Manuelle Interpretation (KRITISCH) |
|---|---|
| Was der Pilot sieht | "Fliegbar 11:00-15:00 Uhr" |
| Warum wichtig | 3-Stunden-Bloecke in Windy sind zu grob. Piloten verpassen Fenster oder starten zu frueh. |
| Existiert technisch | Ja — `best_window` und `safe_window` aus Spot-Analyse |

**Format in der E-Mail:**
```
🟢 Niesen — Fliegbar 11:00-15:00
   Thermik-Peak 13-14 Uhr, danach zu windig
```

---

### Frage 3: "Warum?" → Zweistufige Erklaerung (immer)

| Pain adressiert | Manuelle Interpretation (KRITISCH), Anfaenger-Angst (KRITISCH) |
|---|---|
| Was der Pilot sieht | **Immer 2 Bloecke:** 1) Sicherheit, 2) Fliegbarkeit |
| Warum wichtig | Paraglidable zeigt "72%" ohne Erklaerung. Piloten wollen VERSTEHEN — und zwar zuerst ob es sicher ist, dann ob es sich lohnt. |
| Existiert technisch | Ja — `recommendation` + `safety_status` + `conditional_reason` aus Spot-Analyse |

**Struktur der Erklaerung (gilt fuer JEDEN Tier):**

Jede Erklaerung besteht IMMER aus zwei Teilen in dieser Reihenfolge:
1. **Sicherheit** — Gibt es Gefahren? (Foehn, Gewitter, starker Wind, Turbulenz, Windscherung)
2. **Fliegbarkeit** — Wie gut sind die Flugbedingungen? (Thermik, Fenster, XC-Potenzial)

**Beispiele nach Tier-Farbe:**

🟣 VIOLET (Legendaer):
> **Sicherheit:** Keine Gefahren. Stabile Luftmasse, kein Foehn, kein Gewitterrisiko.
> **Fliegbarkeit:** Legendaerer Flugtag! Starke Thermik bis 3200m, Peak 2.1 m/s um 13 Uhr.
> Breites Fenster 10:30-16:00, ideale Windverhaeltnisse. XC-Potenzial hoch.

🟢 GRUEN (Fliegbar):
> **Sicherheit:** Keine relevanten Gefahren. Leichter NW 12 km/h, stabile Verhaeltnisse.
> **Fliegbarkeit:** Guter Thermik-Tag. Thermik bis 2800m, Peak 1.4 m/s um 13 Uhr.
> Fenster 11-15 Uhr, danach Westwind zunehmend.

🟤 BRONZE (Abgleiter):
> **Sicherheit:** Keine akuten Gefahren. Schwache Bedingungen, aber sicher.
> **Fliegbarkeit:** Abgleiter moeglich. Schwache Thermik (0.6 m/s), tiefe Wolkenbasis (1400m).
> Kurzes Fenster 12-13:30 Uhr. Kein XC, aber Soaring moeglich.

🟡 GELB (Bedingt):
> **Sicherheit:** Vorsicht — kraeftige Hoehenboeen ab 14 Uhr (>25 km/h). Windscherung moeglich.
> **Fliegbarkeit:** Thermik vorhanden aber boeig (0.8 m/s). Kurzes Fenster 12-14 Uhr.
> Nur fuer erfahrene Piloten.

🔴 ROT (Nicht fliegbar):
> **Sicherheit:** GEFAEHRLICH — Suedfoehn aktiv (Druckdifferenz Nord/Sued 8 hPa). Kammwind >50 km/h.
> Starke Turbulenz auf der Nordseite der Alpen erwartet.
> **Fliegbarkeit:** Nicht fliegbar. Naechster fliegbarer Tag: Samstag.

---

### Frage 4: "Wie sicher ist die Vorhersage?" → Confidence + Quellen

| Pain adressiert | Vorhersage-Ungenauigkeit (KRITISCH/Sicherheit), KI-Vertrauen |
|---|---|
| Was der Pilot sieht | "Confidence: 85% · Basierend auf: ICON-CH1, ICON-D2, Open-Meteo" |
| Warum wichtig | Piloten vertrauen KI nur wenn sie Transparenz sehen. 7 Trust-Requirements aus Research. |
| Existiert technisch | Ja — `confidence: high/medium/low` aus Spot-Analyse |

**Trust-Elemente in JEDER E-Mail:**
1. Confidence-Score (hoch/mittel/niedrig → 85%/65%/45%)
2. Welche Modelle genutzt wurden
3. Disclaimer: "Decision Support — die finale Entscheidung triffst du."
4. Konservativer Safety-Bias: "Im Zweifel: nicht fliegen."
5. Wo Modelle uebereinstimmen / abweichen (wenn relevant)

---

## E-Mail-Struktur (Interaktives Briefing — 3x pro Woche)

### Technik: CSS-only Tabs (Radio-Button-Hack)

E-Mails unterstuetzen kein JavaScript — aber mit versteckten Radio-Buttons und CSS `:checked`-Selektoren
lassen sich klickbare Tabs bauen, die in den meisten E-Mail-Clients funktionieren:

| Client | Support | Marktanteil Piloten (geschaetzt) |
|---|---|---|
| Apple Mail (iOS) | ✅ Voll | ~50% (iPhone am Berg) |
| Apple Mail (macOS) | ✅ Voll | ~10% |
| Gmail (Web + App) | ✅ Voll | ~25% |
| Outlook.com / Web | ⚠️ Teilweise | ~10% |
| Outlook Desktop (Windows) | ❌ Kein Support | ~5% |

**Fallback fuer Outlook Desktop:** Alle 5 Tage untereinander anzeigen (gestapelt, ohne Tabs).
Da ~85-90% der Piloten einen Client mit Tab-Support nutzen, ist das ein guter Kompromiss.

### Wie es funktioniert (HTML-Prinzip)

```html
<!-- Versteckte Radio-Buttons steuern die Sichtbarkeit -->
<input type="radio" name="tag" id="mi">
<input type="radio" name="tag" id="do">
<input type="radio" name="tag" id="fr">
<input type="radio" name="tag" id="sa" checked>
<input type="radio" name="tag" id="so">

<!-- Tab-Leiste: 5 Tage als klickbare Buttons mit Ampelfarbe -->
<label for="mi">🟡 Mi</label>
<label for="do">🟢 Do</label>
<label for="fr">🟢 Fr</label>
<label for="sa">🟣 Sa ⭐</label>
<label for="so">🟤 So</label>

<!-- Inhalte: Nur der gewaehlte Tag ist sichtbar -->
<div class="tag-content" id="content-mi"> ... Mittwoch-Spots ... </div>
<div class="tag-content" id="content-do"> ... Donnerstag-Spots ... </div>
<div class="tag-content" id="content-fr"> ... Freitag-Spots ... </div>
<div class="tag-content" id="content-sa"> ... Samstag-Spots ... </div>
<div class="tag-content" id="content-so"> ... Sonntag-Spots ... </div>

<style>
  .tag-content { display: none; }
  #mi:checked ~ #content-mi { display: block; }
  #do:checked ~ #content-do { display: block; }
  #fr:checked ~ #content-fr { display: block; }
  #sa:checked ~ #content-sa { display: block; }
  #so:checked ~ #content-so { display: block; }
</style>
```

### E-Mail-Layout (was der Pilot sieht)

**Hinweis:** Die 5 Tage in den Tabs sind dynamisch je nach Versandtag:
- Mo-Briefing: Mo, Di, Mi, Do, Fr
- Mi-Briefing: Mi, Do, Fr, Sa, So (Wochenend-Vorschau!)
- Fr-Briefing: Fr, Sa, So, Mo, Di (finales Wochenend-Update!)

Beispiel unten zeigt das **Mittwochs-Briefing** (Mi-So) — das wichtigste Briefing, deckt das Wochenende ab:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
GLEITCAST — Dein Flugwetter-Briefing [KW XX]
[Montag/Mittwoch/Freitag, DD.MM.YYYY]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WOCHEN-UEBERBLICK
"Wechselhafte Woche mit einem Highlight am Mittwoch.
Berner Oberland und Zentralschweiz am besten. Foehn-Tendenz
ab Donnerstag im Wallis."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DEINE 5 TAGE IM UEBERBLICK (Mi–So)

Mi: 🟡 Bedingt — Hoehenwind nachmittags
Do: 🟢 Guter Thermik-Tag, leichter NW-Wind
Fr: 🟢 Fliegbar — breites Fenster
Sa: 🟣 BESTER TAG — legendaer, jetzt planen! ⭐
So: 🟤 Abgleiter moeglich, Bewoelkung nimmt zu

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

BESTE REGIONEN DIESE WOCHE

1. 🟣 BERNER OBERLAND — Top-Region (Sa legendaer, Do+Fr fliegbar)
2. 🟢 ZENTRALSCHWEIZ — Gut (Sa+Fr fliegbar, So bedingt)
3. 🟤 GLARNERLAND — Eingeschraenkt (Do Abgleiter, Sa Foehn)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

BESTE STARTPLAETZE — WAEHLE EINEN TAG:

┌──────┬──────┬──────┬──────────┬──────┐
│🟡 Mi │🟢 Do │🟢 Fr │🟣 Sa ⭐  │🟤 So │
└──────┴──────┴──────┴──────────┴──────┘
  Bester Tag vorausgewaehlt · Klick zum Wechseln

--- Inhalt wechselt je nach gewaehltem Tag ---
--- Zeigt die besten Startplaetze fuer diesen Tag ---
--- (automatisch nach Rating sortiert, wie im Briefing) ---

SAMSTAG — 🟣 Legendaer (bester Tag vorausgewaehlt)

  1. NIESEN (Berner Oberland) 🟣 Rating 9.2
     Fliegbar 10:30–16:00
     Sicherheit: Keine Gefahren. Stabile Luftmasse.
     Fliegbarkeit: Starke Thermik bis 3200m, Peak 2.1 m/s.
     XC-Potenzial! Confidence: hoch (92%)

  2. STOCKHORN (Berner Oberland) 🟢 Rating 7.1
     Fliegbar 11:00–15:30
     Sicherheit: Keine relevanten Gefahren. Leichter NW.
     Fliegbarkeit: Thermik bis 2800m, Peak 1.4 m/s.
     Confidence: hoch (85%)

  3. PLANPLATTEN (Zentralschweiz) 🟡 Rating 4.8
     Eingeschraenkt 12:00–14:00
     Sicherheit: Vorsicht — Hoehenboeen ab 14 Uhr.
     Fliegbarkeit: Thermik vorhanden aber boeig. Kurz.
     Confidence: mittel (65%)

  4. NIEDERHORN (Berner Oberland) 🟤 Rating 3.2
     Kurzes Fenster 12:30–14:00
     Sicherheit: Keine akuten Gefahren.
     Fliegbarkeit: Schwache Thermik, Abgleiter.

  🔴 Nicht fliegbar: Braunwald (Foehn-Tendenz)

--- Klickt der Pilot auf "Do", wechselt die Liste: ---

DONNERSTAG — 🟢 Fliegbar

  1. NIESEN 🟢 Rating 7.8
     Fliegbar 11:00–15:00
     Sicherheit: Keine Gefahren.
     Fliegbarkeit: Gute Thermik, NW 10 km/h.

  2. STOCKHORN 🟢 Rating 6.5
     Fliegbar 11:00–14:30
     Sicherheit: Leichter NW.
     Fliegbarkeit: Thermik bis 2600m.

  3. NIEDERHORN 🟤 Rating 3.8
     Abgleiter 12:00–13:30
     Sicherheit: OK.
     Fliegbarkeit: Schwach, kurz.

  🔴 Nicht fliegbar: Braunwald (Foehn aktiv), Planplatten (Windscherung)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FOEHN-STATUS
[Wenn relevant — Nord- oder Suedfoehn + Druckdifferenz]
⚠️ Suedfoehn erwartet ab Sonntag.
Druckdifferenz Nord/Sued: 6 hPa (maessig).
Nordseite der Alpen betroffen. Suedseite (Ticino) nicht betroffen.

GEWITTER-WARNUNG
[Wenn relevant — ab CAPE >500 oder Gewitterrisiko in Modellen]
⛈️ Gewitterrisiko Sonntag ab 15 Uhr.
Besonders in den Voralpen. Frueh starten empfohlen.
Fenster vor 14 Uhr nutzen.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Basierend auf: ICON-CH1 (1km), ICON-D2, ICON-EU, Open-Meteo
Wingcast ist Decision Support — die finale Entscheidung triffst du.
Im Zweifel empfehlen wir: NICHT fliegen. Sicherheit geht vor.

👉 Alle Details im Flugwetter-Dashboard ansehen: [Link]
📲 Briefing weiterleiten an deine Fluggruppe: [WhatsApp-Share-Link]
Einstellungen aendern: [Link]
```

### Datenquelle fuer Startplatz-Ranking

Die Startplaetze pro Tag kommen direkt aus der bestehenden Briefing-Logik:
- `/api/briefing` liefert alle Spots mit Rating, fly_status, safety_status pro Tag
- Gefiltert auf die Subscriber-Regionen
- Sortiert nach Rating (hoechstes zuerst)
- Nicht-fliegbare Spots (🔴) werden kompakt am Ende zusammengefasst
- Identische Daten wie im Briefing-Dashboard — E-Mail ist die vereinfachte Ansicht

### Fallback (Outlook Desktop / alte Clients)

Clients ohne CSS-`:checked`-Support zeigen alle 5 Tage gestapelt untereinander:

```
MITTWOCH — 🟡 Bedingt
  1. STOCKHORN 🟡 Rating 4.5 — Eingeschraenkt 12:00–14:00
  ...

DONNERSTAG — 🟢 Fliegbar
  1. NIESEN 🟢 Rating 7.8 — Fliegbar 11:00–15:00
  ...

FREITAG — 🟢 Fliegbar
  1. NIESEN 🟢 Rating 7.2 — Fliegbar 10:30–15:30
  2. STOCKHORN 🟢 Rating 6.8 — Fliegbar 11:00–15:00
  ...

SAMSTAG — 🟣 Legendaer ⭐
  1. NIESEN 🟣 Rating 9.2 — Fliegbar 10:30–16:00
  2. STOCKHORN 🟢 Rating 7.1 — Fliegbar 11:00–15:30
  ...

SONNTAG — 🟤 Abgleiter
  1. NIEDERHORN 🟤 Rating 3.1 — Abgleiter 12:00–13:00
  ...
```

Funktioniert auch, ist nur laenger. Piloten mit Outlook Desktop koennen trotzdem alles lesen.

---

## Deep-Link: E-Mail → Briefing-Ansicht

### Konzept

Jede E-Mail enthaelt einen CTA-Link, der den Piloten direkt in die Briefing-Ansicht
(Flugwetter-Dashboard) fuehrt — **vorgefiltert auf seine Subscriber-Einstellungen**.
Der Pilot sieht sofort seine Regionen, kann aber den Filter aufheben um alles zu sehen.

### URL-Schema

```
/briefing?regions=bern,zentralschweiz&day=2&level=standard
```

| Parameter | Beschreibung | Quelle |
|---|---|---|
| `regions` | Komma-separierte Region-IDs | Subscriber-Regionen aus InstantDB |
| `day` | Tag-Index (0=Fr, 1=Sa, 2=So, 3=Mo, 4=Di) | Bester Tag (hoechstes Rating, meist Sa oder So) |
| `level` | Skill-Level (`beginner`/`standard`/`expert`) | Standard-Modus im MVP |

### Was passiert beim Oeffnen

1. `briefing.js` liest `URLSearchParams` beim Init
2. `regions`-Parameter → setzt `state.filterRegions` (ueberschreibt localStorage)
3. `day`-Parameter → waehlt den besten Tag-Tab aus (Deep-Link zeigt Highlight-Tag)
4. `level`-Parameter → blendet Conditional-Spots passend ein/aus (Standard-Modus im MVP)

### Bestehende Infrastruktur (was bereits funktioniert)

- **Region-Filter:** `state.filterRegions` + `regionPassesFilter()` + `computeDayCounts()` existieren bereits in `briefing.js`
- **Tag-Auswahl:** `selectDay(idx)` existiert bereits
- **Region-IDs:** `source_area.py` kann Spot → Region-ID aufloesen
- **API:** `/api/briefing` liefert alle Daten (Spots, Regionen, Counts)

### Was gebaut werden muss

1. **`briefing.js`:** ~20 Zeilen — URL-Params lesen, Filter/Tag setzen beim Init
2. **`briefing.js`:** Spot-Highlight — CSS-Klasse `bp-spot--subscriber` fuer "Dein Spot"-Badge
3. **`briefing.css`:** Styling fuer Subscriber-Spot-Highlight
4. **`email_service.py`:** Deep-Link-URL generieren pro Subscriber (Regionen aus Spots ableiten)

### Beispiel-Flow

```
1. Sarah hat Berner Oberland + Zentralschweiz als Regionen gewaehlt
2. Freitags-Briefing zeigt:
   BESTE REGIONEN: 🟣 Berner Oberland (Sa legendaer), 🟢 Zentralschweiz (Sa+So)
   TOP-SPOTS: 🟣 Niesen Sa, 🟢 Stockhorn Sa+So, 🟡 Planplatten Sa bedingt

   👉 [Alle Details im Dashboard ansehen]

3. Sarah klickt den Link:
   /briefing?regions=bern,zentralschweiz&day=1&level=standard

4. Briefing oeffnet sich:
   - Region-Filter: Berner Oberland + Zentralschweiz aktiv (andere ausgeblendet)
   - Tag: Samstag (bester Tag) vorausgewaehlt
   - Alle Spots in diesen Regionen sichtbar
   - Sarah sieht: "Oh, Niederhorn ist auch gruen — da war ich noch nie!"

5. Discovery-Effekt: Sarah entdeckt neue Spots in ihren Regionen
```

### Warum das wichtig ist

- **Bridging:** E-Mail ist der Einstieg, Briefing hat die Tiefe (Meteogramm, Karte, Analyse-Details)
- **Discovery:** Pilot sieht nicht nur seine Spots, sondern auch Nachbar-Spots in der Region
- **Retention:** Jeder E-Mail-Klick fuehrt in die App — baut Gewohnheit auf
- **Upsell-Pfad:** Von E-Mail → Briefing → Chat (spaeter) ist ein natuerlicher Funnel

---

## Skill-Level-Anpassung (3 Modi) — OPTIONAL im MVP

### Anfaenger-Modus (Lukas)
- Tiers: Violet/Gruen/Bronze werden angezeigt, aber conditional → 🔴 ROT (konservativ)
- Sprache: Kein Fachjargon ("Gewitterrisiko" statt "CAPE >800")
- Erklaerung: Laenger, paedagogisch ("Foehn ist ein warmer Fallwind der...")
- Empfehlung: "Wir empfehlen heute NICHT zu fliegen" (direktiv)
- Extra: "Lern-Tipp" am Ende ("Wusstest du? Foehn erkennst du an...")
- Bronze-Spots: Werden als "Nur Abgleiter — gut zum Ueben" dargestellt

### Standard-Modus (Sarah)
- Tiers: Alle 5 Farben sichtbar (Violet/Gruen/Bronze/Gelb/Rot)
- conditional → 🟡 GELB mit `conditional_reason`
- Sprache: Pilot-Fachbegriffe OK (Thermik, Foehn, Lee)
- Erklaerung: Kompakt, 2-3 Saetze
- Empfehlung: Neutral ("Bedingt fliegbar, kraeftige Hoehenboeen")
- Rating: Numerisches Rating (z.B. 7.1) sichtbar

### Experten-Modus (Marco)
- Tiers: Alle 5 Farben + detaillierte Sub-Ratings
- conditional → 🟡 GELB mit `conditional_reason` + technische Details
- Sprache: Technisch (Windscherung, Lapse Rate, CAPE erlaubt)
- Extra-Daten: Modell-Vergleich, XC-Potenzial, Steigwerte
- Empfehlung: Sachlich, Pilot entscheidet selbst
- Sub-Ratings: Thermik/Fenster/Wind/XC einzeln sichtbar (G-Eval-Ansatz)
- Thermal-Details: Peak-Steigrate, Wolkenbasis, Windprofil auf Hoehe

---

## Was IN der E-Mail ist vs. was NICHT

### IN (MVP)

| Feature | Adressiert Pain | Technisch vorhanden |
|---|---|---|
| **Interaktive Wochentag-Tabs** (CSS-only, 5 Tage klickbar) | Tool-Overload, Planung | Ja (CSS Radio-Button-Hack, Fallback gestapelt) |
| **Beste Regionen der Woche** (Ranking) | Tool-Overload, Interpretation | Ja (Regionen aus source_area + Ratings) |
| **Beste Startplaetze pro Tag** (wie Briefing, automatisch nach Rating) | Tool-Overload, Interpretation | Ja (fly_status + safety_status + is_conditional) |
| 5-Farben-Tier (violet/gruen/bronze/gelb/rot) | Interpretation | Ja (fly_status + safety_status) |
| Bestes Zeitfenster pro Spot | Interpretation | Ja (best_window, safe_window) |
| Erklaerung WARUM (zweistufig: Sicherheit → Fliegbarkeit) | Interpretation, Anfaenger-Angst | Ja (recommendation + safety_status) |
| 5-Tage-Ueberblick mit Ampel | Planung | Ja (5-Tage-Analyse vorhanden) |
| Confidence-Score | Vertrauen, Genauigkeit | Ja (confidence) |
| Foehn-Status (Nord/Sued + Druckdifferenz) | Alpine Komplexitaet, Sicherheit | Ja (foehn_indicators.py) |
| Gewitter-Warnung (wenn CAPE/Risiko relevant) | Sicherheit (#2 Unfallursache) | Ja (aus Wetterdaten ableitbar) |
| WhatsApp-Share-Link | Social Validation, Verbreitung | Einfach (Share-URL generieren) |
| Konservativer Safety-Bias ("im Zweifel: nicht fliegen") | Vertrauen, Sicherheitskultur | Ja (Disclaimer + konservative Empfehlung) |
| Modell-Quellen anzeigen | Vertrauen | Ja (bekannt welche Modelle) |
| Disclaimer | Vertrauen | Muss eingefuegt werden |
| Skill-Level-Anpassung | Anfaenger-Angst | **Optional** — Standard-Modus fuer alle, Level-Auswahl spaeter |

### NICHT im MVP (spaeter)

| Feature | Warum nicht jetzt |
|---|---|
| Individuelle Startplatz-Favoriten | Regionen-Auswahl reicht, beste Spots werden automatisch gezeigt |
| Community ("Fliegt jemand?") | Braucht kritische Masse |
| Backtesting-Anzeige | Braucht historische Daten-Sammlung |
| XC-Routen-Vorhersage | Zu komplex fuer MVP |
| Offline-Modus | E-Mail braucht kein Offline |
| Live-Tracking | Anderes Produkt |
| Multi-Sprache E-Mail (FR/IT) | DE zuerst, FR/IT folgen Phase 2 synchron mit Landing-Page-Uebersetzung |

---

## Subscriber-Onboarding (Landing Page)

### Was der Pilot eingibt (Pflicht):
1. **E-Mail-Adresse**
2. **Regionen** (Mehrfachauswahl, identisch mit Regionen im Code: z.B. Berner Oberland, Zentralschweiz, Wallis, Glarnerland, Jura, ...) — Der Pilot waehlt die Regionen, fuer die er ein Wochen-Feedback erhalten will. Wingcast zeigt dann die besten Startplaetze in diesen Regionen automatisch.

### Optional (vorerst nicht im MVP):
- Startplatz-Auswahl (individuelle Favoriten aus den 488 vorhandenen) — spaeter
- Skill-Level (Anfaenger / Fortgeschritten / Experte) — Standardmaessig Standard-Modus fuer alle
- Maximale Anfahrtszeit (fuer regionale Empfehlungen)
- Bevorzugte Windrichtung
- Schirm-Kategorie (A/B/C/D — beeinflusst Windlimits)

---

## Versand-Logik

### Zeitplan: User waehlt Wochentage selbst

**Klarstellung:** Im Gegensatz zu fruehen Konzept-Iterationen ist der Versand **nicht fix 3x/Woche (Mo/Mi/Fr)**, sondern **user-konfigurierbar**:

- Beim Onboarding (in der App nach Account-Erstellung) waehlt der User aus, an welchen Wochentagen er ein Briefing erhalten will
- Versand immer **06:00 Uhr** am gewaehlten Tag
- Beispiele:
  - Wochenend-Pilot waehlt nur Fr → 1 Briefing/Woche, finales Wochenend-Update
  - Aktiver Pilot waehlt Mo + Mi + Fr → 3 Briefings/Woche (entspricht der frueher fix geplanten Frequenz)
  - Vielflieger waehlt alle 7 Tage → taegliches Briefing

**Abdeckung:** Jedes Briefing zeigt konstant **5 Tage ab Versanddatum** (heute + naechste 4 Tage).

**Warum konfigurierbar:** Verschiedene Personas haben verschiedene Rhythmen. Sarah (Wochenend-Vielfliegerin) braucht Fr 06:00 vor dem Wochenende. Lukas (Frischbrevetierter) experimentiert vielleicht mit taeglichem Briefing fuer Lerneffekt. Forcierte 3x/Woche-Frequenz erzeugt unnoetigen Inbox-Druck.

### Trigger-Logik:
1. 5-Tage-Analysen laufen jeweils am Vorabend (So/Di/Do) oder am Morgen (Mo/Mi/Fr frueh)
2. Nach Analyse-Durchlauf: Subscribers filtern nach ihren Regionen
3. Beste Startplaetze pro Region automatisch ermitteln (Top-Spots nach Rating)
4. Briefing generieren pro Subscriber (personalisiert nach Regionen)
5. Versand via Resend/Postmark (transaktionale E-Mail)

---

## Was gebaut werden muss (auf bestehendem Fundament)

### 1. Landing Page + Subscriber-Management
- Einfache Registrierungs-Seite (Flask Template oder separate Page)
- Subscriber-Daten in InstantDB speichern (bereits vorhanden)
- **Regionen-Auswahl UI** (Mehrfach-Checkboxen, identisch mit Regionen im Code: Berner Oberland, Zentralschweiz, Wallis, etc.)
- Startplaetze werden automatisch aus den gewaehlten Regionen ermittelt (keine manuelle Spot-Auswahl im MVP)
- Abmelde-Link / Einstellungen-Link

### 2. E-Mail-Template-Engine (interaktiv)
- HTML E-Mail Template mit **CSS-only Tabs** (Radio-Button-Hack fuer Wochentag-Auswahl)
- 5-Farben-Tier-Darstellung (Violet/Gruen/Bronze/Gelb/Rot)
- CSS-Farben identisch mit Wingcast-App: `--color-fly-violet: #8b5cf6`, `--color-fly-green: #22c55e`, `--color-fly-gray: #B08D57`
- Tab-Leiste: 5 Wochentage mit Ampelfarbe, bester Tag vorausgewaehlt
- **Fallback:** Outlook Desktop / alte Clients sehen alle 5 Tage gestapelt (kein Tab-Switch)
- 1 Variante (Standard-Modus) — Anfaenger/Experte-Varianten spaeter optional
- Responsive (Mobile-first — Piloten lesen auf dem Handy)
- Personalisierung: Name, Regionen (Startplaetze automatisch aus Regionen)

### 3. Tier-Mapping-Logik (identisch mit Wingcast-App)
- `fly_status` (violet/green/gray) direkt aus Spot-Analyse uebernehmen
- `is_conditional` + `conditional_reason` als eigene Gelb-Stufe
- `safety_status: not_safe` → immer Rot (Rating 0.0)
- Skill-Level-Anpassung: optional (Standard-Modus fuer alle im MVP)
- Foehn-Override (Foehn aktiv → immer Rot fuer betroffene Sites)
- Rating-Anzeige: Numerisch (z.B. 7.1) ab Standard-Modus

### 4. E-Mail-Versand-Service
- Integration mit Resend oder Postmark (transaktionale E-Mail)
- Scheduling (Cron oder Vercel Cron Functions)
- Oeffnungsrate / Click-Tracking (fuer Produkt-Feedback)

### 5. Erklaerungstext-Generierung (zweistufig)
- Bestehende LLM-Recommendation anpassen fuer E-Mail-Format
- **Immer zweistufig:** 1) Sicherheits-Erklaerung, 2) Fliegbarkeits-Erklaerung
- Standard-Modus-Prompt (Skill-Level-spezifische Prompts spaeter optional)
- Foehn-Kontext automatisch einfuegen wenn relevant

### 6. Briefing Deep-Link (E-Mail → Dashboard)
- `briefing.js` erweitern: URL-Parameter beim Init lesen (~20 Zeilen)
- Subscriber-Spots visuell hervorheben (CSS-Klasse `bp-spot--subscriber`)
- `email_service.py`: Deep-Link-URL pro Subscriber generieren (Regionen aus Spots ableiten)
- Siehe Abschnitt "Deep-Link: E-Mail → Briefing-Ansicht" fuer Details

---

## Erfolgskriterien

| Metrik | Ziel | Warum |
|---|---|---|
| Subscriber nach 4 Wochen | 50+ | Validiert Interesse |
| E-Mail-Oeffnungsrate | >60% | Piloten lesen es (Branchen-Avg: 20%) |
| "Korrekt"-Feedback | >75% | KI-Genauigkeit akzeptabel |
| Weiterempfehlungsrate | >20% | Organisches Wachstum |
| Abmelderate | <5% pro Monat | Retention |

---

## Dateien die modifiziert/erstellt werden muessen

### Bestehend (modifizieren):
- `web.py` — neue API-Endpoints fuer Subscriber
- `config.py` — E-Mail-Config, Tier-Mapping (nutzt bestehende `_FLYABILITY_TIERS`, `_TIER_RATING_RANGES`)
- `chat_engine.py` — E-Mail-spezifische Analyse-Aggregation (nutzt `build_briefing_data()` als Basis)
- `static/js/briefing.js` — URL-Parameter-Parsing beim Init, Subscriber-Spot-Highlighting
- `static/css/briefing.css` — Styling fuer `bp-spot--subscriber` Badge

### Neu (erstellen):
- `email_service.py` — E-Mail-Template-Rendering + Versand
- `subscriber.py` — Subscriber-Management (CRUD, InstantDB)
- `scheduler.py` — 3x-Wochen-Briefing-Versand (Mo/Mi/Fr)
- `templates/subscribe.html` — Landing Page
- `templates/email/briefing.html` — E-Mail-Template (HTML)
- ~~`templates/email/briefing_beginner.html`~~ — Anfaenger-Variante (optional, spaeter)
- ~~`templates/email/briefing_expert.html`~~ — Experten-Variante (optional, spaeter)

### Bestehend (wiederverwenden ohne Aenderung):
- `fetch_weather.py` — Wetterdaten holen (unveraendert)
- `thermik_calculator.py` — Thermik-Berechnung (unveraendert)
- `foehn_indicators.py` — Foehn-Erkennung (unveraendert)
- `gust_calculator.py` — Boen-Modell (unveraendert)
- `station_observations.py` — Bias-Korrektur (unveraendert)
- `spots.py` — Startplatz-Datenbank (unveraendert)
- `instantdb_client.py` — Datenbank-Client (unveraendert)
- `skills/flyability.md` — Flyability-Prompt (unveraendert)
- `skills/safety_check.md` — Safety-Prompt (unveraendert)

---

## Verification

1. **Subscriber-Flow testen:** Registrierung → Regionen waehlen → Bestaetigungs-E-Mail
2. **E-Mail-Generierung testen:** Test-E-Mail mit Standard-Modus generieren (Regionen-basiert)
3. **CSS-Tabs testen:** Tab-Wechsel in Apple Mail (iOS + macOS), Gmail, Outlook Web pruefen
4. **CSS-Fallback testen:** Outlook Desktop → alle 5 Tage gestapelt sichtbar
5. **Tier-Mapping testen:** Alle Kombinationen (fly_status x safety_status x is_conditional) — 3×2×2 = 12 Kombinationen
6. **Foehn-Override testen:** Bei aktivem Nord-/Suedfoehn muessen betroffene Sites ROT sein
7. **Gewitter-Warnung testen:** Bei CAPE >500 erscheint Gewitter-Block in E-Mail
8. **Mobile-Rendering testen:** E-Mail auf iPhone + Android pruefen (Mobile-first)
9. **Scheduling testen:** Cron-Jobs loesen korrekt Mo/Mi/Fr 06:00 aus (3x pro Woche)
10. **End-to-End:** Wetterdaten holen → 5-Tage-Analyse → Subscriber filtern nach Regionen → Briefing versenden
11. **Deep-Link testen:** E-Mail-Link oeffnen → Briefing zeigt korrekte Region-Filter, besten Tag vorausgewaehlt
12. **Deep-Link ohne Params:** `/briefing` ohne URL-Params → Fallback auf localStorage (bestehendes Verhalten unveraendert)
13. **WhatsApp-Share testen:** Share-Link oeffnet WhatsApp mit Briefing-Zusammenfassung
