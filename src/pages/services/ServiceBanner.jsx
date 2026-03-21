import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ServiceBanner = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax effects - Kept exactly as your original logic
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    /* Fix 1: mt-0 and bg-black ensures no gap exists between the navbar and this section */
    <section className="px-0 py-0 mt-0 bg-black overflow-hidden block">
      <div
        ref={ref}
        className="relative w-full h-[420px] overflow-hidden flex items-center justify-center"
      >
        {/* Fix 2: h-[130%] and scale-110 provides the extra coverage needed to hide the grey line 
            during the parallax transition */}
        <motion.img
          style={{ y: imageY, scale: 1.1 }}
          src="https://images.unsplash.com/photo-1763568258535-fa1066506571?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYyfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww"
          alt="Services"
          className="absolute inset-0 w-full h-[130%] object-cover pointer-events-none"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Center Text - Fix 3: Merged duplicate style attributes into one object */}
        <motion.h1
          className="relative z-10 text-white text-[90px] font-medium text-center"
          style={{}}
        >
          Services
        </motion.h1>
      </div>
    </section>
  );
};

export default ServiceBanner;