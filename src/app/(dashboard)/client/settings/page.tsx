import { PageHeader } from "@/components/ui/PageHeader";
import { FloatingCard } from "@/components/ui/FloatingCard";
import { PillButton } from "@/components/ui/PillButton";
import Link from "next/link";

export default function ClientSettingsPage() {
  return (
    <div className="flex-1 w-full max-w-[1280px] mx-auto px-4 lg:px-10 py-8 lg:py-12">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Account Settings</h1>
          <p className="text-slate-400 mt-2">Manage your profile details and personal preferences.</p>
        </div>
        <button className="hidden md:flex items-center gap-2 bg-white/5 hover:bg-[#0df2f2]/20 hover:text-[#0df2f2] border border-white/10 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 group">
          <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">save</span>
          <span>Save Changes</span>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Column: Navigation (30%) */}
        <aside className="w-full lg:w-[30%] flex flex-col gap-6 sticky top-28">
          <nav className="bg-[#21242D] rounded-3xl p-4 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] border border-white/5 overflow-hidden">
            <ul className="flex flex-col space-y-1">
              {/* Active Item */}
              <li>
                <Link
                  href="/client/settings"
                  className="flex items-center gap-4 px-4 py-4 bg-[#0df2f2]/10 text-[#0df2f2] rounded-2xl relative overflow-hidden transition-all group"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#0df2f2] shadow-[0_0_15px_rgba(13,242,242,0.6)]"></div>
                  <span className="material-symbols-outlined group-hover:scale-110 transition-transform duration-300">
                    person
                  </span>
                  <span className="font-semibold tracking-wide">Profile</span>
                </Link>
              </li>
              {/* Inactive Items */}
              <li>
                <button className="w-full flex items-center gap-4 px-4 py-4 text-slate-400 hover:text-white hover:bg-white/5 rounded-2xl transition-all group">
                  <span className="material-symbols-outlined group-hover:scale-110 transition-transform duration-300">
                    notifications
                  </span>
                  <span className="font-medium">Notifications</span>
                </button>
              </li>
              <li>
                <button className="w-full flex items-center gap-4 px-4 py-4 text-slate-400 hover:text-white hover:bg-white/5 rounded-2xl transition-all group">
                  <span className="material-symbols-outlined group-hover:scale-110 transition-transform duration-300">
                    receipt_long
                  </span>
                  <span className="font-medium">Billing & Payments</span>
                </button>
              </li>
              <li>
                <Link
                  href="/client/documents"
                  className="w-full flex items-center gap-4 px-4 py-4 text-slate-400 hover:text-white hover:bg-white/5 rounded-2xl transition-all group"
                >
                  <span className="material-symbols-outlined group-hover:scale-110 transition-transform duration-300">
                    folder_open
                  </span>
                  <span className="font-medium">Project Documents</span>
                </Link>
              </li>
              <li>
                <button className="w-full flex items-center gap-4 px-4 py-4 text-slate-400 hover:text-white hover:bg-white/5 rounded-2xl transition-all group">
                  <span className="material-symbols-outlined group-hover:scale-110 transition-transform duration-300">
                    support_agent
                  </span>
                  <span className="font-medium">Contact Team</span>
                </button>
              </li>
              <li className="pt-4 mt-4 border-t border-white/5">
                <button className="w-full flex items-center gap-4 px-4 py-4 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-2xl transition-all group">
                  <span className="material-symbols-outlined group-hover:scale-110 transition-transform duration-300">
                    logout
                  </span>
                  <span className="font-medium">Sign Out</span>
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Right Column: Content (70%) */}
        <div className="w-full lg:w-[70%] flex flex-col gap-8">
          {/* Card 1: Personal Details */}
          <FloatingCard
            padding="large"
            className="relative overflow-hidden group shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]"
            variant="default"
          >
            <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
              <span className="material-symbols-outlined text-[180px] text-[#0df2f2] rotate-12">badge</span>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-10 relative z-10">
              <div className="relative group/avatar cursor-pointer">
                <div className="w-32 h-32 rounded-full border-4 border-[#21242D] shadow-xl overflow-hidden relative">
                  <img
                    alt="Profile Picture"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCZ0xofUE1LxX8on8UCH8c_huxgviRAm6ujduBAqhX6dEfedNeOVtgLgagMl5uNSEWX6SN-t3P0_U64wsNBK2bDEsdCwND0WP8jed_0KlzU1xwZomE_H7A3HmMSZ6dRo0lKpV1mTDz9m_0bXKGtkUoMYGaSKkbyFJ2Jgk7zayvcnblkWDXo4y12-D4grPwhV3scsMMJUCDRjytjhcf2j9SCZGP5Vrsjl01wsd7xth43g-Yo8PTvI8zJrkYmBzvC-pRtbNtWR5eMyc"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/avatar:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <span className="material-symbols-outlined text-white text-3xl">photo_camera</span>
                  </div>
                </div>
                <div className="absolute bottom-1 right-1 bg-[#0df2f2] text-black p-2 rounded-full shadow-lg transform translate-y-2 group-hover/avatar:translate-y-0 transition-transform duration-300">
                  <span className="material-symbols-outlined text-sm font-bold block">edit</span>
                </div>
              </div>
              <div className="text-center md:text-left pt-2">
                <h3 className="text-2xl font-bold text-white">Profile Picture</h3>
                <p className="text-slate-400 text-sm mt-2 max-w-md leading-relaxed">
                  Update your profile picture. High-resolution images look best. Max size 2MB.
                </p>
              </div>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              <label className="flex flex-col gap-2 group/input">
                <span className="text-sm font-semibold text-slate-400 group-focus-within/input:text-[#0df2f2] transition-colors">
                  First Name
                </span>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-slate-500 group-focus-within/input:text-[#0df2f2]">
                      person
                    </span>
                  </div>
                  <input
                    className="w-full bg-white/5 border border-transparent focus:border-[#0df2f2]/50 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-500 focus:ring-4 focus:ring-[#0df2f2]/10 transition-all outline-none"
                    placeholder="Enter first name"
                    type="text"
                    defaultValue="Sarah"
                  />
                </div>
              </label>

              <label className="flex flex-col gap-2 group/input">
                <span className="text-sm font-semibold text-slate-400 group-focus-within/input:text-[#0df2f2] transition-colors">
                  Last Name
                </span>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-slate-500 group-focus-within/input:text-[#0df2f2]">
                      person
                    </span>
                  </div>
                  <input
                    className="w-full bg-white/5 border border-transparent focus:border-[#0df2f2]/50 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-500 focus:ring-4 focus:ring-[#0df2f2]/10 transition-all outline-none"
                    placeholder="Enter last name"
                    type="text"
                    defaultValue="Jenkins"
                  />
                </div>
              </label>

              <label className="flex flex-col gap-2 group/input">
                <span className="text-sm font-semibold text-slate-400 group-focus-within/input:text-[#0df2f2] transition-colors">
                  Email Address
                </span>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-slate-500 group-focus-within/input:text-[#0df2f2]">mail</span>
                  </div>
                  <input
                    className="w-full bg-white/5 border border-transparent focus:border-[#0df2f2]/50 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-500 focus:ring-4 focus:ring-[#0df2f2]/10 transition-all outline-none"
                    placeholder="name@company.com"
                    type="email"
                    defaultValue="sarah.jenkins@example.com"
                  />
                </div>
              </label>

              <label className="flex flex-col gap-2 group/input">
                <span className="text-sm font-semibold text-slate-400 group-focus-within/input:text-[#0df2f2] transition-colors">
                  Phone Number
                </span>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-slate-500 group-focus-within/input:text-[#0df2f2]">call</span>
                  </div>
                  <input
                    className="w-full bg-white/5 border border-transparent focus:border-[#0df2f2]/50 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-500 focus:ring-4 focus:ring-[#0df2f2]/10 transition-all outline-none"
                    placeholder="+1 (555) 000-0000"
                    type="tel"
                    defaultValue="+1 (555) 987-6543"
                  />
                </div>
              </label>

              <label className="flex flex-col gap-2 md:col-span-2 group/input">
                <span className="text-sm font-semibold text-slate-400 group-focus-within/input:text-[#0df2f2] transition-colors">
                  Project Address Location
                </span>
                <div className="relative">
                  <div className="absolute top-3 left-0 pl-4 flex pointer-events-none">
                    <span className="material-symbols-outlined text-slate-500 group-focus-within/input:text-[#0df2f2]">
                      location_on
                    </span>
                  </div>
                  <textarea
                    className="w-full bg-white/5 border border-transparent focus:border-[#0df2f2]/50 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-500 focus:ring-4 focus:ring-[#0df2f2]/10 transition-all outline-none resize-none"
                    placeholder="Project address..."
                    rows={2}
                    defaultValue="Oceanview Estate, 123 Coastal Drive, Malibu, CA 90265"
                  />
                </div>
              </label>
            </form>

            <div className="mt-8 flex justify-end relative z-10">
              <PillButton variant="primary" icon="check">
                Update Profile
              </PillButton>
            </div>
          </FloatingCard>

          {/* Card 2: Security */}
          <FloatingCard
            padding="large"
            className="relative overflow-hidden group shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]"
            variant="default"
          >
            <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
              <span className="material-symbols-outlined text-[150px] text-white rotate-[-12deg]">lock_reset</span>
            </div>

            <div className="mb-8 relative z-10">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0df2f2]">lock</span>
                Change Password
              </h3>
              <p className="text-slate-400 text-sm mt-1">Ensure your account is using a long, random password to stay secure.</p>
            </div>

            <form className="flex flex-col gap-5 max-w-2xl relative z-10">
              <label className="flex flex-col gap-2 group/input">
                <span className="text-sm font-semibold text-slate-400 group-focus-within/input:text-white transition-colors">
                  Current Password
                </span>
                <div className="relative">
                  <input
                    className="w-full bg-white/5 border border-transparent focus:border-[#0df2f2]/50 rounded-xl py-3 px-4 text-white placeholder-slate-500 focus:ring-4 focus:ring-[#0df2f2]/10 transition-all outline-none"
                    placeholder="••••••••••••"
                    type="password"
                  />
                </div>
              </label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <label className="flex flex-col gap-2 group/input">
                  <span className="text-sm font-semibold text-slate-400 group-focus-within/input:text-white transition-colors">
                    New Password
                  </span>
                  <div className="relative">
                    <input
                      className="w-full bg-white/5 border border-transparent focus:border-[#0df2f2]/50 rounded-xl py-3 px-4 text-white placeholder-slate-500 focus:ring-4 focus:ring-[#0df2f2]/10 transition-all outline-none"
                      placeholder="••••••••••••"
                      type="password"
                    />
                  </div>
                </label>

                <label className="flex flex-col gap-2 group/input">
                  <span className="text-sm font-semibold text-slate-400 group-focus-within/input:text-white transition-colors">
                    Confirm New Password
                  </span>
                  <div className="relative">
                    <input
                      className="w-full bg-white/5 border border-transparent focus:border-[#0df2f2]/50 rounded-xl py-3 px-4 text-white placeholder-slate-500 focus:ring-4 focus:ring-[#0df2f2]/10 transition-all outline-none"
                      placeholder="••••••••••••"
                      type="password"
                    />
                  </div>
                </label>
              </div>
            </form>

            <div className="mt-8 flex justify-end relative z-10">
              <PillButton
                variant="ghost"
                className="bg-slate-700 hover:bg-slate-600 text-white border border-slate-600"
                icon="shield"
              >
                Update Password
              </PillButton>
            </div>
          </FloatingCard>

          {/* Footer Action for Mobile */}
          <div className="md:hidden flex justify-center pb-8">
            <button className="flex items-center gap-2 bg-white/5 hover:bg-[#0df2f2]/20 hover:text-[#0df2f2] border border-white/10 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 w-full justify-center">
              <span className="material-symbols-outlined text-[20px]">save</span>
              <span>Save Changes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
