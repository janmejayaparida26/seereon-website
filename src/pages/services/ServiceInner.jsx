import { useParams, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { services } from "../../data/services";
import { ServiceIcon } from "./ServicesIcons";
import FullFooter from "../../components/Footer";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true, margin: "-60px" },
});

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

/* ── tiny hook to track viewport width ── */
function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return width;
}

export default function ServiceInner() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.id === id);
  const heroRef = useRef(null);
  const w = useWindowWidth();

  /* breakpoints */
  const isMobile = w < 640;
  const isTablet = w >= 640 && w < 1024;
  const isDesktop = w >= 1024;

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

  const others = services.filter((s) => s.id !== id).slice(0, 3);

  /* ── responsive values ── */
  const sidePad = isMobile ? "16px" : isTablet ? "40px" : "clamp(40px,6vw,96px)";
  const heroHeight = isMobile ? "60vh" : "70vh";
  const h1Size = isMobile
    ? "clamp(40px,11vw,64px)"
    : isTablet
    ? "clamp(52px,8vw,80px)"
    : "clamp(56px,8vw,110px)";
  const taglineSize = isMobile ? "clamp(36px,9vw,52px)" : isTablet ? "clamp(44px,7vw,64px)" : "70px";

  /* Process grid layout */
  const processColumns = isMobile ? "1fr" : isTablet ? "repeat(2,1fr)" : "repeat(4,1fr)";
  const processItemBorderRight = (i) => {
    if (isMobile) return "none";
    if (isTablet) return i % 2 !== 1 ? "1px solid #ddd9d3" : "none";
    return i < 3 ? "1px solid #ddd9d3" : "none";
  };
  const processItemBorderBottom = (i) => {
    if (isMobile) return i < 3 ? "1px solid #ddd9d3" : "none";
    if (isTablet) return i < 2 ? "1px solid #ddd9d3" : "none";
    return "none";
  };

  /* Other services grid */
  const othersColumns = isMobile ? "1fr" : isTablet ? "repeat(2,1fr)" : "repeat(3,1fr)";

  return (
    <div style={{ background: "#f0eeeb", fontFamily: "'Arimo',sans-serif" }}>

      {/* ══ HERO ══ */}
      <section
        ref={heroRef}
        style={{
          position: "relative",
          height: heroHeight,
          minHeight: isMobile ? 420 : 480,
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
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
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

        {/* Hero content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            paddingBottom: isMobile ? 40 : 72,
            paddingLeft: sidePad,
            paddingRight: sidePad,
            width: "100%",
            boxSizing: "border-box",
            maxWidth: 1400,
          }}
        >
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: isMobile ? 20 : 28 }}
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
                padding: 0,
              }}
            >
              Services
            </button>
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 12 }}>→</span>
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

          {/* Title + description row — stacks on mobile */}
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "flex-start" : "flex-end",
              justifyContent: "space-between",
              gap: isMobile ? 20 : 48,
            }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                fontFamily: "'Arimo',sans-serif",
                fontSize: h1Size,
                lineHeight: 0.9,
                color: "#fff",
                letterSpacing: "0.01em",
                margin: 0,
                flexShrink: 0,
              }}
            >
              {service.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              style={{
                fontSize: isMobile ? 14 : 16,
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.55)",
                maxWidth: isMobile ? "100%" : 380,
                paddingBottom: isMobile ? 0 : 8,
                margin: 0,
                fontFamily: "'Arimo',sans-serif",
              }}
            >
              {service.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ══ TAGLINE + BULLETS ══ */}
      <section
        style={{
          paddingTop: isMobile ? 60 : 100,
          paddingBottom: isMobile ? 60 : 100,
          paddingLeft: sidePad,
          paddingRight: sidePad,
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? 48 : 90,
            alignItems: "start",
          }}
        >
          {/* Left — tagline */}
          <motion.div {...fadeUp(0)}>
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#888",
                marginBottom: 20,
                margin: "0 0 20px",
              }}
            >
              What's included
            </p>
            <h2
              style={{
                fontFamily: "'Arimo',sans-serif",
                fontSize: taglineSize,
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

          {/* Right — bullets */}
          <motion.div {...fadeUp(0.15)} style={{ paddingTop: isMobile ? 0 : 8 }}>
            {service.bullets.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
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
                    fontSize: isMobile ? 15 : 18,
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
                    flexShrink: 0,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ PROCESS STRIP ══ */}
      <section style={{ borderTop: "1px solid #ddd9d3", borderBottom: "1px solid #ddd9d3" }}>
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            paddingLeft: sidePad,
            paddingRight: sidePad,
            boxSizing: "border-box",
            display: "grid",
            gridTemplateColumns: processColumns,
          }}
        >
          {PROCESS.map((step, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.1)}
              style={{
                padding: isMobile ? "48px 0" : isTablet ? "56px 24px" : "75px 32px",
                borderRight: processItemBorderRight(i),
                borderBottom: processItemBorderBottom(i),
                boxSizing: "border-box",
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
                  fontSize: isMobile ? 28 : isTablet ? 30 : 36,
                  fontWeight: 500,
                  color: "#111",
                  letterSpacing: "0.02em",
                  marginBottom: 12,
                  margin: "0 0 12px",
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
                  margin: 0,
                }}
              >
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ DARK CTA ══ */}
      <section
        style={{
          paddingTop: isMobile ? 48 : 80,
          paddingBottom: isMobile ? 48 : 80,
          paddingLeft: sidePad,
          paddingRight: sidePad,
          boxSizing: "border-box",
        }}
      >
        <motion.div
          {...fadeUp(0)}
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            background: "#111",
            borderRadius: isMobile ? 16 : 24,
            paddingTop: isMobile ? 48 : 72,
            paddingBottom: isMobile ? 48 : 72,
            paddingLeft: isMobile ? 24 : sidePad,
            paddingRight: isMobile ? 24 : sidePad,
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
            justifyContent: "space-between",
            gap: isMobile ? 36 : 48,
            boxSizing: "border-box",
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
                margin: "0 0 16px",
              }}
            >
              Let's talk
            </p>
            <h2
              style={{
                fontFamily: "'Arimo',sans-serif",
                fontSize: isMobile
                  ? "clamp(28px,7vw,40px)"
                  : isTablet
                  ? "clamp(32px,5vw,48px)"
                  : "clamp(36px,4.5vw,56px)",
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
              flexDirection: isMobile ? "row" : "column",
              flexWrap: isMobile ? "wrap" : "nowrap",
              gap: 12,
              flexShrink: 0,
              width: isMobile ? "100%" : "auto",
            }}
          >
            <button
              style={{
                padding: isMobile ? "12px 24px" : "14px 32px",
                borderRadius: 999,
                background: "#f0eeeb",
                color: "#111",
                border: "none",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "'Arimo',sans-serif",
                whiteSpace: "nowrap",
                flex: isMobile ? "1 1 auto" : "none",
              }}
            >
              Start a Project ↗
            </button>
            <button
              style={{
                padding: isMobile ? "12px 24px" : "14px 32px",
                borderRadius: 999,
                background: "transparent",
                color: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(255,255,255,0.2)",
                fontSize: 14,
                fontWeight: 500,
                cursor: "pointer",
                fontFamily: "'Arimo',sans-serif",
                whiteSpace: "nowrap",
                flex: isMobile ? "1 1 auto" : "none",
              }}
            >
              View Case Studies
            </button>
          </div>
        </motion.div>
      </section>

      {/* ══ OTHER SERVICES ══ */}
      <section
        style={{
          paddingBottom: isMobile ? 80 : 120,
          paddingLeft: sidePad,
          paddingRight: sidePad,
          boxSizing: "border-box",
        }}
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
              gridTemplateColumns: othersColumns,
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
                  padding: isMobile ? "28px 20px" : "32px 28px",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
              >
                <motion.p
                  whileHover={{ color: "rgba(255,255,255,0.95)" }}
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    color: "#bbb",
                    marginBottom: 16,
                    fontFamily: "'Arimo',sans-serif",
                    margin: "0 0 16px",
                  }}
                >
                  {s.num}
                </motion.p>
                <motion.p
                  whileHover={{ color: "#fff" }}
                  transition={{ duration: 0.15 }}
                  style={{
                    fontFamily: "'Arimo',sans-serif",
                    fontSize: isMobile ? 24 : 32,
                    color: "#111",
                    letterSpacing: "0.01em",
                    marginBottom: 8,
                    margin: "0 0 8px",
                  }}
                >
                  {s.title}
                </motion.p>
                <motion.p
                  whileHover={{ color: "rgba(255,255,255,0.75)" }}
                  transition={{ duration: 0.15 }}
                  style={{
                    fontSize: 12,
                    color: "#888",
                    fontFamily: "'Arimo',sans-serif",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {s.tagline}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FullFooter />
    </div>
  );
}