import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SolutionsHeading = () => {
  const sectionRef = useRef(null);

  // Track scroll progress specifically for this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    // "start 0.9" = starts when section is near bottom
    // "start 0.5" = finishes when section is in the middle
    offset: ["start 0.9", "start 0.5"]
  });

  // ANIMATION: Only Opacity (No Scale/Zoom)
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  
  // Optional: Add a subtle 'y' lift (slide up 20px) to make the fade look smoother
  const y = useTransform(scrollYProgress, [0, 1], [20, 0]);

  return (
    <section 
      ref={sectionRef} 
      className="bg-[#f2f2f2] min-h-[20vh] flex flex-col items-center justify-center overflow-hidden py-32 px-6"
    >
      <motion.div 
        style={{ opacity, y }} // Apply opacity and subtle slide up only
        className="flex flex-col items-center justify-center text-center"
      >
        {/* LARGE HEADING */}
        <h2 className="text-[70px] md:text-[70px] font-['Arimo',sans-serif] font-medium leading-[1] tracking-[-0.05em] text-[#0A0A0A]">
          Our Core Capabilities
        </h2>

        {/* SUBTEXT */}
        <p className="mt-4 text-[18px] md:text-[20px] font-['Arimo',sans-serif] font-medium text-black/80 max-w-2xl">
          Focused engineering solutions built for performance, scalability, and business impact.
        </p>
      </motion.div>
    </section>
  );
};

export default SolutionsHeading;