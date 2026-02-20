"use client";

import { Button } from "@/components/ui/button";
import { Mail, Lock, EyeOff, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { Suspense } from "react";

export default function LoginPage() {
  return (
    <Suspense>
      <LoginFormInner />
    </Suspense>
  );
}

function LoginFormInner() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return (
    <div className="flex min-h-screen w-full bg-background overflow-hidden relative">
      {/* LEFT SIDE: Visual & Brand (55%) */}
      <div className="hidden md:flex md:w-[55%] relative flex-col justify-between p-12 bg-slate-deep overflow-hidden">
        {/* Abstract Background */}
        <div
          className="absolute inset-0 z-0 opacity-80 pointer-events-none"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBcqy47j1PDJuDlbPvbQWUgD0CwUKLPYzGXquwovo5C9WisRIvT6kZYbtAWVSKQqJoo-ItW6KxStO4vK2XVI0wZDdyVH44XbTHHAB1gWX4RmWbGvo9gYm4nhP6pOYJ5G3rtEr84GM-yNqS8XkNlRNwdFE0Vi1-Qe5GdbCtI8QOpmZe3c90YCF9x_J4PUIK8uVgq8iQkpaR3zRttfhix-dL-RNqORB4NHf878loZ2NPjfXYNXaQXbEV4-fENFy3dPdNLFHFYgJ11d4E')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-linear-to-br from-slate-deep/90 via-slate-deep/80 to-primary/10 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-slate-deep/60"></div>
        </div>

        {/* Geometric Decor Lines */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden z-10">
          <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] border border-accent-cyan/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] border border-primary/20 rounded-full blur-[80px]"></div>
          <div className="absolute top-0 left-1/2 w-px h-full bg-linear-to-b from-transparent via-accent-cyan/20 to-transparent transform -skew-x-12"></div>
          <div className="absolute top-0 left-1/3 w-px h-full bg-linear-to-b from-transparent via-primary/20 to-transparent transform -skew-x-12"></div>
        </div>

        <div className="relative z-20 flex items-center gap-3 mb-8">
          <Logo />
        </div>

        {/* Main Copy */}
        <div className="relative z-20 max-w-lg mb-10">
          <h1 className="text-5xl font-extrabold leading-tight text-white mb-6 tracking-tight">
            Built for builders who{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-[#ffad42]">demand excellence.</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed font-medium">
            Manage complex projects with precision. The construction management platform for the modern age.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="User Avatar 1"
                className="w-10 h-10 rounded-full border-2 border-slate-deep object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmTbn1cGVNTfMMNiRrJDXqvBDioLDOHjz5KV2HaqORFcYLABaqW6ffQR2Ag31FleOxIktxzvS--K6C5n3Kk0eQGgtRMAS3_MTb4oUCHTdNVG_lKWKymbCETWVbqg-RGQWpM1WwmHCThLWwQzosWwMmZWkRyJ2lwLC2aK9WlbVkJCTFpQOa49ZLiUUFLId1AHT6p1ba6yrnskzDNpS6efEiUeOdQ-AeZv4K3P-5eGtE8AFRE2SNIeXyUu3x2ioaB_s4AYbbqIr3TnE"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="User Avatar 2"
                className="w-10 h-10 rounded-full border-2 border-slate-deep object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtNlO3vj9q56cpbPlH9TgsiyVfo4TtCnMu15-X5s_3AEbDn3mwfaCF9ZjTZD9F8C7MFjYD2LHxlmaDfKs3oipLMCDTMkR972NYyM5pvfeVDbUBYwhLyPVNE4KJQWKbvnCSx15V353cmK5d23r59rtort4dQIanOdGosBg1Uemq2IxkE-QVC2jY8iObYje0QEjk-ELGbeqFJ5er8R1RY1NJnADoEHuObbUP0b_2afaJacbZ6U8Irq99c-Hwc7veFFx6nnrCLy3igA0"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="User Avatar 3"
                className="w-10 h-10 rounded-full border-2 border-slate-deep object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBojx0MvYlvkVyJM80etkwmhEJiiDX0pK1BKWSxgUiwbvCeXql9dDP9JMNLvyNKhwrA32Qx-NmABWpHeg1Q-Y1LI2OqywoFeL_1Kcim-0C-6TWCZ7S0Dy1L5H97gqSU6Zx_Jd6bwJk5QuHt7Y5Mqjdnt7GxpKFzw4RCSZ4OILp3sln2oMaHR3a0JheIhgIEEArixIfUUBpxGN69wHkBbhFK-Ko0x8jibwSGVtzPBGyp8SWOSC_NbJcJ5cp8MDIX4asPFFFCgoZBuJ8"
              />
            </div>
            <p className="text-sm text-slate-400 font-medium">Joined by 10,000+ top engineers</p>
          </div>
        </div>

        {/* Decorative Footer */}
        <div className="relative z-20 flex justify-between items-end border-t border-white/10 pt-6">
          <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">
            System Status: <span className="text-accent-cyan ml-1">● Operational</span>
          </p>
          <p className="text-xs text-slate-500">v4.2.0 (Build 9921)</p>
        </div>
      </div>

      {/* RIGHT SIDE: Login Form (45%) */}
      <div className="w-full md:w-[45%] bg-slate-deep flex flex-col items-center justify-center p-6 md:p-12 relative z-10">
        {/* Mobile Logo */}
        <div className="md:hidden absolute top-6 left-6 flex items-center gap-2 mb-8">
          <Logo />
        </div>

        {/* Card Container */}
        <div className="w-full max-w-[480px] bg-slate-lighter rounded-[24px] shadow-card p-8 md:p-10 border border-white/5 backdrop-blur-sm relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>

          {/* Header */}
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
            <p className="text-slate-400 font-medium">Sign in to access your portal</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-4 mb-6">
              <p className="text-red-400 text-sm font-medium text-center">{error}</p>
            </div>
          )}

          {/* Form — native POST, no JS needed for auth */}
          <form className="space-y-5" method="POST" action="/api/auth/login">
            {/* Email Input */}
            <div className="space-y-2 group/input">
              <label className="text-sm font-medium text-slate-300 ml-4" htmlFor="email">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within/input:text-accent-cyan transition-colors duration-300 size-5" />
                <input
                  className="w-full bg-[#2A2E39] border border-white/10 text-white text-base rounded-full py-3.5 pl-12 pr-5 focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan placeholder-slate-500 transition-all duration-300"
                  id="email"
                  name="email"
                  placeholder="name@apexbuilders.com"
                  type="email"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2 group/input">
              <label className="text-sm font-medium text-slate-300 ml-4" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within/input:text-accent-cyan transition-colors duration-300 size-5" />
                <input
                  className="w-full bg-[#2A2E39] border border-white/10 text-white text-base rounded-full py-3.5 pl-12 pr-12 focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan placeholder-slate-500 transition-all duration-300"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  type="password"
                  required
                />
                <button
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
                  type="button"
                >
                  <EyeOff className="size-5" />
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end pt-1">
              <a className="text-sm font-medium text-primary hover:text-orange-400 transition-colors" href="#">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <Button
              className="w-full bg-linear-to-r from-primary to-[#ff9100] text-white font-bold text-lg h-14 rounded-full shadow-neon hover:shadow-neon-hover transform transition-all duration-300 mt-4 relative overflow-hidden group/btn"
              type="submit"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Sign In <ArrowRight className="size-5" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 rounded-full"></div>
            </Button>
          </form>

          {/* Card Footer */}
          <div className="mt-8 text-center">
            <p className="text-slate-400 text-sm">
              Don&apos;t have an account?
              <Link className="text-white font-semibold hover:text-accent-cyan transition-colors ml-1" href="#">
                Request Access
              </Link>
            </p>
          </div>
        </div>

        {/* Terms Footer */}
        <div className="mt-12 flex items-center gap-6 text-xs text-slate-600 font-medium">
          <Link className="hover:text-slate-400 transition-colors" href="#">
            Privacy Policy
          </Link>
          <span>•</span>
          <Link className="hover:text-slate-400 transition-colors" href="#">
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
}
