const faqs = [
  {
    question: "What is the hiring process at Seereon?",
    answer:
      "Our hiring process typically includes an initial screening, a technical assessment, and a final discussion to evaluate your problem-solving approach, technical skills, and cultural fit.",
  },
  {
    question: "Do you offer internships or trainee programs?",
    answer:
      "Yes, we offer internship and trainee opportunities for freshers who are eager to learn, build, and grow in a real engineering environment.",
  },
  {
    question: "Q3. What technologies do you work with?",
    answer:
      "We work with modern tech stacks including web development frameworks, backend systems, cloud technologies, and enterprise solutions like SAP.",
  },
  {
    question: "Is prior experience mandatory to apply?",
    answer:
      "Not always. While some roles require experience, we also hire freshers and trainees who demonstrate strong fundamentals and a willingness to learn.",
  },
  {
    question: "What kind of projects will I work on?",
    answer:
      "You’ll work on scalable software systems, business applications, and performance-driven platforms designed to solve real-world challenges.",
  },
  {
    question: "Do you provide training or mentorship?",
    answer:
      "Yes, we provide hands-on training, guidance from experienced developers, and continuous learning opportunities to help you grow.",
  },
];

const CareerFifthSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-5xl md:text-7xl lg:text-7xl font-['Arimo',sans-serif] font-semibold text-gray-900 tracking-tight leading-[1.05]">
          Frequently
          <br />
          asked questions?
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="border border-gray-200 rounded-2xl px-7 py-6 bg-white"
          >
            <h3 className="text- font-['Arimo',sans-serif] font-bold text-gray-900 mb-2">
              {faq.question}
            </h3>
            <p className="text-sm font-['Arimo',sans-serif] text-gray-500 leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerFifthSection;