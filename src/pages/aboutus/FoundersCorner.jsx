import React from "react";

export default function TestimonialCard() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-[#f0eeeb] px-4 md:px-6 py-20 md:py-0 font-sans">
      <div className="w-full max-w-7xl">
        
        {/* Main Card */}
        <div className="relative bg-[#000000] rounded-[30px] md:rounded-[40px] flex flex-col md:flex-row items-center overflow-visible shadow-2xl">
          
          {/* 1. THE FOUNDER IMAGE */}
          {/* On mobile: Relative position to push text down. On desktop: Absolute to pop out. */}
          <div className="relative md:absolute -top-12 md:-top-32 left-0 md:left-16 w-full md:w-[480px] h-[300px] sm:h-[400px] md:h-[calc(100%+128px)] pointer-events-none z-10">
            <img
              src="https://res.cloudinary.com/dcc7qgxmb/image/upload/v1773810329/Santosh-Nayak-1024x1536-Photoroom_1_pl4bro.png"
              alt="Santosh Kumar Nayak"
              className="w-full h-full object-contain object-bottom filter drop-shadow-xl"
            />
          </div>

          {/* 2. BACKGROUND STAR DECORATION */}
          <div className="absolute left-1/2 md:left-24 top-1/4 md:top-12 -translate-x-1/2 md:translate-x-0 opacity-10 pointer-events-none select-none z-0">
            <span className="text-white text-[150px] md:text-[280px] font-thin leading-none">☆</span>
          </div>

          {/* 3. TEXT CONTENT AREA */}
          {/* Padding-top is reduced on mobile because the image is no longer absolute */}
          <div className="w-full md:w-[60%] ml-auto px-6 md:pr-24 pb-12 md:py-16 text-white relative z-20 text-center md:text-left">
            
            {/* The Quote */}
            <h2 className="text-[16px] sm:text-lg md:text-[22px] lg:text-[24px] font-['Arimo',sans-serif] font-light leading-[1.5] md:leading-[1.2] tracking-tight mb-8 md:mb-12 mt-4 md:mt-0">
              "At Seereon, our focus is simple — build software that delivers real value. Quality is never optional. Every solution we develop is designed to be reliable, scalable, and aligned with our client’s business goals. We believe technology should simplify complexity and create measurable impact. This belief drives our team to consistently deliver systems that businesses can depend on and grow with."
            </h2>

            {/* Footer: Name/Title */}
            <div className="flex flex-col md:flex-row items-center md:items-end justify-between">
              <div className="flex flex-col items-center md:items-start">
                <p className="text-xl md:text-3xl font-['Arimo',sans-serif] font-bold mb-1">Santosh Kumar Nayak</p>
                <p className="text-md md:text-xl text-white/70 font-['Arimo',sans-serif] font-medium tracking-wide uppercase">CEO, SEEREON</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}