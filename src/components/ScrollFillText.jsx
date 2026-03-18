import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const ScrollFillText = ({ children, className }) => {
  const targetRef = useRef(null);
  
  // 1. Track the scroll progress of this specific element
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // "start 0.9" means start filling when the text is 90% down the screen
    // "start 0.4" means finish filling when it reaches the upper middle
    offset: ["start 0.9", "start 0.4"],
  });

  // 2. Map the scroll progress (0 to 1) to Opacity (0.2 to 1)
  const opacity = useTransform(scrollYProgress, [0, 3], [0.3, 3]);
  
  // 3. Optional: Map scroll to a slight vertical lift for extra polish
  const y = useTransform(scrollYProgress, [0, 1], [10, 0]);

  return (
    <motion.span
      ref={targetRef}
      style={{ opacity, y }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.span>
  );
};