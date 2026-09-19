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
 *
 * Conversion-Trichter (Events Manager → Anzeigen auf Conversions optimieren):
 *   PageView              jede Seite (hier)
 *   Lead                  Klick auf einen Link zur App (AnalyticsEvents.tsx)
 *   CompleteRegistration  erster Login eines neuen Kontos — feuert in der App
 *                         (app.wingcast.ch, templates/base.html im flychat-Repo)
 *
 * Damit die App den Pixel laden darf, gibt die Zustimmung hier ein Cookie auf
 * die Hauptdomain (.wingcast.ch) weiter — die App hat keinen eigenen Banner
 * und liest nur dieses Cookie. Attribution zwischen beiden Hosts läuft über
 * die Meta-Cookies _fbp/_fbc, die fbevents.js ebenfalls auf .wingcast.ch setzt.
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

/** Consent-Weitergabe an app.wingcast.ch: "1" = Marketing erlaubt, "0" = nicht. */
const CONSENT_COOKIE = "wc_consent_marketing";
const CONSENT_COOKIE_DAYS = 180;

let started = false;

function writeConsentCookie(value: "0" | "1") {
  const host = window.location.hostname;
  const domain = host.endsWith("wingcast.ch") ? "; Domain=.wingcast.ch" : "";
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie =
    `${CONSENT_COOKIE}=${value}; Max-Age=${CONSENT_COOKIE_DAYS * 86400}` +
    `; Path=/; SameSite=Lax${domain}${secure}`;
}

/** Lädt fbevents.js (einmalig) und sendet den initialen PageView. */
export function startMetaPixel(pixelId: string) {
  if (typeof window === "undefined") return;
  writeConsentCookie("1");

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

/** Widerruf: keine weiteren Events an Meta — auch nicht in der App. */
export function revokeMetaPixel() {
  if (typeof window === "undefined") return;
  writeConsentCookie("0");
  if (!started) return;
  window.fbq?.("consent", "revoke");
}

/** PageView bei client-seitiger Navigation — nur wenn Pixel läuft. */
export function trackMetaPageView() {
  if (!started) return;
  window.fbq?.("track", "PageView");
}

/** Standard-Event (z. B. "Lead") — nur wenn Pixel läuft. */
export function trackMetaEvent(
  name: string,
  params?: Record<string, string | number | boolean | null>,
) {
  if (!started) return;
  window.fbq?.("track", name, params ?? {});
}
