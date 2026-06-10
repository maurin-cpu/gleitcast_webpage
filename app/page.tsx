import { Navbar } from "@/components/Navbar";
import { FloatingAppCTA } from "@/components/FloatingAppCTA";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Trust } from "@/components/sections/Trust";
import { SubscribeForm } from "@/components/sections/SubscribeForm";
import { FAQ } from "@/components/sections/FAQ";
import { BetaFeedback } from "@/components/sections/BetaFeedback";
import { Footer } from "@/components/sections/Footer";
import {
  softwareApplicationSchema,
  faqPageSchema,
  personSchema,
  webPageSchema,
  jsonLdScript,
} from "@/lib/schema";

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Problem />
        <HowItWorks />
        <Trust />
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(personSchema)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(webPageSchema)}
      />
    </>
  );
}
