import React from "react";
import CultureAbout from "./CultureAbout";
import FirstSectionabout from "./FirstSectionabout";
import SecondSectionabout from "./SecondSectionabout";
import ThirdSectionabout from "./ThirdSectionabout";
import SeereonStats from "./SeereonStats";
import SeereonMissionVision from "./SeereonMissionVision";
import Footer from "../../components/Footer";
import FoundersCorner from "./FoundersCorner";
import CoFounder from "./CoFounder";
import ScheduleCall from "../../components/ScheduleCall";
import ContactCTA from "../../components/ContactCTA";


const AboutUs = () => {
  return (
    <>
    <Helmet>  {/* ← Helmet goes HERE, inside return */}
        <title>About Us – Seereon</title>
        <meta name="description" content="Learn about Seereon's team and mission." />
        <link rel="canonical" href="https://seereon.co.in/aboutus" />
      </Helmet>

      <CultureAbout />
      <FirstSectionabout />
      <SecondSectionabout />
      <ThirdSectionabout />
      <FoundersCorner />
      <CoFounder />
      <SeereonStats />
      <SeereonMissionVision />
      <ScheduleCall />
      <ContactCTA />
      <Footer />
    </>
  );
};

export default AboutUs;
