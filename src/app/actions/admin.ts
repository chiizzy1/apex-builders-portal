"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { createClient as createAdminSupabaseClient } from "@supabase/supabase-js";

function adminClient() {
  return createAdminSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}

// ---------------------------------------------------------------------------
// Add Technician
// Creates a new profile row with role = 'tech'.
// ---------------------------------------------------------------------------
export async function addTechnician(formData: FormData): Promise<{ success: boolean; error?: string }> {
  const full_name = (formData.get("full_name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim().toLowerCase();
  const phone = (formData.get("phone") as string)?.trim() || null;
  const skillsRaw = (formData.get("skills") as string)?.trim();
  const skills = skillsRaw
    ? skillsRaw
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
    : [];

  if (!full_name || !email) {
    return { success: false, error: "Full name and email are required." };
  }

  const supabase = adminClient();

  // Create the auth user first so they can log in
  const { data: authData, error: authError } = await supabase.auth.admin.createUser({
    email,
    password: "ChangeMe123!", // Temporary password — user can reset via email
    email_confirm: true,
    user_metadata: { full_name, role: "tech" },
  });

  if (authError) {
    // If user already exists, try inserting directly into profiles
    if (!authError.message.includes("already")) {
      return { success: false, error: authError.message };
    }
  }

  // Upsert profile row (will be triggered automatically by auth.users insert but
  // we do it explicitly here in case the trigger hasn't been set up)
  const newId = authData?.user?.id;
  if (newId) {
    await supabase.from("profiles").upsert({
      id: newId,
      role: "tech",
      full_name,
      email,
      phone,
      skills,
      is_active: true,
      on_leave: false,
    });
  }

  revalidatePath("/admin/team");
  return { success: true };
}

// ---------------------------------------------------------------------------
// Add Project
// Inserts a new project row.
// ---------------------------------------------------------------------------
export async function addProject(formData: FormData): Promise<{ success: boolean; error?: string }> {
  const title = (formData.get("title") as string)?.trim();
  const address = (formData.get("address") as string)?.trim() || null;
  const category = (formData.get("category") as string) || "construction";
  const priority = (formData.get("priority") as string) || "normal";
  const budget = formData.get("budget") ? Number(formData.get("budget")) : null;
  const start_date = (formData.get("start_date") as string) || null;
  const estimated_completion = (formData.get("estimated_completion") as string) || null;

  if (!title) {
    return { success: false, error: "Project title is required." };
  }

  const supabase = adminClient();

  const { error } = await supabase.from("projects").insert({
    title,
    address,
    category,
    priority,
    budget,
    start_date,
    estimated_completion,
    status: "new",
    amount_spent: 0,
    phases: [],
  });

  if (error) {
    console.error("[addProject]", error);
    return { success: false, error: error.message };
  }

  revalidatePath("/admin/projects");
  revalidatePath("/admin/dashboard");
  return { success: true };
}
