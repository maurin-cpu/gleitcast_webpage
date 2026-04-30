import { Navbar } from "@/components/Navbar";
import { FloatingAppCTA } from "@/components/FloatingAppCTA";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { BriefingPreview } from "@/components/sections/BriefingPreview";
import { Features } from "@/components/sections/Features";
import { Trust } from "@/components/sections/Trust";
import { SubscribeForm } from "@/components/sections/SubscribeForm";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Problem />
        <Solution />
        <BriefingPreview />
        <Features />
        <Trust />
        <SubscribeForm />
        <FAQ />
      </main>
      <Footer />
      <FloatingAppCTA />
    </>
  );
}
