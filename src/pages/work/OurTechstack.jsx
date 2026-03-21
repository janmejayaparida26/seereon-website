import React from "react";
import { motion } from "framer-motion";
// import { ScrollFillText } from "./ScrollFillText";

const techStack = {
  frontEnd: [
    { name: "Angular", icon: "https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg" },
    { name: "React", icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
    { name: "Vue", icon: "https://cdn.worldvectorlogo.com/logos/vue-9.svg" },
    { name: "Next.js", icon: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
    { name: "Flutter", icon: "https://cdn.worldvectorlogo.com/logos/flutter.svg" },
    { name: "Single-Spa", icon: "https://single-spa.js.org/img/single-spa-mark-magenta.svg" },
    { name: "Alpine.js", icon: "https://cdn.worldvectorlogo.com/logos/alpinejs.svg" },
  ],
  backEnd: [
    { name: "Node.js", icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
    { name: "NestJS", icon: "https://cdn.worldvectorlogo.com/logos/nestjs.svg" },
    { name: "Python", icon: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
    { name: "FastAPI", icon: "https://cdn.worldvectorlogo.com/logos/fastapi-1.svg" },
    { name: "PostgreSQL", icon: "https://cdn.worldvectorlogo.com/logos/postgresql.svg" },
    { name: "MongoDB", icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
    { name: "Redis", icon: "https://cdn.worldvectorlogo.com/logos/redis.svg" },
    { name: "Cloudflare", icon: "https://cdn.worldvectorlogo.com/logos/cloudflare-1.svg" },
  ],
  aiframeworks: [
    { name: "LlammaIndex", icon: "https://cdn.brandfetch.io/id6a4s3gXI/w/400/h/400/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1767054339072" },
    { name: "AutoGen", icon: "https://cdn.brandfetch.io/idA5hQexcy/w/200/h/200/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1773154889221" },
    { name: "Hugging Face Transformers", icon: "https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.svg" },
    { name: "DeepSpeed", icon: "https://deepchecks.com/wp-content/uploads/2024/11/logo-deepspeed.svg" },
    { name: "AutoGPT", icon: "https://upload.wikimedia.org/wikipedia/commons/8/80/Auto_GPT_Logo.png?_=20230501020539" },
    { name: "Semantic Kernel", icon: "https://devblogs.microsoft.com/semantic-kernel/wp-content/uploads/sites/78/2024/03/Large_SK_Logo-300x300.png" },
  ],
};

const TechCard = ({ item }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="group flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-100 bg-[#f8f9fa] hover:bg-white hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 cursor-default"
  >
    <img 
      src={item.icon} 
      alt={item.name} 
      className="w-7 h-7 object-contain transition-transform duration-300 group-hover:scale-110" 
    />
    <span className="font-medium text-sm md:text-base text-gray-700 group-hover:text-black transition-colors duration-300">
      {item.name}
    </span>
  </motion.div>
);

export default function TechToolkit() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[48px] md:text-[85px] font-['Arimo',sans-serif] font-medium text-[#111111] leading-[1.1] tracking-tight md:w-1/2"
          >
            Our tech toolkit <br className="hidden md:block" /> at a glance
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-500 leading-relaxed md:w-[45%] md:mt-4"
          >
            We dive deep into your project’s needs to ensure we select the best tools and frameworks for your product. Most of the projects we work on fall into the following tech stack.
          </motion.p>
        </div>

        {/* Triple Section Layout */}
        <div className="flex flex-col gap-8">
          
          {/* 1. Front-End */}
          <div className="bg-[#f1f5f9]/50 rounded-[32px] p-8 md:p-12 border border-gray-50">
            <h3 className="text-sm uppercase tracking-[0.2em] text-gray-800 font-bold mb-10">FRONT-END</h3>
            <div className="flex flex-wrap gap-4">
              {techStack.frontEnd.map((tech, i) => (
                <TechCard key={`fe-${i}`} item={tech} />
              ))}
            </div>
          </div>

          {/* 2. Back-End */}
          <div className="bg-[#f1f5f9]/50 rounded-[32px] p-8 md:p-12 border border-gray-50">
            <h3 className="text-sm uppercase tracking-[0.2em] text-gray-800 font-bold mb-10">BACK-END & DATABASES</h3>
            <div className="flex flex-wrap gap-4">
              {techStack.backEnd.map((tech, i) => (
                <TechCard key={`be-${i}`} item={tech} />
              ))}
            </div>
          </div>

          {/* 3. Infrastructure & DevOps - Adjusted to match style of above sections */}
          <div className="bg-[#f1f5f9]/50 rounded-[32px] p-8 md:p-12 border border-gray-50">
            <h3 className="text-sm uppercase tracking-[0.2em] text-gray-800 font-bold mb-10">AI Data Frameworks</h3>
            <div className="flex flex-wrap gap-4">
              {techStack.aiframeworks.map((tech, i) => (
                <TechCard key={`infra-${i}`} item={tech} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}