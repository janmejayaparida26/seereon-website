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
    <path d="M1.5 11.5L11.5 1.5M11.5 1.5H4.5M11.5 1.5V8.5" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function LatestWorkSection() {
  const targetRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!targetRef.current) return;
      
      const rect = targetRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the container has passed the top of the viewport
      // 0 = just started scrolling into view, 1 = reached the bottom of the section
      const progress = -rect.top / (rect.height - windowHeight);
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine active dot based on scroll progress
  const activeIndex = Math.min(
    Math.floor(scrollProgress * projects.length),
    projects.length - 1
  );

  return (
    <div ref={targetRef} className="relative w-full" style={{ height: "400vh" }}>
      <div className="sticky top-10 h-screen w-full flex flex-col justify-center overflow-hidden" style={{ backgroundColor: "#0A0A0A", fontFamily: "'Arimo', sans-serif" }}>
        
        <div className="flex h-full w-full">
          {/* ── LEFT — fixed panel ── */}
          <div
            className="flex-shrink-0 flex flex-col justify-between z-10"
            style={{ width: "600px", padding: "80px 60px", backgroundColor: "#0A0A0A" }}
          >
            <div className="flex flex-col gap-6">
              <p className="text-white/50 text-[12px] font-semibold tracking-[0.14em] uppercase m-0">
                From Startups to MNCs
              </p>
              <h2 className="text-white font-semibold m-0 leading-[1.0]" style={{ fontSize: "80px" }}>
                Latest Brand<br />Work
              </h2>
              {/* NEW DESCRIPTION */}
                <p className="text-white/60 text-[16px] leading-relaxed mt-4 max-w-[400px]">
                  A curated selection of our most recent brand identities and digital experiences, 
                  crafted with a blend of strategic thinking and visual excellence.
                </p>
              <button className="flex items-center gap-2 bg-white text-[#0A0A0A] font-semibold text-[15px] rounded-full px-6 py-3 w-fit border-none cursor-pointer hover:bg-white/90 transition-all">
                View All <ArrowIcon />
              </button>
            </div>

            {/* Progress dots */}
            {/* <div className="flex flex-col gap-3">
              {projects.map((_, i) => (
                <div
                  key={i}
                  className="transition-all duration-300"
                  style={{
                    height: "3px",
                    borderRadius: "999px",
                    backgroundColor: i === activeIndex ? "#ffffff" : "rgba(255,255,255,0.2)",
                    width: i === activeIndex ? "40px" : "20px",
                  }}
                />
              ))}
            </div> */}
          </div>

          {/* ── RIGHT — horizontal sliding track ── */}
          <div className="flex-1 relative flex items-center">
            <div 
              style={{ 
                display: "flex", 
                gap: "40px",
                paddingRight: "100px",
                transform: `translateX(-${scrollProgress * 75}%)`, // Adjust 75% based on total width
                transition: "transform 0.1s ease-out" 
              }}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="flex-shrink-0"
                  style={{ width: "550px" }}
                >
                  <div className="w-full rounded-2xl overflow-hidden mb-8" style={{ height: "380px", backgroundColor: "#1a1a1a" }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-white font-bold text-[11px] tracking-[0.14em] uppercase">
                          {project.client}
                        </span>
                        <span className="text-white/40 text-[12px]">{project.year}</span>
                      </div>
                      <p className="text-white font-semibold text-[24px] leading-tight m-0">
                        {project.title}
                      </p>
                    </div>
                    {/* <button className="flex items-center gap-2 bg-white/10 text-white border border-white/20 font-medium text-[13px] rounded-full px-4 py-2 hover:bg-white hover:text-black transition-all">
                      Case Study <ArrowIcon color="currentColor" />
                    </button> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}