import React from "react";
import CultureAbout from "./CultureAbout";
import FirstSectionabout from "./FirstSectionabout";
import SecondSectionabout from "./SecondSectionabout";
import ThirdSectionabout from "./ThirdSectionabout";
import SeereonStats from "./SeereonStats";
import SeereonMissionVision from "./SeereonMissionVision";
import Footer from "../../components/Footer";

const AboutUs = () => {
  return (
    <>
      <CultureAbout />
      <FirstSectionabout />
      <SecondSectionabout />
      <ThirdSectionabout />
      <SeereonStats />
      <SeereonMissionVision />
      <Footer />
    </>
  );
};

export default AboutUs;
