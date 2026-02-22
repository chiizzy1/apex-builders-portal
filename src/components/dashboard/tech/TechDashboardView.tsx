"use client";

import Image from "next/image";
import {
  Package,
  Clock,
  CheckCircle,
  TrendingUp,
  MapPin,
  ChevronRight,
  QrCode,
  Search,
  Wrench,
  Settings2,
  Zap,
} from "lucide-react";
import { JobActionCard } from "@/components/tech/JobActionCard";

interface TechDashboardViewProps {
  techProfile: any;
  assignedJobs: any[];
  checkedOutAssets: any[];
  availableAssets: any[];
}

export function TechDashboardView({ techProfile, assignedJobs, checkedOutAssets, availableAssets }: TechDashboardViewProps) {
  const techName = techProfile?.full_name?.split(" ")[0] ?? "Mike";
  const activeJobsCount = assignedJobs.filter((j) => j.status === "in_progress").length;
  const scheduledJobsCount = assignedJobs.filter((j) => j.status === "scheduled").length;
  const heroJob = assignedJobs.find((j) => j.status === "in_progress") ?? assignedJobs[0] ?? null;
  const upcomingJobs = assignedJobs.filter((j) => j.status === "scheduled").slice(0, 3);
  const today = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  return (
    <>
      {/* Top Header Bar */}
      <header className="flex justify-between items-center bg-card px-8 py-4 rounded-xl shadow-floating border border-white/5 backdrop-blur-sm">
        <div className="flex flex-col">
          <h1 className="text-white text-2xl font-bold tracking-tight">Hello, {techName}!</h1>
          <p className="text-slate-400 text-sm font-medium">
            {techProfile?.skills?.length > 0 ? techProfile.skills.join(", ") : "Senior Technician"} • Active
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-muted px-4 py-2 rounded-full flex items-center gap-2 border border-white/5">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-white text-sm font-bold">
              {activeJobsCount || assignedJobs.length} Active Job{activeJobsCount !== 1 ? "s" : ""}
            </span>
          </div>
          <button className="w-10 h-10 rounded-full bg-muted hover:bg-white/10 flex items-center justify-center text-white transition-colors border border-white/5 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-primary rounded-full"></span>
          </button>
          <div className="h-8 w-px bg-white/10 mx-2"></div>
          <span className="text-slate-400 font-medium text-sm">{today}</span>
        </div>
      </header>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Assets KPI */}
        <div className="bg-card p-6 rounded-xl shadow-floating border border-white/5 group hover:border-white/10 transition-all relative overflow-hidden">
          <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all"></div>
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-muted rounded-lg text-secondary">
                <Package className="h-6 w-6" />
              </div>
              <span className="text-slate-400 font-medium">Active Assets</span>
            </div>
            <span className="text-green-500 text-sm font-bold flex items-center bg-green-500/10 px-2 py-1 rounded-full">
              {checkedOutAssets.length} <TrendingUp className="h-4 w-4 ml-0.5" />
            </span>
          </div>
          <div className="flex items-end gap-2">
            <span className="text-4xl font-extrabold text-white">{checkedOutAssets.length || 2}</span>
            <span className="text-slate-500 mb-1.5 font-medium">units</span>
          </div>
        </div>

        {/* Hours KPI */}
        <div className="bg-card p-6 rounded-xl shadow-floating border border-white/5 group hover:border-white/10 transition-all relative overflow-hidden">
          <div className="absolute -right-6 -top-6 w-24 h-24 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-all"></div>
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-muted rounded-lg text-primary">
                <Clock className="h-6 w-6" />
              </div>
              <span className="text-slate-400 font-medium">Hours Logged</span>
            </div>
            <span className="text-slate-500 text-sm font-bold flex items-center bg-muted px-2 py-1 rounded-full">This Wk</span>
          </div>
          <div className="flex items-end gap-2">
            <span className="text-4xl font-extrabold text-white">32.5</span>
            <span className="text-slate-500 mb-1.5 font-medium">hours</span>
          </div>
        </div>

        {/* Jobs KPI */}
        <div className="bg-card p-6 rounded-xl shadow-floating border border-white/5 group hover:border-white/10 transition-all relative overflow-hidden">
          <div className="absolute -right-6 -top-6 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all"></div>
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-muted rounded-lg text-purple-400">
                <CheckCircle className="h-6 w-6" />
              </div>
              <span className="text-slate-400 font-medium">Assigned Jobs</span>
            </div>
            <span className="text-secondary text-sm font-bold flex items-center bg-secondary/10 px-2 py-1 rounded-full shadow-glow-secondary">
              {scheduledJobsCount} scheduled
            </span>
          </div>
          <div className="flex items-end justify-between w-full">
            <div className="flex items-end gap-2">
              <span className="text-4xl font-extrabold text-white">{assignedJobs.length || 2}</span>
              <span className="text-slate-500 mb-1.5 font-medium">total</span>
            </div>
            <div className="h-10 w-24">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40">
                <path
                  className="drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]"
                  d="M0 35 L10 32 L20 36 L30 25 L40 28 L50 15 L60 20 L70 10 L80 15 L90 5 L100 8"
                  fill="none"
                  stroke="var(--color-secondary)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Active Job Hero Card */}
      {heroJob ? (
        <div className="relative w-full rounded-xl overflow-hidden shadow-floating group h-[340px] flex">
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80')",
            }}
          ></div>
          <div className="absolute inset-0 bg-linear-to-r from-background via-background/95 to-background/40 z-10"></div>
          <div className="relative z-20 p-10 flex flex-col justify-between w-full h-full">
            <div className="flex justify-between items-start">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 shadow-glow-primary backdrop-blur-md">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <span className="text-primary font-bold text-sm tracking-wide uppercase">In Progress</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white max-w-3xl leading-tight text-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                  {heroJob.title}
                  <span className="text-slate-400 font-light block text-3xl mt-2">{heroJob.address ?? "On Site"}</span>
                </h2>
              </div>
              <div className="hidden lg:block w-48 h-32 rounded-xl border-2 border-white/10 overflow-hidden shadow-lg relative bg-card group-hover:border-primary/50 transition-colors">
                <Image
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                  alt="Site Map"
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80"
                  width={192}
                  height={128}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-sm shadow-glow-primary">
                    <MapPin className="text-primary h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
              <div className="flex flex-wrap gap-8">
                <div className="flex items-center gap-3 group/item">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-secondary group-hover/item:text-white group-hover/item:bg-secondary transition-all">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Est. Completion</p>
                    <p className="text-white font-medium text-lg">
                      {heroJob.estimated_completion
                        ? new Date(heroJob.estimated_completion).toLocaleDateString("en-US", { month: "short", day: "numeric" })
                        : "TBD"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 group/item">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-secondary group-hover/item:text-white group-hover/item:bg-secondary transition-all">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Location</p>
                    <p className="text-white font-medium text-lg">{heroJob.address?.split(",")[0] ?? "On Site"}</p>
                  </div>
                </div>
              </div>
              <JobActionCard job={heroJob} techName={techName} />
            </div>
          </div>
        </div>
      ) : (
        <div className="relative w-full rounded-xl overflow-hidden shadow-floating h-[200px] flex items-center justify-center bg-card border border-white/5">
          <p className="text-slate-400">No active jobs assigned. Check the schedule tab.</p>
        </div>
      )}

      {/* Bottom Section Split */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 h-full min-h-[300px]">
        {/* Upcoming Schedule */}
        <div className="lg:col-span-3 bg-card p-8 rounded-xl shadow-floating border border-white/5 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-white">Upcoming Schedule</h3>
            <button className="text-slate-400 hover:text-white text-sm font-medium transition-colors">View All</button>
          </div>
          <div className="flex flex-col gap-4 overflow-y-auto pr-2">
            {upcomingJobs.length > 0 ? (
              upcomingJobs.map((job: any) => {
                const d = job.start_date ? new Date(job.start_date) : new Date();
                return (
                  <div
                    key={job.id}
                    className="flex items-center justify-between p-4 bg-background/50 rounded-xl border border-white/5 hover:border-primary/30 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex flex-col items-center justify-center w-12 h-12 bg-muted rounded-lg border border-white/5">
                        <span className="text-xs font-bold text-slate-400">
                          {d.toLocaleDateString("en-US", { month: "short" }).toUpperCase()}
                        </span>
                        <span className="text-lg font-bold text-white">{d.getDate()}</span>
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg group-hover:text-primary transition-colors">{job.title}</h4>
                        <p className="text-slate-400 text-sm">{job.address?.split(",")[0] ?? "On Site"}</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-primary transition-all">
                      <ChevronRight className="h-5 w-5" />
                    </div>
                  </div>
                );
              })
            ) : (
              // Fallback placeholder
              <div className="flex items-center justify-between p-4 bg-background/50 rounded-xl border border-white/5">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center justify-center w-12 h-12 bg-muted rounded-lg border border-white/5">
                    <span className="text-xs font-bold text-slate-400">TBD</span>
                    <span className="text-lg font-bold text-white">—</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">No scheduled jobs</h4>
                    <p className="text-slate-400 text-sm">Check back soon</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Equipment Checkout */}
        <div className="lg:col-span-2 bg-card p-8 rounded-xl shadow-floating border border-white/5 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-white">Equipment Checkout</h3>
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-primary cursor-pointer hover:bg-white/10 transition-colors">
              <QrCode className="h-4 w-4" />
            </div>
          </div>
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 h-5 w-5" />
            <input
              type="text"
              placeholder="Search tools..."
              className="w-full bg-background border-none rounded-full py-3 pl-12 pr-4 text-white placeholder-slate-500 focus:ring-2 focus:ring-secondary/50 focus:bg-background/80 transition-all outline-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 flex-1">
            {(checkedOutAssets.length > 0 ? checkedOutAssets : availableAssets).slice(0, 3).map((asset: any, i: number) => (
              <div
                key={asset.id}
                className={`bg-background/50 p-4 rounded-xl border border-white/5 hover:border-secondary/50 transition-all group cursor-pointer relative overflow-hidden ${i === 2 ? "col-span-2 flex items-center justify-between" : ""}`}
              >
                <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className={`flex ${i === 2 ? "items-center gap-3" : "justify-between items-start mb-2"} relative z-10`}>
                  {i === 2 ? (
                    <>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-slate-300">
                          <Zap className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-white font-bold">{asset.name}</p>
                          <p className="text-slate-500 text-xs capitalize">{asset.status.replace("_", " ")}</p>
                        </div>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full border-2 ${asset.status === "checked_out" ? "border-secondary bg-secondary" : "border-slate-600"} group-hover:border-secondary group-hover:bg-secondary transition-colors`}
                      ></div>
                    </>
                  ) : (
                    <>
                      <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-slate-300">
                        {i === 0 ? <Wrench className="h-5 w-5" /> : <Settings2 className="h-5 w-5" />}
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full border-2 ${asset.status === "checked_out" ? "border-secondary bg-secondary" : "border-slate-600"} group-hover:border-secondary group-hover:bg-secondary transition-colors`}
                      ></div>
                    </>
                  )}
                </div>
                {i !== 2 && (
                  <>
                    <p className="text-white font-bold relative z-10">{asset.name}</p>
                    <p className="text-slate-500 text-xs relative z-10 capitalize">{asset.status.replace("_", " ")}</p>
                  </>
                )}
              </div>
            ))}
            {checkedOutAssets.length === 0 && availableAssets.length === 0 && (
              <>
                <div className="bg-background/50 p-4 rounded-xl border border-white/5 hover:border-secondary/50 transition-all group cursor-pointer relative overflow-hidden">
                  <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex justify-between items-start mb-2 relative z-10">
                    <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-slate-300">
                      <Wrench className="h-5 w-5" />
                    </div>
                    <div className="w-5 h-5 rounded-full border-2 border-slate-600 group-hover:border-secondary transition-colors"></div>
                  </div>
                  <p className="text-white font-bold relative z-10">Power Drill</p>
                  <p className="text-slate-500 text-xs relative z-10">Avail: 3</p>
                </div>
                <div className="bg-background/50 p-4 rounded-xl border border-white/5 hover:border-secondary/50 transition-all group cursor-pointer relative overflow-hidden">
                  <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex justify-between items-start mb-2 relative z-10">
                    <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-slate-300">
                      <Settings2 className="h-5 w-5" />
                    </div>
                    <div className="w-5 h-5 rounded-full border-2 border-slate-600 group-hover:border-secondary transition-colors"></div>
                  </div>
                  <p className="text-white font-bold relative z-10">6ft Ladder</p>
                  <p className="text-slate-500 text-xs relative z-10">Avail: 1</p>
                </div>
                <div className="bg-background/50 p-4 rounded-xl border border-white/5 hover:border-secondary/50 transition-all group cursor-pointer relative overflow-hidden col-span-2 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-slate-300">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-white font-bold">Multimeter</p>
                      <p className="text-slate-500 text-xs">Avail: 5</p>
                    </div>
                  </div>
                  <div className="w-5 h-5 rounded-full border-2 border-slate-600 group-hover:border-secondary transition-colors"></div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
