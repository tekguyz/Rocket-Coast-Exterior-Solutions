import * as React from "react"
import Nav from "@/components/sections/Nav"
import Hero from "@/components/sections/Hero"
import TrustBar from "@/components/sections/TrustBar"
import Services from "@/components/sections/Services"
import BeforeAfter from "@/components/sections/BeforeAfter"
import WhyChooseUs from "@/components/sections/WhyChooseUs"
import HowItWorks from "@/components/sections/HowItWorks"
import EstimateForm from "@/components/sections/EstimateForm"
import MobileCTA from "@/components/sections/MobileCTA"
import Footer from "@/components/sections/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-cloud text-ink flex flex-col relative">
      
      {/* Navigation Line */}
      <Nav />
      
      {/* Core Display Flow */}
      <main className="flex-grow">
        
        {/* HERO Entrance */}
        <Hero />
        
        {/* Core Pillars trust indicators ribbon */}
        <TrustBar />
        
        {/* Five-card asymmetrical services grid */}
        <Services />
        
        {/* Slide Comparison transformations */}
        <BeforeAfter />
        
        {/* Why choose us break-rhythm anchor */}
        <WhyChooseUs />
        
        {/* Numbered Steps and localized served locations pathway */}
        <HowItWorks />
        
        {/* Zod contact forms and direct email routings */}
        <EstimateForm />
        
      </main>

      {/* Grounded footer */}
      <Footer />

      {/* Mobile-only convertor hotbars */}
      <MobileCTA />

    </div>
  );
}
