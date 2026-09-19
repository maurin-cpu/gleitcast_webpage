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
  const url = localeUrl(locale, "/datenschutz");
  return {
    title: t("privacyTitle"),
    alternates: { canonical: url },
    // Ohne eigenen twitter-Block stünde hier der Titel der Startseite.
    ...socialMetadata({
      locale,
      title: t("privacyTitle"),
      description: tMeta("description"),
      url,
      image: siteOgImage(tMeta("ogImageAlt")),
    }),
  };
}

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.wingcast.ch";

export default async function DatenschutzPage({
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
            Datenschutzerklärung
          </h1>
          <p className="mt-4 text-sm text-slate-500">
            Stand: {new Date().toLocaleDateString("de-CH", { year: "numeric", month: "long" })}
          </p>
          <LegalNotice locale={locale} />

          <div className="mt-12 space-y-12 text-base leading-[1.7] text-slate-700">

            <Section title="1. Verantwortliche Stelle">
              <p>
                Maurin Vögeli<br />
                Naphtastrasse 6<br />
                Schweiz<br />
                E-Mail: <a className="text-sky-700 underline" href="mailto:info@wingcast.ch">info@wingcast.ch</a>
              </p>
              <p className="mt-3">
                Diese Erklärung beschreibt, welche Daten beim Besuch dieser Webseite
                (<strong>wingcast.ch</strong>) und bei Nutzung der Wingcast-App
                (<strong>app.wingcast.ch</strong>) verarbeitet werden, zu welchem
                Zweck und auf welcher Rechtsgrundlage. Sie richtet sich nach dem
                revidierten Schweizer Datenschutzgesetz (revDSG, in Kraft seit
                01.09.2023).
              </p>
            </Section>

            <Section title="2. Welche Daten wir verarbeiten">
              <p>Wir erheben nur das, was für den Betrieb des Briefings nötig ist:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong>E-Mail-Adresse</strong> &mdash; zum Versand des Briefings
                  und zur Identifikation deines Accounts.
                </li>
                <li>
                  <strong>Präferenzen</strong> &mdash; gewählte Regionen,
                  Versandtage, Qualitäts-Tier-Filter, Mindest-Rating, Skill-Level.
                </li>
                <li>
                  <strong>IP-Adresse + Zeitstempel</strong> bei Login-Anfragen,
                  ausschliesslich zur Missbrauchsverhinderung (Rate-Limiting).
                  Keine Profilbildung.
                </li>
                <li>
                  <strong>Chat-Eingaben</strong> &mdash; sofern du den Chat-Berater
                  in der App nutzt. Werden zur Beantwortung an Anthropic (siehe
                  Punkt 4) übermittelt.
                </li>
                <li>
                  <strong>Feedback-Beiträge</strong> &mdash; sofern du das
                  Feedback-Formular ausfüllst (rein freiwillig).
                </li>
                <li>
                  <strong>Nutzungsdaten der App</strong> &mdash; aufgerufene Seiten,
                  Klicks, Browser- und Gerätetyp sowie der aus der IP-Adresse
                  abgeleitete ungefähre Ort. Bist du eingeloggt, sind sie mit
                  deiner E-Mail-Adresse verknüpft. Details siehe Punkt 8.
                </li>
              </ul>
              <p className="mt-3">
                Wir verlangen <strong>keine Adresse, keinen Vor- oder Nachnamen,
                keine Zahlungsdaten</strong>. Die Nutzung ist kostenlos.
              </p>
            </Section>

            <Section title="3. Zweck der Verarbeitung">
              <ul className="list-disc space-y-2 pl-6">
                <li>Versand des wöchentlichen Flugwetter-Briefings an deine gewählten Wochentage</li>
                <li>Verwaltung deines Accounts (Login, Einstellungen, Pause, Abmeldung)</li>
                <li>Personalisierung des Briefings (deine Regionen, dein Skill-Level)</li>
                <li>Sicherheit: Schutz vor automatisierten Login-Versuchen</li>
                <li>Verbesserung des Produkts (auf Basis von freiwilligem Feedback)</li>
                <li>Verstehen, welche Funktionen der App genutzt werden (Nutzungsmessung)</li>
              </ul>
              <p className="mt-3">
                <strong>Wir senden keine Werbung.</strong> Du erhältst ausschliesslich
                das Briefing, das du bestellt hast, sowie technische Mails (Login-Link,
                Bestätigungen). Kein Verkauf, keine Weitergabe an Werbetreibende.
              </p>
            </Section>

            <Section title="4. Drittparteien (Auftragsverarbeiter)">
              <p>
                Für den Betrieb nutzen wir folgende Dienstleister. Sie verarbeiten
                Daten in unserem Auftrag:
              </p>
              <ul className="mt-3 list-disc space-y-3 pl-6">
                <li>
                  <strong>Hetzner Online GmbH</strong> (Deutschland) &mdash;
                  Server-Hosting der App und Datenbank. EU-Standort, DSGVO-konform.
                </li>
                <li>
                  <strong>Infomaniak Network SA</strong> (Schweiz) &mdash;
                  E-Mail-Versand (SMTP) für Briefing- und Login-Mails. Schweizer
                  Anbieter, gleichwertiges Datenschutzniveau.
                </li>
                <li>
                  <strong>Open-Meteo</strong> (Deutschland) und{" "}
                  <strong>MeteoSchweiz</strong> (Schweiz) &mdash; öffentliche
                  Wetterdaten-Quellen. Wir senden dorthin keine personenbezogenen
                  Daten, nur anonyme Geo-Koordinaten der Spots.
                </li>
                <li>
                  <strong>Anthropic, PBC</strong> (USA) &mdash; KI-Modell{" "}
                  <em>Claude</em> für den Chat-Berater. Wenn du den Chat nutzt,
                  werden deine Eingaben an Anthropic übermittelt und dort{" "}
                  verarbeitet.{" "}
                  <strong>Übermittlung in die USA (Drittstaat)</strong> auf Basis
                  der EU-Standardvertragsklauseln (Standard Contractual Clauses,
                  Module 2). Anthropic speichert die Daten gemäss eigener Policy
                  bis zu 30 Tage zur Missbrauchsprüfung und nutzt sie nicht für
                  Modell-Training.
                </li>
                <li>
                  <strong>PostHog</strong> (EU-Cloud, Frankfurt) &mdash; Statistik
                  und Reichweitenmessung der Webseite{" "}
                  <strong>nur mit deiner Einwilligung</strong> sowie
                  Nutzungsmessung der App ohne Cookie. Details, Widerruf und
                  Widerspruch siehe Punkt 8.
                </li>
                <li>
                  <strong>Meta Platforms Ireland Ltd.</strong> (Irland) /{" "}
                  <strong>Meta Platforms, Inc.</strong> (USA) &mdash; Meta Pixel
                  zur Messung unserer Facebook- und Instagram-Anzeigen auf der
                  Webseite <strong>nur mit deiner Einwilligung</strong>.{" "}
                  <strong>Übermittlung in die USA (Drittstaat)</strong> auf Basis
                  des EU-U.S. Data Privacy Framework bzw. der
                  EU-Standardvertragsklauseln. Details und Widerruf siehe Punkt 8.
                </li>
              </ul>
            </Section>

            <Section title="5. Rechtsgrundlage">
              <p>
                Die Verarbeitung beruht auf deiner Einwilligung (revDSG Art. 31
                Abs. 1) bzw. auf der Vertragserfüllung (Briefing-Versand auf
                deine Bestellung). Du kannst die Einwilligung jederzeit
                widerrufen, indem du dich vom Briefing abmeldest oder deinen
                Account löschst. Die Nutzungsmessung in der App stützt sich auf
                unser berechtigtes Interesse, Wingcast zu verbessern (revDSG
                Art. 31 Abs. 1; im EU-Raum Art. 6 Abs. 1 lit. f DSGVO) &mdash;
                Widerspruch siehe Punkt 8.
              </p>
            </Section>

            <Section title="6. Speicherdauer">
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Account-Daten: bis zur Löschung durch dich oder bis zwei Jahre
                  Inaktivität (kein Login, kein Briefing-Empfang)
                </li>
                <li>Login-Token: max. 30 Minuten oder bis zur Verwendung</li>
                <li>Login-IP-Logs: max. 24 Stunden (nur für Rate-Limiting)</li>
                <li>
                  Chat-Eingaben: nicht bei uns gespeichert; bei Anthropic gemäss
                  deren Policy (max. 30 Tage)
                </li>
              </ul>
            </Section>

            <Section title="7. Deine Rechte">
              <p>Nach revDSG hast du jederzeit Anspruch auf:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong>Auskunft</strong> über die zu dir gespeicherten Daten
                  (Art. 25). Du kannst sie als JSON direkt aus deinem Konto
                  exportieren oder uns per E-Mail anfragen.
                </li>
                <li><strong>Berichtigung</strong> falscher Daten (Art. 32)</li>
                <li>
                  <strong>Löschung</strong> aller deiner Daten (Art. 32). Geht
                  in deinem Konto mit einem Klick &mdash; oder per E-Mail an
                  uns.
                </li>
                <li>
                  <strong>Datenherausgabe</strong> in maschinenlesbarem Format
                  (Art. 28) &mdash; siehe JSON-Export.
                </li>
                <li>
                  <strong>Widerruf</strong> der Einwilligung jederzeit
                </li>
              </ul>
              <p className="mt-3">
                Anfragen richtest du an{" "}
                <a className="text-sky-700 underline" href="mailto:info@wingcast.ch">
                  info@wingcast.ch
                </a>
                . Antwortzeit max. 30 Tage.
              </p>
            </Section>

            <Section title="8. Cookies und Tracking">
              <p>
                <strong>Technisch notwendig:</strong> Die Wingcast-App setzt ein
                Session-Cookie zur Aufrechterhaltung deines Logins (HTTP-only,
                Secure, SameSite=Lax). Dieses ist für den Betrieb erforderlich und
                bedarf keiner Einwilligung. Die Marketing-Seite (wingcast.ch)
                selbst setzt ohne deine Zustimmung keine Cookies.
              </p>
              <p className="mt-3">
                <strong>Webseite &ndash; Statistik &amp; Analyse und Marketing (nur mit deiner Einwilligung):</strong>{" "}
                Zur Verbesserung der Seite und zur Messung unserer Werbung nutzen
                wir – erst nach deiner aktiven Zustimmung über den Cookie-Banner,
                je Kategorie einzeln wählbar – folgende Dienste:
              </p>
              <ul className="mt-3 list-disc space-y-3 pl-6">
                <li>
                  <strong>PostHog</strong> (PostHog Inc., über EU-Cloud in
                  Frankfurt) &mdash; anonymisierte Reichweiten- und Produkt-Analyse
                  (z. B. welche Abschnitte genutzt werden). Ohne deine Einwilligung
                  wird kein Analytics-Script geladen. Datenverarbeitung in der EU
                  &mdash; keine Übermittlung in die USA. Kategorie
                  „Statistik &amp; Analyse".
                </li>
                <li>
                  <strong>Meta Pixel</strong> (Meta Platforms Ireland Ltd.,
                  Irland; Meta Platforms, Inc., USA) &mdash; misst, ob Besucher
                  über unsere Facebook- oder Instagram-Anzeigen auf die Seite
                  kommen und welche Seiten sie aufrufen, damit wir die Wirkung der
                  Anzeigen beurteilen können. Der Pixel setzt das Cookie{" "}
                  <code>_fbp</code> (Laufzeit 90 Tage) und übermittelt an Meta
                  u. a. IP-Adresse, Browser-Informationen, besuchte URL und
                  Zeitpunkt. Bist du bei Facebook oder Instagram eingeloggt, kann
                  Meta den Besuch deinem Konto zuordnen. Meta verarbeitet diese
                  Daten auch für eigene Zwecke als eigenständiger
                  Verantwortlicher; Details in der{" "}
                  <a
                    className="text-sky-700 underline"
                    href="https://www.facebook.com/privacy/policy/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Datenschutzrichtlinie von Meta
                  </a>
                  . <strong>Übermittlung in die USA (Drittstaat)</strong> auf
                  Basis des EU-U.S. Data Privacy Framework bzw. der
                  EU-Standardvertragsklauseln. Ohne deine Einwilligung wird das
                  Pixel-Script nicht geladen. Kategorie „Marketing".
                  Neben dem Seitenaufruf übermitteln wir zwei Ereignisse: den
                  Klick auf einen Link zur App („Lead") und in der App
                  (app.wingcast.ch) den ersten erfolgreichen Login eines neuen
                  Kontos („CompleteRegistration"), jeweils ohne E-Mail-Adresse
                  oder andere Kontodaten. Deine Wahl geben wir dazu im Cookie{" "}
                  <code>wc_consent_marketing</code> (Laufzeit 180 Tage) an die
                  App weiter; die App lädt das Pixel nur, wenn dieses Cookie
                  deine Zustimmung enthält.
                </li>
              </ul>
              <p className="mt-3">
                Rechtsgrundlage ist deine <strong>Einwilligung</strong> (revDSG
                Art. 6 / Art. 31; im EU-Raum Art. 6 Abs. 1 lit. a DSGVO). Du kannst
                sie jederzeit ohne Nachteil verweigern oder später widerrufen
                &mdash; über den Link <strong>„Cookie-Einstellungen"</strong> im
                Footer. Bis zur Einwilligung wird auf der Webseite kein
                Tracking-Cookie gesetzt und kein Tracking-Dienst geladen.
              </p>
              <p className="mt-3">
                <strong>App &ndash; Nutzungsmessung (ohne Cookie):</strong>{" "}
                In der App (app.wingcast.ch) messen wir mit <strong>PostHog</strong>{" "}
                (EU-Cloud, Frankfurt), welche Seiten und Funktionen genutzt
                werden. Dazu legt PostHog eine zufällige Kennung im
                Sitzungsspeicher (sessionStorage) deines Browsers ab. Sie gilt
                nur für den geöffneten Tab und wird beim Schliessen gelöscht. Es
                wird <strong>kein Cookie</strong> gesetzt, du wirst bei einem
                späteren Besuch <strong>nicht wiedererkannt</strong>, und es gibt
                keine Bildschirmaufzeichnung. Bist du eingeloggt, verknüpfen wir
                die Nutzung mit deiner E-Mail-Adresse, damit wir sehen, wie das
                Briefing genutzt wird. Keine Übermittlung in die USA, keine
                Weitergabe an Werbetreibende.
              </p>
              <p className="mt-3">
                Rechtsgrundlage ist unser <strong>berechtigtes Interesse</strong>{" "}
                an der Verbesserung von Wingcast (revDSG Art. 31 Abs. 1; im
                EU-Raum Art. 6 Abs. 1 lit. f DSGVO). Du kannst jederzeit{" "}
                <strong>widersprechen</strong>: per E-Mail an{" "}
                <a className="text-sky-700 underline" href="mailto:info@wingcast.ch">
                  info@wingcast.ch
                </a>{" "}
                &mdash; wir löschen dann die mit deinem Account verknüpften
                Nutzungsdaten &mdash; oder indem du einen Tracker-Blocker in
                deinem Browser verwendest.
              </p>
            </Section>

            <Section title="9. Automatisierte Entscheidungen">
              <p>
                Die Tier-Klassifikation (Legendär/Fliegbar/Bedingt/Bronze) der
                Spots basiert auf deterministischen meteorologischen Modellen,
                nicht auf personenbezogenen Daten. Es findet keine automatisierte
                Entscheidung mit rechtlicher Wirkung statt (revDSG Art. 21).
              </p>
            </Section>

            <Section title="10. Sicherheit">
              <p>
                Die Verbindung zur App und zur Webseite ist TLS-verschlüsselt.
                E-Mails werden über Infomaniak versendet (TLS, SPF, DKIM).
                Passwortlos: wir speichern keine Passwörter, sondern nutzen
                One-Time-Login-Links per E-Mail (gültig 30 Min).
              </p>
            </Section>

            <Section title="11. Änderungen dieser Erklärung">
              <p>
                Wir können diese Erklärung anpassen, wenn sich die Verarbeitung
                ändert. Wesentliche Änderungen kündigen wir per E-Mail an. Die
                jeweils aktuelle Fassung findest du immer unter{" "}
                <a className="text-sky-700 underline" href="/datenschutz">
                  wingcast.ch/datenschutz
                </a>
                .
              </p>
            </Section>

            <Section title="12. Kontakt">
              <p>
                Bei Fragen oder Anliegen zum Datenschutz:<br />
                <a className="text-sky-700 underline" href="mailto:info@wingcast.ch">
                  info@wingcast.ch
                </a>
              </p>
              <p className="mt-3 text-sm text-slate-500">
                Aufsichtsbehörde: Eidgenössischer Datenschutz- und
                Öffentlichkeitsbeauftragter (EDÖB), Feldeggweg 1, 3003 Bern.
              </p>
            </Section>

            <p className="border-t border-slate-200 pt-6 text-sm text-slate-500">
              Direkter Link zur App: <a className="text-sky-700 underline" href={APP_URL}>{APP_URL}</a>
            </p>

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
