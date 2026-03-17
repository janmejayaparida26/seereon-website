import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

const stats = [
  { baseNum: 50, suffix: "+", label: "Awesome Clients" },
  { baseNum: 2, suffix: "Cr+", label: "Earnings a Year" },
  { baseNum: 100, suffix: "+", label: "Created Projects" },
];

function StatItem({ stat, index }) {
  // Separate refs: one for the motion visibility, one for the text content
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
      className="bg-[#f0f0f0] px-12 pb-20 pt-20"
      style={{ fontFamily: "'Arimo', sans-serif" }}
    >
      {/* Stats grid - preserved exactly */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-3">
        {stats.map((s, i) => (
          <StatItem key={i} stat={s} index={i} />
        ))}
      </div>
    </section>
  );
}