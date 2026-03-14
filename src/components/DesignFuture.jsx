import React from 'react';

const DesignFuture = () => {
  return (
    <section className="w-full bg-[#f0f0f0] !py-48 px-6 flex justify-center">
      <div className="max-w-5xl text-center">

        {/* Heading */}
        <h1 className="text-[110px] leading-[1.05] font-['Arimo',sans-serif] font-semibold text-black mb-10">
          We design the
          <br />
          future with you!
        </h1>

        {/* Subheading */}
        <p className="text-[26px] font-['Arimo',sans-serif] font-medium text-black !pb-0 !pt-15">
          We build founders, and brands for them!
        </p>

        {/* Description */}
        <p className="text-[18px] font-['Arimo',sans-serif] leading-[1.7] text-black/80">
          SEEREON is a forward-thinking technology partner that empowers businesses 
          to envision and build their digital future. We help organizations unlock excellence, 
          articulate their digital presence, and step into the next era with scalable software 
          and strategic IT solutions. Our work goes beyond simple coding—it fosters innovation-led 
          momentum, equips brands with future-ready tools, and defines pathways for sustainable digital success.
        </p>

      </div>
    </section>

  );
};

export default DesignFuture;