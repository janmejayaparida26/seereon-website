import React from "react";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 }, // Changed to whileInView for better UX
  viewport: { once: true },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

const FirstSectionabout = () => {
  return (
    <section className="bg-[#ffffff] py-16 md:py-28 px-6 md:px-12 lg:px-20 font-['Arimo',sans-serif] overflow-hidden">
      <div className="max-w-[1100px] mx-auto text-center">
        {/* Tag */}
        <motion.p
          {...fadeUp(0)}
          className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-gray-400 mb-4 md:mb-6 font-bold"
        >
          About Seereon
        </motion.p>

        {/* Big Heading */}
        <motion.h1
          {...fadeUp(0.1)}
          className="leading-[0.9] text-[#111] mb-8 md:mb-12"
        >
          {/* Responsive Text Sizes:
            - text-5xl (~48px) on mobile
            - text-7xl (~72px) on tablet
            - text-[130px] on desktop
          */}
          <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-[130px] font-['Arimo',sans-serif] font-medium tracking-tighter">
            Future-Ready!
          </span>
        </motion.h1>

        {/* Body Text */}
        <motion.div
          {...fadeUp(0.25)}
          className="space-y-6"
        >
          <p className="text-base md:text-lg lg:text-xl leading-relaxed text-[#444] max-w-[900px] mx-auto">
            Seereon is a technology-driven company focused on building scalable, 
            high-performance software systems that power modern businesses. 
            We specialize in developing mobile applications, ERP systems, 
            CRM platforms, and enterprise-grade solutions designed to solve 
            real-world operational challenges.
          </p>
          
          <p className="text-base md:text-lg lg:text-xl leading-relaxed text-[#444] max-w-[900px] mx-auto">
            The name <span className="font-bold text-black">Seereon</span> comes from <span className="italic">Seer</span> and <span className="italic">Eon</span>—the 
            foundation of how we think and build. A Seer represents vision, 
            clarity, and the ability to anticipate what’s ahead, while Eon reflects 
            longevity and lasting impact.
          </p>
          
          <p className="text-base md:text-lg lg:text-xl leading-relaxed text-[#444] max-w-[900px] mx-auto font-medium">
            At Seereon, we don’t just develop software—we build systems that 
            are engineered to evolve, adapt, and grow with your business over time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FirstSectionabout;