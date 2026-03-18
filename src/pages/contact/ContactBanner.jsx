import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CultureSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section className="px-6 py-16 mt-10 bg-[#f0f0f0]">

      <div
        ref={ref}
        className="relative w-full h-[420px] overflow-hidden rounded-[40px]"
      >

        {/* Background Image */}
        <motion.img
          style={{ y: imageY }}
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Contact"
          className="absolute inset-0 w-full h-[120%] object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Center Text */}
        <motion.h1
          style={{ }}
          className="absolute inset-0 flex items-center justify-center text-white text-[90px] font-medium"
        >
          Contact
        </motion.h1>

      </div>

    </section>
  );
}