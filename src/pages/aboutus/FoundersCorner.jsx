import React from "react";

export default function TestimonialCard() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-[#f0eeeb] px-6 font-sans">
      <div className="w-full max-w-7xl">
        
        {/* Main Card - overflow-visible is essential for the head-pop effect */}
        <div className="relative bg-[#000000] rounded-[40px] flex flex-col md:flex-row items-center min-h-[400px] overflow-visible shadow-2xl">
          
          {/* 1. THE FOUNDER IMAGE (Exact Match to Reference) */}
          {/* -top-32 lifts the head above the card edge. object-bottom keeps him flush with the bottom. */}
          <div className="absolute -top-32 left-0 md:left-16 w-full md:w-[480px] h-[calc(100%+128px)] pointer-events-none z-10">
            <img
              src="https://res.cloudinary.com/dcc7qgxmb/image/upload/v1773810329/Santosh-Nayak-1024x1536-Photoroom_1_pl4bro.png"
              alt="Santosh Kumar Nayak"
              className="w-full h-full object-contain object-bottom filter drop-shadow-xxl"
            />
          </div>

          {/* 2. BACKGROUND STAR DECORATION */}
          <div className="absolute left-24 top-12 opacity-10 pointer-events-none select-none z-0">
            <span className="text-white text-[280px] font-thin leading-none">☆</span>
          </div>

          {/* 3. TEXT CONTENT AREA (Shifted with ml-auto and md:w-[60%]) */}
          <div className="w-full md:w-[60%] ml-auto pr-8 md:pr-24 py-16 text-white relative z-20">
            
            {/* The Quote - Bold and Large */}
            <h2 className="text-xl md:text-[24px] font-['Arimo',sans-serif] font-light leading-[1.2] tracking-tight mb-12">
              "At Seereon, I believe the greatest thing we can bring to our customers is value. For me, quality is non-negotiable. Every deliverable must meet the highest standards, because every customer at Seereon deserve results that satisfy them. This philosophy drives me and my team every day to create solutions that add value, build trust, and empower our clients to grow with confidence."

            </h2>

            {/* Footer: Name/Title + Arrow Detail */}
            <div className="flex items-end justify-between">
              <div>
                <p className="text-2xl md:text-3xl font-['Arimo',sans-serif] font-bold mb-1">Santosh Kumar Nayak</p>
                <p className="text-lg md:text-xl text-white/70 font-['Arimo',sans-serif] font-medium tracking-wide">CEO, SEEREON</p>
              </div>

              {/* Hand-drawn Arrow SVG */}
              {/* <div className="hidden md:block translate-y-4 opacity-60">
                <svg width="150" height="75" viewBox="0 0 188 107" fill="none" className="rotate-[-6deg]">
                  <path 
                    d="M10.1581 18.0673C16.9427 15.6698 21.0567 19.3898 24.1627 24.8143C28.2755 31.9968 29.8781 40.7397 30.6548 48.8856M30.6548 48.8856C30.9859 52.3559 30.6622 56.401 30.292 59.8519M30.6548 48.8856C30.2843 41.7335 30.1578 34.0041 31.9213 27.2407M30.6548 48.8856L1.50361 74.5262" 
                    stroke="white" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                  />
                </svg>
              </div> */}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}