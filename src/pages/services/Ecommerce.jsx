import React, { useRef } from "react";

import { ScrollFillText } from "../../components/ScrollFillText";

import { motion, useScroll, useTransform, useInView } from "framer-motion";

import {

  ShieldCheck,

  ShoppingBag,

  BarChart3,

  Layers,

  CreditCard,

  Users,

  ArrowRight,

  Zap,

  Globe,

  Truck,

  MousePointerClick,

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

    title: "Brand Strategy & Architecture",

    description:

      "We define your digital storefront's DNA. From mapping complex product taxonomies to choosing the right platform (Headless, Shopify, or Custom), we ensure your backend is as robust as your brand is beautiful.",

    deliverables: ["Platform Audit", "Product Taxonomy", "Conversion Strategy", "SEO Architecture", "Tech Stack Selection", "Scalability Roadmap"],

  },

  {

    number: "02",

    title: "High-Conversion Design",

    description:

      "E-commerce is won in the details. We design frictionless checkout flows, intuitive navigation, and mobile-first product pages specifically engineered to reduce cart abandonment and increase AOV.",

    deliverables: ["UX/UI Design System", "Checkout Flow Optimization", "Product Detail Layouts", "Mobile-First Prototypes", "Visual Merchandising Plan", "A/B Testing Framework"],

  },

  {

    number: "03",

    title: "Development & Integration",

    description:

      "We build high-performance stores with lightning-fast load times. Our team integrates your ERP, CRM, and payment gateways seamlessly, ensuring inventory and orders sync in real-time across all channels.",

    deliverables: ["Frontend Development", "ERP/CRM Integration", "Payment Gateway Setup", "Inventory Sync Logic", "Custom Plugin Development", "Speed & Performance Tuning"],

  },

  {

    number: "04",

    title: "Launch & Growth Scaling",

    description:

      "Launch is just the beginning. We set up advanced analytics and marketing automation to track customer LTV. We monitor performance and iterate based on heatmaps to keep your growth on an upward trajectory.",

    deliverables: ["Store Deployment", "Marketing Automation Tagging", "Analytics Dashboard", "SEO Go-Live Checklist", "Post-Launch Monitoring", "Growth Iteration Plan"],

  },

];

// ─── FAQ Data ─────────────────────────────────────────────────────────────────

const faqs = [

  { question: "Q1. Which platform should I choose for my store?", answer: "It depends on your scale. We specialize in Shopify for speed-to-market, and Headless Commerce (Next.js + Sanity/Commerce Layer) for brands needing total creative freedom and performance." },

  { question: "Q2. Can you migrate my data from another platform?", answer: "Absolutely. We handle secure migration of product catalogs, customer history, and order data from platforms like Magento, WooCommerce, or BigCommerce without losing SEO juice." },

  { question: "Q3. How do you handle international shipping and taxes?", answer: "We integrate global solutions like Avalara for tax compliance and ShipStation or Global-e for international logistics, ensuring a localized experience for every shopper." },

  { question: "Q4. Will my store be mobile-friendly?", answer: "Mobile-first isn't just a buzzword for us—it's the priority. Over 70% of e-commerce traffic is mobile, so we optimize every pixel for the thumb-scrolling experience." },

  { question: "Q5. Do you provide ongoing maintenance?", answer: "Yes. We offer managed support packages that include security patches, speed optimization, and regular feature updates to keep you ahead of competitors." },

  { question: "Q6. Can you help with SEO and digital marketing?", answer: "While we focus on the build, we bake SEO best practices into the code and provide the technical foundation your marketing team needs to run high-ROI campaigns." },

];

// ─── Why Choose Us Data ───────────────────────────────────────────────────────

