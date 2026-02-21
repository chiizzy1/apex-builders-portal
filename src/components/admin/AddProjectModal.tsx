"use client";

import { useRef, useState, useTransition } from "react";
import { X, Loader2, CheckCircle2, AlertCircle, Plus } from "lucide-react";
import { addProject } from "@/app/actions/admin";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CATEGORIES = [
  { value: "hvac", label: "HVAC" },
  { value: "plumbing", label: "Plumbing" },
  { value: "roofing", label: "Roofing" },
  { value: "electrical", label: "Electrical" },
  { value: "renovation", label: "Renovation" },
  { value: "construction", label: "General Construction" },
  { value: "other", label: "Other" },
];

const PRIORITIES = [
  { value: "low", label: "Low" },
  { value: "normal", label: "Normal" },
  { value: "high", label: "High" },
  { value: "urgent", label: "Urgent" },
];

type SubmitState = "idle" | "success" | "error";

export function AddProjectModal({ isOpen, onClose }: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      const result = await addProject(formData);
      if (result.success) {
        setSubmitState("success");
        formRef.current?.reset();
      } else {
        setErrorMsg(result.error ?? "Something went wrong.");
        setSubmitState("error");
      }
    });
  };

  const handleClose = () => {
    setSubmitState("idle");
    setErrorMsg("");
    formRef.current?.reset();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div className="relative w-full max-w-lg bg-[#13151A] rounded-3xl border border-white/10 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#f97316]/10 blur-[80px] pointer-events-none" />

        <button
          onClick={handleClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors z-10"
        >
          <X className="size-5" />
        </button>

        <div className="relative p-8 overflow-y-auto flex-1">
          {submitState === "success" ? (
            <div className="flex flex-col items-center text-center py-8 gap-4">
              <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                <CheckCircle2 className="size-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Project Created!</h3>
              <p className="text-slate-400 max-w-sm">
                The new project is now visible in the dashboard with status <strong className="text-white">New</strong>.
              </p>
              <button
                onClick={handleClose}
                className="mt-4 px-8 py-3 rounded-full bg-[#f97316] text-white font-bold hover:opacity-90 transition-opacity"
              >
                Done
              </button>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f97316]/10 border border-[#f97316]/20 text-xs font-medium text-[#f97316] uppercase tracking-wider mb-3">
                  <Plus className="size-3.5" />
                  New Project
                </div>
                <h2 className="text-2xl font-bold text-white mb-1">Create Project</h2>
                <p className="text-slate-400 text-sm">Fill in the details to create a new job.</p>
              </div>

              {submitState === "error" && (
                <div className="mb-4 flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                  <AlertCircle className="size-4 shrink-0" />
                  {errorMsg}
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Title */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Project Title <span className="text-[#f97316]">*</span>
                  </label>
                  <input
                    name="title"
                    type="text"
                    required
                    placeholder="Kitchen Renovation — 45 Oak Street"
                    className="bg-[#1E2128] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#f97316]/50 focus:ring-1 focus:ring-[#f97316]/30 transition-all"
                  />
                </div>

                {/* Address */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Site Address</label>
                  <input
                    name="address"
                    type="text"
                    placeholder="45 Oak Street, Houston, TX"
                    className="bg-[#1E2128] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#f97316]/50 focus:ring-1 focus:ring-[#f97316]/30 transition-all"
                  />
                </div>

                {/* Category + Priority */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Category</label>
                    <select
                      name="category"
                      defaultValue="construction"
                      className="bg-[#1E2128] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#f97316]/50 focus:ring-1 focus:ring-[#f97316]/30 transition-all appearance-none cursor-pointer"
                    >
                      {CATEGORIES.map((c) => (
                        <option key={c.value} value={c.value}>
                          {c.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Priority</label>
                    <select
                      name="priority"
                      defaultValue="normal"
                      className="bg-[#1E2128] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#f97316]/50 focus:ring-1 focus:ring-[#f97316]/30 transition-all appearance-none cursor-pointer"
                    >
                      {PRIORITIES.map((p) => (
                        <option key={p.value} value={p.value}>
                          {p.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Budget */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Budget (USD)</label>
                  <input
                    name="budget"
                    type="number"
                    min={0}
                    placeholder="e.g. 25000"
                    className="bg-[#1E2128] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#f97316]/50 focus:ring-1 focus:ring-[#f97316]/30 transition-all"
                  />
                </div>

                {/* Dates */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Start Date</label>
                    <input
                      name="start_date"
                      type="date"
                      className="bg-[#1E2128] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#f97316]/50 focus:ring-1 focus:ring-[#f97316]/30 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Est. Completion</label>
                    <input
                      name="estimated_completion"
                      type="date"
                      className="bg-[#1E2128] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#f97316]/50 focus:ring-1 focus:ring-[#f97316]/30 transition-all"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full mt-2 py-4 rounded-xl bg-[#f97316] text-white font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:opacity-90 active:scale-98 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      Creating…
                    </>
                  ) : (
                    <>
                      <Plus className="size-4" />
                      Create Project
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
