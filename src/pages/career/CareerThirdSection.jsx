const steps = [
  {
    title: "Foundation & Learning (Month 01-02)",
    description:
      "Ideal for individuals looking to build a strong foundation in software engineering and system design.",
  },
  {
    title: "Build & Collaborate (Month 02-03)",
    description:
      "Suitable for those who want hands-on experience in building real-world applications in a collaborative environment.",
  },
  {
    title: "Deploy & Deliver (Month 03)",
    description:
      "Designed for individuals ready to transition into professional roles with practical, industry-relevant experience.",
  },
];

const CareerThirdSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-5xl md:text-6xl font-['Arimo',sans-serif] font-semibold text-gray-900 tracking-tight mb-4">
          Who is it for?
        </h2>
        <p className="text-base font-['Arimo',sans-serif] text-gray-500">
          For individuals passionate about building scalable systems and working on impactful technology.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto">
        {steps.map((step) => (
          <div
            key={step.title}
            className="border border-gray-200 rounded-2xl p-8"
          >
            <h3 className="text-base font-['Arimo',sans-serif] font-bold text-gray-900 mb-3">
              {step.title}
            </h3>
            <p className="text-sm font-['Arimo',sans-serif] text-gray-600 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerThirdSection;