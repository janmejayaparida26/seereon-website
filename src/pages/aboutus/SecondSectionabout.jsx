import React from "react";
import { ScrollFillText } from "../../components/ScrollFillText";

const SecondSectionabout = () => {
  return (
    <>
      <section className="sp-wrap">
        <div className="sp-container">
          {/* Left: Image/Visual Block */}
          <div className="sp-img">
            <div className="sp-img-inner">
              <div className="sp-img-bg"></div>

              <div className="sp-img-text font-bold uppercase tracking-tighter">
                seer
                <br />
                eon
              </div>

              <div className="sp-img-icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(255,255,255,0.7)"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a15 15 0 0 1 0 20M2 12h20" />
                </svg>
              </div>

              <div className="sp-img-badge">SEEREON Est. Future-Ready</div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="sp-content">
            <p className="sp-eyebrow font-['Arimo',sans-serif]">Our Approach</p>

            <h2 className="sp-heading font-['Arimo',sans-serif] font-semibold">
              <ScrollFillText>More Than Vendors — We Think Like Your Tech Team</ScrollFillText>
            </h2>

            <p className="sp-body font-['Arimo',sans-serif]">
              At Seereon, we don’t just deliver software — we take ownership. We align ourselves with your business objectives, understand your systems, and build solutions that support your long-term growth. Whether it's an ERP transformation, a custom CRM, or a scalable application, we simplify complexity, make informed decisions, and stay accountable at every stage.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        .sp-wrap {
          background: #ffffff;
          padding: 60px 20px;
          font-family: 'Arimo', sans-serif;
          overflow: hidden;
        }

        .sp-container {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 40px;
        }

        .sp-img {
          height: 400px;
          border-radius: 20px;
          overflow: hidden;
          width: 100%;
        }

        .sp-img-inner {
          width: 100%;
          height: 100%;
          background: #1a1a2e;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .sp-img-bg {
          position: absolute;
          inset: 0;
          background-image: url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80");
          background-size: cover;
          background-position: center;
          opacity: 0.9;
        }

        .sp-img-text {
          position: relative;
          font-family: 'Arimo', sans-serif;
          /* Scale text down more aggressively on mobile */
          font-size: clamp(60px, 12vw, 110px);
          color: rgba(255,255,255,0.15);
          line-height: 0.85;
          text-align: center;
          pointer-events: none;
        }

        .sp-img-badge {
          position: absolute;
          bottom: 20px;
          left: 20px;
          background: rgba(0,0,0,0.3);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 999px;
          padding: 6px 14px;
          color: #fff;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.05em;
        }

        .sp-img-icon {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sp-eyebrow {
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #999;
          margin-bottom: 16px;
          font-weight: 700;
        }

        .sp-heading {
          /* Fluid heading: 32px on small screens, 56px on large */
          font-size: clamp(32px, 5vw, 56px);
          line-height: 1.1;
          margin-bottom: 20px;
          color: #111;
          letter-spacing: -0.02em;
        }

        .sp-body {
          font-size: 16px;
          line-height: 1.7;
          color: #555;
          max-width: 100%;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .sp-container {
            gap: 40px;
            padding: 0 10px;
          }
          .sp-wrap {
            padding: 80px 20px;
          }
        }

        @media (max-width: 900px) {
          .sp-container {
            grid-template-columns: 1fr;
            text-align: left;
          }

          .sp-img {
            height: 350px; /* Shorter image for mobile devices */
            order: 2; /* Content first, image second on mobile if preferred */
          }
          
          .sp-content {
            order: 1;
          }

          .sp-body {
            max-width: 100%;
          }
          
          .sp-heading {
            margin-bottom: 30px;
          }
        }

        @media (max-width: 480px) {
          .sp-img {
            height: 280px;
          }
          .sp-img-badge {
            font-size: 10px;
            bottom: 15px;
            left: 15px;
          }
        }
      `}</style>
    </>
  );
};

export default SecondSectionabout;