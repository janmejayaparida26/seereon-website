import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { num: "50+", label: "Awesome Clients" },
  { num: "2Cr+", label: "Earnings a Year" },
  { num: "100+", label: "Created Projects" },
];

function StatItem({ num, label, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="flex flex-col items-center justify-center px-6 py-5 relative"
      style={{
        borderRight: index < stats.length - 1 ? "1px solid #ccc" : "none",
      }}
    >
      <span
        className="text-[#111] leading-none mb-3"
        style={{
          fontSize: "120px",
          fontWeight: 300,
          letterSpacing: "-0.03em",
          fontFamily: "'Arimo', sans-serif",
        }}
      >
        {num}
      </span>
      <span
        className="text-[#666] text-center font-['Arimo',sans-serif]"
        style={{ fontSize: "18px", letterSpacing: "0.01em" }}
      >
        {label}
      </span>
    </motion.div>
  );
}

export default function SeereonStats() {
  return (
    <section
      className="bg-[#f0eeeb] px-12 py-20"
      style={{ fontFamily: "'Arimo', sans-serif" }}
    >
      {/* Who We Are label */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center text-xs font-['Arimo',sans-serif] font-medium tracking-[0.14em] uppercase text-[#888] mb-14"
      >
        Who We Are
      </motion.p>

      {/* Stats grid */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-3">
        {stats.map((s, i) => (
          <StatItem key={i} num={s.num} label={s.label} index={i} />
        ))}
      </div>
    </section>
  );
}
