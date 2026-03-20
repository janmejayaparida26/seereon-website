import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

const stats = [
  { baseNum: 50, suffix: "+", label: "Awesome Clients" },
  { baseNum: 2, suffix: "Cr+", label: "Earnings a Year" },
  { baseNum: 100, suffix: "+", label: "Created Projects" },
];

function StatItem({ stat, index }) {
  const inViewRef = useRef(null);
  const countRef = useRef(null);
  const inView = useInView(inViewRef, { once: true, margin: "-80px" });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(stat.baseNum);
    }
  }, [inView, motionValue, stat.baseNum]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (countRef.current) {
        countRef.current.textContent = Math.floor(latest);
      }
    });
  }, [springValue]);

  return (
    <motion.div
      ref={inViewRef}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className={`flex flex-col items-center justify-center px-6 py-10 md:py-5 relative
        ${index < stats.length - 1 ? "border-b md:border-b-0 md:border-r border-[#ccc]" : ""}`}
    >
      <span
        className="text-[#111] leading-none mb-3 font-light tracking-tighter"
        style={{
          // Fluid font size: scales from 60px on mobile to 120px on desktop
          fontSize: "clamp(60px, 8vw, 120px)",
          fontFamily: "'Arimo', sans-serif",
        }}
      >
        <span ref={countRef}>0</span>
        {stat.suffix}
      </span>
      <span
        className="text-[#666] text-center font-['Arimo',sans-serif] text-[16px] md:text-[18px] tracking-wide"
      >
        {stat.label}
      </span>
    </motion.div>
  );
}

export default function SeereonStats() {
  return (
    <section
      className="bg-[#f0f0f0] px-6 md:px-12 py-12 md:py-20"
      style={{ fontFamily: "'Arimo', sans-serif" }}
    >
      {/* Mobile: grid-cols-1 (stacking)
          Tablet: grid-cols-3 (side-by-side)
      */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3">
        {stats.map((s, i) => (
          <StatItem key={i} stat={s} index={i} />
        ))}
      </div>
    </section>
  );
}