const rowOne = [

  {

    icon: <Zap className="w-5 h-5 text-white" />,

    gradient: "from-amber-500 to-orange-600",

    glowColor: "rgba(245,158,11,0.25)",

    tag: "Performance First",

    title: "Lightning Fast Page Loads",

    description: (<>A 1-second delay can cost 7% in conversions. We build <strong className="text-[#0f172a]">optimized, high-speed stores</strong> that rank higher on Google and keep customers from bouncing to competitors.</>),

  },

  {

    icon: <ShoppingBag className="w-5 h-5 text-white" />,

    gradient: "from-blue-500 to-indigo-600",

    glowColor: "rgba(59,130,246,0.25)",

    tag: "Seamless UX",

    title: "Designed to Convert",

    description: (<>We don't just build websites; we build <strong className="text-[#0f172a]">sales machines</strong>. Every button placement and scroll interaction is designed to guide the user toward the 'Buy Now' button.</>),

  },

];

const rowTwo = [

  {

    icon: <Globe className="w-5 h-5 text-white" />,

    gradient: "from-purple-500 to-pink-600",

    glowColor: "rgba(168,85,247,0.25)",

    tag: "Omnichannel Ready",

    title: "Sell Everywhere, Manage Anywhere",

    description: (<>Sync your inventory across <strong className="text-[#0f172a]">Amazon, Instagram, and your store</strong>. Our centralized architecture ensures you never oversell or lose track of an order again.</>),

  },

  {

    icon: <ShieldCheck className="w-5 h-5 text-white" />,

    gradient: "from-emerald-500 to-teal-600",

    glowColor: "rgba(16,185,129,0.25)",

    tag: "Secure & Scalable",

    title: "Enterprise-Grade Security",

    description: (<>From PCI compliance to robust data encryption, we ensure your customers' <strong className="text-[#0f172a]">payment data is bulletproof</strong>, allowing you to scale from 10 to 10,000 orders a day.</>),

  },

];

// ─── Animated Reason Card (Components kept identical to original structure) ───

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
<span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse flex-shrink-0" />
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

// ─── Sections ─────────────────────────────────────────────────────────────

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
<ScrollFillText>Next-Gen E-commerce</ScrollFillText>
</h2>
</motion.div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center mb-16 lg:mb-24">
<div className="flex flex-col gap-5">

          {rowOne.map((reason, i) => (
<ReasonCard key={i} reason={reason} index={i} fromLeft={true} />

          ))}
</div>
<div className="hidden lg:block">
<ImagePanel

            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&auto=format&fit=crop&q=80"

            alt="Modern retail technology interface"

            badge="Drive More Sales"

            fromLeft={false}

            overlayText="Frictionless shopping experiences across all devices."

          />
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
<div className="hidden lg:block">
<ImagePanel

            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&auto=format&fit=crop&q=80"

            alt="Customer checking out on mobile"

            badge="Global Scale"

            fromLeft={true}

            overlayText="Built to handle your busiest Black Friday sales."

          />
</div>
<div className="flex flex-col gap-5">

          {rowTwo.map((reason, i) => (
<ReasonCard key={i} reason={reason} index={i} fromLeft={false} />

          ))}
</div>
</div>
</section>

  );

};

const FAQSection = () => {

  const leftFaqs = faqs.filter((_, i) => i % 2 === 0);

  const rightFaqs = faqs.filter((_, i) => i % 2 !== 0);

  return (
<section className="py-0 sm:py-5 px-6 lg:px-0 max-w-6xl mx-auto">
<h2 className="text-[#0f172a] text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-['Arimo',sans-serif] font-semibold text-center mb-12 sm:mb-16 leading-tight">
<ScrollFillText>Store Questions?</ScrollFillText>
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 items-start">
<div className="flex flex-col gap-4 lg:gap-6">{leftFaqs.map((faq, i) => <FAQItem key={i * 2} faq={faq} />)}</div>
<div className="flex flex-col gap-4 lg:gap-6">{rightFaqs.map((faq, i) => <FAQItem key={i * 2 + 1} faq={faq} />)}</div>
</div>
</section>

  );

};
 
const FAQItem = ({ faq }) => (
<div className="rounded-2xl border border-slate-200 bg-white p-6 lg:p-8 flex flex-col gap-3">
<h3 className="text-[#0f172a] text-sm sm:text-base font-['Arimo',sans-serif] font-bold leading-snug">{faq.question}</h3>
<p className="text-slate-500 leading-relaxed font-['Arimo',sans-serif] text-sm">{faq.answer}</p>
</div>

);
 
const HowItWorksSection = () => (
<section className="py-20 sm:pt-30 px-6 lg:px-0 max-w-7xl mx-auto">
<h2 className="text-black text-3xl sm:text-4xl lg:text-7xl font-['Arimo',sans-serif] font-semibold mb-16 text-left">
<ScrollFillText>Our Process</ScrollFillText>
</h2>
<div className="flex flex-col gap-6">

        {steps.map((step, index) => <StepCard key={index} step={step} index={index} />)}
</div>
</section>

);
 
