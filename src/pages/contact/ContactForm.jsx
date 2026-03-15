import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Send } from "lucide-react";

const ContactForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [focused, setFocused] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const fields = [
    { name: "fullName", label: "Full Name", type: "input" },
    { name: "email", label: "Email Address", type: "input" },
    { name: "subject", label: "Subject", type: "input" },
    { name: "message", label: "Message", type: "textarea" },
  ];

  return (
    <section className="relative min-h-screen bg-[#0a0a0a] overflow-hidden flex items-center py-20 px-6 md:px-12 lg:px-24">

      {/* Background ambient glow */}
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full bg-[#1a1a2e] blur-[120px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-[#0f2027] blur-[100px] opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* ── LEFT SIDE ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-10"
        >
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-white/50 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for projects
          </div>

          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-white mb-6">
              Get the full hands-on{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-white/40">
                ONEDESIGN
              </span>{" "}
              method with our book.
            </h1>
            <p className="text-base text-white/40 leading-relaxed max-w-lg">
              The ONEDESIGN E-Book isn't just a read — it's a roadmap. Crafted from real startup
              journeys and refined through 300+ brand builds, it breaks down the chaos of launching
              and scaling into clear, actionable steps.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 transition-colors"
            >
              Get the Book
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.button>
            <motion.a
              href="#"
              whileHover={{ x: 4 }}
              className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors font-medium"
            >
              Learn our Method <ArrowUpRight size={15} />
            </motion.a>
          </div>

          {/* Stats row */}
          <div className="flex gap-10 pt-4 border-t border-white/5">
            {[["300+", "Brand Builds"], ["12+", "Years Experience"], ["98%", "Client Satisfaction"]].map(([num, label]) => (
              <div key={label}>
                <div className="text-2xl font-bold text-white">{num}</div>
                <div className="text-xs text-white/30 mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── RIGHT SIDE: Contact Form ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative"
        >
          {/* Card glow border */}
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent pointer-events-none" />

          <div className="relative bg-white/[0.04] backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/[0.08]">

            <div className="mb-8">
              <h2 className="text-xl font-bold text-white tracking-tight">Send a message</h2>
              <p className="text-sm text-white/30 mt-1">We'll get back to you within 24 hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {fields.map(({ name, label, type }) => (
                <div key={name} className="relative">
                  <motion.label
                    animate={{
                      y: focused === name || form[name] ? -22 : 0,
                      scale: focused === name || form[name] ? 0.78 : 1,
                      color: focused === name ? "#a5f3fc" : "rgba(255,255,255,0.3)",
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-3 text-sm origin-left pointer-events-none font-medium"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                  >
                    {label}
                  </motion.label>

                  {type === "input" ? (
                    <input
                      type={name === "email" ? "email" : "text"}
                      name={name}
                      value={form[name]}
                      onChange={handleChange}
                      onFocus={() => setFocused(name)}
                      onBlur={() => setFocused(null)}
                      className="w-full bg-transparent border-b border-white/10 pt-7 pb-2 text-white text-sm outline-none
                                 focus:border-cyan-300/50 transition-colors duration-200 placeholder-transparent"
                    />
                  ) : (
                    <textarea
                      name={name}
                      rows={4}
                      value={form[name]}
                      onChange={handleChange}
                      onFocus={() => setFocused(name)}
                      onBlur={() => setFocused(null)}
                      className="w-full bg-transparent border-b border-white/10 pt-7 pb-2 text-white text-sm outline-none
                                 focus:border-cyan-300/50 transition-colors duration-200 resize-none placeholder-transparent"
                    />
                  )}

                  {/* Animated underline on focus */}
                  <motion.div
                    animate={{ scaleX: focused === name ? 1 : 0 }}
                    initial={{ scaleX: 0 }}
                    transition={{ duration: 0.25 }}
                    className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-cyan-300 to-blue-400 origin-left"
                  />
                </div>
              ))}

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="mt-4 w-full flex items-center justify-center gap-2.5 py-4 rounded-xl
                           bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500
                           text-white text-sm font-semibold tracking-wide border border-white/10
                           transition-all duration-200 group"
              >
                {submitted ? (
                  <span className="text-emerald-400">✓ Message Sent!</span>
                ) : (
                  <>
                    Send Message
                    <Send size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactForm;