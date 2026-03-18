import { useEffect, useState } from "react";
 
const cyclingWords = [
  "Modern Enterprises",
  "Growing Businesses",
  "Future Leaders",
  "Ambitious Startups",
  "Global Innovators",
];
 
const HeroBannner = () => {
  const [mounted, setMounted] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [animState, setAnimState] = useState("visible");
 
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);
 
  useEffect(() => {
    if (!mounted) return;
    const cycle = setInterval(() => {
      setAnimState("exit");
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % cyclingWords.length);
        setAnimState("enter");
        setTimeout(() => {
          setAnimState("visible");
        }, 50);
      }, 500);
    }, 2800);
    return () => clearInterval(cycle);
  }, [mounted]);
 
  const getWordStyle = () => {
    if (animState === "exit") {
      return {
        transform: "translateY(-110%)",
        opacity: 0,
        transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s ease",
      };
    }
    if (animState === "enter") {
      return {
        transform: "translateY(110%)",
        opacity: 0,
        transition: "none",
      };
    }
    return {
      transform: "translateY(0%)",
      opacity: 1,
      transition: "transform 0.9s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.9s ease",
    };
  };
 
  const lineStyle = (delay) => ({
    display: "block",
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(110%)",
    transition: `opacity 0.9s ease ${delay}s, transform 0.85s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
  });
 
  return (
<>
<style>{`
        .hero-section {
          background-color: #f0f0f0;
          min-height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 48px 48px 36px 48px;
          box-sizing: border-box;
          overflow: hidden;
          position: relative;
        }
 
        .headline-wrapper {
          position: relative;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 24px;
        }
 
        .headline {
          font-family: 'Arimo', sans-serif;
          font-weight: 500;
          font-size: 110px;
          line-height: 1.0;
          letter-spacing: -0.03em;
          color: #0A0A0A;
          text-transform: capitalize;
          text-align: center;
          margin: 0;
          user-select: none;
          width: 100%;
        }
 
        .line-clip {
          display: block;
          overflow: hidden;
          padding-bottom: 0.08em;
        }
 
        .line-inner {
          display: block;
        }
 
        .cycling-clip {
          display: block;
          overflow: hidden;
          padding-bottom: 0.08em;
        }
 
        .cycling-inner {
          display: block;
        }
 
        .description-block {
          max-width: 575px;
          text-align: center;
          font-family: 'Arimo', sans-serif;
          font-size: 16px;
          line-height: 1.7;
          color: #3a3a3a;
        }
 
        .description-block p {
          margin: 0;
        }
 
        .bottom-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          opacity: ${mounted ? 1 : 0};
          transition: opacity 0.7s ease 1.1s;
        }
 
        .cta-group {
          display: flex;
          align-items: center;
          gap: 28px;
        }
 
        .btn-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #ffffff;
          border: none;
          border-radius: 999px;
          padding: 11px 22px;
          font-family: 'Barlow', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #0A0A0A;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          transition: box-shadow 0.2s ease, transform 0.2s ease;
        }
 
        .btn-pill:hover {
          box-shadow: 0 4px 16px rgba(0,0,0,0.14);
          transform: translateY(-1px);
        }
 
        .btn-plain {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: none;
          border: none;
          font-family: 'Barlow', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #0A0A0A;
          cursor: pointer;
          padding: 0;
          transition: opacity 0.2s ease;
        }
 
        .btn-plain:hover { opacity: 0.5; }
 
        .latest-work {
          font-family: 'Barlow', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(10,10,10,0.45);
        }
 
        .arrow-icon {
          width: 13px;
          height: 13px;
        }
 
        /* ── Tablet Landscape (max 1024px) ── */
        @media (max-width: 1024px) {
          .hero-section {
            padding: 40px 36px 30px 36px;
          }
          .headline {
            font-size: 76px;
          }
          .description-block {
            font-size: 15px;
            max-width: 480px;
          }
        }
 
        /* ── Tablet Portrait (max 768px) ── */
        @media (max-width: 768px) {
          .hero-section {
            padding: 32px 28px 28px 28px;
          }
          .headline {
            font-size: 52px;
            letter-spacing: -0.02em;
          }
          .headline-wrapper {
            gap: 16px;
          }
          .description-block {
            font-size: 14px;
            max-width: 100%;
          }
          .bottom-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          .latest-work {
            order: -1;
          }
        }
 
        /* ── Mobile Large (max 480px) ── */
        @media (max-width: 480px) {
          .hero-section {
            padding: 24px 20px 24px 20px;
          }
          .headline {
            font-size: 36px;
            letter-spacing: -0.02em;
          }
          .headline-wrapper {
            gap: 12px;
          }
          .description-block {
            font-size: 13px;
            line-height: 1.6;
          }
          .cta-group {
            flex-direction: column;
            align-items: flex-start;
            gap: 14px;
          }
          .btn-pill {
            font-size: 13px;
            padding: 10px 18px;
          }
          .btn-plain {
            font-size: 13px;
          }
          .latest-work {
            font-size: 10px;
          }
        }
 
        /* ── Mobile Small (max 360px) ── */
        @media (max-width: 360px) {
          .hero-section {
            padding: 20px 16px 20px 16px;
          }
          .headline {
            font-size: 28px;
          }
        }
      `}</style>
 
      <section className="hero-section !pt-40">
 
        <div className="headline-wrapper">
<h1 className="headline">
 
            {/* Line 1 — fixed */}
<span className="line-clip">
<span className="line-inner" style={lineStyle(0.1)}>
                Engineering Scalable
</span>
</span>
 
            {/* Line 2 — fixed */}
<span className="line-clip">
<span className="line-inner" style={lineStyle(0.3)}>
                Software Systems for
</span>
</span>
 
            {/* Line 3 — cycling */}
<span className="cycling-clip">
<span
                className="cycling-inner"
                style={
                  mounted
                    ? getWordStyle()
                    : {
                        transform: "translateY(110%)",
                        opacity: 0,
                        transition: `transform 0.85s cubic-bezier(0.22, 1, 0.36, 1) 0.5s, opacity 0.9s ease 0.5s`,
                      }
                }
>
                {cyclingWords[wordIndex]}
</span>
</span>
 
          </h1>
 
          <div
            className="description-block !pb-20"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.8s ease 0.75s, transform 0.8s ease 0.75s",
            }}
>
<p>
<strong style={{ color: '#0A0A0A', fontWeight: 600 }}>Custom software, mobile applications, and AI-powered solutions</strong>&nbsp;designed to solve complex business challenges with precision, scalability, and long-term reliability.
</p>
</div>
</div>
 
        {/* Bottom Row */}
<div className="bottom-row">
<div className="cta-group">
<button className="btn-pill">
              Request a Consultation
<svg className="arrow-icon" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 11.5L11.5 1.5M11.5 1.5H4.5M11.5 1.5V8.5" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</button>
 
            <button className="btn-plain">
              Explore Our Work
<svg className="arrow-icon" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 11.5L11.5 1.5M11.5 1.5H4.5M11.5 1.5V8.5" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</button>
</div>
 
          <span className="latest-work">We Are Seereon...</span>
</div>
 
      </section>
</>
  );
}
 
export default HeroBannner;