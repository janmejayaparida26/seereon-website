import React from 'react';
 
const sections = [
  {
    id: "01",
    title: "Discovery & Consultation",
    desc: "We start by understanding your business, goals, challenges, and target audience. This helps us craft solutions that are truly aligned with your needs.",
    // tags: ["Branding", "Design", "Art Direction"],
    color: "bg-green-500",
    icon: "😊",
  },
  {
    id: "02",
    title: "Strategic Planning",
    desc: "Our team develops a step-by-step plan that outlines design concepts, technical requirements, timelines, and deliverables — ensuring clarity from day one.",
    // tags: ["Packaging", "Websites", "Mobile Apps"],
    color: "bg-purple-400",
    icon: "📦",
  },
  {
    id: "03",
    title: "Creative Design & Prototyping",
    desc: "We create visually engaging and user-friendly designs, followed by interactive prototypes so you can see exactly how your project will look and function before development begins.",
    // tags: ["Campaigns", "Strategy", "Digital"],
    color: "bg-orange-400",
    icon: "🏪",
  },
  {
    id: "04",
    title: "Development & Testing",
    desc: "Our developers bring the design to life with clean code, responsive layouts, and performance-focused builds. Rigorous testing ensures everything works seamlessly across devices and browsers.",
    // tags: ["Campaigns", "Strategy", "Digital"],
    color: "bg-orange-400",
    icon: "🏪",
  },
  {
    id: "05",
    title: "Launch & Improvement",
    desc: "We handle a smooth project launch and continue to monitor, optimize, and upgrade your solution to keep it competitive in the ever-changing digital landscape.",
    // tags: ["Campaigns", "Strategy", "Digital"],
    color: "bg-orange-400",
    icon: "🏪",
  },
];
 
const StackedScroll = () => {
  return (
    <div className="bg-[#eeeeee] min-h-screen">
      {sections.map((section, index) => (
        <section
          key={section.id}
          // Incremental top offset: 0, then 48px (top-12), then 96px (top-24)
          style={{ top: `${index * 55}px` }}
          className="sticky max-h-fit w-full flex items-center justify-between !px-20 !py-20 bg-[#eeeeee] border-t border-gray-300"
        >
          {/* Left: Heading */}
          <div className="w-2/3">
            <h2 className="text-4xl font-['Arimo',sans-serif] font-semibold !pb-5 text-[#000] flex items-center">
              {section.title}
              <span className="!ml-10 !mt-3 flex items-center justify-center w-14 h-14 border border-gray-400 rounded-full text-3xl">
                →
              </span>
            </h2>
                      {/* Center: Description & Tags */}
          <div className="w-1/2 flex flex-col gap-6">
            <p className="text-[24px] font-['Arimo',sans-serif] font-medium text-[#6e6e6e] leading-snug">
              {section.desc}
            </p>
            <div className="flex flex-col items-start gap-2">
              <button className="text-sm underline mt-2">View More</button>
            </div>
          </div>
          </div>
 
          {/* Right: The Colored Card */}
          <div className={`w-1/3 h-[300px] ${section.color} rounded-[40px] !py-20 flex items-center justify-center shadow-inner`}>
            <div className="text-9xl opacity-80">{section.icon}</div>
          </div>
        </section>
      ))}
 
      {/* Spacer to ensure the last card can be scrolled fully */}
      <div className="h-screen"></div>
    </div>
  );
};
 
export default StackedScroll;