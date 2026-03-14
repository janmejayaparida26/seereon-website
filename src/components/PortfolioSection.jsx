import { useState, useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    client: "Sudhir Bagul",
    year: "2025",
    title: "Designing the Future of Creator-First AI",
    image: "https://static.wixstatic.com/media/67c604_cc6c5c3cb8a3408195b87d80e0e87a1a~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PixAura%20AIArtboard%2017.jpg",
    slug: "pixaura",
  },
  {
    id: 2,
    client: "Mohd. Areeb",
    year: "2025",
    title: "Weaving Heritage into Contemporary Living",
    image: "https://static.wixstatic.com/media/67c604_ee53ba6ba28047ee90c89526f8c3fd3b~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled-1Artboard%203.jpg",
    slug: "ruggen",
  },
  {
    id: 3,
    client: "Metro Group",
    year: "2025",
    title: "Merai — A Harmony of Grace, Art, and Grandeur",
    image: "https://static.wixstatic.com/media/67c604_99253eaefa204df9b88674822958be1d~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/meraiArtboard%208.jpg",
    slug: "merai",
  },
  {
    id: 4,
    client: "Artha Ayurveda",
    year: "2025",
    title: "Reinventing Ayurveda for the Modern North American Skincare Consumer",
    image: "https://static.wixstatic.com/media/67c604_19ce1a49d2ae48eb94109a78d02cb817~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/OpenArtboard%201.jpg",
    slug: "artha-ayurveda",
  },
  {
    id: 5,
    client: "Shirazzudin Mines",
    year: "2025",
    title: "Power Forged with Integrity",
    image: "https://static.wixstatic.com/media/67c604_12e6ee74441e454ebdd6d239c6c6f875~mv2.png/v1/fill/w_980,h_551,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled-1Artboard-6_1.png",
    slug: "kusum-powermet",
  },
  {
    id: 6,
    client: "Harshit Motiwala",
    year: "2025",
    title: "Tradition Meets Cool",
    image: "https://static.wixstatic.com/media/67c604_5692b98663dd4cd9a590918c68ced1f0~mv2.jpg/v1/fill/w_980,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/DesizzArtboard%205_2.jpg",
    slug: "desizz",
  },
];

const ArrowIcon = ({ color = "#0A0A0A" }) => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
    <path d="M1.5 11.5L11.5 1.5M11.5 1.5H4.5M11.5 1.5V8.5" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function LatestWorkSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef([]);
  const rightColRef = useRef(null);

  useEffect(() => {
    const observers = [];
    cardRefs.current.forEach((ref, i) => {
      if (!ref) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveIndex(i); },
        { root: rightColRef.current, threshold: 0.5 }
      );
      obs.observe(ref);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.6s ease forwards; }
        .right-scroll::-webkit-scrollbar { display: none; }
        .right-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        .project-card { transition: transform 0.4s ease, opacity 0.4s ease; }
        .project-card:hover { transform: translateY(-4px); }
      `}</style>

      <section
        className="w-full rounded-2xl overflow-hidden"
        style={{ backgroundColor: "#0A0A0A", fontFamily: "'Arimo', sans-serif" }}
      >
        <div style={{ display: "flex", height: "650px" }}>

          {/* ── LEFT — sticky panel ── */}
          <div
            className="flex-shrink-0 flex flex-col justify-between"
            style={{ width: "740px", padding: "48px 40px", position: "sticky", top: 0 }}
          >
            {/* Top text */}
            <div className="flex flex-col gap-6">
              <p className="text-white/50 text-[12px] font-semibold tracking-[0.14em] uppercase m-0">
                From Startups to MNCs
              </p>
              <h2
                className="text-white font-semibold m-0 leading-[1.0]"
                style={{ fontSize: "100px" }}
              >
                Latest Brand<br />Work
              </h2>
              <button className="!flex !items-center !gap-2 !bg-white !text-[#0A0A0A] !font-medium-600 !text-[15px] !rounded-full !px-5 !py-2.5 !w-fit !border-none !cursor-pointer !hover:bg-white/90 !transition-all !duration-200">
                View All <ArrowIcon />
              </button>
            </div>

            {/* Progress dots */}
            <div className="flex flex-col gap-2">
              {projects.map((_, i) => (
                <div
                  key={i}
                  onClick={() => {
                    cardRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                  className="cursor-pointer transition-all duration-300"
                  style={{
                    height: "3px",
                    borderRadius: "999px",
                    backgroundColor: i === activeIndex ? "#ffffff" : "rgba(255,255,255,0.2)",
                    width: i === activeIndex ? "32px" : "16px",
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </div>
          </div>

          {/* ── RIGHT — scrollable cards ── */}
          <div
            ref={rightColRef}
            className="right-scroll flex-1 overflow-y-auto"
            style={{ padding: "48px 48px 48px 0" }}
          >
            <div className="flex flex-col gap-8">
              {projects.map((project, i) => (
                <div
                  key={project.id}
                  ref={(el) => (cardRefs.current[i] = el)}
                  className="project-card"
                  style={{
                    opacity: 0,
                    animation: `fadeUp 0.6s ease ${i * 0.1}s forwards`,
                  }}
                >
                  {/* Project image */}
                  <div
                    className="w-full rounded-xl overflow-hidden mb-24"
                    style={{ height: "320px", backgroundColor: "#1a1a1a" }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      style={{ transition: "transform .5s ease" }}
                      onMouseEnter={(e) => e.target.style.transform = "scale(1.07)"}
                      onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
                    />
                  </div>

                  {/* Below image row */}
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px", padding: "32px 0px"
                   }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
                        <span className="text-white font-bold text-[11px] tracking-[0.14em] uppercase">
                          {project.client}
                        </span>
                        <span className="text-white/40 text-[12px]">{project.year}</span>
                      </div>
                      <p className="text-white font-semibold text-[28px] leading-snug m-0" style={{ maxWidth: "480px" }}>
                        {project.title}
                      </p>
                    </div>

                    <button className="!flex !items-center !gap-2 !bg-white !text-[#0A0A0A] !font-medium-600 !text-[15px] !rounded-full !px-5 !py-2.5 !w-fit !border-none !cursor-pointer !hover:bg-white/90 !transition-all !duration-200">
                      Case Study <ArrowIcon />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}