import React from 'react';

const Stats = () => {
  return (
    <section className="bg-white py-16 px-6 font-sans">
      <div className="max-w-[1200px] mx-auto">
        
        <h2 className="font-display text-[2.75rem] md:text-5xl font-bold text-gray-900 mb-14 text-center tracking-tight leading-tight">
          See the difference<br />unbelievably fast.
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Card 1 - Blue (Wide) */}
          <div className="lg:flex-[1.4] bg-[#052643] rounded-[32px] p-8 md:p-10 flex items-center justify-between gap-6 shadow-xl hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 text-white shadow-inner hidden sm:flex">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <div>
                <div className="text-white/70 text-xs uppercase tracking-widest font-bold mb-1">Efficacy</div>
                <div className="text-5xl font-bold text-white tracking-tight">9/10</div>
              </div>
            </div>
            <div className="text-white/90 text-lg md:text-xl font-medium leading-snug text-right max-w-[160px]">
              Patients show progress
            </div>
          </div>

          {/* Card 2 - Light (Narrow) */}
          <div className="lg:flex-[1] bg-[#F8F9FA] rounded-[32px] p-8 flex items-center justify-between gap-4 shadow-sm border border-gray-50 hover:-translate-y-1 transition-transform duration-300">
             <div>
               <div className="text-4xl md:text-[2.75rem] font-bold text-[#132758] tracking-tight mb-1">6x</div>
               <div className="text-gray-500 font-medium leading-tight text-[1.05rem]">Faster<br/>growth</div>
             </div>
             <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shrink-0 text-[#486CD9] shadow-sm border border-gray-100">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polyline></svg>
             </div>
          </div>

          {/* Card 3 - Light (Narrow) */}
          <div className="lg:flex-[1] bg-[#F8F9FA] rounded-[32px] p-8 flex items-center justify-between gap-4 shadow-sm border border-gray-50 hover:-translate-y-1 transition-transform duration-300">
             <div>
               <div className="text-4xl md:text-[2.75rem] font-bold text-[#132758] tracking-tight mb-1">10+</div>
               <div className="text-gray-500 font-medium leading-tight text-[1.05rem]">Sessions to<br/>see change</div>
             </div>
             <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shrink-0 text-[#486CD9] shadow-sm border border-gray-100">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;
