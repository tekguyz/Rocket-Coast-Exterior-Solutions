import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    let variantStyles = "";
    switch (variant) {
      case "default":
        variantStyles = "bg-ignition-red text-white hover:bg-ignition-red/90 shadow-md active:scale-98";
        break;
      case "destructive":
        variantStyles = "bg-red-600 text-white hover:bg-red-700 active:scale-98 shadow-sm";
        break;
      case "outline":
        variantStyles = "border border-sky-blue/30 text-ink hover:bg-sky-tint/50 hover:border-sky-blue/60 active:scale-98";
        break;
      case "secondary":
        variantStyles = "bg-sky-tint text-navy border border-sky-blue/10 hover:bg-sky-tint/80 active:scale-98";
        break;
      case "ghost":
        variantStyles = "text-ink hover:bg-sky-tint/30";
        break;
      case "link":
        variantStyles = "text-sky-blue underline-offset-4 hover:underline";
        break;
    }

    let sizeStyles = "";
    switch (size) {
      case "default":
        sizeStyles = "h-11 px-6 py-2.5 text-sm";
        break;
      case "sm":
        sizeStyles = "h-9 px-4 text-xs rounded-md";
        break;
      case "lg":
        sizeStyles = "h-14 px-10 text-base rounded-lg";
        break;
      case "icon":
        sizeStyles = "h-11 w-11 flex items-center justify-center rounded-md";
        break;
    }

    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-blue disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
          variantStyles,
          sizeStyles,
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
