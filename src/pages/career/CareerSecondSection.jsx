const steps = [
  {
    title: "Learn the craft (Month 01-02)",
    description:
      "You go through a structured, chapter-by-chapter learning journey covering how brands are built, positioned, differentiated, and prepared for the market. Weekly sessions, quizzes, and Q&As ensure you don't just absorb information.",
  },
  {
    title: "Build in teams (Month 02-03)",
    description:
      "You're grouped into teams and begin crafting a complete D2C brand — from strategy and naming to identity, communication, and product experience. Mentors guide you through reviews, corrections, and feedback loops so your brand takes shape the right way.",
  },
  {
    title: "Pitch & Launch (Month 03)",
    description:
      "You'll prepare a pitch, finalize your brand kit, and pitch to VCs for funding or upload your brand to the ONEDESIGN Marketplace. You learn how to market the brand, talk to buyers, and position it for acquisition — and earn when your brand sells or gets valued.",
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
          Theory‑first, application‑ready. Each month, close with a tangible deliverable.
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