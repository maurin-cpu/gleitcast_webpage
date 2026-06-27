import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Navbar } from "@/components/Navbar";
import { FloatingAppCTA } from "@/components/FloatingAppCTA";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Trust } from "@/components/sections/Trust";
import { SubscribeForm } from "@/components/sections/SubscribeForm";
import { FAQ } from "@/components/sections/FAQ";
import { BetaFeedback } from "@/components/sections/BetaFeedback";
import { Footer } from "@/components/sections/Footer";
import {
  softwareApplicationSchema,
  faqPageSchema,
  personSchema,
  webPageSchema,
  jsonLdScript,
} from "@/lib/schema";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    alternates: {
      canonical: locale === "de" ? "/" : `/${locale}`,
      languages: {
        "de-CH": "/",
        "fr-CH": "/fr",
        "it-CH": "/it",
        "x-default": "/",
      },
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Faq" });
  const faqItems = t.raw("items") as Array<{ q: string; a: string }>;

  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Problem />
        <HowItWorks />
        <Trust />
        <SubscribeForm />
        <FAQ />
        <BetaFeedback />
      </main>
      <Footer />
      <FloatingAppCTA />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(softwareApplicationSchema(locale))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(faqPageSchema(locale, faqItems))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(personSchema(locale))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(webPageSchema(locale))}
      />
    </>
  );
}
