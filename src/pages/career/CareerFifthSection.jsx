const faqs = [
  {
    question: "Is this mentorship online or in person?",
    answer:
      "It's primarily online with live Q&A and mentor hours. Marketplace day and showcases are hosted virtually.",
  },
  {
    question: "Do I need prior experience?",
    answer:
      "Basic interest in branding, design, or marketing is enough. The programme starts with fundamentals.",
  },
  {
    question: "How do payouts work?",
    answer:
      "When your brand sells on the marketplace or gets invested by a VC, 80% of the sale amount is transferred directly to you. ONEDESIGN retains 20% as platform commission or 5% as VC Fund Commission.",
  },
  {
    question: "What exactly is included for ₹999?",
    answer:
      "Full 3-month cohort access, the ONEDESIGN Brand Book, theory modules, marketplace access, certificate, live training, support and mentor hours. You can also become a part of the ONEDESIGN Creator Community.",
  },
  {
    question: "Can teams continue after the cohort?",
    answer:
      "Absolutely. Many teams choose to iterate and list additional assets based on buyer feedback.",
  },
  {
    question: "What is the weekly time commitment?",
    answer:
      "Expect ~20–26 hours weekly across learning, team work, and critiques. By the end of the cohort, you'd have your brand launched!",
  },
];

const CareerFifthSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 tracking-tight leading-[1.05]">
          Frequently
          <br />
          asked questions
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="border border-gray-200 rounded-2xl px-7 py-6 bg-white"
          >
            <h3 className="text-sm font-bold text-gray-900 mb-2">
              {faq.question}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerFifthSection;