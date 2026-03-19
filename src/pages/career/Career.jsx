import React from 'react'
import CareerBanner from './CareerBanner'
import CareerFirstSection from './CareerFirstSection';
import CareerSecondSection from './CareerSecondSection';
import CareerThirdSection from './CareerThirdSection';
import CareerFourthSection from './CareerFourthSection';
import CareerFifthSection from './CareerFifthSection';
import Footer from '../../components/Footer';
import ScheduleCall from '../../components/ScheduleCall';
import ContactCTA from '../../components/ContactCTA';

function Career() {
  return (
    <>
    <CareerBanner />
    <CareerFirstSection />
    <CareerSecondSection />
    <CareerThirdSection />
    <CareerFourthSection />
    <CareerFifthSection />
    <ScheduleCall />
    <ContactCTA />
    <Footer />
    </>
  )
}

export default Career