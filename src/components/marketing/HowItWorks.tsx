import { Surface } from "@/components/ui/Surface";
import { AdminPortalGraphic } from "@/components/illustrations/AdminPortalGraphic";
import { TechAppGraphic } from "@/components/illustrations/TechAppGraphic";
import { ClientPortalGraphic } from "@/components/illustrations/ClientPortalGraphic";

export function HowItWorks() {
  return (
    <section id="solutions" className="w-full max-w-6xl mb-32 relative z-10 px-4 md:px-8 mx-auto">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          One system. <span className="text-primary">Three portals.</span>
        </h2>
        <p className="text-lg text-gray-400">
          We built dedicated, white-labeled interfaces for every stakeholder in your business. No more sharing spreadsheets or
          relying on memory.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {/* Admin Portal */}
        <Surface interactive className="group relative pt-6 pb-8 px-8 flex flex-col items-center text-center overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

          <div className="w-full h-40 mb-2 flex items-center justify-center -mt-6">
            <AdminPortalGraphic />
          </div>

          <h3 className="text-2xl font-bold text-white mb-3 z-10 mt-6 relative">Admin Command Center</h3>
          <p className="text-gray-400 leading-relaxed z-10 relative">
            Oversee everything in real-time. Track active jobs, manage dispatching, monitor tool check-outs, and see overdue
            invoices—all automated behind the scenes.
          </p>
        </Surface>

        {/* Technician Portal */}
        <Surface interactive className="group relative pt-6 pb-8 px-8 flex flex-col items-center text-center overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-accent-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

          <div className="w-full h-40 mb-2 flex items-center justify-center -mt-6">
            <TechAppGraphic />
          </div>

          <h3 className="text-2xl font-bold text-white mb-3 z-10 mt-6 relative">Technician App</h3>
          <p className="text-gray-400 leading-relaxed z-10 relative">
            Equip your field team. Technicians can view schedules, upload job logs (photos & signatures), and check out company
            assets right from the site.
          </p>
        </Surface>

        {/* Client Portal */}
        <Surface interactive className="group relative pt-6 pb-8 px-8 flex flex-col items-center text-center overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

          <div className="w-full h-40 mb-2 flex items-center justify-center -mt-6">
            <ClientPortalGraphic />
          </div>

          <h3 className="text-2xl font-bold text-white mb-3 z-10 mt-6 relative">Client Experience</h3>
          <p className="text-gray-400 leading-relaxed z-10 relative">
            Give your clients a white-labeled portal to track job progress and chat with a custom AI Assistant tailored to their
            project regarding balances or assigned techs.
          </p>
        </Surface>
      </div>
    </section>
  );
}
