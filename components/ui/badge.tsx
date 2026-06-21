import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'accent';
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  let variantStyles = "";
  switch (variant) {
    case "default":
      variantStyles = "bg-navy text-cloud border-transparent";
      break;
    case "secondary":
      variantStyles = "bg-sky-tint text-navy border-sky-blue/20";
      break;
    case "accent":
      variantStyles = "bg-ignition-red text-white border-transparent";
      break;
    case "destructive":
      variantStyles = "bg-red-600 text-white border-transparent";
      break;
    case "outline":
      variantStyles = "border border-sky-blue/30 text-sky-blue";
      break;
  }

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold tracking-wider transition-colors focus:outline-none focus:ring-2 focus:ring-sky-blue",
        variantStyles,
        className
      )}
      {...props}
    />
  )
}

export { Badge }
