import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const CultureAbout = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax effects: Image moves slower, text moves slightly faster for depth
  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div
        ref={ref}
        className="relative w-full h-[450px] md:h-[450px] overflow-hidden flex items-center justify-center"
      >
        {/* Background Image - Scale 1.1 prevents edges showing during parallax movement */}
        <motion.img
          style={{ y: imageY, scale: 1.1 }}
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
          alt="Our Office Culture"
          className="absolute inset-0 w-full h-[120%] object-cover pointer-events-none"
        />

        {/* Dark Overlay - Gradient provides better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

        {/* Center Text Container */}
        <div className="relative z-10 flex flex-col items-center">
          <motion.h1
            className="text-white font-['Arimo',sans-serif] font-bold text-center select-none"
            style={{ 
              y: textY,
              fontSize: "90px",
              letterSpacing: "-0.02em"
            }}
          >
            About Us
          </motion.h1>
          
          {/* Breadcrumb indicator */}
          {/* <motion.div 
            style={{ y: textY }}
            className="mt-4 flex items-center gap-2 text-white/60 text-sm uppercase tracking-[0.2em] font-medium"
          >
            <span>Home</span>
            <span className="w-1 h-1 rounded-full bg-white/40"></span>
            <span className="text-white">About Us</span>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default CultureAbout;