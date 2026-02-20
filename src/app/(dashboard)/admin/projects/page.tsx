import { PageHeader } from "@/components/ui/PageHeader";
import { FloatingCard } from "@/components/ui/FloatingCard";
import { PillButton } from "@/components/ui/PillButton";
import { StatusBadge } from "@/components/ui/StatusBadge";

export default function AdminProjectsPage() {
  return (
    <div className="flex-grow px-6 lg:px-12 py-10 max-w-[1600px] mx-auto w-full">
      <PageHeader title="Active Projects" subtitle="Manage and track ongoing high-end construction sites.">
        {/* Search */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-slate-500 group-focus-within:text-[#f2700d] transition-colors">
              search
            </span>
          </div>
          <input
            className="bg-[#21242D] border border-[#2D313A] text-slate-200 text-sm rounded-full focus:ring-2 focus:ring-[#f2700d]/50 focus:border-[#f2700d] block w-64 pl-11 p-3 placeholder-slate-500 transition-all shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]"
            placeholder="Search projects..."
            type="text"
          />
        </div>

        {/* Status Filter */}
        <div className="relative">
          <button className="flex items-center gap-2 bg-[#21242D] hover:bg-[#2D313A] text-slate-200 px-5 py-3 rounded-full border border-[#2D313A] transition-all text-sm font-medium">
            <span className="size-2 rounded-full bg-[#f2700d] shadow-[0_0_8px_rgba(242,112,13,0.6)]"></span>
            Status: All
            <span className="material-symbols-outlined text-lg text-slate-500 ml-1">expand_more</span>
          </button>
        </div>

        {/* CTA */}
        <PillButton variant="primary" icon="add">
          New Project
        </PillButton>
      </PageHeader>

      {/* Stats Overview Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <FloatingCard padding="default" variant="default" className="group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
            <span className="material-symbols-outlined text-8xl">engineering</span>
          </div>
          <p className="text-slate-400 text-sm font-medium mb-1">Total Active Budget</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-3xl font-bold text-white">$4.2M</h3>
            <span className="text-green-500 text-xs font-bold bg-green-500/10 px-2 py-0.5 rounded-full flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">trending_up</span> +12%
            </span>
          </div>
        </FloatingCard>

        <FloatingCard padding="default" variant="default" className="group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
            <span className="material-symbols-outlined text-8xl">schedule</span>
          </div>
          <p className="text-slate-400 text-sm font-medium mb-1">Avg. Completion</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-3xl font-bold text-white">68%</h3>
            <span className="text-slate-500 text-xs font-medium">Across 6 sites</span>
          </div>
        </FloatingCard>

        <FloatingCard padding="default" variant="default" className="group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
            <span className="material-symbols-outlined text-8xl">group</span>
          </div>
          <p className="text-slate-400 text-sm font-medium mb-1">Team Members</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-3xl font-bold text-white">124</h3>
            <div className="flex -space-x-2 ml-2">
              <div className="size-6 rounded-full bg-slate-600 border border-[#21242D]"></div>
              <div className="size-6 rounded-full bg-slate-500 border border-[#21242D]"></div>
              <div className="size-6 rounded-full bg-slate-400 border border-[#21242D]"></div>
            </div>
          </div>
        </FloatingCard>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {/* Card 1 */}
        <FloatingCard padding="default" variant="interactive">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#f2700d]/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
          <div className="flex justify-between items-start mb-6 relative z-10">
            <div className="size-12 rounded-2xl bg-[#2D313A] flex items-center justify-center border border-white/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
              <span className="material-symbols-outlined text-[#f2700d] text-2xl">apartment</span>
            </div>
            <StatusBadge status="active" label="On Track" pulse={true} />
          </div>
          <div className="mb-6 relative z-10">
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#f2700d] transition-colors">
              Skyline Tower Renovation
            </h3>
            <div className="flex items-center text-slate-400 text-sm gap-4">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">business</span> Horizon Group
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-600"></span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">location_on</span> New York, NY
              </span>
            </div>
          </div>
          <div className="space-y-4 relative z-10">
            <div>
              <div className="flex justify-between text-sm mb-2 font-medium">
                <span className="text-slate-300">Progress</span>
                <span className="text-white">65%</span>
              </div>
              <div className="h-3 w-full bg-[#13151A] rounded-full overflow-hidden border border-white/5">
                <div className="h-full bg-gradient-to-r from-[#0df2f2] to-[#8b5cf6] rounded-full" style={{ width: "65%" }}></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-[#2D313A]">
              <div>
                <p className="text-slate-500 text-xs uppercase font-bold tracking-wider mb-1">Budget / Spent</p>
                <p className="text-white font-bold">
                  $150k <span className="text-slate-500 font-normal">/ $95k</span>
                </p>
              </div>
              <div>
                <p className="text-slate-500 text-xs uppercase font-bold tracking-wider mb-1">Timeline</p>
                <p className="text-slate-300 text-sm font-medium">Jan 12 - Aug 30</p>
              </div>
            </div>
          </div>
        </FloatingCard>

        {/* Card 2 */}
        <FloatingCard padding="default" variant="interactive">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#8b5cf6]/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
          <div className="flex justify-between items-start mb-6 relative z-10">
            <div className="size-12 rounded-2xl bg-[#2D313A] flex items-center justify-center border border-white/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
              <span className="material-symbols-outlined text-[#8b5cf6] text-2xl">villa</span>
            </div>
            <StatusBadge status="pending" label="Review" />
          </div>
          <div className="mb-6 relative z-10">
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#8b5cf6] transition-colors">Oceanview Estate</h3>
            <div className="flex items-center text-slate-400 text-sm gap-4">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">business</span> Private Client
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-600"></span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">location_on</span> Malibu, CA
              </span>
            </div>
          </div>
          <div className="space-y-4 relative z-10">
            <div>
              <div className="flex justify-between text-sm mb-2 font-medium">
                <span className="text-slate-300">Progress</span>
                <span className="text-white">82%</span>
              </div>
              <div className="h-3 w-full bg-[#13151A] rounded-full overflow-hidden border border-white/5">
                <div className="h-full bg-gradient-to-r from-[#8b5cf6] to-pink-500 rounded-full" style={{ width: "82%" }}></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-[#2D313A]">
              <div>
                <p className="text-slate-500 text-xs uppercase font-bold tracking-wider mb-1">Budget / Spent</p>
                <p className="text-white font-bold">
                  $2.4M <span className="text-slate-500 font-normal">/ $1.8M</span>
                </p>
              </div>
              <div>
                <p className="text-slate-500 text-xs uppercase font-bold tracking-wider mb-1">Timeline</p>
                <p className="text-slate-300 text-sm font-medium">Feb 01 - Dec 15</p>
              </div>
            </div>
          </div>
        </FloatingCard>

        {/* Card 3 */}
        <FloatingCard padding="default" variant="interactive">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0df2f2]/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
          <div className="flex justify-between items-start mb-6 relative z-10">
            <div className="size-12 rounded-2xl bg-[#2D313A] flex items-center justify-center border border-white/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
              <span className="material-symbols-outlined text-[#0df2f2] text-2xl">corporate_fare</span>
            </div>
            <StatusBadge status="active" label="On Track" pulse={true} />
          </div>
          <div className="mb-6 relative z-10">
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#0df2f2] transition-colors">Tech Hub HQ</h3>
            <div className="flex items-center text-slate-400 text-sm gap-4">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">business</span> NexaCorp
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-600"></span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">location_on</span> Austin, TX
              </span>
            </div>
          </div>
          <div className="space-y-4 relative z-10">
            <div>
              <div className="flex justify-between text-sm mb-2 font-medium">
                <span className="text-slate-300">Progress</span>
                <span className="text-white">45%</span>
              </div>
              <div className="h-3 w-full bg-[#13151A] rounded-full overflow-hidden border border-white/5">
                <div className="h-full bg-gradient-to-r from-blue-500 to-[#0df2f2] rounded-full" style={{ width: "45%" }}></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-[#2D313A]">
              <div>
                <p className="text-slate-500 text-xs uppercase font-bold tracking-wider mb-1">Budget / Spent</p>
                <p className="text-white font-bold">
                  $850k <span className="text-slate-500 font-normal">/ $320k</span>
                </p>
              </div>
              <div>
                <p className="text-slate-500 text-xs uppercase font-bold tracking-wider mb-1">Timeline</p>
                <p className="text-slate-300 text-sm font-medium">Mar 15 - Nov 20</p>
              </div>
            </div>
          </div>
        </FloatingCard>

        {/* Card 4 */}
        <FloatingCard padding="default" variant="interactive">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
          <div className="flex justify-between items-start mb-6 relative z-10">
            <div className="size-12 rounded-2xl bg-[#2D313A] flex items-center justify-center border border-white/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
              <span className="material-symbols-outlined text-red-500 text-2xl">stadium</span>
            </div>
            <StatusBadge status="delayed" label="Delayed" />
          </div>
          <div className="mb-6 relative z-10">
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">North Side Arena</h3>
            <div className="flex items-center text-slate-400 text-sm gap-4">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">business</span> City Council
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-600"></span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">location_on</span> Chicago, IL
              </span>
            </div>
          </div>
          <div className="space-y-4 relative z-10">
            <div>
              <div className="flex justify-between text-sm mb-2 font-medium">
                <span className="text-slate-300">Progress</span>
                <span className="text-white">28%</span>
              </div>
              <div className="h-3 w-full bg-[#13151A] rounded-full overflow-hidden border border-white/5">
                <div className="h-full bg-gradient-to-r from-red-600 to-orange-500 rounded-full" style={{ width: "28%" }}></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-[#2D313A]">
              <div>
                <p className="text-slate-500 text-xs uppercase font-bold tracking-wider mb-1">Budget / Spent</p>
                <p className="text-white font-bold">
                  $12M <span className="text-slate-500 font-normal">/ $4.5M</span>
                </p>
              </div>
              <div>
                <p className="text-slate-500 text-xs uppercase font-bold tracking-wider mb-1">Timeline</p>
                <p className="text-slate-300 text-sm font-medium">Jan 05 - Next Year</p>
              </div>
            </div>
          </div>
        </FloatingCard>

        {/* Card 5 */}
        <FloatingCard padding="default" variant="interactive">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
          <div className="flex justify-between items-start mb-6 relative z-10">
            <div className="size-12 rounded-2xl bg-[#2D313A] flex items-center justify-center border border-white/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
              <span className="material-symbols-outlined text-green-500 text-2xl">park</span>
            </div>
            <StatusBadge status="completed" label="Completing" pulse={true} />
          </div>
          <div className="mb-6 relative z-10">
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-500 transition-colors">Greenwood Park</h3>
            <div className="flex items-center text-slate-400 text-sm gap-4">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">business</span> Urban Dev
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-600"></span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">location_on</span> Seattle, WA
              </span>
            </div>
          </div>
          <div className="space-y-4 relative z-10">
            <div>
              <div className="flex justify-between text-sm mb-2 font-medium">
                <span className="text-slate-300">Progress</span>
                <span className="text-white">94%</span>
              </div>
              <div className="h-3 w-full bg-[#13151A] rounded-full overflow-hidden border border-white/5">
                <div
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"
                  style={{ width: "94%" }}
                ></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-[#2D313A]">
              <div>
                <p className="text-slate-500 text-xs uppercase font-bold tracking-wider mb-1">Budget / Spent</p>
                <p className="text-white font-bold">
                  $300k <span className="text-slate-500 font-normal">/ $285k</span>
                </p>
              </div>
              <div>
                <p className="text-slate-500 text-xs uppercase font-bold tracking-wider mb-1">Timeline</p>
                <p className="text-slate-300 text-sm font-medium">Apr 10 - Oct 01</p>
              </div>
            </div>
          </div>
        </FloatingCard>

        {/* Card 6 */}
        <FloatingCard padding="default" variant="interactive">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#f2700d]/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
          <div className="flex justify-between items-start mb-6 relative z-10">
            <div className="size-12 rounded-2xl bg-[#2D313A] flex items-center justify-center border border-white/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
              <span className="material-symbols-outlined text-[#f2700d] text-2xl">warehouse</span>
            </div>
            <StatusBadge status="pending" label="Started" pulse={true} />
          </div>
          <div className="mb-6 relative z-10">
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#f2700d] transition-colors">Logistics Hub A2</h3>
            <div className="flex items-center text-slate-400 text-sm gap-4">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">business</span> Global Ship
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-600"></span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">location_on</span> Miami, FL
              </span>
            </div>
          </div>
          <div className="space-y-4 relative z-10">
            <div>
              <div className="flex justify-between text-sm mb-2 font-medium">
                <span className="text-slate-300">Progress</span>
                <span className="text-white">12%</span>
              </div>
              <div className="h-3 w-full bg-[#13151A] rounded-full overflow-hidden border border-white/5">
                <div
                  className="h-full bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"
                  style={{ width: "12%" }}
                ></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-[#2D313A]">
              <div>
                <p className="text-slate-500 text-xs uppercase font-bold tracking-wider mb-1">Budget / Spent</p>
                <p className="text-white font-bold">
                  $1.1M <span className="text-slate-500 font-normal">/ $80k</span>
                </p>
              </div>
              <div>
                <p className="text-slate-500 text-xs uppercase font-bold tracking-wider mb-1">Timeline</p>
                <p className="text-slate-300 text-sm font-medium">Jul 01 - Mar 30</p>
              </div>
            </div>
          </div>
        </FloatingCard>
      </div>
    </div>
  );
}
