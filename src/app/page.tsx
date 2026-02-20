import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Hero } from "@/components/marketing/Hero";
import { Features } from "@/components/marketing/Features";
import { SocialProof } from "@/components/marketing/SocialProof";

export default function LandingPage() {
  return (
    <div className="bg-slate-deep text-slate-100 font-sans antialiased selection:bg-primary selection:text-white overflow-x-hidden min-h-screen flex flex-col items-center">
      {/* Ambient Glow Background */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-hero-gradient z-0 pointer-events-none"></div>

      <SiteHeader />

      <main className="relative z-10 flex flex-col items-center w-full max-w-[1400px]">
        <Hero />
        <SocialProof />
        <Features />
      </main>

      <SiteFooter />
    </div>
  );
}
