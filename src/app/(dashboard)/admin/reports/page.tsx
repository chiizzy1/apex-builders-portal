import { PageHeader } from "@/components/ui/PageHeader";
import { FloatingCard } from "@/components/ui/FloatingCard";
import { PillButton } from "@/components/ui/PillButton";

export default function AdminReportsPage() {
  const invoices = [
    {
      id: "#INV-2049",
      client: "TechSpace HQ",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBM5OzGgJjxsZ4vTUm8pZ51br-f0OzOAEZfxP1jFFYRdrJJprdLOT2YihBx5Aj6Ten7IToeoMPDrhwFrzAB4utrjU8Qay1N33oz-JtqbtlvHL_JuR0LecHD4oHSQfu2leT3DW8eas4kLhQ5CRrr1nC_5-o94zUZO7ObUuZC39JSKOxoOaZdCjb6HtP3SqKnnaZvjBZwfQn7v5g1yEn3ZxBvfXMp1oudnrQ37uN5mvnJ0Fj3pjPkb1rFbccMgF-ONvQZfl3L1Soo99M",
      date: "Oct 24, 2023",
      amount: "$12,000.00",
      status: "Paid",
      statusColor: "text-emerald-400",
      statusBg: "bg-emerald-500/10",
      statusBorder: "border-emerald-500/20",
      dotColor: "bg-emerald-400",
    },
    {
      id: "#INV-2050",
      client: "Apex Lofts",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDQ7cKJFhKxU20QPy-bdpuk1KsdG4_8Vi7C7a3wpcQfN3Lo1ejSqyoIVOEr0-OxE2UdlNbmKXaF0L_CY8Y4wVsBwqjIZ5JFjk48sw_VrFEy67dbeDLJWG2dYQNu4u5H2eVBrnmmd0_wrt0xMt5cnm0OCC9zXnU1Pv_dAfB_rb8hUn2-F6SzDvt_UNqKpbQsKmuhAh9467xqLOH7oUC2ojwulYx1ql2_e_W_usgBirEwfN3-ZclG7VJI5oWL7SNLmaXDVC0l_IGRQ30",
      date: "Oct 26, 2023",
      amount: "$4,500.00",
      status: "Pending",
      statusColor: "text-amber-400",
      statusBg: "bg-amber-500/10",
      statusBorder: "border-amber-500/20",
      dotColor: "bg-amber-400",
    },
    {
      id: "#INV-2051",
      client: "Global Logistics",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCumxxMnJlo5LVs_A-puOjWD120en3VX1Pbe4CnDnsCxv3DrngA7Rqh4E32n6gNn0q1oQazsQOtIzclAHEtgo2JMij6Nq97jKVsekE_OVujCRQtgZV07o1w88WHWBqgVWtbGJ8TTq9MSwjW8gIQQ3Lq9LEkuDu4BLvfd7c0AgInoVZ-0dTI-m7MJvKTcRVPUELMwOVZD_PVnitc9FkYd9kjO1KXw4mBz8Z7ih_Cg8MGf916I_wM3c42_OEB2mnvuFEF39ydDRLM_64",
      date: "Oct 28, 2023",
      amount: "$8,250.00",
      status: "Overdue",
      statusColor: "text-rose-400",
      statusBg: "bg-rose-500/10",
      statusBorder: "border-rose-500/20",
      dotColor: "bg-rose-400",
    },
    {
      id: "#INV-2052",
      client: "Urban Retail Inc.",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBs3dKlff2u_IjIt5DHaoGsdCHK2lNMBI-Ao-CxV7BGuCp0v8a9e8nlJa2XCIbctLmRRRoVRF2WfloBlgugWLyjCLynKf9xbt7grf0KMnma8dr7739QOep-Rc-mP5fZyY_xXs08qke7Dqj1--5o0mI_sC9meOWBDpqI1mpOGPgFvbNDn28n-GXdfdbo3Z37QUY4UQRRyHP4xVFz4PCc5DGuBjy4MVrq3d9_MYXBBHsrhSMGRZ_ECs_HinKOIEK1XZlVygSChLVBtaw",
      date: "Nov 01, 2023",
      amount: "$18,900.00",
      status: "Paid",
      statusColor: "text-emerald-400",
      statusBg: "bg-emerald-500/10",
      statusBorder: "border-emerald-500/20",
      dotColor: "bg-emerald-400",
    },
  ];

  return (
    <div className="flex-1 w-full max-w-[1400px] mx-auto p-6 md:p-8 flex flex-col gap-8 relative">
      {/* Ambient Glow Backgrounds */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#0df2f2]/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#a855f7]/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      {/* Page Header */}
      <PageHeader title="Reports & Analytics" subtitle="Real-time overview of company performance">
        <div className="relative group">
          <button className="flex items-center gap-2 bg-[#1E2128] text-white px-5 py-3 rounded-full font-bold text-sm border border-white/5 hover:border-[#0df2f2]/50 transition-all shadow-lg hover:shadow-[#0df2f2]/10">
            <span className="material-symbols-outlined text-slate-400">calendar_today</span>
            Last 30 Days
            <span className="material-symbols-outlined text-slate-400">expand_more</span>
          </button>
        </div>
        <PillButton variant="secondary" icon="download">
          Export Report
        </PillButton>
      </PageHeader>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1: Revenue */}
        <FloatingCard padding="default" className="group shadow-[0_10px_30px_-5px_rgba(0,0,0,0.5)]">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-6xl text-[#0df2f2]">payments</span>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="size-12 rounded-2xl bg-[#0df2f2]/10 flex items-center justify-center text-[#0df2f2] border border-[#0df2f2]/20 shadow-[0_0_15px_rgba(13,242,242,0.15)]">
              <span className="material-symbols-outlined">attach_money</span>
            </div>
            <span className="bg-[#13151A] text-emerald-400 text-xs font-bold px-2 py-1 rounded-lg border border-emerald-400/20 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">trending_up</span> +12%
            </span>
          </div>
          <p className="text-slate-400 font-medium mb-1">Total Revenue</p>
          <h3 className="text-3xl font-black text-white tracking-tight">$124,500</h3>
        </FloatingCard>

        {/* Card 2: Active Projects */}
        <FloatingCard padding="default" className="group shadow-[0_10px_30px_-5px_rgba(0,0,0,0.5)]">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-6xl text-[#a855f7]">architecture</span>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="size-12 rounded-2xl bg-[#a855f7]/10 flex items-center justify-center text-[#a855f7] border border-[#a855f7]/20 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
              <span className="material-symbols-outlined">construction</span>
            </div>
            <span className="bg-[#13151A] text-emerald-400 text-xs font-bold px-2 py-1 rounded-lg border border-emerald-400/20 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">trending_up</span> +3
            </span>
          </div>
          <p className="text-slate-400 font-medium mb-1">Active Projects</p>
          <h3 className="text-3xl font-black text-white tracking-tight">24</h3>
        </FloatingCard>

        {/* Card 3: Completed */}
        <FloatingCard padding="default" className="group shadow-[0_10px_30px_-5px_rgba(0,0,0,0.5)]">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-6xl text-[#f97316]">verified</span>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="size-12 rounded-2xl bg-[#f97316]/10 flex items-center justify-center text-[#f97316] border border-[#f97316]/20 shadow-[0_0_15px_rgba(249,115,22,0.15)]">
              <span className="material-symbols-outlined">check_circle</span>
            </div>
            <span className="bg-[#13151A] text-emerald-400 text-xs font-bold px-2 py-1 rounded-lg border border-emerald-400/20 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">trending_up</span> +2
            </span>
          </div>
          <p className="text-slate-400 font-medium mb-1">Completed Jobs</p>
          <h3 className="text-3xl font-black text-white tracking-tight">12</h3>
        </FloatingCard>

        {/* Card 4: Utilization */}
        <FloatingCard padding="default" className="group shadow-[0_10px_30px_-5px_rgba(0,0,0,0.5)]">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-6xl text-white">pie_chart</span>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="size-12 rounded-2xl bg-white/10 flex items-center justify-center text-white border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              <span className="material-symbols-outlined">analytics</span>
            </div>
            <span className="bg-[#13151A] text-emerald-400 text-xs font-bold px-2 py-1 rounded-lg border border-emerald-400/20 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">trending_up</span> +5%
            </span>
          </div>
          <p className="text-slate-400 font-medium mb-1">Utilization Rate</p>
          <h3 className="text-3xl font-black text-white tracking-tight">88%</h3>
        </FloatingCard>
      </div>

      {/* Main Charts Section */}
      <div className="flex flex-col lg:flex-row gap-6 h-auto lg:h-[420px]">
        {/* Left: Revenue Over Time */}
        <FloatingCard
          padding="large"
          className="lg:w-[65%] flex flex-col shadow-[0_10px_30px_-5px_rgba(0,0,0,0.5)] cursor-default"
          variant="default"
        >
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-xl font-bold text-white">Revenue Over Time</h3>
              <p className="text-slate-400 text-sm mt-1">Income trends compared to previous period</p>
            </div>
            <button className="size-8 rounded-full bg-[#13151A] hover:bg-white/10 flex items-center justify-center transition-colors text-slate-400">
              <span className="material-symbols-outlined text-sm">more_horiz</span>
            </button>
          </div>
          <div className="flex-1 w-full relative">
            {/* Custom SVG Chart */}
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 300">
              <defs>
                <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#0df2f2" stopOpacity="0.3"></stop>
                  <stop offset="100%" stopColor="#0df2f2" stopOpacity="0.0"></stop>
                </linearGradient>
                <filter height="140%" id="glow" width="140%" x="-20%" y="-20%">
                  <feGaussianBlur result="coloredBlur" stdDeviation="4"></feGaussianBlur>
                  <feMerge>
                    <feMergeNode in="coloredBlur"></feMergeNode>
                    <feMergeNode in="SourceGraphic"></feMergeNode>
                  </feMerge>
                </filter>
              </defs>
              {/* Grid Lines */}
              <line stroke="#2D3748" strokeDasharray="4 4" x1="0" x2="800" y1="250" y2="250"></line>
              <line stroke="#2D3748" strokeDasharray="4 4" x1="0" x2="800" y1="175" y2="175"></line>
              <line stroke="#2D3748" strokeDasharray="4 4" x1="0" x2="800" y1="100" y2="100"></line>
              <line stroke="#2D3748" strokeDasharray="4 4" x1="0" x2="800" y1="25" y2="25"></line>
              {/* Area Fill */}
              <path
                d="M0,250 C100,200 200,280 300,150 C400,20 500,100 600,80 C700,60 750,120 800,50 L800,300 L0,300 Z"
                fill="url(#chartGradient)"
              ></path>
              {/* Line */}
              <path
                d="M0,250 C100,200 200,280 300,150 C400,20 500,100 600,80 C700,60 750,120 800,50"
                fill="none"
                filter="url(#glow)"
                stroke="#0df2f2"
                strokeLinecap="round"
                strokeWidth="3"
              ></path>
              {/* Points */}
              <circle cx="300" cy="150" fill="#13151A" r="4" stroke="#0df2f2" strokeWidth="2"></circle>
              <circle cx="600" cy="80" fill="#13151A" r="4" stroke="#0df2f2" strokeWidth="2"></circle>
              <circle cx="800" cy="50" fill="#0df2f2" r="6" stroke="#fff" strokeWidth="2"></circle>
            </svg>
            {/* X Axis Labels */}
            <div className="flex justify-between mt-2 text-xs font-medium text-slate-500 uppercase tracking-wider">
              <span>Nov 01</span>
              <span>Nov 08</span>
              <span>Nov 15</span>
              <span>Nov 22</span>
              <span>Nov 29</span>
            </div>
          </div>
        </FloatingCard>

        {/* Right: Projects by Category */}
        <FloatingCard
          padding="large"
          className="lg:w-[35%] flex flex-col shadow-[0_10px_30px_-5px_rgba(0,0,0,0.5)] cursor-default"
          variant="default"
        >
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white">Projects by Category</h3>
            <p className="text-slate-400 text-sm mt-1">Distribution of active jobs</p>
          </div>
          <div className="flex flex-col justify-center flex-1 gap-6">
            {/* Commercial */}
            <div className="group">
              <div className="flex justify-between items-end mb-2">
                <span className="text-slate-300 font-medium">Commercial</span>
                <span className="text-white font-bold">12</span>
              </div>
              <div className="h-3 w-full bg-[#13151A] rounded-full overflow-hidden">
                <div className="h-full bg-[#0df2f2] w-[65%] rounded-full shadow-[0_0_10px_rgba(13,242,242,0.6)] relative group-hover:w-[68%] transition-all duration-500">
                  <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50"></div>
                </div>
              </div>
            </div>
            {/* Residential */}
            <div className="group">
              <div className="flex justify-between items-end mb-2">
                <span className="text-slate-300 font-medium">Residential</span>
                <span className="text-white font-bold">8</span>
              </div>
              <div className="h-3 w-full bg-[#13151A] rounded-full overflow-hidden">
                <div className="h-full bg-[#a855f7] w-[45%] rounded-full shadow-[0_0_10px_rgba(168,85,247,0.6)] relative group-hover:w-[48%] transition-all duration-500">
                  <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50"></div>
                </div>
              </div>
            </div>
            {/* Industrial */}
            <div className="group">
              <div className="flex justify-between items-end mb-2">
                <span className="text-slate-300 font-medium">Industrial</span>
                <span className="text-white font-bold">4</span>
              </div>
              <div className="h-3 w-full bg-[#13151A] rounded-full overflow-hidden">
                <div className="h-full bg-[#f97316] w-[20%] rounded-full shadow-[0_0_10px_rgba(249,115,22,0.6)] relative group-hover:w-[23%] transition-all duration-500">
                  <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50"></div>
                </div>
              </div>
            </div>
          </div>
        </FloatingCard>
      </div>

      {/* Recent Invoices Table */}
      <FloatingCard padding="large" className="shadow-[0_10px_30px_-5px_rgba(0,0,0,0.5)] cursor-default" variant="default">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-white">Recent Invoices</h3>
          <button className="text-[#0df2f2] text-sm font-bold hover:text-white transition-colors">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-xs text-slate-500 uppercase tracking-wider border-b border-white/5">
                <th className="pb-4 font-semibold pl-2">Invoice ID</th>
                <th className="pb-4 font-semibold">Client</th>
                <th className="pb-4 font-semibold">Date</th>
                <th className="pb-4 font-semibold text-right">Amount</th>
                <th className="pb-4 font-semibold text-center">Status</th>
                <th className="pb-4 font-semibold text-right pr-2">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {invoices.map((invoice, idx) => (
                <tr key={idx} className="group hover:bg-white/5 transition-colors border-b border-white/5 last:border-0 relative">
                  <td className="py-4 pl-2 font-mono text-slate-400">{invoice.id}</td>
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="size-8 rounded-full bg-cover bg-center"
                        style={{ backgroundImage: `url('${invoice.avatar}')` }}
                      ></div>
                      <span className="text-white font-medium">{invoice.client}</span>
                    </div>
                  </td>
                  <td className="py-4 text-slate-400">{invoice.date}</td>
                  <td className="py-4 text-right font-bold text-white text-base">{invoice.amount}</td>
                  <td className="py-4 text-center">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${invoice.statusBg} ${invoice.statusColor} border ${invoice.statusBorder}`}
                    >
                      <span className={`size-1.5 rounded-full ${invoice.dotColor}`}></span> {invoice.status}
                    </span>
                  </td>
                  <td className="py-4 text-right pr-2">
                    <button className="size-8 rounded-full hover:bg-white/10 flex items-center justify-center ml-auto transition-colors text-slate-400 hover:text-white">
                      <span className="material-symbols-outlined text-base">more_vert</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </FloatingCard>
    </div>
  );
}