const StepCard = ({ step, index }) => (
<div className="relative flex flex-col sm:flex-row gap-0 rounded-2xl overflow-hidden border border-slate-100 shadow-sm bg-white">
<div className="flex flex-row sm:flex-col items-center sm:items-start gap-3 sm:gap-0 px-6 pt-8 sm:pt-10 pb-4 sm:pb-10 sm:w-20 lg:w-24 shrink-0">
<div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#3b82f6] flex items-center justify-center">
<ArrowRight className="w-4 h-4 text-white" />
</div>

        {index < steps.length - 1 && <div className="hidden sm:block w-px flex-1 bg-slate-200 mt-3 ml-[17px]" />}
</div>
<div className="flex flex-col lg:flex-row gap-8 lg:gap-16 px-6 sm:pl-0 sm:pr-10 pb-10 pt-0 sm:pt-10 flex-1">
<div className="flex-1 min-w-0">
<span className="inline-block text-xs font-semibold tracking-widest text-[#3b82f6] uppercase mb-3 font-['Arimo',sans-serif]">Phase {step.number}</span>
<h3 className="text-[#0f172a] text-xl lg:text-2xl font-['Arimo',sans-serif] font-bold mb-4">{step.title}</h3>
<p className="text-slate-600 leading-relaxed font-['Arimo',sans-serif] text-sm lg:text-base">{step.description}</p>
</div>
<div className="lg:w-80 shrink-0">
<p className="text-[#0f172a] font-['Arimo',sans-serif] font-semibold text-sm mb-4">Core Deliverables:</p>
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

const Ecommerce = () => {

  const bannerRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: bannerRef, offset: ["start end", "end start"] });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  const opacity = useTransform(scrollYProgress, [0.4, 0.7], [1, 0.4]);

  const benefits = [

    { title: "Seamless Checkout", description: "Eliminate friction with one-page checkouts and integrated digital wallets like Apple Pay and Google Pay.", icon: <CreditCard className="w-6 h-6 text-[#3b82f6]" />, bgColor: "bg-blue-50" },

    { title: "Lightning Fast", description: "We utilize Edge delivery and image optimization to ensure your products load instantly on any connection.", icon: <Zap className="w-6 h-6 text-[#3b82f6]" />, bgColor: "bg-blue-50" },

    { title: "Real-time Analytics", description: "Track cart additions, drop-off points, and customer behavior with custom-built data dashboards.", icon: <BarChart3 className="w-6 h-6 text-[#3b82f6]" />, bgColor: "bg-blue-50" },

    { title: "Inventory Automation", description: "Automated low-stock alerts and multi-warehouse management to keep your operations running smoothly.", icon: <Layers className="w-6 h-6 text-[#3b82f6]" />, bgColor: "bg-blue-50" },

    { title: "Loyalty Engines", description: "Increase LTV with built-in reward programs, personalized discounts, and subscription models.", icon: <Users className="w-6 h-6 text-[#3b82f6]" />, bgColor: "bg-blue-50" },

    { title: "Smart Logistics", description: "Automatic shipping rate calculations and live tracking updates for a world-class post-purchase experience.", icon: <Truck className="w-6 h-6 text-[#3b82f6]" />, bgColor: "bg-blue-50" },

  ];

  return (
<div className="w-full bg-[#ffffff]">
<section className="relative w-full overflow-hidden bg-black">
<div ref={bannerRef} className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden flex items-center justify-center">
<motion.img

            style={{ y: imageY, scale: 1.15 }}

            src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&auto=format&fit=crop"

            alt="E-commerce Storefront"

            className="absolute inset-0 w-full h-[140%] object-cover pointer-events-none"

          />
<div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
<motion.div className="relative z-10 flex flex-col items-center px-4" style={{ opacity }}>
<h1 className="text-white text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-['Arimo',sans-serif] font-bold text-center tracking-tighter select-none max-w-4xl leading-tight">

              E-commerce Stores
</h1>
</motion.div>
</div>
</section>
<section className="py-16 px-6 sm:py-24 lg:px-0 max-w-7xl mx-auto">
<h2 className="text-black text-3xl sm:text-4xl lg:text-7xl font-['Arimo',sans-serif] font-semibold mb-16 text-left">
<ScrollFillText>Store Capabilities</ScrollFillText>
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
<LatestWorkSection />
<HowItWorksSection />
<WhyChooseUsSection />
<OurTechstack />
<FAQSection />
<ScheduleCall />
<ContactCTA />
<Footer />
</div>

  );

};

export default Ecommerce;
 