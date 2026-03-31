import React, { useRef } from "react";
import { ScrollFillText } from "../../components/ScrollFillText";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  ShieldCheck,
  Rocket,
  BarChart3,
  Layers,
  Wallet,
  Users,
  ArrowRight,
  Zap,
  FlaskConical,
  GitBranch,
  Target,
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
    title: "Idea Validation & Scoping",
    description:
      "We start by stress-testing your idea against real market signals. In a focused workshop we define the core problem, your target users, and the minimum feature set that delivers genuine value — cutting everything that doesn't need to be in v1.",
    deliverables: ["Problem Statement", "Target User Profiles", "Market Sizing", "Feature Priority Map", "Risk Assessment", "MVP Scope Document"],
  },
  {
    number: "02",
    title: "Rapid UX & Prototype",
    description:
      "Speed is everything in MVP. Our designers produce lean wireframes and a clickable prototype in days — not weeks — so you can test your core hypothesis with real users before a single line of production code is written.",
    deliverables: ["User Flow Diagrams", "Lo-Fi Wireframes", "Clickable Prototype", "User Testing Plan", "Feedback Summary", "Validated UI Direction"],
  },
  {
    number: "03",
    title: "Agile Build Sprints",
    description:
      "We build your MVP in tight two-week sprints, shipping working software every cycle. You see progress constantly, can reprioritise based on feedback, and always know exactly where your product stands.",
    deliverables: ["Core Feature Build", "API & Backend Setup", "Auth & User Management", "Analytics Integration", "Sprint Demos", "QA & Bug Fixes"],
  },
  {
    number: "04",
    title: "Launch, Learn & Iterate",
    description:
      "We deploy your MVP, set up tracking, and help you collect the data that matters. Post-launch we analyse results together and plan the next iteration — turning early traction into a roadmap for your full product.",
    deliverables: ["Production Deployment", "Analytics Dashboard", "User Feedback Loops", "Performance Monitoring", "Iteration Roadmap", "Investor-Ready Demo"],
  },
];

// ─── FAQ Data ─────────────────────────────────────────────────────────────────
const faqs = [
  { question: "Q1. How long does it take to build an MVP?", answer: "Most MVPs are designed, built, and launched within 8–12 weeks. Simple single-feature products can ship in as little as 4–6 weeks depending on scope." },
  { question: "Q2. How do you decide what features go into the MVP?", answer: "We run a scoping workshop to map your core hypothesis and identify the minimum feature set needed to validate it — everything else is intentionally deferred to keep timelines and costs lean." },
  { question: "Q3. Will the MVP codebase be scalable for the full product?", answer: "Yes. We build on production-grade frameworks so your MVP codebase is a solid foundation — not a throwaway prototype — making it straightforward to extend into your full product." },
  { question: "Q4. Can you help me raise funding with the MVP?", answer: "Absolutely. We can prepare investor-ready demos, technical documentation, and architecture decks that help you tell a compelling story to angel investors and VCs." },
  { question: "Q5. What if my idea changes mid-build?", answer: "It often does — and that's healthy. Our agile sprint structure means you can reprioritise features between cycles without derailing the project or blowing the budget." },
  { question: "Q6. Do you offer post-launch support and iteration?", answer: "Yes. We offer dedicated support packages to monitor your MVP post-launch, fix issues fast, and plan the next iteration based on real user data and feedback." },
];

// ─── Why Choose Us Data ───────────────────────────────────────────────────────
const rowOne = [
  {
    icon: <Rocket className="w-5 h-5 text-white" />,
    gradient: "from-violet-500 to-indigo-600",
    glowColor: "rgba(99,102,241,0.25)",
    tag: "Speed to Market",
    title: "Ship in Weeks, Not Months",
    description: (<>We cut through scope creep and over-engineering to get your idea in front of real users <strong className="text-[#0f172a]">as fast as humanly possible</strong>. Our proven sprint framework has launched MVPs in as little as 4 weeks — without cutting corners on quality.</>),
  },
  {
    icon: <FlaskConical className="w-5 h-5 text-white" />,
    gradient: "from-emerald-500 to-teal-600",
    glowColor: "rgba(16,185,129,0.25)",
    tag: "Hypothesis Driven",
    title: "Build to Validate, Not to Impress",
    description: (<>Every feature we include in your MVP is tied to a <strong className="text-[#0f172a]">specific assumption you need to test</strong>. We challenge scope ruthlessly — keeping costs low, timelines short, and your learnings sharp.</>),
  },
];

