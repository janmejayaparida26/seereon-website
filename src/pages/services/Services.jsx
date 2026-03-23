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
      {...fadeUp(index * 0.08)}
      onClick={() => navigate(`/services/${service.id}`)}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 0,
        border: "1px solid #ddd9d3",
        borderBottom: "none", // Prevent double borders between cards
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
    <div style={{ background: "#f0eeeb", fontFamily: "'Arimo',sans-serif", paddingBottom: "120px" }}>
      {/* Hero */}
      <section
        style={{ padding: "120px 96px 80px" }}
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
            Our ERP Solutions
          </motion.p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 48,
              alignItems: "start",
            }}
          >
            <ScrollFillText
              as="h1"
              style={{
                fontFamily: "'Arimo',sans-serif",
                fontSize: "80px",
                fontWeight: "500",
                lineHeight: 0.9,
                letterSpacing: "0.01em",
                color: "#111",
                margin: 0,
              }}
            >
              Advanced Systems we Build
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
              End-to-end software solutions engineered for scale — from initial concept to long-term evolution. We don’t just develop software, we build systems designed to perform, adapt, and last.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Service cards — alternating layout */}
      <div
        style={{ maxWidth: 1400, margin: "0 auto", padding: "0 80px" }}
        className="px-6 md:px-16 lg:px-24"
      >
        {services.map((s, i) => (
          <ServiceCard key={s.id} service={s} index={i} />
        ))}
        {/* Bottom border to close the grid */}
        <div style={{ borderTop: "1px solid #ddd9d3" }} />
      </div>
    </div>
  );
}