import React from 'react';
import Hero from './components/Hero';
import Trust from './components/Trust';
import MeetEase from './components/MeetEase';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import TestimonialMarquee from './components/TestimonialMarquee';
import AIIMSStudy from './components/AIIMSStudy';
import FAQ from './components/FAQ';
import PartneredDoctors from './components/PartneredDoctors';
import PartneredDoctorsBottom from './components/PartneredDoctorsBottom';
import FinalCTA from './components/FinalCTA';

function App() {
  return (
    <div className="font-sans">
      <Hero />
      <Trust />
      <MeetEase />
      <Stats />
      <HowItWorks />
      <Testimonials />
      <TestimonialMarquee />
      <PartneredDoctors />
      <FAQ />
      <FinalCTA />
      <AIIMSStudy />
      <PartneredDoctorsBottom />
    </div>
  );
}

export default App;
