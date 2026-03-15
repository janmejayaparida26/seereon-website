import React from "react";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true, margin: "-60px" },
});

const missionImg =
  "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&auto=format&fit=crop";
const visionImg =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop";

export default function FourthSectionAbout() {
  return (
    <section className="bg-[#f0eeeb] py-28 px-6 md:px-12 lg:px-20 font-['DM_Sans']">
      {/* Eyebrow */}
      <motion.p
        {...fadeUp(0)}
        className="text-center text-[11px] font-semibold tracking-[0.16em] uppercase text-[#888] mb-14"
      >
        Our Foundation
      </motion.p>

      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-5">
        {/* ── MISSION: dark card ── */}
        <motion.div
          {...fadeUp(0.1)}
          className="relative bg-[#111] rounded-[20px] overflow-hidden flex flex-col group"
        >
          {/* Background number stamp */}
          <span className="absolute top-4 right-5 font-['Bebas_Neue'] text-[130px] leading-none tracking-[-0.04em] text-white/[0.04] pointer-events-none select-none z-0">
            01
          </span>

          {/* Image */}
          <div className="h-[240px] overflow-hidden relative flex-shrink-0">
            <img
              src={missionImg}
              alt="Mission"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* gradient fade into card bg */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#111]" />
          </div>

          {/* Body */}
          <div className="relative z-10 px-9 pb-10 pt-2 flex flex-col gap-4 flex-1">
            <span className="inline-block text-[10px] font-bold tracking-[0.16em] uppercase px-3 py-1.5 rounded-full bg-white/[0.07] border border-white/[0.1] text-white/50 w-fit">
              Our Mission
            </span>

            <h2 className="font-['Bebas_Neue'] text-[clamp(38px,4.5vw,56px)] leading-[0.95] tracking-[0.01em] text-white">
              BUILDING TECH
              <br />
              THAT THINKS
              <br />
              AHEAD
            </h2>

            <div className="w-8 h-[1.5px] bg-white/20" />

            <p className="text-[14px] leading-[1.85] text-white/55 max-w-[400px]">
              To empower businesses with software that anticipates the future.
              We build ERPs, CRMs, mobile apps, and digital platforms that solve
              real problems today — and scale effortlessly tomorrow.
            </p>
          </div>
        </motion.div>

        {/* ── VISION: light card ── */}
        <motion.div
          {...fadeUp(0.2)}
          className="relative bg-white border border-[#e0ddd8] rounded-[20px] overflow-hidden flex flex-col group"
        >
          {/* Background number stamp */}
          <span className="absolute top-4 right-5 font-['Bebas_Neue'] text-[130px] leading-none tracking-[-0.04em] text-black/[0.04] pointer-events-none select-none z-0">
            02
          </span>

          {/* Image */}
          <div className="h-[240px] overflow-hidden relative flex-shrink-0">
            <img
              src={visionImg}
              alt="Vision"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
          </div>

          {/* Body */}
          <div className="relative z-10 px-9 pb-10 pt-2 flex flex-col gap-4 flex-1">
            <span className="inline-block text-[10px] font-bold tracking-[0.16em] uppercase px-3 py-1.5 rounded-full bg-[#f0eeeb] border border-[#ddd] text-[#888] w-fit">
              Our Vision
            </span>

            <h2 className="font-['Bebas_Neue'] text-[clamp(38px,4.5vw,56px)] leading-[0.95] tracking-[0.01em] text-[#111]">
              TRUSTED TECH
              <br />
              FOR THE
              <br />
              EONS
            </h2>

            <div className="w-8 h-[1.5px] bg-[#ccc]" />

            <p className="text-[14px] leading-[1.85] text-[#555] max-w-[400px]">
              To become the most trusted technology partner for growth-focused
              companies worldwide — known for foresight, engineering excellence,
              and products that outlast trends and serve your business for years
              to come.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
