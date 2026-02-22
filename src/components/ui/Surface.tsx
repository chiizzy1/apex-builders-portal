import { cn } from "@/lib/utils";
import React from "react";

interface SurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /**
   * If true, applies a subtle hover state that slightly brightens the background
   * and border, giving a tactile feel to interactive surfaces.
   */
  interactive?: boolean;
}

/**
 * Surface
 *
 * The unified container standard for the Apex Builders marketing site.
 * This component enforces the "Tier S" absolute standard for dark mode surfaces,
 * ensuring zero visual friction or discrepancy between different sections.
 *
 * Design tokens enforced:
 * - Background: bg-slate-900/40
 * - Blur: backdrop-blur-md
 * - Border: border border-white/5
 * - Radius: rounded-2xl
 */
export const Surface = React.forwardRef<HTMLDivElement, SurfaceProps>(
  ({ className, children, interactive = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl",
          interactive && "transition-all duration-300 hover:bg-slate-900/60 hover:border-white/10 hover:-translate-y-1",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Surface.displayName = "Surface";
