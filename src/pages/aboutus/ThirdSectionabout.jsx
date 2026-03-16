import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const items = [
  {
    num: "01.",
    title: "FORESIGHT",
    body: "We anticipate what your business needs before it does. Our solutions are architected for where you're going — not just where you stand today. Strategic clarity is baked into every decision we make.",
  },
  {
    num: "02.",
    title: "PRECISION",
    body: "Every feature, every interaction, every API endpoint is crafted with intent. We don't ship bloat — we ship exactly what moves the needle. Clean code, clear purpose, zero compromise.",
  },
  {
    num: "03.",
    title: "SCALABILITY",
    body: "From early-stage startup to enterprise scale, our architecture grows with you. Built modular, built clean, built to handle whatever comes next without breaking what already works.",
  },
  {
    num: "04.",
    title: "LONGEVITY",
    body: "The Eon in Seereon means enduring impact. We build products that outlast trends, survive pivots, and continue to serve your business for years — even decades — to come.",
  },
  {
    num: "05.",
    title: "PARTNERSHIP",
    body: "We don't disappear after delivery. We stay invested in your roadmap, respond to your evolving needs, and show up as a long-term technology partner — not a one-time vendor.",
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
            We build software that gives your business a reason to be chosen.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-[15px] font-['Arimo',sans-serif] leading-[1.8] text-[#555] max-w-[440px]"
          >
            From scalable ERPs to sleek mobile apps — every product we ship is
            engineered with foresight, precision, and your long-term growth in
            mind.
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
