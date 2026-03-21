import React from 'react'
import WorkBanner from "./WorkBanner";
import OurTechstack from "./OurTechstack";
import OurProjects from "./OurProjects";
import Footer from '../../components/Footer';

const  Work = () => {
  return (
        <>
      <WorkBanner />
      <OurTechstack />
      <OurProjects />
      <Footer />
    </>
  );
};

export default Work;