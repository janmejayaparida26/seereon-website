import React from 'react';

const ContactMapSection = () => {
  // Replace this with your actual Google Maps embed link or place coordinate
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.063192921663!2d85.7749941!3d20.297651299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x650f938b0fdb31e5%3A0x95d9a51052b2b0b5!2sSeereon%20Consulting%20%26%20IT%20Services%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1773559994363!5m2!1sen!2sin";

  return (
    <section className="relative w-full h-[350px] bg-gray-100 font-sans border border-gray-300">
      {/* The Map */}
      <iframe
        title="Location Map"
        src={mapEmbedUrl}
        className="w-full h-full grayscale-[20%] contrast-[90%]"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* Floating Info Card */}
    </section>
  );
};

export default ContactMapSection;