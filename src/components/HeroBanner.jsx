import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const cyclingWords = [
  "Modern Enterprises",
  "Growing Businesses",
  "Ambitious Startups",
  "Global Innovators",
];

const HeroBannner = () => {
  const [mounted, setMounted] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [animState, setAnimState] = useState("visible");
  const navigate = useNavigate();

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
    const baseStyle = {
      color: "#ffffff", 
    };

    if (animState === "exit") {
      return {
        ...baseStyle,
        transform: "translateY(-110%)",
        opacity: 0,
        transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s ease",
      };
    }
    if (animState === "enter") {
      return {
        ...baseStyle,
        transform: "translateY(110%)",
        opacity: 0,
        transition: "none",
      };
    }
    return {
      ...baseStyle,
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
          min-height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 48px 48px 36px 48px;
          box-sizing: border-box;
          overflow: hidden;
          position: relative;
          background-color: #000; /* Fallback */
        }

        .video-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .video-container video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* The overlay ensures text is readable over video */
        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #000000a6;
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2; /* Sits above video and overlay */
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
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
          font-weight: 600;
          font-size: 90px;
          line-height: 1.0;
          letter-spacing: -0.03em;
          color: #ffffff;
          text-transform: capitalize;
          text-align: center;
          margin: 0;
          user-select: none;
          width: 100%;
        }

        .line-clip, .cycling-clip {
          display: block;
          overflow: hidden;
          padding-bottom: 0.08em;
        }

        .line-inner, .cycling-inner {
          display: block;
        }

        .description-block {
          max-width: 575px;
          text-align: center;
          font-family: 'Arimo', sans-serif;
          font-size: 16px;
          line-height: 1.7;
          color: #ffffff;
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
          gap: 8px;
          background: #0A0A0A;
          border: none;
          border-radius: 999px;
          padding: 12px 26px;
          font-family: 'Barlow', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #ffffff;
          cursor: pointer;
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .btn-pill:hover {
          transform: translateY(-2px);
          background: #000;
        }

        .btn-plain {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: none;
          border: none;
          font-family: 'Barlow', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #0A0A0A;
          cursor: pointer;
          padding: 0;
        }

        .latest-work {
          font-family: 'Barlow', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.6);
        }

        .arrow-icon { width: 13px; height: 13px; }

        @media (max-width: 1024px) {
          .headline { font-size: 76px; }
        }
        @media (max-width: 768px) {
          .hero-section { padding: 32px 24px; }
          .headline { font-size: 52px; }
          .bottom-row { flex-direction: column; align-items: flex-start; gap: 20px; }
        }
      `}</style>

      <section className="hero-section !pt-40">
        {/* Background Video Layer */}
        <div className="video-container">
          <div className="video-overlay"></div>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            // poster="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80"
          >
            <source 
              src="https://res.cloudinary.com/dcc7qgxmb/video/upload/v1773924437/Untitled-design-3-1-1-1-1_ljnuws.mp4" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="hero-content">
          <div className="headline-wrapper">
            <h1 className="headline">
              <span className="line-clip">
                <span className="line-inner" style={lineStyle(0.1)}>
                  Engineering Scalable
                </span>
              </span>

              <span className="line-clip">
                <span className="line-inner" style={lineStyle(0.3)}>
                  Software Systems for
                </span>
              </span>

              <span className="cycling-clip">
                <span
                  className="cycling-inner"
                  style={
                    mounted
                      ? getWordStyle()
                      : {
                          color: "#01970e",
                          transform: "translateY(110%)",
                          opacity: 0,
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
                <strong style={{ color: "#ffffff", fontWeight: 700 }}>
                  Custom software, mobile applications, and AI-powered solutions
                </strong>
                &nbsp;designed to solve complex business challenges with precision and long-term reliability.
              </p>
            </div>
          </div>

          <div className="bottom-row">
            <div className="cta-group">
              <button className="btn-pill" onClick={() => navigate("/contact")}>
                Request a Consultation
                <svg className="arrow-icon" viewBox="0 0 13 13" fill="none">
                  <path d="M1.5 11.5L11.5 1.5M11.5 1.5H4.5M11.5 1.5V8.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <button className="btn-plain" onClick={() => navigate("/work")}>
                Explore Our Work
                <svg className="arrow-icon" viewBox="0 0 13 13" fill="none">
                  <path d="M1.5 11.5L11.5 1.5M11.5 1.5H4.5M11.5 1.5V8.5" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <span className="latest-work">We Are Seereon...</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroBannner;