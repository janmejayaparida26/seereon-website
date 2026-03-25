import React from 'react';

/**
 * COMPONENT: BottomReveal
 * Massive "SEEREON" text that stays behind the footer.
 */
const BottomReveal = () => {
  return (
    <div className="relative w-full h-[280px] bg-black overflow-hidden flex flex-col justify-center items-center">
      
      {/* Background Texture & Gradient */}
      <div 
        className="absolute inset-0 z-0 opacity-40"
        style={{
          background: "radial-gradient(circle at 50% 100%, #013d0a 0%, #000 80%)",
        }}
      />
      
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dcc7qgxmb/image/upload/v1740081014/8803250-scaled_1.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Massive Brand Text */}
      <div className="relative z-10 w-full flex justify-center items-center h-full">
        <h2 
          className="font-bold leading-none tracking-[-0.05em] select-none text-transparent"
          style={{
            fontSize: "clamp(100px, 20vw, 300px)",
            fontFamily: "'Arimo', sans-serif",
            backgroundImage: "linear-gradient(to bottom, #444 0%, #111 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            transform: "translateY(10%)", 
          }}
        >
          SEEREON
        </h2>
      </div>
    </div>
  );
};

/**
 * COMPONENT: MainFooter
 * Aligned Logo with Heading and structured layout.
 */
const MainFooter = () => {
  return (
    <footer className="relative w-full z-20 bg-black border-t border-white/5 overflow-hidden">
      {/* Wave Texture Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dcc7qgxmb/image/upload/v1740081014/8803250-scaled_1.jpg")`,
          backgroundSize: 'cover',
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto pt-20 pb-16 px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          
          {/* Column 1: Aligned Logo & Brand Info */}
          <div className="flex flex-col">
            {/* The Logo: Scaled and margined to match header baseline */}
            <div className="h-[20px] flex items-center mb-0"> 
                <img 
                  src="https://res.cloudinary.com/dcc7qgxmb/image/upload/v1773926744/Updated_Logo_ppjmvp.png" 
                  alt="Seereon Logo" 
                  className="h-[120px] md:h-[220px] w-auto object-contain transform -translate-x-4" 
                />
            </div>
            <div className="space-y-6 mt-4 md:mt-10">
                <p className="text-[15px] font-['Arimo',sans-serif] leading-[1.8] text-gray-400 max-w-[300px]">
                  Every project is designed to attract the right audience, engage them effectively, and convert them into loyal customers.
                </p>
                <p className="text-gray-300 text-[13px] font-['Arimo',sans-serif] tracking-wide">
                  © 2026 Seereon People Center Inc.
                </p>
            </div>
          </div>

          {/* Column 2: Expertise */}
          <div className="flex flex-col">
            <h4 className="text-[14px] font-bold text-white uppercase tracking-[0.2em] opacity-50 mb-6 h-[21px] flex items-center">
              Expertise
            </h4>
            <ul className="space-y-4 text-[15px] font-['Arimo',sans-serif] text-gray-400 mt-4 md:mt-4">
              {['Custom Software Development', 'Mobile Application Development', 'MVP Builder', 'E-Commerce', 'AI Development', 'Website Development'].map((item) => (
                <li key={item}><a href="#" className="hover:text-[#019e18] transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 3: Explore */}
          <div className="flex flex-col">
            <h4 className="text-[14px] font-bold text-white uppercase tracking-[0.2em] opacity-50 mb-6 h-[21px] flex items-center">
              Explore
            </h4>
            <ul className="space-y-4 text-[15px] font-['Arimo',sans-serif] text-gray-400 mt-4 md:mt-4">
              {['About The Company', 'Our Work & Clients', 'People & Processes', 'Work With Us'].map((item) => (
                <li key={item}><a href="#" className="hover:text-[#019e18] transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col">
            <h4 className="text-[14px] font-bold text-white uppercase tracking-[0.2em] opacity-50 mb-6 h-[21px] flex items-center">
              Contact
            </h4>
            <div className="text-[15px] leading-[1.8] text-gray-400 space-y-6 mt-4 md:mt-4">
              <p className="max-w-[280px]">Sai Vihar, 75 / 2, Ln 11D, Durga Madhab Nagar, Bhubaneswar, Odisha 751003</p>
              <div>
                <p className="font-bold text-white">info@seereon.co.in</p>
                <p>+91-9090705533</p>
              </div>
              
              <div className="flex gap-4">
                {['in', 'f', 'x', 'p'].map((social) => (
                  <button key={social} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                    <span className="text-[12px] font-bold uppercase">{social}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FullFooter = () => {
  return (
    <div className="relative">
      <div className="relative z-20">
        <MainFooter />
      </div>
      <div className="sticky bottom-0 z-10">
        <BottomReveal />
      </div>
    </div>
  );
};

export default FullFooter;