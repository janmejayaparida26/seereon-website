import React from 'react';
const logos = [
  { name: "Fortune", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Fortune_logo.svg/2560px-Fortune_logo.svg.png%22" },
  { name: "Appinventiv", url: "https://appinventiv.com/wp-content/themes/twentynineteen-child/images/appinventiv-logo.svg" },
  { name: "Indus Roots", url: "https://via.placeholder.com/200x60?text=INDUS+ROOTS" },
  { name: "Harley Davidson", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Harley-Davidson_logo.svg/1200px-Harley-Davidson_logo.svg.png%22" },
  { name: "Eume", url: "https://via.placeholder.com/150x50?text=DO+THE+UNDONE" },
  { name: "Govt Odisha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Seal_of_Odisha.svg/1200px-Seal_of_Odisha.svg.png%22" },
];
 
const GlobalLeadersScroll = () => {
  // We double the logos to create a seamless "loop" effect
  const infiniteLogos = [...logos, ...logos];
 
  return (
    <section className="bg-[#f0f0f0] !py-40 !px-10 overflow-hidden">
      {/* Tailwind Config Injection
          This is the "one code" way to handle the keyframes without
          touching external config files.
      */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-infinite-scroll {
            animation: scroll 10s linear infinite;
          }
        `}
      </style>
 
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
         
          {/* Left Side: Heading */}
          <div className="w-full md:w-1/4 flex-shrink-0 text-center md:text-left">
            <h2 className="text-2xl md:text-2xl font-['Arimo',sans-serif] font-semibold text-gray-900 leading-[1.1] tracking-tight">
              Recommended by<br />Global Leaders
            </h2>
          </div>
 
          {/* Right Side: Infinite Scroll Area */}
          <div className="w-full md:w-3/4 relative">
            {/* Gradient Masks (to fade logos in and out at the edges) */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#eeeeee] to-transparent z-10 hidden md:block" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#eeeeee] to-transparent z-10 hidden md:block" />
 
            {/* The Logo Track */}
            <div className="overflow-hidden">
              <div className="flex items-center gap-16 md:gap-24 animate-infinite-scroll whitespace-nowrap w-max">
                {infiniteLogos.map((logo, index) => (
                  <div key={index} className="flex-shrink-0">
                    <img
                      src={logo.url}
                      alt={logo.name}
                      className="h-10 md:h-12 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
 
          </div>
        </div>
      </div>
    </section>
  );
};
 
export default GlobalLeadersScroll;