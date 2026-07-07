import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MeetEase = () => {
  const images = ['/ease-1.png', '/ease-2.png', '/ease-3.png'];
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="bg-white py-32 px-6 font-sans relative overflow-hidden">
      {/* Top Header */}
      <div className="max-w-3xl mx-auto text-center mb-8">
        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-[#486CD9]/20 text-[#486CD9] text-[0.7rem] font-bold tracking-[0.15em] uppercase mb-8 bg-[#486CD9]/10 shadow-sm">
          Medically Licensed Neuromodulation
        </div>
        <h2 className="font-display text-[4rem] text-[#132758] font-medium leading-none mb-6 tracking-tight">
          Meet EASE
        </h2>
        <p className="text-[#4A5D7E] text-[1.15rem] leading-relaxed max-w-[650px] mx-auto">
          EASE is your 3-in-1 brain care wearable, seamlessly combining gentle stimulation, real-time monitoring, and cognitive exercises to help you regain mental balance.
        </p>
      </div>

      {/* Main Content (Grid) */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr_1fr] gap-4 items-center relative z-10">
        
        {/* Left Points */}
        <div className="flex flex-col gap-16 lg:pr-2">
          <div className="text-center">
            <div className="mx-auto mb-3 text-[#486CD9] flex items-center justify-center">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 opacity-80"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></svg>
            </div>
            <h3 className="text-[#486CD9] text-[1.25rem] font-semibold mb-2 tracking-tight">Targeted brain stimulation</h3>
            <p className="text-[#5A6B8A] text-[0.9rem] leading-relaxed px-2">Gentle tDCS safely targets your prefrontal cortex to pull you out of negative spirals.</p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-3 text-[#486CD9] flex items-center justify-center">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 opacity-80"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            </div>
            <h3 className="text-[#486CD9] text-[1.25rem] font-semibold mb-2 tracking-tight">Real-time brain tracking</h3>
            <p className="text-[#5A6B8A] text-[0.9rem] leading-relaxed px-2">Hospital-grade EEG tracks your brainwaves continuously, ensuring highly precise and personalized sessions.</p>
          </div>
        </div>

        {/* Center Aura & Buttons */}
        <div className="flex flex-col items-center justify-center my-10 lg:my-0 relative">
          <div className="relative w-full aspect-square flex justify-center items-center pointer-events-none mb-8">
             {/* The Blue Aura (#486CD9 is rgba(72,108,217)) */}
             <div className="absolute inset-0 w-[150%] h-[150%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,rgba(72,108,217,0.45)_0%,transparent_70%)] -z-10 animate-pulse" style={{ animationDuration: '4s' }}></div>
             
             <AnimatePresence mode="popLayout">
               <motion.img
                 key={currentImg}
                 src={images[currentImg]}
                 alt="EASE Device"
                 className="absolute w-[125%] max-w-none h-auto object-contain drop-shadow-[0_20px_40px_rgba(40,72,170,0.15)]"
                 initial={{ opacity: 0, scale: 0.85, filter: 'blur(12px)', rotate: -5 }}
                 animate={{ opacity: 1, scale: 1, filter: 'blur(0px)', rotate: 0 }}
                 exit={{ opacity: 0, scale: 1.05, filter: 'blur(12px)', rotate: 5 }}
                 transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
               />
             </AnimatePresence>
          </div>

          {/* Bottom Buttons - Nested */}
          <div className="flex justify-center items-center gap-4 relative z-20">
            <button className="bg-[#486CD9] text-white px-7 py-3 rounded-full font-semibold text-[0.75rem] tracking-wide hover:bg-[#3A5BBE] transition-all duration-300 flex items-center gap-2 shadow-[0_10px_20px_rgba(72,108,217,0.2)] hover:shadow-[0_15px_30px_rgba(72,108,217,0.3)] hover:-translate-y-0.5 uppercase">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/></svg>
              DISCOVER EASE
            </button>
            <button className="bg-white text-[#486CD9] border border-[#486CD9]/20 px-7 py-3 rounded-full font-semibold text-[0.75rem] tracking-wide hover:bg-[#486CD9]/5 transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5 uppercase">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
              REQUEST DEMO
            </button>
          </div>
        </div>

        {/* Right Points */}
        <div className="flex flex-col gap-16 lg:pl-2">
          <div className="text-center">
            <div className="mx-auto mb-3 text-[#486CD9] flex items-center justify-center">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 opacity-80"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
            </div>
            <h3 className="text-[#486CD9] text-[1.25rem] font-semibold mb-2 tracking-tight">Guided cognitive exercises</h3>
            <p className="text-[#5A6B8A] text-[0.9rem] leading-relaxed px-2">Engage in adaptive, in-app emotional training exercises to build long-lasting mental resilience.</p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-3 text-[#486CD9] flex items-center justify-center">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 opacity-80"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
            </div>
            <h3 className="text-[#486CD9] text-[1.25rem] font-semibold mb-2 tracking-tight">Safe and CDSCO-approved</h3>
            <p className="text-[#5A6B8A] text-[0.9rem] leading-relaxed px-2">Clinically validated across major Indian hospitals with 13,000+ sessions successfully completed.</p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default MeetEase;
