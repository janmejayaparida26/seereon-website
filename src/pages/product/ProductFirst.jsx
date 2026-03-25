import React from 'react'
import { motion } from "framer-motion";
import { ScrollFillText } from "../../components/ScrollFillText";

function ProductFirst() {
  return (
        <section className="pt-45 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[48px] md:text-[85px] font-['Arimo',sans-serif] font-medium text-[#111111] leading-[1.1] tracking-tight md:w-2/3"
              >
               <ScrollFillText>Advanced Systems We Build</ScrollFillText>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-gray-500 leading-relaxed md:w-[45%] md:mt-4"
              >
                End-to-end software solutions engineered for scale—from initial concept to long-term evolution. We leverage lean frameworks to align every product with your specific business goals.
              </motion.p>
            </div>
          </div>
        </section>
  )
}

export default ProductFirst