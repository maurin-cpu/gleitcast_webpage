import { useLocale, useTranslations } from "next-intl";
import { Logo } from "../ui/Logo";
import { ArrowUpRight } from "../ui/Icons";
import { CookieSettingsLink } from "../consent/CookieSettingsLink";
import { Link } from "@/i18n/navigation";
import { PAGE_LAST_UPDATED } from "@/lib/schema";

const APP_URL = "https://app.wingcast.ch";

// locale → BCP-47 für die Datumsformatierung des „Stand"-Labels.
const DATE_LOCALE: Record<string, string> = {
  de: "de-CH",
  fr: "fr-CH",
  it: "it-CH",
};

type FooterLink = {
  label: string;
  href: string;
  kind: "anchor" | "internal" | "external" | "mail";
};

export function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale();

  const lastUpdatedLabel = new Date(PAGE_LAST_UPDATED).toLocaleDateString(
    DATE_LOCALE[locale] ?? "de-CH",
    { day: "numeric", month: "long", year: "numeric" },
  );

  // Volle Pfade statt reiner #-Anker: der Footer steht auch auf
  // /wetterkunde-Seiten — dort liefen nackte Anker ins Leere.
  const productLinks: FooterLink[] = [
    { label: t("linkHowItWorks"), href: "/#solution", kind: "internal" },
    { label: t("linkCastPreview"), href: "/#preview", kind: "internal" },
    { label: t("linkBetaFeedback"), href: "/#feedback", kind: "internal" },
    { label: t("linkFaq"), href: "/#faq", kind: "internal" },
    { label: t("linkWetterkunde"), href: "/wetterkunde", kind: "internal" },
  ];

  const appLinks: FooterLink[] = [
    { label: t("linkLiveDashboard"), href: APP_URL, kind: "external" },
    { label: t("linkCast"), href: `${APP_URL}/briefing`, kind: "external" },
    { label: t("linkSpotsMap"), href: `${APP_URL}/map`, kind: "external" },
    { label: t("linkChat"), href: APP_URL, kind: "external" },
  ];

  const legalLinks: FooterLink[] = [
    { label: t("linkImpressum"), href: "/impressum", kind: "internal" },
    { label: t("linkTerms"), href: "/nutzungsbedingungen", kind: "internal" },
    { label: t("linkPrivacy"), href: "/datenschutz", kind: "internal" },
    { label: t("linkContact"), href: "mailto:hi@wingcast.ch", kind: "mail" },
    {
      label: t("linkBetaFeedback"),
      href: "mailto:info@wingcast.ch?subject=Wingcast%20Beta%20%E2%80%94%20Feedback",
      kind: "mail",
    },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="text-white">
              <Logo />
            </div>
            <p className="mt-4 max-w-sm text-base leading-[1.6] text-white/85">
              {t("tagline")}
            </p>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener"
              className="focus-ring mt-6 inline-flex h-11 items-center gap-2 rounded-lg border-2 border-white/30 px-4 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              {t("toApp")}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <FooterCol title={t("colProduct")} links={productLinks} />
          <FooterCol title={t("colApp")} links={appLinks} />
          <FooterCol
            title={t("colLegal")}
            links={legalLinks}
            extra={<CookieSettingsLink />}
          />
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/15 pt-6 text-sm text-white/85 sm:flex-row sm:items-center">
          <p>
            {t.rich("copyright", {
              year: new Date().getFullYear(),
              date: lastUpdatedLabel,
              time: (chunks) => (
                <time dateTime={PAGE_LAST_UPDATED} className="text-white/70">
                  {chunks}
                </time>
              ),
            })}
          </p>
          <p>
            {t.rich("weatherCredit", {
              ometeo: (chunks) => (
                <a
                  href="https://open-meteo.com"
                  target="_blank"
                  rel="noopener"
                  className="underline-offset-2 hover:underline"
                >
                  {chunks}
                </a>
              ),
              meteoswiss: (chunks) => (
                <a
                  href="https://www.meteoschweiz.admin.ch"
                  target="_blank"
                  rel="noopener"
                  className="underline-offset-2 hover:underline"
                >
                  {chunks}
                </a>
              ),
              gfs: (chunks) => (
                <a
                  href="https://www.nco.ncep.noaa.gov/pmb/products/gfs/"
                  target="_blank"
                  rel="noopener"
                  className="underline-offset-2 hover:underline"
                >
                  {chunks}
                </a>
              ),
            })}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
  extra,
}: {
  title: string;
  links: FooterLink[];
  extra?: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-white/85">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5 text-base">
        {links.map((l) => (
          <li key={`${l.label}-${l.href}`}>
            {l.kind === "internal" ? (
              <Link
                href={l.href}
                className="focus-ring inline-flex items-center gap-1.5 rounded text-white/80 transition-colors hover:text-white"
              >
                {l.label}
              </Link>
            ) : (
              <a
                href={l.href}
                {...(l.kind === "external" && {
                  target: "_blank",
                  rel: "noopener",
                })}
                className="focus-ring inline-flex items-center gap-1.5 rounded text-white/80 transition-colors hover:text-white"
              >
                {l.label}
                {l.kind === "external" && (
                  <ArrowUpRight className="h-3.5 w-3.5" />
                )}
              </a>
            )}
          </li>
        ))}
        {extra && <li>{extra}</li>}
      </ul>
    </div>
  );
}
