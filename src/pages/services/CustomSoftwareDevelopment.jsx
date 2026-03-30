import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, Zap, BarChart3, Layers, Wallet, Crown } from "lucide-react"; // Using Lucide for the icons
import LatestWorkSection from "../../components/PortfolioSection";
const CustomSoftwareDevelopment = () => {
  const bannerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0.4, 0.7], [1, 0.4]);

  const benefits = [
    {
      title: "Full Ownership",
      description: "You will own 100% of the software we build with you, and you'll never pay a subscription or royalty fees.",
      icon: <ShieldCheck className="w-6 h-6 text-[#d946ef]" />,
      bgColor: "bg-[#fdf2f8]",
    },
    {
      title: "Flexibility",
      description: "Custom software development allows for more flexibility as you can stay agile and responsive to your users' needs and business landscape.",
      icon: <Zap className="w-6 h-6 text-[#d946ef]" />,
      bgColor: "bg-[#fdf2f8]",
    },
    {
      title: "Competitive Advantage",
      description: "Unlike off-the-shelf solutions, custom software development allows you to build unique capabilities that differentiate you from your competitors.",
      icon: <BarChart3 className="w-6 h-6 text-[#d946ef]" />,
      bgColor: "bg-[#fdf2f8]",
    },
    {
      title: "Scalability",
      description: "As your business grows, you can revise and add features as you please, allowing your product to scale with ease.",
      icon: <Layers className="w-6 h-6 text-[#d946ef]" />,
      bgColor: "bg-[#fdf2f8]",
    },
    {
      title: "Reduce Long-Term Costs",
      description: "While custom software development can sometimes require a higher initial investment, it is more cost-effective in the long run as you’re not paying subscriptions or royalty fees.",
      icon: <Wallet className="w-6 h-6 text-[#d946ef]" />,
      bgColor: "bg-[#fdf2f8]",
    },
    {
      title: "User Experience",
      description: "When you build a product using custom software development it is built with your specific user in mind throughout the entire process.",
      icon: <Crown className="w-6 h-6 text-[#d946ef]" />,
      bgColor: "bg-[#fdf2f8]",
    },
  ];

  return (
    <div className="w-full bg-[#ffffff]">
      {/* Banner Section */}
      <section className="relative w-full overflow-hidden bg-black">
        <div
          ref={bannerRef}
          className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden flex items-center justify-center"
        >
          <motion.img
            style={{ y: imageY, scale: 1.15 }}
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&auto=format&fit=crop&q=80"
            alt="Custom Software Development"
            className="absolute inset-0 w-full h-[140%] object-cover pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80"></div>

          <motion.div 
            className="relative z-10 flex flex-col items-center px-4"
            style={{ opacity }}
          >
            <h1 className="text-white text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-['Arimo',sans-serif] font-bold text-center tracking-tighter select-none max-w-4xl leading-tight">
              Custom Software
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 px-6 sm:py-34 lg:px-0 max-w-7xl mx-auto">
        <h2 className="text-black text-3xl sm:text-4xl lg:text-6xl font-['Arimo',sans-serif] font-semibold mb-24 text-left">
          Key Benefits
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 lg:p-10 flex flex-col items-start shadow-xl"
            >
              <div className={`${benefit.bgColor} p-3 rounded-lg mb-6`}>
                {benefit.icon}
              </div>
              <h3 className="text-[#0f172a] text-xl lg:text-2xl font-['Arimo',sans-serif] font-bold mb-4">
                {benefit.title}
              </h3>
              <p className="text-slate-600 leading-relaxed font-['Arimo',sans-serif] text-sm lg:text-base">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <LatestWorkSection />
    </div>
  );
};

export default CustomSoftwareDevelopment;