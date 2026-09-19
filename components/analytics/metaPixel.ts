/**
 * Meta Pixel (Facebook/Instagram Ads) — Conversion-Messung.
 *
 * Wird NUR geladen, wenn der Nutzer die Kategorie „Marketing" im Consent-Banner
 * aktiv gewählt hat (siehe ConsentManager). Das ist der offizielle
 * fbevents.js-Loader aus dem Events Manager, als Funktion statt Inline-Script,
 * damit er sich hinter den Consent hängen lässt.
 *
 * Widerruf: fbq('consent','revoke') stoppt alle weiteren Sendungen, das
 * Script selbst bleibt im Speicher (lässt sich nicht entladen).
 */

type Fbq = {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[];
  push: Fbq;
  loaded: boolean;
  version: string;
};

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

const SRC = "https://connect.facebook.net/en_US/fbevents.js";

let started = false;

/** Lädt fbevents.js (einmalig) und sendet den initialen PageView. */
export function startMetaPixel(pixelId: string) {
  if (typeof window === "undefined") return;

  if (started) {
    // Nutzer hat Marketing wieder eingeschaltet → Sendungen freigeben.
    window.fbq?.("consent", "grant");
    window.fbq?.("track", "PageView");
    return;
  }
  started = true;

  if (!window.fbq) {
    const n = function (...args: unknown[]) {
      if (n.callMethod) n.callMethod(...args);
      else n.queue.push(args);
    } as Fbq;
    n.queue = [];
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    window.fbq = n;
    if (!window._fbq) window._fbq = n;

    const s = document.createElement("script");
    s.async = true;
    s.src = SRC;
    document.head.appendChild(s);
  }

  window.fbq("init", pixelId);
  window.fbq("track", "PageView");
}

/** Widerruf: keine weiteren Events an Meta. */
export function revokeMetaPixel() {
  if (!started) return;
  window.fbq?.("consent", "revoke");
}

/** PageView bei client-seitiger Navigation — nur wenn Pixel läuft. */
export function trackMetaPageView() {
  if (!started) return;
  window.fbq?.("track", "PageView");
}
