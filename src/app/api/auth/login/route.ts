import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// POST /api/auth/login — signs in and redirects to the role-appropriate portal
export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = "/login";
    loginUrl.searchParams.set("error", error.message);
    return NextResponse.redirect(loginUrl, { status: 303 });
  }

  // Fetch profile to determine role
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data: profile } = await supabase.from("profiles").select("role").eq("id", user!.id).single();

  const role = profile?.role ?? "client";
  const destination = role === "admin" ? "/admin/dashboard" : role === "tech" ? "/tech/dashboard" : "/client/dashboard";

  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = destination;
  redirectUrl.search = "";
  return NextResponse.redirect(redirectUrl, { status: 303 });
}
