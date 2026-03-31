import React, { useRef, useEffect, useState } from "react";
import { ScrollFillText } from "../../components/ScrollFillText";
import { motion, useScroll, useTransform, useInView, animate } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  BarChart3,
  Layers,
  Wallet,
  Crown,
  ArrowRight,
  Globe,
  Palette,
  Code2,
  Gauge,
} from "lucide-react";
import LatestWorkSection from "../../components/PortfolioSection";
import OurTechstack from "../../pages/work/OurTechstack";
import ScheduleCall from "../../components/ScheduleCall";
import ContactCTA from "../../components/ContactCTA";
import Footer from "../../components/Footer";

// ─── How It Works Data ────────────────────────────────────────────────────────
const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We begin with an in-depth discovery session to understand your business goals, target audience, and competitive landscape. Together we define the sitemap, content strategy, and technical requirements that will guide every design and development decision.",
    deliverables: ["Sitemap", "User Personas", "Content Strategy", "Tech Audit", "Competitor Analysis", "Project Roadmap"],
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "Our designers translate your brand and strategy into pixel-perfect wireframes and high-fidelity mockups. Every interaction is validated through prototyping before a single line of code is written, ensuring a frictionless user experience.",
    deliverables: ["Wireframes", "Style Guide", "Hi-Fi Mockups", "Interactive Prototype", "Responsive Layouts", "Accessibility Review"],
  },
  {
    number: "03",
    title: "Development & Integration",
    description:
      "Our engineers build your website using modern frameworks with a focus on performance, SEO, and scalability. We integrate CMSs, APIs, analytics, and third-party tools so your site is powerful from day one.",
    deliverables: ["Frontend Build", "CMS Integration", "API Connections", "SEO Setup", "Analytics Tracking", "Cross-Browser QA"],
  },
  {
    number: "04",
    title: "Launch & Growth",
    description:
      "We handle deployment, performance auditing, and post-launch monitoring to make sure your website is fast, secure, and converting. We stay by your side for ongoing improvements as your business grows.",
    deliverables: ["Cloud Deployment", "Speed Optimisation", "Security Hardening", "Conversion Tracking", "Ongoing Support", "Monthly Reports"],
  },
];

// ─── FAQ Data ─────────────────────────────────────────────────────────────────
const faqs = [
  { question: "Q1. How long does it take to build a website?", answer: "Timelines vary by scope, but most marketing websites take 4–8 weeks from discovery to launch. Larger platforms or e-commerce builds typically run 10–16 weeks." },
  { question: "Q2. Will my website be mobile-friendly?", answer: "Absolutely. Every website we build is fully responsive and tested across all major devices and browsers to ensure a flawless experience for every visitor." },
  { question: "Q3. Can I update the website content myself?", answer: "Yes. We integrate user-friendly CMS platforms so your team can update pages, blog posts, images, and more without touching a line of code." },
  { question: "Q4. Do you handle SEO as part of the build?", answer: "We set up on-page SEO foundations — meta tags, structured data, sitemap, canonical URLs, and page speed optimisation — during every build." },
  { question: "Q5. What technologies do you use for websites?", answer: "We work with React, Next.js, Tailwind CSS, and headless CMS platforms like Sanity and Contentful, choosing the best stack for your specific requirements." },
  { question: "Q6. Do you offer ongoing maintenance and support?", answer: "Yes. We offer flexible maintenance packages covering security updates, content changes, performance monitoring, and feature iterations after launch." },
];

