"use client";

/**
 * ConsentManager — orchestriert Zustimmung ↔ Tracking.
 *
 * - Liest gespeicherten Consent (falls vorhanden) und lädt PostHog nur bei
 *   analytics === "granted", den Meta Pixel nur bei marketing === "granted".
 * - Zeigt den Banner, solange keine gültige Entscheidung existiert.
 * - Reagiert auf den Footer-Link „Cookie-Einstellungen" (Custom-Event).
 * - Widerruf schaltet laufendes Tracking ab (PostHog opt-out, fbq revoke).
 *
 * Wird in app/layout.tsx einmalig am Ende des <body> eingehängt.
 */

import { useCallback, useEffect, useState } from "react";
import {
  analyticsEnv,
  OPEN_SETTINGS_EVENT,
  readConsent,
  writeConsent,
  type ConsentChoices,
  type ConsentState,
} from "@/lib/consent";
import { revokeMetaPixel, startMetaPixel } from "@/components/analytics/metaPixel";
import { ConsentBanner } from "./ConsentBanner";

// Modul-weiter Guard: PostHog wird pro Seitenladung höchstens einmal
// initialisiert.
let phStarted = false;

// Lokale Entwicklung erzeugt sonst Rausch-Events (eigene Domain-Einträge in
// PostHog / Meta). Auf localhost/127.0.0.1 wird deshalb gar kein Tracking
// geladen — das verhindert Tracking an der Quelle.
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

async function applyConsent(choices: ConsentChoices) {
  const { posthogKey, posthogHost, posthogUiHost, metaPixelId } = analyticsEnv;

  // Auf localhost: Consent respektieren, aber niemals Tracking laden.
  if (isLocalhost()) return;

  // Statistik — PostHog.
  if (choices.analytics === "granted") {
    if (posthogKey) await startPostHog(posthogKey, posthogHost, posthogUiHost);
  } else if (phStarted) {
    // Widerruf: bereits laufendes Tracking abschalten.
    const posthog = (await import("posthog-js")).default;
    posthog.opt_out_capturing();
  }

  // Marketing — Meta Pixel.
  if (choices.marketing === "granted") {
    if (metaPixelId) startMetaPixel(metaPixelId);
  } else {
    revokeMetaPixel();
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
    void applyConsent(state);
  }, [state]);

  const decide = useCallback((choices: ConsentChoices) => {
    setState(writeConsent(choices));
    setSettingsOpen(false);
  }, []);

  if (state === undefined) return null;

  const showBanner = state === null;
  if (!showBanner && !settingsOpen) return null;

  return (
    <ConsentBanner
      mode={showBanner ? "banner" : "settings"}
      analyticsDefault={state?.analytics === "granted"}
      marketingDefault={state?.marketing === "granted"}
      closable={!showBanner}
      onDecide={(c) =>
        decide({
          analytics: c.analytics ? "granted" : "denied",
          marketing: c.marketing ? "granted" : "denied",
        })
      }
      onClose={() => setSettingsOpen(false)}
    />
  );
}
