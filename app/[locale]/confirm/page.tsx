import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Check, ArrowUpRight } from "@/components/ui/Icons";
import { routing } from "@/i18n/routing";

const APP_URL = "https://app.wingcast.ch";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Confirm" });
  return {
    title: t("metaTitle"),
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    },
  };
}

export default async function ConfirmPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Confirm" });

  return (
    <>
      <Navbar />
      <main className="bg-sky-50">
        <div className="mx-auto flex max-w-reading flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg border-2 border-flyGreen/40 bg-flyGreen/10 text-flyGreen">
            <Check className="h-8 w-8" strokeWidth={2.5} />
          </div>
          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl">
            {t("headline")}
          </h1>
          <p className="mt-4 max-w-md text-pretty text-lg leading-[1.6] text-slate-700">
            {t("body")}
          </p>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener"
            className="focus-ring mt-8 inline-flex h-14 items-center gap-2 rounded-lg bg-slate-900 px-8 text-base font-semibold text-white transition-colors hover:bg-slate-900/90"
          >
            {t("cta")}
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
