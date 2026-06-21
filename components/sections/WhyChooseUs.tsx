'use client';

import * as React from "react"
import { Compass, FileText, ShieldAlert, BadgeCheck } from "lucide-react"

export default function WhyChooseUs() {
  const values = [
    {
      title: "Locally Owned",
      badge: "Space Coast Crew",
      text: "Brevard County residents treating your home, driveway, and roof as if it were our own.",
      icon: Compass,
    },
    {
      title: "No-Pressure Quotes",
      badge: "Honest Diagnostics",
      text: "Satellite mapping and on-site checks for transparent, exact quotes with zero hidden fees.",
      icon: FileText,
    },
    {
      title: "Fully Insured",
      badge: "Absolute Safety",
      text: "Full commercial liability coverage protecting your plants, siding, and roofing systems.",
      icon: ShieldAlert,
    },
    {
      title: "100% Satisfaction",
      badge: "Walkthrough Signed",
      text: "Joint perimeter walkthrough after completion. You pay ONLY when completely satisfied.",
      icon: BadgeCheck,
    },
  ];

  return (
    <section id="why-choose-us" className="bg-navy py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-sky-blue/10">
      <div className="mx-auto max-w-7xl relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column (Sticky Philosophy) */}
          <div className="lg:col-span-5 lg:pl-4">
            <div className="lg:sticky lg:top-32">
              <span className="inline-block rounded-full border border-ignition-red px-3 py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-ignition-red mb-4 sm:mb-6">
                Rocket Coast Standards
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-5xl font-black text-white uppercase leading-[1.1] tracking-tight">
                Protect. <br /> Beautify. <br /> <span className="text-sky-blue">Add Value</span><br />to your home.
              </h2>
              <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-ignition-red mt-6 sm:mt-8 mb-6 sm:mb-8" />
              <p className="text-base sm:text-lg text-cloud/80 font-sans leading-relaxed tracking-wide">
                We hold ourselves to a clean standard of customer care. No high-pressure sales routines, no cut corners, and absolutely no surprise charges.
              </p>
            </div>
          </div>

          {/* Right Column (Staggered Stacking Rows) */}
          <div className="lg:col-span-7 flex flex-col gap-10 sm:gap-12 lg:pt-4">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div 
                  key={v.title}
                  className={`flex flex-col sm:flex-row gap-4 sm:gap-6 ${idx % 2 !== 0 ? 'lg:pl-8' : 'lg:pr-8'}`}
                >
                  {/* Clean Icon Wrapper */}
                  <div className="shrink-0 flex items-start">
                    <div className="p-2 text-sky-blue">
                      <Icon className="h-6 sm:h-7 w-6 sm:w-7 stroke-[1.5]" />
                    </div>
                  </div>

                  {/* Deep Description Space */}
                  <div className="flex flex-col flex-1 pt-1">
                    <p className="text-[10px] sm:text-[11px] font-sans font-bold text-sky-blue uppercase tracking-[0.2em] mb-1.5 sm:mb-2">
                      {v.badge}
                    </p>
                    <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white uppercase tracking-tight mb-2 sm:mb-3">
                      {v.title}
                    </h3>
                    <p className="text-sm sm:text-base font-sans text-cloud/70 leading-relaxed tracking-wide">
                      {v.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
