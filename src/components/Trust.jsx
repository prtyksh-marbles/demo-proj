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
    <section className="bg-white py-24 font-sans overflow-hidden">
      <div className="max-w-[900px] mx-auto text-center px-6">
        <h2 className="font-display text-[2.75rem] font-bold text-gray-900 mb-6 tracking-tight leading-tight">
          Trusted by <span className="relative inline-block">
            Industry Leaders.
            <span className="absolute left-0 -bottom-1 w-full h-[4px] bg-[#007DCA]"></span>
          </span>
        </h2>
        <p className="max-w-[760px] mx-auto text-gray-600 text-[15px] leading-relaxed mb-8">
          Partnered with top psychiatric centers and leading institutions for rigorous clinical trials,<br/>delivering safe, CDSCO-approved neuromodulation care on your path to healing.
        </p>
        
        <div className="w-full max-w-[1000px] mx-auto mb-16 flex justify-center">
          <img src="/achive.png" alt="Achievements" className="w-[50%] h-auto object-contain rounded-2xl " />
        </div>
      </div>
      
      {/* Marquee Section */}
      <div className="max-w-[1000px] mx-auto relative flex flex-col gap-6 overflow-hidden group [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {/* Row 1 - Moving Left */}
        <div className="flex w-max animate-marquee items-center gap-x-20 group-hover:[animation-play-state:paused] py-2">
          {[...logos.slice(0, 6), ...logos.slice(0, 6), ...logos.slice(0, 6)].map((logo, idx) => (
            <img 
              key={`row1-${idx}`} 
              src={`/brand-logos/${logo}`} 
              alt={`Partner Logo ${idx + 1}`} 
              className="h-16 md:h-20 w-auto object-contain grayscale opacity-80 contrast-200 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
        
        {/* Row 2 - Moving Right */}
        <div className="flex w-max animate-marquee [animation-direction:reverse] items-center gap-x-20 group-hover:[animation-play-state:paused] py-2">
          {[...logos.slice(6, 12), ...logos.slice(6, 12), ...logos.slice(6, 12)].map((logo, idx) => (
            <img 
              key={`row2-${idx}`} 
              src={`/brand-logos/${logo}`} 
              alt={`Partner Logo ${idx + 1}`} 
              className="h-16 md:h-20 w-auto object-contain grayscale opacity-80 contrast-200 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
