import React from 'react';

const Trust = () => {
  const logos = [
    "screenshot-20260703130814.png",
    "screenshot-20260703130822.png",
    "screenshot-20260703130831.png",
    "screenshot-20260703130839.png",
    "screenshot-20260703130848.png",
    "screenshot-20260703130857.png",
    "screenshot-20260703130907.png",
    "screenshot-20260703130916.png",
    "screenshot-20260703130925.png",
    "screenshot-20260703130939.png",
    "screenshot-20260703130953.png",
    "screenshot-20260703131004.png"
  ];

  return (
    <section className="bg-white py-16 font-sans overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Heading + Awards (Bento Box 1) */}
          <div className="lg:col-span-4 flex flex-col justify-between items-start bg-[#F8FAFC] rounded-[32px] p-8 lg:p-10 border border-slate-100 shadow-sm">
            <div>
              <h2 className="font-display text-[1.8rem] font-semibold text-slate-800 tracking-tight leading-snug">
                Trusted by <br />
                <span className="text-[#007DCA] font-bold">Industry Leaders.</span>
              </h2>
            </div>
            
            <div className="mt-8 w-full flex justify-center lg:justify-start">
              <img src="/achive.png" alt="Achievements" className="w-full max-w-[280px] h-auto object-contain drop-shadow-sm" />
            </div>
          </div>

          {/* Right Column: Marquees (Bento Box 2) */}
          <div className="lg:col-span-8 bg-[#F8FAFC] rounded-[32px] py-12 lg:py-0 flex flex-col justify-center border border-slate-100 shadow-sm overflow-hidden">
            <div className="relative flex flex-col gap-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              
              {/* Row 1 - Moving Left */}
              <div className="flex w-max animate-marquee items-center gap-x-12 group hover:[animation-play-state:paused]">
                {[...logos.slice(0, 6), ...logos.slice(0, 6), ...logos.slice(0, 6)].map((logo, idx) => (
                  <div key={`row1-${idx}`} className="w-[150px] flex justify-center items-center">
                    <img 
                      src={`/brand-logos/${logo}`} 
                      alt={`Partner Logo ${idx + 1}`} 
                      className="h-10 md:h-12 w-full object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
              
              {/* Row 2 - Moving Right */}
              <div className="flex w-max animate-marquee [animation-direction:reverse] items-center gap-x-12 group hover:[animation-play-state:paused]">
                {[...logos.slice(6, 12), ...logos.slice(6, 12), ...logos.slice(6, 12)].map((logo, idx) => (
                  <div key={`row2-${idx}`} className="w-[150px] flex justify-center items-center">
                    <img 
                      src={`/brand-logos/${logo}`} 
                      alt={`Partner Logo ${idx + 1}`} 
                      className="h-10 md:h-12 w-full object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Trust;
