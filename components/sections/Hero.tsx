'use client';

import * as React from "react"
import { motion } from "motion/react"
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { COMPANY_INFO } from "@/lib/constants"

export default function Hero() {
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

  const bulletPoints = [
    "Eco-Friendly Soft Wash System",
    "Commercial-Grade Surface Cleaners",
    "Completely Licensed & Insured Crew",
  ];

  return (
    <section className="relative bg-navy overflow-hidden py-16 sm:py-24 lg:py-32 border-b border-sky-blue/10">
      {/* Background radial soft light gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none rounded-full bg-sky-blue/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (Text Hub) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Dynamic Tagline Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-sky-blue/20 bg-sky-blue/10 px-4 py-1.5 mb-6 text-xs sm:text-sm font-semibold tracking-wider text-sky-blue"
            >
              <span className="h-2 w-2 rounded-full bg-ignition-red animate-pulse" />
              <span>Cleaner Exteriors. Better Impressions.</span>
            </motion.div>

            {/* Display Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl font-black text-white leading-none uppercase tracking-tight"
            >
              Launch Your <br className="hidden sm:inline" />
              <span className="text-ignition-red drop-shadow-sm">Curb Appeal</span>
            </motion.h1>

            {/* Subtext Paragraph */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 sm:mt-6 text-base sm:text-xl text-cloud/85 font-sans leading-relaxed max-w-2xl"
            >
              Brevard County&apos;s exterior cleaning experts — soft washing, driveways, pavers, and more, done right the first time. We remove YEARS of mildew and oxidation in hours.
            </motion.p>

            {/* Checked Trust indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {bulletPoints.map((point) => (
                <div key={point} className="flex items-center gap-2 text-cloud/90 font-sans">
                  <CheckCircle2 className="h-4 sm:h-5 w-4 sm:w-5 text-ignition-red shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">{point}</span>
                </div>
              ))}
            </motion.div>

            {/* Action Block Buttons Row */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3.5 sm:gap-4 w-full"
            >
              <button
                onClick={handleScrollToForm}
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-ignition-red text-white text-sm sm:text-base font-bold uppercase tracking-wider hover:bg-ignition-red/95 group h-12 sm:h-13 px-6 sm:px-8 shadow-xl transition-all duration-300 gap-2 cursor-pointer active:scale-98"
              >
                <span>Free Quote</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform shrink-0" />
              </button>
              
              <a
                href={COMPANY_INFO.phoneUrl}
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg font-bold uppercase tracking-wider transition-all border border-white/25 text-white hover:bg-white/10 h-12 sm:h-13 px-6 sm:px-8 text-sm sm:text-base gap-2 shrink-0 active:scale-98"
              >
                <Phone className="h-4.5 w-4.5 text-sky-blue shrink-0" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </motion.div>

          </div>

          {/* Right Column (Double-Exposure Restructure Graphics) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden md:flex lg:col-span-5 relative items-center justify-center h-full w-full"
          >
            <div className="relative w-full max-w-lg aspect-square sm:aspect-video lg:aspect-square rounded-2xl border-2 border-sky-blue/20 shadow-2xl">
              {/* Overlay shading representing deep rich navy styling */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-navy/50 via-transparent to-sky-blue/10 z-10 pointer-events-none" />
              
              {/* Background property graphics representation */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/hero.jpg" 
                alt="Florida Coast Modern Real Estate Cleaned" 
                className="object-cover w-full h-full rounded-2xl transform hover:scale-103 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Floating trust badge showing Brevard County footprint - minimalized and placed overlapping the top border so it doesn't block the image content */}
              <div className="absolute -top-3.5 left-6 z-20 bg-navy border border-sky-blue/30 px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ignition-red opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-ignition-red"></span>
                </span>
                <span className="text-[10px] font-display font-extrabold text-white uppercase tracking-wider">Active Operations: Brevard County, FL</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
