import React from 'react';
import { ArrowRight, Mail, Phone } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#486CD9] py-24 md:py-32 font-sans border-t border-[#486CD9]">
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Text & Contact */}
          <div className="flex flex-col items-start">
            <h2 className="font-display text-5xl md:text-[4rem] font-bold text-white leading-[1.1] tracking-tight mb-6">
              Still not sure<br />
              <span>where to start?</span>
            </h2>
            <p className="text-white/80 text-lg md:text-[1.1rem] leading-relaxed max-w-[500px]">
              Take the first step towards better mental health. Get your clinically validated brain score and find out exactly where you stand.
            </p>
            
            <div className="mt-12 flex flex-col gap-5">
              <p className="font-semibold text-white text-[0.95rem] uppercase tracking-wider">Prefer to talk?</p>
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
                <a href="tel:+9118001234567" className="flex items-center gap-3.5 text-white/90 hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center shrink-0 text-white transition-colors">
                    <Phone size={18} />
                  </div>
                  <span className="font-medium text-[1.05rem]">1800 123 4567</span>
                </a>
                <a href="mailto:care@ease.com" className="flex items-center gap-3.5 text-white/90 hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center shrink-0 text-white transition-colors">
                    <Mail size={18} />
                  </div>
                  <span className="font-medium text-[1.05rem]">care@ease.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Assessment Card */}
          <div className="bg-gradient-to-b from-[#0A1633] via-[#0D1E44] to-[#16294C] rounded-3xl p-10 lg:p-12 shadow-[0_20px_50px_rgba(10,22,51,0.4)] flex flex-col items-start relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
            
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#486CD9] opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:opacity-30 transition-opacity duration-500"></div>

            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-8 relative z-10 backdrop-blur-sm border border-white/10">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
            </div>
            
            <h3 className="font-display text-3xl text-white font-bold mb-4 relative z-10">
              Get Your Brain Score
            </h3>
            <p className="text-[#AEBCD8] leading-relaxed mb-10 flex-grow relative z-10 text-[1.05rem]">
              Take our clinically validated assessment to understand your mental health baseline and find out exactly where you stand today.
            </p>
            
            <a 
              href="#" 
              className="inline-flex items-center justify-center gap-2 bg-white text-[#132758] px-8 py-4 rounded-full font-bold text-[0.95rem] hover:bg-[#f4f6f9] transition-all w-full sm:w-auto mt-auto relative z-10 shadow-[0_4px_14px_rgba(255,255,255,0.1)] hover:shadow-[0_6px_20px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 duration-300"
            >
              Start Assessment <ArrowRight size={18} />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
