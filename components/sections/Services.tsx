'use client';

import * as React from "react"
import { SERVICES } from "@/lib/constants"
import { Card, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Home, Layers, Droplets, Shield, Sparkles } from "lucide-react"

export default function Services() {
  const bentoGridClasses = (index: number) => {
    switch (index) {
      case 0:
        return "lg:col-span-7 md:col-span-12";
      case 1:
        return "lg:col-span-5 md:col-span-12";
      case 2:
        return "lg:col-span-4 md:col-span-12";
      case 3:
        return "lg:col-span-4 md:col-span-12";
      case 4:
        return "lg:col-span-4 md:col-span-12";
      default:
        return "lg:col-span-4 md:col-span-12";
    }
  };

  const serviceIcon = (id: string, sizeClasses = "h-6 w-6") => {
    const combinedClass = `${sizeClasses} text-sky-blue transition-transform duration-300 group-hover:scale-110`;
    switch (id) {
      case "house-soft-washing":
        return <Home className={combinedClass} />;
      case "driveway-sidewalk-cleaning":
        return <Layers className={combinedClass} />;
      case "hard-water-stain-removal":
        return <Droplets className={combinedClass} />;
      case "paver-cleaning-sealing":
        return <Shield className={combinedClass} />;
      case "complete-exterior-solutions":
        return <Sparkles className={combinedClass} />;
      default:
        return <Sparkles className={combinedClass} />;
    }
  };

  const handleScrollToEstimate = (serviceId: string) => {
    const selectElem = document.querySelector("#form-service-select") as HTMLSelectElement | null;
    const formSection = document.querySelector("#estimate");

    if (selectElem) {
      selectElem.value = serviceId;
      // Dispatch standard DOM event to trigger react-hook-form value sync
      const event = new Event('change', { bubbles: true });
      selectElem.dispatchEvent(event);
    }

    if (formSection) {
      const topOffset = formSection.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className="bg-sky-tint py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-sky-blue/10">
      <div className="mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Badge variant="secondary" className="mb-4 uppercase tracking-widest text-[11px] px-3.5 py-1">
            Brevard County Exterior Solutions
          </Badge>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-navy uppercase leading-none">
            Our Cleaning Specialities
          </h2>
          <div className="w-20 h-1 bg-ignition-red mx-auto mt-4 mb-6" />
          <p className="text-base sm:text-lg text-ink/80 font-sans leading-relaxed">
            We use specialized systems for every surface. From delicate home soft washing targeting organic spores to heavy high-pressure concrete sweepers, our team has you covered.
          </p>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => {
            return (
              <Card 
                key={service.id} 
                className={`${bentoGridClasses(index)} bg-cloud border border-sky-blue/10 shadow-lg p-4.5 sm:p-6 hover:shadow-xl hover:border-sky-blue/20 transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  {/* Service Headers & Badges */}
                  <div className="flex items-center justify-between gap-3 mb-3.5 sm:mb-6">
                    <Badge variant={index === 0 || index === 4 ? "accent" : "outline"} className="text-[10px] sm:text-[11px] px-2 py-0.5 truncate max-w-[170px] sm:max-w-none">
                      {service.badge}
                    </Badge>
                    <span className="flex items-center justify-center shrink-0 select-none bg-sky-tint p-2 sm:p-3 rounded-lg sm:rounded-xl border border-sky-blue/10 group-hover:bg-sky-blue/10 transition-colors duration-300">
                      {serviceIcon(service.id, "h-4.5 w-4.5 sm:h-6 sm:w-6")}
                    </span>
                  </div>

                  {/* Title & Explanatories */}
                  <CardTitle className="font-display text-xl sm:text-2xl lg:text-3xl font-extrabold uppercase text-navy group-hover:text-ignition-red transition-colors duration-300 leading-tight">
                    {service.title}
                  </CardTitle>
                  
                  <p className="text-xs sm:text-sm font-sans text-ink/75 leading-relaxed mt-2 sm:mt-3.5 mb-4 sm:mb-6">
                    {service.description}
                  </p>

                  {/* Bullet features */}
                  <ul className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-8">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-ink/85 font-sans">
                        <span className="rounded-full bg-sky-tint p-0.5 text-sky-blue border border-sky-blue/10 mt-0.5 shrink-0">
                          <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Bottom CTA Trigger */}
                <div className="pt-3.5 border-t border-sky-blue/5">
                  <Button 
                    onClick={() => handleScrollToEstimate(service.id)}
                    variant="outline"
                    className="w-full text-[11px] sm:text-xs font-bold uppercase tracking-wider h-10 sm:h-11 border-sky-blue/20 hover:bg-sky-blue hover:text-white transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Select & Quote</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
