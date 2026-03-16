import React from 'react'
import Navbar from "../components/Navbar";
import HeroBanner from "./components/HeroBanner"
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

function Home() {
  return (
    <div>
    <Navbar />
    <HeroBanner />
    <AboutSection />
    <MarqueeSection />
    <PortfolioSection />
    <DesignFuture />
    <HistorySection />
    <OurSolutions />
    <ZoomScroll />
    <MarqueeBrand />
    <Testimonial />
    <ScheduleCall />
    <Footer />
    </div>
  )
}

export default Home