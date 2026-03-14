export default function StatsSection() {
  const stats = [
    {
      number: "50+",
      title: "Awesome clients",
      desc: "in India and around the world",
    },
    {
      number: "100+",
      title: "Created projects",
      desc: "working with us across all timezones",
    },
    {
      number: "15M+",
      title: "Lives Impacted",
      desc: "through strategic establishments globally",
    },
    {
      number: "10+",
      title: "Years of Experience",
      desc: "helping founders realise their dreams",
    },
  ];

  return (
    <section className="w-full bg-[#f0f0f0] py-28 px-6 !pb-50 flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-2 gap-y-28 gap-x-20">

        {stats.map((item, index) => (
          <div key={index} className="text-center">
            
            {/* Number */}
            <h2 className="text-[90px] font-['Arimo',sans-serif] font-semibold leading-none text-black">
              {item.number}
            </h2>

            {/* Title */}
            <p className="mt-3 font-['Arimo',sans-serif] !text-[18px] !pt-5 font-bold text-black">
              {item.title}
            </p>

            {/* Description */}
            <p className="text-[16px] font-['Arimo',sans-serif] text-black/70 mt-1">
              {item.desc}
            </p>

            {/* Divider */}
            <div className="!mt-7 h-[.7px] bg-black/20 w-full"></div>

          </div>
        ))}

      </div>
    </section>
  );
}