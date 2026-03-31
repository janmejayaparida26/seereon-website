import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ServiceIcon } from "./ServicesIcons";
import { services } from "../../data/services";
import { ScrollFillText } from "../../utils/Scrollfilltext";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true, margin: "-60px" },
});

// ── Service Card ──────────────────────────────────────────────
function ServiceCard({ service, index }) {
  const navigate = useNavigate();
  const isEven = index % 2 === 0;

  return (
    <motion.div
      {...fadeUp(index * 0.1)}
     onClick={() => navigate(service.slug)}
      className="grid grid-cols-1 md:grid-cols-2 border-x border-t border-[#ddd9d3] cursor-pointer overflow-hidden relative group"
      whileHover="active"
      whileTap="active" // Triggers the "hover" effect on mobile tap
      initial="rest"
      animate="rest"
    >
      {/* Text side */}
      <div
        className={`p-10 md:p-14 lg:p-20 flex flex-col justify-between relative overflow-hidden min-h-[400px] md:min-h-0 ${
          isEven ? "md:order-1 border-b md:border-b-0 md:border-r border-[#ddd9d3]" : "md:order-2 border-b md:border-b-0"
        }`}
      >
        {/* Background Curtain Slide Effect */}
        <motion.div
          variants={{
            rest: { x: isEven ? "-101%" : "101%" },
            active: { x: 0 },
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 bg-[#111] z-0"
        />

        {/* Content Container (Layered above the curtain) */}
        <div className="relative z-10 pointer-events-none">
          <div className="flex items-center gap-4 mb-8">
            <motion.div
              variants={{
                rest: { background: "#f2f0ed" },
                active: { background: "rgba(255,255,255,0.12)" },
              }}
              className="w-12 h-12 rounded-xl flex items-center justify-center relative"
            >
              <motion.div variants={{ rest: { opacity: 1 }, active: { opacity: 0 } }} className="absolute">
                <ServiceIcon type={service.icon} size={22} color="#444" />
              </motion.div>
              <motion.div variants={{ rest: { opacity: 0 }, active: { opacity: 1 } }} className="absolute">
                <ServiceIcon type={service.icon} size={22} color="#ffffff" />
              </motion.div>
            </motion.div>
            
            <motion.span
              variants={{ rest: { color: "#999" }, active: { color: "rgba(255,255,255,0.4)" } }}
              className="text-[11px] font-bold tracking-[0.2em] font-['Arimo',sans-serif]"
            >
              {service.num}
            </motion.span>
          </div>

          <motion.h2
            variants={{ rest: { color: "#111" }, active: { color: "#ffffff" } }}
            className="font-['Arimo',sans-serif] text-4xl md:text-5xl lg:text-6xl font-bold leading-[1] tracking-tight mb-4"
          >
            {service.title}
          </motion.h2>

          <motion.p
            variants={{ rest: { color: "#888" }, active: { color: "rgba(255,255,255,0.5)" } }}
            className="text-[14px] md:text-[15px] font-medium italic mb-6 font-['Arimo',sans-serif]"
          >
            {service.tagline}
          </motion.p>

          <motion.p
            variants={{ rest: { color: "#555" }, active: { color: "rgba(255,255,255,0.7)" } }}
            className="text-base leading-relaxed max-w-sm font-['Arimo',sans-serif]"
          >
            {service.description}
          </motion.p>
        </div>

        {/* Explore Service Link */}
        <motion.div
          variants={{ rest: { x: 0 }, active: { x: 12 } }}
          className="relative z-10 flex items-center gap-3 mt-12"
        >
          <motion.span
            variants={{
              rest: { color: "#111", borderColor: "#111" },
              active: { color: "#ffffff", borderColor: "#ffffff" },
            }}
            className="text-[13px] font-bold uppercase tracking-[0.15em] border-b-2 pb-1 font-['Arimo',sans-serif]"
          >
            Explore Service
          </motion.span>
          <motion.span variants={{ rest: { color: "#111" }, active: { color: "#ffffff" } }} className="text-xl">
            ↗
          </motion.span>
        </motion.div>
      </div>

      {/* Image Block */}
      <div className={`overflow-hidden h-[300px] md:h-auto ${isEven ? "md:order-2" : "md:order-1"}`}>
        <motion.img
          src={service.image}
          alt={service.title}
          variants={{ rest: { scale: 1 }, active: { scale: 1.1 } }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-full object-cover block"
        />
      </div>
    </motion.div>
  );
}

// ── Services Page ──────────────────────────────────────────────
export default function ServicesPage() {
  return (
    <div className="bg-white font-['Arimo',sans-serif]">
      {/* Hero Section */}
      <section className="pt-32 md:pt-48 pb-16 md:pb-28 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <motion.p
            {...fadeUp(0)}
            className="text-[11px] font-bold tracking-[0.25em] uppercase text-gray-400 mb-6"
          >
            Capabilities
          </motion.p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-start">
            <ScrollFillText
              as="h1"
              className="text-5xl md:text-7xl lg:text-7xl font-medium leading-[0.9] tracking-tighter text-[#111]"
            >
              Advanced Systems we Build
            </ScrollFillText>
            
            <motion.p
              {...fadeUp(0.2)}
              className="text-lg md:text-xl leading-relaxed text-[#555] lg:pt-6"
            >
              End-to-end software solutions engineered for scale — from initial concept to long-term evolution. We don’t just develop software, we build systems designed to perform, adapt, and last.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Service Grid Section */}
      <section className="px-6 md:px-12 lg:px-24 pb-24 md:pb-40">
        <div className="max-w-[1400px] mx-auto">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
          <div className="border-t border-[#ddd9d3]" />
        </div>
      </section>
    </div>
  );
}