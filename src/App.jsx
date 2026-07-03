import React from 'react';
import Hero from './components/Hero';
import Trust from './components/Trust';
import MeetEase from './components/MeetEase';
import Technologies from './components/Technologies';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import TestimonialMarquee from './components/TestimonialMarquee';

function App() {
  return (
    <div className="font-sans">
      <Hero />
      <Trust />
      <MeetEase />
      <Technologies />
      <HowItWorks />
      <Testimonials />
      <Stats />
      <TestimonialMarquee />
    </div>
  );
}

export default App;
