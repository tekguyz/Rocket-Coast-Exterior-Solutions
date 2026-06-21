import React from 'react';

interface LogoProps {
  theme?: 'dark' | 'light';
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}

export function Logo({ 
  theme = 'dark', 
  className = "h-10 w-auto md:h-12", 
  iconClassName = "", 
  textClassName = "" 
}: LogoProps) {
  const isDark = theme === 'dark';
  
  // Theme assignments - utilizing precise color tokens with robust fallback values
  const baseLineColor = isDark ? 'stroke-white' : 'stroke-[#0B1F3D]';
  const baseTextColor = isDark ? 'text-white' : 'text-[#0B1F3D]';
  const baseFillColor = isDark ? 'fill-white' : 'fill-[#0B1F3D]';
  
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Inline Scalable Custom Logo Graphic */}
      <svg
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`h-full aspect-square shrink-0 ${iconClassName}`}
        aria-hidden="true"
      >
        {/* Outer Decorative Circular Brand Rings */}
        <circle cx="64" cy="64" r="58" strokeWidth="2.5" className={`${baseLineColor} opacity-90`} />
        <circle cx="64" cy="64" r="52" strokeWidth="1" strokeDasharray="4 3" className={`${baseLineColor} opacity-40`} />
        
        {/* Background Space Coast Palm Tree Silhouette */}
        <path d="M26,96 Q29,82 35,70" className={`${baseLineColor} fill-none`} strokeWidth="2" strokeLinecap="round" />
        <path d="M35,70 C30,65 21,65 16,68" className={`${baseLineColor} fill-none`} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M35,70 C32,61 25,57 19,60" className={`${baseLineColor} fill-none`} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M35,70 C40,62 46,64 48,68" className={`${baseLineColor} fill-none`} strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Foreground Residential House Structural Lines */}
        <path 
          d="M46,92 V74 H82 V92 Z" 
          className={`${baseLineColor} fill-none`} 
          strokeWidth="2.5" 
          strokeLinejoin="round" 
        />
        <path 
          d="M40,76 L64,52 L88,76" 
          className={`${baseLineColor} fill-none`} 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        <rect x="58" y="80" width="12" height="12" className={`${baseLineColor} fill-none`} strokeWidth="1.5" />
        <line x1="64" y1="80" x2="64" y2="92" className={baseLineColor} strokeWidth="1" />
        <line x1="58" y1="86" x2="70" y2="86" className={baseLineColor} strokeWidth="1" />

        {/* High-Pressure Fluid Water Spray Blast Waves */}
        <path d="M18,102 C38,102 54,88 60,66" stroke="#2E6FD1" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M24,108 C46,108 62,94 66,74" stroke="#2E6FD1" strokeWidth="1.5" strokeLinecap="round" fill="none" className="opacity-60" />

        {/* Dynamic Flying Rocket Component (Rotated 45 degrees to blast upward and outward) */}
        <g transform="translate(76, 46) rotate(45)">
          {/* Engine Exhaust Flame Trail */}
          <path d="M-6,30 L0,68 L6,30 Z" fill="#2E6FD1" className="opacity-90" />
          <path d="M-3,30 L0,52 L3,30 Z" fill="#EAF4FF" />
          <path d="M-11,30 C-11,48 -4,58 0,76 C4,58 11,48 11,30 Z" fill="#C8102E" className="opacity-15" />

          {/* Symmetrical Left & Right Aerodynamic Fins */}
          <path d="M-10,14 L-23,32 C-23,32 -19,35 -13,30 L-10,22" fill="#C8102E" stroke="#C8102E" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M10,14 L23,32 C23,32 19,35 13,30 L10,22" fill="#C8102E" stroke="#C8102E" strokeWidth="1.5" strokeLinejoin="round" />
          
          {/* Main Structural Rocket Hull Fuselage */}
          <path d="M0,-38 C8,-20 11,-5 10,28 L-10,28 C-11,-5 -8,-20 0,-38 Z" fill="#FBFCFE" stroke="#C8102E" strokeWidth="2.5" strokeLinejoin="round" />
          
          {/* Rocket Nose Cone Variant Panel */}
          <path d="M0,-38 C4,-28 7,-18 7,-12 L-7,-12 C-7,-18 -4,-28 0,-38 Z" fill="#C8102E" stroke="#C8102E" strokeWidth="1" />
          
          {/* Portside Viewport Glass Bubble */}
          <circle cx="0" cy="-2" r="5.5" fill="#EAF4FF" stroke="#C8102E" strokeWidth="2" />
          <path d="M-3.5,-2.5 A3.5,3.5 0 0,1 1.5,-5" stroke="white" strokeWidth="1" strokeLinecap="round" fill="none" />
          
          {/* Thick Machined Engine Nozzle Connector */}
          <rect x="-6" y="28" width="12" height="3.5" rx="1" fill="#0B1F3D" />
        </g>
      </svg>

      {/* Embedded Wordmark (Using Big Shoulders Condensed Aesthetic) */}
      <div className={`flex items-baseline shrink-0 ${textClassName}`}>
        <span className="font-display text-2xl sm:text-3xl font-black tracking-tight text-[#C8102E]">
          ROCKET
        </span>
        <span className={`font-display text-2xl sm:text-3xl font-black tracking-tight ml-1 ${baseTextColor}`}>
          COAST
        </span>
      </div>
    </div>
  );
}