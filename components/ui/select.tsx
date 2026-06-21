import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, children, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <select
          className={cn(
            "flex h-11 w-full rounded-lg border border-sky-blue/20 bg-cloud px-3 py-2 text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-blue focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-all appearance-none pr-10 cursor-pointer",
            error && "border-red-500 focus-visible:ring-red-500",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </select>
        <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-ink/40">
          <ChevronDown className="h-4.5 w-4.5" />
        </span>
      </div>
    )
  }
)
Select.displayName = "Select"

export { Select }
