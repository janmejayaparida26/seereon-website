import React, { useEffect, useState } from 'react';
import { ScrollFillText } from "./ScrollFillText";

const DesignFuture = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    {
      title: "Structured Engineering",
      desc: "Functionality meets strategic, future-ready architecture.",
      bgColor: "#eef7ee" // Soft Mint
    },
    {
      title: "Modern Technologies",
      desc: "Advanced tech stacks tailored for enterprise needs.",
      bgColor: "#eff6ff" // Soft Blue
    },
    {
      title: "Deep Understanding",
      desc: "Code that serves clear, defined business purposes.",
      bgColor: "#fdf4ff" // Soft Lavender
    }
  ];

  return (
    <>
      <style>{`
        .design-section {
          background-color: #ffffff;
          padding: 60px 24px;
          font-family: 'Arimo', sans-serif;
          overflow: hidden;
        }

        .design-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        @media (min-width: 1024px) {
          .design-section {
            padding: 100px 40px;
          }
          .design-container {
            flex-direction: row;
            align-items: center;
            gap: 80px;
          }
          .content-col, .image-col {
            flex: 1;
          }
        }

        /* CONTENT COL */
        .content-col {
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .main-title {
          font-size: clamp(48px, 6vw, 85px);
          line-height: 1.05;
          font-weight: 500;
          color: #000;
          letter-spacing: -0.04em;
          margin: 12px 0;
        }

        .sub-heading {
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: #888;
        }

        .description {
          font-size: 18px;
          line-height: 1.6;
          color: #444;
          max-width: 550px;
          margin-bottom: 10px;
        }

        /* COLORFUL MINI CARDS */
        .features-stack {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .mini-card {
          display: flex;
          gap: 24px;
          padding: 28px;
          border-radius: 24px;
          transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
          border: 1px solid rgba(0,0,0,0.02);
          position: relative;
        }

        .mini-card:hover {
          transform: translateX(12px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          filter: brightness(0.98);
        }

        .card-idx {
          font-weight: 900;
          color: #000;
          font-size: 14px;
          opacity: 0.3;
          margin-top: 4px;
        }

        .mini-card h3 {
          font-size: 22px;
          font-weight: 700;
          margin: 0 0 6px 0;
          color: #111;
        }

        .mini-card p {
          font-size: 15px;
          color: #555;
          margin: 0;
          line-height: 1.5;
        }

        /* IMAGE COMPOSITION */
        .image-col {
          position: relative;
          width: 100%;
          order: -1;
        }

        @media (min-width: 1024px) {
          .image-col { order: 2; }
        }

        .main-image-wrapper {
          width: 100%;
          aspect-ratio: 4/5;
          border-radius: 32px;
          overflow: hidden;
          background: #f0f0f0;
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
        }

        .main-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1.2s ease;
        }
        
        .main-image-wrapper:hover img {
          transform: scale(1.08);
        }

        .floating-tag {
          position: absolute;
          bottom: 0px;
          left: 0px;
          background: #0A0A0A;
          color: #fff;
          padding: 30px 50px;
          border-radius: 0px;
          max-width: 280px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.2);
          z-index: 5;
        }

        @media (max-width: 1024px) {
          .floating-tag {
            right: 15px;
            bottom: 15px;
            padding: 20px;
            max-width: 200px;
          }
        }

        .floating-tag p {
          font-size: 10px;
          color: #888;
          margin-bottom: 8px;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.12em;
        }

        .floating-tag h4 {
          font-size: 17px;
          margin: 0;
          line-height: 1.4;
          font-weight: 500;
        }

        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <section className="design-section">
        <div className="design-container">
          
          {/* IMAGE SIDE */}
          <div className={`image-col reveal ${mounted ? 'active' : ''}`}>
            <div className="main-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" 
                alt="Digital Strategy and Engineering" 
              />
            </div>
            
            <div className="floating-tag">
              <p>Our Philosophy</p>
              <h4>Building founders and the brands that define them.</h4>
            </div>
          </div>

          {/* CONTENT SIDE */}
          <div className={`content-col reveal ${mounted ? 'active' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <div>
              <span className="sub-heading">Expertise</span>
              <h2 className="main-title">
                <ScrollFillText>Technology Built Around Your Business</ScrollFillText>
              </h2>
              <p className="description">
                SEEREON aligns every line of code with your business goals. 
                We deliver scalable, high-performance systems that are strategically 
                impactful and future-ready.
              </p>
            </div>

            <div className="features-stack">
              {features.map((item, index) => (
                <div 
                  key={index} 
                  className="mini-card" 
                  style={{ backgroundColor: item.bgColor }}
                >
                  <span className="card-idx">0{index + 1}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default DesignFuture;