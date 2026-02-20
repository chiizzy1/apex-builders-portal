import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { FloatingCard } from "@/components/ui/FloatingCard";
import { PillButton } from "@/components/ui/PillButton";

export default function TechSchedulePage() {
  const scheduleData = [
    {
      date: "Today, Oct 24",
      jobs: [
        {
          id: "JOB-4829",
          title: "HVAC Unit Replacement",
          location: "Sector 7 • North Wing",
          address: "422 Skyline Ave",
          time: "10:00 AM - 2:00 PM",
          status: "In Progress",
          statusColor: "emerald",
          priority: "High",
        },
        {
          id: "JOB-4830",
          title: "Electrical Wiring Check",
          location: "Zone B, Floor 2",
          address: "188 Ocean Blvd",
          time: "3:30 PM - 5:00 PM",
          status: "Scheduled",
          statusColor: "slate",
          priority: "Medium",
        },
      ],
    },
    {
      date: "Tomorrow, Oct 25",
      jobs: [
        {
          id: "JOB-4831",
          title: "Site Survey & Prep",
          location: "Main Entrance",
          address: "990 Enterprise Way",
          time: "9:00 AM - 11:30 AM",
          status: "Scheduled",
          statusColor: "slate",
          priority: "High",
        },
        {
          id: "JOB-4832",
          title: "Smart Thermostat Install",
          location: "Residential Unit 4A",
          address: "3300 Park Ave",
          time: "1:00 PM - 3:00 PM",
          status: "Scheduled",
          statusColor: "slate",
          priority: "Low",
        },
      ],
    },
  ];

  return (
    <div className="flex-1 w-full max-w-[1280px] mx-auto px-4 lg:px-10 py-8 lg:py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <PageHeader
          title="My Schedule"
          subtitle="View your upcoming assignments and manage your field operations route."
          titleHighlight="Schedule"
        />

        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center w-12 h-12 rounded-full bg-[#21242D] border border-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors shadow-sm">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <div className="px-6 py-3 rounded-full bg-[#21242D] border border-white/5 text-white font-bold flex items-center justify-center gap-2 shadow-[0_5px_15px_rgba(0,0,0,0.3)]">
            <span className="material-symbols-outlined text-[#0df2f2] text-xl">calendar_month</span>
            October 24 - 30
          </div>
          <button className="flex items-center justify-center w-12 h-12 rounded-full bg-[#21242D] border border-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors shadow-sm">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>

      <div className="space-y-12">
        {scheduleData.map((day, dayIndex) => (
          <div key={dayIndex} className="animate-fade-in-up" style={{ animationDelay: `${dayIndex * 150}ms` }}>
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#0df2f2] shadow-[0_0_10px_rgba(13,242,242,0.8)]"></span>
              {day.date}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {day.jobs.map((job, jobIndex) => (
                <FloatingCard
                  key={jobIndex}
                  padding="large"
                  className={`group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6)] border ${
                    job.status === "In Progress"
                      ? "border-[#0df2f2]/30 shadow-[0_0_30px_rgba(13,242,242,0.1)]"
                      : "border-white/5 hover:border-white/15"
                  }`}
                  variant="default"
                >
                  {/* Status Indicator Bar */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1 ${
                      job.status === "In Progress" ? "bg-[#0df2f2] shadow-[0_0_15px_rgba(13,242,242,0.8)]" : "bg-white/10"
                    }`}
                  ></div>

                  <div className="flex flex-col gap-6 pl-2">
                    {/* Header */}
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-bold px-2.5 py-1 rounded bg-[#13151A] text-slate-400 border border-white/5">
                            {job.id}
                          </span>
                          {job.priority === "High" && (
                            <span className="text-xs font-bold px-2.5 py-1 rounded bg-red-500/20 text-red-400 border border-red-500/20 flex items-center gap-1">
                              <span className="material-symbols-outlined text-[14px]">local_fire_department</span>
                              High Priority
                            </span>
                          )}
                        </div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-[#0df2f2] transition-colors line-clamp-1">
                          {job.title}
                        </h3>
                        <p className="text-slate-400 font-medium text-sm mt-1">{job.location}</p>
                      </div>

                      <div
                        className={`px-4 py-1.5 rounded-full text-sm font-bold border whitespace-nowrap ${
                          job.status === "In Progress"
                            ? "bg-[#0df2f2]/10 text-[#0df2f2] border-[#0df2f2]/30"
                            : "bg-white/5 text-slate-400 border-white/10"
                        }`}
                      >
                        {job.status}
                      </div>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 border-y border-white/5">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#13151A] flex items-center justify-center text-slate-400 group-hover:text-white transition-colors shrink-0">
                          <span className="material-symbols-outlined">schedule</span>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">Time Window</p>
                          <p className="text-white font-medium">{job.time}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#13151A] flex items-center justify-center text-slate-400 group-hover:text-white transition-colors shrink-0">
                          <span className="material-symbols-outlined">location_on</span>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">Address</p>
                          <p className="text-white font-medium line-clamp-1">{job.address}</p>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-2">
                      <button className="text-slate-400 hover:text-white font-medium text-sm flex items-center gap-2 transition-colors">
                        <span className="material-symbols-outlined text-lg">map</span>
                        View Map
                      </button>

                      <PillButton
                        variant={job.status === "In Progress" ? "primary" : "ghost"}
                        icon={job.status === "In Progress" ? "arrow_forward" : undefined}
                        className={job.status !== "In Progress" ? "bg-white/5 border border-white/10" : ""}
                      >
                        {job.status === "In Progress" ? "Manage Job" : "View Details"}
                      </PillButton>
                    </div>
                  </div>
                </FloatingCard>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
