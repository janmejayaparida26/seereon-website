import React from "react";
import { motion } from "framer-motion";

const techStack = {
  frontEnd: [
    { name: "Angular", icon: "https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg" },
    { name: "React", icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
    { name: "Vue", icon: "https://cdn.worldvectorlogo.com/logos/vue-9.svg" },
    { name: "Next.js", icon: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
    { name: "Flutter", icon: "https://cdn.worldvectorlogo.com/logos/flutter.svg" },
    { name: "Flutter", icon: "https://cdn.worldvectorlogo.com/logos/flutter.svg" },
    { name: "Flutter", icon: "https://cdn.worldvectorlogo.com/logos/flutter.svg" },
    { name: "Flutter", icon: "https://cdn.worldvectorlogo.com/logos/flutter.svg" },
    { name: "Flutter", icon: "https://cdn.worldvectorlogo.com/logos/flutter.svg" },
  ],
};

const TechCard = ({ item }) => (
  <motion.div
    whileHover={{ y: -5, backgroundColor: "#fff", boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
    className="flex items-center gap-3 px-4 py-3 bg-[#f8f9fa] border border-gray-100 rounded-xl transition-colors cursor-default"
  >
    <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain grayscale hover:grayscale-0 transition-all" />
    <span className="text-gray-700 font-medium text-sm md:text-base">{item.name}</span>
  </motion.div>
);

export default function TechToolkit() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-[40px] md:text-[56px] font-bold text-[#0f172a] leading-tight tracking-tight mb-6"
          >
            Our tech toolkit <br className="hidden md:block" /> at a glance
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl text-lg text-gray-500 leading-relaxed"
          >
            We dive deep into your project’s needs to ensure we select the best tools and frameworks for your product.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Front End - Main Feature */}
          <div className="lg:col-span-12 bg-[#f1f5f9]/50 rounded-[32px] p-8 md:p-10">
            <h3 className="text-xs uppercase tracking-[0.2em] text-gray-800 font-bold mb-8">Front-End</h3>
            <div className="flex flex-wrap gap-4">
              {techStack.frontEnd.map((tech) => <TechCard key={tech.name} item={tech} />)}
            </div>
          </div>

          {/* Infrastructure */}
          {/* <div className="lg:col-span-5 bg-[#0f172a] rounded-[32px] p-8 md:p-10 text-white">
            <h3 className="text-xs uppercase tracking-[0.2em] text-white/40 font-bold mb-8">Cloud & Data</h3>
            <div className="flex flex-wrap gap-4">
              {techStack.infrastructure.map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/5"
                >
                  <img src={tech.icon} alt={tech.name} className="w-5 h-5 invert brightness-0" />
                  <span className="font-medium text-sm">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div> */}

          {/* Back End & Databases */}
          {/* <div className="lg:col-span-12 bg-white border border-gray-100 rounded-[32px] p-8 md:p-10 shadow-sm">
            <h3 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold mb-8">Back-End & Databases</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {techStack.backEnd.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center justify-center p-6 border border-gray-50 rounded-2xl hover:bg-gray-50 transition-colors">
                  <img src={tech.icon} alt={tech.name} className="w-10 h-10 mb-4" />
                  <span className="text-sm font-semibold text-gray-900">{tech.name}</span>
                </div>
              ))}
            </div>
          </div> */}

        </div>
      </div>
    </section>
  );
}