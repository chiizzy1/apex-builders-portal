"use client";

import { useRef, useState } from "react";
import { CheckCircle, PlayCircle, MapPin, Calendar, Loader2, ChevronRight, Camera, X, ImageIcon } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { N8N_WEBHOOKS } from "@/lib/constants";

interface Job {
  id: string;
  title: string;
  address?: string | null;
  status: string;
  category?: string | null;
  estimated_completion?: string | null;
}

type ActionStatus = "idle" | "loading" | "done" | "error";

const STATUS_FLOW: Record<string, { next: string; label: string; color: string }> = {
  scheduled: { next: "in_progress", label: "Start Job", color: "from-primary to-orange-500" },
  new: { next: "in_progress", label: "Start Job", color: "from-primary to-orange-500" },
  in_progress: { next: "completed", label: "Complete Job", color: "from-green-500 to-emerald-400" },
};

const STATUS_BADGE: Record<string, string> = {
  in_progress: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  scheduled: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  new: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  completed: "bg-slate-500/20 text-slate-400 border-slate-500/30",
};

export function JobActionCard({ job: initialJob }: { job: Job }) {
  const [job, setJob] = useState(initialJob);
  const [actionStatus, setActionStatus] = useState<ActionStatus>("idle");
  const [note, setNote] = useState("");
  const [showInputs, setShowInputs] = useState(false);
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const nextStep = STATUS_FLOW[job.status];
  const isCompleted = job.status === "completed";

  const handlePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPhoto(file);
    setPhotoPreview(URL.createObjectURL(file));
  };

  const clearPhoto = () => {
    setPhoto(null);
    setPhotoPreview(null);
    if (fileRef.current) fileRef.current.value = "";
  };

  const handleAction = async () => {
    if (!nextStep || actionStatus === "loading") return;
    setActionStatus("loading");

    try {
      const supabase = createClient();

      // 1. Update project status in Supabase
      const { error: updateError } = await supabase.from("projects").update({ status: nextStep.next }).eq("id", job.id);

      if (updateError) throw updateError;

      // 2. Upload photo to Supabase Storage (if provided)
      let photoUrl: string | null = null;
      if (photo) {
        const ext = photo.name.split(".").pop();
        const filePath = `project-logs/${job.id}/${Date.now()}.${ext}`;
        const { error: uploadError } = await supabase.storage.from("project-media").upload(filePath, photo, { upsert: false });

        if (!uploadError) {
          const { data: urlData } = supabase.storage.from("project-media").getPublicUrl(filePath);
          photoUrl = urlData?.publicUrl ?? null;
        }
        // Photo upload failure is non-critical — we still proceed
      }

      // 3. Insert a project_log entry with the note + optional photo
      if (note.trim() || photoUrl) {
        await supabase.from("project_logs").insert({
          project_id: job.id,
          description: note.trim() || `Status changed to ${nextStep.next.replace("_", " ")}`,
          log_type: photoUrl ? "photo" : "note",
          media_urls: photoUrl ? [photoUrl] : [],
        });
      }

      // 4. Fire n8n notification (non-blocking)
      if (N8N_WEBHOOKS.JOB_STATUS_UPDATE) {
        fetch(N8N_WEBHOOKS.JOB_STATUS_UPDATE, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            jobId: job.id,
            jobTitle: job.title,
            address: job.address,
            previousStatus: job.status,
            newStatus: nextStep.next,
            note: note.trim() || null,
            photoUrl,
            updatedAt: new Date().toISOString(),
          }),
        }).catch(() => {
          /* Non-critical */
        });
      }

      // 5. Optimistic UI update
      setJob((prev) => ({ ...prev, status: nextStep.next }));
      setActionStatus("done");
      setShowInputs(false);
      setNote("");
      clearPhoto();
      setTimeout(() => setActionStatus("idle"), 3000);
    } catch {
      setActionStatus("error");
      setTimeout(() => setActionStatus("idle"), 3000);
    }
  };

  return (
    <div className="bg-card border border-white/5 rounded-xl p-6 hover:border-white/10 transition-all group">
      {/* Top row */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span
              className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold border capitalize ${
                STATUS_BADGE[job.status] ?? "bg-slate-500/20 text-slate-400 border-slate-500/30"
              }`}
            >
              {job.status.replace("_", " ")}
            </span>
            {job.category && <span className="text-xs text-slate-500 font-medium capitalize">{job.category}</span>}
          </div>
          <h3 className="text-white font-bold text-lg leading-tight truncate">{job.title}</h3>
        </div>
        <ChevronRight className="h-5 w-5 text-slate-600 group-hover:text-slate-400 transition-colors shrink-0 ml-2" />
      </div>

      {/* Meta row */}
      <div className="flex flex-wrap gap-4 mb-5">
        {job.address && (
          <div className="flex items-center gap-1.5 text-sm text-slate-400">
            <MapPin className="h-4 w-4 text-slate-500 shrink-0" />
            <span className="truncate max-w-[200px]">{job.address.split(",")[0]}</span>
          </div>
        )}
        {job.estimated_completion && (
          <div className="flex items-center gap-1.5 text-sm text-slate-400">
            <Calendar className="h-4 w-4 text-slate-500 shrink-0" />
            <span>
              {new Date(job.estimated_completion).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>
        )}
      </div>

      {/* Collapsible note + photo inputs */}
      {showInputs && !isCompleted && (
        <div className="mb-4 space-y-3">
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Add a field note — e.g. 'Electrical phase completed, passed inspection'"
            rows={2}
            className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
          />

          {/* Photo upload */}
          {photoPreview ? (
            <div className="relative rounded-xl overflow-hidden border border-white/10 w-full aspect-video">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photoPreview} alt="Site photo preview" className="w-full h-full object-cover" />
              <button
                onClick={clearPhoto}
                className="absolute top-2 right-2 h-7 w-7 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => fileRef.current?.click()}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-dashed border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-colors text-sm font-medium"
            >
              <Camera className="h-4 w-4" />
              Attach Site Photo
            </button>
          )}
          <input ref={fileRef} type="file" accept="image/*" capture="environment" onChange={handlePhoto} className="hidden" />
        </div>
      )}

      {/* Action row */}
      {isCompleted ? (
        <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
          <CheckCircle className="h-5 w-5" />
          Job Completed
        </div>
      ) : nextStep ? (
        <div className="flex items-center gap-3">
          <button
            onClick={handleAction}
            disabled={actionStatus === "loading" || actionStatus === "done"}
            className={`flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-full font-bold text-sm text-white bg-linear-to-r ${nextStep.color} shadow-glow-primary hover:opacity-90 active:scale-95 transition-all disabled:opacity-60 disabled:cursor-not-allowed`}
          >
            {actionStatus === "loading" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Updating...
              </>
            ) : actionStatus === "done" ? (
              <>
                <CheckCircle className="h-4 w-4" /> Updated!
              </>
            ) : actionStatus === "error" ? (
              <span>Try Again</span>
            ) : (
              <>
                {job.status === "in_progress" ? <CheckCircle className="h-4 w-4" /> : <PlayCircle className="h-4 w-4" />}
                {nextStep.label}
              </>
            )}
          </button>

          {!showInputs && actionStatus === "idle" && (
            <button
              onClick={() => setShowInputs(true)}
              className="px-4 py-3 rounded-full bg-muted text-slate-400 hover:text-white hover:bg-white/10 border border-white/5 text-sm font-medium transition-colors flex items-center gap-1.5"
            >
              <ImageIcon className="h-4 w-4" />
              Note
            </button>
          )}

          {showInputs && (
            <button
              onClick={() => {
                setShowInputs(false);
                setNote("");
                clearPhoto();
              }}
              className="px-4 py-3 rounded-full bg-muted text-slate-400 hover:text-white hover:bg-white/10 border border-white/5 text-sm font-medium transition-colors"
            >
              Cancel
            </button>
          )}
        </div>
      ) : null}
    </div>
  );
}
