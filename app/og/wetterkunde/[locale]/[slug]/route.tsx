import fs from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { getAllSlugs, getArticle, type WkLocale } from "@/lib/wetterkunde";
import { OG_SIZE } from "@/lib/seo";

/**
 * OG-Bild für Wetterkunde-Artikel — generiert statt gemalt.
 *
 * Warum generiert und nicht je ein JPG in public/og/: die Wetterkunde ist als
 * Artikelreihe angelegt, und jeder Artikel existiert in mehreren Sprachen. Ein
 * Handbild pro Artikel wären mehrere Dateien pro Beitrag, die jemand vergessen
 * kann — exakt der Fehler, der /wetterkunde/boeenfront eine tote og:image-URL
 * beschert hat. So bekommt jeder neue Artikel automatisch ein Bild, sobald die
 * Markdown-Datei liegt. Wer trotzdem ein eigenes Motiv will, legt es in
 * public/og/ ab und trägt es als `og_bild` ein (siehe lib/og.ts).
 *
 * GESTALTUNG — hält sich an design-system/MASTER.md:
 *   §2.1 Hell, nicht dunkel: Ink auf Paper/Bg ist das Markenbild. Sky nur als
 *        Akzent (Eyebrow-Pill, Wortmarke). Sun-Amber kommt nicht vor, das ist
 *        laut §2.2 dem Rating-System vorbehalten.
 *   §3.1 Plus Jakarta Sans, Inter ausschliesslich für die Wortmarke — dieselbe
 *        Trennung wie in components/ui/Logo.tsx.
 *   §1   Tonalität „nüchterner Co-Pilot": ruhige Fläche, keine Effekte.
 *
 * `force-static` + `generateStaticParams`: die Bilder entstehen beim Build und
 * liegen danach als statische Dateien am CDN — kein Rendern zur Laufzeit, wenn
 * Facebook den Artikel scraped. Auch Schriften und Logo werden deshalb nur
 * beim Build von der Platte gelesen.
 */
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getAllSlugs(locale as WkLocale).map((slug) => ({ locale, slug })),
  );
}

// ── Marken-Assets ─────────────────────────────────────────────────────────

const ASSETS = path.join(process.cwd(), "assets", "fonts");
const font = (file: string) => fs.readFileSync(path.join(ASSETS, file));

/**
 * Satori kann kein WOFF2 — die Dateien, die `next/font` in .next ablegt, sind
 * damit unbrauchbar. Deshalb liegen die Schnitte als TTF in assets/fonts/.
 * Sie gehen nie an den Browser, nur in den Bild-Renderer.
 */
const FONTS = [
  { name: "Plus Jakarta Sans", data: font("PlusJakartaSans-Medium.ttf"), weight: 500 as const, style: "normal" as const },
  { name: "Plus Jakarta Sans", data: font("PlusJakartaSans-Bold.ttf"), weight: 700 as const, style: "normal" as const },
  { name: "Plus Jakarta Sans", data: font("PlusJakartaSans-ExtraBold.ttf"), weight: 800 as const, style: "normal" as const },
  { name: "Inter", data: font("Inter-Bold.ttf"), weight: 700 as const, style: "normal" as const },
];

/**
 * Die Bildmarke als Data-URI. Satori rendert inline-SVG nur eingeschränkt
 * (Verläufe in <defs> fallen durch), über <img> landet die Datei dagegen
 * unverändert im Ergebnis — inklusive des Sky→Ink-Verlaufs im Schirm.
 */
const LOGO_SVG = fs.readFileSync(
  path.join(process.cwd(), "public", "brand", "logo.svg"),
  "utf8",
);
const LOGO_DATA_URI = `data:image/svg+xml;base64,${Buffer.from(LOGO_SVG).toString("base64")}`;

