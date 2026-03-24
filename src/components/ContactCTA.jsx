import React from "react";
import { useNavigate } from "react-router-dom";

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 13 13" fill="none">
    <path
      d="M1.5 11.5L11.5 1.5M11.5 1.5H4.5M11.5 1.5V8.5"
      stroke="#0A0A0A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .cta-wrapper {
          width: 100%;
          background: #f0f0f0;
          padding: 0px 40px;
          padding-bottom: 60px;
          box-sizing: border-box;
        }

        .cta-container {
          /* Black to Emerald Green Gradient */
          background: linear-gradient(135deg, #000000 0%, #019e18 100%);
          
          position: relative;
          overflow: hidden;
          border-radius: 28px;
          padding: 40px 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
          box-shadow: 0 25px 50px -12px rgba(1, 158, 24, 0.25);
        }

        /* Wave Line Texture Background */
        .cta-container::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='800' height='200' viewBox='0 0 800 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 100 C 150 150 350 50 500 100 C 650 150 750 50 800 100 L 800 200 L 0 200 Z' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='2'/%3E%3Cpath d='M0 120 C 150 170 350 70 500 120 C 650 170 750 70 800 120' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='1'/%3E%3Cpath d='M0 80 C 150 130 350 30 500 80 C 650 130 750 30 800 80' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='1'/%3E%3C/svg%3E");
          background-size: cover;
          background-repeat: no-repeat;
          opacity: 0.6;
          pointer-events: none;
        }

        .cta-left {
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
          position: relative;
          z-index: 2;
        }

        .cta-label {
          font-family: 'Arimo', sans-serif;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #dbb34e;
          margin: 0;
          font-weight: 600;
        }

        .cta-heading {
          font-family: 'Arimo', sans-serif;
          font-size: clamp(22px, 4vw, 50px); 
          font-weight: 700;
          line-height: 1.1;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.03em;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          white-space: nowrap;
          gap: 10px;
          background: #ffffff;
          color: #0A0A0A;
          font-family: 'Arimo', sans-serif;
          font-size: 15px;
          font-weight: 600;
          padding: 14px 28px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          flex-shrink: 0;
          position: relative;
          z-index: 2;
        }

        .cta-btn:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 15px 35px rgba(0,0,0,0.2);
          background: #fdfdfd;
        }

        @media (min-width: 768px) {
          .cta-wrapper { padding: 0px 48px; padding-bottom: 90px; }
          .cta-container { padding: 80px 72px; }
        }

        @media (max-width: 600px) {
          .cta-container { 
            flex-direction: column; 
            text-align: center; 
            padding: 40px 24px;
            gap: 30px;
          }
          .cta-heading { font-size: 26px; }
          .cta-btn { width: 100%; justify-content: center; }
        }
      `}</style>

      <section className="cta-wrapper">
        <div className="cta-container">
          {/* CONTENT */}
          <div className="cta-left">
            <p className="cta-label">Innovation Awaits</p>
            <h2 className="cta-heading">
              Let’s Build Systems That Scale <br className="hidden-mobile" /> With Your Business
            </h2>
          </div>

          {/* ACTION BUTTON */}
          <button className="cta-btn" onClick={() => navigate("/contact")}>
            Start a Project <ArrowIcon />
          </button>
        </div>
      </section>
    </>
  );
}