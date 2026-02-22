import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Hero } from "@/components/marketing/Hero";
import { Features } from "@/components/marketing/Features";
import { SocialProof } from "@/components/marketing/SocialProof";
import { ProblemStatement } from "@/components/marketing/ProblemStatement";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { Testimonials } from "@/components/marketing/Testimonials";
import { FAQ } from "@/components/marketing/FAQ";
import { ChatWidget } from "@/components/marketing/ChatWidget";

export default function LandingPage() {
  return (
    <div className="bg-slate-deep text-slate-100 font-sans antialiased selection:bg-primary selection:text-white overflow-x-hidden min-h-screen flex flex-col items-center">
      {/* Ambient Glow Background */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-hero-gradient z-0 pointer-events-none"></div>

      <SiteHeader />

      <main className="relative z-10 flex flex-col items-center w-full max-w-[1400px]">
        {/* 1. The Hook */}
        <Hero />
        <SocialProof />

        {/* 2. The Setup / Agitation */}
        <ProblemStatement />

        {/* 3. The Solution / Workflow */}
        <HowItWorks />

        {/* Deep Dive into Features (Optional but good for technical buyers) */}
        <Features />

        {/* 4. The Proof */}
        <Testimonials />

        {/* 5. Objection Handling */}
        <FAQ />
      </main>

      <SiteFooter />

      {/* Global AI Concierge Widget */}
      <ChatWidget />
    </div>
  );
}
