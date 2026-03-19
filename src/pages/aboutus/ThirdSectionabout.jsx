import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const items = [
  {
    num: "01.",
    title: "FORESIGHT",
    body: "We design systems with the future in mind. Our solutions are built to support where your business is headed, ensuring you’re always prepared for growth, scale, and change.",
  },
  {
    num: "02.",
    title: "PRECISION",
    body: "Every component we build has a purpose. From architecture to execution, we focus on clean, efficient, and reliable systems without unnecessary complexity.",
  },
  {
    num: "03.",
    title: "SCALABILITY",
    body: "Our solutions are built to grow with you. Whether you're expanding operations or increasing users, the systems remain stable, adaptable, and performance-driven.",
  },
  {
    num: "04.",
    title: "LONGEVITY",
    body: "We build software that lasts. Our focus is on creating systems that remain relevant, functional, and valuable over the long term.",
  },
  {
    num: "05.",
    title: "PARTNERSHIP",
    body: "We work as an extension of your team. From development to evolution, we stay involved, ensuring your systems continue to support your business as it grows.",
  },
];

function RightItem({ item }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "start 30%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className="border-t border-[#c8c5bf] pt-7 pb-10"
    >
      <p className="text-xs font-['Arimo',sans-serif] font-bold tracking-[0.12em] text-[#111] mb-2">
        {item.num}
      </p>

      <h3 className="text-xl font-bold font-['Arimo',sans-serif] tracking-tight text-[#111] uppercase mb-3">
        {item.title}
      </h3>

      <p className="text-[15px] leading-[1.8] text-[#555] max-w-[480px]">
        {item.body}
      </p>
    </motion.div>
  );
}

const ThirdSectionabout = () => {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="bg-[#f0eeeb] px-8 md:px-16 lg:px-24 py-24"
      style={{ fontFamily: "'Arimo', sans-serif" }}
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* LEFT — sticky */}
        <div className="md:sticky md:top-[25vh]">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-[clamp(36px,4.5vw,58px)] font-['Arimo',sans-serif] font-bold leading-[1.08] tracking-[-0.025em] text-[#111] mb-6"
          >
            We build software that strengthens your business advantage
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-[15px] font-['Arimo',sans-serif] leading-[1.8] text-[#555] max-w-[440px]"
          >
            From enterprise systems to high-performance applications — everything we create is engineered with clarity, precision, and long-term scalability in mind.
          </motion.p>
        </div>

        {/* RIGHT — scroll items */}
        <div className="flex flex-col">
          {items.map((item, i) => (
            <RightItem key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThirdSectionabout;
