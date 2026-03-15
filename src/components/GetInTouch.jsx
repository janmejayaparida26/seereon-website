import React from 'react';

// Individual card component
const LocationCard = ({ city, address, image,}) => (
  <div className="bg-white p-8 rounded-[30px] flex items-center gap-6 w-full">
    <div className="w-30 h-30 rounded-full overflow-hidden flex-shrink-0">
      <img src={image} alt={city} className="w-full h-full object-cover" />
    </div>
    <div>
      <h4 className="text-gray-200 font-medium text-xl">We are here</h4>
      <h3 className="text-4xl font-medium tracking-tighter mb-2">{city}</h3>
      <p className="text-xs text-gray-500 leading-relaxed mb-4">{address}</p>
      {/* <div className="flex items-center gap-2">
        <span>🇮🇳</span>
        <span className="text-sm font-medium">{lang}</span>
      </div> */}
    </div>
  </div>
);

// Main section rendering the 3 cards in a single row
const LocationSection = () => {
  const locations = [
    { city: "Phone", address: "ONEDESIGN, 3rd Floor, 55, Lane 2, Westend Marg, Saidullajab, Saket, New Delhi 110030, INDIA", image: "https://www.svgrepo.com/show/520583/call.svg" },
    { city: "Email", address: "ONEDESIGN, Tower 2, BKC, Bandra East, Mumbai, Maharashtra 400051", image: "https://www.svgrepo.com/show/434378/email.svg" },
    { city: "Location", address: "ONEDESIGN, Indiranagar, 12th Main Rd, Bangalore, Karnataka 560038", image: "https://www.svgrepo.com/show/432221/location-on.svg" },
  ];

  return (
    <section className="bg-[#f0f0f0] py-20 px-6">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {locations.map((loc, idx) => (
          <LocationCard key={idx} {...loc} />
        ))}
      </div>
    </section>
  );
};

export default LocationSection;