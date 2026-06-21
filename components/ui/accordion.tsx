'use client';

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionProps {
  children: React.ReactNode;
  className?: string;
  type?: "single" | "multiple";
  collapsible?: boolean;
}

export const Accordion = ({ children, className }: AccordionProps) => {
  return <div className={cn("space-y-4", className)}>{children}</div>
}

interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

export const AccordionItem = ({
  children,
  className,
  value,
  isOpen,
  onToggle,
}: AccordionItemProps) => {
  const [localOpen, setLocalOpen] = React.useState(false);
  const active = isOpen !== undefined ? isOpen : localOpen;
  const toggle = onToggle !== undefined ? onToggle : () => setLocalOpen(!localOpen);

  return (
    <div className={cn("border-b border-sky-blue/10 pb-4", className)}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            isOpen: active,
            onToggle: toggle,
          } as any);
        }
        return child;
      })}
    </div>
  );
};

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

export const AccordionTrigger = ({
  children,
  className,
  isOpen,
  onToggle,
}: AccordionTriggerProps) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={cn(
        "flex w-full items-center justify-between py-2 text-left font-display text-lg font-bold text-navy hover:text-sky-blue focus:outline-none transition-colors cursor-pointer",
        className
      )}
    >
      <span>{children}</span>
      <motion.span
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.2 }}
        className="text-ink/60"
      >
        <ChevronDown className="h-5 w-5" />
      </motion.span>
    </button>
  );
};

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
  isOpen?: boolean;
}

export const AccordionContent = ({
  children,
  className,
  isOpen,
}: AccordionContentProps) => {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className={cn("pt-2 pb-1 text-sm text-ink/85 leading-relaxed font-sans", className)}>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
