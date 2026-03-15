import React from 'react'
import ContactBanner from './ContactBanner';
import GetInTouch from '../../components/GetInTouch';

import Footer from '../../components/Footer';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <div>
    <ContactBanner />
    <GetInTouch />
    <ContactForm />
    <Footer />
    </div>
  )
}

export default Contact