import React from "react";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

const FirstSectionabout = () => {
  return (
    <section className="bg-[#f0eeeb] py-28 px-6 md:px-12 lg:px-20 font-['DM_Sans']">
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
          <span className="block text-[clamp(70px,12vw,150px)] text-left md:text-center">
            future- ready!
          </span>

          <span className="block text-[clamp(80px,14vw,170px)] text-right md:text-center"></span>
        </motion.h1>

        {/* Body */}
        <motion.p
          {...fadeUp(0.25)}
          className="text-[clamp(15px,1.3vw,18px)] leading-[1.8] text-[#444] max-w-[820px] mx-auto"
        >
          Seereon is a forward-thinking technology company specializing in
          building powerful software products that drive businesses into the
          future. We design and develop scalable solutions including mobile
          applications, ERP systems, CRM platforms, and e-commerce portals,
          tailored to solve real-world business challenges.
          <br />
          <br />
          The name <span className="italic">Seereon</span> is derived from{" "}
          <strong>Seer</strong> and <strong>Eon</strong>—reflecting our core
          philosophy. A Seer represents foresight, clarity, and the ability to
          anticipate what lies ahead, while Eon signifies longevity and enduring
          impact.
          <br />
          <br />
          At Seereon, we don't just build software—we envision what your
          business needs next and engineer solutions that evolve with you.
        </motion.p>

        {/* CTA */}
        <motion.div {...fadeUp(0.4)} className="mt-12">
          <button className="inline-flex items-center gap-2 border border-[#111] rounded-full px-7 py-3 text-sm text-[#111] hover:bg-[#111] hover:text-white transition-all duration-300">
            Learn More ↗
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FirstSectionabout;
