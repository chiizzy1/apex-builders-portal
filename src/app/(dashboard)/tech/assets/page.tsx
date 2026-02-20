import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { FloatingCard } from "@/components/ui/FloatingCard";

export default function TechToolsAssetsPage() {
  const assets = [
    {
      id: "TE-70",
      name: "Hilti Rotary Hammer",
      icon: "handyman",
      status: "Available",
      statusColor: "emerald",
      user: null,
      action: "Check Out",
    },
    {
      id: "FL-87",
      name: "Fluke Multimeter",
      icon: "bolt",
      status: "In Use",
      statusColor: "orange",
      user: "M. Davis",
      action: "Return Item",
    },
    {
      id: "DW-20",
      name: "DeWalt Impact Driver",
      icon: "build",
      status: "Available",
      statusColor: "emerald",
      user: null,
      action: "Check Out",
    },
    {
      id: "GLL-3",
      name: "Bosch Laser Level",
      icon: "architecture",
      status: "Available",
      statusColor: "emerald",
      user: null,
      action: "Check Out",
    },
    {
      id: "SH-04",
      name: "Safety Harness Kit",
      icon: "chef_hat",
      status: "In Use",
      statusColor: "orange",
      user: "J. Smith",
      action: "Return Item",
    },
    {
      id: "LD-520",
      name: "Leica Distance Meter",
      icon: "straighten",
      status: "Available",
      statusColor: "emerald",
      user: null,
      action: "Check Out",
    },
    {
      id: "MK-18V",
      name: "Makita Cordless Drill",
      icon: "power",
      status: "Available",
      statusColor: "emerald",
      user: null,
      action: "Check Out",
    },
    {
      id: "PJ-2500",
      name: "Hydraulic Pallet Jack",
      icon: "forklift",
      status: "In Use",
      statusColor: "orange",
      user: "Warehouse A",
      action: "Return Item",
    },
  ];

  return (
    <div className="flex-1 w-full max-w-[1600px] mx-auto px-4 lg:px-8 py-8 lg:py-12">
      <div className="flex flex-col gap-8 md:flex-row md:items-end justify-between mb-12">
        <PageHeader
          title="Tools & Equipment"
          subtitle="Manage your inventory, track assets, and handle checkouts efficiently."
          titleHighlight="Equipment"
        />

        <div className="flex w-full max-w-md flex-col gap-4">
          <div className="relative group">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 group-focus-within:text-[#0df2f2] transition-colors">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input
              className="block w-full rounded-full border-0 bg-white/5 py-3 pl-12 pr-4 text-white placeholder:text-slate-500 ring-1 ring-white/10 focus:bg-[#21242D] focus:ring-2 focus:ring-[#0df2f2] transition-all duration-300 outline-none"
              placeholder="Search by tool name, ID, or category..."
              type="text"
            />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-10 overflow-hidden">
        <div className="flex gap-3 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <button className="whitespace-nowrap px-6 py-2.5 text-sm font-bold transition-transform active:scale-95 bg-[#0df2f2] text-[#13151A] rounded-full shadow-[0_0_20px_rgba(13,242,242,0.15)]">
            All
          </button>
          {["Power Tools", "Safety Gear", "Measurement", "Heavy Machinery", "Hand Tools"].map((filter) => (
            <button
              key={filter}
              className="whitespace-nowrap rounded-full bg-[#21242D] border border-white/5 px-6 py-2.5 text-sm font-medium text-slate-300 transition-all hover:bg-white/10 hover:text-white active:scale-95"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {assets.map((asset, i) => (
          <FloatingCard
            key={i}
            className={`group flex flex-col justify-between overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-2 hover:ring-1 ${
              asset.status === "Available"
                ? "hover:shadow-[0_0_20px_rgba(13,242,242,0.15)] hover:ring-[#0df2f2]/50"
                : "hover:ring-white/10"
            }`}
            padding="large"
          >
            <div className="mb-6 flex items-start justify-between">
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-[#13151A]/50 text-slate-200 transition-colors ${
                  asset.status === "Available"
                    ? "group-hover:text-[#0df2f2] group-hover:bg-[#0df2f2]/10"
                    : "group-hover:text-white"
                }`}
              >
                <span className="material-symbols-outlined text-3xl">{asset.icon}</span>
              </div>

              <div
                className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ring-1 ring-inset ${
                  asset.status === "Available"
                    ? "bg-emerald-500/10 text-emerald-400 ring-emerald-500/20"
                    : "bg-orange-500/10 text-orange-400 ring-orange-500/20"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    asset.status === "Available"
                      ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"
                      : "bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.8)]"
                  }`}
                ></span>
                {asset.status}
              </div>
            </div>

            <div>
              <h3
                className={`mb-1 text-xl font-bold text-white transition-colors ${asset.status === "Available" ? "group-hover:text-[#0df2f2]" : ""}`}
              >
                {asset.name}
              </h3>
              <p className="text-sm font-medium text-slate-500">
                ID: {asset.id} {asset.user ? `• ${asset.user}` : ""}
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-white/5">
              <button
                className={`w-full rounded-full py-3 text-sm font-bold transition-all active:scale-95 ${
                  asset.status === "Available"
                    ? "bg-[#0df2f2] text-[#13151A] hover:bg-[#0df2f2]/90"
                    : "bg-slate-700 text-white hover:bg-slate-600"
                }`}
              >
                {asset.action}
              </button>
            </div>
          </FloatingCard>
        ))}
      </div>
    </div>
  );
}
