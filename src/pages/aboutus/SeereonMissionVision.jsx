import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// ─── IMAGE CONFIG ──────
const missionImg = "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&auto=format&fit=crop";
const visionImg = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop";
const valueImg = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop";

export default function FourthSectionAbout() {
  const containerRef = useRef(null);

  // 1. Capture Raw Scroll Progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // 2. SMOOTHING: Pass the raw progress through a Spring
  // stiffness: 100 (how fast it snaps), damping: 30 (how much it bounces/resists)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // 3. TILT ANIMATION: Using smoothProgress instead of raw scrollYProgress
  const rotate1 = useTransform(smoothProgress, [0, 0.45], [-18, 0]);
  const rotate3 = useTransform(smoothProgress, [0, 0.45], [18, 0]);
  const rotate2 = useTransform(smoothProgress, [0, 0.45], [6, 0]);

  // 4. ENHANCED FADE & SCALE: Starts earlier and is more gradual
  const opacity = useTransform(smoothProgress, [0, 0.35], [0, 1]);
  const scale = useTransform(smoothProgress, [0, 0.4], [0.75, 1]);

  // 5. VERTICAL FLOAT: Smoothed upward movement
  const yTranslate = useTransform(smoothProgress, [0, 0.45], [150, 0]);

  return (
    <section ref={containerRef} className="bg-[#f0f0f0] py-28 px-6 md:px-12 font-['Arimo',sans-serif] overflow-hidden">
      {/* Eyebrow */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center text-[11px] font-semibold tracking-[0.16em] uppercase text-[#888] mb-14"
      >
        Our Foundation
      </motion.p>

      {/* Grid container */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {/* ── MISSION: Card 01 ── */}
        <motion.div
          style={{ rotate: rotate1, y: yTranslate, opacity, scale }}
          className="relative bg-[#111] rounded-[20px] overflow-hidden flex flex-col group min-h-[580px] shadow-xl"
        >
          <span className="absolute top-4 right-5 font-['Arimo',sans-serif] text-[100px] leading-none tracking-[-0.04em] text-white/[0.04] pointer-events-none select-none z-0">
            01
          </span>
          <div className="h-[220px] overflow-hidden relative flex-shrink-0">
            <img src={missionImg} alt="Mission" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#111]" />
          </div>
          <div className="relative z-10 px-8 pb-10 pt-2 flex flex-col gap-4 flex-1">
            <span className="inline-block text-[10px] font-bold tracking-[0.16em] uppercase px-3 py-1.5 rounded-full bg-white/[0.07] border border-white/[0.1] text-white/50 w-fit">
              Our Mission
            </span>
            <h2 className="text-[36px] md:text-[42px] leading-[1] tracking-[0.01em] text-white uppercase">
              Building Tech<br />That Thinks<br />Ahead
            </h2>
            <div className="w-8 h-[1.5px] bg-white/20" />
            <p className="text-[15px] leading-[1.7] text-white/55">
              To empower businesses with intelligent, scalable software systems that solve real challenges today while preparing them for tomorrow’s growth.
            </p>
          </div>
        </motion.div>

        {/* ── VISION: Card 02 ── */}
        <motion.div
          style={{ rotate: rotate2, y: yTranslate, opacity, scale }}
          className="relative bg-white border border-[#e0ddd8] rounded-[20px] overflow-hidden flex flex-col group min-h-[580px] shadow-xl"
        >
          <span className="absolute top-4 right-5 font-['Arimo',sans-serif] text-[100px] leading-none tracking-[-0.04em] text-black/[0.04] pointer-events-none select-none z-0">
            02
          </span>
          <div className="h-[220px] overflow-hidden relative flex-shrink-0">
            <img src={visionImg} alt="Vision" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
          </div>
          <div className="relative z-10 px-8 pb-10 pt-2 flex flex-col gap-4 flex-1">
            <span className="inline-block text-[10px] font-bold tracking-[0.16em] uppercase px-3 py-1.5 rounded-full bg-[#f0eeeb] border border-[#ddd] text-[#888] w-fit">
              Our Vision
            </span>
            <h2 className="text-[36px] md:text-[42px] leading-[1] tracking-[0.01em] text-[#111] uppercase">
              Trusted Tech<br />For The<br />Eons
            </h2>
            <div className="w-8 h-[1.5px] bg-[#ccc]" />
            <p className="text-[15px] leading-[1.7] text-[#555]">
              To become a globally trusted technology partner known for building reliable, future-ready software that stands the test of time.
            </p>
          </div>
        </motion.div>

        {/* ── VALUE: Card 03 ── */}
        <motion.div
          style={{ rotate: rotate3, y: yTranslate, opacity, scale }}
          className="relative bg-[#111] rounded-[20px] overflow-hidden flex flex-col group min-h-[580px] shadow-xl"
        >
          <span className="absolute top-4 right-5 font-['Arimo',sans-serif] text-[100px] leading-none tracking-[-0.04em] text-white/[0.04] pointer-events-none select-none z-0">
            03
          </span>
          <div className="h-[220px] overflow-hidden relative flex-shrink-0">
            <img src={valueImg} alt="Value" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#111]" />
          </div>
          <div className="relative z-10 px-8 pb-10 pt-2 flex flex-col gap-4 flex-1">
            <span className="inline-block text-[10px] font-bold tracking-[0.16em] uppercase px-3 py-1.5 rounded-full bg-white/[0.07] border border-white/[0.1] text-white/50 w-fit">
              Our Value
            </span>
            <h2 className="text-[36px] md:text-[42px] leading-[1] tracking-[0.01em] text-white uppercase">
              Quality over<br />Volume<br />Always
            </h2>
            <div className="w-8 h-[1.5px] bg-white/20" />
            <p className="text-[15px] leading-[1.7] text-white/55">
              We prioritize precision, performance, and reliability over quantity. Every solution is crafted with attention to detail, ensuring it is secure, scalable, and built to perform.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}