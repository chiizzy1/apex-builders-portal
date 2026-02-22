import { N8N_WEBHOOKS } from "@/lib/constants";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { sessionId, message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    if (!N8N_WEBHOOKS.AI_CHAT) {
      console.warn("N8N_AI_CHAT_WEBHOOK is not configured.");
      // Fallback for local development if webhook isn't set
      return NextResponse.json({
        response: "I'm a placeholder AI. The backend webhook is not connected yet, but I'm ready to help you once it is!",
      });
    }

    const response = await fetch(N8N_WEBHOOKS.AI_CHAT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sessionId,
        message,
        source: "apex_landing_page",
      }),
    });

    if (!response.ok) {
      throw new Error(`n8n webhook responded with status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({ error: "Failed to process chat message" }, { status: 500 });
  }
}
