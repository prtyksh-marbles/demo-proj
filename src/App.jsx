import React from 'react';
import Hero from './components/Hero';
import Trust from './components/Trust';
import MeetEase from './components/MeetEase';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import TestimonialMarquee from './components/TestimonialMarquee';
import AIIMSStudy from './components/AIIMSStudy';

function App() {
  return (
    <div className="font-sans">
      <Hero />
      <Trust />
      <MeetEase />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <TestimonialMarquee />
      <AIIMSStudy />
    </div>
  );
}

export default App;
