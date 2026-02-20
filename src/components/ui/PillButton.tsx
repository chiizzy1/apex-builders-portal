import React from "react";
import { cn } from "@/lib/utils";

interface PillButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger" | "success" | "ghost";
  icon?: string;
  className?: string;
}

export function PillButton({ children, variant = "primary", icon, className, ...props }: PillButtonProps) {
  const variantStyles = {
    primary:
      "bg-[#f2700d] hover:bg-orange-600 text-white shadow-[0_0_20px_-5px_rgba(242,112,13,0.5)] hover:shadow-[0_0_30px_-5px_rgba(242,112,13,0.6)]",
    secondary:
      "bg-[#0df2f2] hover:bg-[#06b6d4] text-[#13151A] shadow-[0_0_20px_-5px_rgba(13,242,242,0.5)] hover:shadow-[0_0_30px_-5px_rgba(13,242,242,0.6)]",
    success:
      "bg-emerald-500 hover:bg-emerald-600 text-white shadow-[0_0_20px_-5px_rgba(16,185,129,0.5)] hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.6)]",
    danger:
      "bg-red-500 hover:bg-red-600 text-white shadow-[0_0_20px_-5px_rgba(239,68,68,0.5)] hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.6)]",
    ghost: "bg-[#21242D] hover:bg-[#2D313A] border border-[#2D313A] text-slate-200",
  };

  return (
    <button
      className={cn(
        "flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm hover:-translate-y-0.5 transition-all duration-300",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {icon && <span className="material-symbols-outlined text-[20px]">{icon}</span>}
      {children}
    </button>
  );
}
