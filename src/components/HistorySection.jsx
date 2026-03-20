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
      // Updated borders: Vertical on desktop (lg), horizontal on mobile
      className={`flex flex-col items-center justify-center px-6 py-12 lg:py-5 relative 
        border-b border-[#ccc] lg:border-b-0 
        ${index < stats.length - 1 ? "lg:border-r" : "border-b-0"}`}
    >
      <span
        className="text-[#111] leading-none mb-3 inline-flex items-baseline"
        style={{
          fontSize: "clamp(60px, 8vw, 120px)", // Responsive font size
          fontWeight: 300,
          letterSpacing: "-0.03em",
          fontFamily: "'Arimo', sans-serif",
        }}
      >
        <span ref={countRef}>0</span>
        {stat.suffix}
      </span>
      <span
        className="text-[#666] text-center font-['Arimo',sans-serif]"
        style={{ fontSize: "18px", letterSpacing: "0.01em" }}
      >
        {stat.label}
      </span>
    </motion.div>
  );
}

export default function SeereonStats() {
  return (
    <section
      className="bg-white px-6 md:px-12 pb-20 pt-10 lg:pb-20 lg:pt-20"
      style={{ fontFamily: "'Arimo', sans-serif" }}
    >
      {/* Stats grid: Stacked on mobile (grid-cols-1), 3 cols on desktop (lg) */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-3">
        {stats.map((s, i) => (
          <StatItem key={i} stat={s} index={i} />
        ))}
      </div>
    </section>
  );
}