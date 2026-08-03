import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { routing } from "@/i18n/routing";
import { getPublishedArticles } from "@/lib/wetterkunde";
import { wetterkundeHubSchema, breadcrumbSchema, jsonLdScript } from "@/lib/schema";

// Der Hub ist DE-only. /fr/wetterkunde und /it/wetterkunde gibt es nicht,
// solange keine Übersetzung freigegeben ist — deshalb nur der de-Param.
export function generateStaticParams() {
  return [{ locale: routing.defaultLocale }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Wetterkunde" });
  return {
    title: t("hubMetaTitle"),
    description: t("hubMetaDescription"),
    alternates: { canonical: "https://wingcast.ch/wetterkunde" },
  };
}

export default async function WetterkundeHub({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== routing.defaultLocale) notFound();
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Wetterkunde" });
  const articles = getPublishedArticles();

  return (
    <>
      <Navbar />
      <main id="main" className="bg-slate-50">
        <div className="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-700">
            {t("eyebrow")}
          </p>
          <h1 className="mt-4 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl">
            {t("hubTitle")}
          </h1>
          <p className="mt-6 max-w-reading text-lg leading-[1.7] text-slate-700">
            {t("hubIntro")}
          </p>

          {articles.length === 0 ? (
            <p className="mt-16 max-w-reading rounded-card border border-dashed border-slate-300 bg-white px-6 py-8 text-base leading-[1.7] text-slate-500">
              {t("empty")}
            </p>
          ) : (
            <ul className="mt-14 grid gap-6 sm:grid-cols-2">
              {articles.map((a) => (
                <li key={a.slug}>
                  {/* Kein Hover-Schatten — MASTER §6.2: Tiefe über Border und
                      Flächenkontrast, Schatten nur für Modals/Dropdowns. */}
                  <Link
                    href={`/wetterkunde/${a.slug}`}
                    className="focus-ring group flex h-full flex-col rounded-card border border-slate-200 bg-white p-6 transition hover:border-sky-600"
                  >
                    <h2 className="text-balance text-xl font-bold leading-snug tracking-tight text-slate-900 group-hover:text-sky-700">
                      {a.titel}
                    </h2>
                    <p className="mt-3 line-clamp-4 text-base leading-[1.7] text-slate-600">
                      {a.teaser}
                    </p>
                    <p className="mt-5 text-sm text-slate-500">
                      {t("meta", { minuten: a.lesezeitMinuten, stand: a.stand })}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          wetterkundeHubSchema(t("hubMetaDescription"), t("hubTitle")),
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbSchema([
            { name: "Wingcast", path: "/" },
            { name: t("hubTitle"), path: "/wetterkunde" },
          ]),
        )}
      />
    </>
  );
}
