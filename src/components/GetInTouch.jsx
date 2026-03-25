import React from 'react';

// Individual card component
const LocationCard = ({ city, address, icon, link }) => (
  <a 
    href={link} 
    target={city === "Location" ? "_blank" : "_self"} 
    rel="noopener noreferrer"
    className="bg-white p-8 rounded-[10px] flex items-center gap-6 w-full no-underline group transition-all duration-300 hover:shadow-md hover:-translate-y-1"
  >
    <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 flex items-center justify-center">
      <img src={icon} alt={city} className="w-full h-full object-contain" />
    </div>
    <div className="min-w-0">
      {/* <h4 className="text-gray-300 font-['Arimo',sans-serif] font-medium text-sm md:text-base mb-1">We are here</h4> */}
      <h3 className="text-2xl md:text-3xl font-['Arimo',sans-serif] font-bold tracking-tight text-black mb-1">{city}</h3>
      <p className="text-sm md:text-base text-gray-500 leading-tight font-['Arimo',sans-serif] font-medium truncate group-hover:text-black transition-colors">
        {address}
      </p>
    </div>
  </a>
);

// Main section rendering the 3 cards in a single row
const LocationSection = () => {
  const locations = [
    { 
      city: "Phone", 
      address: "+91-9090705533", 
      icon: "https://www.svgrepo.com/show/520583/call.svg",
      link: "tel:+919090705533" 
    },
    { 
      city: "Email", 
      address: "info@seereon.co.in", 
      icon: "https://www.svgrepo.com/show/434378/email.svg",
      link: "mailto:info@seereon.co.in" 
    },
    { 
      city: "Location", 
      address: "Bhubaneswar, Odisha 751003, India", 
      icon: "https://www.svgrepo.com/show/432221/location-on.svg",
      link: "https://www.google.com/maps/dir/20.2964992,85.8587136/Seereon+Consulting+%26+IT+Services+Pvt.+Ltd.,+Sai+Vihar,+75+%2F+2,+Ln+11D,+Durga+Madhab+Nagar,+Bharatpur,+Bhubaneswar,+Odisha+751003/@20.2845771,85.7349243,12z/data=!4m10!4m9!1m1!4e1!1m5!1m1!1s0x650f938b0fdb31e5:0x95d9a51052b2b0b5!2m2!1d85.7749941!2d20.2976513!3e0?entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D" 
    },
  ];

  return (
    <section className="bg-[#f3f3f3] py-20 px-6">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {locations.map((loc, idx) => (
          <LocationCard key={idx} {...loc} />
        ))}
      </div>
    </section>
  );
};

export default LocationSection;