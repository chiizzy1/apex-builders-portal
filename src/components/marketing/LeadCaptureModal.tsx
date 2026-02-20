"use client";

import { useState } from "react";
import { X, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { N8N_WEBHOOKS } from "@/lib/constants";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const SERVICE_OPTIONS = [
  "Kitchen Renovation",
  "Bathroom Renovation",
  "Full Home Renovation",
  "New Construction",
  "Electrical Work",
  "Plumbing",
  "HVAC Installation",
  "Roofing",
  "Commercial Project",
  "Other",
];

type SubmitState = "idle" | "loading" | "success" | "error";

export function LeadCaptureModal({ isOpen, onClose }: Props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    notes: "",
  });
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;

    setSubmitState("loading");

    try {
      const response = await fetch(N8N_WEBHOOKS.LEAD_CAPTURE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Submission failed");
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  };

  const handleClose = () => {
    setSubmitState("idle");
    setForm({ name: "", email: "", phone: "", serviceType: "", notes: "" });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-[#13151A] rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
        {/* Glow accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-primary/20 blur-[80px] pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors z-10"
        >
          <X className="size-5" />
        </button>

        <div className="relative p-8">
          {submitState === "success" ? (
            /* Success State */
            <div className="flex flex-col items-center text-center py-8 gap-4">
              <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                <CheckCircle2 className="size-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Request Received!</h3>
              <p className="text-slate-400 max-w-sm">
                Thanks, <span className="text-white font-semibold">{form.name.split(" ")[0]}</span>! Our team will review your
                request and reach out within 24 hours.
              </p>
              <button
                onClick={handleClose}
                className="mt-4 px-8 py-3 rounded-full bg-primary text-background font-bold hover:opacity-90 transition-opacity"
              >
                Close
              </button>
            </div>
          ) : submitState === "error" ? (
            /* Error State */
            <div className="flex flex-col items-center text-center py-8 gap-4">
              <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                <AlertCircle className="size-8 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Something went wrong</h3>
              <p className="text-slate-400">Please try again or reach us directly.</p>
              <button
                onClick={() => setSubmitState("idle")}
                className="mt-4 px-8 py-3 rounded-full bg-primary text-background font-bold hover:opacity-90 transition-opacity"
              >
                Try Again
              </button>
            </div>
          ) : (
            /* Form */
            <>
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary uppercase tracking-wider mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Free Consultation
                </div>
                <h2 className="text-2xl font-bold text-white mb-1">Request a Demo</h2>
                <p className="text-slate-400 text-sm">
                  Tell us about your project. We&apos;ll set you up with a live walkthrough.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Full Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      placeholder="James Carter"
                      className="bg-[#1E2128] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Email <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      placeholder="james@company.com"
                      className="bg-[#1E2128] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                    />
                  </div>
                </div>

                {/* Phone + Service row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                      placeholder="+1 (555) 000-0000"
                      className="bg-[#1E2128] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Service Type</label>
                    <select
                      value={form.serviceType}
                      onChange={(e) => setForm((f) => ({ ...f, serviceType: e.target.value }))}
                      className="bg-[#1E2128] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select a service…</option>
                      {SERVICE_OPTIONS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Project Notes</label>
                  <textarea
                    value={form.notes}
                    onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
                    placeholder="Tell us about your project — size, timeline, any special requirements…"
                    rows={3}
                    className="bg-[#1E2128] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!form.name || !form.email || submitState === "loading"}
                  className="w-full py-4 rounded-xl bg-primary text-background font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(13,242,242,0.3)] hover:shadow-[0_0_30px_rgba(13,242,242,0.4)] hover:opacity-90 active:scale-98 transition-all flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none mt-2"
                >
                  {submitState === "loading" ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      Sending Request…
                    </>
                  ) : (
                    "Request Demo →"
                  )}
                </button>

                <p className="text-center text-xs text-slate-600">We&apos;ll respond within 24 hours. No spam, ever.</p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
