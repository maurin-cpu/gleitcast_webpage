import { LinkButton } from "./ui/Button";
import { Logo } from "./ui/Logo";
import { ArrowUpRight } from "./ui/Icons";

const APP_URL = "https://app.gleitcast.ch";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="#hero"
          className="focus-ring -ml-1 rounded-md px-1 py-1"
          aria-label="Gleitcast Startseite"
        >
          <Logo />
        </a>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Hauptnavigation"
        >
          <a
            href="#preview"
            className="focus-ring rounded-md px-4 py-2 text-base font-medium text-slate-700 transition-colors hover:text-sky-700"
          >
            Briefing
          </a>
          <a
            href="#features"
            className="focus-ring rounded-md px-4 py-2 text-base font-medium text-slate-700 transition-colors hover:text-sky-700"
          >
            Features
          </a>
          <a
            href="#solution"
            className="focus-ring rounded-md px-4 py-2 text-base font-medium text-slate-700 transition-colors hover:text-sky-700"
          >
            So funktioniert's
          </a>
          <a
            href="#faq"
            className="focus-ring rounded-md px-4 py-2 text-base font-medium text-slate-700 transition-colors hover:text-sky-700"
          >
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <LinkButton href={APP_URL} target="_blank" rel="noopener" size="sm">
            Zur App
            <ArrowUpRight className="h-4 w-4" />
          </LinkButton>
        </div>
      </div>
    </header>
  );
}
