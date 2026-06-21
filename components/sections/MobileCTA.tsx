'use client';

import * as React from "react"
import { Phone, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { COMPANY_INFO } from "@/lib/constants"

export default function MobileCTA() {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // Show CTA only after scrolling past the Hero bounds (approx 500px)
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Attach passive scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // init

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const targetElement = document.querySelector("#estimate");
    if (targetElement) {
      const topOffset = targetElement.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-sky-blue/15 p-3 sm:p-4 shadow-[0_-10px_20px_rgba(11,31,61,0.08)] flex gap-3 lg:hidden transition-all duration-300 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      
      {/* 50/50 Split Action Grid */}
      <a
        href={COMPANY_INFO.phoneUrl}
        className="flex-1 h-14 rounded-xl text-navy font-bold uppercase tracking-wider text-[11px] sm:text-xs border border-sky-blue/20 hover:bg-sky-tint hover:border-sky-blue/50 flex items-center justify-center gap-2 transition-all duration-300 active:scale-95"
      >
        <Phone className="h-4 w-4 sm:h-4.5 sm:w-4.5 text-sky-blue" />
        <span>Call Now</span>
      </a>

      <Button
        onClick={handleScrollToForm}
        className="flex-1 h-14 bg-ignition-red text-white uppercase font-bold tracking-wider text-[11px] sm:text-xs rounded-xl hover:bg-ignition-red/90 shadow-md flex items-center justify-center gap-2 active:scale-95"
      >
        <FileText className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
        <span>Free Quote</span>
      </Button>
      
    </div>
  );
}
