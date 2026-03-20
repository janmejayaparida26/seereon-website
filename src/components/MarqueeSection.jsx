import React from 'react';

const logos = [
  { name: "AWS", url: "https://icon.icepanel.io/Technology/png-shadow-512/AWS.png" },
  { name: "Angular", url: "https://icon.icepanel.io/Technology/svg/AngularJS.svg" },
  { name: "Apache", url: "https://icon.icepanel.io/Technology/svg/Apache.svg" },
  { name: "Bootstrap", url: "https://icon.icepanel.io/Technology/svg/Bootstrap.svg" },
  { name: "Canva", url: "https://icon.icepanel.io/Technology/svg/Canva.svg" },
  { name: "Django", url: "https://icon.icepanel.io/Technology/png-shadow-512/Django.png" },
  { name: "Express", url: "https://icon.icepanel.io/Technology/png-shadow-512/Express.png" },
  { name: "Figma", url: "https://icon.icepanel.io/Technology/svg/Figma.svg" },
  { name: "Adobe Illustrator", url: "https://icon.icepanel.io/Technology/svg/Adobe-Illustrator.svg" },
  { name: "JS", url: "https://icon.icepanel.io/Technology/svg/JavaScript.svg" },
  { name: "Jira", url: "https://icon.icepanel.io/Technology/svg/Jira.svg" },
  { name: "Jquerry", url: "https://icon.icepanel.io/Technology/svg/jQuery.svg" },
  { name: "Mongo", url: "https://icon.icepanel.io/Technology/svg/MongoDB.svg" },
  { name: "SQL", url: "https://icon.icepanel.io/Technology/svg/MySQL.svg" },
  { name: "Node", url: "https://icon.icepanel.io/Technology/svg/Node.js.svg" },
  { name: "Photoshop", url: "https://icon.icepanel.io/Technology/svg/Adobe-Photoshop.svg" },
  { name: "PHP", url: "https://icon.icepanel.io/Technology/svg/PHP.svg" },
  { name: "Postgres", url: "https://icon.icepanel.io/Technology/svg/PostgresSQL.svg" },
  { name: "Python", url: "https://icon.icepanel.io/Technology/svg/Python.svg" },
  { name: "React", url: "https://icon.icepanel.io/Technology/svg/React.svg" },
  { name: "Slack", url: "https://icon.icepanel.io/Technology/svg/Slack.svg" },
  { name: "Tailwind", url: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg" },
  { name: "Wordpress", url: "https://icon.icepanel.io/Technology/png-shadow-512/WordPress.png" },
  { name: "Framer", url: "https://img.icons8.com/?size=160&id=js8pNS2UtYKY&format=png" },
  { name: "Shopify", url: "https://img.icons8.com/?size=160&id=BRIdulMG66MK&format=png" },
  { name: "SAP", url: "https://img.icons8.com/?size=96&id=38192&format=png" },
  { name: "Chatgpt", url: "https://img.icons8.com/?size=100&id=FBO05Dys9QCg&format=png" },
  { name: "Gemini", url: "https://img.icons8.com/?size=96&id=rnK88i9FvAFO&format=png" },
  { name: "Claude", url: "https://img.icons8.com/?size=96&id=zQjzFjPpT2Ek&format=png" },
  { name: "Perplexity", url: "https://img.icons8.com/?size=96&id=kzJWN5jCDzpq&format=png" },
  { name: "Wix", url: "https://img.icons8.com/?size=160&id=w9gsKSM38X2h&format=png" },
];

const GlobalLeadersScroll = () => {
  const infiniteLogos = [...logos, ...logos, ...logos];

  return (
    <section className="bg-white py-12 md:py-24 lg:py-32 overflow-hidden w-full">
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
          .animate-infinite-scroll {
            animation: scroll 60s linear infinite;
          }
          @media (max-width: 768px) {
            .animate-infinite-scroll {
              animation: scroll 30s linear infinite;
            }
          }
          .animate-infinite-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Heading Alignment Fix */}
          <div className="w-full lg:w-[30%] text-center lg:text-left px-4 lg:px-0 lg:pl-0">
            <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-900 leading-tight tracking-tight font-['Arimo',sans-serif]">
              Modern Tech Stacks <br className="hidden lg:block"/> 
              <span className="text-gray-500 font-medium">Powering Innovation</span>
            </h2>
          </div>

          {/* Scroll Area */}
          <div className="w-full lg:w-[70%] relative group">
            <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="overflow-hidden">
              <div className="flex items-center gap-10 md:gap-20 animate-infinite-scroll whitespace-nowrap w-max py-4">
                {infiniteLogos.map((logo, index) => (
                  <div key={index} className="flex-shrink-0 transition-transform duration-300 hover:scale-110">
                    <img
                      src={logo.url}
                      alt={logo.name}
                      className="h-8 md:h-12 lg:h-12 w-auto object-contain filter drop-shadow-sm hover:saturate-150 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GlobalLeadersScroll;