// MASTER §2.1 — Tokens wörtlich übernommen, keine freien Zwischentöne.
const SKY_700 = "#0369A1";
const SKY_600 = "#0284C7";
const SKY_100 = "#E0F2FE";
const INK_900 = "#0F172A";
const INK_500 = "#64748B";
const BG = "#F8FAFC";
const BORDER = "#E2E8F0";

/**
 * Satori kennt kein `line-clamp`. Lange Titel würden aus dem Bild laufen, also
 * wird die Schriftgrösse an der Titellänge ausgerichtet und notfalls hart
 * gekürzt. Stufen an den bestehenden Titeln gemessen (70–95 Zeichen), Basis ist
 * der Display-Grad aus MASTER §3.2 (64 px).
 */
function titleFontSize(length: number): number {
  if (length <= 55) return 64;
  if (length <= 80) return 54;
  if (length <= 110) return 46;
  return 40;
}

function clamp(text: string, max = 140): string {
  return text.length <= max ? text : `${text.slice(0, max - 1).trimEnd()}…`;
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ locale: string; slug: string }> },
) {
  const { locale, slug } = await params;
  const article = getArticle(slug, locale as WkLocale);

  if (!article) {
    return new Response("Not found", { status: 404 });
  }

  // Bereichsbezeichnung aus den Messages (Wetterkunde.eyebrow) — nicht aus
  // einer zweiten Tabelle hier. Eine hartkodierte Kopie lief sofort
  // auseinander: die Seite sagt auf Französisch „Météo", das Bild schrieb
  // „MÉTÉOROLOGIE".
  const t = await getTranslations({ locale, namespace: "Wetterkunde" });
  const title = clamp(article.titel);
  const size = titleFontSize(title.length);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          backgroundColor: BG,
          fontFamily: "Plus Jakarta Sans",
        }}
      >
        {/* Kopf: Bildmarke + Wortmarke, exakt die Sperrung aus Logo.tsx */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <img src={LOGO_DATA_URI} width={52} height={52} alt="" />
          <div
            style={{
              display: "flex",
              fontFamily: "Inter",
              fontSize: 38,
              fontWeight: 700,
              letterSpacing: -0.95,
              color: INK_900,
            }}
          >
            Wing
            {/* Logo.tsx setzt hier einen sky-700→sky-600-Verlauf. Satori kann
                kein background-clip:text — Sky-600 ist der Marken-Primärton
                (§2.1) und steht als Volltonfarbe am nächsten dran. */}
            <div style={{ display: "flex", color: SKY_600 }}>cast</div>
          </div>
        </div>

        {/* Eyebrow als Sky-100-Pill (§2.1: Pill-Backgrounds) + Titel */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              backgroundColor: SKY_100,
              color: SKY_700,
              borderRadius: 999,
              padding: "10px 20px",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 3.5,
            }}
          >
            {t("eyebrow").toUpperCase()}
          </div>

          <div
            style={{
              display: "flex",
              fontSize: size,
              lineHeight: 1.1,
              fontWeight: 800,
              // MASTER §3.2, Display: -0.025em. Satori legt Tracking auch auf
              // Leerzeichen, die Wortabstände werden dadurch etwas knapper —
              // dafür bleibt der Titel zweizeilig statt mit Schusterjunge auf
              // drei. Gegengeprüft: mit 0 wird er dreizeilig.
              letterSpacing: size * -0.025,
              color: INK_900,
            }}
          >
            {title}
          </div>
        </div>

        {/* Fuss: Hairline in Border-Token, darunter Meta in Ink-500 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `2px solid ${BORDER}`,
            paddingTop: 26,
            fontSize: 22,
            fontWeight: 500,
            color: INK_500,
          }}
        >
          <div style={{ display: "flex" }}>{article.autor}</div>
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ display: "flex" }}>{article.stand}</div>
            <div style={{ display: "flex", color: SKY_700, fontWeight: 700 }}>
              wingcast.ch
            </div>
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts: FONTS },
  );
}
