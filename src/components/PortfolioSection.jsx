import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    client: "Sudhir Bagul",
    year: "2025",
    title: "Designing the Future of Creator-First AI",
    image: "https://static.wixstatic.com/media/67c604_cc6c5c3cb8a3408195b87d80e0e87a1a~mv2.jpg",
  },
  {
    id: 2,
    client: "Mohd. Areeb",
    year: "2025",
    title: "Weaving Heritage into Contemporary Living",
    image: "https://static.wixstatic.com/media/67c604_ee53ba6ba28047ee90c89526f8c3fd3b~mv2.jpg",
  },
  {
    id: 3,
    client: "Metro Group",
    year: "2025",
    title: "Merai — A Harmony of Grace, Art, and Grandeur",
    image: "https://static.wixstatic.com/media/67c604_99253eaefa204df9b88674822958be1d~mv2.jpg",
  },
];

const ArrowIcon = ({ color = "#0A0A0A" }) => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
    <path d="M1.5 11.5L11.5 1.5M11.5 1.5H4.5M11.5 1.5V8.5" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function LatestWorkSection() {
  const targetRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (!targetRef.current) return;

      const rect = targetRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress = -rect.top / (rect.height - windowHeight);
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @media (max-width: 768px) {

          /* ❌ REMOVE STICKY ON MOBILE */
          .sticky-mobile-fix {
            position: relative !important;
            height: auto !important;
          }

          .wrapper-mobile-fix {
            height: auto !important;
          }

          /* Layout */
          .mobile-stack {
            flex-direction: column !important;
            padding-bottom: 40px;
          }

          .left-panel {
            width: 100% !important;
            padding: 40px 20px !important;
          }

          .right-panel {
            overflow-x: auto !important;
            overflow-y: hidden !important;
          }

          /* ❌ DISABLE SCROLL ANIMATION */
          .track {
            transform: translateX(0) !important;
          }

          .card {
            width: 80vw !important;
          }

          .card-image {
            height: 220px !important;
          }
        }
      `}</style>

      {/* ✅ WRAPPER */}
      <div
        ref={targetRef}
        className="relative w-full wrapper-mobile-fix"
        style={{ height: "400vh" }}
      >

        {/* ✅ STICKY ONLY FOR DESKTOP */}
        <div className="sticky top-0 h-screen w-full flex items-center bg-[#0A0A0A] sticky-mobile-fix">

          <div className="flex w-full h-full mobile-stack">

            {/* LEFT */}
            <div
              className="left-panel flex-shrink-0 flex flex-col justify-center"
              style={{ width: "700px", padding: "80px 60px" }}
            >
              <div className="flex flex-col gap-6">
                <p className="text-white/50 text-[12px] font-semibold tracking-[0.14em] uppercase">
                  FROM STARTUPS TO ENTERPRISES
                </p>

                <h2 className="text-white font-semibold leading-[1.0] text-[80px] max-md:text-[42px]">
                  Latest Product<br />Work
                </h2>

                <p className="text-white/60 text-[16px] leading-relaxed max-w-[400px]">
                  A curated showcase of our latest software products, platforms, and digital systems — engineered with precision, performance, and scalability at the core.
                </p>

                <button
                  onClick={() => navigate("/work")}
                  className="flex items-center gap-2 bg-white text-[#0A0A0A] font-semibold text-[15px] rounded-full px-6 py-3 w-fit"
                >
                  View All <ArrowIcon />
                </button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="right-panel flex-1 flex items-center overflow-hidden">
              <div
                className="track flex gap-10"
                style={{
                  transform: `translateX(-${scrollProgress * 70}%)`,
                  transition: "transform 0.1s ease-out",
                }}
              >
                {projects.map((project) => (
                  <div key={project.id} className="card flex-shrink-0" style={{ width: "520px" }}>
                    
                    <div className="card-image w-full rounded-2xl overflow-hidden mb-6">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <p className="text-white font-semibold text-[20px]">
                      {project.title}
                    </p>

                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* spacing */}
      {/* <div className="h-[80px]" /> */}
    </>
  );
}