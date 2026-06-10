"use client";

/**
 * Footer-Link, der den Consent-Dialog erneut öffnet (Widerruf jederzeit
 * möglich — DSGVO-Anforderung). Feuert nur ein Event; die Logik liegt im
 * ConsentManager. Optisch identisch zu den übrigen Footer-Links.
 */

import { OPEN_SETTINGS_EVENT } from "@/lib/consent";

export function CookieSettingsLink() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT))}
      className="focus-ring inline-flex items-center gap-1.5 rounded text-left text-white/80 transition-colors hover:text-white"
    >
      Cookie-Einstellungen
    </button>
  );
}
