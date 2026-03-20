import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CTASection = () => {
  const sectionRef = useRef(null);

  // Scroll tracking for animation
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end center"] // Adjusted for a smoother finish as it enters the view
  });

  // Scale: Adjusted values to ensure it doesn't over-scale on small screens
  const scale = useTransform(scrollYProgress, [0, 0.8], [0.8, 1]);
  // Opacity: Fades in comfortably
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  return (
    <section 
      ref={sectionRef} 
      // Responsive padding: pt-12 for mobile, pt-20 for desktop
      className="bg-[#f2f2f2] min-h-[50vh] md:min-h-[70vh] flex flex-col items-center justify-center overflow-hidden py-12 md:py-20 px-6"
    >
      <motion.div 
        style={{ scale, opacity }}
        className="flex flex-col items-center justify-center text-center w-full max-w-7xl"
      >
        {/* RESPONSIVE HEADING - Uses fluid typography */}
        <h2 
          className="font-['Arimo',sans-serif] font-bold leading-[1] tracking-[-0.05em] text-[#0A0A0A]"
          style={{ 
            // clamp(min, preferred, max) - scales automatically between 48px and 110px
            fontSize: "clamp(48px, 10vw, 110px)",
            wordBreak: "keep-all"
          }}
        >
          Stop Guessing <br className="hidden md:block" /> 
          <span className="md:hidden"> </span> {/* Space for mobile where <br/> is hidden */}
          Let's Start Building
        </h2>

        {/* SUBTEXT - Scaled for mobile readability */}
        <p className="mt-6 md:mt-10 text-[18px] md:text-[22px] font-['Arimo',sans-serif] font-medium text-black/80 max-w-[320px] md:max-w-xl">
          Your brand dream is just a call away.
        </p>
      </motion.div>
    </section>
  );
};

export default CTASection;