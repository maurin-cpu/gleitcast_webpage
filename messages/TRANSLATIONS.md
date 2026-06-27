# Übersetzungen FR / IT — Anleitung

Die Seite ist mehrsprachig (next-intl). Routing:

- `wingcast.ch/` → Deutsch (Default, ohne Prefix)
- `wingcast.ch/fr` → Französisch
- `wingcast.ch/it` → Italienisch

## Wo übersetzt wird

Aller sichtbarer Text liegt in den Sprachdateien:

- `messages/de.json` — **Quelle / Referenz** (fertig, Deutsch)
- `messages/fr.json` — **zu übersetzen** (aktuell deutsche Platzhalter)
- `messages/it.json` — **zu übersetzen** (aktuell deutsche Platzhalter)

`fr.json` und `it.json` sind 1:1-Kopien von `de.json` — die **Keys/Struktur nicht
ändern**, nur die **Werte** (Text rechts vom Doppelpunkt) übersetzen. Bereits
übersetzt sind: der Sprachumschalter-Label und die `Legal`-Hinweise/-Titel.

Untranslatierte Strings findest du, indem du `fr.json` bzw. `it.json` gegen
`de.json` vergleichst — alles, was noch identisch zum Deutschen ist, ist offen.

## Wichtige Regeln

1. **Platzhalter & Tags nicht anfassen.** Beispiele:
   - `"{n}"`, `"{year}"`, `"{date}"` → bleiben so stehen (werden zur Laufzeit ersetzt).
   - `<b>…</b>` (fett), `<link>…</link>`, `<time>…</time>`, `<ometeo>…</ometeo>`,
     `<meteoswiss>…</meteoswiss>`, `<gfs>…</gfs>` → nur den **Text dazwischen**
     übersetzen, die Tags exakt erhalten.
2. **Arrays behalten ihre Länge** (z. B. `Faq.items`, `Problem.cards`,
   `HowItWorks.steps`, `Subscribe.steps`, `Feedback.items`,
   `HowItWorks.weekdays`). Reihenfolge beibehalten.
3. **Nicht übersetzen:** Eigennamen/Marken (Wingcast, MeteoSchweiz, Open-Meteo,
   ICON-CH1, GFS …), E-Mail-Adressen, URLs, Tier-/Spot-Namen wie „Niesen".
   `HowItWorks.weekdays` = Wochentag-Kürzel (FR: lun/mar/mer/jeu/ven,
   IT: lun/mar/mer/gio/ven).
4. **SEO-Felder mitübersetzen:** `Metadata.title`, `Metadata.description`,
   `Metadata.ogImageAlt`, `Metadata.keywords` (Keywords mit `|` getrennt lassen).

## Rechtstexte (Impressum / Datenschutz / Nutzungsbedingungen)

Diese liegen aktuell **nur auf Deutsch** vor und werden auf `/fr` und `/it` mit
einem Hinweisbanner ausgespielt (die deutsche Fassung bleibt sichtbar und
massgeblich). Der eigentliche Rechtstext steht noch als JSX in:

- `app/[locale]/impressum/page.tsx`
- `app/[locale]/datenschutz/page.tsx`
- `app/[locale]/nutzungsbedingungen/page.tsx`

Wenn juristisch geprüfte FR/IT-Fassungen vorliegen, sag Bescheid — dann ziehen
wir die Rechtstexte ebenfalls in eine sprachabhängige Struktur. **Achtung:**
Juristische Texte bitte fachlich prüfen lassen, nicht maschinell übersetzen.

## Nach dem Übersetzen

```
npm run build
```

prüft, dass alle drei Sprachen sauber kompilieren.
