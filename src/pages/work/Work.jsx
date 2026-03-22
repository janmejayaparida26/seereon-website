import React from 'react'
import WorkBanner from "./WorkBanner";
import OurTechstack from "./OurTechstack";
import OurProjects from "./OurProjects";
import ScheduleCall from "../../components/ScheduleCall";
import ContactCTA from "../../components/ContactCTA";
import Footer from '../../components/Footer';

const  Work = () => {
  return (
        <>
      <WorkBanner />
      <OurTechstack />
      <OurProjects />
      <ScheduleCall />
      <ContactCTA />
      <Footer />
    </>
  );
};

export default Work;