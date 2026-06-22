export interface Service {
  id: string;
  title: string;
  badge: string;
  description: string;
  longDescription: string;
  features: string[];
  imageUrl: string;
}

export const COMPANY_INFO = {
  name: "Rocket Coast Exterior Solutions",
  phone: "(321) 693-9845",
  phoneUrl: "tel:3216939845",
  email: "contact@tekguyz.com",
  emailUrl: "mailto:contact@tekguyz.com",
  facebook: "https://www.facebook.com/share/1CvYFgpBXf/",
};

export const SERVICES: Service[] = [
  {
    id: "house-soft-washing",
    title: "House Soft Washing",
    badge: "Siding & Stucco Safeguard",
    description: "Gentle, low-pressure technology to safely eliminate mildew, algae, and organic build-up from siding, stucco, and fascia without surface damage.",
    longDescription: "Our specialized soft wash system combines proprietary cleaning solutions with gentle, low-pressure water application to sterilize and sweep away organic growths like green algae, black mold, and nested webs. Unlike high-pressure blasting, soft washing treats the root of organic build-up, leaving your siding, vinyl, stucco, brick, and fascia looking crisp and brand new without risking structural or surface integrity.",
    features: [
      "Low-Pressure (under 500 PSI) safe treatment",
      "Biodegradable solutions targeting organic root spores",
      "Protects delicate window seals, screens, and paints",
    ],
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "driveway-sidewalk-cleaning",
    title: "Driveway & Sidewalk Cleaning",
    badge: "Concrete Revitalization",
    description: "High-pressure deep washing and surface restoration targeting embedded grime, fuel stains, and mold on concrete surfaces.",
    longDescription: "Over time, driveways, sidewalks, and entry paths accumulate motor oils, tire marks, mold, and tannin stains from regional foliage. We utilize professional-grade rotary flat-surface sweepers and high-pressure hot/cold systems to restore the pale, clean sheen of newly poured concrete. By lifting deep stains evenly, we eliminate safety hazards and instantly refresh the primary approach to your property.",
    features: [
      "Eliminates slick slippery mold shadows",
      "Removes leaf tannins and tire markings",
      "Uniform finish with zero wand streaks",
    ],
    imageUrl: "https://images.unsplash.com/photo-1528255671579-01b9e182ed1d?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "hard-water-stain-removal",
    title: "Hard Water Stain Removal",
    badge: "Oxidation & Rust Treatment",
    description: "Chemical rust and well-water orange stain treatments formulated to lift deep-set oxidation and mineral shadows from masonry and glass.",
    longDescription: "Well-water irrigation systems and metallic runs regularly leave vibrant, orange rust scars and white calcium crusts on stucco, concrete, brick pathways, and windows. Our precision iron-dissolving compounds interact chemically to detach mineral bonds without scratching or washing away underlying structural masonry, renewing your curb appeal clean as a whistle.",
    features: [
      "Dissolves stubborn orange well-water rings",
      "Restores stucco, brick, and rock surfaces",
      "pH-balanced, surface-safe treatments",
    ],
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "paver-cleaning-sealing",
    title: "Paver Cleaning & Sealing",
    badge: "Lustrous Surface Locking",
    description: "Joint sanding, deep pressurized dirt removal, and architectural-grade protection-finish coats that restore luster and block weed germination.",
    longDescription: "Provide your luxury pavers with the shielding they deserve against intense UV heat and moisture erosion. We deep-clean organic silt out of the joints, replace lost stabilization medium with clean industrial sand, and overlay multiple protective sealer coats. This locks in aggregate colors, hardens joint sands to halt erosion and weed growth, and establishes a premium satin or semi-gloss armor.",
    features: [
      "Saturates and enriches stone colors",
      "Joint sand stabilization blocks weeds and ants",
      "Prevents heavy Florida UV and salt degradation",
    ],
    imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "complete-exterior-solutions",
    title: "Full Exterior Solutions",
    badge: "All-In-One Enterprise Package",
    description: "A comprehensive package cleaning siding, porches, lanais, steps, and perimeter pathways in a single service cycle.",
    longDescription: "If you are preparing for listing photos, satisfying tough HOA notice demands, or managing seasonal rental transitions, our complete bundle offers full coverage. We coordinate house washing, perimeter walkways, patio slabs, porch ceilings, under-soffit gutters, and side structures in one unified effort to optimize cost-efficiency and return perfect harmony to your exterior.",
    features: [
      "A-Z deep cleansing covering all outdoor areas",
      "Meets and exceeds strict regional HOA specifications",
      "Highest discount rate per square foot serviced",
    ],
    imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200",
  },
];

export const SERVICE_AREAS: string[] = [
  "Cocoa",
  "Merritt Island",
  "Rockledge",
  "Viera",
  "Melbourne",
];

export const TRUST_PILLARS = [
  {
    title: "Licensed & Insured",
    description: "Full general liability coverage mapping all our team operations to protect your investment completely.",
  },
  {
    title: "Professional Service",
    description: "Advanced commercial machinery, custom low-pressure systems, and structured job-site safety checklists.",
  },
  {
    title: "Quality Results",
    description: "We work carefully, avoiding shortcuts, to make sure the work is done perfectly the first time.",
  },
  {
    title: "100% Satisfaction",
    description: "Our job isn't done until you walk the perimeter with our team and sign off with complete approval.",
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Request a Free Estimate",
    description: "Submit our quick online form or call us directly. We analyze satellite imaging to build an exact, upfront cost proposal.",
  },
  {
    step: "02",
    title: "Customized Scheduling",
    description: "Choose a service date that coordinates with your calendar. We send a quick, simple pre-service prep checklist.",
  },
  {
    step: "03",
    title: "Precision Cleaning",
    description: "Our professional crew performs low-pressure soft washing, fully protecting your landscaping and delicate fixtures.",
  },
  {
    step: "04",
    title: "Walkthrough & Approval",
    description: "Inspect the final results with us. Our satisfaction guarantee means you only pay once you are completely thrilled.",
  },
];
