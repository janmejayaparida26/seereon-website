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
          padding: 0px 48px;
          padding-bottom: 90px;
          box-sizing: border-box;
        }

        .cta-container {
          background: #0A0A0A;
          border-radius: 28px;
          padding: 70px 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .cta-left {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .cta-label {
          font-family: 'Arimo', sans-serif;
          font-size: 12px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          margin: 0;
        }

        .cta-heading {
          font-family: 'Arimo', sans-serif;
          font-size: 50px;
          font-weight: 700;
          line-height: 1.05;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #EDEDED;
          color: #0A0A0A;
          font-family: 'Barlow', sans-serif;
          font-size: 15px;
          font-weight: 500;
          padding: 14px 26px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .cta-btn:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 8px 25px rgba(255,255,255,0.12);
        }

        /* Responsive */
        @media (max-width: 900px) {
          .cta-container {
            flex-direction: column;
            align-items: flex-start;
            gap: 30px;
          }

          .cta-heading {
            font-size: 48px;
          }
        }

      `}</style>

      <section className="cta-wrapper">
        <div className="cta-container">

          {/* LEFT */}
          <div className="cta-left">
            <p className="cta-label">Ready to Build?</p>

            <h2 className="cta-heading">
                Let’s Build Systems That Scale <br />With Your Business
            </h2>
          </div>

          {/* RIGHT BUTTON */}
          <button className="cta-btn" onClick={() => navigate("/contact")}>
            Start a Project <ArrowIcon />
          </button>

        </div>
      </section>
    </>
  );
}