'use client';

import * as React from "react"
import { COMPANY_INFO, SERVICES, SERVICE_AREAS } from "@/lib/constants"
import { MapPin, Phone, Mail, Clock, ArrowUpCircle, Facebook } from "lucide-react"
import { Badge } from "@/components/ui/badge"

import { Logo } from "@/components/ui/Logo"

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleLinkScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const topOffset = targetElement.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer id="footer-bottom" className="bg-navy border-t border-sky-blue/15 pt-20 pb-24 lg:pb-12 text-cloud/70 relative overflow-hidden">
      
      {/* Decorative vertical back-lighting */}
      <div className="absolute bottom-0 right-[10%] w-[300px] h-[300px] pointer-events-none rounded-full bg-sky-blue/3 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-sky-blue/10">
          
          {/* Column 1: Brand & Bio (4 Grid lines) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="mb-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-blue inline-block rounded-sm"
                aria-label="Rocket Coast Exterior Solutions Home"
              >
                <Logo theme="dark" className="h-8 md:h-10 mb-6" />
              </a>
              <p className="text-sm font-sans text-cloud/80 leading-relaxed max-w-sm">
                Brevard County&apos;s elite exterior cleaning agency. We combine advanced low-pressure soft wash gear with standard professional pressure sweepers to protect and reset surface qualities safely.
              </p>
            </div>
            
            <div className="mt-8 flex items-center gap-3.5">
              <Clock className="h-5 w-5 text-sky-blue shrink-0" />
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider font-sans">Business Hours</p>
                <p className="text-xs text-cloud/70 font-sans mt-0.5">Monday – Saturday: 7:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Column 2: Navigational Maps (3 Grid lines) */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3 font-sans text-sm">
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleLinkScroll(e, "#services")} 
                  className="hover:text-white hover:underline transition-colors block"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a 
                  href="#before-after" 
                  onClick={(e) => handleLinkScroll(e, "#before-after")} 
                  className="hover:text-white hover:underline transition-colors block"
                >
                  Before & After Transformations
                </a>
              </li>
              <li>
                <a 
                  href="#why-choose-us" 
                  onClick={(e) => handleLinkScroll(e, "#why-choose-us")} 
                  className="hover:text-white hover:underline transition-colors block"
                >
                  Why Rocket Coast
                </a>
              </li>
              <li>
                <a 
                  href="#how-it-works" 
                  onClick={(e) => handleLinkScroll(e, "#how-it-works")} 
                  className="hover:text-white hover:underline transition-colors block"
                >
                  Our Care Flow
                </a>
              </li>
              <li>
                <a 
                  href="#estimate" 
                  onClick={(e) => handleLinkScroll(e, "#estimate")} 
                  className="text-ignition-red hover:text-ignition-red/80 font-semibold hover:underline transition-colors block"
                >
                  Get Free Estimate Card
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services overview (2 Grid lines) */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider mb-6">
              Specialities
            </h3>
            <ul className="space-y-3 font-sans text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a 
                    href="#services" 
                    onClick={(e) => handleLinkScroll(e, "#services")} 
                    className="hover:text-white hover:underline transition-all block"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Location Coverage Map (3 Grid lines) */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider mb-6">
                Direct Contact
              </h3>
              <ul className="space-y-4 font-sans text-sm">
                <li>
                  <a 
                    href={COMPANY_INFO.phoneUrl} 
                    className="flex items-start gap-3 hover:text-white transition-colors text-white font-semibold"
                    aria-label={`Dial ${COMPANY_INFO.name}`}
                  >
                    <Phone className="h-5 w-5 text-sky-blue shrink-0 mt-0.5" />
                    <span>{COMPANY_INFO.phone}</span>
                  </a>
                </li>
                <li>
                  <a 
                    href={COMPANY_INFO.emailUrl} 
                    className="flex items-start gap-3 hover:text-white transition-colors break-all"
                    aria-label={`Email ${COMPANY_INFO.name}`}
                  >
                    <Mail className="h-5 w-5 text-sky-blue shrink-0 mt-0.5" />
                    <span>{COMPANY_INFO.email}</span>
                  </a>
                </li>
                <li>
                  <a 
                    href={COMPANY_INFO.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 hover:text-white transition-colors text-white font-semibold"
                    aria-label="Visit us on Facebook"
                  >
                    <Facebook className="h-5 w-5 text-sky-blue shrink-0 mt-0.5" />
                    <span>Follow Us on Facebook</span>
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-sky-blue shrink-0 mt-0.5" />
                  <span className="text-cloud/90">Brevard County, Florida</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Lower row: Copyright and scroll to top buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <p className="text-xs font-sans text-cloud/55">
              © {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved.
            </p>
            <p className="text-[10px] font-sans text-cloud/40 mt-1 max-w-lg leading-relaxed">
              We operate exclusively as a team-centric crew. All pricing quotes, service schedules, structural treatments, and property guarantees are governed directly under corporate insurance and client agreements.
            </p>
          </div>

          <button 
            type="button"
            onClick={handleScrollToTop}
            className="flex items-center gap-2 rounded-full border border-sky-blue/20 bg-sky-blue/5 hover:bg-sky-blue/15 hover:text-white px-4 py-2 text-xs font-semibold tracking-wider text-cloud transition-all cursor-pointer"
            aria-label="Back to top of home portal"
          >
            <span>Back to Launch</span>
            <ArrowUpCircle className="h-4.5 w-4.5 text-sky-blue" />
          </button>
        </div>

      </div>
    </footer>
  );
}
