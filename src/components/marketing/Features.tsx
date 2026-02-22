import { Surface } from "@/components/ui/Surface";
import { Badge } from "@/components/ui/badge";
import { MapPin, Wrench, BarChart3, ShieldCheck, User } from "lucide-react";
import { FieldTrackingGraphic } from "@/components/illustrations/FieldTrackingGraphic";
import { AssetManagementGraphic } from "@/components/illustrations/AssetManagementGraphic";
import { RealTimeMetricsGraphic } from "@/components/illustrations/RealTimeMetricsGraphic";
import { ClientPortalFeatureGraphic } from "@/components/illustrations/ClientPortalFeatureGraphic";

export function Features() {
  return (
    <section id="features" className="w-full max-w-6xl mb-32 relative z-10 px-4 md:px-8">
      <div className="absolute -left-40 top-20 w-80 h-80 bg-accent-cyan/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -right-40 bottom-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Everything you need to <br />
            <span className="text-primary">build better.</span>
          </h2>
          <p className="text-gray-400">
            Replace disconnected spreadsheets with a unified platform designed for the field and the office.
          </p>
        </div>
        <button className="text-white border-b border-primary pb-1 hover:text-primary transition-colors flex items-center gap-2">
          View all features <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Feature 1 */}
        <Surface interactive className="group flex flex-col p-8 md:p-10 h-full">
          <div className="flex justify-center items-center opacity-80 group-hover:opacity-100 transition-opacity duration-500 mb-12">
            <div className="w-full h-40 relative flex items-center justify-center pointer-events-none">
              <FieldTrackingGraphic />
            </div>
          </div>
          <div className="mt-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">01 / Fleet</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Field Tracking</h3>
            <p className="text-sm md:text-base text-slate-400 leading-relaxed">
              Real-time GPS tracking of your entire fleet and workforce. Know exactly where your resources are at any moment.
            </p>
          </div>
        </Surface>

        {/* Feature 2 */}
        <Surface interactive className="group flex flex-col p-8 md:p-10 h-full">
          <div className="flex justify-center items-center opacity-80 group-hover:opacity-100 transition-opacity duration-500 mb-12">
            <div className="w-full h-40 relative flex items-center justify-center pointer-events-none">
              <AssetManagementGraphic />
            </div>
          </div>
          <div className="mt-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">02 / Inventory</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Asset Management</h3>
            <p className="text-sm md:text-base text-slate-400 leading-relaxed">
              Track tool usage, maintenance schedules, and depreciation automatically. Never lose expensive equipment again.
            </p>
          </div>
        </Surface>

        {/* Feature 3 */}
        <Surface interactive className="group flex flex-col p-8 md:p-10 h-full">
          <div className="flex justify-center items-center opacity-80 group-hover:opacity-100 transition-opacity duration-500 mb-12">
            <div className="w-full h-40 relative flex items-center justify-center pointer-events-none">
              <RealTimeMetricsGraphic />
            </div>
          </div>
          <div className="mt-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">03 / Analytics</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Real-time Metrics</h3>
            <p className="text-sm md:text-base text-slate-400 leading-relaxed">
              Visualize project profitability, labor costs, and material burn rates instantly. Make data-driven decisions on the
              fly.
            </p>
          </div>
        </Surface>

        {/* Feature 4 */}
        <Surface interactive className="group flex flex-col p-8 md:p-10 h-full">
          <div className="flex justify-center items-center opacity-80 group-hover:opacity-100 transition-opacity duration-500 mb-12">
            <div className="w-full h-40 relative flex items-center justify-center pointer-events-none">
              <ClientPortalFeatureGraphic />
            </div>
          </div>
          <div className="mt-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">04 / Connectivity</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Client Portal</h3>
            <p className="text-sm md:text-base text-slate-400 leading-relaxed">
              Give clients a transparent view of progress without daily emails. Share photos, updates, and milestones securely.
            </p>
          </div>
        </Surface>
      </div>
    </section>
  );
}
