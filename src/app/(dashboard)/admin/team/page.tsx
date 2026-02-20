import { PageHeader } from "@/components/ui/PageHeader";
import { FloatingCard } from "@/components/ui/FloatingCard";
import { PillButton } from "@/components/ui/PillButton";

export default function AdminTeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Senior Architect",
      status: "On-Site",
      assignment: "Skyline Tower",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA1m8g5GFDv06LHQl_Rr-3__Js9GsD0T7IAdO7GdY7YinY7Dnp0qTrmDecUtNPYwEzIHGU_oLuBDc5rotLQM0x9_n05OHi9VdXEKgmKI3Kyxj19q1hBOjpeR8oce7AtIP_DIiyt_dm-ceNPy0Y_zW52m63GZfmxtE1j20OUmt9Zy2ab8yzJuTvcSYHN0-5XDVWUDaa6lret1o17bBaei5EGLp_WPUBE5vu94Q4KwdzUB2HZEZbXiO52PcWs4n5jSoTiOUTwYdzy7Xo",
      statusColor: "bg-[#0df2f2]",
      statusBorder: "border-[#0df2f2]/30",
      pillBg: "bg-[#0df2f2]/10",
      pillText: "text-[#0df2f2]",
      pillBorder: "border-[#0df2f2]/20",
    },
    {
      id: 2,
      name: "Marcus Chen",
      role: "Site Manager",
      status: "Available",
      assignment: "Available",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCStxJMAriRjwSZga6t-6W3Z9LpLeBBjQjZbgvrRbk-DBw_pVaff56Qffg-1XYBRKenUgABPkybp3wl-q4vSRWiVa_1QM1WdoR0zW86CKqfG26KF5yrV7hDe2v8KgAFEZxiuDyhcE1AMqZUCk_pCePmvkxN11L0iYvvuhajBEKSH_MqxOOfLu3YlfqEar6QbeH0U75hxipioX02knBagp6jOWtusOX3kjWtzXDYKHLS9NygzaG1IMsln7kO1E7W-_BR28PJ_UOk4rk",
      statusColor: "bg-green-500",
      statusBorder: "border-green-500/30",
      pillBg: "bg-green-500/10",
      pillText: "text-green-500",
      pillBorder: "border-green-500/20",
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Safety Inspector",
      status: "Off-Duty",
      assignment: "Off-Duty",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBAtAfoULB1h8a2tDr8-lrYdkefVxKfQ69fM7KTG39fZTQI1tot3kurHinj1xBLXF8Sjv6AhMFK3uAVqpm3RdoM2pHD9_UmaMSuB3aBOKyNVVQXNrSPvZn2ASiFOJ1CPu6DOwW3A9RYr8XRcLmz5A_GWkkp_2CCe_WO_ixCOgiGxHxK0TNvfDVlySldwgZhD5xsFs-D9XS8IzL8Jp8SG8bm3NqpmJF2K2KDIMCqpF9WoY60joGamY9LwlTLSHIHa39eldiVVB6GuHs",
      statusColor: "bg-slate-500",
      statusBorder: "border-slate-500/30",
      pillBg: "bg-slate-700/30",
      pillText: "text-slate-400",
      pillBorder: "border-slate-600/30",
      isOffDuty: true,
    },
    {
      id: 4,
      name: "David Okonjo",
      role: "Civil Engineer",
      status: "On-Site",
      assignment: "Skyline Tower",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAgSWAqtBJ4wthxGyT465eGSs2RmF94A7YPCqkqh5bBM80VSVfhwxNiSSaqP6O4QMdCgzkOXfjN7SuRcF-MOCI8GMR6DijbCFlSGK18MzH0851Mh7w1SUQK83_4GIbPVPIoAJVbG2n7lNRqTpbmpqVrs55IvsfY5NYpBX9-AMcMGi7CdAanRUb5z9Qpo7b0kBP3bTQD8QaoDZ3UnHnoAVgpPJSgr6brd3U3Oy7lewLu_F9_2xG9Jr5bDUYVKfZ6OLTufG-cb2hvjvg",
      statusColor: "bg-[#0df2f2]",
      statusBorder: "border-[#0df2f2]/30",
      pillBg: "bg-[#0df2f2]/10",
      pillText: "text-[#0df2f2]",
      pillBorder: "border-[#0df2f2]/20",
    },
    {
      id: 5,
      name: "Sophie Miller",
      role: "Interior Designer",
      status: "On-Site",
      assignment: "Metro Hub",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBadXMu8dUihu0wUwFKVKXH-ZE5Jx46g69B-fLrGzYAaIOc2n7LU23dVg5UxnQVRRVO-s6Cuhnmf-VAG-nEYH8RUH4vSjyW6ssbVK8QQwXHuEHZgSnl9jo9G9WC55aa1Vlgabh_Ial1Vud9Xbxm5hhTyeirX4KPNIBOdkD_KfI9CZqwcLJNwPXyG6Ty71Y8IwzDguPRMexF-nE6HrgOvm3lqlUbomFvijy3gGavX_wMXissyy0In4-LW9D0FE5mk6QX-x7ipoQNh7c",
      statusColor: "bg-[#0df2f2]",
      statusBorder: "border-[#0df2f2]/30",
      pillBg: "bg-[#0df2f2]/10",
      pillText: "text-[#0df2f2]",
      pillBorder: "border-[#0df2f2]/20",
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Electrician Lead",
      status: "Available",
      assignment: "Available",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAneI9Vey8S8KOS6TyqNtstmn-lXvh0A5ksI5c53IF_PPY1RoXv9eRueBv3QQUBg4S5tSsQOVB0dNngAuuhfSfGGCTfKrKnHIAiR96Ae5cwOGtIUvWV_nRLGHCtUBai4JO1-urxcgZVhIdUfndES3ZYzS7MGOO37G8oMdB95xWelUsRo4PzibLwXWctO3XYzUssDu58MkKJaJEhRU-SgzoJEyzfHKtT2rXop9xQavTL9bIA0ivlWsctRJDsAFVmb3E6RKmhhGbMpxU",
      statusColor: "bg-green-500",
      statusBorder: "border-green-500/30",
      pillBg: "bg-green-500/10",
      pillText: "text-green-500",
      pillBorder: "border-green-500/20",
    },
    {
      id: 7,
      name: "Ava Patel",
      role: "Project Coordinator",
      status: "On-Site",
      assignment: "Westside Mall",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCfJ-DmH93YDcmNtndzkHQiVtu3VUyxFpSuy7slUejJiGZ3bpd5IUqODYaFt8kah55d9UQUdsuCC0pkRdhZpQHZZHkyMzlg4I21gcaw0-qTPGyEWzzYnN90r5kJUsPXO75cgMtU1Vy-9AAfxZEh0fIrJHXjjNkDTrVeqPi8GYH-aDBuaMeptY951ZSzmA9T-1KtuUA6k7pkbnMf0mtEMcztfuZjRY41Km-EQsK7PhP_9UXNhN8keeBOvWSzhrNzTXa7zU_LGB69WVk",
      statusColor: "bg-[#0df2f2]",
      statusBorder: "border-[#0df2f2]/30",
      pillBg: "bg-[#0df2f2]/10",
      pillText: "text-[#0df2f2]",
      pillBorder: "border-[#0df2f2]/20",
    },
    {
      id: 8,
      name: "Liam O'Connor",
      role: "Structural Engineer",
      status: "Off-Duty",
      assignment: "Off-Duty",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDmrhVKH9Clna0o8kjmHXp82Jp6BC0Hvy_aHEs0DKofiVHKDJ58QDRe-MVNDJ8wckUSNVt9AFSNjdbrjJmc1Bx9WPUrCONx4v0-_R7h5qQDgJg5YEFIg5IuNC_MOSDInskwFgL8qpbSOOyFyiQRv3nr2auy7rrY0WryITea31eblXEmabjYR_FWXYRAOLO2yUqeM5xImSay8snJE3K9Jcwvsbq1OHT5QTONKuhucnteLC1FmUqY8HMo9BD63-hfXjuYpTPmYM3hhj4",
      statusColor: "bg-slate-500",
      statusBorder: "border-slate-500/30",
      pillBg: "bg-slate-700/30",
      pillText: "text-slate-400",
      pillBorder: "border-slate-600/30",
      isOffDuty: true,
    },
  ];

  return (
    <div className="flex-grow px-6 lg:px-12 py-10 max-w-[1600px] mx-auto w-full">
      <PageHeader title="Team Management" subtitle="Oversee assignments, status, and team availability.">
        {/* Search */}
        <div className="relative group w-full sm:w-64">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-slate-500 group-focus-within:text-[#0df2f2] transition-colors">
              search
            </span>
          </div>
          <input
            className="block w-full pl-10 pr-3 py-3 border-none rounded-full leading-5 bg-white/5 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0df2f2]/50 focus:bg-white/10 sm:text-sm transition-all duration-300"
            placeholder="Search team..."
            type="text"
          />
        </div>
        {/* Add Button */}
        <PillButton variant="secondary" icon="add" className="w-full sm:w-auto">
          Add Member
        </PillButton>
      </PageHeader>

      {/* Filters Section */}
      <div className="flex flex-wrap items-center gap-4 mb-10">
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#21242D] hover:bg-[#2A2E39] border border-white/5 transition-all group">
          <span className="text-sm font-medium text-slate-300 group-hover:text-white">Role:</span>
          <span className="text-sm font-bold text-white">All</span>
          <span className="material-symbols-outlined text-slate-500 text-[18px]">keyboard_arrow_down</span>
        </button>
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#21242D] hover:bg-[#2A2E39] border border-white/5 transition-all group">
          <span className="text-sm font-medium text-slate-300 group-hover:text-white">Status:</span>
          <span className="text-sm font-bold text-white">All</span>
          <span className="material-symbols-outlined text-slate-500 text-[18px]">keyboard_arrow_down</span>
        </button>
        <div className="h-8 w-[1px] bg-white/10 mx-2 hidden sm:block"></div>
        <div className="text-sm text-slate-500 font-medium">Showing {teamMembers.length} active members</div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <FloatingCard key={member.id} padding="none" className="relative group">
            <button className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors z-10">
              <span className="material-symbols-outlined">more_horiz</span>
            </button>

            <div className="flex flex-col items-center p-6 pb-2">
              {/* Avatar with Status Ring */}
              <div className="relative mb-5">
                <div
                  className={`w-24 h-24 rounded-full p-1 border-2 ${member.statusBorder} relative ${member.isOffDuty ? "grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all" : ""}`}
                >
                  <img alt={`${member.name} Avatar`} className="w-full h-full rounded-full object-cover" src={member.avatar} />
                </div>
                {/* Status Dot */}
                <div
                  className={`absolute bottom-1 right-1 w-5 h-5 ${member.statusColor} border-4 border-[#21242D] rounded-full shadow-lg`}
                  title={member.status}
                ></div>
              </div>

              {/* Info */}
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-slate-400 text-sm font-medium mb-4">{member.role}</p>

              {/* Assignment Pill */}
              <div
                className={`${member.pillBg} ${member.pillText} px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-6 border ${member.pillBorder}`}
              >
                {member.assignment}
              </div>
            </div>

            {/* Actions Footer */}
            <div className="flex items-center justify-center gap-4 border-t border-white/5 p-6 bg-[#1A1D24]/50">
              <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#0df2f2] hover:text-[#13151A] flex items-center justify-center transition-all text-slate-400">
                <span className="material-symbols-outlined text-[20px]">call</span>
              </button>
              <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#0df2f2] hover:text-[#13151A] flex items-center justify-center transition-all text-slate-400">
                <span className="material-symbols-outlined text-[20px]">mail</span>
              </button>
            </div>
          </FloatingCard>
        ))}
      </div>

      {/* Load More */}
      <div className="mt-12 flex justify-center pb-8">
        <button className="text-slate-400 text-sm font-medium hover:text-[#0df2f2] transition-colors flex items-center gap-2 group">
          Load more members
          <span className="material-symbols-outlined text-[16px] group-hover:translate-y-1 transition-transform">
            expand_more
          </span>
        </button>
      </div>
    </div>
  );
}
