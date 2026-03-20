import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function LogoZoomSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.3, 1.9]);

  return (
    <section
      ref={ref}
      className="h-[80vh] w-full bg-[#fff] flex items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ scale }}
        className="w-full h-full flex items-center justify-center"
      >
        <video
          src="https://res.cloudinary.com/dcc7qgxmb/video/upload/v1773825456/From_Main_Klickpin_CF-_The_Peter_Principle_Understand_Why_Employees_Fail_to_Succeed_-_5Jjg4vYxx_l0ekzn.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
}