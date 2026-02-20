import React from "react";
import { PillButton } from "@/components/ui/PillButton";

export default function ClientSchedulePage() {
  return (
    <div className="flex-1 flex justify-center py-10 px-4 md:px-8 lg:px-12 w-full">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .timeline-line {
            background: linear-gradient(180deg, rgba(13,242,242,0) 0%, rgba(55,65,81,1) 15%, rgba(55,65,81,1) 85%, rgba(55,65,81,0) 100%);
        }
        .glow-point {
            box-shadow: 0 0 15px 2px rgba(13, 242, 242, 0.6);
        }
        .pulse-ring {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 2px solid #0df2f2;
            animation: pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
        }
        @keyframes pulse-ring {
            0% { transform: scale(0.8); opacity: 1; }
            100% { transform: scale(2.5); opacity: 0; }
        }
      `,
        }}
      />

      <div className="flex flex-col w-full max-w-[1000px]">
        {/* Page Title Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-[#0df2f2] font-medium text-sm tracking-wider uppercase mb-1">
              <span className="size-2 rounded-full bg-[#0df2f2] shadow-[0_0_10px_rgba(13,242,242,0.5)]"></span>
              Project Dashboard
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              Oceanview Estate <br />
              <span className="text-slate-500">Renovation</span>
            </h1>
            <p className="text-slate-400 mt-2 text-lg">Timeline & Milestones · 65% Completed</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex flex-col items-end mr-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Overall Progress</span>
              <div className="w-48 h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#0df2f2] to-blue-500 w-[65%] shadow-[0_0_10px_rgba(13,242,242,0.5)]"></div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex h-12 items-center justify-between gap-x-3 rounded-full bg-[#21242D] border border-white/5 pl-5 pr-3 hover:border-[#0df2f2]/50 transition-colors shadow-lg">
                <div className="flex flex-col items-start">
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Phase Filter</span>
                  <span className="text-white text-sm font-bold">All Phases</span>
                </div>
                <div className="size-8 rounded-full bg-slate-800 flex items-center justify-center text-white group-hover:bg-[#0df2f2] group-hover:text-[#13151A] transition-colors">
                  <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr] gap-x-4 md:gap-x-8">
          {/* Vertical Line */}
          <div className="absolute left-[29px] md:left-[39px] top-4 bottom-0 w-[2px] timeline-line"></div>

          {/* Item 1: Completed */}
          <div className="relative z-10 flex flex-col items-center pt-8">
            <div className="size-4 rounded-full bg-green-500 ring-4 ring-[#13151A] shadow-[0_0_15px_rgba(34,197,94,0.5)]"></div>
          </div>
          <div className="pb-12 pt-2">
            <div className="group relative bg-[#21242D] rounded-3xl p-6 md:p-8 shadow-[0_20px_40px_-5px_rgba(0,0,0,0.4)] border border-white/5 hover:border-green-500/30 transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                    Foundation Pour
                  </h3>
                  <p className="text-slate-400 mt-1">Completed on Oct 12</p>
                </div>
                <span className="inline-flex h-8 items-center rounded-full bg-green-500/10 px-4 text-xs font-bold text-green-400 uppercase tracking-wide border border-green-500/20">
                  <span className="material-symbols-outlined text-sm mr-1">check_circle</span>
                  Completed
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6">
                Concrete foundation poured and cured. Waterproofing membrane installed and inspected. Site grading adjusted for
                proper drainage.
              </p>
              <div className="flex gap-2">
                <div className="h-16 w-24 rounded-lg bg-slate-800 overflow-hidden relative group/img cursor-pointer">
                  <img
                    className="h-full w-full object-cover opacity-70 group-hover/img:opacity-100 transition-opacity"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkkYhhNT340rlHQ8bCdwaVQ9gdFzKibXhcer9-scFRRz7oGXT7Vcg7rpjqnZnWKUC5Yl4wgSh0yd6B81QuekFohiaPQ4U_fwvQ9A__ugfgSNkPT7dArk5MTt_HbL4KDaKYBJkgNYwYVV979qqc-Ss1JTknLqyL5_OzgbQ66XNdISlH_LalUrl_6l8YcsYK1DOs7oXQMDUvo8AQkHqpz7rVN28pXiwVMd671oG_z9Ir3wxLfzn46hprW6nCzMbh5Hex_LqAhr43r3E"
                    alt="Foundation"
                  />
                </div>
                <div className="h-16 w-24 rounded-lg bg-slate-800 overflow-hidden relative group/img cursor-pointer">
                  <img
                    className="h-full w-full object-cover opacity-70 group-hover/img:opacity-100 transition-opacity"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVU8ggvwWdRJlNfmSZT2S8YMQOXPs7lKOKU5-kXf2PS1yoSiUcdPxhTSiLa3lqfaUsp79rDi7id1XmgFlsOh4nGy_FxvhhG6rYGM3mKcYz81numiFAwjFkAUb9CmQFZN4vRx6TzSHEYjquw1k_QKGI1pC5ffICkdceYmR1uK-exs5oS-5Q-IA_nkneq-pF9uupnDOzg3AL_bMR3nnUYAuo0ep5TZUwmYgngC8IIipYAUeG3pb5pG6B3pUBI8bjWPalDPgSn6kmcik"
                    alt="Materials"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Item 2: Completed */}
          <div className="relative z-10 flex flex-col items-center pt-8">
            <div className="size-4 rounded-full bg-green-500 ring-4 ring-[#13151A] shadow-[0_0_15px_rgba(34,197,94,0.5)]"></div>
          </div>
          <div className="pb-12 pt-2">
            <div className="group relative bg-[#21242D] rounded-3xl p-6 md:p-8 shadow-[0_20px_40px_-5px_rgba(0,0,0,0.4)] border border-white/5 hover:border-green-500/30 transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                    Framing & Structural
                  </h3>
                  <p className="text-slate-400 mt-1">Completed on Nov 05</p>
                </div>
                <span className="inline-flex h-8 items-center rounded-full bg-green-500/10 px-4 text-xs font-bold text-green-400 uppercase tracking-wide border border-green-500/20">
                  <span className="material-symbols-outlined text-sm mr-1">check_circle</span>
                  Completed
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Structural steel beams placed. Wood framing for all levels completed. Roof trusses installed and sheathed.
              </p>
            </div>
          </div>

          {/* Item 3: In Progress (Active) */}
          <div className="relative z-10 flex flex-col items-center pt-8">
            <div className="relative flex items-center justify-center">
              <div className="pulse-ring"></div>
              <div className="size-5 rounded-full bg-[#0df2f2] ring-4 ring-[#13151A] glow-point z-10"></div>
            </div>
            <div className="absolute h-full w-[2px] bg-[#0df2f2]/20 top-8 -z-10"></div>
          </div>
          <div className="pb-12 pt-2">
            <div className="group relative bg-gradient-to-br from-[#21242D] to-[#1A202C] rounded-3xl p-1 shadow-[0_0_10px_rgba(13,242,242,0.5)] transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-[#0df2f2]/5 rounded-3xl z-0"></div>
              <div className="relative z-10 bg-[#21242D] rounded-[22px] p-6 md:p-8 h-full">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0df2f2] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0df2f2]"></span>
                      </span>
                      <span className="text-xs font-bold text-[#0df2f2] uppercase tracking-widest">Active Phase</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-white">Electrical & Plumbing Rough-In</h3>
                    <p className="text-slate-400 mt-1">Started Nov 20</p>
                  </div>
                  <span className="inline-flex h-9 items-center rounded-full bg-[#0df2f2]/10 px-5 text-xs font-bold text-[#0df2f2] uppercase tracking-wide border border-[#0df2f2]/20 shadow-[0_0_10px_rgba(13,242,242,0.2)]">
                    <span className="material-symbols-outlined text-base mr-2 animate-spin-slow">sync</span>
                    In Progress
                  </span>
                </div>
                <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                  Installing main electrical panels and running wiring throughout the second floor. Plumbing rough-ins for the
                  master bath are 80% complete. HVAC ductwork installation scheduled for next Tuesday.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-white/5 flex items-center gap-3">
                    <div className="size-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">
                      <span className="material-symbols-outlined">bolt</span>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-bold">Electrical</p>
                      <p className="text-white font-semibold">45% Done</p>
                    </div>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-white/5 flex items-center gap-3">
                    <div className="size-10 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                      <span className="material-symbols-outlined">water_drop</span>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-bold">Plumbing</p>
                      <p className="text-white font-semibold">80% Done</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Item 4: Delayed */}
          <div className="relative z-10 flex flex-col items-center pt-8">
            <div className="size-4 rounded-full bg-red-500 ring-4 ring-[#13151A] shadow-[0_0_15px_rgba(239,68,68,0.5)]"></div>
          </div>
          <div className="pb-12 pt-2">
            <div className="group relative bg-[#21242D] rounded-3xl p-6 md:p-8 shadow-[0_20px_40px_-5px_rgba(0,0,0,0.4)] border border-white/5 hover:border-red-500/30 transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
                    Custom Cabinetry Installation
                  </h3>
                  <p className="text-slate-400 mt-1">Scheduled: Dec 15</p>
                </div>
                <span className="inline-flex h-8 items-center rounded-full bg-red-500/10 px-4 text-xs font-bold text-red-400 uppercase tracking-wide border border-red-500/20">
                  <span className="material-symbols-outlined text-sm mr-1">warning</span>
                  Delayed
                </span>
              </div>
              <div className="bg-red-500/5 border border-red-500/10 rounded-xl p-4 mb-2 flex items-start gap-3">
                <span className="material-symbols-outlined text-red-400 mt-0.5">inventory_2</span>
                <div>
                  <p className="text-red-200 text-sm font-bold mb-1">Supply Chain Issue</p>
                  <p className="text-red-200/70 text-sm">
                    Oak veneer shipment delayed at customs. Expected resolution by Dec 22nd. Installation team rescheduled.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Item 5: Upcoming */}
          <div className="relative z-10 flex flex-col items-center pt-8">
            <div className="size-4 rounded-full bg-slate-700 ring-4 ring-[#13151A] border-2 border-slate-500"></div>
          </div>
          <div className="pb-12 pt-2">
            <div className="group relative bg-[#21242D]/50 rounded-3xl p-6 md:p-8 shadow-none border border-white/5 opacity-70 hover:opacity-100 hover:bg-[#21242D] transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">Final Walkthrough</h3>
                  <p className="text-slate-500 mt-1">Est. Jan 20</p>
                </div>
                <span className="inline-flex h-8 items-center rounded-full bg-slate-700/30 px-4 text-xs font-bold text-slate-400 uppercase tracking-wide border border-white/5">
                  <span className="material-symbols-outlined text-sm mr-1">calendar_month</span>
                  Upcoming
                </span>
              </div>
              <p className="text-slate-500 leading-relaxed">
                Client inspection of all finished works. Review of punch list items. Handover of keys and warranty documentation.
              </p>
            </div>
          </div>
        </div>
        {/* End Timeline */}
      </div>
    </div>
  );
}
