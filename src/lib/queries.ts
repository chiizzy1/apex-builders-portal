/**
 * Supabase data access layer.
 * All queries are typed via src/lib/types.ts.
 * These are Server Component-safe functions.
 */

import { createClient } from "@/lib/supabase/server";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import type {
  Profile,
  Project,
  ProjectWithRelations,
  Invoice,
  ProjectLog,
  Asset,
  AssetWithHolder,
  Lead,
  AdminDashboardStats,
  ClientDashboardData,
  TechDashboardData,
} from "@/lib/types";

// Server-side admin client that bypasses RLS (uses service role key).
// Only safe to use in Server Components / API routes — never exposed to the browser.
function createAdminClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}

// ============================================================
// ADMIN QUERIES
// ============================================================

export async function getAdminDashboardStats(): Promise<AdminDashboardStats> {
  const supabase = createAdminClient();

  const [{ count: activeProjects }, { count: newRequests }, { count: activeTechs }, invoicesResult] = await Promise.all([
    supabase.from("projects").select("*", { count: "exact", head: true }).eq("status", "in_progress"),
    supabase.from("projects").select("*", { count: "exact", head: true }).eq("status", "new"),
    supabase
      .from("profiles")
      .select("*", { count: "exact", head: true })
      .eq("role", "tech")
      .eq("is_active", true)
      .eq("on_leave", false),
    supabase.from("invoices").select("total, balance, status"),
  ]);

  const invoices = invoicesResult.data ?? [];
  const totalRevenue = invoices.filter((i) => i.status === "paid").reduce((sum, i) => sum + (i.total ?? 0), 0);
  const pendingInvoices = invoices.filter((i) => i.status === "pending").length;
  const overdueInvoices = invoices.filter((i) => i.status === "overdue").length;

  return {
    totalRevenue,
    activeProjects: activeProjects ?? 0,
    pendingInvoices,
    overdueInvoices,
    activeTechs: activeTechs ?? 0,
    newRequests: newRequests ?? 0,
  };
}

export async function getAllProjects(): Promise<ProjectWithRelations[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("projects")
    .select(
      `
      *,
      client:client_id ( id, full_name, email, phone, avatar_url ),
      tech:assigned_tech_id ( id, full_name, email, phone, avatar_url, skills )
    `,
    )
    .order("created_at", { ascending: false });

  if (error) {
    console.error("[getAllProjects]", error);
    return [];
  }

  return (data ?? []) as unknown as ProjectWithRelations[];
}

export async function getAllTechnicians(): Promise<Profile[]> {
  const supabase = await createClient();

  const { data, error } = await supabase.from("profiles").select("*").eq("role", "tech").order("full_name");

  if (error) {
    console.error("[getAllTechnicians]", error);
    return [];
  }

  return (data ?? []) as Profile[];
}

export async function getAllInvoices(): Promise<(Invoice & { project_title?: string })[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("invoices")
    .select(
      `
      *,
      projects ( title )
    `,
    )
    .order("created_at", { ascending: false });

  if (error) {
    console.error("[getAllInvoices]", error);
    return [];
  }

  return (data ?? []).map((inv: any) => ({
    ...inv,
    project_title: inv.projects?.title ?? null,
  }));
}

export async function getAllLeads(): Promise<Lead[]> {
  const supabase = await createClient();

  const { data, error } = await supabase.from("leads").select("*").order("created_at", { ascending: false });

  if (error) {
    console.error("[getAllLeads]", error);
    return [];
  }

  return (data ?? []) as Lead[];
}

// ============================================================
// CLIENT QUERIES
// ============================================================

export async function getClientDashboardData(clientId: string): Promise<ClientDashboardData> {
  const supabase = await createClient();

  const [projectsResult, invoicesResult] = await Promise.all([
    supabase
      .from("projects")
      .select(
        `
        *,
        client:client_id ( id, full_name, email, phone, avatar_url ),
        tech:assigned_tech_id ( id, full_name, email, phone, avatar_url, skills ),
        logs:project_logs ( * )
      `,
      )
      .eq("client_id", clientId)
      .order("created_at", { ascending: false }),
    supabase.from("invoices").select("*").eq("client_id", clientId).order("created_at", { ascending: false }).limit(5),
  ]);

  const projects = (projectsResult.data ?? []) as unknown as ProjectWithRelations[];
  const activeProject = projects.find((p) => p.status === "in_progress") ?? projects[0] ?? null;
  const recentLogs = (activeProject?.logs ?? []).slice(-5) as ProjectLog[];
  const recentInvoices = (invoicesResult.data ?? []) as Invoice[];

  return { activeProject, recentInvoices, recentLogs };
}

