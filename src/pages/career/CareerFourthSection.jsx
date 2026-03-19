const cohorts = [
  {
    id: 1,
    image: "/cohort-feb.png",
    title: "Business Development Executive",
    badge: "Open-Position",
    program: "Enterprise Technology Solutions",
  },
  {
    id: 2,
    image: "/cohort-feb.png",
    title: "Business Development Manager",
    badge: "Open-Position",
    program: "Enterprise Technology Solutions",
  },
  {
    id: 3,
    image: "/cohort-feb.png",
    title: "Jr. Software Associate Trainee",
    badge: "Open-Position",
    program: "Software Engineering",
  },
  {
    id: 5,
    image: "/cohort-feb.png",
    title: "MERN Stack Developer",
    badge: "Open-Position",
    program: "Full Stack Development",
  },
  {
    id: 6,
    image: "/cohort-feb.png",
    title: "SAP ABAP Trainee",
    badge: "Open-Position",
    program: "Enterprise Application Development",
  },
  {
    id: 7,
    image: "/cohort-feb.png",
    title: "Front Desk Associate",
    badge: "Open-Position",
    program: "Operations",
  },
];

const CareerFourthSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl md:text-6xl lg:text-6xl font-['Arimo',sans-serif] font-semibold text-gray-900 tracking-tight mb-4">
          We are looking for
        </h2>
        <p className="text-base font-['Arimo',sans-serif] text-gray-500">
          Join Seereon and work on building scalable software systems and enterprise-grade solutions. <br />Applications are reviewed on a rolling basis.
        </p>
      </div>

      {/* Cohort List Card */}
      <div className="max-w-7xl mx-auto border border-gray-200 rounded-2xl overflow-hidden">
        {cohorts.map((cohort, index) => (
          <div
            key={cohort.id}
            className={`flex items-center gap-6 px-8 py-7 ${
              index !== cohorts.length - 1 ? "border-b border-gray-200" : ""
            }`}
          >
            {/* Thumbnail */}
            <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
              <img
                src={cohort.image}
                alt={cohort.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.classList.add(
                    "bg-[#080808]",
                    "flex",
                    "items-center",
                    "justify-center"
                  );
                  // Replaced "ONEDESIGN" with "SEEREON"
                  e.target.parentElement.innerHTML = `<span class="text-[10px] font-bold tracking-widest text-green-500 text-center px-2">SEEREON</span>`;
                }}
              />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {cohort.title}
                </h3>
                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full border border-gray-300 text-xs text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-800 inline-block" />
                  {cohort.badge}
                </span>
              </div>
              <p className="text-sm text-gray-500">{cohort.program}</p>
            </div>

            {/* Date & Price - Kept structure but ensured clean spacing */}
            <div className="text-right flex-shrink-0 w-32">
              <p className="text-sm text-gray-500">{cohort.startDate}</p>
              <p className="text-base font-semibold text-gray-900 mt-1">
                {cohort.price}
              </p>
            </div>

            {/* CTA */}
            <div className="flex-shrink-0">
              <button className="px-6 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-700 transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerFourthSection;