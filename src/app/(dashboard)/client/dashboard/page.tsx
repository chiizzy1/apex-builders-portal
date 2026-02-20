import { Bell, Check, Zap, PaintRoller, MoreHorizontal, ArrowRight, ImageIcon, FileUp, FileText, Download } from "lucide-react";

export default function ClientDashboard() {
  return (
    <div className="mx-auto max-w-[1440px] p-6 lg:p-10 pb-20">
      {/* Header */}
      <header className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-4xl font-extrabold text-white tracking-tight mb-2">Welcome back, Sarah</h2>
          <p className="text-slate-400">
            Here&apos;s what&apos;s happening at <span className="text-primary font-semibold">124 Maple Drive</span> today.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 rounded-full bg-[#00FFA3]/10 px-4 py-2 border border-[#00FFA3]/20 shadow-[0_0_15px_rgba(0,255,163,0.15)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FFA3] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00FFA3]"></span>
            </span>
            <span className="text-xs font-bold text-[#00FFA3] tracking-wider uppercase">In Progress</span>
          </div>
          <button className="flex items-center justify-center rounded-xl bg-[#1E2128] p-3 text-white shadow-card hover:bg-[#2A2D35] transition-colors border border-white/5">
            <Bell className="size-5" />
          </button>
        </div>
      </header>

      {/* Hero: Timeline */}
      <section className="mb-8 rounded-[24px] bg-[#1E2128] p-8 shadow-card border border-white/5 relative overflow-hidden">
        {/* Background decorative glow */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent-cyan/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="flex items-center justify-between mb-6 relative z-10">
          <h3 className="text-xl font-bold text-white">Project Timeline</h3>
          <span className="text-sm font-medium text-slate-400">
            Estimated Completion: <span className="text-white">Oct 15, 2024</span>
          </span>
        </div>
        <div className="relative z-10 w-full overflow-x-auto pb-4">
          <div className="min-w-[600px] relative">
            {/* Progress Bar Background */}
            <div className="absolute top-[28px] left-0 h-1 w-full bg-[#2A2D35] rounded-full"></div>
            {/* Active Progress */}
            <div className="absolute top-[28px] left-0 h-1 w-[60%] bg-linear-to-r from-primary to-accent-cyan rounded-full shadow-[0_0_15px_rgba(0,229,255,0.5)]"></div>

            <div className="relative flex justify-between">
              {/* Step 1: Design */}
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1E2128] border-2 border-primary text-primary shadow-neon z-10">
                  <Check className="size-6" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-white">Design Phase</p>
                  <p className="text-xs text-slate-500">Completed Mar 15</p>
                </div>
              </div>

              {/* Step 2: Foundation */}
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1E2128] border-2 border-primary text-primary shadow-neon z-10">
                  <Check className="size-6" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-white">Foundation</p>
                  <p className="text-xs text-slate-500">Completed Apr 02</p>
                </div>
              </div>

              {/* Step 3: Electrical (Active) */}
              <div className="flex flex-col items-center gap-3">
                <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#1E2128] border-2 border-accent-cyan text-accent-cyan shadow-[0_0_15px_rgba(0,229,255,0.5)] z-10">
                  <span className="absolute inset-0 rounded-full bg-accent-cyan/20 animate-pulse"></span>
                  <Zap className="size-6" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-accent-cyan">Electrical</p>
                  <p className="text-xs text-slate-400">In Progress</p>
                </div>
              </div>

              {/* Step 4: Finishing */}
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1E2128] border-2 border-[#2A2D35] text-slate-500 z-10">
                  <PaintRoller className="size-6" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-slate-500">Finishing</p>
                  <p className="text-xs text-slate-600">Pending</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Middle Row Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
        {/* Left: Budget Card */}
        <div className="rounded-[24px] bg-[#1E2128] p-8 shadow-card border border-white/5 flex flex-col justify-between h-full relative overflow-hidden group">
          {/* Hover Effect */}
          <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="flex items-start justify-between mb-8 relative z-10">
            <div>
              <p className="text-slate-400 text-sm font-medium mb-1">Total Project Budget</p>
              <h3 className="text-3xl font-bold text-white">$190,000</h3>
            </div>
            <button className="p-2 rounded-lg bg-[#2A2D35] hover:bg-primary hover:text-white transition-colors text-slate-400">
              <MoreHorizontal className="size-5" />
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
            {/* Circular Progress (SVG) */}
            <div className="relative h-40 w-40 flex-shrink-0">
              <svg className="h-full w-full -rotate-90 transform" viewBox="0 0 100 100">
                {/* Background circle */}
                <circle cx="50" cy="50" fill="transparent" r="40" stroke="#2A2D35" strokeWidth="8"></circle>
                {/* Progress circle */}
                <circle
                  className="shadow-neon drop-shadow-[0_0_8px_rgba(242,124,13,0.8)]"
                  cx="50"
                  cy="50"
                  fill="transparent"
                  r="40"
                  stroke="#ff7b00"
                  strokeDasharray="251.2"
                  strokeDashoffset="87.92"
                  strokeLinecap="round"
                  strokeWidth="8"
                ></circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-white">65%</span>
                <span className="text-xs text-slate-400 uppercase tracking-wide">Paid</span>
              </div>
            </div>

            {/* Stats & Recent Invoices */}
            <div className="flex-1 w-full">
              <div className="mb-6">
                <p className="text-sm text-slate-400 mb-1">Amount Spent</p>
                <p className="text-4xl font-extrabold text-primary tracking-tight">$124,500</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Recent Invoices</p>
                {/* Invoice 1 */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#2A2D35]/50 border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                      <FileText className="size-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">#004 - Wiring Phase 1</p>
                      <p className="text-xs text-slate-400">May 10, 2024</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-white">$5,000</span>
                </div>
                {/* Invoice 2 */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#2A2D35]/50 border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                      <FileText className="size-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">#003 - Concrete Slab</p>
                      <p className="text-xs text-slate-400">Apr 12, 2024</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-white">$12,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Photos Card */}
        <div className="rounded-[24px] bg-[#1E2128] p-8 shadow-card border border-white/5 flex flex-col h-full relative overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-white">Latest from the site</h3>
              <p className="text-sm text-slate-400">Updated 2 hours ago</p>
            </div>
            <button className="text-sm font-semibold text-primary hover:text-orange-400 flex items-center gap-1 transition-colors">
              View Gallery <ArrowRight className="size-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 h-full">
            {/* Photo 1 */}
            <div className="group relative aspect-[4/5] sm:aspect-auto overflow-hidden rounded-2xl cursor-pointer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Construction site interior framing"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_-XrlHKIut0aoFlCdWpvd6b9IKaYSI6EgYKEomTUirUU_m31ZLghjgINZ-W_l-SIl5uirIBitv2zfr1gPlzIJXvLNpIeKl6JAucVTadMVUBDCWmdvzGH7ZUhffCBj9wnoF9MUEpSel2SMGu-NRIZIqEqYGeQk7JbLmg8cdH3p3CLdTZ4x-VHP2X62fKuANCh-VAzYlx3k93vS4weGkXoOEaQ8QBI8TfwgAENYsn855c_7no-d306d6fYiyZ42JkglI_LE9kdJ3mI"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-bold text-sm">Framing</p>
                <p className="text-slate-300 text-xs">Main Hall</p>
              </div>
            </div>
            {/* Photo 2 */}
            <div className="group relative aspect-[4/5] sm:aspect-auto overflow-hidden rounded-2xl cursor-pointer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Electrician wiring panel"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNR69NsM6IWQpznEwyY71p5A2hNKU8fELGTwas5A6W27hegJiXT5jr9M1eNESF8G5h51cR8yBkd4L7xtoeNnp-Qfyu6OUnKlxtuLjg2fCx9JKwr-tGimbIMFB7_8y-rjPycUvOsfEFY4aEOVbvaR4luNN4hn0hdcTTpo4rJb_TjCJ-ejwdByMH5jWat0V92Fj9TWoOscvngZm9292Ki0Y2ZJRdWMH9xFBEH9GWbL4mBlu-t31quXiQGpKQFQCSR5QVnBw5mv-lTHQ"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-bold text-sm">Electrical</p>
                <p className="text-slate-300 text-xs">Panel Install</p>
              </div>
            </div>
            {/* Photo 3 */}
            <div className="group relative aspect-[4/5] sm:aspect-auto overflow-hidden rounded-2xl cursor-pointer">
              <div className="absolute inset-0 bg-[#2A2D35] flex items-center justify-center">
                <ImageIcon className="text-slate-500 size-10" />
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Blueprint review on site"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 relative z-10"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGdE44MmcuCYtO4N_lYptYQ9lyLM6IwzD6BSOflIn21M1-Cb0PP_RcNM_zI6P6NIMvHju3ytUVbdekLFUuJVbmICIrI5BT6O6657nYW9EdtgGIyI7qQtfeD2e3_EbB2KhCrtdsOeoaCLWYraDMgJTQMU8JEOJqWddXITRN0SNlJ8WlzUS0bBPSbPzDGC40xe7ybFSnkBS_O0JiPIzMPIxRuONBDvtEgErx8x5HCG10WR47xK2LMl3KaxKGAIBiTq1oHyKTr4uB7Fw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity z-20"></div>
              <div className="absolute bottom-4 left-4 z-30">
                <p className="text-white font-bold text-sm">Review</p>
                <p className="text-slate-300 text-xs">Site Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: Activity Feed */}
      <section className="rounded-[24px] bg-[#1E2128] p-8 shadow-card border border-white/5">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white">Recent Activity</h3>
          <button className="text-sm font-semibold text-slate-400 hover:text-white transition-colors">See All</button>
        </div>
        <div className="flex flex-col gap-6">
          {/* Activity Item 1 */}
          <div className="flex gap-4 items-start">
            <div className="mt-1 h-10 w-10 flex-shrink-0 rounded-full bg-accent-cyan/20 flex items-center justify-center text-accent-cyan border border-accent-cyan/30">
              <Zap className="size-5" />
            </div>
            <div className="flex-1 bg-[#2A2D35]/30 rounded-2xl p-4 border border-white/5 hover:bg-[#2A2D35]/50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <p className="text-sm text-slate-200">
                  <span className="font-bold text-white">Mike (Electrician)</span> posted an update
                </p>
                <span className="text-xs text-slate-500">2 hrs ago</span>
              </div>
              <p className="text-sm text-slate-400 mb-3">
                Main breaker panel has been installed and inspected. Wiring for the kitchen island is 80% complete.
              </p>
              <div className="flex gap-2">
                <span className="px-2 py-1 rounded bg-[#1E2128] text-[10px] font-bold text-accent-cyan border border-accent-cyan/20">
                  Electrical
                </span>
                <span className="px-2 py-1 rounded bg-[#1E2128] text-[10px] font-bold text-slate-400 border border-slate-700">
                  Milestone
                </span>
              </div>
            </div>
          </div>

          {/* Activity Item 2 */}
          <div className="flex gap-4 items-start">
            <div className="mt-1 h-10 w-10 flex-shrink-0 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
              <FileUp className="size-5" />
            </div>
            <div className="flex-1 bg-[#2A2D35]/30 rounded-2xl p-4 border border-white/5 hover:bg-[#2A2D35]/50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <p className="text-sm text-slate-200">
                  <span className="font-bold text-white">Admin</span> uploaded a new file
                </p>
                <span className="text-xs text-slate-500">Yesterday</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-[#1E2128] rounded-xl border border-white/5 max-w-md cursor-pointer hover:border-primary/50 transition-colors group">
                <div className="h-10 w-10 rounded bg-red-500/20 flex items-center justify-center text-red-500">
                  <FileText className="size-5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-white group-hover:text-primary transition-colors">
                    2nd Floor Blueprints_v2.pdf
                  </p>
                  <p className="text-xs text-slate-500">2.4 MB • PDF</p>
                </div>
                <Download className="size-5 text-slate-500 group-hover:text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
