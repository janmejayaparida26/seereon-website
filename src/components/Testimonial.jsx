import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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

const TestimonialStack = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-[#222222]">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        <div className="relative h-[550px] w-[850px]">
          {testimonials.map((item, i) => {
            const startScroll = i * 0.12; 
            const endScroll = startScroll + 0.25;

            const getStartPosition = (index) => {
                const positions = [
                    { x: -800, y: 300, r: -30 }, 
                    { x: 800, y: -200, r: 30 },  
                    { x: 200, y: 900, r: 15 },   
                    { x: -900, y: -400, r: -40 }, 
                    { x: 900, y: 500, r: 45 },    
                    { x: 0, y: -1000, r: 0 }      
                ];
                return positions[index] || { x: 500, y: 500, r: 20 };
            };

            const pos = getStartPosition(i);
            const xOffset = i * 40; 

            const x = useTransform(scrollYProgress, [startScroll, endScroll], [pos.x, xOffset]);
            const y = useTransform(scrollYProgress, [startScroll, endScroll], [pos.y, 0]);
            const rotate = useTransform(scrollYProgress, [startScroll, endScroll], [pos.r, 0]);
            const opacity = useTransform(scrollYProgress, [startScroll, startScroll + 0.08], [0, 1]);
            const scale = useTransform(scrollYProgress, [startScroll, endScroll], [0.7, 1]);

            return (
              <motion.div
                key={i}
                style={{ 
                    x, 
                    y, 
                    rotate, 
                    opacity, 
                    scale, 
                    zIndex: i,
                    backgroundColor: item.color.startsWith('#') ? item.color : undefined 
                }}
                className={`absolute left-0 top-10 h-[520px] w-[580px] rounded-[35px] p-12 shadow-2xl flex flex-col justify-start ${item.color.startsWith('bg-') ? item.color : ''}`}
              >
                <div className="h-24 w-24 overflow-hidden rounded-full mb-6 border-4 border-white/20">
                  <img src={item.img} alt={item.quote} className="h-full w-full object-cover grayscale-[0.2]" />
                </div>

                <h3 className="text-[32px] font-['Arimo',sans-serif] font-extrabold leading-[1.1] text-black tracking-tight mb-6">
                  "{item.quote}"
                </h3>

                <p className="text-[18px] leading-[1.5] text-black/70 font-normal font-['Arimo',sans-serif]">
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