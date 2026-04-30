"use client";

import { useActionState, useId } from "react";
import { useFormStatus } from "react-dom";
import { subscribeAction, type SubscribeState } from "@/lib/actions/subscribe";
import { REGIONS } from "@/lib/regions";
import { ArrowRight, Check } from "../ui/Icons";

const initialState: SubscribeState = { status: "idle" };

const experienceOptions = [
  { id: "anfaenger", label: "Anfänger", hint: "≤ 1 Jahr Brevet" },
  { id: "hobby", label: "Hobby", hint: "Wochenend-Pilot" },
  { id: "xc", label: "XC", hint: "Streckenflieger" },
];

export function SubscribeForm() {
  const [state, formAction] = useActionState(subscribeAction, initialState);
  const formId = useId();

  if (state.status === "success") {
    return (
      <SuccessCard message={state.message} />
    );
  }

  const errs = state.status === "error" ? state.fieldErrors ?? {} : {};

  return (
    <section
      id="subscribe"
      className="relative overflow-hidden py-24 sm:py-32"
      aria-labelledby="subscribe-headline"
    >
      <div className="aurora-bg absolute inset-0 -z-10 opacity-50" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_30%,rgba(245,158,11,0.15),transparent_55%)]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Anmeldung
            </p>
            <h2
              id="subscribe-headline"
              className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
            >
              Briefing kostenlos abonnieren.
            </h2>
            <p className="mt-3 text-pretty text-muted-foreground">
              Erste Mail kommt am nächsten Montag um 06:00. Jederzeit kündbar.
            </p>
          </div>

          <form
            action={formAction}
            className="mt-10 rounded-3xl border border-border bg-white/90 p-6 shadow-2xl shadow-primary/10 backdrop-blur sm:p-8"
            noValidate
          >
            {state.status === "error" && !state.fieldErrors && (
              <p
                role="alert"
                className="mb-5 rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive"
              >
                {state.message}
              </p>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                id={`${formId}-email`}
                name="email"
                type="email"
                label="E-Mail"
                required
                autoComplete="email"
                placeholder="dein.name@beispiel.ch"
                error={errs.email?.[0]}
                inputMode="email"
              />
              <Field
                id={`${formId}-firstName`}
                name="firstName"
                label="Vorname"
                hint="Optional"
                autoComplete="given-name"
                placeholder="Sarah"
                error={errs.firstName?.[0]}
              />
            </div>

            <fieldset className="mt-6">
              <legend className="mb-2 block text-sm font-medium text-foreground">
                Deine Regionen <span className="text-destructive">*</span>
              </legend>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {REGIONS.map((r) => (
                  <label
                    key={r.id}
                    className="group relative flex cursor-pointer items-center gap-2 rounded-2xl border border-border bg-white px-3 py-2.5 text-sm transition-all hover:border-primary/40 hover:bg-primary/5 has-[:checked]:border-primary has-[:checked]:bg-primary/10 has-[:checked]:text-primary has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring has-[:focus-visible]:ring-offset-2"
                  >
                    <input
                      type="checkbox"
                      name="regions"
                      value={r.id}
                      className="peer sr-only"
                    />
                    <span
                      aria-hidden="true"
                      className="flex h-4 w-4 shrink-0 items-center justify-center rounded-md border border-border text-primary-foreground transition-colors peer-checked:border-primary peer-checked:bg-primary peer-checked:[&>svg]:opacity-100"
                    >
                      <Check
                        className="h-3 w-3 opacity-0 transition-opacity duration-150"
                        strokeWidth={3}
                      />
                    </span>
                    <span className="truncate">{r.name}</span>
                  </label>
                ))}
              </div>
              {errs.regions?.[0] && (
                <p role="alert" className="mt-2 text-sm text-destructive">
                  {errs.regions[0]}
                </p>
              )}
            </fieldset>

            <fieldset className="mt-6">
              <legend className="mb-2 block text-sm font-medium text-foreground">
                Dein Level <span className="text-muted-foreground">(optional)</span>
              </legend>
              <div className="grid grid-cols-3 gap-2">
                {experienceOptions.map((opt) => (
                  <label
                    key={opt.id}
                    className="group flex cursor-pointer flex-col items-center gap-0.5 rounded-2xl border border-border bg-white px-3 py-3 text-center text-sm transition-all hover:border-primary/40 hover:bg-primary/5 has-[:checked]:border-primary has-[:checked]:bg-primary/10 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring has-[:focus-visible]:ring-offset-2"
                  >
                    <input
                      type="radio"
                      name="experience"
                      value={opt.id}
                      className="sr-only"
                    />
                    <span className="font-medium">{opt.label}</span>
                    <span className="text-xs text-muted-foreground">
                      {opt.hint}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="mt-6 flex cursor-pointer items-start gap-3 rounded-2xl border border-border bg-muted/30 p-4 transition-colors hover:bg-muted/50 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring has-[:focus-visible]:ring-offset-2">
              <input
                type="checkbox"
                name="feedbackOptIn"
                defaultChecked
                className="mt-0.5 h-4 w-4 cursor-pointer rounded border-border accent-primary"
              />
              <span className="text-sm">
                <span className="font-medium">Ich helfe das Produkt zu verbessern.</span>{" "}
                <span className="text-muted-foreground">
                  Du darfst mir 1–2 kurze Feedback-Fragen pro Monat senden.
                </span>
              </span>
            </label>

            <SubmitButton />

            <p className="mt-4 text-center text-xs text-muted-foreground">
              Kein Spam. Keine Drittanbieter. Mit Bestätigungs-Mail (Double-Opt-In).
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  name,
  label,
  hint,
  error,
  type = "text",
  ...rest
}: {
  id: string;
  name: string;
  label: string;
  hint?: string;
  error?: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: "email" | "tel" | "numeric" | "text" | "url" | "search";
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 flex items-baseline justify-between text-sm">
        <span className="font-medium text-foreground">
          {label}
          {rest.required && <span className="ml-0.5 text-destructive">*</span>}
        </span>
        {hint && <span className="text-xs text-muted-foreground">{hint}</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`focus-ring h-11 w-full rounded-xl border bg-white px-3.5 text-[0.95rem] transition-colors placeholder:text-muted-foreground/50 ${
          error
            ? "border-destructive focus:border-destructive"
            : "border-border focus:border-primary"
        }`}
        {...rest}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="focus-ring group mt-6 inline-flex h-14 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-primary text-base font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? (
        <>
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
          Wird gesendet…
        </>
      ) : (
        <>
          Briefing kostenlos abonnieren
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </>
      )}
    </button>
  );
}

function SuccessCard({ message }: { message: string }) {
  const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.gleitcast.ch";
  return (
    <section
      id="subscribe"
      className="relative overflow-hidden py-24 sm:py-32"
      aria-labelledby="subscribe-headline"
    >
      <div className="aurora-bg absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl rounded-3xl border border-flyGreen/30 bg-white/95 p-10 text-center shadow-2xl shadow-flyGreen/10 backdrop-blur">
          <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-flyGreen/15 text-flyGreen">
            <Check className="h-7 w-7" strokeWidth={2.5} />
          </div>
          <h2
            id="subscribe-headline"
            className="mt-5 text-3xl font-semibold tracking-tight"
          >
            Fast geschafft!
          </h2>
          <p className="mt-3 text-muted-foreground">{message}</p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener"
              className="focus-ring inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5"
            >
              Jetzt schon in der App stöbern
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
