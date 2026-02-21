"use client";

import { useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { FloatingCard } from "@/components/ui/FloatingCard";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { AddProjectModal } from "@/components/admin/AddProjectModal";
import type { ProjectWithRelations } from "@/lib/types";

const CATEGORY_ICON: Record<string, string> = {
  hvac: "air",
  plumbing: "water_drop",
  roofing: "roofing",
  electrical: "bolt",
  renovation: "home_repair_service",
  construction: "apartment",
  other: "construction",
};

const CATEGORY_COLOR: Record<string, string> = {
  hvac: "#0df2f2",
  plumbing: "#3b82f6",
  roofing: "#a855f7",
  electrical: "#f59e0b",
  renovation: "#f97316",
  construction: "#f97316",
  other: "#64748b",
};

const STATUS_LABEL: Record<string, string> = {
  new: "New",
  scheduled: "Scheduled",
  in_progress: "On Track",
  completed: "Completed",
  invoiced: "Invoiced",
};

const STATUS_UI: Record<string, "active" | "pending" | "completed" | "delayed"> = {
  new: "pending",
  scheduled: "pending",
  in_progress: "active",
  completed: "completed",
  invoiced: "completed",
};

export default function AdminProjectsPageClient({ projects }: { projects: ProjectWithRelations[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalBudget = projects.reduce((s, p) => s + (p.budget ?? 0), 0);
  const avgCompletion =
    projects.length > 0
      ? Math.round(projects.reduce((s, p) => s + (p.amount_spent / Math.max(p.budget ?? 1, 1)) * 100, 0) / projects.length)
      : 0;

  const fmtMoney = (n: number) =>
    n >= 1_000_000 ? `$${(n / 1_000_000).toFixed(1)}M` : n >= 1_000 ? `$${(n / 1_000).toFixed(0)}K` : `$${n}`;

  return (
    <div className="grow px-6 lg:px-12 py-10 max-w-[1600px] mx-auto w-full">
      <PageHeader title="Active Projects" subtitle="Manage and track ongoing high-end construction sites.">
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-[#f97316] text-white px-5 py-3 rounded-full font-bold text-sm shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:opacity-90 transition-opacity"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          New Project
        </button>
      </PageHeader>

      {/* Stats Overview Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <FloatingCard padding="default" variant="default" className="group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
            <span className="material-symbols-outlined text-8xl">engineering</span>
          </div>
          <p className="text-slate-400 text-sm font-medium mb-1">Total Active Budget</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-3xl font-bold text-white">{fmtMoney(totalBudget)}</h3>
          </div>
        </FloatingCard>

        <FloatingCard padding="default" variant="default" className="group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
            <span className="material-symbols-outlined text-8xl">schedule</span>
          </div>
          <p className="text-slate-400 text-sm font-medium mb-1">Avg. Budget Spent</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-3xl font-bold text-white">{avgCompletion}%</h3>
            <span className="text-slate-500 text-xs font-medium">Across {projects.length} sites</span>
          </div>
        </FloatingCard>

        <FloatingCard padding="default" variant="default" className="group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
            <span className="material-symbols-outlined text-8xl">group</span>
          </div>
          <p className="text-slate-400 text-sm font-medium mb-1">Total Projects</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-3xl font-bold text-white">{projects.length}</h3>
          </div>
        </FloatingCard>
      </div>

      {/* Projects Grid */}
      {projects.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-slate-500">
          <span className="material-symbols-outlined text-5xl mb-4">construction</span>
          <p className="font-semibold text-lg">No projects yet</p>
          <p className="text-sm mt-1">Create your first project using the button above.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => {
            const icon = CATEGORY_ICON[project.category] ?? "construction";
            const color = CATEGORY_COLOR[project.category] ?? "#f97316";
            const pctRaw = project.budget ? Math.min(Math.round((project.amount_spent / project.budget) * 100), 100) : 0;

            const statusKey = STATUS_UI[project.status] ?? "pending";
            const label = STATUS_LABEL[project.status] ?? project.status;

            return (
              <FloatingCard key={project.id} padding="default" variant="interactive">
                <div
                  className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none opacity-5"
                  style={{ backgroundColor: color }}
                />
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div
                    className="size-12 rounded-2xl flex items-center justify-center border border-white/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]"
                    style={{ backgroundColor: `${color}18`, color }}
                  >
                    <span className="material-symbols-outlined text-2xl">{icon}</span>
                  </div>
                  <StatusBadge status={statusKey} label={label} pulse={project.status === "in_progress"} />
                </div>

                <div className="mb-6 relative z-10">
                  <h3
                    className="text-2xl font-bold text-white mb-2 transition-colors truncate"
                    style={{ ["--hover-color" as string]: color }}
                  >
                    {project.title}
                  </h3>
                  <div className="flex items-center text-slate-400 text-sm gap-4 flex-wrap">
                    {project.client && (
                      <span className="flex items-center gap-1.5 truncate max-w-[140px]">
                        <span className="material-symbols-outlined text-[16px]">business</span>
                        {project.client.full_name}
                      </span>
                    )}
                    {project.address && (
                      <span className="flex items-center gap-1.5 truncate max-w-[140px]">
                        <span className="material-symbols-outlined text-[16px]">location_on</span>
                        {project.address.split(",")[0]}
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-4 relative z-10">
                  <div>
                    <div className="flex justify-between text-sm mb-2 font-medium">
                      <span className="text-slate-300">Budget Used</span>
                      <span className="text-white">{pctRaw}%</span>
                    </div>
                    <div className="h-3 w-full bg-[#13151A] rounded-full overflow-hidden border border-white/5">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{ width: `${pctRaw}%`, backgroundColor: color }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-[#2D313A]">
                    <div>
                      <p className="text-slate-500 text-xs uppercase font-bold tracking-wider mb-1">Budget / Spent</p>
                      <p className="text-white font-bold">
                        {fmtMoney(project.budget ?? 0)}{" "}
                        <span className="text-slate-500 font-normal">/ {fmtMoney(project.amount_spent)}</span>
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs uppercase font-bold tracking-wider mb-1">Timeline</p>
                      <p className="text-slate-300 text-sm font-medium">
                        {project.start_date
                          ? new Date(project.start_date).toLocaleDateString("en-US", { month: "short", day: "numeric" })
                          : "TBD"}{" "}
                        -{" "}
                        {project.estimated_completion
                          ? new Date(project.estimated_completion).toLocaleDateString("en-US", { month: "short", day: "numeric" })
                          : "TBD"}
                      </p>
                    </div>
                  </div>
                </div>
              </FloatingCard>
            );
          })}
        </div>
      )}

      <AddProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
