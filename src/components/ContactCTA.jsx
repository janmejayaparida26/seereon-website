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
          padding: 0px 20px; /* Reduced padding for mobile */
          padding-bottom: 60px;
          box-sizing: border-box;
        }

        .cta-container {
          background: #0A0A0A;
          border-radius: 28px;
          padding: 40px 30px; /* Responsive padding */
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .cta-left {
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1; /* Takes up available space */
        }

        .cta-label {
          font-family: 'Arimo', sans-serif;
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          margin: 0;
        }

        .cta-heading {
          font-family: 'Arimo', sans-serif;
          /* Fluid typography: shrinks on mobile, grows on desktop */
          font-size: clamp(22px, 4vw, 50px); 
          font-weight: 700;
          line-height: 1.1;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          white-space: nowrap; /* Prevents button text from wrapping */
          gap: 8px;
          background: #EDEDED;
          color: #0A0A0A;
          font-family: 'Arimo', sans-serif;
          font-size: 14px;
          font-weight: 500;
          padding: 12px 20px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          transition: all 0.25s ease;
          flex-shrink: 0; /* Prevents button from squishing */
        }

        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255,255,255,0.12);
        }

        /* Desktop specific adjustments */
        @media (min-width: 768px) {
          .cta-wrapper {
            padding: 0px 48px;
            padding-bottom: 90px;
          }
          .cta-container {
            padding: 70px 64px;
          }
          .cta-label {
            font-size: 12px;
          }
          .cta-btn {
            padding: 14px 26px;
            font-size: 15px;
          }
        }

        /* Prevent stacking on small screens until absolutely necessary */
        @media (max-width: 480px) {
           .cta-container {
             padding: 14px 20px;
             gap: 15px;
           }
           .cta-heading br {
             display: none; /* Flatten heading for narrow horizontal space */
           }
             .cta-heading {
          font-family: 'Arimo', sans-serif;
          /* Fluid typography: shrinks on mobile, grows on desktop */
          font-size: 20px; 
          font-weight: 700;
          line-height: 1.1;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.02em;
        }

             .cta-btn {
            padding: 5px 12px;
            font-size: 12px;
          }
        }
      `}</style>

      <section className="cta-wrapper">
        <div className="cta-container">
          {/* LEFT */}
          <div className="cta-left">
            <p className="cta-label">Ready to Build?</p>
            <h2 className="cta-heading">
              Let’s Build Systems That Scale <br className="hidden-mobile" /> With Your Business
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