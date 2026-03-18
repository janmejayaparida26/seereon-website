import React from 'react';

const ContactCTA = () => {
  return (
    <div className="bg-[#f2f0eb] p-10 font-sans">
      <div className="bg-[#111111] rounded-[40px] p-16 md:p-24 flex flex-col md:flex-row justify-between items-start md:items-center min-h-[400px]">
        
        {/* Text Section */}
        <div className="max-w-2xl">
          <p className="text-[#888888] text-xs font-bold tracking-widest uppercase mb-6">
            Ready to build?
          </p>
          <h2 className="text-white text-5xl md:text-7xl font-normal leading-tight tracking-tight">
            Let's engineer <br /> your next product
          </h2>
        </div>

        {/* Button Section */}
        <div className="mt-10 md:mt-0">
          <button className="bg-[#f2f0eb] text-black px-8 py-5 rounded-full flex items-center gap-2 font-medium hover:bg-white transition-colors duration-300">
            Start a Project
            <span className="text-lg">↗</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default ContactCTA;