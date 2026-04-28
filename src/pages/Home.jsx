import React from 'react'
import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import AboutSection from '../components/AboutSection';
import MarqueeSection from '../components/MarqueeSection';
import PortfolioSection from '../components/PortfolioSection';
import DesignFuture from '../components/DesignFuture';
import HistorySection from '../components/HistorySection';
import OurSolutions from '../components/OurSolutions';
import ZoomScroll from '../components/ZoomScroll';
import MarqueeBrand from '../components/MarqueeBrand';
import Testimonial from '../components/Testimonial';
import ScheduleCall from '../components/ScheduleCall';
import Footer from '../components/Footer';
import SolutionsHeading from '../components/SolutionsHeading';
import ContactCTA from '../components/ContactCTA';

import { Helmet } from 'react-helmet-async';

function Home() {
  return (
<>
  <Helmet>
        <title>SAP Consulting | Software Development | Mobile App Solutions – Seereon</title>
        <meta name="description" content="Expert SAP consulting, custom software development, and mobile app solutions by Seereon. Build scalable, high-performance digital systems for your business." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://seereon.co.in/" />
        <meta property="og:title" content="SAP Consulting | Software Development – Seereon" />
        <meta property="og:description" content="Expert SAP consulting, custom software development and mobile app solutions by Seereon." />
        <meta property="og:url" content="https://seereon.co.in/" />
        <meta property="og:type" content="website" />
      </Helmet>
    <div>
    <Navbar />
    <HeroBanner />
    <AboutSection />
    <MarqueeSection />
    <PortfolioSection />
    <DesignFuture />
    <HistorySection />
    <SolutionsHeading />
    <OurSolutions />
    <ZoomScroll />
    <MarqueeBrand />
    <Testimonial />
    <ScheduleCall />
    <ContactCTA />
    <Footer />
    </div>
    </>
  )
}

export default Home