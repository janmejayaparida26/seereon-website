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
    title: "Discovery & AI Strategy",
    description:
      "We begin by understanding your business objectives and identifying where AI can deliver the most impact. In a focused strategy session we define the core problem, map your data landscape, and design the right AI approach — cutting any scope that doesn't directly serve your goals.",
    deliverables: ["Business Problem Framing", "Data Readiness Audit", "AI Opportunity Map", "Model Strategy Document", "Risk & Ethics Assessment", "Project Scope & Timeline"],
  },
  {
    number: "02",
    title: "Data Preparation & Modelling",
    description:
      "Great AI is built on great data. Our engineers clean, structure, and enrich your datasets, then design and train models tailored to your use case — iterating rapidly on experiments and validating performance against real-world benchmarks before moving to production.",
    deliverables: ["Data Pipeline Setup", "Feature Engineering", "Model Architecture Design", "Training & Validation", "Benchmark Reporting", "Bias & Fairness Review"],
  },
  {
    number: "03",
    title: "Integration & Development",
    description:
      "We integrate your AI models into your existing products and workflows through clean APIs and robust backend infrastructure. Every solution is built for reliability, scale, and ease of maintenance — so your team can own it confidently after handoff.",
    deliverables: ["API Development", "Model Deployment", "System Integration", "User Interface Build", "Monitoring Setup", "QA & Performance Testing"],
  },
  {
    number: "04",
    title: "Launch, Monitor & Optimise",
    description:
      "We deploy your AI solution to production, set up real-time monitoring dashboards, and track model performance over time. Post-launch we analyse outcomes together and continuously fine-tune the models as new data flows in — keeping your AI sharp and improving.",
    deliverables: ["Production Deployment", "Performance Dashboard", "Drift Detection Setup", "User Feedback Loops", "Retraining Pipeline", "Roadmap for Next AI Features"],
  },
];

// ─── FAQ Data ─────────────────────────────────────────────────────────────────
const faqs = [
  { question: "Q1. How long does an AI development project take?", answer: "Most AI solutions are scoped, built, and deployed within 8–16 weeks. Simpler automation or integration projects can go live in as little as 4–6 weeks, while complex custom model development may take longer depending on data availability." },
  { question: "Q2. Do we need a large dataset to get started?", answer: "Not always. We assess your data during discovery and recommend the right approach — whether that's training on your own data, fine-tuning a pre-trained model, or using retrieval-augmented generation (RAG) to work effectively with limited datasets." },
  { question: "Q3. Will the AI solution integrate with our existing systems?", answer: "Yes. We build AI capabilities as modular, API-first services that integrate cleanly into your existing tech stack — whether that's a web app, CRM, ERP, or internal tool — without requiring you to replace your current infrastructure." },
  { question: "Q4. How do you ensure the AI is accurate and trustworthy?", answer: "We benchmark every model against held-out test data, conduct bias and fairness reviews, and set up ongoing monitoring to detect performance drift. Explainability tools are added where your team or stakeholders need to understand model decisions." },
  { question: "Q5. What if our requirements change mid-project?", answer: "AI projects naturally evolve as new insights emerge. Our agile build process means we can reprioritise model features and integration scope between sprints — adapting to changing needs without derailing timelines or budgets." },
  { question: "Q6. Do you provide support after the AI goes live?", answer: "Yes. We offer dedicated post-launch support packages covering model monitoring, retraining pipelines, performance tuning, and feature expansion — ensuring your AI keeps delivering value as your business and data evolve." },
];

// ─── Why Choose Us Data ───────────────────────────────────────────────────────
const rowOne = [
  {
    icon: <Rocket className="w-5 h-5 text-white" />,
    gradient: "from-violet-500 to-indigo-600",
    glowColor: "rgba(99,102,241,0.25)",
    tag: "End-to-End AI Expertise",
    title: "From Raw Data to Deployed Intelligence",
    description: (<>We handle the full AI lifecycle — data engineering, model development, integration, and monitoring — so you get a <strong className="text-[#0f172a]">complete, production-ready AI solution</strong> rather than a notebook that never ships.</>),
  },
  {
    icon: <FlaskConical className="w-5 h-5 text-white" />,
    gradient: "from-emerald-500 to-teal-600",
    glowColor: "rgba(16,185,129,0.25)",
    tag: "Outcome Driven",
    title: "AI Aligned to Business Results",
    description: (<>Every model we build is tied to a <strong className="text-[#0f172a]">measurable business outcome</strong> — not just a technical metric. We challenge scope ruthlessly, ensuring every AI feature earns its place by driving real value for your users or bottom line.</>),
  },
];

