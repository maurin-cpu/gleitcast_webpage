"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "./ui/Icons";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.gleitcast.ch";

export function FloatingAppCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={APP_URL}
      target="_blank"
      rel="noopener"
      aria-label="Gleitcast App öffnen"
      className={`focus-ring fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-2xl shadow-primary/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-primary/50 active:scale-95 md:hidden ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      App öffnen
      <ArrowUpRight className="h-4 w-4" />
    </a>
  );
}
