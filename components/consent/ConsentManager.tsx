"use client";

/**
 * ConsentManager — orchestriert Zustimmung ↔ Tracking.
 *
 * - Liest gespeicherten Consent (falls vorhanden) und lädt PostHog nur,
 *   wenn analytics === "granted".
 * - Zeigt den Banner, solange keine gültige Entscheidung existiert.
 * - Reagiert auf den Footer-Link „Cookie-Einstellungen" (Custom-Event).
 * - Widerruf schaltet laufendes Tracking ab (PostHog opt-out).
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

// Modul-weiter Guard: PostHog wird pro Seitenladung höchstens einmal
// initialisiert.
let phStarted = false;

// Lokale Entwicklung erzeugt sonst Rausch-Events (eigene Domain-Einträge in
// PostHog). Auf localhost/127.0.0.1 wird deshalb gar kein Analytics geladen
// — das verhindert Tracking an der Quelle.
function isLocalhost() {
  if (typeof window === "undefined") return false;
  const h = window.location.hostname;
  return h === "localhost" || h === "127.0.0.1" || h === "[::1]";
}

async function startPostHog(key: string, host: string, uiHost: string) {
  const posthog = (await import("posthog-js")).default;
  if (phStarted) {
    posthog.opt_in_capturing();
    posthog.capture("$pageview");
    return;
  }
  phStarted = true;
  posthog.init(key, {
    api_host: host,
    ui_host: uiHost,
    // Pageviews senden wir selbst: einmal hier (initialer View) und pro
    // Client-Navigation in <PostHogPageView>. PostHogs Automatik (`true`)
    // erfasst keine SPA-Navigationen und verpasst den initialen View, weil
    // wir erst NACH dem Page-Load (nach Consent) initialisieren.
    capture_pageview: false,
    capture_pageleave: true,
    persistence: "localStorage+cookie",
  });
  // Initialer Pageview der Seite, auf der zugestimmt wurde.
  posthog.capture("$pageview");
}

async function applyConsent(analytics: ConsentChoice) {
  const { posthogKey, posthogHost, posthogUiHost } = analyticsEnv;

  // Auf localhost: Consent respektieren, aber niemals Tracking laden.
  if (isLocalhost()) return;

  if (analytics === "granted") {
    if (posthogKey) await startPostHog(posthogKey, posthogHost, posthogUiHost);
    return;
  }

  // Widerruf: bereits laufendes Tracking abschalten.
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
