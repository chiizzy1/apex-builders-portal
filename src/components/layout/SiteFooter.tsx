import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Share2 } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="w-full px-4 md:px-8 pb-8 flex justify-center relative z-20">
      <div className="w-full max-w-6xl rounded-[2.5rem] bg-slate-lighter border border-white/5 overflow-hidden relative shadow-2xl">
        {/* Decorative gradient splash */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-linear-to-l from-violet-900/20 to-transparent pointer-events-none"></div>

        <div className="flex flex-col md:flex-row items-center justify-between p-10 md:p-16 gap-10 relative z-10">
          <div className="text-center md:text-left max-w-md">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to modernize?</h2>
            <p className="text-gray-400 text-lg">Join 5,000+ construction companies building smarter with Apex.</p>
          </div>

          <div className="w-full max-w-md">
            <form className="flex flex-col sm:flex-row gap-2">
              <div className="relative grow">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 size-5" />
                <Input
                  className="w-full bg-slate-900/50 border-white/10 rounded-full h-14 pl-12 pr-4 text-white placeholder-gray-500 focus-visible:ring-primary focus-visible:border-transparent transition-all"
                  placeholder="Enter your work email"
                  required
                  type="email"
                />
              </div>
              <Button type="button" size="lg" className="whitespace-nowrap h-14 px-8">
                Get Access
              </Button>
            </form>
            <p className="text-xs text-gray-600 mt-4 text-center md:text-left">No credit card required. 14-day free trial.</p>
          </div>
        </div>

        {/* Footer Bottom Links */}
        <div className="border-t border-white/5 p-6 md:px-16 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <div>© 2023 Apex Builders Inc.</div>
          <div className="flex gap-6">
            <a className="hover:text-white transition-colors" href="#">
              Privacy
            </a>
            <a className="hover:text-white transition-colors" href="#">
              Terms
            </a>
            <a className="hover:text-white transition-colors" href="#">
              Support
            </a>
          </div>
          <div className="flex gap-4">
            <a className="hover:text-primary transition-colors" href="#">
              <Share2 className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
