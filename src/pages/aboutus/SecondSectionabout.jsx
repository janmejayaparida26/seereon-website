import React from "react";

const SecondSectionabout = () => {
  return (
    <>
      <section className="sp-wrap">
        <div className="sp-container">
          {/* Left: Image/Visual Block */}
          <div className="sp-img">
            <div className="sp-img-inner">
              <div className="sp-img-bg"></div>

              <div className="sp-img-text">
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

              <div className="sp-img-badge">Est. Future-Ready</div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="sp-content">
            <p className="sp-eyebrow font-['Arimo',sans-serif]">Our Approach</p>

            <h2 className="sp-heading font-['Arimo',sans-serif] font-semibold">
              More Than Vendors — We Think Like Your Tech Team
            </h2>

            <p className="sp-body font-['Arimo',sans-serif]">
              At Seereon, we don't just deliver code — we deliver ownership. We
              embed ourselves in your business, understand your roadmap, and
              build software that moves with your ambitions. Whether it's an ERP
              overhaul, a CRM from scratch, or a mobile product launch, we
              challenge assumptions, navigate complexity, and stay accountable
              through every sprint.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        .sp-wrap {
          background: #f0eeeb;
          padding: 80px 10px;
          font-family: 'Arimo', sans-serif;
        }

        .sp-container {
          max-width: 1300px;
          margin: auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 60px;
        }

        .sp-img {
          height: 460px;
          border-radius: 24px;
          overflow: hidden;
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
  background-image: url("https://images.unsplash.com/photo-1716703432455-3045789de738?q=80&w=1170&auto=format&fit=crop");
  background-size: cover;
  background-position: center;
}

        .sp-img-text {
          position: relative;
          font-family: 'Arimo', sans-serif;
          font-size: clamp(52px, 6vw, 90px);
          color: rgba(255,255,255,0.12);
          line-height: 0.9;
        }

        .sp-img-badge {
          position: absolute;
          bottom: 24px;
          left: 24px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 999px;
          padding: 8px 18px;
          color: #fff;
          font-size: 13px;
        }

        .sp-img-icon {
          position: absolute;
          top: 24px;
          right: 24px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sp-content {}

        .sp-eyebrow {
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #888;
          margin-bottom: 20px;
        }

        .sp-heading {
          font-size: clamp(36px, 4vw, 56px);
          line-height: 1.1;
          margin-bottom: 24px;
          color: #111;
        }

        .sp-body {
          font-size: 16px;
          line-height: 1.8;
          color: #444;
          max-width: 480px;
        }

        @media (max-width: 900px) {
          .sp-container {
            grid-template-columns: 1fr;
          }

          .sp-img {
            height: 320px;
          }
        }
      `}</style>
    </>
  );
};

export default SecondSectionabout;
