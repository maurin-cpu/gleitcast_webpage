import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Check, ArrowUpRight } from "@/components/ui/Icons";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.gleitcast.ch";

export const metadata = {
  title: "Anmeldung bestätigt",
};

export default function ConfirmPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <div className="aurora-bg absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
        <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-32 text-center sm:px-6 lg:px-8">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-flyGreen/15 text-flyGreen">
            <Check className="h-8 w-8" strokeWidth={2.5} />
          </div>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Du bist dabei.
          </h1>
          <p className="mt-4 max-w-md text-pretty text-muted-foreground">
            Erste Mail kommt am nächsten Montag um 06:00. In der Zwischenzeit
            kannst du die Live-App schon ausprobieren.
          </p>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener"
            className="focus-ring group mt-8 inline-flex h-14 items-center gap-2 rounded-full bg-primary px-8 text-base font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5"
          >
            Zur Gleitcast App
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
