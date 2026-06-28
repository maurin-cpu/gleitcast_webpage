"use client";

/**
 * Sendet bei jeder client-seitigen Navigation (z. B. Sprachwechsel DE→FR oder
 * interne Links) einen $pageview an PostHog.
 *
 * Den ERSTEN Pageview übernimmt der ConsentManager direkt nach posthog.init()
 * — diese Komponente ergänzt nur die Folgenavigationen. Der allererste
 * Effekt-Lauf (beim Mount) wird daher übersprungen, sonst würde der initiale
 * View doppelt gezählt.
 *
 * Läuft nur, wenn PostHog (nach Consent) geladen ist; vorher passiert nichts.
 * Wird einmal in app/[locale]/layout.tsx eingehängt.
 */

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function PostHogPageView() {
  const pathname = usePathname();
  const skipInitial = useRef(true);

  useEffect(() => {
    // Initialen View macht der ConsentManager → ersten Lauf auslassen.
    if (skipInitial.current) {
      skipInitial.current = false;
      return;
    }
    void import("posthog-js").then(({ default: posthog }) => {
      if (posthog.__loaded) {
        posthog.capture("$pageview");
      }
    });
  }, [pathname]);

  return null;
}