// ─── Why Choose Us Data — split into two rows ─────────────────────────────────
const rowOne = [
  {
    icon: <Globe className="w-5 h-5 text-white" />,
    gradient: "from-violet-500 to-indigo-600",
    glowColor: "rgba(99,102,241,0.25)",
    tag: "Performance First",
    title: "Websites Built for Speed, SEO & Conversions",
    description: (<>We don't just make websites look good — we engineer them to <strong className="text-[#0f172a]">rank higher, load faster, and convert better</strong>. Every build is optimised for Core Web Vitals, structured data, and conversion-focused layouts that turn visitors into customers.</>),
  },
  {
    icon: <Palette className="w-5 h-5 text-white" />,
    gradient: "from-emerald-500 to-teal-600",
    glowColor: "rgba(16,185,129,0.25)",
    tag: "Design Excellence",
    title: "Pixel-Perfect Design That Reflects Your Brand",
    description: (<>Your website is your digital storefront. Our designers craft <strong className="text-[#0f172a]">bespoke, brand-aligned experiences</strong> that captivate visitors from the first scroll — never generic templates, always purpose-built for your audience.</>),
  },
];

const rowTwo = [
  {
    icon: <Code2 className="w-5 h-5 text-white" />,
    gradient: "from-amber-500 to-orange-500",
    glowColor: "rgba(245,158,11,0.25)",
    tag: "Clean Code",
    title: "Scalable, Maintainable Code You'll Own Forever",
    description: (<>We write clean, well-documented code following modern best practices. You receive <strong className="text-[#0f172a]">full ownership of every file</strong> — no vendor lock-in, no recurring licensing fees, and a codebase your team can confidently extend.</>),
  },
  {
    icon: <Gauge className="w-5 h-5 text-white" />,
    gradient: "from-rose-500 to-pink-600",
    glowColor: "rgba(244,63,94,0.25)",
    tag: "Growth Ready",
    title: "Built to Scale as Your Business Grows",
    description: (<>Whether you're launching a landing page or a full-scale web platform, we architect your website to <strong className="text-[#0f172a]">grow without costly rebuilds</strong>. Modular components, headless CMS, and API-first thinking ensure your site evolves with you.</>),
  },
];

// ─── Animated Reason Card ─────────────────────────────────────────────────────
const ReasonCard = ({ reason, index, fromLeft }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: fromLeft ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.13, ease: "easeOut" }}
      whileHover={{ y: -5 }}
      className="group bg-white rounded-2xl border border-slate-100 shadow-sm p-6 lg:p-8 flex flex-col gap-4 cursor-default transition-shadow duration-300"
    >
      <div className="flex items-center gap-3">
        <div className={`bg-gradient-to-br ${reason.gradient} w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300`}>
          {reason.icon}
        </div>
        <span className="text-xs font-semibold tracking-widest uppercase font-['Arimo',sans-serif] text-slate-400">
          {reason.tag}
        </span>
      </div>
      <h3 className="text-[#0f172a] text-base lg:text-lg font-['Arimo',sans-serif] font-bold leading-snug">
        {reason.title}
      </h3>
      <div className="h-px w-full bg-slate-100 group-hover:bg-gradient-to-r group-hover:from-slate-200 group-hover:to-transparent transition-all duration-500" />
      <p className="text-slate-500 leading-relaxed font-['Arimo',sans-serif] text-sm lg:text-base">
        {reason.description}
      </p>
    </motion.div>
  );
};

// ─── Animated Image Panel ─────────────────────────────────────────────────────
const ImagePanel = ({ src, alt, badge, fromLeft, overlayText }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.0]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: fromLeft ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
      className="relative rounded-3xl overflow-hidden shadow-2xl"
      style={{ boxShadow: "0 28px 72px rgba(15,23,42,0.14)" }}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{ scale: imgScale, y: imgY }}
        className="w-full h-[420px] lg:h-[600px] object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/65 via-[#0f172a]/10 to-transparent pointer-events-none" />

      {badge && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.45, delay: 0.5 }}
          className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
          <span className="text-[#0f172a] text-xs font-bold font-['Arimo',sans-serif] tracking-wide">
            {badge}
          </span>
        </motion.div>
      )}

      {overlayText && (
        <div className="absolute bottom-5 left-6 right-6">
          <p className="text-white/90 text-sm font-['Arimo',sans-serif] leading-relaxed drop-shadow">
            {overlayText}
          </p>
        </div>
      )}
    </motion.div>
  );
};

