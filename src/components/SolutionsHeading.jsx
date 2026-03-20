import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollFillText } from "./ScrollFillText";

const SolutionsHeading = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "start 0.6"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [30, 0]);

  return (
    <section 
      ref={sectionRef} 
      className="bg-white flex flex-col items-center justify-center overflow-hidden py-16 md:py-24 px-6"
      style={{ fontFamily: "'Arimo', sans-serif" }}
    >
      <motion.div 
        style={{ opacity, y }} 
        className="flex flex-col items-center justify-center text-center w-full max-w-7xl"
      >
        {/* HEADING - Centered with fixed clamp for mobile readability */}
        <h2 
          className="font-medium tracking-[-0.04em] text-[#0A0A0A] text-center w-full flex flex-col items-center justify-center"
          style={{ 
            fontSize: "clamp(42px, 8vw, 85px)", 
            lineHeight: "1.05",
            marginBottom: "1.5rem",
            wordBreak: "keep-all"
          }}
        >
          <ScrollFillText>
            Our Core <br className="md:hidden" /> Capabilities
          </ScrollFillText>
        </h2>

        {/* SUBTEXT - Centered and max-width adjusted for mobile */}
        <p 
          className="text-[#000] font-normal w-full max-w-[320px] md:max-w-2xl text-center"
          style={{ 
            fontSize: "18px",
            lineHeight: "1.6",
            opacity: 0.8
          }}
        >
          Focused engineering solutions built for performance, scalability, and business impact.
        </p>
      </motion.div>
    </section>
  );
};

export default SolutionsHeading;