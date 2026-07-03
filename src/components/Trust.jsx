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
        <p className="max-w-[760px] mx-auto text-gray-600 text-[15px] leading-relaxed mb-16">
          Marbles Health and our team of clinical experts have partnered with leading healthcare institutions. From conducting rigorous clinical trials to collaborating with top psychiatric centers, we are committed to delivering safe, CDSCO-approved neuromodulation care—guiding every patient seamlessly on their path to healing.
        </p>
      </div>
      
      {/* Marquee Section */}
      <div className="max-w-[1000px] mx-auto relative flex overflow-hidden group [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-x-20 group-hover:[animation-play-state:paused] py-4">
          {[...logos, ...logos].map((logo, idx) => (
            <img 
              key={idx} 
              src={`/brand-logos/${logo}`} 
              alt={`Partner Logo ${idx + 1}`} 
              className="h-14 md:h-16 w-auto object-contain grayscale opacity-80 contrast-200 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
