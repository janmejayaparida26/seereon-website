import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
  const text = "We are Seereon"; 

  return (
    <div className="w-full overflow-hidden bg-[#222222] pt-24 pb-10 md:pt-60 md:pb-10 text-white">
      <motion.div 
        className="flex gap-x-10 md:gap-x-14 whitespace-nowrap font-['Arimo',sans-serif] font-bold tracking-tighter"
        style={{ 
          // Responsive Font Size: Min 60px, Scalable 12vw, Max 150px (9xl equivalent)
          fontSize: "clamp(60px, 12vw, 150px)",
          lineHeight: "1"
        }}
        initial={{ x: 0 }}
        animate={{ x: "-50%" }} 
        transition={{ 
          duration: 5, 
          ease: "linear", 
          repeat: Infinity 
        }}
      >
        {[...Array(9)].map((_, i) => (
          <span key={i} className="flex gap-x-4 md:gap-x-8">
            {text.split(" ").map((word, index) => (
              <span key={index}>{word}</span>
            ))}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;