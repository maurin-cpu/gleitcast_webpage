import { Logo } from "../ui/Logo";
import { ArrowUpRight } from "../ui/Icons";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.gleitcast.ch";

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="text-background">
              <Logo />
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-background/60">
              KI-Flugwetter-Briefing für Schweizer Gleitschirmpiloten. Aus 5
              Apps wird eine E-Mail.
            </p>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener"
              className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full bg-background/10 px-4 py-2 text-sm font-medium text-background transition-all hover:bg-background hover:text-foreground"
            >
              Zur Live-App
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <FooterCol
            title="Produkt"
            links={[
              { label: "Briefing-Beispiel", href: "#preview" },
              { label: "Features", href: "#features" },
              { label: "Anmeldung", href: "#subscribe" },
              { label: "FAQ", href: "#faq" },
            ]}
          />

          <FooterCol
            title="App"
            links={[
              { label: "Live-Dashboard", href: APP_URL, external: true },
              { label: "Spots-Karte", href: `${APP_URL}/map`, external: true },
              { label: "Chat", href: APP_URL, external: true },
            ]}
          />

          <FooterCol
            title="Rechtliches"
            links={[
              { label: "Impressum", href: "/impressum" },
              { label: "Datenschutz", href: "/datenschutz" },
              { label: "Kontakt", href: "mailto:hi@gleitcast.ch" },
            ]}
          />
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-background/10 pt-6 text-xs text-background/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Gleitcast · Made in Switzerland.</p>
          <p>
            Wetterdaten: MeteoSchweiz · ICON-CH1 · ECMWF · Open-Meteo
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-background/50">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              {...(l.external && { target: "_blank", rel: "noopener" })}
              className="focus-ring inline-flex items-center gap-1.5 rounded text-background/70 transition-colors hover:text-background"
            >
              {l.label}
              {l.external && <ArrowUpRight className="h-3 w-3" />}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
