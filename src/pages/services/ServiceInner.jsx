import { useParams, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { services } from "../../data/services";
// import { ServiceIcon } from "../components/services/ServicesIcons";
import { ServiceIcon } from "./ServicesIcons";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true, margin: "-60px" },
});

// ── Process steps shown on every inner page ───────────────────
const PROCESS = [
  {
    num: "01",
    title: "Discovery",
    desc: "We deep-dive into your business, users, and goals before writing a single line of code.",
  },
  {
    num: "02",
    title: "Architecture",
    desc: "We design the technical blueprint — scalable, maintainable, and future-proof from day one.",
  },
  {
    num: "03",
    title: "Build",
    desc: "Agile sprints, daily standups, continuous deployment. You see progress every week.",
  },
  {
    num: "04",
    title: "Launch",
    desc: "We handle deployment, QA, and go-live support — then stay close for what comes next.",
  },
];

export default function ServiceInner() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.id === id);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  if (!service)
    return (
      <div style={{ padding: 80, fontFamily: "'Arimo',sans-serif" }}>
        Service not found.
      </div>
    );

  // Other services (exclude current)
  const others = services.filter((s) => s.id !== id).slice(0, 3);

  return (
    <div style={{ background: "#f0eeeb", fontFamily: "'Arimo',sans-serif" }}>
      {/* ── HERO ── */}
      <section
        ref={heroRef}
        style={{
          position: "relative",
          height: "70vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        {/* Parallax image */}
        <motion.div
          style={{ position: "absolute", inset: 0, y: imgY, scale: imgScale }}
        >
          <img
            src={service.image}
            alt={service.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </motion.div>

        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(10,10,10,0.92) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            padding: "0 96px 72px",
            maxWidth: 1400,
            width: "100%",
          }}
        >
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 28,
            }}
          >
            <button
              onClick={() => navigate("/services")}
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.45)",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "'Arimo',sans-serif",
                letterSpacing: "0.08em",
              }}
            >
              Services
            </button>
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 12 }}>
              →
            </span>
            <span
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.7)",
                fontFamily: "'Arimo',sans-serif",
                letterSpacing: "0.08em",
              }}
            >
              {service.title}
            </span>
          </motion.div>

          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 48,
            }}
          >
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 20,
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.45)",
                    fontFamily: "'Arimo',sans-serif",
                  }}
                >
                  {/* {service.num} · Seereon */}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                  fontFamily: "'Arimo',sans-serif",
                  fontSize: "clamp(56px,8vw,110px)",
                  lineHeight: 0.9,
                  color: "#fff",
                  letterSpacing: "0.01em",
                  margin: 0,
                }}
              >
                {service.title}
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              style={{
                fontSize: 18,
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.55)",
                maxWidth: 380,
                paddingBottom: 8,
                fontFamily: "'Arimo',sans-serif",
              }}
            >
              {service.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── TAGLINE + BULLETS ── */}
      <section
        style={{ padding: "100px 96px" }}
        className="px-6 md:px-16 lg:px-24"
      >
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 90,
            alignItems: "start",
          }}
        >
          <motion.div {...fadeUp(0)}>
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#888",
                marginBottom: 20,
              }}
            >
              What's included
            </p>
            <h2
              style={{
                fontFamily: "'Arimo',sans-serif",
                fontSize: "70px",
                fontWeight: 600,
                lineHeight: 1,
                color: "#111",
                letterSpacing: "0.01em",
                margin: 0,
              }}
            >
              {service.tagline}
            </h2>
          </motion.div>

          <motion.div {...fadeUp(0.15)} style={{ paddingTop: 8 }}>
            {service.bullets.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "20px 0",
                  borderBottom: "1px solid #e0ddd8",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#111",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: 18,
                    color: "#333",
                    fontFamily: "'Arimo',sans-serif",
                    lineHeight: 1.5,
                  }}
                >
                  {b}
                </span>
                <span
                  style={{
                    marginLeft: "auto",
                    fontSize: 11,
                    color: "#bbb",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PROCESS STRIP ── */}
      <section
        style={{
          borderTop: "1px solid #ddd9d3",
          borderBottom: "1px solid #ddd9d3",
        }}
      >
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            padding: "0 96px",
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
          }}
        >
          {PROCESS.map((step, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.1)}
              style={{
                padding: "75px 32px",
                borderRight: i < 3 ? "1px solid #ddd9d3" : "none",
              }}
            >
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  color: "#bbb",
                  display: "block",
                  marginBottom: 16,
                  fontFamily: "'Arimo',sans-serif",
                }}
              >
                {step.num}
              </span>
              <h3
                style={{
                  fontFamily: "'Arimo',sans-serif",
                  fontSize: 36,
                  fontWeight: 500,
                  color: "#111",
                  letterSpacing: "0.02em",
                  marginBottom: 12,
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.75,
                  color: "#777",
                  fontFamily: "'Arimo',sans-serif",
                }}
              >
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── DARK CTA ── */}
      <section
        style={{ padding: "80px 96px" }}
        className="px-6 md:px-16 lg:px-24"
      >
        <motion.div
          {...fadeUp(0)}
          style={{
            maxWidth: 1400,
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
                color: "rgba(255,255,255,0.35)",
                marginBottom: 16,
              }}
            >
              Let's talk
            </p>
            <h2
              style={{
                fontFamily: "'Arimo',sans-serif",
                fontSize: "clamp(36px,4.5vw,56px)",
                color: "#fff",
                lineHeight: 0.95,
                margin: 0,
              }}
            >
              Ready to build your
              <br />
              {service.title.toLowerCase()} solution?
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              flexShrink: 0,
            }}
          >
            <button
              style={{
                padding: "14px 32px",
                borderRadius: 999,
                background: "#f0eeeb",
                color: "#111",
                border: "none",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "'Arimo',sans-serif",
                whiteSpace: "nowrap",
              }}
            >
              Start a Project ↗
            </button>
            <button
              style={{
                padding: "14px 32px",
                borderRadius: 999,
                background: "transparent",
                color: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(255,255,255,0.2)",
                fontSize: 14,
                fontWeight: 500,
                cursor: "pointer",
                fontFamily: "'Arimo',sans-serif",
                whiteSpace: "nowrap",
              }}
            >
              View Case Studies
            </button>
          </div>
        </motion.div>
      </section>

      {/* ── OTHER SERVICES ── */}
      <section
        style={{ padding: "0 96px 120px" }}
        className="px-6 md:px-16 lg:px-24"
      >
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <motion.p
            {...fadeUp(0)}
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#888",
              marginBottom: 40,
            }}
          >
            Other Services
          </motion.p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 1,
              background: "#ddd9d3",
              border: "1px solid #ddd9d3",
              borderRadius: 16,
              overflow: "hidden",
            }}
          >
            {others.map((s, i) => (
              <motion.div
                key={s.id}
                {...fadeUp(i * 0.08)}
                onClick={() => navigate(`/services/${s.id}`)}
                whileHover={{ background: "#111" }}
                style={{
                  background: "#f0eeeb",
                  padding: "32px 28px",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
              >
                <motion.p
                  whileHover={{ color: "rgba(255,255,255,0.3)" }}
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    color: "#bbb",
                    marginBottom: 16,
                    fontFamily: "'Arimo',sans-serif",
                  }}
                >
                  {s.num}
                </motion.p>
                <p
                  style={{
                    fontFamily: "'Arimo',sans-serif",
                    fontSize: 32,
                    color: "#111",
                    letterSpacing: "0.01em",
                    marginBottom: 8,
                  }}
                >
                  {s.title}
                </p>
                <p
                  style={{
                    fontSize: 12,
                    color: "#888",
                    fontFamily: "'Arimo',sans-serif",
                    lineHeight: 1.6,
                  }}
                >
                  {s.tagline}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
