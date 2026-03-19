import React from "react";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

const FirstSectionabout = () => {
  return (
    <section className="bg-[#f0eeeb] py-28 px-6 md:px-12 lg:px-20 font-['Arimo',sans-serif]">
      <div className="max-w-[1100px] mx-auto text-center">
        {/* Tag */}
        <motion.p
          {...fadeUp(0)}
          className="text-xs tracking-[0.14em] uppercase text-gray-500 mb-6"
        >
          About Seereon
        </motion.p>

        {/* Big Heading */}
        <motion.h1
          {...fadeUp(0.1)}
          className="font-['Bebas_Neue'] leading-[0.9] text-[#111] mb-10"
        >
          <span className="block text-[clamp(70px,12vw,150px)] font-['Arimo',sans-serif] text-left md:text-center">
            Future-Ready!
          </span>

          <span className="block text-[clamp(80px,14vw,170px)] font-['Arimo',sans-serif] text-right md:text-center"></span>
        </motion.h1>

        {/* Body */}
        <motion.p
          {...fadeUp(0.25)}
          className="text-[clamp(15px,1.3vw,18px)] leading-[1.8] text-[#444] max-w-[1400px] mx-auto"
        >
          Seereon is a technology-driven company focused on building scalable, high-performance software systems that power modern businesses. We specialize in developing mobile applications, ERP systems, CRM platforms, and enterprise-grade solutions designed to solve real-world operational challenges.
          The name Seereon comes from Seer and Eon—the foundation of how we think and build. A Seer represents vision, clarity, and the ability to anticipate what’s ahead, while Eon reflects longevity and lasting impact.
          At Seereon, we don’t just develop software—we build systems that are engineered to evolve, adapt, and grow with your business over time.
        </motion.p>

        {/* CTA */}
        {/* <motion.div {...fadeUp(0.4)} className="mt-12">
          <button className="inline-flex items-center font-['Arimo',sans-serif] gap-2 border border-[#111] rounded-full px-7 py-3 text-sm text-[#111] hover:bg-[#111] hover:text-white transition-all duration-300">
            Learn More ↗
          </button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default FirstSectionabout;
