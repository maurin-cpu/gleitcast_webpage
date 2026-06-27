"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { ArrowUpRight } from "./ui/Icons";

const APP_URL = "https://app.wingcast.ch";

export function FloatingAppCTA() {
  const t = useTranslations("Cta");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const blockingIds = ["subscribe", "faq"];
    const blocking = blockingIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (!hero) return;

    const state = { heroIn: true, blocked: new Set<HTMLElement>() };
    const update = () =>
      setVisible(!state.heroIn && state.blocked.size === 0);

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        state.heroIn = entry.isIntersecting;
        update();
      },
      { threshold: 0 }
    );
    heroObserver.observe(hero);

    const blockObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) state.blocked.add(e.target as HTMLElement);
          else state.blocked.delete(e.target as HTMLElement);
        });
        update();
      },
      { threshold: 0 }
    );
    blocking.forEach((el) => blockObserver.observe(el));

    return () => {
      heroObserver.disconnect();
      blockObserver.disconnect();
    };
  }, []);

  return (
    <a
      href={APP_URL}
      target="_blank"
      rel="noopener"
      aria-label={t("ariaViewSpots")}
      className={`focus-ring fixed bottom-5 right-5 z-50 inline-flex h-12 items-center gap-2 rounded-lg border-2 border-slate-900 bg-slate-900 px-5 text-base font-semibold text-white transition-[transform,opacity] duration-200 ease-out active:scale-[0.97] md:hidden ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      {t("viewSpots")}
      <ArrowUpRight className="h-4 w-4" />
    </a>
  );
}
