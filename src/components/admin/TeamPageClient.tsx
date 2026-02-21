"use client";

import { useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { FloatingCard } from "@/components/ui/FloatingCard";
import { PillButton } from "@/components/ui/PillButton";
import { AddMemberModal } from "@/components/admin/AddMemberModal";
import { getAllTechnicians } from "@/lib/queries";

// Role label prettifier
const formatRole = (role: string) => (role === "tech" ? "Field Technician" : role.charAt(0).toUpperCase() + role.slice(1));

// This needs to be a Client Component so we can open the modal
export default function AdminTeamPageClient({ technicians }: { technicians: Awaited<ReturnType<typeof getAllTechnicians>> }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const active = technicians.filter((t) => t.is_active && !t.on_leave).length;
  const onLeave = technicians.filter((t) => t.on_leave).length;

  return (
    <div className="grow px-6 lg:px-12 py-10 max-w-[1600px] mx-auto w-full">
      <PageHeader title="Team Management" subtitle="Oversee assignments, status, and team availability.">
        <PillButton variant="secondary" icon="add" className="w-full sm:w-auto" onClick={() => setIsModalOpen(true)}>
          Add Member
        </PillButton>
      </PageHeader>

      {/* Summary bar */}
      <div className="flex flex-wrap items-center gap-6 mb-10">
        <div className="flex items-center gap-6">
          <div>
            <p className="text-2xl font-black text-white">{technicians.length}</p>
            <p className="text-xs text-slate-500 font-medium">Total Techs</p>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div>
            <p className="text-2xl font-black text-emerald-400">{active}</p>
            <p className="text-xs text-slate-500 font-medium">Active</p>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div>
            <p className="text-2xl font-black text-slate-400">{onLeave}</p>
            <p className="text-xs text-slate-500 font-medium">On Leave</p>
          </div>
        </div>
      </div>

      {technicians.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-slate-500">
          <span className="material-symbols-outlined text-5xl mb-4">group</span>
          <p className="font-semibold text-lg">No technicians found</p>
          <p className="text-sm mt-1">Add team members via the button above.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {technicians.map((member) => {
            const isOnLeave = member.on_leave;
            const isActive = member.is_active && !isOnLeave;

            const statusColor = isActive ? "bg-[#0df2f2]" : isOnLeave ? "bg-amber-400" : "bg-slate-500";
            const statusBorder = isActive ? "border-[#0df2f2]/30" : isOnLeave ? "border-amber-400/30" : "border-slate-500/30";
            const pillBg = isActive ? "bg-[#0df2f2]/10" : isOnLeave ? "bg-amber-500/10" : "bg-slate-700/30";
            const pillText = isActive ? "text-[#0df2f2]" : isOnLeave ? "text-amber-400" : "text-slate-400";
            const pillBorder = isActive ? "border-[#0df2f2]/20" : isOnLeave ? "border-amber-400/20" : "border-slate-600/30";
            const statusLabel = isActive ? "Active" : isOnLeave ? "On Leave" : "Inactive";

            const initials = (member.full_name ?? "?")
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)
              .toUpperCase();

            return (
              <FloatingCard key={member.id} padding="none" className="relative group">
                <button className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors z-10">
                  <span className="material-symbols-outlined">more_horiz</span>
                </button>

                <div className="flex flex-col items-center p-6 pb-2">
                  {/* Avatar */}
                  <div className="relative mb-5">
                    <div
                      className={`w-24 h-24 rounded-full p-1 border-2 ${statusBorder} ${isOnLeave || !member.is_active ? "grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all" : ""}`}
                    >
                      {member.avatar_url ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          alt={`${member.full_name} avatar`}
                          className="w-full h-full rounded-full object-cover"
                          src={member.avatar_url}
                        />
                      ) : (
                        <div className="w-full h-full rounded-full bg-[#2A2D36] flex items-center justify-center text-white font-bold text-xl">
                          {initials}
                        </div>
                      )}
                    </div>
                    <div
                      className={`absolute bottom-1 right-1 w-5 h-5 ${statusColor} border-4 border-[#21242D] rounded-full shadow-lg`}
                      title={statusLabel}
                    />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">{member.full_name ?? "Unknown"}</h3>
                  <p className="text-slate-400 text-sm font-medium mb-4">{formatRole(member.role)}</p>

                  {/* Skills pill or status */}
                  <div
                    className={`${pillBg} ${pillText} px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-6 border ${pillBorder} text-center`}
                  >
                    {member.skills?.[0] ?? statusLabel}
                  </div>
                </div>

                {/* Footer actions */}
                <div className="flex items-center justify-center gap-4 border-t border-white/5 p-6 bg-[#1A1D24]/50">
                  {member.phone && (
                    <a
                      href={`tel:${member.phone}`}
                      className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#0df2f2] hover:text-[#13151A] flex items-center justify-center transition-all text-slate-400"
                    >
                      <span className="material-symbols-outlined text-[20px]">call</span>
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#0df2f2] hover:text-[#13151A] flex items-center justify-center transition-all text-slate-400"
                    >
                      <span className="material-symbols-outlined text-[20px]">mail</span>
                    </a>
                  )}
                </div>
              </FloatingCard>
            );
          })}
        </div>
      )}

      <AddMemberModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
