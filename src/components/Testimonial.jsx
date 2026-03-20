import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const testimonials = [
  {
    quote: "Sofia Martinez",
    desc: "I had almost given up on digital marketing after wasting money on campaigns that didn’t bring any value. Seereon changed that perspective. They took the time to analyze my business and created a plan that made sense for my goals, not just generic strategies. Within weeks, I started noticing better engagement and genuine inquiries. The best part was how transparent and approachable the team was — I always knew exactly what was happening behind the scenes. Highly recommend their services.",
    color: "bg-[#F4E9D7]",
    // UPDATED IMAGE 1
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop"
  },
  {
    quote: "Emily Clark",
    desc: "As someone running a small business, I needed a partner who could guide me through the digital space without overwhelming me. Seereon did exactly that. They simplified the process, helped me identify opportunities I had been missing, and provided a strategy that was easy to follow yet highly effective. What I appreciated most was their genuine interest in my success. It felt like working with a team that cared about my business as much as I do. The results came faster than I expected.",
    color: "bg-[#FFDDAB]",
    // UPDATED IMAGE 2
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop"
  },
  {
    quote: "Michael Turner",
    desc: "Working with Seereon has been a game-changer. I’ve collaborated with several agencies before, but what stood out here was their ability to truly understand our goals and translate them into a clear strategy. The team was proactive, kept me updated throughout the process, and delivered results that directly impacted our growth. Their approach is creative yet practical, which is rare to find. I’d recommend them to anyone who wants real, measurable results.",
    color: "bg-[#E9D5DA]",
    // UPDATED IMAGE 3
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop"
  },
  {
    quote: "David Chen",
    desc: "As someone running a small business, I needed a partner who could guide me through the digital space without overwhelming me. Seereon did exactly that. They simplified the process, helped me identify opportunities I had been missing, and provided a strategy that was easy to follow yet highly effective. What I appreciated most was their genuine interest in my success. It felt like working with a team that cared about my business as much as I do. The results came faster than I expected.",
    color: "#D1E9F6",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop"
  },
  {
    quote: "Sarah Jenkins",
    desc: "Working with Seereon has been a game-changer. I’ve collaborated with several agencies before, but what stood out here was their ability to truly understand our goals and translate them into a clear strategy. The team was proactive, kept me updated throughout the process, and delivered results that directly impacted our growth. Their approach is creative yet practical, which is rare to find. I’d recommend them to anyone who wants real, measurable results.",
    color: "bg-[#D8EFD3]",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop"
  },
  {
    quote: "James Wilson",
    desc: "I had almost given up on digital marketing after wasting money on campaigns that didn’t bring any value. Seereon changed that perspective. They took the time to analyze my business and created a plan that made sense for my goals, not just generic strategies. Within weeks, I started noticing better engagement and genuine inquiries. The best part was how transparent and approachable the team was — I always knew exactly what was happening behind the scenes. Highly recommend their services.",
    color: "bg-[#EADBC8]",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop"
  },
];

const TestimonialCard = ({ item, i, scrollYProgress }) => {
  const startScroll = i * 0.12;
  const endScroll = startScroll + 0.25;

  // ✅ Only bottom-to-top animation
  const startY = 600 + i * 120;

  const x = useTransform(scrollYProgress, [startScroll, endScroll], [0, 0]);
  const y = useTransform(scrollYProgress, [startScroll, endScroll], [startY, 0]);
  const rotate = useTransform(scrollYProgress, [startScroll, endScroll], [8, 0]);
  const opacity = useTransform(scrollYProgress, [startScroll, startScroll + 0.08], [0, 1]);
  const scale = useTransform(scrollYProgress, [startScroll, endScroll], [0.85, 1]);

  return (
    <motion.div
      style={{
        x,
        y,
        rotate,
        opacity,
        scale,
        zIndex: i,
        backgroundColor: item.color.startsWith("#") ? item.color : undefined,
      }}
      className={`absolute left-1/2 top-10 -translate-x-1/2
        w-[90vw] max-w-[580px] h-[420px] md:h-[520px]
        rounded-[35px] p-6 md:p-12 shadow-2xl flex flex-col
        ${item.color.startsWith("bg-") ? item.color : ""}`}
    >
      <div className="h-20 w-20 md:h-24 md:w-24 overflow-hidden rounded-full mb-4 md:mb-6 border-4 border-white/20">
        <img src={item.img} alt={item.quote} className="h-full w-full object-cover" />
      </div>

      <h3 className="text-xl md:text-[32px] font-extrabold text-black mb-4">
        "{item.quote}"
      </h3>

      <p className="text-sm md:text-[18px] text-black/70">
        {item.desc}
      </p>
    </motion.div>
  );
};

const TestimonialStack = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-[#222222]">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        
        <div className="relative w-full max-w-[850px] h-[500px] md:h-[550px] px-4">
          
          {testimonials.map((item, i) => (
            <TestimonialCard
              key={i}
              item={item}
              i={i}
              scrollYProgress={scrollYProgress}
            />
          ))}

        </div>

      </div>
    </div>
  );
};

export default TestimonialStack;