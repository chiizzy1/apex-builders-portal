"use client";

import { useRef, useState, useTransition } from "react";
import { X, Loader2, CheckCircle2, AlertCircle, UserPlus } from "lucide-react";
import { addTechnician } from "@/app/actions/admin";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const SKILL_OPTIONS = [
  "HVAC",
  "Plumbing",
  "Electrical",
  "Roofing",
  "General Construction",
  "Renovation",
  "Painting",
  "Demolition",
  "Carpentry",
  "Concrete",
];

type SubmitState = "idle" | "success" | "error";

export function AddMemberModal({ isOpen, onClose }: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  if (!isOpen) return null;

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) => (prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // Inject skills as comma-separated string
    formData.set("skills", selectedSkills.join(", "));

    startTransition(async () => {
      const result = await addTechnician(formData);
      if (result.success) {
        setSubmitState("success");
        formRef.current?.reset();
        setSelectedSkills([]);
      } else {
        setErrorMsg(result.error ?? "Something went wrong.");
        setSubmitState("error");
      }
    });
  };

  const handleClose = () => {
    setSubmitState("idle");
    setErrorMsg("");
    setSelectedSkills([]);
    formRef.current?.reset();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Panel */}
      <div className="relative w-full max-w-lg bg-[#13151A] rounded-3xl border border-white/10 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Glow accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#0df2f2]/15 blur-[80px] pointer-events-none" />

        {/* Close */}
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
              <h3 className="text-2xl font-bold text-white">Technician Added!</h3>
              <p className="text-slate-400 max-w-sm">
                The new team member has been created. They can log in with a temporary password and reset it via email.
              </p>
              <button
                onClick={handleClose}
                className="mt-4 px-8 py-3 rounded-full bg-[#0df2f2] text-[#13151A] font-bold hover:opacity-90 transition-opacity"
              >
                Done
              </button>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0df2f2]/10 border border-[#0df2f2]/20 text-xs font-medium text-[#0df2f2] uppercase tracking-wider mb-3">
                  <UserPlus className="size-3.5" />
                  New Team Member
                </div>
                <h2 className="text-2xl font-bold text-white mb-1">Add Technician</h2>
                <p className="text-slate-400 text-sm">They&apos;ll receive a temporary password and can reset it via email.</p>
              </div>

              {submitState === "error" && (
                <div className="mb-4 flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                  <AlertCircle className="size-4 shrink-0" />
                  {errorMsg}
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Full Name <span className="text-[#0df2f2]">*</span>
                    </label>
                    <input
                      name="full_name"
                      type="text"
                      required
                      placeholder="Marcus Williams"
                      className="bg-[#1E2128] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#0df2f2]/50 focus:ring-1 focus:ring-[#0df2f2]/30 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Email <span className="text-[#0df2f2]">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="marcus@apexbuilders.com"
                      className="bg-[#1E2128] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#0df2f2]/50 focus:ring-1 focus:ring-[#0df2f2]/30 transition-all"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Phone</label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="bg-[#1E2128] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#0df2f2]/50 focus:ring-1 focus:ring-[#0df2f2]/30 transition-all"
                  />
                </div>

                {/* Skills */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Skills</label>
                  <div className="flex flex-wrap gap-2">
                    {SKILL_OPTIONS.map((skill) => {
                      const selected = selectedSkills.includes(skill);
                      return (
                        <button
                          key={skill}
                          type="button"
                          onClick={() => toggleSkill(skill)}
                          className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                            selected
                              ? "bg-[#0df2f2]/20 text-[#0df2f2] border-[#0df2f2]/40"
                              : "bg-[#1E2128] text-slate-400 border-white/10 hover:border-white/20"
                          }`}
                        >
                          {skill}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full mt-2 py-4 rounded-xl bg-[#0df2f2] text-[#13151A] font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(13,242,242,0.3)] hover:shadow-[0_0_30px_rgba(13,242,242,0.4)] hover:opacity-90 active:scale-98 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      Adding Technician…
                    </>
                  ) : (
                    <>
                      <UserPlus className="size-4" />
                      Add Technician
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-slate-600">
                  Temporary password: <span className="text-slate-500 font-mono">ChangeMe123!</span>
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
