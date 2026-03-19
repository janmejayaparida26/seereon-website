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
          background-color: #f0f0f0;
          width: 100%;
        }

        .about-container {
          max-width: 1400px;
          margin: auto;
          padding: 80px 24px;
          display: grid;
          grid-template-columns: 400px 1fr;
          column-gap: 100px;
          align-items: start;
          font-family: 'Arimo', sans-serif;
        }

        .left-col {
          font-size: 20px;
          font-weight: 400;
          line-height: 1.5;
          color: #111;
        }

        .right-col {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .big-headline {
          font-size: 80px;
          font-weight: 400;
          line-height: 1.0;
          letter-spacing: -0.03em;
          color: #0A0A0A;
        }

        .cta-row {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .btn-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #fff;
          border-radius: 999px;
          padding: 12px 24px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #0A0A0A;
          cursor: pointer;
          box-shadow: 0 2px 10px rgba(0,0,0,0.08);
          border: none;
        }

        .btn-plain {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: none;
          border: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #0A0A0A;
          cursor: pointer;
        }
      `}</style>

      <section className="about-section">
        <div className="about-container">
          <div
            className="left-col"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s",
            }}
          >
            Whether you're a startup building from scratch or an enterprise scaling operations, we partner with you to transform ideas into powerful, high-performance software — built to scale, built to last.
          </div>

          <div className="right-col">
            <h2
              className="big-headline"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(28px)",
                transition: "opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s",
              }}
            >
              <ScrollFillText>Best Software Development Company</ScrollFillText>
            </h2>

            <div
              className="cta-row"
              style={{
                opacity: mounted ? 1 : 0,
                transition: "opacity 0.7s ease 1s",
              }}
            >
              <button className="btn-pill" onClick={() => navigate("/aboutus")}>Explore about us
              <svg className="arrow-icon" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 11.5L11.5 1.5M11.5 1.5H4.5M11.5 1.5V8.5" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              </button>

              <button className="btn-plain" onClick={() => navigate("/services")}>Our Services
                <svg className="arrow-icon" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 11.5L11.5 1.5M11.5 1.5H4.5M11.5 1.5V8.5" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}