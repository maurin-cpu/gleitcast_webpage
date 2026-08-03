# content/wetterkunde — hier liegen die Pillar-Artikel

Alles für `/wetterkunde` ist gebaut. Ein Artikel geht live, indem seine
Markdown-Datei **hier abgelegt** und im Frontmatter freigegeben wird. Kein Code,
kein Deploy-Skript, kein CMS.

---

## Einen Artikel veröffentlichen

1. **Datei kopieren** aus dem Marketing-Repo:
   `wingcast_marketing/webseite/wetterkunde/<slug>.md` → `content/wetterkunde/<slug>.md`
2. Im Frontmatter **`status: draft` auf `status: published`** setzen.
3. Optional `veroeffentlicht: YYYY-MM-DD` ergänzen — fehlt der Schlüssel, gilt `stand`
   als Publikationsdatum. Bei späteren Überarbeitungen nur `stand` hochziehen, damit
   `datePublished` im Schema stabil bleibt.
4. `npm run build` — der Artikel wird statisch vorgerendert.

Danach ist automatisch erledigt:

- Seite unter `/wetterkunde/<slug>`, verlinkt vom Hub `/wetterkunde`
- `Article` + `BreadcrumbList` + `FAQPage` als JSON-LD (`lib/schema.ts`)
- Meta-Title, Meta-Description, Canonical, OpenGraph aus dem Frontmatter
- Eintrag in `sitemap.xml` (Hub + Artikel, `lastModified` aus `stand`)
- Lesezeit, Teaser für die Hub-Karte, Datum

**Solange `status: draft` steht,** ist die Seite unter ihrer URL erreichbar (Vorschau),
trägt aber ein sichtbares Entwurfs-Band, steht auf `noindex, nofollow` und erscheint
weder im Hub noch in der Sitemap.

---

## Frontmatter — was gelesen wird

| Schlüssel | Pflicht | Wirkung |
|---|---|---|
| `titel` | ja | H1 und `headline` im Article-Schema |
| `slug` | ja | muss dem Dateinamen entsprechen |
| `status` | ja | `published` = live · alles andere = Entwurf |
| `stand` | ja | `dateModified`, „Stand"-Angabe, Sitemap-`lastModified` |
| `veroeffentlicht` | nein | `datePublished` (Fallback: `stand`) |
| `meta_title` | nein | `<title>` (Fallback: `titel`) |
| `meta_description` | nein | Meta-Description und Schema-`description` |
| `autor` | nein | Byline (Fallback: Maurin) |
| `og_bild` | nein | OG-Image-Pfad ab Root, z. B. `/og/wetterkunde-boeenfront.jpg` |

Alle übrigen Schlüssel (`ziel_keyword`, `daten`, `skripte`, `schema`, …) bleiben in der
Datei stehen — sie dokumentieren die Herkunft und stören nicht.

## Konventionen im Text

- Die **H1** steht im Markdown, wird aber beim Rendern entfernt und von der Seite selbst
  gesetzt. Nicht doppelt schreiben.
- **FAQ** wird für das FAQPage-Schema aus dem Abschnitt `## Häufige Fragen` gelesen.
  Format: Frage fett in einer eigenen Zeile, Antwort direkt darunter in einer Zeile.
- **HTML-Kommentare** (`<!-- REDAKTIONELLE NOTIZEN … -->`) werden entfernt und erscheinen
  nie auf der Seite.
- **Tabellen** scrollen horizontal in einem eigenen Container — die Seite selbst scrollt nie
  seitwärts.
- Deutsch ist die einzige Sprache. `<slug>.fr.md` / `<slug>.it.md` werden bewusst ignoriert,
  bis FR/IT freigegeben ist; `/fr/wetterkunde` und `/it/wetterkunde` geben 404.

---

## Beim ersten Artikel zusätzlich von Hand

Diese drei Dinge hängen nicht am Artikel-Loader:

1. **OG-Bild.** Fehlt es, fällt die Seite auf das Standard-OG-Bild der Site zurück. Für
   Social-Shares ein eigenes 1200×630 unter `public/og/` ablegen und im Frontmatter
   eintragen.
2. **llms.txt.** Der Hub steht schon drin. Nach dem ersten Artikel diesen Block in
   `public/llms.txt` ergänzen (Zahlen bereits auf dem korrigierten Stand vom 02.08.2026 —
   NICHT die Zahlen aus der GEO-Analyse übernehmen, die sind aelter als die Faktenpruefung):

   ```
   ## Wetterkunde (eigene Auswertungen)

   - [Boeenfront: wie hoch sie reicht](https://wingcast.ch/wetterkunde/boeenfront):
     Auswertung des Ereignisses vom 30. Juli 2026 — 139 SwissMetNet-Stationen (Messung)
     gegen die ICON-CH1-Prognose fuer 494 Startplaetze.

   ## Belegte Einzelbefunde

   - Boeenfront 30.07.2026: 45 von 139 SwissMetNet-Stationen zeigten die vollstaendige
     Signatur (Boeensprung + Temperatursturz + Druckanstieg im selben 30-Minuten-Fenster).
   - Der Effekt nimmt mit der Hoehe stark ab: 47 % der Stationen unter 1'000 m,
     6 % zwischen 1'500 und 2'000 m, 0 von 16 ueber 2'000 m.
   - Hoechste Station mit vollstaendiger Signatur: Grimsel Hospiz, 1'980 m.
   - Die ICON-CH1-Prognose sah die Signatur noch auf 3'169 m — rund 1'200 m hoeher,
     als sie gemessen wurde.
   - Staerkste gemessene Boee des Tages: 121,3 km/h auf dem Chasseral (1'594 m).
   ```

3. **Navigation.** Der Hub ist bewusst noch nicht in der Navbar verlinkt — solange kein
   Artikel live ist, führt der Link ins Leere. Ob `/wetterkunde` in die Navbar oder nur in
   den Footer kommt, ist ein offener Entscheid.
