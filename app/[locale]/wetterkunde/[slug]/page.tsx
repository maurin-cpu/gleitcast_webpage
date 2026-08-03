import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { routing } from "@/i18n/routing";
import { getAllSlugs, getArticle } from "@/lib/wetterkunde";
import {
  articleSchema,
  articleFaqSchema,
  breadcrumbSchema,
  jsonLdScript,
} from "@/lib/schema";

// DE-only, wie der Hub. Entwürfe bauen mit, sind aber noindex (s. unten) und
// stehen weder im Hub noch in der Sitemap.
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ locale: routing.defaultLocale, slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  const url = `https://wingcast.ch/wetterkunde/${slug}`;
  const isDraft = article.status === "draft";

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: url },
    // Entwürfe dürfen nicht in den Index — sie sind nur zur Vorschau erreichbar.
    ...(isDraft ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      type: "article",
      url,
      title: article.metaTitle,
      description: article.metaDescription,
      publishedTime: article.veroeffentlicht,
      modifiedTime: article.stand,
      authors: ["Maurin"],
      ...(article.ogBild
        ? { images: [{ url: `https://wingcast.ch${article.ogBild}` }] }
        : {}),
    },
  };
}

export default async function WetterkundeArtikel({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (locale !== routing.defaultLocale) notFound();
  setRequestLocale(locale);

  const article = getArticle(slug);
  if (!article) notFound();

  const t = await getTranslations({ locale, namespace: "Wetterkunde" });

  return (
    <>
      <Navbar />
      <main id="main" className="bg-slate-50">
        <article className="mx-auto max-w-reading px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <nav aria-label={t("breadcrumbLabel")} className="text-sm text-slate-500">
            <Link href="/wetterkunde" className="focus-ring hover:text-sky-700">
              {t("hubTitle")}
            </Link>
          </nav>

          {/* Entwurfs-Band neutral in slate: Sun-Amber ist laut MASTER §2.1 dem
              Rating-System vorbehalten und darf hier nicht auftauchen. */}
          {article.status === "draft" && (
            <p className="mt-6 rounded-card border border-slate-300 bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700">
              {t("draftNotice")}
            </p>
          )}

          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl">
            {article.titel}
          </h1>

          <p className="mt-6 flex flex-wrap gap-x-5 gap-y-1 border-b border-slate-200 pb-6 text-sm text-slate-500">
            <span>{article.autor}</span>
            <span>{t("stand", { stand: article.stand })}</span>
            <span>{t("lesezeit", { minuten: article.lesezeitMinuten })}</span>
          </p>

          <div
            className="prose-wingcast mt-10"
            dangerouslySetInnerHTML={{ __html: article.html }}
          />
        </article>
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          articleSchema({
            slug: article.slug,
            titel: article.titel,
            metaDescription: article.metaDescription,
            veroeffentlicht: article.veroeffentlicht,
            stand: article.stand,
            bild: article.ogBild,
          }),
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbSchema([
            { name: "Wingcast", path: "/" },
            { name: t("hubTitle"), path: "/wetterkunde" },
            { name: article.titel, path: `/wetterkunde/${article.slug}` },
          ]),
        )}
      />
      {article.faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(
            articleFaqSchema(article.slug, article.faq, article.stand),
          )}
        />
      )}
    </>
  );
}
