'use client';

import * as React from "react"
import { ShieldCheck, Award, Sparkles, Smile } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function TrustBar() {
  const pillars = [
    {
      title: "Licensed & Insured",
      description: "Full liability coverage protecting your residential & commercial structural layers.",
      icon: ShieldCheck,
    },
    {
      title: "Professional Service",
      description: "State-of-the-art washing machinery and organized, detail-oriented ground crews.",
      icon: Award,
    },
    {
      title: "Quality Results",
      description: "We clean correctly using eco-safe compounds, restoring true surface luster.",
      icon: Sparkles,
    },
    {
      title: "100% Guaranteed",
      description: "We complete an exhaustive walkthrough with you. Our job is not done until you approve.",
      icon: Smile,
    },
  ];

  return (
    <section className="bg-cloud border-y border-sky-blue/10 py-6 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Card 
                key={pillar.title} 
                className="bg-transparent border-none shadow-none p-0 flex items-center sm:items-start gap-2.5 sm:gap-4 text-left"
              >
                {/* Custom icon backdrop circle nested cleanly */}
                <div className="rounded-lg sm:rounded-xl bg-sky-tint p-2 sm:p-3 text-sky-blue border border-sky-blue/15 shrink-0">
                  <Icon className="h-4.5 w-4.5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xs sm:text-base md:text-lg font-bold text-navy tracking-tight leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="hidden sm:block text-xs text-ink/70 font-sans leading-normal mt-1 max-w-[240px]">
                    {pillar.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
