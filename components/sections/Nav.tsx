'use client';

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X, PhoneCall } from "lucide-react"
import { Button } from "@/components/ui/button"
import { COMPANY_INFO } from "@/lib/constants"
import { Logo } from "@/components/ui/Logo"

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset' };
  }, [mobileMenuOpen]);

  // Trap focus inside menu (simplified for standard accessibility)
  const menuRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (mobileMenuOpen && menuRef.current) {
      const focusableElements = menuRef.current.querySelectorAll('a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])');
      const firstElement = focusableElements[0] as HTMLElement;
      firstElement?.focus();
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Our Services", href: "#services" },
    { label: "Real Results", href: "#before-after" },
    { label: "Why Rocket Coast", href: "#why-choose-us" },
    { label: "How It Works", href: "#how-it-works" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const topOffset = targetElement.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  const handleRequestScroll = () => {
    setMobileMenuOpen(false);
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
    <>
      <header id="nav-header" className="sticky top-0 z-40 w-full bg-navy border-b border-sky-blue/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 md:h-20 items-center justify-between">
            {/* Visual Branding Instantiation */}
            <a 
              href="#" 
              className="flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-blue focus-visible:ring-offset-2 focus-visible:ring-offset-navy rounded-sm" 
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              aria-label="Rocket Coast Exterior Solutions Home"
            >
              <Logo theme="dark" className="h-7 sm:h-8 md:h-10" />
            </a>

            {/* Desktop Navigation Lines */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-sm font-medium text-cloud/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-blue rounded-sm px-2 py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Accent Right Area */}
            <div className="hidden lg:flex items-center gap-6">
              <a
                href={COMPANY_INFO.phoneUrl}
                className="flex items-center gap-2 text-sm font-semibold text-white hover:text-ignition-red transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-blue rounded-sm p-1"
                aria-label={`Call ${COMPANY_INFO.name}`}
              >
                <div className="rounded-full bg-sky-blue/20 p-2 text-sky-blue group-hover:bg-sky-blue/30 transition-colors">
                  <PhoneCall className="h-4 w-4" />
                </div>
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <button
                onClick={handleRequestScroll}
                className="inline-flex h-11 items-center justify-center rounded-md bg-ignition-red px-6 text-sm font-bold text-white shadow-md transition-colors hover:bg-ignition-red/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-blue focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              >
                Get Free Estimate
              </button>
            </div>

            {/* Mobile Burger Menu Button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="inline-flex h-12 w-12 items-center justify-center rounded-lg text-cloud/80 hover:bg-sky-blue/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-blue"
                aria-expanded={mobileMenuOpen}
                aria-label="Open main menu"
              >
                <Menu className="h-7 w-7" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            ref={menuRef}
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-navy/80 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />
            
            {/* Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative ml-auto flex h-full w-full max-w-sm flex-col bg-navy border-l border-sky-blue/20 shadow-2xl py-5 px-4 sm:px-6"
            >
              <div className="flex items-center justify-between pb-5 border-b border-sky-blue/10">
                <a 
                  href="#" 
                  className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-blue" 
                  onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  aria-label="Rocket Coast Exterior Solutions Home"
                >
                  <Logo theme="dark" className="h-8" iconClassName="h-6 w-auto" textClassName="text-xl sm:text-xl" />
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-lg text-cloud/80 hover:bg-sky-blue/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-blue"
                  aria-label="Close menu"
                >
                  <X className="h-7 w-7" />
                </button>
              </div>

              <nav className="mt-8 flex-1 flex flex-col gap-2 overflow-y-auto">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="flex min-h-[44px] items-center rounded-lg px-4 text-lg font-medium text-cloud/90 hover:bg-white/5 hover:text-white transition-colors focus-visible:outline-none focus-visible:bg-white/10"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              
              <div className="mt-auto pt-8 border-t border-sky-blue/10 flex flex-col gap-5">
                <a
                  href={COMPANY_INFO.phoneUrl}
                  className="flex min-h-[44px] items-center justify-center gap-3 rounded-xl bg-sky-tint/5 border border-sky-blue/20 text-base font-semibold text-white hover:bg-sky-tint/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-blue"
                >
                  <PhoneCall className="h-5 w-5 text-sky-blue" />
                  <span>Call {COMPANY_INFO.phone}</span>
                </a>
                
                <button
                  onClick={handleRequestScroll}
                  className="flex min-h-[44px] w-full items-center justify-center rounded-xl bg-ignition-red px-4 text-base font-bold text-white shadow-md transition-colors hover:bg-ignition-red/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Get Free Estimate
                </button>
              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