// ─── Why Choose Us Section ────────────────────────────────────────────────────
const WhyChooseUsSection = () => {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, margin: "-80px" });

  return (
    <section className="py-14 sm:pt-40 px-6 lg:px-0 max-w-7xl mx-auto overflow-hidden">

      <motion.div
        ref={headingRef}
        initial={{ opacity: 0, y: 28 }}
        animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="mb-16 sm:mb-24"
      >
        <h2 className="text-[#0f172a] text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-['Arimo',sans-serif] font-semibold text-center leading-tight">
          <ScrollFillText>Why Choose Seereon?</ScrollFillText>
        </h2>
      </motion.div>

      {/* ── Row 1: Cards LEFT  |  Image RIGHT ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center mb-16 lg:mb-24">
        <div className="flex flex-col gap-5">
          {rowOne.map((reason, i) => (
            <ReasonCard key={i} reason={reason} index={i} fromLeft={true} />
          ))}
        </div>

        {/* Desktop image — website design / UI screenshot */}
        <div className="hidden lg:block">
          <ImagePanel
            src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&auto=format&fit=crop&q=80"
            alt="Web design and UI mockup on screen"
            badge="Performance & Design"
            fromLeft={false}
            overlayText="Beautiful, fast websites that rank higher and convert better."
          />
        </div>

        {/* Mobile image row 1 */}
        <div className="block lg:hidden relative rounded-3xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&auto=format&fit=crop&q=80"
            alt="Web design UI mockup"
            className="w-full h-64 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/55 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center gap-2 shadow-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
            <span className="text-[#0f172a] text-xs font-bold font-['Arimo',sans-serif]">Performance & Design</span>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white/90 text-xs font-['Arimo',sans-serif] drop-shadow">Beautiful, fast websites that rank higher and convert better.</p>
          </div>
        </div>
      </div>

      {/* ── Row 2: Image LEFT  |  Cards RIGHT ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">

        {/* Desktop image — coding / development workspace */}
        <div className="hidden lg:block">
          <ImagePanel
            src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&auto=format&fit=crop&q=80"
            alt="Developer writing clean scalable website code"
            badge="Clean Code & Scale"
            fromLeft={true}
            overlayText="Modular, maintainable code — built to grow with your business."
          />
        </div>

        <div className="flex flex-col gap-5">
          {rowTwo.map((reason, i) => (
            <ReasonCard key={i} reason={reason} index={i} fromLeft={false} />
          ))}
        </div>

        {/* Mobile image row 2 */}
        <div className="block lg:hidden relative rounded-3xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&auto=format&fit=crop&q=80"
            alt="Developer writing clean website code"
            className="w-full h-64 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/55 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center gap-2 shadow-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
            <span className="text-[#0f172a] text-xs font-bold font-['Arimo',sans-serif]">Clean Code & Scale</span>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white/90 text-xs font-['Arimo',sans-serif] drop-shadow">Modular, maintainable code — built to grow with your business.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── FAQ Item ─────────────────────────────────────────────────────────────────
const FAQItem = ({ faq }) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-6 lg:p-8 flex flex-col gap-3">
    <h3 className="text-[#0f172a] text-sm sm:text-base font-['Arimo',sans-serif] font-bold leading-snug">{faq.question}</h3>
    <p className="text-slate-500 leading-relaxed font-['Arimo',sans-serif] text-sm">{faq.answer}</p>
  </div>
);

// ─── FAQ Section ──────────────────────────────────────────────────────────────
const FAQSection = () => {
  const leftFaqs = faqs.filter((_, i) => i % 2 === 0);
  const rightFaqs = faqs.filter((_, i) => i % 2 !== 0);
  return (
    <section className="py-0 sm:py-5 px-6 lg:px-0 max-w-6xl mx-auto">
      <h2 className="text-[#0f172a] text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-['Arimo',sans-serif] font-semibold text-center mb-12 sm:mb-16 leading-tight">
        <ScrollFillText>Frequently asked questions?</ScrollFillText>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 items-start">
        <div className="flex flex-col gap-4 lg:gap-6">{leftFaqs.map((faq, i) => <FAQItem key={i * 2} faq={faq} />)}</div>
        <div className="flex flex-col gap-4 lg:gap-6">{rightFaqs.map((faq, i) => <FAQItem key={i * 2 + 1} faq={faq} />)}</div>
      </div>
    </section>
  );
};

// ─── How It Works Section ─────────────────────────────────────────────────────
const HowItWorksSection = () => (
  <section className="py-20 sm:pt-30 px-6 lg:px-0 max-w-7xl mx-auto">
    <h2 className="text-black text-3xl sm:text-4xl lg:text-7xl font-['Arimo',sans-serif] font-semibold mb-16 text-left">
      <ScrollFillText>How it works</ScrollFillText>
    </h2>
    <div className="flex flex-col gap-6">
      {steps.map((step, index) => <StepCard key={index} step={step} index={index} />)}
    </div>
  </section>
);

