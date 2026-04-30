import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "Impressum",
};

export default function ImpressumPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold tracking-tight">Impressum</h1>
        <div className="prose mt-8 max-w-none text-foreground/90">
          <p className="text-muted-foreground">
            Platzhalter — vor Live-Schaltung mit den korrekten Angaben füllen
            (Inhaber, Adresse, Kontakt, Handelsregister falls anwendbar).
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
