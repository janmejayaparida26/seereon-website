import React from 'react';
import { Link } from "react-router-dom";
import { Linkedin, Facebook, Instagram } from 'lucide-react';

/**
 * COMPONENT: BottomReveal
 * Responsive massive text that scales down for mobile using clamp.
 */
const BottomReveal = () => {
  return (
    <div className="relative w-full h-[200px] md:h-[280px] bg-black overflow-hidden flex flex-col justify-center items-center">
      
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

      {/* Massive Brand Text - Uses clamp for responsive font sizing */}
      <div className="relative z-10 w-full flex justify-center items-center h-full px-4">
        <h2 
          className="font-bold leading-none tracking-[-0.05em] select-none text-transparent"
          style={{
            fontSize: "clamp(80px, 20vw, 300px)",
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
 * Responsive grid that stacks on mobile and aligns on desktop.
 */
const MainFooter = () => {
  const serviceLinks = [
    { label: "Custom Software Development", href: "/services/custom-software" },
    { label: "Mobile Application Development", href: "/services/mobile-app" },
    { label: "MVP Builder", href: "/services/mvp-builder" },
    { label: "E-Commerce", href: "/services/ecommerce" },
    { label: "AI Development", href: "/services/ai-development" },
    { label: "Website Development", href: "/services/website-development" },
  ];

  const socialLinks = [
    { key: "f", icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { key: "in", icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { 
      key: "x", 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ), 
      href: "#", 
      label: "X" 
    },
    { key: "ig", icon: <Instagram size={20} />, href: "#", label: "Instagram" },
  ];

  const exploreLinks = [
    { label: "About The Company", href: "/aboutus" },
    { label: "Our Work & Clients", href: "/work" },
    { label: "Our Products", href: "/product" },
    { label: "Work With Us", href: "/contact" },
  ];

  return (
    <footer className="relative w-full z-20 bg-black border-t border-white/5 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dcc7qgxmb/image/upload/v1740081014/8803250-scaled_1.jpg")`,
          backgroundSize: 'cover',
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto pt-16 md:pt-20 pb-12 md:pb-16 px-6 md:px-12 lg:px-7">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-10">
          
          {/* Column 1: Logo & Brand */}
          <div className="flex flex-col items-start">
            <div className="h-auto flex items-center mb-4 md:mb-0"> 
                <img 
                  src="https://res.cloudinary.com/dcc7qgxmb/image/upload/v1774455395/Updated_Logo-Photoroom_gxbwiv.png" 
                  alt="Seereon Logo" 
                  className="h-[70px] md:h-[70px] w-auto object-contain transform -translate-x-4 md:-translate-x-4" 
                />
            </div>
            <div className="space-y-4 md:space-y-6 mt-2 md:mt-10 text-left">
                <p className="text-[14px] md:text-[15px] font-['Arimo',sans-serif] leading-[1.6] md:leading-[1.8] text-gray-400 max-w-[300px]">
                  Every project is designed to attract the right audience, engage them effectively, and convert them into loyal customers.
                </p>
                <p className="text-gray-500 text-[12px] md:text-[13px] font-['Arimo',sans-serif] tracking-wide">
                  © 2026 Seereon People Center Inc.
                </p>
            </div>
          </div>

          {/* Column 2: Expertise */}
          <div className="flex flex-col">
            <h4 className="text-[13px] md:text-[14px] font-bold text-white uppercase tracking-[0.2em] opacity-50 mb-4 md:mb-6 md:h-[21px] mt-5 flex items-center">
              Expertise
            </h4>
            <ul className="space-y-3 md:space-y-4 text-[14px] md:text-[15px] font-['Arimo',sans-serif] text-gray-400">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="hover:text-[#019e18] transition-colors no-underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Explore */}
          <div className="flex flex-col">
            <h4 className="text-[13px] md:text-[14px] font-bold text-white uppercase tracking-[0.2em] opacity-50 mb-4 md:mb-6 md:h-[21px] mt-5 flex items-center">
              Explore
            </h4>
            <ul className="space-y-3 md:space-y-4 text-[14px] md:text-[15px] font-['Arimo',sans-serif] text-gray-400">
              {exploreLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="hover:text-[#019e18] transition-colors no-underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col">
            <h4 className="text-[13px] md:text-[14px] font-bold text-white uppercase tracking-[0.2em] opacity-50 mb-4 md:mb-6 md:h-[21px] mt-5 flex items-center">
              Contact
            </h4>
            <div className="text-[14px] md:text-[15px] leading-[1.6] md:leading-[1.8] text-gray-400 space-y-5 md:space-y-6">
              <p className="max-w-[280px]">Sai Vihar, 75 / 2, Ln 11D, Durga Madhab Nagar, Bhubaneswar, Odisha 751003</p>
              <div>
                <p className="font-bold text-white">info@seereon.co.in</p>
                <p>+91-9090705533</p>
              </div>
              
              <div className="flex gap-3 pt-2 md:pt-0">
                {socialLinks.map((social) => (
                  <a
                    key={social.key}
                    href={social.href}
                    className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 no-underline"
                  >
                    {social.icon}
                  </a>
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