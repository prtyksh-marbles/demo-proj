import React from 'react';

const Testimonials = () => {
  return (
    <section className="bg-white py-32 px-4 sm:px-6 font-sans overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Masonry Image Collage */}
        <div className="relative flex justify-center items-center gap-3 sm:gap-5 md:gap-6 mb-6 max-w-[1050px] mx-auto px-2">
          
          {/* Fade masks for top and bottom if images overflow, optional but looks nice */}
          <div className="absolute inset-0 pointer-events-none z-10 [mask-image:linear-gradient(to_bottom,white_0%,transparent_5%,transparent_95%,white_100%)] bg-white opacity-0" />

          {/* Column 1 */}
          <div className="flex flex-col gap-3 sm:gap-5 md:gap-6 mt-12 w-1/4">
            <img src="/t-1.png" alt="Patient Story 1" className="w-full rounded-2xl md:rounded-3xl object-cover hover:scale-[1.03] transition-transform duration-500 shadow-sm aspect-[4/5]" />
            <img src="/t-5.jpg" alt="Patient Story 5" className="w-full rounded-2xl md:rounded-3xl object-cover hover:scale-[1.03] transition-transform duration-500 shadow-sm aspect-square" />
          </div>
          
          {/* Column 2 */}
          <div className="flex flex-col gap-3 sm:gap-5 md:gap-6 -mt-8 w-1/4">
            <img src="/t-2.png" alt="Patient Story 2" className="w-full rounded-2xl md:rounded-3xl object-cover hover:scale-[1.03] transition-transform duration-500 shadow-sm aspect-square" />
            <img src="/t-6.jpg" alt="Patient Story 6" className="w-full rounded-2xl md:rounded-3xl object-cover hover:scale-[1.03] transition-transform duration-500 shadow-sm aspect-[3/4]" />
          </div>
          
          {/* Column 3 */}
          <div className="flex flex-col gap-3 sm:gap-5 md:gap-6 mt-4 w-1/4">
            <img src="/t-3.png" alt="Patient Story 3" className="w-full rounded-2xl md:rounded-3xl object-cover hover:scale-[1.03] transition-transform duration-500 shadow-sm aspect-[3/4]" />
            <img src="/t-7.jpg" alt="Patient Story 7" className="w-full rounded-2xl md:rounded-3xl object-cover hover:scale-[1.03] transition-transform duration-500 shadow-sm aspect-square" />
          </div>
          
          {/* Column 4 */}
          <div className="flex flex-col gap-3 sm:gap-5 md:gap-6 mt-20 w-1/4">
            <img src="/t-4.png" alt="Patient Story 4" className="w-full rounded-2xl md:rounded-3xl object-cover hover:scale-[1.03] transition-transform duration-500 shadow-sm aspect-square" />
            <img src="/t-8.png" alt="Patient Story 8" className="w-full rounded-2xl md:rounded-3xl object-cover hover:scale-[1.03] transition-transform duration-500 shadow-sm aspect-[4/5]" />
          </div>

        </div>

        {/* Text Block */}
        <div className="text-center max-w-[750px] mx-auto px-4">
          <h2 className="font-display text-4xl md:text-[3.5rem] font-bold text-gray-900 leading-[1.15] tracking-tight mb-8">
            Loved by patients,<br />not just labs.
          </h2>
          <p className="text-gray-500 text-lg md:text-[1.1rem] leading-relaxed max-w-[600px] mx-auto">
            Don't take our word for it. See why EASE is trusted and loved by people across India who want to regain their mental balance, find focus, and heal naturally.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
