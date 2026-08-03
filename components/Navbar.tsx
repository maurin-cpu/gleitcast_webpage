import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LinkButton } from "./ui/Button";
import { Logo } from "./ui/Logo";
import { LocaleSwitcher } from "./ui/LocaleSwitcher";
import { ArrowUpRight } from "./ui/Icons";

const APP_URL = "https://app.wingcast.ch";

export function Navbar() {
  const t = useTranslations("Navbar");

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Volle Pfade statt reiner #-Anker: die Navbar steht auch auf
            /wetterkunde-Seiten — dort liefen nackte Anker ins Leere. */}
        <Link
          href="/#hero"
          className="focus-ring -ml-1 rounded-md px-1 py-1"
          aria-label={t("ariaHome")}
        >
          <Logo />
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label={t("ariaNav")}
        >
          <Link
            href="/#solution"
            className="focus-ring rounded-md px-4 py-2 text-base font-medium text-slate-700 transition-colors hover:text-sky-700"
          >
            {t("howItWorks")}
          </Link>
          <Link
            href="/#preview"
            className="focus-ring rounded-md px-4 py-2 text-base font-medium text-slate-700 transition-colors hover:text-sky-700"
          >
            {t("cast")}
          </Link>
          <Link
            href="/#faq"
            className="focus-ring rounded-md px-4 py-2 text-base font-medium text-slate-700 transition-colors hover:text-sky-700"
          >
            {t("faq")}
          </Link>
          <Link
            href="/wetterkunde"
            className="focus-ring rounded-md px-4 py-2 text-base font-medium text-slate-700 transition-colors hover:text-sky-700"
          >
            {t("wetterkunde")}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <LocaleSwitcher />
          <LinkButton href={APP_URL} target="_blank" rel="noopener" size="sm">
            {t("toApp")}
            <ArrowUpRight className="h-4 w-4" />
          </LinkButton>
        </div>
      </div>
    </header>
  );
}
