"use client";

import {
  LayoutDashboard,
  Building2,
  PieChart,
  Users,
  Settings,
  Calendar,
  DollarSign,
  ImageIcon,
  FolderOpen,
  MessageSquare,
  Hammer,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { Sidebar, useSidebar } from "@/components/ui/sidebar";
import { Logo } from "@/components/ui/Logo";

export type AppRole = "admin" | "tech" | "client";

const NAV_ITEMS: Record<AppRole, { title: string; url: string; icon: string; soon?: boolean }[]> = {
  admin: [
    { title: "Dashboard", url: "/admin/dashboard", icon: "dashboard" },
    { title: "Projects", url: "/admin/projects", icon: "apartment" },
    { title: "Reports", url: "/admin/reports", icon: "pie_chart" },
    { title: "Team", url: "/admin/team", icon: "group" },
    { title: "Settings", url: "/admin/settings", icon: "settings" },
  ],
  tech: [
    { title: "Dashboard", url: "/tech/dashboard", icon: "dashboard" },
    { title: "Schedule", url: "/tech/schedule", icon: "calendar_month" },
    { title: "Tools & Assets", url: "/tech/assets", icon: "construction" },
    { title: "Messages", url: "#", icon: "chat_bubble", soon: true },
    { title: "Settings", url: "/tech/settings", icon: "settings" },
  ],
  client: [
    { title: "Dashboard", url: "/client/dashboard", icon: "dashboard" },
    { title: "Schedule", url: "/client/schedule", icon: "calendar_month" },
    { title: "Budget", url: "#", icon: "attach_money", soon: true },
    { title: "Photos", url: "#", icon: "photo_library", soon: true },
    { title: "Documents", url: "/client/documents", icon: "folder_open" },
    { title: "Messages", url: "/client/ai-assistant", icon: "chat_bubble" },
  ],
};

const AVATARS: Record<AppRole, { src: string; name: string; subtitle: string }> = {
  admin: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDp0FSejTECBo0FDEJUOqzKlbEGV2ECNFuOrcOHesZ5EVBoQ0zuWsrQx67j_O26cKMLLapDswzhTZJHKGK0-vwLh5ORU1S3p6FqhyaC1amJLwRsfw9ys6BqhrgHoxHv52sXcmoGPFEPW3PTvMTkgCjM_sdKX0DVEDqc6i0Kfgp-7Zvven_LjrK1kF2XWyrIuXQR5qQhBh9D-atI4dgSaZFvoHoipApla_QuGe8eGiYPXKaP4f3t_ZFsGWui2DNGRCM4QcI9fLHhdic",
    name: "James",
    subtitle: "Administrator",
  },
  client: {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Sarah Jenkins",
    subtitle: "Homeowner",
  },
  tech: {
    src: "https://images.unsplash.com/photo-1543886561-bd80b5bacc0c?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Marcus Cole",
    subtitle: "Senior Technician",
  },
};

