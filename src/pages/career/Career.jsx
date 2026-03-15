import React from 'react'
import CareerBanner from './CareerBanner'
import CareerFirstSection from './CareerFirstSection';
import CareerSecondSection from './CareerSecondSection';
import CareerThirdSection from './CareerThirdSection';
import CareerFourthSection from './CareerFourthSection';
import CareerFifthSection from './CareerFifthSection';
import Footer from '../../components/Footer';

function Career() {
  return (
    <>
    <CareerBanner />
    <CareerFirstSection />
    <CareerSecondSection />
    <CareerThirdSection />
    <CareerFourthSection />
    <CareerFifthSection />
    <Footer />
    </>
  )
}

export default Career