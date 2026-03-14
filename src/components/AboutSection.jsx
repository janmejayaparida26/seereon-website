import { useEffect, useState } from "react";

export default function AboutSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .about-wrap {
          background-color: #f0f0f0;
          font-family: 'Arimo', sans-serif;
          font-weight: 600;
          width: 100%;
          min-height: 80vh;
          display: flex;
          align-items: center;
          padding: 40px 56px;
        }
        .about-grid {
          width: 100%;
          display: grid;
          grid-template-columns: 400px 1fr;
          column-gap: 100px;
          align-items: start;
        }
        .left-col {
          font-size: 20px;
          font-weight: 400;
          line-height: 1.5;
          color: #111;
          padding-top: 6px;
        }
        .right-col {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .big-headline {
          font-size: 86px;
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
          border: none;
          border-radius: 999px;
          padding: 12px 24px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #0A0A0A;
          cursor: pointer;
          box-shadow: 0 2px 10px rgba(0,0,0,0.08);
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .btn-pill:hover { box-shadow: 0 6px 20px rgba(0,0,0,0.13); transform: translateY(-1px); }
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
          transition: opacity 0.2s;
        }
        .btn-plain:hover { opacity: 0.45; }
      `}</style>

      <div className="about-wrap">
        <div className="about-grid">

          {/* LEFT — description */}
          <div
            className="left-col"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s",
            }}
          >
            Whether you’re a startup ready to launch or an established business aiming to scale, our team works with you to turn your vision into reality — faster, smarter, and better.
          </div>

          {/* RIGHT — headline + buttons */}
          <div className="right-col">
            <h2
              className="big-headline"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(28px)",
                transition: "opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s",
              }}
            >
              Best Website Development & Digital Marketing Company
            </h2>

            <div
              className="cta-row"
              style={{
                opacity: mounted ? 1 : 0,
                transition: "opacity 0.7s ease 1s",
              }}
            >
              <button className="btn-pill">
                Our Clients
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M1.5 11.5L11.5 1.5M11.5 1.5H4.5M11.5 1.5V8.5" stroke="#0A0A0A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="btn-plain">
                Our Story
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M1.5 11.5L11.5 1.5M11.5 1.5H4.5M11.5 1.5V8.5" stroke="#0A0A0A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}