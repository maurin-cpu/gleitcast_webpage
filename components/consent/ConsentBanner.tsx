"use client";

/**
 * ConsentBanner — DSGVO-konformer Opt-in-Dialog.
 *
 * Rechtlich kritische Eigenschaften (bewusst so gebaut):
 *  - „Alle akzeptieren" und „Ablehnen" sind auf der ersten Ebene gleich
 *    prominent (gleiche Größe/Position, kein verstecktes Ablehnen).
 *  - Statistik-Kategorie ist standardmäßig AUS (kein Pre-Tick).
 *  - Kein Cookie-Wall: der Dialog blockiert die Seite nicht (aria-modal=false),
 *    Ablehnen ist ohne Nachteil möglich.
 *  - Verweis auf die Datenschutzerklärung.
 */

import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/Button";

type Props = {
  mode: "banner" | "settings";
  /** Vorbelegung des Statistik-Toggles (im Settings-Modus = aktueller Stand). */
  analyticsDefault: boolean;
  /** Im Settings-Modus schließbar (Nutzer hat schon entschieden). */
  closable: boolean;
  onDecide: (analytics: boolean) => void;
  onClose: () => void;
};

export function ConsentBanner({
  mode,
  analyticsDefault,
  closable,
  onDecide,
  onClose,
}: Props) {
  const [details, setDetails] = useState(mode === "settings");
  const [analytics, setAnalytics] = useState(analyticsDefault);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!closable) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closable, onClose]);

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6">
      <div
        role="dialog"
        aria-modal="false"
        aria-labelledby="consent-title"
        aria-describedby="consent-desc"
        className="mx-auto max-w-content animate-fade-in-up rounded-card border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-900/10 sm:p-7"
      >
        <div className="md:flex md:items-start md:gap-8">
          <div className="md:flex-1">
            <h2
              id="consent-title"
              ref={headingRef}
              tabIndex={-1}
              className="text-lg font-bold tracking-tight text-slate-900 focus:outline-none sm:text-xl"
            >
              Datenschutz — deine Wahl
            </h2>
            <p
              id="consent-desc"
              className="mt-2 max-w-2xl text-sm leading-[1.6] text-slate-700"
            >
              Wir nutzen optional <strong>Statistik-Tools</strong> (Google
              Analytics 4 &amp; PostHog, EU-Server), um zu verstehen, wie die
              Seite genutzt wird, und Wingcast zu verbessern. Diese laden{" "}
              <strong>erst nach deiner Zustimmung</strong>. Notwendige Funktionen
              brauchen kein Tracking. Du kannst jederzeit über
              „Cookie-Einstellungen" im Footer widerrufen. Details in der{" "}
              <a
                href="/datenschutz"
                className="font-semibold text-sky-700 underline underline-offset-2 hover:text-sky-800"
              >
                Datenschutzerklärung
              </a>
              .
            </p>

            {details && (
              <div className="mt-5 space-y-3 border-t border-slate-200 pt-5">
                <CategoryRow
                  title="Notwendig"
                  body="Für den Betrieb erforderlich. Auf dieser Seite kein Cookie; in der App ein Login-Session-Cookie. Immer aktiv."
                  checked
                  disabled
                  onToggle={() => {}}
                />
                <CategoryRow
                  title="Statistik & Analyse"
                  body="Google Analytics 4 und PostHog (EU). Anonymisierte Nutzungsmessung. GA4 überträgt Daten in die USA (EU-US Data Privacy Framework)."
                  checked={analytics}
                  disabled={false}
                  onToggle={() => setAnalytics((v) => !v)}
                />
              </div>
            )}
          </div>

          <div className="mt-6 flex shrink-0 flex-col gap-2.5 md:mt-0 md:w-56">
            {details ? (
              <Button
                variant="primary"
                size="md"
                onClick={() => onDecide(analytics)}
                className="w-full"
              >
                Auswahl speichern
              </Button>
            ) : (
              <>
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => onDecide(true)}
                  className="w-full"
                >
                  Alle akzeptieren
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  onClick={() => onDecide(false)}
                  className="w-full"
                >
                  Ablehnen
                </Button>
              </>
            )}

            <button
              type="button"
              onClick={() => setDetails((v) => !v)}
              className="focus-ring mt-1 rounded text-sm font-semibold text-slate-600 underline underline-offset-2 hover:text-slate-900"
            >
              {details ? "Weniger anzeigen" : "Einstellungen"}
            </button>

            {closable && (
              <button
                type="button"
                onClick={onClose}
                className="focus-ring rounded text-sm text-slate-500 hover:text-slate-700"
              >
                Schließen
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function CategoryRow({
  title,
  body,
  checked,
  disabled,
  onToggle,
}: {
  title: string;
  body: string;
  checked: boolean;
  disabled: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-sm font-semibold text-slate-900">{title}</p>
        <p className="mt-0.5 text-sm leading-[1.55] text-slate-600">{body}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={title}
        disabled={disabled}
        onClick={onToggle}
        className={`focus-ring relative mt-0.5 inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-150 ${
          checked ? "bg-sky-600" : "bg-slate-300"
        } ${disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform duration-150 ${
            checked ? "translate-x-[22px]" : "translate-x-[2px]"
          }`}
        />
      </button>
    </div>
  );
}
