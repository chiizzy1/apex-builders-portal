import { Button } from "@/components/ui/button";

import { Logo } from "@/components/ui/Logo";

export function SiteHeader() {
  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 w-full">
      <div className="w-full max-w-5xl bg-slate-lighter/80 backdrop-blur-md border border-white/5 rounded-full px-6 py-3 shadow-2xl flex items-center justify-between">
        <Logo />

        <div className="hidden md:flex items-center gap-8">
          <a className="text-sm font-medium text-gray-300 hover:text-white transition-colors" href="#features">
            Features
          </a>
          <a className="text-sm font-medium text-gray-300 hover:text-white transition-colors" href="#solutions">
            Solutions
          </a>
          <a className="text-sm font-medium text-gray-300 hover:text-white transition-colors" href="/pricing">
            Pricing
          </a>
          <a className="text-sm font-medium text-gray-300 hover:text-white transition-colors" href="/about">
            About
          </a>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:flex" asChild>
            <a href="/login">Log In</a>
          </Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </nav>
  );
}
