import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Universal Scroll Reveal Component
 * Usage: <ScrollFillText as="h1" className="...">Your Text</ScrollFillText>
 */
export const ScrollFillText = ({ as: Tag = "h2", children, className }) => {
  const targetRef = useRef(null);

  // Tracks scroll progress for the specific heading
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // starts when the top of the text is 90% down the screen
    // ends when the top of the text reaches 40% from the top
    offset: ["start 0.9", "start 0.4"],
  });

  // If children isn't a string (like if it's an object), return it normally to prevent crashes
  if (typeof children !== "string") {
    return <Tag className={className}>{children}</Tag>;
  }

  // Split text into words so they animate one by one
  const words = children.split(" ");

  return (
    <Tag 
      ref={targetRef} 
      className={`flex flex-wrap ${className}`}
      style={{ display: 'inline-flex', flexWrap: 'wrap' }}
    >
      {words.map((word, i) => {
        // This spreads the animation timing across the words
        const start = i / words.length;
        const end = start + 1 / words.length;

        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </Tag>
  );
};

const Word = ({ children, progress, range }) => {
  // Animates from 0.2 opacity (Grey) to 1 (Solid)
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block mr-[0.25em]">
      {/* The "Grey" base layer that stays visible */}
      <span style={{ opacity: 0.2 }} aria-hidden="true">
        {children}
      </span>
      {/* The "White/Black" layer that fills in on scroll */}
      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0 text-current"
      >
        {children}
      </motion.span>
    </span>
  );
};