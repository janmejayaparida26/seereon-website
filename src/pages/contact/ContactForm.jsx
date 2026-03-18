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
    <section className="relative min-h-screen bg-[#0a0a0a] overflow-hidden flex items-center py-20 px-6 md:px-12 lg:px-24 font-['Arimo',sans-serif]">

      {/* Background ambient glow */}
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full bg-[#1a1a2e] blur-[120px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-[#0f2027] blur-[100px] opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* ── LEFT SIDE (Updated to Reference Style) ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] text-white/50 tracking-[0.2em] uppercase font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Direct Collaboration
          </div>

          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white mb-8">
              Build the future of your brand with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/30 italic">
                SEEREON
              </span>
            </h1>
            <p className="text-lg text-white/50 leading-relaxed max-w-lg font-light">
              We don't just build software; we architect growth. Join 50+ clients 
              who have scaled their visions into high-performing digital realities.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-5">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2 px-8 py-4 bg-white text-black text-sm font-bold rounded-full hover:bg-white/90 transition-all shadow-xl shadow-white/5"
            >
              Start a Project
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.button>
            <motion.a
              href="#"
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors font-semibold tracking-wide"
            >
              View Our Method <ArrowUpRight size={16} />
            </motion.a>
          </div>

          {/* Stats row (Updated to match image_a59c02.png) */}
          {/* <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/10">
            {[
              ["50+", "Awesome Clients"], 
              ["2Cr+", "Earnings a Year"], 
              ["100+", "Created Projects"]
            ].map(([num, label]) => (
              <div key={label} className="space-y-1">
                <div className="text-3xl md:text-4xl font-bold text-white tracking-tighter">{num}</div>
                <div className="text-[10px] uppercase tracking-widest text-white/30 font-bold leading-tight">{label}</div>
              </div>
            ))}
          </div> */}
        </motion.div>

        {/* ── RIGHT SIDE: Contact Form ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Card glow border */}
          <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-white/20 via-white/5 to-transparent pointer-events-none" />

          <div className="relative bg-white/[0.03] backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/[0.08] shadow-2xl">

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white tracking-tight">Let's talk business</h2>
              <p className="text-sm text-white/40 mt-2 font-light">Fill out the form below and our team will be in touch.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {fields.map(({ name, label, type }) => (
                <div key={name} className="relative">
                  <motion.label
                    animate={{
                      y: focused === name || form[name] ? -24 : 0,
                      scale: focused === name || form[name] ? 0.8 : 1,
                      color: focused === name ? "#fff" : "rgba(255,255,255,0.3)",
                    }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute left-0 top-3 text-sm origin-left pointer-events-none font-medium tracking-wide"
                  >
                    {label}
                  </motion.label>

                  {type === "input" ? (
                    <input
                      type={name === "email" ? "email" : "text"}
                      name={name}
                      autoComplete="off"
                      value={form[name]}
                      onChange={handleChange}
                      onFocus={() => setFocused(name)}
                      onBlur={() => setFocused(null)}
                      className="w-full bg-transparent border-b border-white/10 pt-8 pb-3 text-white text-base outline-none
                                 focus:border-white transition-colors duration-300 placeholder-transparent"
                    />
                  ) : (
                    <textarea
                      name={name}
                      rows={3}
                      value={form[name]}
                      onChange={handleChange}
                      onFocus={() => setFocused(name)}
                      onBlur={() => setFocused(null)}
                      className="w-full bg-transparent border-b border-white/10 pt-8 pb-3 text-white text-base outline-none
                                 focus:border-white transition-colors duration-300 resize-none placeholder-transparent"
                    />
                  )}

                  {/* Animated underline on focus */}
                  <motion.div
                    animate={{ scaleX: focused === name ? 1 : 0 }}
                    initial={{ scaleX: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute bottom-0 left-0 h-[1.5px] w-full bg-white origin-left"
                  />
                </div>
              ))}

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 w-full flex items-center justify-center gap-3 py-5 rounded-2xl
                           bg-white text-black text-sm font-bold tracking-widest uppercase
                           hover:bg-gray-100 transition-all duration-300 group shadow-lg"
              >
                {submitted ? (
                  <span className="text-emerald-600 flex items-center gap-2">✓ SENT SUCCESSFULLY</span>
                ) : (
                  <>
                    Send Message
                    <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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