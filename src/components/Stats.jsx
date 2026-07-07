import React from 'react';

const Stats = () => {
  return (
    <section className="bg-white py-16 px-6 font-sans">
      <div className="max-w-[1200px] mx-auto">
        
        <h2 className="font-display text-[2.75rem] md:text-5xl font-bold text-[#132758] mb-14 text-center tracking-tight leading-tight">
          See the difference<br />unbelievably fast.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Card 1 - Deep Navy */}
          <div className="bg-[#132758] rounded-[2rem] p-8 flex flex-col justify-between shadow-[0_10px_30px_rgba(19,39,88,0.15)] hover:-translate-y-1 transition-transform duration-300 min-h-[220px]">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-white shadow-inner backdrop-blur-sm border border-white/5">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <div className="text-white/50 text-[0.7rem] uppercase tracking-[0.2em] font-bold">Efficacy</div>
            </div>
            <div>
              <div className="text-[3.5rem] font-bold text-white tracking-tighter leading-none mb-2">9/10</div>
              <div className="text-white/80 text-[0.95rem] font-medium leading-snug">
                Patients show measurable progress.
              </div>
            </div>
          </div>

          {/* Card 2 - Mid Blue */}
          <div className="bg-[#2B4B9B] rounded-[2rem] p-8 flex flex-col justify-between shadow-[0_10px_30px_rgba(43,75,155,0.15)] hover:-translate-y-1 transition-transform duration-300 min-h-[220px]">
             <div className="flex justify-between items-start mb-6">
               <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-white shadow-inner backdrop-blur-sm border border-white/5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polyline></svg>
               </div>
               <div className="text-white/50 text-[0.7rem] uppercase tracking-[0.2em] font-bold">Speed</div>
             </div>
             <div>
               <div className="text-[3.5rem] font-bold text-white tracking-tighter leading-none mb-2">6x</div>
               <div className="text-white/80 text-[0.95rem] font-medium leading-snug">
                 Faster cognitive growth vs traditional.
               </div>
             </div>
          </div>

          {/* Card 3 - Vibrant Blue */}
          <div className="bg-[#486CD9] rounded-[2rem] p-8 flex flex-col justify-between shadow-[0_10px_30px_rgba(72,108,217,0.2)] hover:-translate-y-1 transition-transform duration-300 min-h-[220px]">
             <div className="flex justify-between items-start mb-6">
               <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-white shadow-inner backdrop-blur-sm border border-white/5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
               </div>
               <div className="text-white/60 text-[0.7rem] uppercase tracking-[0.2em] font-bold">Duration</div>
             </div>
             <div>
               <div className="text-[3.5rem] font-bold text-white tracking-tighter leading-none mb-2">10+</div>
               <div className="text-white/90 text-[0.95rem] font-medium leading-snug">
                 Sessions for permanent neural changes.
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;
