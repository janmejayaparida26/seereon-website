const steps = [
  {
    title: "Foundation & Learning (Month 01-02)",
    description:
      "You go through a structured, module-based learning journey covering software engineering fundamentals, system design principles, and modern development practices. Guided sessions, technical exercises, and continuous evaluations ensure strong conceptual clarity and practical understanding.",
  },
  {
    title: "Build & Collaborate (Month 02-03)",
    description:
      "You work in teams to build real-world software systems, focusing on architecture, development, and deployment. Mentors guide you through code reviews, feedback cycles, and best practices to ensure your work meets professional standards.",
  },
  {
    title: "Deploy & Deliver (Month 03)",
    description:
      "You finalize your project, prepare technical documentation, and deploy your solution. You gain hands-on experience in presenting your work, understanding production environments, and delivering systems ready for real-world use.",
  },
];

const CareerFirstSection = () => {
  return (
    <section className="bg-white p my-20 px-6 md:px-12 lg:px-24">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-5xl md:text-6xl font-['Arimo',sans-serif] font-semibold text-gray-900 tracking-tight mb-4">
          How it works?
        </h2>
        <p className="text-base font-['Arimo',sans-serif] text-gray-500">
          A structured, outcome-driven journey designed to build real-world engineering capabilities.
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

export default CareerFirstSection;