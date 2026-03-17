import React from "react";
import CultureAbout from "./CultureAbout";
import FirstSectionabout from "./FirstSectionabout";
import SecondSectionabout from "./SecondSectionabout";
import ThirdSectionabout from "./ThirdSectionabout";
import SeereonStats from "./SeereonStats";
import SeereonMissionVision from "./SeereonMissionVision";
import Footer from "../../components/Footer";
import FoundersCorner from "./FoundersCorner";

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
      <Footer />
    </>
  );
};

export default AboutUs;
