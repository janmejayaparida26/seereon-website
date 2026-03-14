import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
  const text = "We are Seereon"; 

  return (
    <div className="w-full overflow-hidden bg-[#222222] !pt-60 !pb-10 text-white">
      <motion.div 
        // Added 'gap-x-24' for space between repeating blocks
        className="flex gap-x-14 whitespace-nowrap !text-9xl font-['Arimo',sans-serif] font-bold tracking-tighter"
        initial={{ x: 0 }}
        animate={{ x: "-50%" }} 
        transition={{ 
          duration: 20, 
          ease: "linear", 
          repeat: Infinity 
        }}
      >
        {[...Array(9)].map((_, i) => (
          <span key={i} className="flex gap-x-8">
            {/* Split the text to control internal word spacing if needed */}
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