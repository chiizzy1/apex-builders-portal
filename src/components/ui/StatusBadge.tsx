import React from "react";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "active" | "delayed" | "completed" | "pending" | "inactive";
  label: string;
  className?: string;
  pulse?: boolean;
}

export function StatusBadge({ status, label, className, pulse = false }: StatusBadgeProps) {
  const statusStyles = {
    active: {
      bg: "bg-[#0df2f2]",
      text: "text-[#0df2f2]",
    },
    delayed: {
      bg: "bg-red-500",
      text: "text-red-500",
    },
    completed: {
      bg: "bg-green-500",
      text: "text-green-500",
    },
    pending: {
      bg: "bg-yellow-500",
      text: "text-yellow-500",
    },
    inactive: {
      bg: "bg-slate-500",
      text: "text-slate-400",
    },
  };

  const style = statusStyles[status];

  return (
    <div className={cn("flex items-center gap-2 bg-[#1A1D24] px-3 py-1.5 rounded-full border border-white/5", className)}>
      <span className={cn("size-1.5 rounded-full", style.bg, pulse && "animate-pulse")}></span>
      <span className={cn("text-xs font-bold uppercase tracking-wider", style.text)}>{label}</span>
    </div>
  );
}
