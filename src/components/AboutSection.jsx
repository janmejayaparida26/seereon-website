import { useEffect, useState } from "react";
import { ScrollFillText } from "./ScrollFillText";
import { useNavigate } from "react-router-dom";

export default function AboutSection() {
  const [mounted, setMounted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        .about-section {
          background-color: #ffffff;
          width: 100%;
          overflow: hidden;
        }

        .about-container {
          max-width: 1400px;
          margin: auto;
          padding: 100px 24px;
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          column-gap: 80px;
          align-items: center;
          font-family: 'DM Sans', sans-serif;
        }

        /* LEFT SIDE CARDS */
        .left-col-dna {
          display: flex;
          flex-direction: column;
          gap: 20px;
          max-width: 500px;
        }

        .dna-pillar-card {
          background: #f8f8f8;
          padding: 30px;
          border-radius: 20px;
          border: 1px solid rgba(0,0,0,0.03);
          transition: all 1s ease;
        }

        .dna-pillar h3 {
          font-family: 'DM Sans', sans-serif; /* Matching your clean look */
          font-size: 28px;
          font-weight: 700;
          margin: 0 0 8px 0;
          color: #0A0A0A;
          letter-spacing: -0.02em;
        }

        .dna-pillar p {
          font-size: 16px;
          line-height: 1.6;
          color: #555;
          margin: 0;
        }

        /* RIGHT SIDE: ALIGNMENT FIXES */
        .right-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start; /* CRITICAL: Aligns everything to the left */
          text-align: left;
          gap: 32px;
        }

        .header-group {
          display: flex;
          flex-direction: column;
          align-items: flex-start; /* Ensures span and h2 share the same left edge */
          gap: 12px;
          width: 100%;
        }

        .section-tag {
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: #888;
          margin: 0;
          display: inline-block;
        }

        .big-headline {
          font-size: clamp(48px, 6vw, 85px);
          font-weight: 500;
          line-height: 1.05;
          letter-spacing: -0.04em;
          color: #0A0A0A;
          margin: 0;
        }

        .description-text {
          font-size: 19px;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
        }

        /* BUTTONS */
        .cta-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 8px;
        }

        .btn-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #0A0A0A;
          border: 1px solid #0A0A0A;
          border-radius: 999px;
          padding: 14px 32px;
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-pill:hover {
          background: #fff; /* Custom Green from your hero */
          color: #000;
          // border-color: #e8ff00;
        }

        .btn-outline {
          display: inline-flex;
          align-items: center;
          padding: 14px 32px;
          background: transparent;
          border: 1px solid #ddd;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 600;
          color: #0A0A0A;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-outline:hover {
          border-color: #0A0A0A;
          background: #fcfcfc;
        }

        .arrow-icon {
          width: 14px;
          height: 14px;
        }

        @media (max-width: 1024px) {
          .about-container {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .right-col { order: 1; }
          .left-col-dna { order: 2; }
        }
      `}</style>

      <section className="about-section">
        <div className="about-container">
          
          {/* LEFT COLUMN */}
          <div className="left-col-dna">
            <div className="dna-pillar-card" style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateX(0)" : "translateX(-20px)",
              transitionDelay: "0.2s"
            }}>
              <div className="dna-pillar">
                <h3>FORESIGHT (SEER)</h3>
                <p>Clarity and anticipation of technology trends before they arrive. We are proactive engineers, not reactive builders.</p>
              </div>
            </div>

            <div className="dna-pillar-card" style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateX(0)" : "translateX(-20px)",
              transitionDelay: "0.4s"
            }}>
              <div className="dna-pillar">
                <h3>MODERN ENGINEERING</h3>
                <p>Leveraging advanced tech stacks for custom web, mobile, and product engineering designed for sustainable impact.</p>
              </div>
            </div>

            <div className="dna-pillar-card" style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateX(0)" : "translateX(-20px)",
              transitionDelay: "0.6s"
            }}>
              <div className="dna-pillar">
                <h3>LONGEVITY (EON)</h3>
                <p>Signifying enduring digital value. We engineer robust software solutions built to withstand the test of time.</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: ALIGNED */}
          <div className="right-col">
            <div className="header-group" style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s ease 0.1s"
            }}>
              <span className="section-tag">Who We Are</span>
              <h2 className="big-headline">
                <ScrollFillText>Custom Software Engineered for Tomorrow.</ScrollFillText>
              </h2>
            </div>

            <p className="description-text" style={{
                opacity: mounted ? 1 : 0,
                transition: "opacity 1s ease 0.8s"
            }}>
              Seereon is a forward-thinking product engineering company merging clarity, modern innovation, and enduring value. We help organizations solve complex challenges through foresight and engineering longevity.
            </p>

            <div className="cta-row" style={{
                opacity: mounted ? 1 : 0,
                transition: "opacity 1s ease 1s"
            }}>
              <button className="btn-pill" onClick={() => navigate("/aboutus")}>
                The Seereon Story 
                <svg className="arrow-icon" viewBox="0 0 13 13" fill="none">
                  <path d="M1.5 11.5L11.5 1.5M11.5 1.5H4.5M11.5 1.5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="btn-outline" onClick={() => navigate("/work")}>
                View Our Works
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}