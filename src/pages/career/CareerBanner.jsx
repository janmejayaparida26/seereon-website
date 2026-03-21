import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CareerBanner() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    /* Fix: Changed bg to black and ensured mt-0 to eliminate the top gap */
    <section className="px-0 py-0 mt-0 bg-black overflow-hidden">

      <div
        ref={ref}
        className="relative w-full h-[420px] overflow-hidden flex items-center justify-center"
      >

        {/* Fix: Increased height and scale to provide coverage during parallax motion */}
        <motion.img
          style={{ y: imageY, scale: 1.1 }}
          src="https://plus.unsplash.com/premium_photo-1769788976249-9f0b048db31a?q=80&w=1482&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Contact"
          className="absolute inset-0 w-full h-[130%] object-cover pointer-events-none"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Fix: Merged textY and fontSize into a single style object to avoid Vite errors */}
        <motion.h1
          style={{ fontSize: "clamp(40px, 8vw, 90px)" }}
          className="relative z-10 text-white font-medium text-center"
        >
          Career
        </motion.h1>

      </div>

    </section>
  );
}