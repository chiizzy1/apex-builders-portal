import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { TechDashboardView } from "@/components/dashboard/tech/TechDashboardView";

// Demo tech UUID — replaced with session user ID once auth is wired
const DEMO_TECH_ID = "c26995ea-07f9-4f14-8619-d25f352a3165";

function adminClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}

export default async function TechnicianDashboard() {
  let techProfile: any = null;
  let assignedJobs: any[] = [];
  let checkedOutAssets: any[] = [];
  let availableAssets: any[] = [];

  try {
    const supabase = adminClient();
    const [profileRes, jobsRes, checkedOutRes, availableRes] = await Promise.all([
      supabase.from("profiles").select("*").eq("id", DEMO_TECH_ID).single(),
      supabase
        .from("projects")
        .select("*, client:client_id(id, full_name, email)")
        .eq("assigned_tech_id", DEMO_TECH_ID)
        .in("status", ["in_progress", "scheduled", "new"])
        .order("estimated_completion"),
      supabase.from("assets").select("*").eq("current_holder_id", DEMO_TECH_ID),
      supabase.from("assets").select("*").eq("status", "available").limit(4),
    ]);
    techProfile = profileRes.data;
    assignedJobs = jobsRes.data ?? [];
    checkedOutAssets = checkedOutRes.data ?? [];
    availableAssets = availableRes.data ?? [];
  } catch {
    // Graceful fallback
  }

  return (
    <TechDashboardView
      techProfile={techProfile}
      assignedJobs={assignedJobs}
      checkedOutAssets={checkedOutAssets}
      availableAssets={availableAssets}
    />
  );
}
