import { LinkButton } from "./ui/Button";
import { Logo } from "./ui/Logo";
import { ArrowUpRight } from "./ui/Icons";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.gleitcast.ch";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/55">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="#hero"
          className="rounded-md focus-ring -ml-1 px-1 py-1"
          aria-label="Gleitcast Startseite"
        >
          <Logo />
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Hauptnavigation">
          <a
            href="#problem"
            className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground focus-ring"
          >
            Warum
          </a>
          <a
            href="#preview"
            className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground focus-ring"
          >
            Briefing-Beispiel
          </a>
          <a
            href="#features"
            className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground focus-ring"
          >
            Features
          </a>
          <a
            href="#faq"
            className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground focus-ring"
          >
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#subscribe"
            className="hidden rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground focus-ring sm:inline-flex"
          >
            Abonnieren
          </a>
          <LinkButton
            href={APP_URL}
            target="_blank"
            rel="noopener"
            variant="primary"
            size="sm"
            className="group"
          >
            Zur App
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </LinkButton>
        </div>
      </div>
    </header>
  );
}
