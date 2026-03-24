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
          font-family: 'Arimo', sans-serif;
        }

        /* LEFT SIDE CARDS */
        .left-col-dna {
          display: flex;
          flex-direction: column;
          gap: 24px;
          max-width: 500px;
          perspective: 1000px;
        }

        .dna-pillar-card {
          padding: 35px;
          border-radius: 24px;
          border: 1px solid rgba(0,0,0,0.02);
          transition: all 1s cubic-bezier(0.22, 1, 0.36, 1);
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
        }

        .dna-pillar-card:hover {
          transform: translateY(-5px) !important;
          box-shadow: 0 12px 30px rgba(0,0,0,0.06);
        }

        /* Unique Light Backgrounds */
        .card-foresight { background: #eef7ee; } /* Soft Mint */
        .card-engineering { background: #eff6ff; } /* Soft Blue */
        .card-longevity { background: #fdf4ff; } /* Soft Lavender */

        .dna-pillar h3 {
          font-family: 'Arimo', sans-serif;
          font-size: 26px;
          font-weight: 800;
          margin: 0 0 10px 0;
          color: #111;
          letter-spacing: -0.02em;
          text-transform: uppercase;
        }

        .dna-pillar p {
          font-size: 16px;
          line-height: 1.6;
          color: #555;
          margin: 0;
        }

        /* RIGHT SIDE ALIGNMENT */
        .right-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          gap: 32px;
        }

        .header-group {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
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
          color: #444;
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
          background: #019e18;
          border-radius: 999px;
          padding: 16px 32px;
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
        }

        .btn-pill:hover {
          background: #fff;
          color: #000;
          border: 1px solid #000;
        }

        .btn-outline {
          padding: 16px 36px;
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
          background: #000;
          color: #fff;
        }

        .arrow-icon {
          width: 14px;
          height: 14px;
        }

        @media (max-width: 1024px) {
          .about-container {
            grid-template-columns: 1fr;
            padding: 80px 24px;
            gap: 60px;
          }
          .right-col { order: 1; }
          .left-col-dna { order: 2; margin: 0 auto; width: 100%; }
        }
      `}</style>

      <section className="about-section">
        <div className="about-container">
          
          {/* LEFT COLUMN: Animated DNA Pillars */}
          <div className="left-col-dna">
            {/* Foresight: Slides from Left */}
            <div className="dna-pillar-card card-foresight" style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateX(0)" : "translateX(-40px)",
              transitionDelay: "0.2s"
            }}>
              <div className="dna-pillar">
                <h3>FORESIGHT (SEER)</h3>
                <p>Clarity and anticipation of technology trends before they arrive. We are proactive engineers, not reactive builders.</p>
              </div>
            </div>

            {/* Engineering: Scales Up */}
            <div className="dna-pillar-card card-engineering" style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "scale(1)" : "scale(0.95)",
              transitionDelay: "0.5s"
            }}>
              <div className="dna-pillar">
                <h3>MODERN ENGINEERING</h3>
                <p>Leveraging advanced tech stacks for custom web, mobile, and product engineering designed for sustainable impact.</p>
              </div>
            </div>

            {/* Longevity: Slides from Bottom */}
            <div className="dna-pillar-card card-longevity" style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(40px)",
              transitionDelay: "0.8s"
            }}>
              <div className="dna-pillar">
                <h3>LONGEVITY (EON)</h3>
                <p>Signifying enduring digital value. We engineer robust software solutions built to withstand the test of time.</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Big Intro */}
          <div className="right-col">
            <div className="header-group" style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s ease 0.1s"
            }}>
              <span className="section-tag">Who We Are</span>
              <h2 className="big-headline">
                <ScrollFillText>Custom Software Engineered for Tomorrow</ScrollFillText>
              </h2>
            </div>

            <p className="description-text" style={{
                opacity: mounted ? 1 : 0,
                transition: "opacity 1s ease 1s"
            }}>
              Seereon is a forward-thinking product engineering company merging clarity, modern innovation, and enduring value. We help organizations solve complex challenges through foresight and engineering longevity.
            </p>

            <div className="cta-row" style={{
                opacity: mounted ? 1 : 0,
                transition: "opacity 1s ease 1.2s"
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