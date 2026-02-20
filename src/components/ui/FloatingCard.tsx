import React from "react";
import { cn } from "@/lib/utils";

interface FloatingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "interactive";
  padding?: "none" | "default" | "large";
}

export function FloatingCard({ children, className, variant = "interactive", padding = "default", ...props }: FloatingCardProps) {
  return (
    <div
      className={cn(
        // Base styling for the premium card
        "bg-[#21242D] border border-[#2D313A] rounded-[2rem] relative overflow-hidden",
        "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]",

        // Padding variants
        padding === "none" && "p-0",
        padding === "default" && "p-6",
        padding === "large" && "p-8",

        // Interactive styling (hover effects)
        variant === "interactive" &&
          "hover:border-slate-600/50 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] transition-all duration-300 group hover:-translate-y-1",

        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
