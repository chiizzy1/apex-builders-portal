"use client";

import { useState } from "react";
import { Loader2, CheckCircle } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

interface Asset {
  id: string;
  name: string;
  asset_tag: string;
  category: string | null;
  status: string;
  holder?: { full_name: string } | null;
}

type ActionStatus = "idle" | "loading" | "done" | "error";

// Material symbol icons mapped by category
const CATEGORY_ICON: Record<string, string> = {
  power_tool: "handyman",
  hand_tool: "build",
  measurement: "straighten",
  safety: "shield",
  heavy: "forklift",
  electrical: "bolt",
  default: "construction",
};

export function AssetCheckoutCard({ asset: initialAsset, techId }: { asset: Asset; techId: string }) {
  const [asset, setAsset] = useState(initialAsset);
  const [status, setStatus] = useState<ActionStatus>("idle");

  const isAvailable = asset.status === "available";
  const isCheckedOutByMe = asset.status === "checked_out" && !asset.holder;

  const handleCheckout = async () => {
    if (status === "loading") return;
    setStatus("loading");

    const supabase = createClient();

    if (isAvailable) {
      // Check Out
      const { error } = await supabase
        .from("assets")
        .update({ status: "checked_out", current_holder_id: techId })
        .eq("id", asset.id);

      if (!error) {
        await supabase.from("asset_logs").insert({
          asset_id: asset.id,
          user_id: techId,
          action: "check_out",
        });
        setAsset((a) => ({ ...a, status: "checked_out", holder: null }));
        setStatus("done");
      } else {
        setStatus("error");
      }
    } else {
      // Check In
      const { error } = await supabase.from("assets").update({ status: "available", current_holder_id: null }).eq("id", asset.id);

      if (!error) {
        await supabase.from("asset_logs").insert({
          asset_id: asset.id,
          user_id: techId,
          action: "check_in",
        });
        setAsset((a) => ({ ...a, status: "available", holder: null }));
        setStatus("done");
      } else {
        setStatus("error");
      }
    }

    setTimeout(() => setStatus("idle"), 2500);
  };

  const icon = CATEGORY_ICON[asset.category ?? "default"] ?? CATEGORY_ICON.default;
  const canAct = isAvailable || isCheckedOutByMe;

  return (
    <div
      className={`group flex flex-col justify-between overflow-hidden rounded-3xl border bg-[#21242D] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-2 p-6 ${
        isAvailable
          ? "border-white/5 hover:shadow-[0_0_20px_rgba(13,242,242,0.15)] hover:ring-1 hover:ring-[#0df2f2]/50"
          : "border-white/5 hover:ring-1 hover:ring-white/10"
      }`}
    >
      {/* Icon + Badge */}
      <div className="mb-6 flex items-start justify-between">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-[#13151A]/50 text-slate-200 transition-colors ${
            isAvailable ? "group-hover:text-[#0df2f2] group-hover:bg-[#0df2f2]/10" : "group-hover:text-white"
          }`}
        >
          <span className="material-symbols-outlined text-3xl">{icon}</span>
        </div>

        <div
          className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ring-1 ring-inset ${
            isAvailable
              ? "bg-emerald-500/10 text-emerald-400 ring-emerald-500/20"
              : "bg-orange-500/10 text-orange-400 ring-orange-500/20"
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              isAvailable
                ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"
                : "bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.8)]"
            }`}
          />
          {isAvailable ? "Available" : "In Use"}
        </div>
      </div>

      {/* Info */}
      <div>
        <h3 className={`mb-1 text-xl font-bold text-white transition-colors ${isAvailable ? "group-hover:text-[#0df2f2]" : ""}`}>
          {asset.name}
        </h3>
        <p className="text-sm font-medium text-slate-500">
          {asset.id.slice(0, 8).toUpperCase()}
          {asset.holder?.full_name ? ` • ${asset.holder.full_name}` : ""}
        </p>
      </div>

      {/* Action Button */}
      <div className="mt-6 pt-6 border-t border-white/5">
        {canAct ? (
          <button
            onClick={handleCheckout}
            disabled={status === "loading" || status === "done"}
            className={`w-full rounded-full py-3 text-sm font-bold transition-all active:scale-95 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed ${
              isAvailable ? "bg-[#0df2f2] text-[#13151A] hover:bg-[#0df2f2]/90" : "bg-slate-700 text-white hover:bg-slate-600"
            }`}
          >
            {status === "loading" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Updating...
              </>
            ) : status === "done" ? (
              <>
                <CheckCircle className="h-4 w-4" /> Done!
              </>
            ) : isAvailable ? (
              "Check Out"
            ) : (
              "Return Item"
            )}
          </button>
        ) : (
          <div className="w-full rounded-full py-3 text-sm font-bold text-center text-slate-500 bg-slate-800/40 border border-white/5">
            Checked Out
          </div>
        )}
      </div>
    </div>
  );
}
