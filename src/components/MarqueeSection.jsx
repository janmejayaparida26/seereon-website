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
  // We double the logos to create a seamless "loop" effect
  const infiniteLogos = [...logos, ...logos];
 
  return (
    <section className="bg-[#f0f0f0] !py-40 !px-10 overflow-hidden">
      {/* Tailwind Config Injection
          This is the "one code" way to handle the keyframes without
          touching external config files.
      */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-infinite-scroll {
            animation: scroll 100s linear infinite;
          }
        `}
      </style>
 
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
         
          {/* Left Side: Heading */}
          <div className="w-full md:w-1/4 flex-shrink-0 text-center md:text-left">
            <h2 className="!text-2.5xl md:text-2xl font-['Arimo',sans-serif] font-bold text-gray-900 leading-[1.1] tracking-tight">
            Advanced tech stacks powering our solutions
            </h2>
          </div>
 
          {/* Right Side: Infinite Scroll Area */}
          <div className="w-full md:w-3/4 relative">
            {/* Gradient Masks (to fade logos in and out at the edges) */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#eeeeee] to-transparent z-10 hidden md:block" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#eeeeee] to-transparent z-10 hidden md:block" />
 
            {/* The Logo Track */}
            <div className="overflow-hidden">
              <div className="flex items-center gap-16 md:gap-24 animate-infinite-scroll whitespace-nowrap w-max">
                {infiniteLogos.map((logo, index) => (
                  <div key={index} className="flex-shrink-0">
                    <img
                      src={logo.url}
                      alt={logo.name}
                      className="h-10 md:h-14 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
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