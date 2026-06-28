"use client";

/**
 * Zentrale Custom-Events für PostHog (alles, was aus dem DOM kommt).
 *
 * Sendet die für die Landingpage wichtigen Conversions/Signale — ohne dass eine
 * einzelne Sektions-Komponente angefasst werden muss:
 *
 *  - `app_open_clicked`      Klick auf einen Link zur App (app.wingcast.ch),
 *                            aus beliebiger Sektion. Die Haupt-Conversion.
 *  - `faq_opened`            Öffnen einer FAQ-Frage (welche Bedenken haben Leute).
 *  - `contact_email_clicked` Klick auf eine mailto-Adresse (Kontakt-Absicht).
 *  - `section_viewed`        Eine Seiten-Sektion wird erstmals sichtbar
 *                            (Scroll-Tiefe / Engagement: wie weit liest jemand,
 *                            erreicht er überhaupt die App-CTA?).
 *
 * Läuft nur, wenn PostHog (nach Consent) geladen ist; vorher passiert nichts.
 * Wird einmal in app/[locale]/layout.tsx eingehängt.
 */

import { useEffect } from "react";

const APP_HOST = "app.wingcast.ch";

/** PostHog-Instanz, aber nur wenn (nach Consent) initialisiert. */
async function loadedPosthog() {
  const posthog = (await import("posthog-js")).default;
  return posthog.__loaded ? posthog : null;
}

export function AnalyticsEvents() {
  useEffect(() => {
    const path = () => window.location.pathname;

    // 1) Klick-Events: zur App, FAQ öffnen, Kontakt-Mail.
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const link = target.closest("a[href]") as HTMLAnchorElement | null;
      if (link) {
        let host = "";
        try {
          host = new URL(link.href, window.location.origin).host;
        } catch {
          host = "";
        }
        if (host === APP_HOST) {
          void loadedPosthog().then((p) =>
            p?.capture("app_open_clicked", {
              link_text: link.innerText?.trim().slice(0, 60) || null,
              link_url: link.href,
              location: path(),
            }),
          );
        } else if (link.href.startsWith("mailto:")) {
          void loadedPosthog().then((p) =>
            p?.capture("contact_email_clicked", { location: path() }),
          );
        }
      }

      // FAQ: native <details><summary> innerhalb von #faq.
      const summary = target.closest("summary");
      const details = summary?.closest("details") as HTMLDetailsElement | null;
      if (summary && details && details.closest("#faq")) {
        // Im Capture-Lauf ist .open noch der ALTE Zustand → false = wird geöffnet.
        if (!details.open) {
          const question =
            summary.textContent?.trim().replace(/\s+/g, " ").slice(0, 120) ||
            null;
          void loadedPosthog().then((p) =>
            p?.capture("faq_opened", { question, location: path() }),
          );
        }
      }
    };
    document.addEventListener("click", onClick, { capture: true });

    // 2) Scroll-Tiefe: jede <section id="…"> einmal zählen, sobald sie zur
    //    Hälfte sichtbar ist.
    const seen = new Set<string>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = (entry.target as HTMLElement).id;
          if (!id || seen.has(id)) continue;
          seen.add(id);
          io.unobserve(entry.target);
          void loadedPosthog().then((p) =>
            p?.capture("section_viewed", { section: id, location: path() }),
          );
        }
      },
      { threshold: 0.5 },
    );
    document
      .querySelectorAll<HTMLElement>("section[id]")
      .forEach((s) => io.observe(s));

    return () => {
      document.removeEventListener("click", onClick, { capture: true });
      io.disconnect();
    };
  }, []);

  return null;
}
