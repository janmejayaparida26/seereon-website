import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react'; // Added missing import
import { ScrollFillText } from "./ScrollFillText";

const sections = [
  {
    id: "01",
    title: "Custom Software Development",
    desc: "Design and development of tailored systems that align with your business workflows and operational needs. Scalable backend systems, API-driven architecture, Business process automation.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&auto=format&fit=crop",
    icon: "💻",
  },
  {
    id: "02",
    title: "Mobile App Development",
    desc: "High-performance mobile applications engineered for seamless user experience and scalability. Android & iOS applications, Optimized for large user bases, Secure and performance-driven.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&auto=format&fit=crop",
    icon: "📱",
  },
  {
    id: "03",
    title: "MVP Builder",
    desc: "We take your idea from whiteboard to working product in weeks — investor-ready, user-tested, and built to scale when you need it.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop",
    icon: "🚀",
  },
  {
    id: "04",
    title: "E-Commerce",
    desc: "High-converting, scalable e-commerce platforms — from custom builds to Shopify, we make buying feel effortless for your customers.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&auto=format&fit=crop",
    icon: "🛒",
  },
  {
    id: "05",
    title: "AI Development",
    desc: "We embed AI where it matters — LLM integrations, custom models, intelligent automation — turning data into decisions.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&auto=format&fit=crop",
    icon: "🤖",
  },
  {
    id: "06",
    title: "Website Development",
    desc: "Marketing sites, product landing pages, and corporate portals — engineered for speed, SEO, and the impression you want to make.",
    image: "https://images.unsplash.com/photo-1678690832311-bb6e361989ca?w=600&auto=format&fit=crop&q=60",
    icon: "🌐",
  },
];

const StackedScroll = () => {
  // 1. Added state to prevent Hydration Error
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="bg-[#fff] min-h-screen w-full">
      {sections.map((section, index) => (
        <section
          key={section.id}
          style={{
            top: `${index * 55}px`,
            backgroundColor: "#fff"
          }}
          className="sticky max-h-fit w-full flex flex-col lg:flex-row items-start lg:items-center justify-between px-6 lg:px-15 py-10 lg:py-15 border-t border-gray-300"
        >
          {/* Left Side */}
          <div className="w-full lg:w-2/3">
            
            {/* Title + Icon */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Arimo',sans-serif] font-semibold pb-5 text-[#000] flex items-center gap-4 flex-wrap">
              <span className="text-3xl lg:text-4xl">{section.icon}</span>
              <ScrollFillText>{section.title}</ScrollFillText>
            </h2>

            <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-6">
              <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-['Arimo',sans-serif] font-normal text-[#6e6e6e] leading-snug">
                {section.desc}
              </p>

              <div className="flex flex-col items-start">
                {/* 2. Added 'group' class for the arrow hover animation */}
                <button className="group flex items-center gap-2 text-[14px] lg:text-[16px] font-semibold text-[#000] hover:text-[#FF7A2D] transition-all">
                  Explore More
                  {/* 3. Conditional rendering ensures client/server HTML match */}
                  {isMounted && (
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-1/3 h-[220px] sm:h-[280px] lg:h-[350px] mt-6 lg:mt-0 bg-[#fff] rounded-[30px] lg:rounded-[40px] overflow-hidden shadow-sm relative group">
            <img
              src={section.image}
              alt={section.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </section>
      ))}

      <div className="h-screen bg-[#fff]"></div>
    </div>
  );
};

export default StackedScroll;