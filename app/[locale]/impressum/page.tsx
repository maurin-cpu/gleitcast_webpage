import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { LegalNotice } from "@/components/LegalNotice";
import { routing } from "@/i18n/routing";
import { localeUrl, socialMetadata } from "@/lib/seo";
import { siteOgImage } from "@/lib/og";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Legal" });
  const tMeta = await getTranslations({ locale, namespace: "Metadata" });
  const url = localeUrl(locale, "/impressum");
  return {
    title: t("impressumTitle"),
    alternates: { canonical: url },
    // Ohne eigenen twitter-Block stünde hier der Titel der Startseite.
    ...socialMetadata({
      locale,
      title: t("impressumTitle"),
      description: tMeta("description"),
      url,
      image: siteOgImage(tMeta("ogImageAlt")),
    }),
  };
}

export default async function ImpressumPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <Navbar />
      <main className="bg-slate-50">
        <div className="mx-auto max-w-reading px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl">
            Impressum
          </h1>
          <LegalNotice locale={locale} />

          <div className="mt-12 space-y-12 text-base leading-[1.7] text-slate-700">

            <Section title="Anbieter">
              <p>
                <strong>Wingcast</strong><br />
                Maurin Vögeli<br />
                Naphtastrasse 6<br />
                Schweiz
              </p>
              <p className="mt-3">
                E-Mail:{" "}
                <a className="text-sky-700 underline" href="mailto:info@wingcast.ch">
                  info@wingcast.ch
                </a>
              </p>
            </Section>

            <Section title="Verantwortlich für den Inhalt">
              <p>Maurin Vögeli (Anschrift wie oben)</p>
            </Section>

            <Section title="Rechtsform">
              <p>
                Wingcast wird als nicht-eingetragenes Einzelunternehmen
                (Privatperson) betrieben. Eintragung im Handelsregister: keine.
                MwSt-Nr.: keine (unter der Mehrwertsteuergrenze gemäss MWSTG
                Art. 10).
              </p>
            </Section>

            <Section title="Haftungsausschluss">
              <p>
                Wingcast ist <strong>Decision Support</strong>, keine garantierte
                Vorhersage. Die finale Entscheidung &mdash; ob und wann geflogen
                wird &mdash; trifft immer der Pilot oder die Pilotin selbst. Im
                Zweifelsfall: nicht fliegen.
              </p>
              <p className="mt-3">
                Trotz sorgfältiger Auswertung aktueller Wettermodelle (ICON-CH1,
                ICON-D2, ICON-EU, GFS via Open-Meteo) und Stations-Messungen
                (winds.mobi) übernehmen wir keine Haftung für Schäden, die aus
                Entscheidungen auf Basis dieser Briefings entstehen. Die Nutzung
                erfolgt auf eigenes Risiko.
              </p>
            </Section>

            <Section title="Urheberrecht">
              <p>
                Inhalte und Texte auf wingcast.ch und app.wingcast.ch sind
                urheberrechtlich geschützt. Wetterdaten stammen von den jeweiligen
                Anbietern (MeteoSchweiz, ECMWF, Open-Meteo, NOAA/GFS) und
                unterliegen deren Lizenzbedingungen.
              </p>
            </Section>

            <Section title="Externe Links">
              <p>
                Verlinkte externe Webseiten (z.B. winds.mobi, Datenquellen) sind
                wir keine Inhalte und übernehmen keine Verantwortung für deren
                Inhalt. Bei Bekanntwerden von Rechtsverstössen werden wir solche
                Links umgehend entfernen.
              </p>
            </Section>

            <Section title="Datenschutz">
              <p>
                Informationen zur Datenverarbeitung findest du in der{" "}
                <a className="text-sky-700 underline" href="/datenschutz">
                  Datenschutzerklärung
                </a>
                .
              </p>
            </Section>

            <Section title="Anwendbares Recht / Gerichtsstand">
              <p>
                Es gilt schweizerisches Recht. Gerichtsstand ist der Wohnsitz
                des Anbieters (sofern keine zwingenden Konsumentenschutzbestimmungen
                entgegenstehen).
              </p>
            </Section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