const rowTwo = [
  {
    icon: <GitBranch className="w-5 h-5 text-white" />,
    gradient: "from-amber-500 to-orange-500",
    glowColor: "rgba(245,158,11,0.25)",
    tag: "Production-Grade Architecture",
    title: "AI Built to Scale with Your Business",
    description: (<>Our AI systems are designed on a <strong className="text-[#0f172a]">modular, cloud-native infrastructure</strong> — not fragile one-off scripts. When your data volume grows or your use cases expand, your AI scales with you rather than needing a full rebuild.</>),
  },
  {
    icon: <Target className="w-5 h-5 text-white" />,
    gradient: "from-rose-500 to-pink-600",
    glowColor: "rgba(244,63,94,0.25)",
    tag: "Responsible AI",
    title: "We Build AI You Can Trust and Explain",
    description: (<>Our team embeds explainability, fairness, and security into every model from day one. We don't just build AI that performs — we build AI your team, your customers, and your stakeholders can <strong className="text-[#0f172a]">trust completely</strong>.</>),
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

        {/* Desktop */}
        <div className="hidden lg:block">
          <ImagePanel
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fEFpJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDI%3D"
            alt="AI engineers working on machine learning models and neural networks"
            badge="Data to Deployment"
            fromLeft={false}
            overlayText="End-to-end AI solutions that ship to production and deliver real results."
          />
        </div>

        {/* Mobile row 1 */}
        <div className="block lg:hidden relative rounded-3xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fEFpJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDI%3D"
            alt="AI engineers working on machine learning models"
            className="w-full h-64 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/55 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center gap-2 shadow-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
            <span className="text-[#0f172a] text-xs font-bold font-['Arimo',sans-serif]">Data to Deployment</span>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white/90 text-xs font-['Arimo',sans-serif] drop-shadow">End-to-end AI solutions that ship to production and deliver real results.</p>
          </div>
        </div>
      </div>

      {/* ── Row 2: Image LEFT  |  Cards RIGHT ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">

        {/* Desktop */}
        <div className="hidden lg:block">
          <ImagePanel
            src="https://images.unsplash.com/photo-1734597949889-f8e2ec87c8ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM4fHxBaSUyMGRldmVsb3BtZW50fGVufDB8fDB8fHwy"
            alt="AI model training and data visualisation on large monitors"
            badge="Responsible AI"
            fromLeft={true}
            overlayText="Trustworthy, explainable AI built for scale and long-term impact."
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
            src="https://images.unsplash.com/photo-1734597949889-f8e2ec87c8ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM4fHxBaSUyMGRldmVsb3BtZW50fGVufDB8fDB8fHwy"
            alt="AI model training and data visualisation"
            className="w-full h-64 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/55 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center gap-2 shadow-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
            <span className="text-[#0f172a] text-xs font-bold font-['Arimo',sans-serif]">Responsible AI</span>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white/90 text-xs font-['Arimo',sans-serif] drop-shadow">Trustworthy, explainable AI built for scale and long-term impact.</p>
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
const AIDevelopment = () => {
  const bannerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: bannerRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0.4, 0.7], [1, 0.4]);

  const benefits = [
    { title: "Custom AI Models", description: "We design and train models tailored specifically to your business data and use case — from NLP and computer vision to recommendation engines and predictive analytics.", icon: <Rocket className="w-6 h-6 text-[#d946ef]" />, bgColor: "bg-[#fdf2f8]" },
    { title: "Rapid Prototyping", description: "We move fast from concept to working AI prototype — letting you validate the approach with real outputs and stakeholder demos before committing to full-scale development.", icon: <Zap className="w-6 h-6 text-[#d946ef]" />, bgColor: "bg-[#fdf2f8]" },
    { title: "Investor Ready", description: "From AI capability decks to technical architecture documentation, we help you communicate your AI strategy compellingly to investors, boards, and enterprise stakeholders.", icon: <BarChart3 className="w-6 h-6 text-[#d946ef]" />, bgColor: "bg-[#fdf2f8]" },
    { title: "Scalable Infrastructure", description: "Every AI system we build runs on cloud-native, auto-scaling infrastructure — so performance stays consistent whether you're processing hundreds or hundreds of millions of requests.", icon: <Layers className="w-6 h-6 text-[#d946ef]" />, bgColor: "bg-[#fdf2f8]" },
    { title: "Reduce Operational Costs", description: "AI-driven automation eliminates manual, repetitive processes — cutting operational overhead, reducing error rates, and freeing your team to focus on high-value work.", icon: <Wallet className="w-6 h-6 text-[#d946ef]" />, bgColor: "bg-[#fdf2f8]" },
    { title: "Continuous Learning", description: "Our models don't stand still. We build retraining pipelines and feedback loops that let your AI improve automatically as new data arrives — staying accurate and relevant over time.", icon: <Users className="w-6 h-6 text-[#d946ef]" />, bgColor: "bg-[#fdf2f8]" },
  ];

  return (
    <div className="w-full bg-[#ffffff]">
      {/* ── Banner ── */}
      <section className="relative w-full overflow-hidden bg-black">
        <div ref={bannerRef} className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden flex items-center justify-center">
          <motion.img
            style={{ y: imageY, scale: 1.15 }}
            src="https://images.unsplash.com/photo-1756908992154-c8a89f5e517f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fEFpJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDI%3D"
            alt="AI Development"
            className="absolute inset-0 w-full h-[140%] object-cover pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
          <motion.div className="relative z-10 flex flex-col items-center px-4" style={{ opacity }}>
            <h1 className="text-white text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-['Arimo',sans-serif] font-bold text-center tracking-tighter select-none max-w-4xl leading-tight">
              AI Development
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

export default AIDevelopment;
