import React, { useRef } from "react";
import { ScrollFillText } from "../../components/ScrollFillText";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  ShieldCheck,
  BrainCircuit,
  BarChart3,
  Layers,
  Cpu,
  Users,
  ArrowRight,
  Zap,
  Microscope,
  Network,
  Database,
  Bot,
} from "lucide-react";
import LatestWorkSection from "../../components/PortfolioSection";
import OurTechstack from "../../pages/work/OurTechstack";
import ScheduleCall from "../../components/ScheduleCall";
import ContactCTA from "../../components/ContactCTA";
import Footer from "../../components/Footer";

// ─── AI How It Works Data ──────────────────────────────────────────────────────
const steps = [
  {
    number: "01",
    title: "AI Strategy & Feasibility",
    description:
      "We begin by identifying high-impact AI opportunities within your business. Our experts assess your data readiness, choose the right models (LLMs, Computer Vision, or Predictive), and define clear benchmarks for accuracy and performance.",
    deliverables: ["AI Opportunity Audit", "Data Readiness Report", "Model Selection Strategy", "Ethics & Bias Framework", "Technical Architecture", "ROI Projection"],
  },
  {
    number: "02",
    title: "Data Engineering & RAG",
    description:
      "AI is only as good as the data it consumes. We build robust data pipelines and implement Retrieval-Augmented Generation (RAG) to connect powerful models to your private knowledge base securely and accurately.",
    deliverables: ["Data Vectorization", "Vector Database Setup", "ETL Pipelines", "Data Cleaning Scripts", "Knowledge Graph Design", "Privacy Guardrails"],
  },
  {
    number: "03",
    title: "Model Tuning & Integration",
    description:
      "We don't just use APIs; we refine them. Through prompt engineering, fine-tuning, and custom agentic workflows, we build AI systems that actually understand your business logic and integrate seamlessly with your existing software.",
    deliverables: ["Custom Prompt Library", "Fine-tuned Model Weights", "AI Agent Workflows", "API Integration Layer", "System Latency Tuning", "Safety Testing"],
  },
  {
    number: "04",
    title: "Deployment & LLMOps",
    description:
      "Moving AI to production requires constant monitoring. We set up LLMOps pipelines to track model drift, hallucination rates, and token costs, ensuring your AI stays reliable, cost-effective, and safe at scale.",
    deliverables: ["Production Deployment", "Hallucination Monitoring", "Token Cost Optimizer", "Feedback Loops", "Continuous Re-training", "Scaling Infrastructure"],
  },
];

// ─── AI FAQ Data ───────────────────────────────────────────────────────────────
const faqs = [
  { question: "Q1. Which AI models do you work with?", answer: "We are model-agnostic. We work with OpenAI (GPT), Anthropic (Claude), Google (Gemini), and open-source models like Llama 3 or Mistral, depending on your specific privacy and performance needs." },
  { question: "Q2. How do you ensure our data remains private and secure?", answer: "Security is our priority. We implement VPC deployments, enterprise-grade encryption, and data-anonymization layers so your sensitive business data never trains public models." },
  { question: "Q3. What is RAG and why does my business need it?", answer: "Retrieval-Augmented Generation (RAG) allows an AI to look up facts from your specific documents before answering. It significantly reduces 'hallucinations' and ensures the AI speaks your company's language." },
  { question: "Q4. Can you help us automate complex business processes?", answer: "Yes. Beyond simple chatbots, we build 'AI Agents' capable of multi-step reasoning, interacting with your CRM, and executing complex tasks autonomously." },
  { question: "Q5. How do you handle AI hallucinations?", answer: "We use a multi-layered approach: grounding models in your data via RAG, implementing strict system prompts, and building automated 'fact-checker' agents that verify AI responses before they reach the user." },
  { question: "Q6. What is the typical timeline for an AI implementation?", answer: "A custom AI Proof of Concept (PoC) typically takes 4–6 weeks. Full-scale enterprise integration usually spans 12–16 weeks depending on data complexity." },
];

