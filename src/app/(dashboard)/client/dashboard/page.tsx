import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { ClientDashboardView } from "@/components/dashboard/client/ClientDashboardView";

// Demo client UUID — replaced with session user ID once auth is wired
const DEMO_CLIENT_ID = "02bc2c39-263b-49c2-96fd-e593ad16fe42";

function adminClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}

export default async function ClientDashboard() {
  let activeProject = null;
  let recentInvoices: any[] = [];
  let recentLogs: any[] = [];

  try {
    // Use admin client directly so RLS doesn't block the server component
    const supabase = adminClient();
    const [projectsRes, invoicesRes] = await Promise.all([
      supabase
        .from("projects")
        .select("*, tech:assigned_tech_id(id, full_name, email), logs:project_logs(*)")
        .eq("client_id", DEMO_CLIENT_ID)
        .order("created_at", { ascending: false }),
      supabase.from("invoices").select("*").eq("client_id", DEMO_CLIENT_ID).order("created_at", { ascending: false }).limit(5),
    ]);

    const projects = projectsRes.data ?? [];
    activeProject = projects.find((p: any) => p.status === "in_progress") ?? projects[0] ?? null;
    recentLogs = (activeProject?.logs ?? []).slice(-3) as any[];
    recentInvoices = (invoicesRes.data ?? []) as any[];
  } catch {
    // Graceful fallback — static UI still renders
  }

  return <ClientDashboardView activeProject={activeProject} recentInvoices={recentInvoices} recentLogs={recentLogs} />;
}
