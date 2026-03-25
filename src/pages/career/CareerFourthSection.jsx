import { ScrollFillText } from "../../components/ScrollFillText";

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
  // REPLACE THIS WITH YOUR ACTUAL GOOGLE FORM LINK
  const googleFormUrl = "https://forms.google.com/your-form-id";

  return (
    <section className="bg-white py-20 pt-40 px-6 md:px-12 lg:px-24">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl lg:text-6xl font-['Arimo',sans-serif] font-semibold text-gray-900 tracking-tight mb-6">
         <ScrollFillText>We are looking for</ScrollFillText>
        </h2>
        <p className="text-base md:text-lg font-['Arimo',sans-serif] text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Join Seereon and work on building scalable software systems and enterprise-grade solutions. <br className="hidden md:block" />
          Applications are reviewed on a rolling basis.
        </p>
      </div>

      {/* Cohort List Card */}
      <div className="max-w-7xl mx-auto border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
        {cohorts.map((cohort, index) => (
          <div
            key={cohort.id}
            className={`flex flex-col md:flex-row items-start md:items-center gap-6 px-6 md:px-8 py-8 ${
              index !== cohorts.length - 1 ? "border-b border-gray-200" : ""
            } hover:bg-gray-50 transition-colors`}
          >
            {/* Thumbnail */}
            <div className="w-16 h-16 md:w-24 md:h-24 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center border border-gray-100">
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
                  e.target.parentElement.innerHTML = `<span class="text-[10px] font-bold tracking-widest text-green-500 text-center px-2">SEEREON</span>`;
                }}
              />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                  {cohort.title}
                </h3>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gray-200 text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse" />
                  {cohort.badge}
                </span>
              </div>
              <p className="text-sm md:text-base text-gray-500 font-medium">{cohort.program}</p>
            </div>

            {/* CTA */}
            <div className="flex-shrink-0 w-full md:w-auto mt-4 md:mt-0">
              <a 
                href={"https://docs.google.com/forms/d/e/1FAIpQLScZJc_GKMJg9Ln1G_wY5O5jhaiAmFy9Phhc9-0UWIR07BVqiA/viewform?usp=sharing&ouid=116850919341905957665"}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-8 py-3 bg-gray-900 text-white text-sm font-bold rounded-xl hover:bg-[#019e18] hover:scale-105 transition-all duration-300 no-underline shadow-lg shadow-gray-200"
              >
                Apply Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerFourthSection;