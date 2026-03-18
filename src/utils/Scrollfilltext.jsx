import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * ScrollFillText — Reusable scroll-driven word-fill animation.
 *
 * Props:
 *  - as         : HTML tag or component to render (default: "h2")
 *  - children   : Must be a plain string
 *  - className  : Tailwind / CSS classes passed to the wrapper element
 *  - style      : Inline styles passed to the wrapper element
 *  - startOffset: When animation begins   (default: "start 0.9")
 *  - endOffset  : When animation ends     (default: "start 0.4")
 *  - fadeFrom   : Starting opacity of each word (default: 0.2)
 *
 * Usage examples:
 *
 *  // Basic heading
 *  <ScrollFillText as="h1" className="text-6xl font-bold">
 *    We Don't Just Hire Engineers — We Build a Crew of Visionaries
 *  </ScrollFillText>
 *
 *  // Custom trigger window
 *  <ScrollFillText as="p" startOffset="start 0.8" endOffset="start 0.3">
 *    Some paragraph text that fills in on scroll.
 *  </ScrollFillText>
 *
 *  // With inline styles
 *  <ScrollFillText as="h2" style={{ fontSize: 70, color: "#111" }}>
 *    Your heading here
 *  </ScrollFillText>
 */
export function ScrollFillText({
  as: Tag = "h2",
  children,
  className = "",
  style = {},
  startOffset = "start 0.9",
  endOffset = "start 0.4",
  fadeFrom = 0.2,
}) {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: [startOffset, endOffset],
  });

  // Safety: if children isn't a plain string, render as-is
  if (typeof children !== "string") {
    return (
      <Tag ref={targetRef} className={className} style={style}>
        {children}
      </Tag>
    );
  }

  const words = children.split(" ");

  return (
    <Tag
      ref={targetRef}
      className={className}
      style={{ display: "inline-flex", flexWrap: "wrap", ...style }}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <ScrollWord
            key={i}
            progress={scrollYProgress}
            range={[start, end]}
            fadeFrom={fadeFrom}
          >
            {word}
          </ScrollWord>
        );
      })}
    </Tag>
  );
}

// ─── Internal word unit ────────────────────────────────────────
function ScrollWord({ children, progress, range, fadeFrom }) {
  const opacity = useTransform(progress, range, [fadeFrom, 1]);

  return (
    <span
      style={{
        position: "relative",
        display: "inline-block",
        marginRight: "0.25em",
      }}
    >
      {/* Ghost layer — always visible at low opacity to show placeholder */}
      <span style={{ opacity: fadeFrom }} aria-hidden="true">
        {children}
      </span>
      {/* Fill layer — animates to full opacity on scroll */}
      <motion.span style={{ opacity, position: "absolute", left: 0, top: 0 }}>
        {children}
      </motion.span>
    </span>
  );
}
