import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { LegalNotice } from "@/components/LegalNotice";
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
  const t = await getTranslations({ locale, namespace: "Legal" });
  return { title: t("termsTitle") };
}

export default async function NutzungsbedingungenPage({
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
            Nutzungsbedingungen
          </h1>
          <p className="mt-4 text-sm text-slate-500">
            Stand: {new Date().toLocaleDateString("de-CH", { year: "numeric", month: "long" })}
          </p>
          <LegalNotice locale={locale} />

          <div className="mt-12 space-y-12 text-base leading-[1.7] text-slate-700">

            <Section title="1. Geltungsbereich">
              <p>
                Diese Nutzungsbedingungen regeln die Nutzung der Webseite{" "}
                <strong>wingcast.ch</strong> sowie der Wingcast-App unter{" "}
                <strong>app.wingcast.ch</strong> (zusammen &laquo;Wingcast&raquo;).
                Mit der Nutzung erklärst du dich mit diesen Bedingungen einverstanden.
              </p>
            </Section>

            <Section title="2. Leistung und Beta-Status">
              <p>
                Wingcast stellt aufbereitete Wetterdaten und Flugempfehlungen für
                Schweizer Gleitschirm-Spots bereit. Die Daten werden aus mehreren
                Wettermodellen (ICON-CH1, ICON-D2, ICON-EU, GFS, ECMWF) und
                Stations-Messungen zusammengeführt und algorithmisch bewertet.
              </p>
              <p className="mt-3">
                Wingcast befindet sich in der <strong>Beta-Phase</strong> und wird
                laufend weiterentwickelt. Funktionen, Daten-Layout und Bewertungs&shy;logik
                können sich ändern. Die Nutzung ist während der Beta-Phase kostenlos.
              </p>
            </Section>

            <Section title="3. Keine Vorhersage-Garantie">
              <p>
                Die in Wingcast bereitgestellten Wetterdaten und Flugempfehlungen
                wurden sorgfältig aufbereitet und dienen ausschliesslich zur
                Information. Wingcast übernimmt <strong>keine Gewähr</strong> für
                Vollständigkeit, Aktualität oder Richtigkeit der Daten und
                Bewertungen.
              </p>
              <p className="mt-3">
                Sicherheitsbewertungen, Tier-Klassifikationen und Empfehlungen
                ersetzen <strong>nicht</strong> die eigene meteorologische
                Beurteilung durch die Pilotin oder den Piloten. Die Entscheidung
                über Start, Flug und Landung liegt allein bei der Pilotin bzw. beim
                Piloten. Im Zweifelsfall: nicht fliegen.
              </p>
              <p className="mt-3">
                Die Nutzung erfolgt auf eigenes Risiko. Für Schäden, die aus
                Entscheidungen auf Basis dieser Briefings entstehen, wird keine
                Haftung übernommen.
              </p>
            </Section>

            <Section title="4. Pflichten der Nutzenden">
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Du nutzt Wingcast nur für eigene, nicht-kommerzielle
                  Flugplanungs-Zwecke.
                </li>
                <li>
                  Du gibst deinen Account nicht weiter und hältst Login-Links
                  vertraulich.
                </li>
                <li>
                  Du beurteilst die meteorologische Situation am Startplatz
                  immer selbst und folgst den Vorgaben des SHV sowie der lokalen
                  Flugschulen und Spot-Betreuer.
                </li>
              </ul>
            </Section>

            <Section title="5. Automatisierter Zugriff verboten">
              <p>
                Automatisierter Zugriff auf wingcast.ch oder app.wingcast.ch
                &mdash; insbesondere durch Scraper, Bots, Crawler (mit Ausnahme
                üblicher Suchmaschinen-Bots), Headless-Browser oder vergleichbare
                Tools &mdash; ist <strong>nicht erlaubt</strong>. Ebenfalls nicht
                erlaubt sind:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Systematische Speicherung, Vervielfältigung oder Weitergabe
                  unserer Wetter-Aufbereitungen, Tier-Klassifikationen oder
                  Empfehlungen
                </li>
                <li>
                  Reverse Engineering der Bewertungs-Algorithmen
                </li>
                <li>
                  Umgehung technischer Schutzmassnahmen (Rate-Limits, Auth)
                </li>
                <li>
                  Weiterverkauf oder kommerzielle Wiederverwendung der Daten
                </li>
              </ul>
              <p className="mt-3">
                Die zugrundeliegenden Wetter-Rohdaten stammen aus öffentlichen
                Quellen (Open-Meteo, MeteoSchweiz, NOAA) und unterliegen deren
                Lizenzen. Untersagt ist die Übernahme unserer{" "}
                <em>Aufbereitung</em>, nicht der Rohdaten selbst.
              </p>
            </Section>

            <Section title="6. Verfügbarkeit">
              <p>
                Wir bemühen uns um eine hohe Verfügbarkeit, garantieren diese aber
                nicht. Wartungsarbeiten, Datenquellen-Ausfälle oder höhere Gewalt
                können zu Unterbrüchen führen. Es besteht kein Anspruch auf
                ununterbrochene Verfügbarkeit oder dauerhafte Bereitstellung
                einzelner Funktionen.
              </p>
            </Section>

            <Section title="7. Geistiges Eigentum">
              <p>
                Inhalte, Texte, Logo, Layout und die algorithmische Aufbereitung
                der Wetterdaten auf wingcast.ch und app.wingcast.ch sind
                urheberrechtlich geschützt. Eine Nutzung ausserhalb der
                bestimmungs&shy;gemässen Verwendung im Browser bedarf der
                schriftlichen Zustimmung.
              </p>
            </Section>

            <Section title="8. Änderungen dieser Bedingungen">
              <p>
                Diese Bedingungen können angepasst werden, insbesondere wenn sich
                die Funktionalität von Wingcast ändert. Wesentliche Änderungen
                kündigen wir registrierten Nutzenden per E-Mail an. Die jeweils
                aktuelle Fassung findest du immer unter{" "}
                <a className="text-sky-700 underline" href="/nutzungsbedingungen">
                  wingcast.ch/nutzungsbedingungen
                </a>
                .
              </p>
            </Section>

            <Section title="9. Anwendbares Recht / Gerichtsstand">
              <p>
                Es gilt schweizerisches Recht. Gerichtsstand ist der Wohnsitz des
                Anbieters (sofern keine zwingenden Konsumentenschutz&shy;bestimmungen
                entgegenstehen). Anbieter-Angaben siehe{" "}
                <a className="text-sky-700 underline" href="/impressum">
                  Impressum
                </a>
                .
              </p>
            </Section>

            <Section title="10. Kontakt">
              <p>
                Fragen zu diesen Nutzungsbedingungen:{" "}
                <a className="text-sky-700 underline" href="mailto:info@wingcast.ch">
                  info@wingcast.ch
                </a>
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
