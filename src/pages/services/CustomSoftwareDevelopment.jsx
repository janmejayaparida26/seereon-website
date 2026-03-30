import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  BarChart3,
  Layers,
  Wallet,
  Crown,
  ArrowRight,
} from "lucide-react";
import LatestWorkSection from "../../components/PortfolioSection";

// ─── How It Works Data ────────────────────────────────────────────────────────
const steps = [
  {
    number: "01",
    title: "Product Scope",
    description:
      "The Product Scope is an intensive, 15-day, structured process. It all starts with an immersive focus session where you'll sit down with product experts and ex-startup founders to dive into the product vision from a business standpoint.",
    deliverables: [
      "User Stories",
      "Key BPMN",
      "Sitemap",
      "Tech Spike",
      "UX Personas",
      "Stakeholder Analysis",
    ],
  },
  {
    number: "02",
    title: "Design & Prototyping",
    description:
      "Our design team translates your product scope into high-fidelity wireframes and interactive prototypes, ensuring the user experience is validated before a single line of production code is written.",
    deliverables: [
      "Wireframes",
      "UI Style Guide",
      "Interactive Prototype",
      "Usability Testing",
      "Design System",
      "Accessibility Audit",
    ],
  },
  {
    number: "03",
    title: "Development Sprints",
    description:
      "Using agile methodology, our engineers build your product in structured two-week sprints with regular demos, so you stay informed and in control throughout every stage of development.",
    deliverables: [
      "Sprint Planning",
      "Code Reviews",
      "CI/CD Pipeline",
      "Unit Testing",
      "API Integration",
      "Progress Reports",
    ],
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We handle deployment, monitoring, and post-launch optimisation to make sure your product performs flawlessly in the real world — and we stay by your side as it grows.",
    deliverables: [
      "Cloud Deployment",
      "Performance Monitoring",
      "Bug Fixes",
      "Feature Iterations",
      "Documentation",
      "Ongoing Support",
    ],
  },
];

// ─── How It Works Section ─────────────────────────────────────────────────────
const HowItWorksSection = () => {
  return (
    <section className="py-16 sm:py-24 px-6 lg:px-0 max-w-7xl mx-auto">
      {/* Heading */}
      <h2 className="text-black text-3xl sm:text-4xl lg:text-7xl font-['Arimo',sans-serif] font-semibold mb-16 text-left">
        How it works
      </h2>

      {/* Steps */}
      <div className="flex flex-col gap-6">
        {steps.map((step, index) => (
          <StepCard key={index} step={step} index={index} />
        ))}
      </div>
    </section>
  );
};

// ─── Individual Step Card ─────────────────────────────────────────────────────
const StepCard = ({ step, index }) => {
  return (
    <div className="relative flex flex-col sm:flex-row gap-0 rounded-2xl overflow-hidden border border-slate-100 shadow-sm bg-white">
      {/* Left accent line + arrow */}
      <div className="flex flex-row sm:flex-col items-center sm:items-start gap-3 sm:gap-0 px-6 pt-8 sm:pt-10 pb-4 sm:pb-10 sm:w-20 lg:w-24 shrink-0">
        {/* Pink circle with arrow */}
        <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#017712] flex items-center justify-center">
          <ArrowRight className="w-4 h-4 text-white" />
        </div>
        {/* Vertical connector line — only visible on sm+ screens, not for last item */}
        {index < steps.length - 1 && (
          <div className="hidden sm:block w-px flex-1 bg-slate-200 mt-3 ml-[17px]" />
        )}
      </div>

      {/* Card Body */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 px-6 sm:pl-0 sm:pr-10 pb-10 pt-0 sm:pt-10 flex-1">
        {/* Left: title + description */}
        <div className="flex-1 min-w-0">
          {/* Step number badge */}
          <span className="inline-block text-xs font-semibold tracking-widest text-[#017712] uppercase mb-3 font-['Arimo',sans-serif]">
            Step {step.number}
          </span>
          <h3 className="text-[#0f172a] text-xl lg:text-2xl font-['Arimo',sans-serif] font-bold mb-4">
            {step.title}
          </h3>
          <p className="text-slate-600 leading-relaxed font-['Arimo',sans-serif] text-sm lg:text-base">
            {step.description}
          </p>
        </div>

        {/* Right: deliverables */}
        <div className="lg:w-80 shrink-0">
          <p className="text-[#0f172a] font-['Arimo',sans-serif] font-semibold text-sm mb-4">
            Phase deliverables:
          </p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-3">
            {step.deliverables.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                <span className="text-slate-600 font-['Arimo',sans-serif] text-sm">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Main Page Component ──────────────────────────────────────────────────────
const CustomSoftwareDevelopment = () => {
  const bannerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0.4, 0.7], [1, 0.4]);

  const benefits = [
    {
      title: "Full Ownership",
      description:
        "You will own 100% of the software we build with you, and you'll never pay a subscription or royalty fees.",
      icon: <ShieldCheck className="w-6 h-6 text-[#d946ef]" />,
      bgColor: "bg-[#fdf2f8]",
    },
    {
      title: "Flexibility",
      description:
        "Custom software development allows for more flexibility as you can stay agile and responsive to your users' needs and business landscape.",
      icon: <Zap className="w-6 h-6 text-[#d946ef]" />,
      bgColor: "bg-[#fdf2f8]",
    },
    {
      title: "Competitive Advantage",
      description:
        "Unlike off-the-shelf solutions, custom software development allows you to build unique capabilities that differentiate you from your competitors.",
      icon: <BarChart3 className="w-6 h-6 text-[#d946ef]" />,
      bgColor: "bg-[#fdf2f8]",
    },
    {
      title: "Scalability",
      description:
        "As your business grows, you can revise and add features as you please, allowing your product to scale with ease.",
      icon: <Layers className="w-6 h-6 text-[#d946ef]" />,
      bgColor: "bg-[#fdf2f8]",
    },
    {
      title: "Reduce Long-Term Costs",
      description:
        "While custom software development can sometimes require a higher initial investment, it is more cost-effective in the long run as you're not paying subscriptions or royalty fees.",
      icon: <Wallet className="w-6 h-6 text-[#d946ef]" />,
      bgColor: "bg-[#fdf2f8]",
    },
    {
      title: "User Experience",
      description:
        "When you build a product using custom software development it is built with your specific user in mind throughout the entire process.",
      icon: <Crown className="w-6 h-6 text-[#d946ef]" />,
      bgColor: "bg-[#fdf2f8]",
    },
  ];

  return (
    <div className="w-full bg-[#ffffff]">
      {/* ── Banner ── */}
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />

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

      {/* ── Key Benefits ── */}
      <section className="py-16 px-6 sm:py-24 lg:px-0 max-w-7xl mx-auto">
        <h2 className="text-black text-3xl sm:text-4xl lg:text-7xl font-['Arimo',sans-serif] font-semibold mb-16 text-left">
          Key Benefits
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* ── Latest Work ── */}
      <LatestWorkSection />

      {/* ── How It Works ── */}
      <HowItWorksSection />
    </div>
  );
};

export default CustomSoftwareDevelopment;