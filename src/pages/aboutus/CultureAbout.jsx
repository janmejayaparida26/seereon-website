import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const CultureAbout = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax effects: Subtle movement for a premium feel
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div
        ref={ref}
        /* Mobile height is slightly shorter (350px) to keep the heading in view */
        className="relative w-full h-[350px] md:h-[420px] overflow-hidden flex items-center justify-center"
      >
        {/* Background Image */}
        <motion.img
          style={{ y: imageY, scale: 1.1 }}
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
          alt="Our Office Culture"
          className="absolute inset-0 w-full h-[130%] object-cover pointer-events-none"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>

        {/* Center Text Container */}
        <div className="relative z-10 flex flex-col items-center px-6">
          <motion.h1
            className="text-white text-[90px] font-['Arimo',sans-serif] font-medium text-center select-none"
            style={{}}
          >
            About Us
          </motion.h1>
          
          {/* Breadcrumb indicator - Optional but looks great on mobile when centered */}
          {/* <motion.div 
            style={{ y: textY }}
            className="mt-4 flex items-center gap-2 text-white/60 text-[10px] md:text-sm uppercase tracking-[0.2em] font-medium"
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