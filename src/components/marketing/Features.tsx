import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Wrench, BarChart3, ShieldCheck, User } from "lucide-react";

export function Features() {
  return (
    <section className="w-full max-w-6xl mb-32 relative z-10 px-4 md:px-8">
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
        <Card className="group relative p-8 md:p-10 border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-white/10 flex items-center justify-center mb-6 shadow-inner group-hover:bg-primary/20 transition-colors">
            <MapPin className="size-8 text-primary group-hover:scale-110 transition-transform" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Field Tracking</h3>
          <p className="text-gray-400 leading-relaxed mb-8">
            Real-time GPS tracking of your entire fleet and workforce. Know exactly where your resources are at any moment.
          </p>
          <div className="h-40 w-full rounded-xl bg-slate-900 border border-white/5 overflow-hidden relative flex items-center justify-center">
            <div className="absolute inset-0 bg-slate-800/50"></div>
            <div className="w-4 h-4 bg-primary rounded-full animate-ping absolute"></div>
            <div className="w-4 h-4 bg-primary rounded-full relative border-2 border-white shadow-lg"></div>
          </div>
        </Card>

        {/* Feature 2 */}
        <Card className="group relative p-8 md:p-10 border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1">
          <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-white/10 flex items-center justify-center mb-6 shadow-inner group-hover:bg-accent-cyan/20 transition-colors">
            <Wrench className="size-8 text-accent-cyan group-hover:scale-110 transition-transform" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Asset Management</h3>
          <p className="text-gray-400 leading-relaxed mb-8">
            Track tool usage, maintenance schedules, and depreciation automatically. Never lose expensive equipment again.
          </p>
          <div className="flex items-center gap-4 mt-auto">
            <div className="flex-1 bg-slate-800/50 rounded-lg p-3 border border-white/5 flex items-center gap-3">
              <Wrench className="size-4 text-gray-500" />
              <div className="flex flex-col gap-1">
                <span className="text-xs text-gray-400">Heavy Drill</span>
                <Badge variant="success" className="px-1.5 py-0 text-[10px]">
                  Available
                </Badge>
              </div>
            </div>
            <div className="flex-1 bg-slate-800/50 rounded-lg p-3 border border-white/5 flex items-center gap-3">
              <Wrench className="size-4 text-gray-500" />
              <div className="flex flex-col gap-1">
                <span className="text-xs text-gray-400">Excavator #4</span>
                <Badge variant="default" className="px-1.5 py-0 text-[10px]">
                  In Use
                </Badge>
              </div>
            </div>
          </div>
        </Card>

        {/* Feature 3 */}
        <Card className="group relative p-8 md:p-10 border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1">
          <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-white/10 flex items-center justify-center mb-6 shadow-inner group-hover:bg-purple-500/20 transition-colors">
            <BarChart3 className="size-8 text-purple-400 group-hover:scale-110 transition-transform" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Real-time Metrics</h3>
          <p className="text-gray-400 leading-relaxed mb-8">
            Visualize project profitability, labor costs, and material burn rates instantly. Make data-driven decisions on the
            fly.
          </p>
          <div className="w-full h-24 flex items-end justify-between px-2 gap-2 mt-auto">
            <div className="w-full bg-slate-700/30 rounded-t-md h-[40%] group-hover:h-[60%] transition-all duration-500 delay-75 relative overflow-hidden">
              <div className="absolute bottom-0 w-full h-full bg-purple-500/20"></div>
            </div>
            <div className="w-full bg-slate-700/30 rounded-t-md h-[70%] group-hover:h-[80%] transition-all duration-500 delay-100 relative overflow-hidden">
              <div className="absolute bottom-0 w-full h-full bg-purple-500/40"></div>
            </div>
            <div className="w-full bg-slate-700/30 rounded-t-md h-[50%] group-hover:h-[90%] transition-all duration-500 delay-150 relative overflow-hidden">
              <div className="absolute bottom-0 w-full h-full bg-purple-500/60"></div>
            </div>
            <div className="w-full bg-purple-500 rounded-t-md h-[85%] group-hover:h-full transition-all duration-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
          </div>
        </Card>

        {/* Feature 4 */}
        <Card className="group relative p-8 md:p-10 border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1">
          <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-white/10 flex items-center justify-center mb-6 shadow-inner group-hover:bg-blue-500/20 transition-colors">
            <ShieldCheck className="size-8 text-blue-400 group-hover:scale-110 transition-transform" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Client Portal</h3>
          <p className="text-gray-400 leading-relaxed mb-8">
            Give clients a transparent view of progress without daily emails. Share photos, updates, and milestones securely.
          </p>
          <div className="relative w-full bg-slate-800/50 rounded-xl p-4 border border-white/5 mt-auto">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                <User className="size-4 text-blue-400" />
              </div>
              <div className="h-2 w-24 bg-slate-700 rounded-full"></div>
            </div>
            <div className="h-2 w-full bg-slate-700 rounded-full mb-2"></div>
            <div className="h-2 w-2/3 bg-slate-700 rounded-full"></div>

            <div className="absolute -right-2 -bottom-2 bg-slate-900 border border-white/10 rounded-lg p-2 shadow-lg flex items-center gap-2 animate-bounce">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-xs font-bold text-white">Client Online</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
