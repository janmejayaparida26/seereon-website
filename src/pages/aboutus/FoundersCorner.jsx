import React from 'react';

const FoundersCorner = () => {
  return (
    <section className="bg-white p-10 md:p-32 flex justify-center items-center min-h-[700px] font-sans">
      
      {/* Main Purple Card - overflow-visible is essential for the clipping effect */}
      <div className="bg-[#8B5CF6] rounded-[40px] px-8 py-12 md:px-20 md:py-24 w-full max-w-6xl relative flex flex-col md:flex-row items-center overflow-visible shadow-2xl">
        
        {/* Floating Founder Image Container */}
        {/* The -top-32 value forces the head to pop out of the top of the card */}
        <div className="absolute -top-32 left-0 md:left-16 w-full md:w-[480px] h-[calc(100%+128px)] pointer-events-none z-10">
          <img 
            src="http://googleusercontent.com/image_collection/image_retrieval/5643642457831458218_0" 
            alt="Founder" 
            className="w-full h-full object-contain object-bottom drop-shadow-2xl brightness-105"
          />
        </div>

        {/* Text Content - Positioned to the right to balance the layout */}
        <div className="md:w-[60%] ml-auto text-white relative z-20">
          <h2 className="text-3xl md:text-[46px] font-bold leading-[1.15] tracking-tight mb-10">
            Having Our Global Partners Join & Raise Over $3M With BizOCapital Has Been A Great Experience In Growing Business.
          </h2>
          
          <div className="flex items-end justify-between">
            <div>
              <p className="text-2xl font-bold mb-1">Johan Vaughn</p>
              <p className="text-lg text-white/70">CEO, BizOCapital</p>
            </div>
            
            {/* Decorative white hand-drawn arrow */}
            <div className="hidden md:block translate-y-2 opacity-60">
                <svg width="140" height="70" viewBox="0 0 188 107" fill="none" className="rotate-[-5deg]">
                    <path d="M10.1581 18.0673C16.9427 15.6698 21.0567 19.3898 24.1627 24.8143C28.2755 31.9968 29.8781 40.7397 30.6548 48.8856M30.6548 48.8856C30.9859 52.3559 30.6622 56.401 30.292 59.8519M30.6548 48.8856C30.2843 41.7335 30.1578 34.0041 31.9213 27.2407M30.6548 48.8856L1.50361 74.5262" stroke="white" strokeWidth="4" strokeLinecap="round"/>
                </svg>
            </div>
          </div>
        </div>

        {/* Background Decorative Star - Fixed low opacity to match original design */}
        <div className="absolute top-10 left-10 md:left-24 opacity-10 text-white text-[280px] font-thin leading-none select-none pointer-events-none z-0">
          ☆
        </div>
        
      </div>
    </section>
  );
};

export default FoundersCorner;