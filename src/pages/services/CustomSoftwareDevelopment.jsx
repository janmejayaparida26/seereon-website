import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const CustomSoftwareBanner = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax effects - Identical to ServiceBanner for consistency
  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0.4, 0.7], [1, 0.4]);

  return (
    <section className="relative w-full overflow-hidden bg-black mt-0">
      <div
        ref={ref}
        className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden flex items-center justify-center"
      >
        {/* Background Image: Software/Tech focused */}
        <motion.img
          style={{ y: imageY, scale: 1.15 }}
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&auto=format&fit=crop&q=80"
          alt="Custom Software Development"
          className="absolute inset-0 w-full h-[140%] object-cover pointer-events-none"
        />

        {/* Improved Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80"></div>

        {/* Text Content */}
        <motion.div 
          className="relative z-10 flex flex-col items-center px-4"
          style={{ opacity }}
        >
          <h1 className="text-white text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-['Arimo',sans-serif] font-bold text-center tracking-tighter select-none max-w-4xl leading-tight">
            Custom Software Development
          </h1>
          
          {/* Optional Breadcrumb */}
          {/* <div className="mt-6 flex items-center gap-3 text-white/50 text-[10px] sm:text-xs uppercase tracking-[0.3em] font-bold">
            <span className="hover:text-white transition-colors cursor-pointer">Services</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#dbb34e]"></span>
            <span className="text-white">Custom Software</span>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default CustomSoftwareBanner;