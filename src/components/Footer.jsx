import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-0 px-0 border-t border-gray-100">
      {/* Container with max-width to match professional web standards */}
      <div className="max-h-fit mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 !px-15 !py-10">
        
        {/* Column 1: Logo & About */}
        <div className="space-y-6">
            {/* <img src="src/assets/Updated Logo.png" /> */}
          <h2 className="text-5xl font-['Arimo',sans-serif] font-bold tracking-tighter !py-6">SEEREON</h2>
          <p className="text-[15px] font-['Arimo',sans-serif] leading-[1.6] text-[#3e3e3e] max-w-[300px]">
            ONEDESIGN is a Brand Strategy & Creative Consultancy helping founders realise their brand dream by helping them launch in the market with ease.
          </p>
        </div>

        {/* Column 2: Expertise */}
        <div className="space-y-6 !py-7">
          <h4 className="text-[24px] font-['Arimo',sans-serif] font-bold text-black !pb-5">Expertise</h4>
          <ul className="space-y-4 text-[14px] font-['Arimo',sans-serif] font-medium text-[#3e3e3e]">
            {['BRAND STRATEGY', 'VISUAL IDENTITY', 'BUILD A PRODUCT', 'DESIGN AN EXPERIENCE', 'LAUNCH YOUR COMPANY', 'INTERNSHIPS & MENTORSHIP'].map((item) => (
              <li key={item}><a href="#" className="hover:text-gray-500 transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Column 3: Explore */}
        <div className="space-y-6 !py-7">
          <h4 className="text-[24px] font-['Arimo',sans-serif] font-bold text-black !pb-5">Explore</h4>
          <ul className="space-y-4 text-[14px] font-['Arimo',sans-serif] font-medium text-[#3e3e3e]">
            {['ONEDESIGN METHOD', 'ABOUT THE COMPANY', 'OUR WORK & CLIENTS', 'PEOPLE & PROCESSES', 'WORK WITH US'].map((item) => (
              <li key={item}><a href="#" className="hover:text-gray-500 transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="space-y-6 !py-7">
          <h4 className="text-[24px] font-['Arimo',sans-serif] font-bold text-black !pb-5">Contact</h4>
          <div className="text-[14px] leading-[1.8] text-black space-y-4">
            <p className="max-w-[250px] font-['Arimo',sans-serif]">ONEDESIGN, 3rd Floor, 55, Lane 2, Westend Marg, Saidullajab, Saket, New Delhi 110030, INDIA</p>
            <div>
              <p className="font-bold">hello@onedesignlabs.com</p>
              <p>+91 628-083-4209</p>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              {['Bē', 'f', 'in', 'p', '►'].map((icon) => (
                <button key={icon} className="w-9 h-9 flex items-center justify-center rounded-full bg-black text-white text-[12px] font-bold hover:bg-neutral-800 transition-all">
                  {icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;