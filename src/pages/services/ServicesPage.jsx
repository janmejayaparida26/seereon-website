import React from "react";
import ServiceBanner from "./ServiceBanner";
import Services from "./Services";
import Footer from "../../components/Footer";
import ScheduleCall from "../../components/ScheduleCall";
import ContactCTA from "../../components/ContactCTA";
const ServicesPage = () => {
  return (
    <>
      <ServiceBanner />
      <Services />
      <ScheduleCall />
      <ContactCTA />
      <Footer />
    </>
  );
};

export default ServicesPage;
