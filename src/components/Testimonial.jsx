import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const testimonials = [
  { 
    quote: "Sofia Martinez", 
    // name: "Sofia Martinez",
    desc: "I had almost given up on digital marketing after wasting money on campaigns that didn’t bring any value. Seereon changed that perspective. They took the time to analyze my business and created a plan that made sense for my goals, not just generic strategies. Within weeks, I started noticing better engagement and genuine inquiries. The best part was how transparent and approachable the team was — I always knew exactly what was happening behind the scenes. Highly recommend their services.",
    color: "bg-[#FF6B6B]", 
    img: "src/assets/wmremove-transformed (3).jpeg"
  },
  { 
    quote: "Emily Clark", 
    // name: "Harsh Shah", 
    desc: "As someone running a small business, I needed a partner who could guide me through the digital space without overwhelming me. Seereon did exactly that. They simplified the process, helped me identify opportunities I had been missing, and provided a strategy that was easy to follow yet highly effective. What I appreciated most was their genuine interest in my success. It felt like working with a team that cared about my business as much as I do. The results came faster than I expected.",
    color: "bg-[#D4F1A1]", 
    img: "src/assets/wmremove-transformed-1.jpeg"
  },
  { 
    quote: "Michael Turner", 
    // name: "Avi",
    desc: "Working with Seereon has been a game-changer. I’ve collaborated with several agencies before, but what stood out here was their ability to truly understand our goals and translate them into a clear strategy. The team was proactive, kept me updated throughout the process, and delivered results that directly impacted our growth. Their approach is creative yet practical, which is rare to find. I’d recommend them to anyone who wants real, measurable results.",
    color: "bg-[#FFE082]", 
    img: "src/assets/wmremove-transformed-2.jpeg"
  },
];

const TestimonialStack = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-[#222222]">
      <div className="sticky top-10 flex h-screen w-full items-center justify-center overflow-hidden">
        
        {/* Adjusted container width to account for the stagger offset */}
        <div className="relative h-[550px] w-[650px]">
          {testimonials.map((item, i) => {
            const startScroll = i * 0.25;
            const endScroll = startScroll + 0.3;

            // SCATTERED START POSITIONS
            const startX = i === 0 ? -700 : i === 1 ? 700 : 200;
            const startY = i === 2 ? 900 : 300;

            // THE STACK OFFSET: Each card lands 50px further to the right than the last
            const xOffset = i * 50; 

            // TRANSFORMS
            const x = useTransform(scrollYProgress, [startScroll, endScroll], [startX, xOffset]);
            const y = useTransform(scrollYProgress, [startScroll, endScroll], [startY, 0]);
            const rotate = useTransform(scrollYProgress, [startScroll, endScroll], [i === 0 ? -20 : 20, 0]);
            const opacity = useTransform(scrollYProgress, [startScroll, startScroll + 0.1], [0, 1]);
            const scale = useTransform(scrollYProgress, [startScroll, endScroll], [0.8, 1]);

            return (
              <motion.div
                key={i}
                style={{ x, y, rotate, opacity, scale, zIndex: i }}
                className={`absolute left-0 top-0 h-[520px] w-[580px] !px-15 !py-15 rounded-[35px] p-12 shadow-2xl flex flex-col justify-start ${item.color}`}
              >
                {/* Profile Image - Exact match to your image */}
                <div className="h-24 w-24 overflow-hidden rounded-full !mb-3">
                  <img src={item.img} alt={item.name} className="h-full w-full object-cover grayscale-[0.2]" />
                </div>

                {/* Quote - Bold, large, tight leading */}
                <h3 className="text-[32px] font-['Arimo',sans-serif] font-extrabold leading-[1.1] text-black tracking-tight !mb-6">
                  "{item.quote}"
                </h3>

                {/* Description - Same as your image content */}
                <p className="text-[18px] leading-[1.5] text-black/60 font-normal font-['Arimo',sans-serif]">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TestimonialStack;