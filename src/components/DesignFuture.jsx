import React from 'react';
import { ScrollFillText } from "./ScrollFillText";



const DesignFuture = () => {
  return (
    <section className="w-full bg-[#f0f0f0] !py-30 px-6 flex justify-center">
      <div className="max-w-6xl text-center">

        {/* Heading */}
        <h1 className="text-[90px] leading-[1.05] font-['Arimo',sans-serif] font-semibold text-black mb-05">
        <ScrollFillText>Technology Built Around<br /> Your Business</ScrollFillText>
        </h1>

        {/* Subheading */}
        <p className="text-[26px] font-['Arimo',sans-serif] font-medium text-black !pb-0 !pt-15">
          We build founders, and brands for them!
        </p>

        {/* Description */}
        <p className="text-[18px] font-['Arimo',sans-serif] leading-[1.7] px-10  text-black/80">
          SEEREON is a technology partner focused on delivering scalable, high-performance software systems for enterprises.
          We go beyond development by aligning every solution with your business goals—ensuring that the systems we build are not only functional, but strategically impactful and future-ready.
          Our approach combines structured engineering, modern technologies, and deep understanding of business workflows.
        </p>

      </div>
    </section>

  );
};

export default DesignFuture;