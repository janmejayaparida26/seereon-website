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
      desc: "Functionality meets strategic, future-ready architecture."
    },
    {
      title: "Modern Technologies",
      desc: "Advanced tech stacks tailored for enterprise needs."
    },
    {
      title: "Deep Understanding",
      desc: "Code that serves clear, defined business purposes."
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
            gap: 60px;
          }
          .content-col, .image-col {
            flex: 1;
          }
        }

        /* LEFT SIDE: CONTENT */
        .content-col {
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .main-title {
          /* Fluid typography: Min 38px on small screens, scales to 85px on desktop */
          font-size: clamp(38px, 7vw, 85px);
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
          font-size: clamp(16px, 2vw, 18px);
          line-height: 1.6;
          color: #444;
          max-width: 550px;
        }

        /* MINI CARDS LIST */
        .features-stack {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 10px;
        }

        .mini-card {
          display: flex;
          gap: 15px;
          padding: 20px;
          background: #f8f8f8;
          border-radius: 16px;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          border: 1px solid transparent;
        }

        @media (min-width: 768px) {
           .mini-card { gap: 24px; padding: 24px; }
        }

        .mini-card:hover {
          background: #fff;
          border-color: #eee;
          transform: translateX(8px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .card-idx {
          font-weight: 800;
          color: #000;
          font-size: 16px;
          opacity: 0.5;
        }

        .mini-card h3 {
          font-size: clamp(18px, 3vw, 20px);
          font-weight: 700;
          margin: 0 0 4px 0;
        }

        .mini-card p {
          font-size: 14px;
          color: #666;
          margin: 0;
          line-height: 1.5;
        }

        /* RIGHT SIDE: IMAGE COMPOSITION */
        .image-col {
          position: relative;
          width: 100%;
          order: -1; /* Image appears first on mobile for visual impact */
        }

        @media (min-width: 1024px) {
          .image-col { order: 2; }
        }

        .main-image-wrapper {
          width: 100%;
          aspect-ratio: 1/1; /* Square on mobile */
          border-radius: 24px;
          overflow: hidden;
          background: #f0f0f0;
        }

        @media (min-width: 768px) {
          .main-image-wrapper { aspect-ratio: 4/5; border-radius: 32px; }
        }

        .main-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
        }
        
        .main-image-wrapper:hover img {
            transform: scale(1.05);
        }

        .floating-tag {
          position: absolute;
          bottom: 15px;
          right: 15px;
          background: #0A0A0A;
          color: #fff;
          padding: 15px;
          border-radius: 12px;
          max-width: 180px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          z-index: 5;
        }

        @media (min-width: 1024px) {
          .floating-tag {
            bottom: -20px;
            left: -40px;
            right: auto;
            max-width: 260px;
            padding: 30px;
            border-radius: 16px;
          }
        }

        .floating-tag p {
          font-size: 10px;
          color: #888;
          margin-bottom: 6px;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.1em;
        }

        .floating-tag h4 {
          font-size: clamp(14px, 2vw, 16px);
          margin: 0;
          line-height: 1.4;
          font-weight: 500;
        }

        /* REVEAL ANIMATION */
        .reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <section className="design-section">
        <div className="design-container">
          
          {/* IMAGE COMPOSITION (Appears first on mobile) */}
          <div className={`image-col reveal ${mounted ? 'active' : ''}`} style={{ transitionDelay: '0.1s' }}>
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

          {/* CONTENT & FEATURES */}
          <div className={`content-col reveal ${mounted ? 'active' : ''}`}>
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
                <div key={index} className="mini-card">
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