// ─── Why Choose Us Section Components ─────────────────────────────────────────
const rowOne = [
  {
    icon: <BrainCircuit className="w-5 h-5 text-white" />,
    gradient: "from-blue-600 to-cyan-500",
    tag: "Cutting-Edge Tech",
    title: "Beyond Simple Chatbots",
    description: (<>We build <strong className="text-[#0f172a]">autonomous AI agents</strong> and complex reasoning systems. Our team goes past basic wrappers to create deep integrations that handle logic, data analysis, and decision-making.</>),
  },
  {
    icon: <Microscope className="w-5 h-5 text-white" />,
    gradient: "from-purple-600 to-indigo-500",
    tag: "Data First",
    title: "Proprietary Data Moats",
    description: (<>We help you turn your internal data into a <strong className="text-[#0f172a]">competitive advantage</strong>. By structuring and vectorizing your unique knowledge, we create AI tools that your competitors can't simply buy off the shelf.</>),
  },
];

const rowTwo = [
  {
    icon: <ShieldCheck className="w-5 h-5 text-white" />,
    gradient: "from-emerald-600 to-green-500",
    tag: "Enterprise Safety",
    title: "Privacy-First Engineering",
    description: (<>Your data is your most valuable asset. We build with <strong className="text-[#0f172a]">zero-retention policies</strong> and local model hosting options to ensure your intellectual property never leaves your controlled environment.</>),
  },
  {
    icon: <Bot className="w-5 h-5 text-white" />,
    gradient: "from-orange-500 to-red-500",
    tag: "Measurable ROI",
    title: "ROI-Driven Automation",
    description: (<>We don't build AI for the sake of hype. Every project is designed to <strong className="text-[#0f172a]">reduce operational burn</strong> or unlock new revenue streams, with clear KPIs tracked from day one.</>),
  },
];

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
        <div className={`bg-gradient-to-br ${reason.gradient} w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}>
          {reason.icon}
        </div>
        <span className="text-xs font-semibold tracking-widest uppercase text-slate-400">{reason.tag}</span>
      </div>
      <h3 className="text-[#0f172a] text-lg font-bold">{reason.title}</h3>
      <div className="h-px w-full bg-slate-100" />
      <p className="text-slate-500 leading-relaxed text-sm lg:text-base">{reason.description}</p>
    </motion.div>
  );
};

const ImagePanel = ({ src, alt, badge, fromLeft, overlayText }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: fromLeft ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
      className="relative rounded-3xl overflow-hidden shadow-2xl"
    >
      <img src={src} alt={alt} className="w-full h-[420px] lg:h-[600px] object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/65 via-transparent to-transparent" />
      {badge && (
        <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-[#0f172a] text-xs font-bold tracking-wide">{badge}</span>
        </div>
      )}
      {overlayText && (
        <div className="absolute bottom-5 left-6 right-6">
          <p className="text-white/90 text-sm drop-shadow">{overlayText}</p>
        </div>
      )}
    </motion.div>
  );
};

const WhyChooseUsSection = () => (
  <section className="py-14 sm:pt-40 px-6 lg:px-0 max-w-7xl mx-auto overflow-hidden">
    <h2 className="text-[#0f172a] text-3xl sm:text-4xl lg:text-7xl font-semibold text-center leading-tight mb-24">
      <ScrollFillText>Why Choose Seereon for AI?</ScrollFillText>
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center mb-16 lg:mb-24">
      <div className="flex flex-col gap-5">
        {rowOne.map((reason, i) => <ReasonCard key={i} reason={reason} index={i} fromLeft={true} />)}
      </div>
      <div className="hidden lg:block">
        <ImagePanel 
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&auto=format&fit=crop&q=80" 
          alt="Neural network visualization" 
          badge="Advanced Architecture" 
          fromLeft={false} 
          overlayText="Custom AI solutions that go beyond simple wrappers."
        />
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
      <div className="hidden lg:block">
        <ImagePanel 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&auto=format&fit=crop&q=80" 
          alt="Secure data server" 
          badge="Enterprise Grade" 
          fromLeft={true} 
          overlayText="Safe, secure, and private AI infrastructure."
        />
      </div>
      <div className="flex flex-col gap-5">
        {rowTwo.map((reason, i) => <ReasonCard key={i} reason={reason} index={i} fromLeft={false} />)}
      </div>
    </div>
  </section>
);

// ─── Main Page Component ──────────────────────────────────────────────────────
const AIDevelopment = () => {
  const bannerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: bannerRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0.4, 0.7], [1, 0.4]);

  const benefits = [
    { title: "Automate Complexity", description: "Replace repetitive manual work with AI agents that can reason, document, and execute tasks across your tech stack 24/7.", icon: <Cpu className="w-6 h-6 text-[#d946ef]" />, bgColor: "bg-[#fdf2f8]" },
    { title: "Data-Driven Insights", description: "Unlock patterns in your unstructured data. From sentiment analysis to predictive forecasting, we turn logs into actionable strategy.", icon: <Database className="w-6 h-6 text-[#d946ef]" />, bgColor: "bg-[#fdf2f8]" },
    { title: "Personalization at Scale", description: "Deliver unique experiences to every user with AI-driven recommendation engines and dynamic content generation.", icon: <Network className="w-6 h-6 text-[#d946ef]" />, bgColor: "bg-[#fdf2f8]" },
    { title: "Reduced Hallucinations", description: "Our RAG-based systems ensure your AI is grounded in truth, citing real documents and providing accurate, non-fictional answers.", icon: <ShieldCheck className="w-6 h-6 text-[#d946ef]" />, bgColor: "bg-[#fdf2f8]" },
    { title: "Scalable LLMOps", description: "We build the infrastructure to monitor and maintain your models, ensuring they remain fast and accurate as user demand grows.", icon: <Layers className="w-6 h-6 text-[#d946ef]" />, bgColor: "bg-[#fdf2f8]" },
    { title: "Future-Proof Edge", description: "Stay ahead of the curve with an AI roadmap that evolves as new models and technologies emerge in the fast-paced AI landscape.", icon: <Zap className="w-6 h-6 text-[#d946ef]" />, bgColor: "bg-[#fdf2f8]" },
  ];

  return (
    <div className="w-full bg-white font-['Arimo',sans-serif]">
      {/* Banner */}
      <section className="relative w-full overflow-hidden bg-black">
        <div ref={bannerRef} className="relative w-full h-[300px] sm:h-[500px] flex items-center justify-center">
          <motion.img
            style={{ y: imageY, scale: 1.15 }}
            src="https://images.unsplash.com/photo-1620712943543-bcc4628c9757?w=1600&auto=format&fit=crop&q=80"
            alt="AI Technology Banner"
            className="absolute inset-0 w-full h-[140%] object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-black/40" />
          <motion.div className="relative z-10" style={{ opacity }}>
            <h1 className="text-white text-5xl sm:text-8xl font-bold tracking-tighter text-center">
              AI Development
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 px-6 lg:px-0 max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-7xl font-semibold mb-16 tracking-tight">
          <ScrollFillText>AI Advantage</ScrollFillText>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="bg-white rounded-3xl p-10 shadow-xl border border-slate-50 transition-all hover:border-blue-100">
              <div className={`${b.bgColor} p-4 rounded-2xl w-fit mb-8`}>{b.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{b.title}</h3>
              <p className="text-slate-600 leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </section>

      <LatestWorkSection />

      {/* How It Works */}
      <section className="py-24 px-6 lg:px-0 max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-7xl font-semibold mb-16 tracking-tight">
          <ScrollFillText>The AI Workflow</ScrollFillText>
        </h2>
        <div className="flex flex-col gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col sm:flex-row gap-0 rounded-3xl overflow-hidden border border-slate-100 bg-white p-8">
               <div className="flex flex-col gap-4 flex-1">
                 <span className="text-blue-600 font-bold tracking-widest text-xs uppercase">Phase {step.number}</span>
                 <h3 className="text-2xl font-bold">{step.title}</h3>
                 <p className="text-slate-600 max-w-2xl">{step.description}</p>
               </div>
               <div className="lg:w-80 mt-6 lg:mt-0">
                 <p className="text-sm font-bold mb-4">Deliverables:</p>
                 <div className="grid grid-cols-1 gap-2">
                   {step.deliverables.map((d, i) => (
                     <div key={i} className="flex items-center gap-2 text-sm text-slate-500">
                       <div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> {d}
                     </div>
                   ))}
                 </div>
               </div>
            </div>
          ))}
        </div>
      </section>

      <WhyChooseUsSection />
      <OurTechstack />
      
      {/* FAQ */}
      <section className="py-24 px-6 lg:px-0 max-w-6xl mx-auto">
        <h2 className="text-center text-4xl lg:text-7xl font-semibold mb-16">
          <ScrollFillText>AI Insights</ScrollFillText>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, i) => (
            <div key={i} className="p-8 bg-white border border-slate-200 rounded-2xl">
              <h3 className="font-bold mb-4">{faq.question}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <ScheduleCall />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default AIDevelopment;