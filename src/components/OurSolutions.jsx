import React from 'react';

const sections = [
  {
    id: "01",
    title: "Custom Software Development",
    desc: "Design and development of tailored systems that align with your business workflows and operational needs. Scalable backend systems, API-driven architecture, Business process automation.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&auto=format&fit=crop", 
  },
  {
    id: "02",
    title: "Mobile App Development",
    desc: "High-performance mobile applications engineered for seamless user experience and scalability. Android & iOS applications, Optimized for large user bases, Secure and performance-driven.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "MVP Builder",
    desc: "We take your idea from whiteboard to working product in weeks — investor-ready, user-tested, and built to scale when you need it.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop",
  },
  {
    id: "04",
    title: "E-Commerce",
    desc: "High-converting, scalable e-commerce platforms — from custom builds to Shopify, we make buying feel effortless for your customers.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&auto=format&fit=crop",
  },
  {
    id: "05",
    title: "AI Development",
    desc: "We embed AI where it matters — LLM integrations, custom models, intelligent automation — turning data into decisions.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&auto=format&fit=crop",
  },
  {
    id: "06",
    title: "Website Development",
    desc: "Marketing sites, product landing pages, and corporate portals — engineered for speed, SEO, and the impression you want to make.",
    image: "https://images.unsplash.com/photo-1678690832311-bb6e361989ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2Vic2l0ZSUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww",
  },
  
];

const StackedScroll = () => {
  return (
    <div className="bg-[#eeeeee] min-h-screen">
      {sections.map((section, index) => (
        <section
          key={section.id}
          style={{ 
            top: `${index * 55}px`,
            backgroundColor: "#eeeeee" 
          }}
          className="sticky max-h-fit w-full flex items-center justify-between !px-15 !py-15 border-t border-gray-300"
        >
          {/* Left Side */}
          <div className="w-2/3">
            <h2 className="text-5xl font-['Arimo',sans-serif] font-semibold !pb-5 text-[#000] flex items-center">
              {section.title}
              <span className="!ml-10 !mt-2 flex items-center justify-center w-14 h-14 border border-gray-400 rounded-full text-3xl">
                →
              </span>
            </h2>
            
            <div className="w-1/2 flex flex-col gap-6">
              <p className="text-[20px] font-['Arimo',sans-serif] font-normal text-[#6e6e6e] leading-snug">
                {section.desc}
              </p>
              <div className="flex flex-col items-start">
                <button className="text-[16px] font-semibold text-[#FF7A2D] underline underline-offset-4 hover:text-[#e66a25] transition-colors">
                  Explore More
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: The Image Container */}
          <div className="w-1/3 h-[350px] bg-[#dbe2e8] rounded-[40px] overflow-hidden shadow-sm relative group">
            <img 
              src={section.image} 
              alt={section.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </section>
      ))}

      <div className="h-screen"></div>
    </div>
  );
};

export default StackedScroll;