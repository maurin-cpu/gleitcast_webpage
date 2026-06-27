import Image from "next/image";
import { useTranslations } from "next-intl";
import { LinkButton } from "../ui/Button";
import { ArrowRight, ArrowUpRight, Layers, MapPin, Sparkles } from "../ui/Icons";

const APP_URL = "https://app.wingcast.ch";

const bold = {
  b: (chunks: React.ReactNode) => (
    <strong className="font-semibold text-slate-900">{chunks}</strong>
  ),
};

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden border-b border-slate-200 bg-sky-50"
      aria-labelledby="hero-headline"
    >
      {/* Ambient gradient orbs — Light-First, sehr subtil */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -left-32 -top-32 h-[520px] w-[520px] rounded-full opacity-70"
          style={{
            background:
              "radial-gradient(circle, rgba(125,211,252,0.55) 0%, rgba(125,211,252,0) 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute -right-40 top-16 h-[480px] w-[480px] rounded-full opacity-70"
          style={{
            background:
              "radial-gradient(circle, rgba(186,230,253,0.65) 0%, rgba(186,230,253,0) 70%)",
            filter: "blur(90px)",
          }}
        />
        <div
          className="absolute bottom-[-20%] left-1/4 h-[520px] w-[680px] rounded-full opacity-50"
          style={{
            background:
              "radial-gradient(circle, rgba(2,132,199,0.18) 0%, rgba(2,132,199,0) 70%)",
            filter: "blur(120px)",
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-content px-4 pb-20 pt-10 sm:px-6 sm:pb-24 sm:pt-14 lg:px-8 lg:pb-28 lg:pt-16 xl:max-w-[1280px] 2xl:max-w-[1440px]">
        {/* Text-Block — kompakt, damit der Screenshot bald ins Bild kommt.
            max-w bleibt klein (Lesbarkeit ~65 Zeichen), aber Container scaled. */}
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="hero-in mb-5 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/80 px-3 py-1 text-sm font-medium text-sky-700 backdrop-blur-sm"
            style={{ ["--hero-delay" as string]: "0ms" }}
          >
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            {t("badge")}
          </div>

          <h1
            id="hero-headline"
            className="hero-in text-balance text-[clamp(2.25rem,4.5vw+0.5rem,4rem)] font-extrabold leading-[1.05] tracking-[-0.025em] text-slate-900"
            style={{ ["--hero-delay" as string]: "120ms" }}
          >
            {t("headlineLine1")}
            <br />
            <span className="text-sky-700">{t("headlineLine2")}</span>
          </h1>

          <p
            className="hero-in mx-auto mt-4 max-w-reading text-pretty text-[clamp(1rem,0.8vw+0.7rem,1.25rem)] leading-[1.6] text-slate-700 sm:mt-5"
            style={{ ["--hero-delay" as string]: "240ms" }}
          >
            {t("subline")}
          </p>

          <div
            className="hero-in mt-6 flex flex-col items-center justify-center gap-2 sm:mt-7 sm:flex-row sm:gap-4"
            style={{ ["--hero-delay" as string]: "360ms" }}
          >
            <LinkButton
              href={APP_URL}
              target="_blank"
              rel="noopener"
              variant="primary"
              size="lg"
            >
              {t("ctaPrimary")}
              <ArrowUpRight className="h-4 w-4" />
            </LinkButton>
            <a
              href="#preview"
              className="focus-ring inline-flex h-12 items-center gap-1.5 rounded-lg px-3 text-base font-semibold text-sky-700 transition-colors hover:text-sky-700/75"
            >
              {t("ctaSecondary")}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Schlanke Trust-Reihe — Physik + KI, keine Magie */}
          <ul
            className="hero-in mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-slate-700 sm:mt-6 sm:gap-x-6"
            style={{ ["--hero-delay" as string]: "480ms" }}
          >
            <li className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-sky-700" aria-hidden="true" />
              <span>{t.rich("trustSpots", bold)}</span>
            </li>
            <li className="inline-flex items-center gap-1.5">
              <Layers className="h-4 w-4 text-sky-700" aria-hidden="true" />
              <span>{t.rich("trustModels", bold)}</span>
            </li>
            <li className="inline-flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-sky-700" aria-hidden="true" />
              <span>{t.rich("trustAi", bold)}</span>
            </li>
          </ul>
        </div>

        {/* Screenshot — gross und prominent, fliesst direkt in die Headline.
            Skaliert auf breiten Screens mit (5xl→6xl→7xl). */}
        <figure
          className="hero-in relative mx-auto mt-10 max-w-5xl sm:mt-12 xl:max-w-6xl 2xl:max-w-7xl"
          style={{ ["--hero-delay" as string]: "600ms" }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(2,132,199,0.18) 0%, rgba(2,132,199,0) 65%)",
              filter: "blur(30px)",
            }}
          />
          <div className="overflow-hidden rounded-card border border-slate-200 bg-white shadow-[0_20px_60px_-20px_rgba(2,132,199,0.25)]">
            <Image
              src="/screenshot_app_dashboard.png"
              alt={t("screenshotAlt")}
              width={2400}
              height={1400}
              priority
              sizes="(min-width: 1536px) 80rem, (min-width: 1280px) 72rem, (min-width: 1024px) 64rem, (min-width: 640px) 90vw, 100vw"
              className="block h-auto w-full"
            />
          </div>
          <figcaption className="mt-4 text-center text-sm text-slate-600 sm:mt-5">
            {t("figcaption")}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
