import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Connect & Get Scheduled',
    desc: "Whether you're finding a specialized clinician, booking a home appointment, or simply reaching out to our team, we make starting your journey effortless."
  },
  {
    num: '02',
    title: 'Put on the EASE Headband',
    desc: 'Designed for ultimate comfort and simplicity. Just wear the connected headband, and the system automatically calibrates to your unique neural baseline.'
  },
  {
    num: '03',
    title: 'Session in Progress',
    desc: 'Simply sit back and relax. EASE delivers gentle, precise brain stimulation while simultaneously monitoring your real-time cognitive activity.'
  },
  {
    num: '04',
    title: 'Expert Review & Optimization',
    desc: 'As soon as your session finishes, your clinician reviews the data and seamlessly adjusts your personalized protocol to ensure ongoing progress.'
  }
];

const STEP_DURATION = 6000; // 6 seconds per step

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, STEP_DURATION);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-32 px-6 font-sans border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="mb-16 text-center lg:text-left">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-[#486CD9]/20 text-[#486CD9] text-[0.7rem] font-bold tracking-[0.15em] uppercase mb-6 bg-[#486CD9]/10 shadow-sm">
            The Process
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#132758] tracking-tight mb-4">
            How it works
          </h2>
          <p className="text-[#5A6B8A] text-lg max-w-[600px] mx-auto lg:mx-0">
            Progress and peace of mind are right around the corner.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 min-h-[600px]">
          
          {/* Left Column: Text Steps */}
          <div className="lg:w-5/12 flex flex-col justify-center gap-10">
            {steps.map((step, index) => {
              const isActive = index === activeStep;
              return (
                <div 
                  key={index} 
                  className={`flex gap-6 transition-all duration-500 cursor-pointer ${isActive ? 'opacity-100 scale-100' : 'opacity-40 scale-95'}`}
                  onClick={() => setActiveStep(index)}
                >
                  {/* Progress Line */}
                  <div className="relative w-1.5 bg-gray-100 rounded-full overflow-hidden shrink-0">
                    {isActive && (
                      <motion.div 
                        className="absolute top-0 left-0 w-full bg-[#486CD9]"
                        initial={{ height: "0%" }}
                        animate={{ height: "100%" }}
                        transition={{ duration: STEP_DURATION / 1000, ease: "linear" }}
                        key={`progress-${activeStep}`}
                      />
                    )}
                  </div>

                  {/* Step Content */}
                  <div>
                    <div className="text-[0.75rem] font-bold text-[#486CD9] mb-1.5 tracking-[0.15em] uppercase">
                      STEP {step.num}
                    </div>
                    <h3 className="text-gray-900 text-[1.25rem] font-semibold mb-2 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-[0.95rem] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Canvas */}
          <div className="lg:w-7/12 relative flex items-center justify-center min-h-[500px]">
            
            {/* The Blue Aura (Constant background tying it to MeetEase) */}
            <div className="absolute inset-0 w-[140%] h-[140%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,rgba(72,108,217,0.15)_0%,transparent_60%)] pointer-events-none -z-10"></div>

            <AnimatePresence mode="wait">
              
              {/* Visual 1: Connect */}
              {activeStep === 0 && (
                <motion.div 
                  key="v1"
                  className="w-full h-full relative flex flex-col items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Premium iOS Widget Card */}
                  <div className="relative w-full max-w-[420px] bg-white rounded-[2rem] shadow-[0_20px_40px_rgba(72,108,217,0.15)] overflow-hidden border-4 border-white p-2">
                    
                    {/* Top: Map Section */}
                    <div className="relative w-full aspect-[16/9] bg-gray-100 rounded-[1.5rem] overflow-hidden">
                      <img src="/map.png" alt="Map" className="absolute inset-0 w-full h-full object-cover opacity-80" />
                      {/* Frosted Glass Overlay with Doctors */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center bg-white/70 backdrop-blur-md px-5 py-2.5 rounded-full shadow-lg border border-white/60 w-max">
                        <div className="flex -space-x-3 mr-4">
                          {[1, 2, 3, 4].map(num => (
                            <img key={num} src={`/doctor-${num}.png`} alt={`Doctor ${num}`} className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover" />
                          ))}
                        </div>
                        <div className="text-[#132758] text-[0.8rem] font-bold tracking-tight">
                          Expert Clinical Team
                        </div>
                      </div>
                    </div>

                    {/* Bottom: Action Buttons inside the widget */}
                    <div className="flex gap-2 mt-2">
                      <div className="flex-1 bg-[#F8FAFC] px-4 py-4 rounded-2xl flex items-center justify-center gap-2 text-[#5A6B8A] font-semibold text-[0.8rem] hover:bg-gray-100 transition-colors cursor-pointer">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[#486CD9]"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        Call
                      </div>
                      <div className="flex-[2] bg-[#486CD9] text-white px-4 py-4 rounded-2xl shadow-[0_8px_16px_rgba(72,108,217,0.25)] font-semibold text-[0.85rem] flex items-center justify-center cursor-pointer hover:bg-[#3A5BBE] transition-all hover:-translate-y-0.5">
                        Book Home Setup
                      </div>
                    </div>

                  </div>
                </motion.div>
              )}

              {/* Visual 2: Headband Videos */}
              {activeStep === 1 && (
                <motion.div 
                  key="v2"
                  className="w-full h-full flex flex-col sm:flex-row items-center justify-center gap-6"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-full sm:w-1/2 aspect-[4/5] bg-gray-200 rounded-[2rem] overflow-hidden shadow-[0_20px_40px_rgba(72,108,217,0.15)] border-4 border-white relative z-10">
                     <video src="/earlobes.mp4" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="w-full sm:w-1/2 aspect-[4/5] bg-gray-200 rounded-[2rem] overflow-hidden shadow-[0_20px_40px_rgba(72,108,217,0.15)] border-4 border-white relative z-10">
                     <video src="/ease.mp4" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                </motion.div>
              )}

              {/* Visual 3: Session Video */}
              {activeStep === 2 && (
                <motion.div 
                  key="v3"
                  className="w-full h-full flex items-center justify-center"
                  initial={{ opacity: 0, rotateX: 10 }}
                  animate={{ opacity: 1, rotateX: 0 }}
                  exit={{ opacity: 0, rotateX: -10 }}
                  transition={{ duration: 0.6 }}
                  style={{ perspective: 1000 }}
                >
                  <div className="w-full max-w-lg aspect-video bg-gray-200 rounded-[2rem] overflow-hidden shadow-[0_30px_60px_rgba(72,108,217,0.2)] border-4 border-white relative z-10">
                     <video src="/3.mp4" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                </motion.div>
              )}

              {/* Visual 4: Expert Review */}
              {activeStep === 3 && (
                <motion.div 
                  key="v4"
                  className="w-full h-full flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Mockup Dashboard Card */}
                  <div className="w-full max-w-md bg-white rounded-[2.5rem] shadow-[0_30px_60px_rgba(72,108,217,0.15)] p-8 border-4 border-white relative z-10">
                    <div className="flex justify-between items-center mb-6">
                      <div className="font-display font-bold text-[#132758] text-xl">Session Report</div>
                      <div className="bg-[#486CD9]/10 text-[#486CD9] text-xs font-bold px-3 py-1.5 rounded-full tracking-wide uppercase">Optimal</div>
                    </div>
                    {/* Fake Chart */}
                    <div className="h-32 w-full bg-[#F8FAFC] rounded-2xl mb-8 relative overflow-hidden flex items-end">
                      <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full absolute inset-0 text-[#486CD9] opacity-10">
                        <path d="M0 40 L0 20 Q10 10 20 25 T40 15 T60 25 T80 5 T100 15 L100 40 Z" fill="currentColor" />
                      </svg>
                      <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full absolute inset-0 text-[#486CD9]">
                         <path d="M0 40 L0 20 Q10 10 20 25 T40 15 T60 25 T80 5 T100 15 L100 40 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </div>
                    {/* Fake Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-white">
                        <div className="text-[0.75rem] text-[#5A6B8A] mb-1 font-semibold uppercase tracking-wider">Targeting</div>
                        <div className="font-bold text-[#132758] text-lg">98.4%</div>
                      </div>
                      <div className="bg-[#486CD9] p-4 rounded-2xl border border-white shadow-[0_10px_20px_rgba(72,108,217,0.2)]">
                        <div className="text-[0.75rem] text-white/80 mb-1 font-semibold uppercase tracking-wider">Alpha Waves</div>
                        <div className="font-bold text-white text-lg">+42% Boost</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
