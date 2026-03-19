import React from "react";
import CultureAbout from "./CultureAbout";
import FirstSectionabout from "./FirstSectionabout";
import SecondSectionabout from "./SecondSectionabout";
import ThirdSectionabout from "./ThirdSectionabout";
import SeereonStats from "./SeereonStats";
import SeereonMissionVision from "./SeereonMissionVision";
import Footer from "../../components/Footer";
import FoundersCorner from "./FoundersCorner";
import ScheduleCall from "../../components/ScheduleCall";
import ContactCTA from "../../components/ContactCTA";

const AboutUs = () => {
  return (
    <>
      <CultureAbout />
      <FirstSectionabout />
      <SecondSectionabout />
      <ThirdSectionabout />
      <FoundersCorner />
      <SeereonStats />
      <SeereonMissionVision />
      <ScheduleCall />
      <ContactCTA />
      <Footer />
    </>
  );
};

export default AboutUs;
