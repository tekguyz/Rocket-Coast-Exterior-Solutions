'use client';

import * as React from "react"
import { GripVertical, Sparkles, Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface CompareSliderProps {
  beforeImg: string;
  afterImg: string;
  beforeFilter: string;
  title: string;
  location: string;
  description: string;
}

function CompareSlider({ beforeImg, afterImg, beforeFilter, title, location, description }: CompareSliderProps) {
  const [sliderPosition, setSliderPosition] = React.useState(50);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleMove = React.useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const position = Math.max(0, Math.min(100, ((clientX - left) / width) * 100));
    setSliderPosition(position);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return; // only left click
    const sliderContainer = containerRef.current;
    if (!sliderContainer) return;

    sliderContainer.setPointerCapture(e.pointerId);
    handleMove(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!containerRef.current?.hasPointerCapture(e.pointerId)) return;
    handleMove(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    containerRef.current?.releasePointerCapture(e.pointerId);
  };

  return (
    <div className="flex flex-col">
      {/* Comparative slider canvas container */}
      <div 
        ref={containerRef}
        className="relative aspect-video w-full overflow-hidden rounded-2xl border border-sky-blue/15 shadow-xl select-none bg-navy group touch-pan-y cursor-ew-resize"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        
        {/* AFTER Layer (Bottom) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={afterImg} 
          alt={`${title} - After restoration`} 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          referrerPolicy="no-referrer"
        />
        
        {/* Clean dynamic text badge indicating AFTER state */}
        <span className="absolute right-4 bottom-4 z-20 rounded bg-navy/90 text-white border border-sky-blue/25 px-2.5 py-1 text-xs font-bold uppercase tracking-widest font-sans select-none pointer-events-none">
          After Clean
        </span>

        {/* BEFORE Layer (Top) */}
        <div 
          className="absolute inset-0 z-10 overflow-hidden pointer-events-none will-change-transform"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={beforeImg} 
            alt={`${title} - Before restoration`} 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{ 
              filter: beforeFilter,
            }}
            referrerPolicy="no-referrer"
          />
          {/* Clean text badge indicating BEFORE state */}
          <span className="absolute left-4 bottom-4 rounded bg-ignition-red/90 text-white border border-white/10 px-2.5 py-1 text-xs font-bold uppercase tracking-widest font-sans select-none pointer-events-none">
            Before Wash
          </span>
        </div>

        {/* INTERACTIVE DRAG HANDLE AND SLIDER LINE */}
        <div 
          className="absolute top-0 bottom-0 z-20 w-0.5 bg-white pointer-events-none"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-navy border-2 border-sky-blue flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform hidden sm:flex">
            <GripVertical className="h-5 w-5 text-sky-blue" />
          </div>
          {/* Mobile optimized handle */}
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white/90 text-navy border border-sky-blue flex items-center justify-center shadow-2xl sm:hidden backdrop-blur-sm">
             <GripVertical className="h-6 w-6 text-sky-blue" />
          </div>
        </div>
      </div>

      {/* Narrative Legend Underneath */}
      <div className="mt-4.5">
        <h4 className="font-display text-lg font-bold text-navy uppercase leading-tight tracking-tight flex items-center gap-2">
          <span>{title}</span>
          <span className="text-xs font-sans font-medium text-sky-blue normal-case">({location})</span>
        </h4>
        <p className="text-sm font-sans text-ink/75 mt-1 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const cases = [
    {
      title: "Driveway Jet Swivel",
      location: "Rockledge",
      description: "Organic carbon sweep on a heavy commercial-sized aggregate driveway. Restored high-saturation white sheen with zero surface streak residuals.",
      beforeImg: "https://images.unsplash.com/photo-1528255671579-01b9e182ed1d?auto=format&fit=crop&q=80&w=800",
      afterImg: "https://images.unsplash.com/photo-1528255671579-01b9e182ed1d?auto=format&fit=crop&q=80&w=800",
      // Gray-green blackish organic algae mildew layer filter
      beforeFilter: "brightness(0.4) contrast(1.3) grayscale(0.15) hue-rotate(60deg) saturate(0.9)",
    },
    {
      title: "Exterior House Soft-Wash",
      location: "Melbourne",
      description: "Removal of seasonal green mold, spider nets, and silt from delicate painted vinyl siding and soffits under the gutter fascia gutters.",
      beforeImg: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
      afterImg: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
      // Orange-brown well-water and dust mud filter
      beforeFilter: "brightness(0.5) contrast(0.9) sepia(0.5) hue-rotate(-20deg) saturate(1.1)",
    },
    {
      title: "Paver Deep-Restore & Sealer",
      location: "Merritt Island",
      description: "Complete joint sand-blast sweep, re-sanded premium stabilizers, and dual satin-protection coats. Deep colors pop with instant UV-shields.",
      beforeImg: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
      afterImg: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
      // Heavily weathered, faded grey and sand-wash look filter
      beforeFilter: "saturate(0.2) brightness(0.6) contrast(0.75) grayscale(0.35)",
    },
  ];

  return (
    <section id="before-after" className="bg-cloud py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-sky-blue/10">
      <div className="mx-auto max-w-7xl">
        
        {/* Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <Badge variant="outline" className="mb-4 uppercase tracking-widest text-[11px] px-3.5 py-1">
              Interactive Transformations
            </Badge>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-navy uppercase leading-none">
              Real Results, Real Properties.
            </h2>
            <div className="w-20 h-1 bg-ignition-red mt-4 mb-6" />
            <p className="text-base sm:text-lg text-ink/85 font-sans leading-relaxed">
              Drag the white vertical handle on any comparison panel below to sweep away years of intense tropical weathering, rust stains, and algae from local Brevard homes.
            </p>
          </div>
          
          <div className="rounded-xl bg-sky-tint border border-sky-blue/15 p-4 shrink-0 flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-sky-blue animate-pulse shrink-0" />
            <p className="text-xs font-semibold text-navy max-w-[200px] font-sans leading-snug">
              Compare our exact methods live by pulling the sliders!
            </p>
          </div>
        </div>

        {/* Sliders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cases.map((cs) => (
            <CompareSlider
              key={cs.title}
              title={cs.title}
              location={cs.location}
              description={cs.description}
              beforeImg={cs.beforeImg}
              afterImg={cs.afterImg}
              beforeFilter={cs.beforeFilter}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
