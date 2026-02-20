"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, TrendingUp, Users } from "lucide-react";
import { LeadCaptureModal } from "./LeadCaptureModal";

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <section className="max-w-6xl w-full flex flex-col items-center text-center gap-8 mb-24 relative z-10 pt-32">
        {/* Hero Text */}
        <div className="flex flex-col items-center gap-6 max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary uppercase tracking-wider mb-2 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#f27c0d]"></span>
            v2.0 Now Available
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight bg-clip-text text-transparent bg-linear-to-b from-white to-gray-400 drop-shadow-sm">
            Run Your Construction <br className="hidden md:block" /> Business From{" "}
            <span className="text-white relative inline-block">
              One Place
              <svg
                className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-80"
                fill="none"
                viewBox="0 0 200 9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.00025 6.99997C25.7262 3.96347 114.938 -1.41165 198.006 2.05658"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="3"
                ></path>
              </svg>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
            The all-in-one OS for modern builders. Track assets, manage field teams, and automate reporting with enterprise-grade
            precision.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Button variant="default" size="lg" className="group" onClick={() => setIsModalOpen(true)}>
              Request a Demo
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/10 bg-white/5 hover:bg-white/10">
              <PlayCircle className="size-4 text-primary" />
              View Features
            </Button>
          </div>
        </div>

        {/* Hero Graphic (3D Tilt) */}
        <div className="perspective-[1000px] w-full mt-12 relative group">
          {/* Glow behind dashboard */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-primary/20 blur-[100px] rounded-full"></div>

          <div className="relative mx-auto max-w-5xl rounded-xl border border-white/10 bg-slate-lighter/40 backdrop-blur-sm p-2 shadow-2xl transition-transform duration-500 ease-out transform group-hover:rotate-x-0 rotate-x-10 scale-95 group-hover:scale-100">
            <div className="relative rounded-lg overflow-hidden aspect-video bg-slate-900 border border-white/5 flex items-center justify-center">
              {/* Real Screenshot Injected Here */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/admin-dashboard-mockup.png"
                alt="Admin Dashboard Mockup"
                className="w-full h-full object-cover opacity-90"
              />
            </div>

            {/* Floating UI Elements on top of dashboard image to create depth */}
            <div className="absolute top-8 left-8 w-64 bg-slate-800/90 backdrop-blur-md border border-white/10 rounded-lg p-4 shadow-xl transform transition-transform duration-500 group-hover:-translate-y-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                  <TrendingUp className="size-4" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Project Efficiency</div>
                  <div className="text-lg font-bold text-white">+24.5%</div>
                </div>
              </div>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="w-[70%] h-full bg-green-500 rounded-full"></div>
              </div>
            </div>

            <div className="absolute bottom-8 right-8 w-56 bg-slate-800/90 backdrop-blur-md border border-white/10 rounded-lg p-4 shadow-xl transform transition-transform duration-500 group-hover:translate-y-4">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs text-gray-400">Active Crew</div>
                <Users className="text-primary size-4" />
              </div>
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-slate-800"></div>
                <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-slate-800"></div>
                <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-slate-800"></div>
                <div className="w-8 h-8 rounded-full bg-primary text-slate-900 text-xs font-bold flex items-center justify-center border-2 border-slate-800">
                  +12
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadCaptureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
