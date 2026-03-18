import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CTASection = () => {
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
      className="bg-[#f2f2f2] min-h-[60vh] flex flex-col items-center justify-center overflow-hidden pt-20 px-6"
    >
      <motion.div 
        style={{ scale, opacity }}
        className="flex flex-col items-center justify-center text-center"
      >
        {/* LARGE HEADING - Exact Typography Specs */}
        <h2 className="!text-[90px] md:text-[110px] font-['Arimo',sans-serif] font-bold leading-[1] tracking-[-0.05em] text-[#0A0A0A]">
          Stop Guessing <br />
          Let's Start Building
        </h2>

        {/* SUBTEXT - Matching the visual hierarchy */}
        <p className="mt-10 text-[18px] md:text-[22px] font-['Arimo',sans-serif] font-medium text-black/80 max-w-xl">
          Your brand dream is just a call away.
        </p>
      </motion.div>
    </section>
  );
};

export default CTASection;