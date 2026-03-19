import React from "react";
import CultureAboutteam from "./CultureAboutteam";
import TeamPages from "./TeamPages";
import Footer from "../../components/Footer";
import ScheduleCall from "../../components/ScheduleCall";
import ContactCTA from "../../components/ContactCTA";

const TeamPage = () => {
  return (
    <>
      <CultureAboutteam />
      <TeamPages />
      <ScheduleCall />
      <ContactCTA />
      <Footer />
    </>
  );
};

export default TeamPage;
