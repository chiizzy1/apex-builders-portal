import {
  Search,
  Bell,
  CalendarDays,
  DollarSign,
  TrendingUp,
  Building2,
  ArrowUp,
  Timer,
  Clock,
  ShieldCheck,
  CheckCircle2,
  MoreHorizontal,
  MoreVertical,
  Filter,
  Plus,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

export default function AdminDashboard() {
  return (
    <div className="max-w-[1600px] mx-auto flex flex-col gap-6">
      {/* Header Bar (Floating) */}
      <header className="w-full bg-card shadow-floating rounded-3xl px-8 py-5 flex items-center justify-between border border-white/5 sticky top-0 z-10 before:absolute before:inset-0 before:bg-card/70 before:backdrop-blur-xl before:rounded-3xl before:-z-10 bg-transparent">
        <div className="flex flex-col relative z-20">
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Hello, <span className="text-primary">James!</span>
          </h1>
          <p className="text-muted-foreground text-sm font-medium mt-0.5">Welcome back to Apex Builders Command.</p>
        </div>
        <div className="flex items-center gap-6 relative z-20">
          {/* Search Bar */}
          <div className="relative group hidden md:block">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="size-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
            </div>
            <input
              className="bg-[#1A1D24] text-white text-sm rounded-full pl-12 pr-4 py-3 w-80 border border-transparent focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all placeholder:text-slate-600 shadow-inner"
              placeholder="Search projects, invoices, or teams..."
              type="text"
            />
          </div>
          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="w-11 h-11 rounded-full bg-[#1A1D24] hover:bg-white/5 flex items-center justify-center text-white transition-colors relative">
              <Bell className="size-5" />
              <span className="absolute top-3 right-3 w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            </button>
            <button className="w-11 h-11 rounded-full bg-[#1A1D24] hover:bg-white/5 flex items-center justify-center text-white transition-colors">
              <CalendarDays className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {/* KPI Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* KPI 1: Revenue */}
        <div className="bg-card shadow-floating rounded-3xl p-6 border border-white/5 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <DollarSign className="size-24 text-primary drop-shadow-[0_0_8px_rgba(13,242,242,0.6)]" />
          </div>
          <div className="flex flex-col h-full justify-between relative z-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-primary/10 rounded-xl">
                <TrendingUp className="size-5 text-primary drop-shadow-[0_0_8px_rgba(13,242,242,0.6)]" />
              </div>
              <span className="text-muted-foreground font-medium text-sm">Total Revenue</span>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white tracking-tight mt-2 mb-1">$4.2M</h2>
              <div className="flex items-center gap-1 text-success text-sm font-semibold bg-success/10 px-2 py-1 rounded-lg w-fit">
                <TrendingUp className="size-4" />
                <span>+12.5%</span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-primary to-transparent"></div>
        </div>

        {/* KPI 2: Active Projects */}
        <div className="bg-card shadow-floating rounded-3xl p-6 border border-white/5 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <Building2 className="size-24 text-accent drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]" />
          </div>
          <div className="flex flex-col h-full justify-between relative z-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-accent/10 rounded-xl">
                <Building2 className="size-5 text-accent drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]" />
              </div>
              <span className="text-muted-foreground font-medium text-sm">Active Projects</span>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white tracking-tight mt-2 mb-1">14</h2>
              <div className="flex items-center gap-1 text-success text-sm font-semibold bg-success/10 px-2 py-1 rounded-lg w-fit">
                <ArrowUp className="size-4" />
                <span>+2 New</span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-accent to-transparent"></div>
        </div>

        {/* KPI 3: Time Logged */}
        <div className="bg-card shadow-floating rounded-3xl p-6 border border-white/5 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <Clock className="size-24 text-secondary drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
          </div>
          <div className="flex flex-col h-full justify-between relative z-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-secondary/10 rounded-xl">
                <Timer className="size-5 text-secondary drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
              </div>
              <span className="text-muted-foreground font-medium text-sm">Time Logged</span>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white tracking-tight mt-2 mb-1">
                842<span className="text-2xl text-muted-foreground font-medium ml-1">h</span>
              </h2>
              <div className="flex items-center gap-1 text-muted-foreground text-sm font-medium bg-white/5 px-2 py-1 rounded-lg w-fit">
                <span>This Week</span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-secondary to-transparent"></div>
        </div>

        {/* KPI 4: Safety Score */}
        <div className="bg-card shadow-floating rounded-3xl p-6 border border-white/5 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <ShieldCheck className="size-24 text-success drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
          </div>
          <div className="flex flex-col h-full justify-between relative z-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-success/10 rounded-xl">
                <ShieldCheck className="size-5 text-success drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
              </div>
              <span className="text-muted-foreground font-medium text-sm">Safety Score</span>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white tracking-tight mt-2 mb-1">98%</h2>
              <div className="flex items-center gap-1 text-success text-sm font-semibold bg-success/10 px-2 py-1 rounded-lg w-fit">
                <CheckCircle2 className="size-4" />
                <span>Optimal</span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-success to-transparent"></div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:min-h-[420px]">
        {/* Revenue Chart (Wide) */}
        <div className="lg:col-span-2 bg-card shadow-floating rounded-3xl p-8 border border-white/5 flex flex-col justify-between relative">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-xl font-bold text-white">Revenue Dynamics</h3>
              <p className="text-muted-foreground text-sm mt-1">Jan 01 - Dec 31, 2023</p>
            </div>
            <button className="p-2 rounded-xl bg-[#1A1D24] text-muted-foreground hover:text-white transition-colors">
              <MoreHorizontal className="size-5" />
            </button>
          </div>
          {/* Chart Graphic (SVG Implementation for Control) */}
          <div className="relative w-full h-full min-h-[250px] flex items-end px-2 pb-4">
            {/* Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
              <div className="border-b border-dashed border-slate-500 w-full h-0"></div>
              <div className="border-b border-dashed border-slate-500 w-full h-0"></div>
              <div className="border-b border-dashed border-slate-500 w-full h-0"></div>
              <div className="border-b border-dashed border-slate-500 w-full h-0"></div>
              <div className="border-b border-slate-500 w-full h-0"></div>
            </div>
            {/* Smooth Curve Area Chart */}
            <svg className="w-full h-full overflow-visible z-10" preserveAspectRatio="none" viewBox="0 0 800 300">
              <defs>
                <linearGradient id="gradientChart" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#0df2f2" stopOpacity="0.4"></stop>
                  <stop offset="100%" stopColor="#0df2f2" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
              {/* Path for Fill */}
              <path
                d="M0,250 C100,240 150,150 250,180 C350,210 400,100 500,80 C600,60 650,120 750,50 L800,20 V300 H0 Z"
                fill="url(#gradientChart)"
              ></path>
              {/* Path for Line */}
              <path
                className="drop-shadow-[0_0_10px_rgba(13,242,242,0.5)]"
                d="M0,250 C100,240 150,150 250,180 C350,210 400,100 500,80 C600,60 650,120 750,50 L800,20"
                fill="none"
                stroke="#0df2f2"
                strokeLinecap="round"
                strokeWidth="4"
              ></path>
              {/* Data Points */}
              <circle cx="250" cy="180" fill="#13151A" r="6" stroke="#0df2f2" strokeWidth="3"></circle>
              <circle cx="500" cy="80" fill="#13151A" r="6" stroke="#0df2f2" strokeWidth="3"></circle>
              <circle cx="750" cy="50" fill="#13151A" r="6" stroke="#0df2f2" strokeWidth="3"></circle>
            </svg>
            {/* Tooltip Fake */}
            <div
              className="absolute top-[20%] right-[15%] bg-[#1A1D24] border border-primary/30 p-3 rounded-xl shadow-xl flex flex-col gap-1 z-20 animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              <span className="text-xs text-muted-foreground">Net Income</span>
              <span className="text-white font-bold">$842,000</span>
            </div>
          </div>
          {/* X-Axis Labels */}
          <div className="flex justify-between text-xs text-muted-foreground mt-2 px-1">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
            <span>Sep</span>
            <span>Oct</span>
            <span>Nov</span>
            <span>Dec</span>
          </div>
        </div>

        {/* Resource Allocation (Donut) */}
        <div className="bg-card shadow-floating rounded-3xl p-8 border border-white/5 flex flex-col items-center justify-between">
          <div className="w-full flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-white">Resource Allocation</h3>
            <button className="text-muted-foreground hover:text-white">
              <MoreVertical className="size-5" />
            </button>
          </div>
          {/* Donut Chart Visualization */}
          <div className="relative w-48 h-48 flex items-center justify-center my-4">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
              {/* Background Circle */}
              <path
                className="text-[#1A1D24]"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
              ></path>
              {/* Segment 1: Engineering (Cyan) */}
              <path
                className="text-primary drop-shadow-[0_0_5px_rgba(13,242,242,0.5)]"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeDasharray="40, 100"
                strokeLinecap="round"
                strokeWidth="4"
              ></path>
              {/* Segment 2: Labor (Accent Orange) */}
              <path
                className="text-accent drop-shadow-[0_0_5px_rgba(249,115,22,0.5)]"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeDasharray="30, 100"
                strokeDashoffset="-45"
                strokeLinecap="round"
                strokeWidth="4"
              ></path>
              {/* Segment 3: Materials (Purple) */}
              <path
                className="text-secondary drop-shadow-[0_0_5px_rgba(168,85,247,0.5)]"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeDasharray="20, 100"
                strokeDashoffset="-80"
                strokeLinecap="round"
                strokeWidth="4"
              ></path>
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-3xl font-bold text-white">100%</span>
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Allocated</span>
            </div>
          </div>
          {/* Legend */}
          <div className="w-full flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary shadow-[0_0_5px_#0df2f2]"></span>
                <span className="text-sm text-muted-foreground">Engineering</span>
              </div>
              <span className="text-sm font-bold text-white">40%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-accent shadow-[0_0_5px_#f97316]"></span>
                <span className="text-sm text-muted-foreground">Labor</span>
              </div>
              <span className="text-sm font-bold text-white">30%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-secondary shadow-[0_0_5px_#a855f7]"></span>
                <span className="text-sm text-muted-foreground">Materials</span>
              </div>
              <span className="text-sm font-bold text-white">20%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Projects Table Card */}
      <div className="bg-card shadow-floating rounded-3xl p-8 border border-white/5 mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h3 className="text-xl font-bold text-white">Recent Projects</h3>
            <p className="text-muted-foreground text-sm mt-1">Status overview of ongoing sites.</p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-xl bg-[#1A1D24] text-muted-foreground text-sm font-medium hover:bg-white/5 hover:text-white transition-colors flex items-center gap-2">
              <Filter className="size-4" /> Filter
            </button>
            <button className="px-5 py-2 rounded-xl bg-primary hover:bg-primary-dark text-background text-sm font-bold shadow-glow-sm transition-all transform active:scale-95 flex items-center gap-2">
              <Plus className="size-4" /> New Project
            </button>
          </div>
        </div>
        {/* Custom Table Layout */}
        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[800px] border-collapse">
            <thead>
              <tr className="text-left border-b border-white/5">
                <th className="pb-4 pl-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider w-[35%]">
                  Project Name
                </th>
                <th className="pb-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider w-[15%]">Status</th>
                <th className="pb-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider w-[25%]">Progress</th>
                <th className="pb-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider w-[15%]">Team</th>
                <th className="pb-4 pr-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider text-right w-[10%]">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-white">
              {/* Row 1 */}
              <tr className="group hover:bg-white/2 transition-colors border-b border-white/5 last:border-0">
                <td className="py-5 pl-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-12 rounded-lg overflow-hidden relative shadow-md shrink-0">
                      <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeeUTc1prQXnXanthihlcwFhHsMYx3JYUppvU96sM5XdlchX-lOqaTooxXNS_9xBI5be0xBqq-an7xVRjLptU3CUtL_URUiLYbagrteo-MfH0spEf7LU3bPVwjQc7B4ch7x0C7XaNQYT9IbIkbfLz38PJLA9-pMvJkZN3M_N6r4DCv8OczuqdN5Ij8ZBdcjYZW_-b8X8G-hhwUPjs0gTmnmEyoQxI-LGBCm7qxtjkBS9hVQ4cSnjQ49wO6ao4BOSbRAGOmobbX0IA"
                        alt="Skyline Tower Thumbnail"
                        width={64}
                        height={48}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-base">Skyline Tower</span>
                      <span className="text-xs text-muted-foreground">Downtown District, NY</span>
                    </div>
                  </div>
                </td>
                <td className="py-5">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20 shadow-[0_0_10px_rgba(13,242,242,0.15)]">
                    In Progress
                  </span>
                </td>
                <td className="py-5 pr-8">
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-muted-foreground">Phase 3/4</span>
                      <span className="text-primary">75%</span>
                    </div>
                    <div className="w-full h-2 bg-[#1A1D24] rounded-full overflow-hidden">
                      <div className="h-full bg-linear-to-r from-primary to-blue-500 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                </td>
                <td className="py-5">
                  <div className="flex -space-x-3">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdi1hxFpozT91tNUHE0sId5ghuP-lK6iCnl-0HnfVp5pRzuq4JcXOEMDQgbUxt2eBKkMJZq6RGOpvh_VQx9AcLolTJszagNwmWwcHNqHRVNz7cDj8NAQdrD9UoF-zqzCCciFUsyYIANbn1QE1LeJqL3lUjwLHRiEg-vRKKFhmixKJiZFL7FzP8C4SIYMqihNcaIxD0WFXBvm6jIcRtesuJV87P0bhNj6CVK79xI8dTfKm65rsZ-pWkB6vE7Sl2JS4Om7Sr1LU0Kzg"
                      alt="Team member"
                      width={36}
                      height={36}
                      className="w-9 h-9 rounded-full border-2 border-card object-cover"
                    />
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5uCp3MJzAzlbmwJ78Vc4vp-Q_WzgYzplU_G_A9dzDsO2kx90GBcuV1pNi_DQVb1EnikKxN2jf8iypFM2bVHGg6YBnL3KFCWYPR6_tc7keXbSQ82HOY-bVxByW2jlyrGjqihb3b9SUvi0HYQ1Os9nLLrHq2zp0fjEDLj0I1dvcDZdgCmXhMkkCYIv_3Mw2XmsyPxI34NjSAuDMDRoPRu6WE6oNpl9TvzHZj0AdYF2KGs1mTV4PNrhyyaOTSOxm5qYKxxKD1Xeha8U"
                      alt="Team member"
                      width={36}
                      height={36}
                      className="w-9 h-9 rounded-full border-2 border-card object-cover"
                    />
                    <div className="w-9 h-9 rounded-full border-2 border-card bg-[#334155] flex items-center justify-center text-[10px] font-bold text-white relative z-10">
                      +3
                    </div>
                  </div>
                </td>
                <td className="py-5 pr-4 text-right">
                  <button className="p-2 rounded-lg hover:bg-white/10 text-muted-foreground hover:text-white transition-colors inline-flex">
                    <ChevronRight className="size-5" />
                  </button>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="group hover:bg-white/2 transition-colors border-b border-white/5 last:border-0">
                <td className="py-5 pl-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-12 rounded-lg overflow-hidden relative shadow-md shrink-0">
                      <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdS4nDe-22pwyb7rwrAb7nkcvtkPfpW9iCoZqYbw0yTKi_Gx9SqTIWWXRblSS6hkCJfBx_wv8qVXRhq5M-0NLMIEmAwF83RofzFmrETKQytwqA0oxATk2dn0iCrSlE8IFcv2eJBJ3b25YVfmgCtROIU9G2DQKcWK4eSAVZmm_qukkA_Xynwez7PG49AZmPUV8_kaZiYtCh6RV6o9IbMQVqUqEapE5wqI0a1cwa5ggZV6w8w41sHOAKmmtVA9a089Vylk9Gh7YlPkc"
                        alt="Riverfront Park Thumbnail"
                        width={64}
                        height={48}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-base">Riverfront Park</span>
                      <span className="text-xs text-muted-foreground">Westside, CA</span>
                    </div>
                  </div>
                </td>
                <td className="py-5">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-success/10 text-success border border-success/20 shadow-[0_0_10px_rgba(16,185,129,0.15)]">
                    Completed
                  </span>
                </td>
                <td className="py-5 pr-8">
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-muted-foreground">Final Review</span>
                      <span className="text-success">100%</span>
                    </div>
                    <div className="w-full h-2 bg-[#1A1D24] rounded-full overflow-hidden">
                      <div className="h-full bg-success rounded-full" style={{ width: "100%" }}></div>
                    </div>
                  </div>
                </td>
                <td className="py-5">
                  <div className="flex -space-x-3">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBa__sPCmtPaFa7mRAWXUj0ptMOBroVi-69kFT-YVfJYFV53yu-H2A1sWv7iJkfXLIQ0eI8Pp5TpX2VJi1Tw1PGoBLlyDo3cq2Gz2mEFS7RDH9gllx5uPUZj58UIyUuBw1q-HR3x7ljjEPKA0S-G3iOH7ZV6E-lcNAvV5WlzmC5T8rpOZCBRx92pvAtD4cxeHXtNx3ExJcOSMGnIBYOkrVDZ8gsNiP65geTitS72OQYz-8_KHdChSwMDuHcDLgoMjMIP-F1fCRoaG8"
                      alt="Team member"
                      width={36}
                      height={36}
                      className="w-9 h-9 rounded-full border-2 border-card object-cover"
                    />
                    <div className="w-9 h-9 rounded-full border-2 border-card bg-[#334155] flex items-center justify-center text-[10px] font-bold text-white relative z-10">
                      +1
                    </div>
                  </div>
                </td>
                <td className="py-5 pr-4 text-right">
                  <button className="p-2 rounded-lg hover:bg-white/10 text-muted-foreground hover:text-white transition-colors inline-flex">
                    <ChevronRight className="size-5" />
                  </button>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="group hover:bg-white/2 transition-colors border-b border-white/5 last:border-0">
                <td className="py-5 pl-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-12 rounded-lg overflow-hidden relative shadow-md shrink-0">
                      <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwOvKQPrXtwlKCoUV10ProrIlayZRH9OryLyErdqnWN8eMrpzTH_RsZ318ZABWdY1yRFaAvRsM3CihkI4VKEmiGiL4noZ8QP3Mqr3J4WLPvNyZ_xrIFN4yw2B8duyH7Y2h4QgLWZEgPJKwG4NaFNYKmgY-7sC4TBr4Eyg2Ktj0gQIsbnfGempBD1hvdzdmODdKh_Gr-e7JRMydMA8lL3hNKDwdkZW3OFjnwMgeTY7h1AHiczo5ZVaXy0rEiE894QMZY2zJ5soByiQ"
                        alt="Urban Lofts Thumbnail"
                        width={64}
                        height={48}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-base">Urban Lofts</span>
                      <span className="text-xs text-admin-muted">Midtown, TX</span>
                    </div>
                  </div>
                </td>
                <td className="py-5">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-admin-accent/10 text-admin-accent border border-admin-accent/20 shadow-[0_0_10px_rgba(249,115,22,0.15)]">
                    Delayed
                  </span>
                </td>
                <td className="py-5 pr-8">
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-admin-muted">Awaiting Permit</span>
                      <span className="text-admin-accent">45%</span>
                    </div>
                    <div className="w-full h-2 bg-[#1A1D24] rounded-full overflow-hidden">
                      <div className="h-full bg-admin-accent rounded-full" style={{ width: "45%" }}></div>
                    </div>
                  </div>
                </td>
                <td className="py-5">
                  <div className="flex -space-x-3">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUHurBniITG0Ez-Z2_Ne8a9PLh_1oCK-sVa6oKyMSeWGgOHG9Q07CVQzykW3CFymdq7ia-5LPaTPplx5YPsFA9i-zrMwMSjCuRFIj5lQMDDFDJdFRF2QzTIzxZgSuZk3zB71njF9AZooZy3dSrAfO9GFtIIdjvG0muHj4DNr2BInbGCLqge1xvSvEuZudTtoNpkKIA9GIP0-EXNO7bL3Hq9nl22_HO5XMrICzy4f_8wNfYFJMv4Nf9xrDXr7OkJM2QLrOmB1NKPz4"
                      alt="Team member"
                      width={36}
                      height={36}
                      className="w-9 h-9 rounded-full border-2 border-admin-card object-cover"
                    />
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLOxcpqrmRQ2OHzrQReoY9AHS-ZRRQETgt8TjNVWWDyWWpYBAL8lxw7PyJnHY-D5Ju8_-4b0RZuONQSKiD8gkIb7aVIWluIWgOT3UJHx0hEfMc0flWzAslqWNrAPdvI8YNEABawezjLjPk1QAdaMv_NqyRacCGzVTaQqg9Yo8VDhIzs_D1IRvXBfFjHtgmv9qjWxVXeyJDH_KgTQdo5fc54XtP4a_i1HQyCkbDdk1XZx03_heSjiAiGr18iESvWcF5QWFX2P5B5XE"
                      alt="Team member"
                      width={36}
                      height={36}
                      className="w-9 h-9 rounded-full border-2 border-admin-card object-cover"
                    />
                  </div>
                </td>
                <td className="py-5 pr-4 text-right">
                  <button className="p-2 rounded-lg hover:bg-white/10 text-admin-muted hover:text-white transition-colors inline-flex">
                    <ChevronRight className="size-5" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
