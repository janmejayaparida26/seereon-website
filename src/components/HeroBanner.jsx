import { useEffect, useState } from "react";

const HeroBannner = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

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
          opacity: ${mounted ? 1 : 0};
          transform: ${mounted ? 'translateY(0)' : 'translateY(30px)'};
          transition: opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s;
          user-select: none;
          width: 100%;
        }

        .description-block {
          max-width: 575px;
          text-align: center;
          font-family: 'Arimo', sans-serif;
          font-size: 16px;
          line-height: 1.7;
          color: #3a3a3a;
          opacity: ${mounted ? 1 : 0};
          transform: ${mounted ? 'translateY(0)' : 'translateY(16px)'};
          transition: opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s;
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
      `}</style>

      <section className="hero-section !pt-40">

        {/* Headline + Description stacked */}
        <div className="headline-wrapper">
          <h1 className="headline">
            Engineering Scalable<br />
            Software Systems for<br />
            Modern Enterprises
          </h1>

          <div className="description-block !pb-20">
            <p>
              <strong style={{ color: '#0A0A0A', fontWeight: 600 }}>Custom software, mobile applications, and AI-powered solutions</strong>  designed to solve complex business challenges with precision, scalability, and long-term reliability.
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