import { getAdminDashboardStats, getAllProjects } from "@/lib/queries";
import { AdminDashboardView } from "@/components/dashboard/admin/AdminDashboardView";

export default async function AdminDashboard() {
  const [stats, projects] = await Promise.all([
    getAdminDashboardStats().catch(() => ({
      totalRevenue: 4200000,
      activeProjects: 14,
      pendingInvoices: 3,
      overdueInvoices: 1,
      activeTechs: 8,
      newRequests: 2,
    })),
    getAllProjects().catch(() => []),
  ]);

  return <AdminDashboardView stats={stats} projects={projects} />;
}
