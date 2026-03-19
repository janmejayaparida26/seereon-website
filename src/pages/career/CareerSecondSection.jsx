const steps = [
  {
    title: "Foundation & Learning (Month 01-02)",
    description:
      "Gain a strong understanding of software development fundamentals, system architecture, and engineering best practices.",
  },
  {
    title: "Build & Collaborate (Month 02-03)",
    description:
      "Apply your knowledge by building scalable systems, working with teams, and following structured development workflows.",
  },
  {
    title: "Deploy & Deliver (Month 03)",
    description:
      "Learn deployment strategies, system optimization, and how to deliver production-ready applications with confidence.",
  },
];

const CareerSecondSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-5xl md:text-6xl font-['Arimo',sans-serif] font-semibold text-gray-900 tracking-tight mb-4">
          What will you learn?
        </h2>
        <p className="text-base font-['Arimo',sans-serif] text-gray-500">
          Structured learning combined with hands-on execution, resulting in practical deliverables at every stage.
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

export default CareerSecondSection;