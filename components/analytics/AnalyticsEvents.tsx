"use client";

/**
 * Zentrale Custom-Events für PostHog.
 *
 * Fängt per delegiertem Click-Listener jeden Klick auf einen Link zur App
 * (app.wingcast.ch) ab und sendet ein benanntes Event `app_open_clicked` —
 * egal aus welcher Sektion (Navbar, Hero, Floating-CTA, Footer …). So muss
 * keine einzelne Button-Komponente angefasst werden, und neue App-Links werden
 * automatisch mitgezählt.
 *
 * Läuft nur, wenn PostHog (nach Consent) geladen ist. Wird einmal in
 * app/[locale]/layout.tsx eingehängt.
 */

import { useEffect } from "react";

const APP_HOST = "app.wingcast.ch";

export function AnalyticsEvents() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest("a[href]") as HTMLAnchorElement | null;
      if (!link) return;

      let host = "";
      try {
        host = new URL(link.href, window.location.origin).host;
      } catch {
        return;
      }
      if (host !== APP_HOST) return;

      void import("posthog-js").then(({ default: posthog }) => {
        if (!posthog.__loaded) return;
        posthog.capture("app_open_clicked", {
          link_text: link.innerText?.trim().slice(0, 60) || null,
          link_url: link.href,
          // von welcher Seite/Sprache aus geklickt wurde (z. B. "/", "/fr").
          location: window.location.pathname,
        });
      });
    };

    // Capture-Phase: feuert, bevor der Browser zur App navigiert.
    document.addEventListener("click", onClick, { capture: true });
    return () =>
      document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
