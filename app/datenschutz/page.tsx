import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "Datenschutz",
};

export default function DatenschutzPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold tracking-tight">Datenschutz</h1>
        <div className="prose mt-8 max-w-none text-foreground/90">
          <p className="text-muted-foreground">
            Platzhalter — vor Live-Schaltung um eine vollständige
            Datenschutzerklärung ergänzen. Aktuell speichern wir nur deine
            E-Mail-Adresse, gewählte Regionen und (optional) Vorname und Level
            zur Versendung des wöchentlichen Briefings.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
