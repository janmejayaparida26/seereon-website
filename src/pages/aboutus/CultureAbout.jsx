import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const CultureAbout = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax effects: Adjusted for smoother transitions on different screen heights
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  
  // Opacity fade as the user scrolls away
  const opacity = useTransform(scrollYProgress, [0.3, 0.6], [1, 0.5]);

  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div
        ref={ref}
        /* Responsive Heights: 
           - 300px on small mobile 
           - 400px on tablets
           - 500px on desktop
        */
        className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden flex items-center justify-center"
      >
        {/* Background Image with optimized scale for parallax */}
        <motion.img
          style={{ y: imageY, scale: 1.15 }}
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
          alt="Our Office Culture"
          className="absolute inset-0 w-full h-[140%] object-cover pointer-events-none"
        />

        {/* Improved Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/80"></div>

        {/* Center Text Container */}
        <div className="relative z-10 flex flex-col items-center px-4 w-full">
          <motion.h1
            style={{ opacity }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            /* Fluid Typography:
               - text-5xl (~48px) on mobile
               - text-7xl (~72px) on tablet
               - text-9xl (~128px) on large desktop
            */
            className="text-white text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-['Arimo',sans-serif] font-bold text-center select-none tracking-tighter"
          >
            About Us
          </motion.h1>
          
          {/* Active Breadcrumb indicator - Now fully responsive */}
          {/* <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 flex items-center gap-3 text-white/50 text-[10px] sm:text-xs uppercase tracking-[0.3em] font-bold"
          >
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default CultureAbout;