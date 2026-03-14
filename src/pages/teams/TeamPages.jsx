import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// ─── PHOTO CONFIG ────────────────────────────────────────────
// range: [fadeIn, hold, fadeOut] as 0–1 fraction of pinned scroll
// Photos crossfade full-screen, one at a time, Ken Burns zoom effect
const PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&auto=format&fit=crop",
    range: [0.04, 0.18, 0.28],
  },
  {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&auto=format&fit=crop",
    range: [0.24, 0.38, 0.48],
  },
  {
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1200&auto=format&fit=crop",
    range: [0.44, 0.57, 0.67],
  },
  {
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=1200&auto=format&fit=crop",
    range: [0.63, 0.76, 0.86],
  },
];

// ─── TEAM DATA ───────────────────────────────────────────────
const team = [
  { name: "Rahul Mehta", role: "Founder & CEO", initials: "RM", avatar: null },
  { name: "Priya Shah", role: "Lead Engineer", initials: "PS", avatar: null },
  {
    name: "Arjun Nair",
    role: "Product Designer",
    initials: "AN",
    avatar: null,
  },
  {
    name: "Sneha Verma",
    role: "Mobile Developer",
    initials: "SV",
    avatar: null,
  },
  {
    name: "Karan Joshi",
    role: "Backend Architect",
    initials: "KJ",
    avatar: null,
  },
  {
    name: "Divya Pillai",
    role: "UI/UX Specialist",
    initials: "DP",
    avatar: null,
  },
  { name: "Mohit Gupta", role: "ERP Consultant", initials: "MG", avatar: null },
  { name: "Ananya Roy", role: "QA Engineer", initials: "AR", avatar: null },
];

// ─── ANIMATION HELPERS ──────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true, margin: "-60px" },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
  viewport: { once: true },
});

// ─── FULLSCREEN PHOTO LAYER ──────────────────────────────────
// Fades in → holds → fades out like a film dissolve
// Subtle Ken Burns slow zoom while on screen
function PhotoLayer({ photo, scrollYProgress }) {
  const opacity = useTransform(
    scrollYProgress,
    [photo.range[0] - 0.04, photo.range[0], photo.range[1], photo.range[2]],
    [0, 1, 1, 0],
  );
  const scale = useTransform(
    scrollYProgress,
    [photo.range[0], photo.range[2]],
    [1.04, 1.1],
  );

  return (
    <motion.div style={{ position: "absolute", inset: 0, opacity, zIndex: 1 }}>
      <motion.img
        src={photo.src}
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          scale,
          transformOrigin: "center center",
        }}
      />
    </motion.div>
  );
}

// ─── HEADLINE (rendered twice: dark + white) ─────────────────
function Headline({ color, subColor }) {
  return (
    <div style={{ textAlign: "center" }}>
      <p
        style={{
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: subColor,
          marginBottom: 20,
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        Seereon · Our People
      </p>
      <h1
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "clamp(64px, 11vw, 144px)",
          fontWeight: 700,
          lineHeight: 0.92,
          letterSpacing: "-0.03em",
          color: color,
          margin: 0,
        }}
      >
        meet the
        <br />
        <span style={{ fontStyle: "italic", fontWeight: 300 }}>Builders</span>
      </h1>
    </div>
  );
}