export function AppSidebar({ role }: { role: AppRole }) {
  const pathname = usePathname();
  const { state, isMobile, toggleSidebar } = useSidebar();
  const isCollapsed = state === "collapsed" && !isMobile;

  const items = NAV_ITEMS[role];
  const avatar = AVATARS[role];

  return (
    <Sidebar variant="floating" collapsible="icon">
      {isCollapsed ? (
        // EXACT HTML REPLICA: ADMIN/TECH DRIBBBLE (CLOSED STATE)
        <div className="flex flex-col h-full w-full items-center py-8 justify-between z-20 shrink-0">
          <div className="flex flex-col items-center gap-8 w-full">
            {/* Logo Area */}
            <div
              className="flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
              onClick={toggleSidebar}
            >
              <Logo iconOnly={true} />
            </div>

            {/* Nav Items */}
            <nav className="flex flex-col gap-6 w-full px-4">
              {items.map((item) => {
                const isActive = !item.soon && (pathname === item.url || (item.url !== "#" && pathname.startsWith(item.url)));

                if (item.soon) {
                  return (
                    <div
                      key={item.title}
                      title={`${item.title} — Coming Soon`}
                      className="relative flex items-center justify-center w-full aspect-square rounded-2xl text-slate-600 cursor-not-allowed"
                    >
                      <span className="material-symbols-outlined text-[28px]">{item.icon}</span>
                      <span className="absolute -top-1 -right-1 text-[8px] font-black bg-[#2D313A] text-slate-500 px-1.5 py-0.5 rounded-full leading-none uppercase tracking-wide border border-white/5">
                        Soon
                      </span>
                    </div>
                  );
                }

                if (isActive) {
                  return (
                    <Link
                      key={item.title}
                      href={item.url}
                      className="group relative flex items-center justify-center w-full aspect-square rounded-2xl bg-[#0df2f2]/10 text-[#0df2f2] transition-all duration-300 shadow-[0_0_8px_rgba(13,242,242,0.4)]"
                    >
                      <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        {item.icon}
                      </span>
                      <div className="absolute left-[-16px] top-1/2 -translate-y-1/2 w-1 h-8 bg-[#0df2f2] rounded-r-full shadow-[0_0_10px_#0df2f2]"></div>
                    </Link>
                  );
                }

                return (
                  <Link
                    key={item.title}
                    href={item.url}
                    className="group flex items-center justify-center w-full aspect-square rounded-2xl text-[#94A3B8] hover:text-white hover:bg-white/5 transition-all duration-300"
                  >
                    <span className="material-symbols-outlined text-[28px]">{item.icon}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* User Avatar */}
          <div className="relative group cursor-pointer" onClick={toggleSidebar}>
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-[#0df2f2] transition-colors duration-300">
              <Image alt="User Avatar" src={avatar.src} width={48} height={48} className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#10b981] rounded-full border-2 border-[#21242D]"></div>
          </div>
        </div>
      ) : (
        // EXACT HTML REPLICA: CLIENT PORTAL (OPEN STATE)
        <div className="flex h-full flex-col p-6">
          {/* Logo Area */}
          <div className="mb-10 cursor-pointer hover:opacity-80 transition-opacity" onClick={toggleSidebar}>
            <Logo iconOnly={false} />
          </div>

          {/* Navigation */}
          <nav className="flex flex-1 flex-col gap-2">
            {items.map((item) => {
              const isActive = !item.soon && (pathname === item.url || (item.url !== "#" && pathname.startsWith(item.url)));

              if (item.soon) {
                return (
                  <div
                    key={item.title}
                    title={`${item.title} — Coming Soon`}
                    className="group flex items-center gap-4 rounded-xl px-4 py-3 text-slate-600 cursor-not-allowed select-none"
                  >
                    <div className="relative shrink-0">
                      <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                    </div>
                    <span className="font-medium truncate flex-1">{item.title}</span>
                    <span className="text-[9px] font-black bg-[#2D313A] text-slate-500 px-2 py-0.5 rounded-full uppercase tracking-wide border border-white/5">
                      Soon
                    </span>
                  </div>
                );
              }

              if (isActive) {
                return (
                  <Link
                    key={item.title}
                    href={item.url}
                    className="group flex items-center gap-4 rounded-xl bg-[#0df2f2]/10 px-4 py-3 text-[#0df2f2] transition-all hover:bg-[#0df2f2]/20"
                  >
                    <div className="relative shrink-0">
                      <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        {item.icon}
                      </span>
                      {item.title === "Messages" && (
                        <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-[#0df2f2] ring-2 ring-[#1E2128]"></span>
                      )}
                    </div>
                    <span className="font-semibold truncate">{item.title}</span>
                  </Link>
                );
              }

              return (
                <Link
                  key={item.title}
                  href={item.url}
                  className="group flex items-center gap-4 rounded-xl px-4 py-3 text-slate-400 transition-all hover:bg-[#2A2D35] hover:text-white"
                >
                  <div className="relative shrink-0">
                    <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                    {item.title === "Messages" && !item.soon && (
                      <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-[#0df2f2] ring-2 ring-[#1E2128]"></span>
                    )}
                  </div>
                  <span className="font-medium truncate">{item.title}</span>
                </Link>
              );
            })}
          </nav>

          {/* User Profile */}
          <div className="mt-auto pt-6 border-t border-white/5">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 shrink-0 rounded-full overflow-hidden border-2 border-[#0df2f2]/20">
                <Image alt="User Avatar" src={avatar.src} width={48} height={48} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-sm font-bold text-white truncate">{avatar.name}</span>
                <span className="text-xs text-slate-400 truncate">{avatar.subtitle}</span>
              </div>
              <button
                onClick={toggleSidebar}
                className="ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 hover:bg-[#2A2D35] hover:text-white"
                title="Toggle Sidebar"
              >
                <span className="material-symbols-outlined text-[20px]">menu_open</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </Sidebar>
  );
}
