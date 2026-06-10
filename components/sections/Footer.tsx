import { Logo } from "../ui/Logo";
import { ArrowUpRight } from "../ui/Icons";
import { CookieSettingsLink } from "../consent/CookieSettingsLink";
import { PAGE_LAST_UPDATED } from "@/lib/schema";

const LAST_UPDATED_LABEL = new Date(PAGE_LAST_UPDATED).toLocaleDateString(
  "de-CH",
  { day: "numeric", month: "long", year: "numeric" },
);

const APP_URL = "https://app.wingcast.ch";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="text-white">
              <Logo />
            </div>
            <p className="mt-4 max-w-sm text-base leading-[1.6] text-white/85">
              KI-Flugwetter-Cast für Schweizer Gleitschirmpiloten — damit
              du schneller weisst, wo's diese Woche geht.
            </p>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener"
              className="focus-ring mt-6 inline-flex h-11 items-center gap-2 rounded-lg border-2 border-white/30 px-4 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Zur Live-App
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <FooterCol
            title="Produkt"
            links={[
              { label: "So funktioniert's", href: "#solution" },
              { label: "Cast-Vorschau", href: "#preview" },
              { label: "Beta-Feedback", href: "#feedback" },
              { label: "FAQ", href: "#faq" },
            ]}
          />

          <FooterCol
            title="App"
            links={[
              { label: "Live-Dashboard", href: APP_URL, external: true },
              { label: "Cast", href: `${APP_URL}/briefing`, external: true },
              { label: "Spots-Karte", href: `${APP_URL}/map`, external: true },
              { label: "Chat", href: APP_URL, external: true },
            ]}
          />

          <FooterCol
            title="Rechtliches"
            links={[
              { label: "Impressum", href: "/impressum" },
              { label: "Nutzungsbedingungen", href: "/nutzungsbedingungen" },
              { label: "Datenschutz", href: "/datenschutz" },
              { label: "Kontakt", href: "mailto:hi@wingcast.ch" },
              {
                label: "Beta-Feedback",
                href: "mailto:info@wingcast.ch?subject=Wingcast%20Beta%20%E2%80%94%20Feedback",
              },
            ]}
            extra={<CookieSettingsLink />}
          />
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/15 pt-6 text-sm text-white/85 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Wingcast · Made in Switzerland ·{" "}
            <time
              dateTime={PAGE_LAST_UPDATED}
              className="text-white/70"
            >
              Stand {LAST_UPDATED_LABEL}
            </time>
          </p>
          <p>
            Wetterdaten via{" "}
            <a
              href="https://open-meteo.com"
              target="_blank"
              rel="noopener"
              className="underline-offset-2 hover:underline"
            >
              Open-Meteo
            </a>{" "}
            · ICON-CH1 (1 km) und ICON-CH2 (2 km) von{" "}
            <a
              href="https://www.meteoschweiz.admin.ch"
              target="_blank"
              rel="noopener"
              className="underline-offset-2 hover:underline"
            >
              MeteoSchweiz
            </a>
            , ICON-D2, ICON-EU,{" "}
            <a
              href="https://www.nco.ncep.noaa.gov/pmb/products/gfs/"
              target="_blank"
              rel="noopener"
              className="underline-offset-2 hover:underline"
            >
              GFS
            </a>
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
  links: { label: string; href: string; external?: boolean }[];
  extra?: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-white/85">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5 text-base">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              {...(l.external && { target: "_blank", rel: "noopener" })}
              className="focus-ring inline-flex items-center gap-1.5 rounded text-white/80 transition-colors hover:text-white"
            >
              {l.label}
              {l.external && <ArrowUpRight className="h-3.5 w-3.5" />}
            </a>
          </li>
        ))}
        {extra && <li>{extra}</li>}
      </ul>
    </div>
  );
}
