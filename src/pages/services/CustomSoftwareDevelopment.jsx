import React, { useRef } from "react";
import { ScrollFillText } from "../../components/ScrollFillText";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  BarChart3,
  Layers,
  Wallet,
  Crown,
  ArrowRight,
  Users,
  Handshake,
  Lightbulb,
  TrendingUp,
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

// ─── FAQ Data ─────────────────────────────────────────────────────────────────
const faqs = [
  {
    question: "Q1. What is the hiring process at Seereon?",
    answer:
      "Our hiring process typically includes an initial screening, a technical assessment, and a final discussion to evaluate your problem-solving approach, technical skills, and cultural fit.",
  },
  {
    question: "Q2. Do you offer internships or trainee programs?",
    answer:
      "Yes, we offer internship and trainee opportunities for freshers who are eager to learn, build, and grow in a real engineering environment.",
  },
  {
    question: "Q3. What technologies do you work with?",
    answer:
      "We work with modern tech stacks including web development frameworks, backend systems, cloud technologies, and enterprise solutions like SAP.",
  },
  {
    question: "Q4. Is prior experience mandatory to apply?",
    answer:
      "Not always. While some roles require experience, we also hire freshers and trainees who demonstrate strong fundamentals and a willingness to learn.",
  },
  {
    question: "Q5. What kind of projects will I work on?",
    answer:
      "You'll work on scalable software systems, business applications, and performance-driven platforms designed to solve real-world challenges.",
  },
  {
    question: "Q6. Do you provide training or mentorship?",
    answer:
      "Yes, we provide hands-on training, guidance from experienced developers, and continuous learning opportunities to help you grow.",
  },
];

// ─── Why Choose Us Data ───────────────────────────────────────────────────────
const whyChooseReasons = [
  {
    icon: <Users className="w-5 h-5 text-[#6366f1]" />,
    iconBg: "bg-[#eef2ff]",
    title: "A Co-Founder Mindset, Rooted in Startup Experience",
    description: (
      <>
        Our <strong>team of ex-startup founders</strong> brings a co-founder
        mentality, having faced and overcome the same challenges you face. With
        hands-on experience building software products across various verticals,
        we approach every project with agility, problem-solving, and a focus on
        real-world impact.
      </>
    ),
  },
  {
    icon: <Handshake className="w-5 h-5 text-[#6366f1]" />,
    iconBg: "bg-[#eef2ff]",
    title: "An Extension of Your Team",
    description: (
      <>
        We're not just a service provider — we're your extended team of
        co-founders. Our blend of tech expertise and entrepreneurial insight
        brings a unique perspective. We're here to do more than build your
        product; we're committed to challenging your vision, pushing boundaries
        and driving your success —{" "}
        <strong>because when you succeed, we succeed.</strong>
      </>
    ),
  },
  {
    icon: <Lightbulb className="w-5 h-5 text-[#6366f1]" />,
    iconBg: "bg-[#eef2ff]",
    title: "End-to-End Ownership & Transparency",
    description: (
      <>
        From ideation to deployment, we own every phase of your project with
        full transparency. You'll always know where your product stands, what's
        being built, and why — no surprises, no black boxes.
      </>
    ),
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-[#6366f1]" />,
    iconBg: "bg-[#eef2ff]",
    title: "Built to Scale With Your Business",
    description: (
      <>
        We architect solutions with growth in mind. Whether you're a startup
        launching an MVP or a scaling enterprise, our custom software is
        engineered to evolve alongside your business without costly rewrites.
      </>
    ),
  },
];

// ─── Why Choose Us Section ────────────────────────────────────────────────────
const WhyChooseUsSection = () => {
  return (
    <section className="py-14 sm:pt-40 px-6 lg:px-0 max-w-7xl mx-auto">
      {/* Heading */}
      <h2 className="text-[#0f172a] text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-['Arimo',sans-serif] font-semibold text-center mb-12 sm:mb-30 leading-tight">
        <ScrollFillText>Why Choose Seereon?</ScrollFillText>
      </h2>

      {/* Two-column layout: cards left, image right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left: reason cards */}
        <div className="flex flex-col gap-5">
          {whyChooseReasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 lg:p-8 flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`${reason.iconBg} w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0`}
                >
                  {reason.icon}
                </div>
                <h3 className="text-[#0f172a] text-base lg:text-lg font-['Arimo',sans-serif] font-bold leading-snug">
                  {reason.title}
                </h3>
              </div>
              <p className="text-slate-600 leading-relaxed font-['Arimo',sans-serif] text-sm lg:text-base">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right: sticky infographic image */}
        <div className="hidden lg:block">
          <div className="sticky top-24">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=80"
                alt="Software development team collaboration"
                className="w-full h-[620px] object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Mobile-only image (shows below cards) */}
        <div className="block lg:hidden rounded-3xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=80"
            alt="Software development team collaboration"
            className="w-full h-64 sm:h-80 object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

// ─── FAQ Item ─────────────────────────────────────────────────────────────────
const FAQItem = ({ faq }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 lg:p-8 flex flex-col gap-3">
      <h3 className="text-[#0f172a] text-sm sm:text-base lg:text-base font-['Arimo',sans-serif] font-bold leading-snug">
        {faq.question}
      </h3>
      <p className="text-slate-500 leading-relaxed font-['Arimo',sans-serif] text-sm lg:text-sm">
        {faq.answer}
      </p>
    </div>
  );
};

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
        <div className="flex flex-col gap-4 lg:gap-6">
          {leftFaqs.map((faq, i) => (
            <FAQItem key={i * 2} faq={faq} />
          ))}
        </div>
        <div className="flex flex-col gap-4 lg:gap-6">
          {rightFaqs.map((faq, i) => (
            <FAQItem key={i * 2 + 1} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── How It Works Section ─────────────────────────────────────────────────────
const HowItWorksSection = () => {
  return (
    <section className="py-20 sm:pt-30 px-6 lg:px-0 max-w-7xl mx-auto">
      <h2 className="text-black text-3xl sm:text-4xl lg:text-7xl font-['Arimo',sans-serif] font-semibold mb-16 text-left">
        <ScrollFillText>How it works</ScrollFillText>
      </h2>

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
      <div className="flex flex-row sm:flex-col items-center sm:items-start gap-3 sm:gap-0 px-6 pt-8 sm:pt-10 pb-4 sm:pb-10 sm:w-20 lg:w-24 shrink-0">
        <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#017712] flex items-center justify-center">
          <ArrowRight className="w-4 h-4 text-white" />
        </div>
        {index < steps.length - 1 && (
          <div className="hidden sm:block w-px flex-1 bg-slate-200 mt-3 ml-[17px]" />
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 px-6 sm:pl-0 sm:pr-10 pb-10 pt-0 sm:pt-10 flex-1">
        <div className="flex-1 min-w-0">
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
          <ScrollFillText>Key Benefits</ScrollFillText>
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

export default CustomSoftwareDevelopment;