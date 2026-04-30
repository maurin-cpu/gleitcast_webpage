"use client";

import { useState } from "react";
import { BRIEFING_EXAMPLE, type Rating } from "@/lib/briefing-example";
import { ArrowUpRight, Star, ExternalLink } from "../ui/Icons";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.gleitcast.ch";

const ratingMap: Record<
  Rating,
  { dot: string; bg: string; text: string; ring: string; border: string }
> = {
  violet: {
    dot: "bg-flyViolet",
    bg: "bg-flyViolet/10",
    text: "text-flyViolet",
    ring: "ring-flyViolet/40",
    border: "border-flyViolet/30",
  },
  green: {
    dot: "bg-flyGreen",
    bg: "bg-flyGreen/10",
    text: "text-flyGreen",
    ring: "ring-flyGreen/40",
    border: "border-flyGreen/30",
  },
  amber: {
    dot: "bg-flyAmber",
    bg: "bg-flyAmber/10",
    text: "text-flyAmber",
    ring: "ring-flyAmber/40",
    border: "border-flyAmber/30",
  },
  bronze: {
    dot: "bg-flyBronze",
    bg: "bg-flyBronze/10",
    text: "text-flyBronze",
    ring: "ring-flyBronze/40",
    border: "border-flyBronze/30",
  },
  red: {
    dot: "bg-flyRed",
    bg: "bg-flyRed/10",
    text: "text-flyRed",
    ring: "ring-flyRed/40",
    border: "border-flyRed/30",
  },
};

export function BriefingPreview() {
  const initial = BRIEFING_EXAMPLE.findIndex((d) => d.star) ?? 0;
  const [active, setActive] = useState(initial >= 0 ? initial : 0);
  const day = BRIEFING_EXAMPLE[active];
  const m = ratingMap[day.rating];

  return (
    <section
      id="preview"
      className="relative overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background py-24 sm:py-32"
      aria-labelledby="preview-headline"
    >
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0,rgba(2,132,199,0.07),transparent_60%)]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Beispiel-Briefing
          </p>
          <h2
            id="preview-headline"
            className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
          >
            Genau das bekommst du jeden Montag.
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Klick auf einen Wochentag — siehst sofort, was dich erwartet.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-xl shadow-primary/5">
            {/* Header */}
            <div className="flex items-center justify-between gap-4 border-b border-border bg-gradient-to-b from-muted/30 to-white px-5 py-4 sm:px-6">
              <div>
                <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Wochen-Briefing · KW 18
                </div>
                <div className="mt-0.5 text-sm font-semibold">
                  Deine Woche im Überblick
                </div>
              </div>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener"
                className="focus-ring inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground"
              >
                Live in App ansehen
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>

            {/* Tabs */}
            <div
              role="tablist"
              aria-label="Wochentage"
              className="grid grid-cols-5 gap-1.5 border-b border-border bg-white p-2 sm:gap-2 sm:p-3"
            >
              {BRIEFING_EXAMPLE.map((d, i) => {
                const tm = ratingMap[d.rating];
                const isActive = i === active;
                return (
                  <button
                    key={d.weekday}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`day-panel-${i}`}
                    id={`day-tab-${i}`}
                    onClick={() => setActive(i)}
                    className={`focus-ring relative flex flex-col items-center gap-1.5 rounded-2xl px-1 py-3 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? `${tm.bg} ${tm.text} ring-2 ${tm.ring}`
                        : "text-muted-foreground hover:bg-muted/60"
                    }`}
                  >
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${tm.dot}`}
                      aria-hidden="true"
                    />
                    <span className="font-semibold">{d.weekday}</span>
                    {d.star && (
                      <Star
                        className="absolute right-1.5 top-1.5 h-3 w-3 text-flyViolet"
                        aria-label="Top-Tag der Woche"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Day panel */}
            <div
              role="tabpanel"
              id={`day-panel-${active}`}
              aria-labelledby={`day-tab-${active}`}
              className="animate-fade-in space-y-4 px-5 py-6 sm:px-6"
              key={active}
            >
              <div className="flex items-baseline justify-between gap-3">
                <div>
                  <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {day.date}
                  </div>
                  <h3
                    className={`mt-1 text-2xl font-semibold tracking-tight ${m.text}`}
                  >
                    {day.ratingLabel}
                  </h3>
                </div>
                {day.star && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-flyViolet/10 px-2.5 py-1 text-xs font-medium text-flyViolet">
                    <Star className="h-3 w-3" />
                    Top der Woche
                  </span>
                )}
              </div>

              <p className="text-sm text-muted-foreground">{day.headline}</p>

              {day.spots.length === 0 ? (
                <div className="rounded-2xl bg-muted/40 px-4 py-6 text-center text-sm text-muted-foreground">
                  Keine empfohlenen Spots heute.
                </div>
              ) : (
                <ul className="space-y-3">
                  {day.spots.map((spot, idx) => {
                    const sm = ratingMap[spot.rating];
                    return (
                      <li
                        key={`${spot.name}-${idx}`}
                        className={`overflow-hidden rounded-2xl border ${sm.border} bg-white transition-all hover:shadow-md`}
                      >
                        <div className="flex flex-wrap items-start justify-between gap-3 border-b border-border/50 px-4 py-3">
                          <div className="flex items-center gap-3">
                            <span
                              className={`flex h-8 w-8 items-center justify-center rounded-full ${sm.bg} text-xs font-bold ${sm.text} tabular-nums`}
                              aria-label={`Bewertung ${spot.score}`}
                            >
                              {spot.score.toFixed(1)}
                            </span>
                            <div>
                              <div className="font-semibold tracking-tight">
                                {spot.name}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {spot.region}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                              Fenster
                            </div>
                            <div className="text-sm font-semibold tabular-nums">
                              {spot.window}
                            </div>
                          </div>
                        </div>

                        <dl className="grid gap-3 px-4 py-3 text-sm sm:grid-cols-2">
                          <div>
                            <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                              Sicherheit
                            </dt>
                            <dd className="mt-0.5 text-foreground/90">
                              {spot.safety}
                            </dd>
                          </div>
                          <div>
                            <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                              Fliegbarkeit
                            </dt>
                            <dd className="mt-0.5 text-foreground/90">
                              {spot.flyability}
                            </dd>
                          </div>
                        </dl>

                        <div className="flex items-center justify-between border-t border-border/50 bg-muted/20 px-4 py-2.5 text-xs">
                          <span className="text-muted-foreground">
                            Confidence{" "}
                            <span className="font-semibold tabular-nums text-foreground">
                              {spot.confidence}%
                            </span>
                          </span>
                          <a
                            href={`${APP_URL}/spots/${spot.name.toLowerCase()}`}
                            target="_blank"
                            rel="noopener"
                            className="focus-ring inline-flex items-center gap-1 rounded-full px-2 py-1 font-medium text-primary transition-colors hover:bg-primary/10"
                          >
                            Spot in App öffnen
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            {/* Footer CTA inside the briefing */}
            <div className="border-t border-border bg-gradient-to-b from-white to-muted/30 px-5 py-5 sm:px-6">
              <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
                <p className="text-sm text-muted-foreground">
                  Alle Spots, Stundenwerte und Live-Daten:
                </p>
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener"
                  className="focus-ring group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Vollständige App öffnen
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            Beispiel-Daten · Echte Briefings basieren auf der Vorhersage der
            kommenden Woche.
          </p>
        </div>
      </div>
    </section>
  );
}