// ─── Individual Step Card ─────────────────────────────────────────────────────
const StepCard = ({ step, index }) => (
  <div className="relative flex flex-col sm:flex-row gap-0 rounded-2xl overflow-hidden border border-slate-100 shadow-sm bg-white">
    <div className="flex flex-row sm:flex-col items-center sm:items-start gap-3 sm:gap-0 px-6 pt-8 sm:pt-10 pb-4 sm:pb-10 sm:w-20 lg:w-24 shrink-0">
      <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#017712] flex items-center justify-center">
        <ArrowRight className="w-4 h-4 text-white" />
      </div>
      {index < steps.length - 1 && <div className="hidden sm:block w-px flex-1 bg-slate-200 mt-3 ml-[17px]" />}
    </div>
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 px-6 sm:pl-0 sm:pr-10 pb-10 pt-0 sm:pt-10 flex-1">
      <div className="flex-1 min-w-0">
        <span className="inline-block text-xs font-semibold tracking-widest text-[#017712] uppercase mb-3 font-['Arimo',sans-serif]">Step {step.number}</span>
        <h3 className="text-[#0f172a] text-xl lg:text-2xl font-['Arimo',sans-serif] font-bold mb-4">{step.title}</h3>
        <p className="text-slate-600 leading-relaxed font-['Arimo',sans-serif] text-sm lg:text-base">{step.description}</p>
      </div>
      <div className="lg:w-80 shrink-0">
        <p className="text-[#0f172a] font-['Arimo',sans-serif] font-semibold text-sm mb-4">Phase deliverables:</p>
        <div className="grid grid-cols-2 gap-x-6 gap-y-3">
          {step.deliverables.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
              <span className="text-slate-600 font-['Arimo',sans-serif] text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// ─── Main Page Component ──────────────────────────────────────────────────────
const WebsiteDevelopment = () => {
  const bannerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: bannerRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0.4, 0.7], [1, 0.4]);

  const benefits = [
    { title: "Full Ownership", description: "You own 100% of the website we build — no platform lock-in, no recurring licensing fees, just a fast, modern site that's entirely yours.", icon: <ShieldCheck className="w-6 h-6 text-[#d946ef]" />, bgColor: "bg-[#fdf2f8]" },
    { title: "Tailored to Your Brand", description: "Every website we build is designed from scratch to reflect your unique brand identity — no generic templates or off-the-shelf themes.", icon: <Palette className="w-6 h-6 text-[#d946ef]" />, bgColor: "bg-[#fdf2f8]" },
    { title: "SEO & Performance Built In", description: "We optimise for Core Web Vitals, structured data, and on-page SEO from day one so your site ranks higher and loads faster than competitors.", icon: <BarChart3 className="w-6 h-6 text-[#d946ef]" />, bgColor: "bg-[#fdf2f8]" },
    { title: "Scalable Architecture", description: "Whether you start with five pages or five hundred, our modular, API-first architecture means your website can grow without a costly rebuild.", icon: <Layers className="w-6 h-6 text-[#d946ef]" />, bgColor: "bg-[#fdf2f8]" },
    { title: "Better Long-Term ROI", description: "A custom website built right the first time costs less to maintain and outperforms template-based sites in traffic, conversions, and longevity.", icon: <Wallet className="w-6 h-6 text-[#d946ef]" />, bgColor: "bg-[#fdf2f8]" },
    { title: "Conversion-Focused UX", description: "We design every page with your visitors' journey in mind — clear calls to action, intuitive navigation, and layouts proven to turn browsers into buyers.", icon: <Crown className="w-6 h-6 text-[#d946ef]" />, bgColor: "bg-[#fdf2f8]" },
  ];

  return (
    <div className="w-full bg-[#ffffff]">
      {/* ── Banner ── */}
      <section className="relative w-full overflow-hidden bg-black">
        <div ref={bannerRef} className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden flex items-center justify-center">
          <motion.img
            style={{ y: imageY, scale: 1.15 }}
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&auto=format&fit=crop&q=80"
            alt="Website Development"
            className="absolute inset-0 w-full h-[140%] object-cover pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
          <motion.div className="relative z-10 flex flex-col items-center px-4" style={{ opacity }}>
            <h1 className="text-white text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-['Arimo',sans-serif] font-bold text-center tracking-tighter select-none max-w-4xl leading-tight">
              Website Development
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ── Key Benefits ── */}
      <section className="py-16 px-6 sm:py-24 lg:px-0 max-w-7xl mx-auto">
        <h2 className="text-black text-3xl sm:text-4xl lg:text-7xl font-['Arimo',sans-serif] font-semibold mb-16 text-left">
          <ScrollFillText>Key Benefits</ScrollFillText>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 lg:p-10 flex flex-col items-start shadow-xl">
              <div className={`${benefit.bgColor} p-3 rounded-lg mb-6`}>{benefit.icon}</div>
              <h3 className="text-[#0f172a] text-xl lg:text-2xl font-['Arimo',sans-serif] font-bold mb-4">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed font-['Arimo',sans-serif] text-sm lg:text-base">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Latest Work ── */}
      <LatestWorkSection />

      {/* ── How It Works ── */}
      <HowItWorksSection />

      {/* ── Why Choose Us ── */}
      <WhyChooseUsSection />

      {/* ── Tech Stack ── */}
      <OurTechstack />

      {/* ── FAQ ── */}
      <FAQSection />

      {/* ── Schedule Call ── */}
      <ScheduleCall />

      {/* ── Contact CTA ── */}
      <ContactCTA />

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
};

export default WebsiteDevelopment;