'use client';

import * as React from "react"
import { HOW_IT_WORKS_STEPS } from "@/lib/constants"
import { MapPin } from "lucide-react"

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-cloud py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-sky-blue/10 relative overflow-hidden">
      {/* Background accent lines to represent structure */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-sky-blue/20 to-transparent" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <span className="inline-block rounded-full border border-sky-blue/30 bg-sky-blue/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-sky-blue mb-6">
            Standard Care Protocol
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-5xl font-black text-navy uppercase leading-tight tracking-tight">
            Our Flow — How It Works
          </h2>
          <div className="w-16 h-1.5 bg-ignition-red mx-auto mt-6 mb-6" />
          <p className="text-lg text-ink/75 font-sans leading-relaxed">
            We value your time and property. That&apos;s why we have aligned our exterior solutions into four straightforward steps, keeping you in complete control.
          </p>
        </div>

        {/* 4-Step Pipeline Layout */}
        <div className="relative">
          {/* Horizontal Track Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-sky-blue/20" />
          
          {/* Vertical Track Line (Mobile/Tablet Only) */}
          <div className="block lg:hidden absolute top-[20px] bottom-[20px] left-[20px] w-[1px] border-l border-dashed border-sky-blue/30" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-8 relative z-10">
            {HOW_IT_WORKS_STEPS.map((step, idx) => {
              return (
                <div key={step.step} className="relative flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center group">
                  
                  {/* Node Circle */}
                  <div className="shrink-0 flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white border border-sky-blue/20 text-xl lg:text-2xl font-display font-black text-navy shadow-sm group-hover:border-sky-blue group-hover:text-sky-blue group-hover:scale-105 transition-all duration-300 z-10 relative">
                    {idx + 1}
                    {/* Inner glowing dot on hover */}
                    <div className="absolute inset-1 rounded-full border border-sky-blue/0 group-hover:border-sky-blue/20 transition-colors" />
                  </div>

                  {/* Text Payload */}
                  <div className="ml-5 lg:ml-0 lg:mt-6 flex flex-col justify-start w-full">
                    <h3 className="font-display text-lg sm:text-xl font-extrabold text-navy uppercase tracking-tight mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base font-sans text-ink/75 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Custom compact inline serving banner below the sequence */}
        <div className="mt-16 sm:mt-24">
          <div className="bg-sky-tint border border-sky-blue/20 rounded-xl sm:rounded-full px-5 md:px-8 py-4 text-center mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-center gap-3 shadow-sm relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-ignition-red sm:opacity-0" />
            <div className="rounded-full bg-sky-blue/10 p-2 text-sky-blue">
              <MapPin className="h-5 w-5 animate-bounce" />
            </div>
            <p className="text-[15px] font-medium text-navy tracking-wide leading-relaxed">
              Proudly serving <strong className="font-bold text-ignition-red">Cocoa</strong> • <strong className="font-bold text-ignition-red">Merritt Island</strong> • <strong className="font-bold text-ignition-red">Rockledge</strong> • <strong className="font-bold text-ignition-red">Viera</strong> • <strong className="font-bold text-ignition-red">Melbourne</strong> • and all of Brevard County.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
