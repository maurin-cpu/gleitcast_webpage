"use client";

/**
 * ConsentManager — orchestriert Zustimmung ↔ Tracking.
 *
 * - Liest gespeicherten Consent (falls vorhanden) und lädt GA4/PostHog nur,
 *   wenn analytics === "granted".
 * - Zeigt den Banner, solange keine gültige Entscheidung existiert.
 * - Reagiert auf den Footer-Link „Cookie-Einstellungen" (Custom-Event).
 * - Widerruf schaltet laufendes Tracking ab (gtag denied + PostHog opt-out).
 *
 * Wird in app/layout.tsx einmalig am Ende des <body> eingehängt.
 */

import { useCallback, useEffect, useState } from "react";
import {
  analyticsEnv,
  OPEN_SETTINGS_EVENT,
  readConsent,
  writeConsent,
  type ConsentChoice,
  type ConsentState,
} from "@/lib/consent";
import { ConsentBanner } from "./ConsentBanner";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

// Modul-weite Guards: jeder Dienst wird pro Seitenladung höchstens einmal
// initialisiert.
let gaStarted = false;
let phStarted = false;

function startGA(gaId: string) {
  if (gaStarted) {
    window.gtag?.("consent", "update", { analytics_storage: "granted" });
    return;
  }
  gaStarted = true;

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }
  window.gtag = gtag;

  // Consent Mode v2 — Default auf denied, dann auf granted (User hat zugestimmt).
  // Das gtag.js-Script wird erst JETZT geladen, also gibt es vor der Zustimmung
  // gar keinen Request an Google (strengste, DSGVO-sichere Variante).
  gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
  });
  gtag("consent", "update", { analytics_storage: "granted" });
  gtag("js", new Date());
  gtag("config", gaId, { anonymize_ip: true });

  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(s);
}

async function startPostHog(key: string, host: string, uiHost: string) {
  const posthog = (await import("posthog-js")).default;
  if (phStarted) {
    posthog.opt_in_capturing();
    return;
  }
  phStarted = true;
  posthog.init(key, {
    api_host: host,
    ui_host: uiHost,
    capture_pageview: true,
    capture_pageleave: true,
    persistence: "localStorage+cookie",
  });
}

async function applyConsent(analytics: ConsentChoice) {
  const { gaId, posthogKey, posthogHost, posthogUiHost } = analyticsEnv;

  if (analytics === "granted") {
    if (gaId) startGA(gaId);
    if (posthogKey) await startPostHog(posthogKey, posthogHost, posthogUiHost);
    return;
  }

  // Widerruf: bereits laufendes Tracking abschalten.
  if (gaStarted) {
    window.gtag?.("consent", "update", { analytics_storage: "denied" });
  }
  if (phStarted) {
    const posthog = (await import("posthog-js")).default;
    posthog.opt_out_capturing();
  }
}

export function ConsentManager() {
  // undefined = noch nicht aus localStorage gelesen (vermeidet Flash beim Mount)
  const [state, setState] = useState<ConsentState | null | undefined>(undefined);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    setState(readConsent());
  }, []);

  // Footer-Link „Cookie-Einstellungen".
  useEffect(() => {
    const open = () => setSettingsOpen(true);
    window.addEventListener(OPEN_SETTINGS_EVENT, open);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, open);
  }, []);

  // Tracking an gespeicherten Zustand angleichen.
  useEffect(() => {
    if (!state) return;
    void applyConsent(state.analytics);
  }, [state]);

  const decide = useCallback((analytics: ConsentChoice) => {
    setState(writeConsent(analytics));
    setSettingsOpen(false);
  }, []);

  if (state === undefined) return null;

  const showBanner = state === null;
  if (!showBanner && !settingsOpen) return null;

  return (
    <ConsentBanner
      mode={showBanner ? "banner" : "settings"}
      analyticsDefault={state?.analytics === "granted"}
      closable={!showBanner}
      onDecide={(analytics) => decide(analytics ? "granted" : "denied")}
      onClose={() => setSettingsOpen(false)}
    />
  );
}
