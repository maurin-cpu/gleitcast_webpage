import { Navbar } from "@/components/Navbar";
import { FloatingAppCTA } from "@/components/FloatingAppCTA";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { BriefingPreview } from "@/components/sections/BriefingPreview";
import { Solution } from "@/components/sections/Solution";
import { Features } from "@/components/sections/Features";
import { WhyFree } from "@/components/sections/WhyFree";
import { Trust } from "@/components/sections/Trust";
import { WertPfad } from "@/components/sections/WertPfad";
import { SubscribeForm } from "@/components/sections/SubscribeForm";
import { FAQ } from "@/components/sections/FAQ";
import { BetaFeedback } from "@/components/sections/BetaFeedback";
import { Footer } from "@/components/sections/Footer";
import {
  softwareApplicationSchema,
  faqPageSchema,
  jsonLdScript,
} from "@/lib/schema";

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Problem />
        <BriefingPreview />
        <Solution />
        <Features />
        <WhyFree />
        <Trust />
        <WertPfad />
        <SubscribeForm />
        <FAQ />
        <BetaFeedback />
      </main>
      <Footer />
      <FloatingAppCTA />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(softwareApplicationSchema)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(faqPageSchema)}
      />
    </>
  );
}
