import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SolutionsHeading = () => {
  const sectionRef = useRef(null);

  // We track the scroll progress specifically for this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    // "start end" = when top of section hits bottom of viewport
    // "end start" = when bottom of section hits top of viewport
    offset: ["start end", "end start"]
  });

  // EXACT ANIMATION VALUES
  // Scale: Starts at 0.7 (small) and zooms to 1.1 (slightly larger than original)
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.7, 1.1]);
  // Opacity: Fades in from 0 to 1
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <section 
      ref={sectionRef} 
      className="bg-[#f2f2f2] min-h-[20vh] flex flex-col items-center justify-center overflow-hidden py-32 px-6"
    >
      <motion.div 
        style={{ scale, opacity }}
        className="flex flex-col items-center justify-center text-center"
      >
        {/* LARGE HEADING - Exact Typography Specs */}
        <h2 className="!text-[70px] md:text-[110px] font-['Arimo',sans-serif] font-medium leading-[1] tracking-[-0.05em] text-[#0A0A0A]">
          Our Core Capabilities
        </h2>

        {/* SUBTEXT - Matching the visual hierarchy */}
        <p className="mt-2 text-[18px] md:text-[14px] font-['Arimo',sans-serif] font-medium text-black/80 max-w-xl">
         Focused engineering solutions built for performance, scalability, and business impact.        </p>
      </motion.div>
    </section>
  );
};

export default SolutionsHeading;