import { NextRequest, NextResponse } from "next/server";
import { insertLead } from "@/lib/queries";

// Fallback API route for lead capture when the n8n webhook env var is not set.
// The LeadCaptureModal calls this if NEXT_PUBLIC_N8N_LEAD_WEBHOOK is empty.
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, serviceType, notes } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    const success = await insertLead({
      name,
      email,
      phone: phone || undefined,
      service_type: serviceType || undefined,
      notes: notes || undefined,
    });

    if (!success) {
      return NextResponse.json({ error: "Failed to save lead." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[POST /api/leads]", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