export async function getClientProjects(clientId: string): Promise<ProjectWithRelations[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("projects")
    .select(
      `
      *,
      tech:assigned_tech_id ( id, full_name, email, phone, avatar_url, skills )
    `,
    )
    .eq("client_id", clientId)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("[getClientProjects]", error);
    return [];
  }

  return (data ?? []) as unknown as ProjectWithRelations[];
}

export async function getClientInvoices(clientId: string): Promise<Invoice[]> {
  const supabase = await createClient();

  const { data, error } = await supabase.from("invoices").select("*").eq("client_id", clientId).order("due_date");

  if (error) {
    console.error("[getClientInvoices]", error);
    return [];
  }

  return (data ?? []) as Invoice[];
}

// ============================================================
// TECHNICIAN QUERIES
// ============================================================

export async function getTechDashboardData(techId: string): Promise<TechDashboardData> {
  const supabase = await createClient();

  const [jobsResult, assetsResult] = await Promise.all([
    supabase
      .from("projects")
      .select(
        `
        *,
        client:client_id ( id, full_name, email, phone, avatar_url )
      `,
      )
      .eq("assigned_tech_id", techId)
      .in("status", ["in_progress", "scheduled", "new"])
      .order("estimated_completion"),
    supabase
      .from("assets")
      .select(
        `
        *,
        holder:current_holder_id ( id, full_name, avatar_url )
      `,
      )
      .eq("current_holder_id", techId),
  ]);

  const jobs = (jobsResult.data ?? []) as unknown as ProjectWithRelations[];
  const checkedOutAssets = (assetsResult.data ?? []) as unknown as AssetWithHolder[];

  return {
    assignedJobs: jobs,
    upcomingSchedule: jobs.filter((j) => j.status === "scheduled"),
    checkedOutAssets,
  };
}

export async function getAllAssets(): Promise<AssetWithHolder[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("assets")
    .select(
      `
      *,
      holder:current_holder_id ( id, full_name, avatar_url )
    `,
    )
    .order("category");

  if (error) {
    console.error("[getAllAssets]", error);
    return [];
  }

  return (data ?? []) as unknown as AssetWithHolder[];
}

// ============================================================
// MUTATIONS (used by server actions)
// ============================================================

export async function updateProjectStatus(projectId: string, status: Project["status"]): Promise<boolean> {
  const supabase = await createClient();

  const { error } = await supabase.from("projects").update({ status, updated_at: new Date().toISOString() }).eq("id", projectId);

  if (error) {
    console.error("[updateProjectStatus]", error);
    return false;
  }

  return true;
}

export async function checkoutAsset(assetId: string, userId: string, notes?: string): Promise<boolean> {
  const supabase = await createClient();

  const { error: updateErr } = await supabase
    .from("assets")
    .update({ status: "checked_out", current_holder_id: userId })
    .eq("id", assetId);

  if (updateErr) return false;

  await supabase.from("asset_logs").insert({
    asset_id: assetId,
    user_id: userId,
    action: "check_out",
    notes: notes ?? null,
  });

  return true;
}

export async function checkinAsset(assetId: string, userId: string): Promise<boolean> {
  const supabase = await createClient();

  const { error: updateErr } = await supabase
    .from("assets")
    .update({ status: "available", current_holder_id: null })
    .eq("id", assetId);

  if (updateErr) return false;

  await supabase.from("asset_logs").insert({
    asset_id: assetId,
    user_id: userId,
    action: "check_in",
    notes: null,
  });

  return true;
}

export async function insertLead(lead: {
  name: string;
  email: string;
  phone?: string;
  service_type?: string;
  notes?: string;
}): Promise<boolean> {
  const supabase = await createClient();

  const { error } = await supabase.from("leads").insert(lead);

  if (error) {
    console.error("[insertLead]", error);
    return false;
  }

  return true;
}
