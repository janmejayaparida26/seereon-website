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
          font-family: 'DM Sans', sans-serif;
          overflow: hidden;
        }

        .design-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 60px;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .design-container {
            grid-template-columns: 1fr 1fr;
            gap: 100px;
            padding: 100px 40px;
          }
        }

        /* LEFT SIDE: CONTENT */
        .content-col {
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .main-title {
          font-size: 80px;
          line-height: 1.1;
          font-weight: 500;
          color: #000;
          letter-spacing: -0.04em;
          margin-top: 24px;
        }

        .sub-heading {
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: #888;
          margin: 0;
          display: inline-block;
        }

        .description {
          font-size: 18px;
          line-height: 1.6;
          color: #444;
          max-width: 550px;
        }

        /* MINI CARDS LIST */
        .features-stack {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-top: 20px;
        }

        .mini-card {
          display: flex;
          gap: 20px;
          padding: 24px;
          background: #f8f8f8;
          border-radius: 16px;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }

        .mini-card:hover {
          background: #fff;
          border-color: #eee;
          transform: translateX(10px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .card-idx {
          font-weight: 800;
          color: #000; /* Seereon Accent */
          font-size: 18px;
        }

        .mini-card h3 {
          font-size: 20px;
          font-weight: 700;
          margin: 0 0 8px 0;
        }

        .mini-card p {
          font-size: 15px;
          color: #666;
          margin: 0;
          line-height: 1.5;
        }

        /* RIGHT SIDE: IMAGE COMPOSITION */
        .image-col {
          position: relative;
          width: 100%;
        }

        .main-image-wrapper {
          width: 100%;
          aspect-ratio: 4/5;
          border-radius: 32px;
          overflow: hidden;
          background: #000;
        }

        .main-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.85;
        }

        .floating-tag {
          position: absolute;
          bottom: -30px;
          left: -20px;
          background: #0A0A0A;
          color: #fff;
          padding: 30px;
          border-radius: 20px;
          max-width: 240px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.3);
          display: none; /* Hidden on mobile */
        }

        @media (min-width: 1024px) {
          .floating-tag { display: block; }
        }

        .floating-tag p {
          font-size: 13px;
          color: #888;
          margin-bottom: 8px;
          text-transform: uppercase;
          font-weight: 700;
        }

        .floating-tag h4 {
          font-size: 18px;
          margin: 0;
          line-height: 1.4;
        }

        /* REVEAL ANIMATION */
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <section className="design-section">
        <div className="design-container">
          
          {/* LEFT: CONTENT & FEATURES */}
          <div className={`content-col reveal ${mounted ? 'active' : ''}`}>
            <div>
              <span className="sub-heading">Expertise</span>
              <h2 className="main-title"><ScrollFillText>Technology Built Around Your Business</ScrollFillText></h2>
            </div>
            
            <p className="description">
              SEEREON aligns every line of code with your business goals. 
              We deliver scalable, high-performance systems that are strategically 
              impactful and future-ready.
            </p>

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

          {/* RIGHT: IMAGE COMPOSITION */}
          <div className={`image-col reveal ${mounted ? 'active' : ''}`} style={{ transitionDelay: '0.3s' }}>
            <div className="main-image-wrapper">
              {/* Replace with your specific engineering/abstract tech image */}
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
                alt="Engineering Excellence" 
              />
            </div>
            
            <div className="floating-tag">
              <p>Our Philosophy</p>
              <h4>Building founders and the brands that define them.</h4>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default DesignFuture;