import React from 'react'
import ContactBanner from './ContactBanner';
import GetInTouch from '../../components/GetInTouch';
import ContactForm from './ContactForm';
import Footer from '../../components/Footer';
import ContactMapSection from './ContactMapSection';

function Contact() {
  return (
    <div>
    <ContactBanner />
    <GetInTouch />
    <ContactForm />
    <ContactMapSection />
    <Footer />
    </div>
  )
}

export default Contact