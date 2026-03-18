import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
// import { ServiceIcon } from "../components/services/ServicesIcons";
import { ServiceIcon } from "./ServicesIcons";
import { services } from "../../data/services";
import { Weight } from "lucide-react";
import { ScrollFillText } from "../../utils/Scrollfilltext";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true, margin: "-60px" },
});

// ── Marquee ticker ────────────────────────────────────────────
const TICKER = [
  "Custom Software",
  "Mobile Apps",
  "MVP Builder",
  "E-Commerce",
  "AI Development",
  "Website Dev",
];

function Ticker() {
  return (
    <div
      style={{
        overflow: "hidden",
        borderTop: "1px solid #ddd9d3",
        borderBottom: "1px solid #ddd9d3",
        padding: "14px 0",
        marginBottom: 80,
      }}
    >
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        style={{
          display: "flex",
          gap: 48,
          whiteSpace: "nowrap",
          width: "max-content",
        }}
      >
        {[...TICKER, ...TICKER].map((t, i) => (
          <span
            key={i}
            style={{
              fontSize: 100,
              fontWeight: 900,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#cecfce",
              fontFamily: "'Arimo',sans-serif",
            }}
          >
            {t} <span style={{ color: "#ddd", marginLeft: 48 }}>·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// ── Service Card ──────────────────────────────────────────────
function ServiceCard({ service, index }) {
  const navigate = useNavigate();
  const isEven = index % 2 === 0;

  return (
    <motion.div
      {...fadeUp(index * 0.08)}
      onClick={() => navigate(`/services/${service.id}`)}
      style={{
        display: "grid",
        gridTemplateColumns: isEven ? "1fr 1fr" : "1fr 1fr",
        gap: 0,
        border: "1px solid #ddd9d3",
        cursor: "pointer",
        overflow: "hidden",
      }}
      whileHover="hovered"
      initial="rest"
      animate="rest"
    >
      {/* Text side */}
      <div
        style={{
          padding: "56px 52px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          order: isEven ? 0 : 1,
          borderRight: isEven ? "1px solid #ddd9d3" : "none",
          borderLeft: isEven ? "none" : "1px solid #ddd9d3",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Hover fill */}
        <motion.div
          variants={{ rest: { scaleX: 0 }, hovered: { scaleX: 1 } }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "absolute",
            inset: 0,
            background: "#111",
            transformOrigin: isEven ? "left" : "right",
            zIndex: 0,
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 28,
            }}
          >
            <motion.div
              variants={{
                rest: { background: "#e8e4df" },
                hovered: { background: "rgba(255,255,255,0.08)" },
              }}
              style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <motion.div
                variants={{ rest: { opacity: 1 }, hovered: { opacity: 0 } }}
                style={{ position: "absolute" }}
              >
                <ServiceIcon type={service.icon} size={20} color="#555" />
              </motion.div>
              <motion.div
                variants={{ rest: { opacity: 0 }, hovered: { opacity: 1 } }}
                style={{ position: "absolute" }}
              >
                <ServiceIcon
                  type={service.icon}
                  size={20}
                  color="rgba(255,255,255,0.7)"
                />
              </motion.div>
            </motion.div>
            <motion.span
              variants={{
                rest: { color: "#bbb" },
                hovered: { color: "rgba(255,255,255,0.3)" },
              }}
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.14em",
                fontFamily: "'Arimo',sans-serif",
              }}
            >
              {service.num}
            </motion.span>
          </div>

          <motion.h2
            variants={{ rest: { color: "#111" }, hovered: { color: "#fff" } }}
            style={{
              fontFamily: "'Arimo',sans-serif",
              fontSize: "clamp(36px,3.5vw,52px)",
              lineHeight: 0.95,
              letterSpacing: "0.01em",
              marginBottom: 16,
            }}
          >
            {service.title}
          </motion.h2>

          <motion.p
            variants={{
              rest: { color: "#888" },
              hovered: { color: "rgba(255,255,255,0.45)" },
            }}
            style={{
              fontSize: 13,
              fontStyle: "italic",
              marginBottom: 20,
              fontFamily: "'Arimo',sans-serif",
            }}
          >
            {service.tagline}
          </motion.p>

          <motion.p
            variants={{
              rest: { color: "#555" },
              hovered: { color: "rgba(255,255,255,0.55)" },
            }}
            style={{
              fontSize: 14,
              lineHeight: 1.8,
              maxWidth: 360,
              fontFamily: "'Arimo',sans-serif",
            }}
          >
            {service.description}
          </motion.p>
        </div>

        <motion.div
          variants={{ rest: { x: 0 }, hovered: { x: 4 } }}
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginTop: 32,
          }}
        >
          <motion.span
            variants={{
              rest: { color: "#111", borderColor: "#111" },
              hovered: { color: "#fff", borderColor: "rgba(255,255,255,0.4)" },
            }}
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontFamily: "'Arimo',sans-serif",
              paddingBottom: 2,
              borderBottom: "1px solid",
            }}
          >
            Explore Service
          </motion.span>
          <motion.span
            variants={{ rest: { color: "#111" }, hovered: { color: "#fff" } }}
            style={{ fontSize: 16 }}
          >
            ↗
          </motion.span>
        </motion.div>
      </div>

      {/* Image side */}
      <motion.div style={{ overflow: "hidden", order: isEven ? 1 : 0 }}>
        <motion.img
          src={service.image}
          alt={service.title}
          variants={{ rest: { scale: 1 }, hovered: { scale: 1.06 } }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

// ── Page ──────────────────────────────────────────────────────
export default function ServicesPage() {
  return (
    <div style={{ background: "#f0eeeb", fontFamily: "'Arimo',sans-serif" }}>
      {/* Hero */}
      <section
        style={{ padding: "80px 96px 0" }}
        className="px-6 md:px-16 lg:px-24"
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.p
            {...fadeUp(0)}
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#888",
              marginBottom: 20,
            }}
          >
            What We Build
          </motion.p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 48,
              alignItems: "end",
              marginBottom: 80,
            }}
          >
            {/* <motion.h1
              {...fadeUp(0.1)}
              style={{
                fontFamily: "'Arimo',sans-serif",
                fontSize: "120px",
                fontWeight: "600",
                lineHeight: 0.9,
                letterSpacing: "0.01em",
                color: "#111",
                margin: 0,
              }}
            >
              Our
              <br />
              Services
            </motion.h1> */}
            <ScrollFillText
              as="h1"
              style={{
                fontFamily: "'Arimo',sans-serif",
                fontSize: "120px",
                fontWeight: "600",
                lineHeight: 0.9,
                letterSpacing: "0.01em",
                color: "#111",
                margin: 0,
              }}
            >
              Our Services
            </ScrollFillText>
            <motion.p
              {...fadeUp(0.2)}
              style={{
                fontSize: 16,
                lineHeight: 1.85,
                color: "#555",
                paddingBottom: 8,
              }}
            >
              End-to-end software solutions engineered with foresight — from
              your first sprint to long-term growth. We don't just write code,
              we build things that last for eons.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <Ticker />

      {/* Service cards — alternating layout */}
      <div
        style={{ maxWidth: 1400, margin: "0 auto 0", padding: "0 96px" }}
        className="px-6 md:px-16 lg:px-24"
      >
        {services.map((s, i) => (
          <ServiceCard key={s.id} service={s} index={i} />
        ))}
        {/* Bottom border */}
        <div style={{ borderTop: "1px solid #ddd9d3" }} />
      </div>

      {/* CTA Banner */}
      <section
        style={{ padding: "80px 96px 120px" }}
        className="px-6 md:px-16 lg:px-24"
      >
        <motion.div
          {...fadeUp(0)}
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            background: "#111",
            borderRadius: 24,
            padding: "72px 80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 48,
          }}
        >
          <div>
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: 16,
              }}
            >
              Ready to build?
            </p>
            <h2
              style={{
                fontFamily: "'Arimo',sans-serif",
                fontSize: "clamp(40px,5vw,64px)",
                color: "#fff",
                lineHeight: 0.95,
                margin: 0,
              }}
            >
              Let's engineer
              <br />
              your next product
            </h2>
          </div>
          <button
            style={{
              flexShrink: 0,
              padding: "16px 36px",
              borderRadius: 999,
              background: "#f0eeeb",
              color: "#111",
              border: "none",
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: "0.05em",
              cursor: "pointer",
              fontFamily: "'Arimo',sans-serif",
              whiteSpace: "nowrap",
            }}
          >
            Start a Project ↗
          </button>
        </motion.div>
      </section>
    </div>
  );
}
