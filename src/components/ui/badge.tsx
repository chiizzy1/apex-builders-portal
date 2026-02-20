import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2.5 py-0.5 text-xs font-bold tracking-wide w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none transition-[color,box-shadow] overflow-hidden uppercase",
  {
    variants: {
      variant: {
        default: "bg-primary/20 text-primary border-primary/30 shadow-[0_0_10px_rgba(242,124,13,0.2)]",
        secondary: "bg-slate-800 text-slate-300 border-white/10",
        destructive: "bg-red-500/20 text-red-400 border-red-500/30",
        outline: "text-foreground border-white/10",
        success: "bg-green-500/20 text-green-400 border-green-500/30 shadow-[0_0_10px_rgba(34,197,94,0.2)]",
        cyan: "bg-accent-cyan/20 text-accent-cyan border-accent-cyan/30 shadow-[0_0_10px_rgba(6,182,212,0.2)]",
        purple: "bg-purple-500/20 text-purple-400 border-purple-500/30",
        ghost: "bg-transparent text-slate-400 hover:text-white border-transparent",
        link: "text-primary underline-offset-4 hover:underline border-transparent bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span";

  return <Comp data-slot="badge" data-variant={variant} className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
