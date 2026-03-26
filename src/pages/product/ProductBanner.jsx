import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ProductBanner = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax effects optimized for smooth transitions
  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0.4, 0.7], [1, 0.4]);

  return (
    <section className="relative w-full overflow-hidden bg-black mt-0">
      <div
        ref={ref}
        /* Responsive Heights: Consistent with Service, About, and Work banners */
        className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden flex items-center justify-center"
      >
        {/* Background Image - Scale and height adjusted for maximum parallax coverage */}
        <motion.img
          style={{ y: imageY, scale: 1.15 }}
          src="https://images.unsplash.com/photo-1731444008589-9922140dfb0f?q=80&w=2070&auto=format&fit=crop"
          alt="Products"
          className="absolute inset-0 w-full h-[140%] object-cover pointer-events-none"
        />

        {/* Dark Overlay for consistent text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80"></div>

        {/* Fluid Typography and Content Container */}
        <motion.div 
          className="relative z-10 flex flex-col items-center px-4"
          style={{ opacity }}
        >
          <h1 className="text-white text-5xl sm:text-7xl lg:text-8xl xl:text-8xl font-['Arimo',sans-serif] font-bold text-center tracking-tighter select-none">
            Products
          </h1>
          
          {/* Breadcrumb indicator with brand gold dot */}
          {/* <div className="mt-4 flex items-center gap-3 text-white/50 text-[10px] sm:text-xs uppercase tracking-[0.3em] font-bold">
            <span className="hover:text-white transition-colors cursor-pointer">Home</span>
            <span className="w-1 h-1 rounded-full bg-[#dbb34e]"></span>
            <span className="text-white">Products</span>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductBanner;