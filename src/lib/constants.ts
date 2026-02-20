/**
 * Central configuration for external service endpoints.
 * All values are injected via environment variables at build/runtime.
 */
export const N8N_WEBHOOKS = {
  /** AI Project Assistant — client chat interface */
  AI_CHAT: process.env.NEXT_PUBLIC_N8N_AI_CHAT_WEBHOOK ?? "",
  /** New client lead capture — landing page form submission */
  LEAD_CAPTURE: process.env.NEXT_PUBLIC_N8N_LEAD_WEBHOOK ?? "",
  /** Technician job status update — fires when tech starts or completes a job */
  JOB_STATUS_UPDATE: process.env.NEXT_PUBLIC_N8N_JOB_STATUS_UPDATE_NOTIFICATION ?? "",
} as const;
