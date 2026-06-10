/**
 * Consent-Kern — DSGVO / revDSG.
 *
 * Prinzip: Opt-in. GA4 und PostHog laden NIE vor aktiver Zustimmung.
 * „Notwendig" (Session-Login der App) ist keine abwählbare Kategorie und
 * wird hier nicht gespeichert — es gibt nur eine optionale Kategorie:
 * Statistik/Analyse (GA4 + PostHog gemeinsam).
 *
 * Wird der Banner inhaltlich erweitert (neue Kategorie, neuer Dienst, neuer
 * Drittstaaten-Transfer), CONSENT_VERSION erhöhen → alte Zustimmung verfällt,
 * Nutzer werden erneut gefragt. Das ist die rechtlich saubere Variante.
 */

export const CONSENT_VERSION = 1;
export const CONSENT_STORAGE_KEY = "wingcast.consent";

/** Footer-Link „Cookie-Einstellungen" feuert dieses Event → Panel öffnet erneut. */
export const OPEN_SETTINGS_EVENT = "wingcast:open-consent";

export type ConsentChoice = "granted" | "denied";

export type ConsentState = {
  version: number;
  /** Zeitpunkt des Entscheids (Nachweis-Pflicht). ISO-String. */
  decidedAt: string;
  /** GA4 + PostHog gemeinsam. */
  analytics: ConsentChoice;
};

export function readConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    // Versionssprung ⇒ Zustimmung gilt als ungültig, neu fragen.
    if (parsed.version !== CONSENT_VERSION) return null;
    if (parsed.analytics !== "granted" && parsed.analytics !== "denied") {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function writeConsent(analytics: ConsentChoice): ConsentState {
  const state: ConsentState = {
    version: CONSENT_VERSION,
    decidedAt: new Date().toISOString(),
    analytics,
  };
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
  } catch {
    // localStorage nicht verfügbar (Privatmodus o. ä.) — dann gilt:
    // kein persistenter Consent ⇒ kein Tracking über den Seitenwechsel hinaus.
  }
  return state;
}

/**
 * Tracking-Konfiguration aus Env. Keys sind NEXT_PUBLIC_*, also zur Build-Zeit
 * eingebettet und im Client sichtbar — das ist bei Mess-IDs unkritisch und
 * branchenüblich. Fehlt ein Wert, wird der jeweilige Dienst schlicht nicht
 * geladen (lokale Entwicklung ohne Tracking).
 */
export const analyticsEnv = {
  gaId: process.env.NEXT_PUBLIC_GA_ID,
  posthogKey: process.env.NEXT_PUBLIC_POSTHOG_KEY,
  // EU-Cloud (Frankfurt) ist Default — niemals der US-Endpoint.
  posthogHost: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://eu.i.posthog.com",
  posthogUiHost: "https://eu.posthog.com",
};