const rowTwo = [
  {
    icon: <GitBranch className="w-5 h-5 text-white" />,
    gradient: "from-amber-500 to-orange-500",
    glowColor: "rgba(245,158,11,0.25)",
    tag: "Future-Proof Foundation",
    title: "A Codebase Built to Grow Into",
    description: (<>Your MVP is written on a <strong className="text-[#0f172a]">production-grade, modular architecture</strong> — not a duct-taped prototype. When you're ready to scale, you build on what exists rather than starting from scratch.</>),
  },
  {
    icon: <Target className="w-5 h-5 text-white" />,
    gradient: "from-rose-500 to-pink-600",
    glowColor: "rgba(244,63,94,0.25)",
    tag: "Founder Aligned",
    title: "We Think Like Founders, Not Vendors",
    description: (<>Our team includes ex-startup founders who have built and launched their own products. We bring <strong className="text-[#0f172a]">founder-level thinking</strong> to every decision — prioritising traction, investor readiness, and real-world impact over vanity features.</>),
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

        {/* Desktop — startup launch / sprint board */}
        <div className="hidden lg:block">
          <ImagePanel
            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=900&auto=format&fit=crop&q=80"
            alt="Startup team doing agile sprint planning on whiteboard"
            badge="Ship Fast, Learn Faster"
            fromLeft={false}
            overlayText="From idea to live product in weeks — not months."
          />
        </div>

        {/* Mobile row 1 */}
        <div className="block lg:hidden relative rounded-3xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=900&auto=format&fit=crop&q=80"
            alt="Startup team sprint planning"
            className="w-full h-64 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/55 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center gap-2 shadow-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
            <span className="text-[#0f172a] text-xs font-bold font-['Arimo',sans-serif]">Ship Fast, Learn Faster</span>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white/90 text-xs font-['Arimo',sans-serif] drop-shadow">From idea to live product in weeks — not months.</p>
          </div>
        </div>
      </div>

      {/* ── Row 2: Image LEFT  |  Cards RIGHT ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">

        {/* Desktop — product roadmap / iteration planning */}
        <div className="hidden lg:block">
          <ImagePanel
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&auto=format&fit=crop&q=80"
            alt="Founder reviewing product roadmap and iteration plan"
            badge="Founder-Led Thinking"
            fromLeft={true}
            overlayText="Built by founders who've been where you are."
          />
        </div>

        <div className="flex flex-col gap-5">
          {rowTwo.map((reason, i) => (
            <ReasonCard key={i} reason={reason} index={i} fromLeft={false} />
          ))}
        </div>

        {/* Mobile row 2 */}
        <div className="block lg:hidden relative rounded-3xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&auto=format&fit=crop&q=80"
            alt="Founder reviewing product roadmap"
            className="w-full h-64 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/55 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center gap-2 shadow-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
            <span className="text-[#0f172a] text-xs font-bold font-['Arimo',sans-serif]">Founder-Led Thinking</span>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white/90 text-xs font-['Arimo',sans-serif] drop-shadow">Built by founders who've been where you are.</p>
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
const MVPBuilder = () => {
  const bannerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: bannerRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0.4, 0.7], [1, 0.4]);

  const benefits = [
    { title: "Launch in Weeks", description: "Our focused sprint process gets your MVP live in 4–12 weeks — so you validate your idea and reach early adopters before the window of opportunity closes.", icon: <Rocket className="w-6 h-6 text-[#d946ef]" />, bgColor: "bg-[#fdf2f8]" },
    { title: "Lean by Design", description: "We scope ruthlessly, building only what's needed to test your core hypothesis — keeping costs low and learnings high from the very first sprint.", icon: <Zap className="w-6 h-6 text-[#d946ef]" />, bgColor: "bg-[#fdf2f8]" },
    { title: "Investor Ready", description: "From demo-day decks to technical architecture docs, we help you present your MVP compellingly to angels and VCs looking for traction and vision.", icon: <BarChart3 className="w-6 h-6 text-[#d946ef]" />, bgColor: "bg-[#fdf2f8]" },
    { title: "Scalable from Day One", description: "Your MVP is built on a production-grade architecture so you extend and scale it directly — no throwaway code, no painful rewrites when you gain traction.", icon: <Layers className="w-6 h-6 text-[#d946ef]" />, bgColor: "bg-[#fdf2f8]" },
    { title: "Reduce Burn Rate", description: "By validating before over-building, you protect your runway. Our lean approach means you spend only what's necessary to get the answers your business needs.", icon: <Wallet className="w-6 h-6 text-[#d946ef]" />, bgColor: "bg-[#fdf2f8]" },
    { title: "Real User Feedback Loop", description: "We set up analytics, feedback tools, and user testing frameworks so your MVP collects the data needed to make confident decisions about what to build next.", icon: <Users className="w-6 h-6 text-[#d946ef]" />, bgColor: "bg-[#fdf2f8]" },
  ];

  return (
    <div className="w-full bg-[#ffffff]">
      {/* ── Banner ── */}
      <section className="relative w-full overflow-hidden bg-black">
        <div ref={bannerRef} className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden flex items-center justify-center">
          <motion.img
            style={{ y: imageY, scale: 1.15 }}
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop"
            alt="MVP Builder"
            className="absolute inset-0 w-full h-[140%] object-cover pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
          <motion.div className="relative z-10 flex flex-col items-center px-4" style={{ opacity }}>
            <h1 className="text-white text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-['Arimo',sans-serif] font-bold text-center tracking-tighter select-none max-w-4xl leading-tight">
              MVP Builder
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

export default MVPBuilder;