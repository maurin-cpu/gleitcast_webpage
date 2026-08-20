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
- Meta-Title, Meta-Description, Canonical, OpenGraph **und Twitter-Tags** aus dem
  Frontmatter (`lib/seo.ts`, immer im Doppel — sonst erbt die Seite die Werte der
  Startseite)
- OG-Vorschaubild, beim Build generiert (s. unten)
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
| `og_bild` | nein | Eigenes OG-Bild statt des generierten, Pfad ab Root — muss in `public/og/` liegen und **exakt 1200×630** sein |

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
---

## Sprachen

Die Seite läuft in drei Sprachen (`i18n/routing.ts`: `de` als Default ohne Prefix, `fr`
und `it` mit Prefix). Für die Artikel gilt: **jede Sprachfassung ist eine eigene Datei.**

| Datei | URL | OG-Bild bei Handbetrieb |
|---|---|---|
| `<slug>.md` | `/wetterkunde/<slug>` | `public/og/wetterkunde-<slug>.png` |
| `<slug>.fr.md` | `/fr/wetterkunde/<slug>` | `public/og/wetterkunde-<slug>.fr.png` |
| `<slug>.it.md` | `/it/wetterkunde/<slug>` | `public/og/wetterkunde-<slug>.it.png` |

Der `slug` ist in allen Fassungen **derselbe** — auch wenn der Titel übersetzt ist. Nur so
finden hreflang und die Sprachumschaltung zusammengehörige Seiten.

Zur Bildbenennung: der Loader liest den Pfad aus `og_bild` und ist mit dem Dateinamen
zufrieden, egal wie er lautet. Die Tabelle oben ist trotzdem verbindlich, weil
`npm run check:og` beide Richtungen dagegen prüft (Bild ohne Artikel, Artikel mit
bereitliegendem, aber nicht eingetragenem Bild). Ohne Konvention könnte niemand ein
verwaistes Bild von einem absichtlich anders benannten unterscheiden.

### Wenn eine Übersetzung fehlt

Fehlt `<slug>.it.md`, existiert die italienische Fassung schlicht nicht — es gibt **keine
Weiterleitung auf die deutsche**. Konkret:

- `/it/wetterkunde/<slug>` gibt **404** (`dynamicParams: false` in
  `app/[locale]/wetterkunde/[slug]/page.tsx`, der Slug steht gar nicht erst in
  `generateStaticParams`).
- Der italienische Hub `/it/wetterkunde` listet den Artikel nicht
  (`getPublishedArticles("it")`).
- Die Sitemap führt ihn unter `/it/` nicht.
- **hreflang** nennt nur die Sprachen, in denen der Artikel wirklich publiziert ist
  (`getArticleLocales()`), zeigt also nie auf die 404-URL.

Auf die fehlende Fassung verweist damit nichts; erreichbar ist sie nur durch Raten. Das ist
Absicht: eine Weiterleitung würde deutschen Text unter italienischer URL ausliefern und
müsste beim Nachliefern der Übersetzung wieder weg.

Ein Handbild darf vor der Übersetzung im Repo liegen. Es bricht nichts — es wird nur nicht
ausgeliefert, und `npm run check:og` meldet es als Hinweis (kein Fehler), bis die Datei da
ist.

`status: draft` wirkt **pro Sprachfassung**: eine deutsche Fassung kann live sein, während
die französische noch Entwurf ist. Für hreflang, Hub und Sitemap zählt nur `published`.

---

## Beim ersten Artikel zusätzlich von Hand

Diese drei Dinge hängen nicht am Artikel-Loader:

1. **OG-Bild — nichts zu tun.** Jeder Artikel bekommt automatisch ein eigenes
   Social-Vorschaubild: `app/og/wetterkunde/[locale]/[slug]/route.tsx` baut es beim Build
   aus Titel, Autor und Stand (next/og, 1200×630, Markenlook). Kein Handbild nötig, in
   keiner Sprache.

   Wer trotzdem ein eigenes Motiv will: Datei **exakt 1200×630** unter `public/og/`
   ablegen und als `og_bild` ins Frontmatter eintragen. Zeigt `og_bild` ins Leere, fällt
   die Seite auf das generierte Bild zurück — und `npm run check:og` bricht den Build ab,
   damit dieser Fallback nicht unbemerkt zur Dauerlösung wird. Genau daran ist der erste
   Artikel gescheitert: `og_bild` verwies auf ein nie angelegtes JPG, Facebook zeigte eine
   graue Fläche.
2. **llms.txt.** Der Hub steht schon drin. Nach dem ersten Artikel diesen Block in
   `public/llms.txt` ergänzen (Zahlen bereits auf dem korrigierten Stand vom 02.08.2026 —
   NICHT die Zahlen aus der GEO-Analyse übernehmen, die sind aelter als die Faktenpruefung):

   ```
   ## Wetterkunde (eigene Auswertungen)

   - [Boeenfront: wie hoch sie reicht](https://www.wingcast.ch/wetterkunde/boeenfront):
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
