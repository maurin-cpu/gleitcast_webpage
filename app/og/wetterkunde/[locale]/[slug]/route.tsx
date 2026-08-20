import { ImageResponse } from "next/og";
import { routing } from "@/i18n/routing";
import { getAllSlugs, getArticle, type WkLocale } from "@/lib/wetterkunde";
import { OG_SIZE } from "@/lib/seo";

/**
 * OG-Bild für Wetterkunde-Artikel — generiert statt gemalt.
 *
 * Warum generiert und nicht je ein JPG in public/og/: die Wetterkunde ist als
 * Artikelreihe angelegt, und jeder Artikel existiert in drei Sprachen. Ein
 * Handbild pro Artikel wären drei Dateien pro Beitrag, die jemand vergessen
 * kann — exakt der Fehler, der /wetterkunde/boeenfront eine tote og:image-URL
 * beschert hat. So bekommt jeder neue Artikel automatisch ein Bild, sobald die
 * Markdown-Datei liegt. Wer trotzdem ein eigenes Motiv will, legt es in
 * public/og/ ab und trägt es als `og_bild` ein (siehe lib/og.ts).
 *
 * `force-static` + `generateStaticParams`: die Bilder entstehen beim Build und
 * liegen danach als statische Dateien am CDN — kein Rendern zur Laufzeit, wenn
 * Facebook den Artikel scraped.
 */
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getAllSlugs(locale as WkLocale).map((slug) => ({ locale, slug })),
  );
}

// Markenfarben aus dem Design-System (MASTER §2): Slate als Fläche, Sky als Akzent.
const SLATE_900 = "#0F172A";
const SLATE_800 = "#1E293B";
const SLATE_300 = "#CBD5E1";
const SLATE_400 = "#94A3B8";
const SKY_400 = "#38BDF8";
const WHITE = "#FFFFFF";

const EYEBROW: Record<string, string> = {
  de: "WETTERKUNDE",
  fr: "MÉTÉOROLOGIE",
  it: "METEOROLOGIA",
};

/**
 * Satori kennt kein `line-clamp`. Lange Titel würden aus dem Bild laufen, also
 * wird die Schriftgrösse an der Titellänge ausgerichtet und notfalls hart
 * gekürzt. Die Stufen sind an den bestehenden Titeln (70–95 Zeichen) gemessen.
 */
function titleFontSize(length: number): number {
  if (length <= 55) return 64;
  if (length <= 80) return 56;
  if (length <= 110) return 48;
  return 42;
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

  const title = clamp(article.titel);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: SLATE_900,
          backgroundImage: `linear-gradient(135deg, ${SLATE_900} 0%, ${SLATE_800} 55%, #0C4A6E 100%)`,
        }}
      >
        {/* Kopf: Eyebrow + Wortmarke */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontSize: 24,
              letterSpacing: 4,
              color: SKY_400,
              fontWeight: 700,
            }}
          >
            <div
              style={{
                width: 44,
                height: 4,
                backgroundColor: SKY_400,
                display: "flex",
              }}
            />
            {EYEBROW[locale] ?? EYEBROW.de}
          </div>
          <div style={{ fontSize: 30, fontWeight: 700, color: WHITE }}>
            Wingcast
          </div>
        </div>

        {/* Titel */}
        <div
          style={{
            display: "flex",
            fontSize: titleFontSize(title.length),
            lineHeight: 1.15,
            fontWeight: 700,
            color: WHITE,
            letterSpacing: -1,
          }}
        >
          {title}
        </div>

        {/* Fuss: Autor, Stand, Domain */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `2px solid ${SLATE_800}`,
            paddingTop: 28,
            fontSize: 24,
            color: SLATE_400,
          }}
        >
          <div style={{ display: "flex", color: SLATE_300 }}>{article.autor}</div>
          <div style={{ display: "flex", gap: 24 }}>
            <div style={{ display: "flex" }}>{article.stand}</div>
            <div style={{ display: "flex", color: SKY_400 }}>wingcast.ch</div>
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