// ─── PINNED HERO ─────────────────────────────────────────────
function HeroSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Dark overlay fades in when photos appear, creating cinematic feel
  const overlayOp = useTransform(
    scrollYProgress,
    [0, 0.06, 0.88, 0.96],
    [0, 0.52, 0.52, 0],
  );

  // Headline: dark text before photos, white during, dark again after
  const textDarkOp = useTransform(
    scrollYProgress,
    [0, 0.05, 0.88, 0.96],
    [1, 0, 0, 1],
  );
  const textWhiteOp = useTransform(
    scrollYProgress,
    [0, 0.05, 0.88, 0.96],
    [0, 1, 1, 0],
  );

  // Progress bar — visible only while photos are showing
  const progressW = useTransform(scrollYProgress, [0.04, 0.88], ["0%", "100%"]);
  const progressOp = useTransform(
    scrollYProgress,
    [0.02, 0.07, 0.85, 0.92],
    [0, 1, 1, 0],
  );

  // Scroll hint — visible before photos
  const hintOp = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  // CTA — visible after photos
  const ctaOp = useTransform(scrollYProgress, [0.88, 0.97], [0, 1]);
  const ctaScale = useTransform(scrollYProgress, [0.88, 0.97], [0.9, 1]);

  return (
    <div ref={containerRef} style={{ height: "520vh" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          background: "#f0eeeb",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Layer 1 — fullscreen crossfading photos */}
        {PHOTOS.map((photo, i) => (
          <PhotoLayer key={i} photo={photo} scrollYProgress={scrollYProgress} />
        ))}

        {/* Layer 2 — cinematic dark overlay */}
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            background: "#080808",
            opacity: overlayOp,
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        {/* Layer 3 — dark headline (no photos state) */}
        <motion.div
          style={{
            opacity: textDarkOp,
            position: "absolute",
            zIndex: 10,
            textAlign: "center",
            pointerEvents: "none",
            width: "100%",
            padding: "0 24px",
          }}
        >
          <Headline color="#111" subColor="#888" />
        </motion.div>

        {/* Layer 3 — white headline (photos showing state) */}
        <motion.div
          style={{
            opacity: textWhiteOp,
            position: "absolute",
            zIndex: 10,
            textAlign: "center",
            pointerEvents: "none",
            width: "100%",
            padding: "0 24px",
          }}
        >
          <Headline color="#fff" subColor="rgba(255,255,255,0.45)" />
        </motion.div>

        {/* Layer 4 — scroll hint (before photos) */}
        <motion.div
          style={{
            opacity: hintOp,
            position: "absolute",
            bottom: 44,
            zIndex: 12,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
            pointerEvents: "none",
          }}
        >
          <span
            style={{
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#999",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Scroll to meet everyone
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
            style={{ width: 1, height: 36, background: "#bbb" }}
          />
        </motion.div>

        {/* Layer 4 — progress bar + label (while photos showing) */}
        <motion.div
          style={{
            opacity: progressOp,
            position: "absolute",
            bottom: 40,
            left: "50%",
            x: "-50%",
            zIndex: 12,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
            pointerEvents: "none",
          }}
        >
          <span
            style={{
              fontSize: 10,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.45)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Scroll to meet everyone
          </span>
          <div
            style={{
              width: 180,
              height: 1,
              background: "rgba(255,255,255,0.2)",
              borderRadius: 1,
              overflow: "hidden",
            }}
          >
            <motion.div
              style={{
                height: "100%",
                background: "rgba(255,255,255,0.8)",
                width: progressW,
              }}
            />
          </div>
        </motion.div>

        {/* Layer 4 — CTA buttons (after photos) */}
        <motion.div
          style={{
            opacity: ctaOp,
            scale: ctaScale,
            position: "absolute",
            bottom: 52,
            zIndex: 12,
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 28px",
              borderRadius: 999,
              background: "#111",
              color: "#fff",
              border: "none",
              fontSize: 14,
              fontWeight: 500,
              fontFamily: "'DM Sans', sans-serif",
              cursor: "pointer",
            }}
          >
            Our Team ↓
          </button>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 28px",
              borderRadius: 999,
              background: "transparent",
              color: "#111",
              border: "1.5px solid #111",
              fontSize: 14,
              fontWeight: 500,
              fontFamily: "'DM Sans', sans-serif",
              cursor: "pointer",
            }}
          >
            Join Us ↗
          </button>
        </motion.div>
      </div>
    </div>
  );
}

// ─── MEMBER CARD ────────────────────────────────────────────
function MemberCard({ member, index }) {
  return (
    <motion.div
      {...fadeUp(index * 0.06)}
      whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
      style={{
        background: "#fff",
        border: "1px solid #e8e5e0",
        borderRadius: 16,
        padding: "35px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 12,
        cursor: "default",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div
        style={{
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "#f0eeeb",
          border: "1.5px solid #e0ddd8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 15,
          fontWeight: 600,
          color: "#555",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        {member.avatar ? (
          <img
            src={member.avatar}
            alt={member.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          member.initials
        )}
      </div>
      <div>
        <p
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: "#111",
            margin: "0 0 4px",
          }}
        >
          {member.name}
        </p>
        <p style={{ fontSize: 13, color: "#888", margin: 0 }}>{member.role}</p>
      </div>
    </motion.div>
  );
}

// ─── PAGE ROOT ───────────────────────────────────────────────
export default function TeamPage() {
  return (
    <div style={{ background: "#f0eeeb", fontFamily: "'DM Sans', sans-serif" }}>
      {/* 1 · PINNED CINEMATIC SCROLL HERO */}
      <HeroSection />

      {/* 2 · SPLIT — headline left + body right */}
      <section
        className="px-6 md:px-16 lg:px-24"
        style={{ padding: "112px 96px", borderTop: "1px solid #ddd9d3" }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "start",
          }}
        >
          <motion.h2
            {...fadeUp(0)}
            style={{
              fontSize: "clamp(36px,4.5vw,56px)",
              fontWeight: 700,
              lineHeight: 1.07,
              letterSpacing: "-0.025em",
              color: "#111",
              margin: 0,
            }}
          >
            We Don't Just Hire Engineers — We Build a Crew of Visionaries
          </motion.h2>

          <motion.div {...fadeUp(0.15)}>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.85,
                color: "#555",
                marginBottom: 20,
              }}
            >
              At Seereon, we don't believe in siloed teams or rigid hierarchies.
              We build with people who take ownership — developers, designers,
              and strategists who are as invested in your product as you are. No
              passengers. Only builders.
            </p>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.85,
                color: "#555",
                margin: 0,
              }}
            >
              We work remotely and collaboratively, bringing together sharp
              technical minds and product thinkers from across India — united by
              a shared obsession with quality, foresight, and software that
              actually lasts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3 · FULL-WIDTH TEAM PHOTO BANNER */}
      <motion.section
        {...fadeIn(0)}
        className="mx-6 md:mx-16 lg:mx-24"
        style={{
          position: "relative",
          margin: "0 96px 112px",
          borderRadius: 24,
          overflow: "hidden",
          height: 360,
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&auto=format&fit=crop"
          alt="Seereon Team"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(17,17,17,0.82) 0%, transparent 65%)",
            display: "flex",
            alignItems: "center",
            padding: "0 56px",
          }}
        >
          <div>
            <motion.p
              {...fadeUp(0.1)}
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)",
                marginBottom: 12,
              }}
            >
              Here's Everyone
            </motion.p>
            <motion.h3
              {...fadeUp(0.2)}
              style={{
                fontSize: "clamp(30px,4vw,50px)",
                fontWeight: 700,
                lineHeight: 1.05,
                color: "#fff",
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              The minds behind
              <br />
              every line of code
            </motion.h3>
          </div>
        </div>
      </motion.section>

      {/* 4 · TEAM GRID */}
      <section
        className="px-6 md:px-16 lg:px-24"
        style={{ padding: "0 96px 128px" }}
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
              marginBottom: 48,
            }}
          >
            Our People
          </motion.p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 16,
            }}
          >
            {team.map((member, i) => (
              <MemberCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
