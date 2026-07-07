import React from 'react';

const Technologies = () => {
  return (
    <section className="bg-white py-32 px-6 font-sans">
      <div className="max-w-[1150px] mx-auto">
        
        {/* Header - Masked with bg-white so the line goes behind it */}
        <div className="text-center mb-24 relative z-10">
          <span className="inline-block bg-white px-6 py-2 text-[0.75rem] font-bold tracking-[0.2em] text-gray-400 uppercase mb-4 relative z-10">
            The Science Behind EASE
          </span>
          <br />
          <h2 className="inline-block bg-white px-8 py-2 font-display text-4xl md:text-[3.25rem] text-gray-900 font-bold leading-[1.1] tracking-tight max-w-[800px] mx-auto relative z-10">
            Three breakthrough technologies.<br />One connected device.
          </h2>
        </div>

        {/* 3-Column Grid with Tech Tree Branching */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mb-24 pt-4">
          
          {/* Main Umbilical Cord (Shoots UP from the junction, behind the header, to MeetEase) */}
          <div className="hidden md:block absolute bottom-[calc(100%-2rem)] left-1/2 w-[2px] h-[1000px] bg-gradient-to-t from-[#486CD9]/30 to-[#486CD9]/0 -translate-x-1/2 -z-10"></div>
          
          {/* Central Vertical Drop (From junction down to Card 2) */}
          <div className="hidden md:block absolute top-[2rem] left-1/2 w-[2px] h-[3rem] bg-[#486CD9]/30 -translate-x-1/2 -z-10"></div>

          {/* Card 1: tDCS */}
          <div className="flex flex-col text-center group relative z-10">
            {/* Tech Tree Horizontal Line (Connects Card 1 to Card 2) */}
            <div className="hidden md:block absolute top-[2rem] left-1/2 w-[calc(100%+2.5rem)] lg:w-[calc(100%+4rem)] h-[2px] bg-[#486CD9]/30 -z-10"></div>
            
            {/* Tech Tree Drop Line */}
            <div className="hidden md:block absolute top-[2rem] left-1/2 w-[2px] h-12 bg-[#486CD9]/30 -translate-x-1/2 -z-10"></div>
            {/* Glowing Node */}
            <div className="hidden md:block absolute top-[5rem] left-1/2 w-3 h-3 rounded-full bg-white border-2 border-[#486CD9] -translate-x-1/2 -z-10 shadow-[0_0_10px_rgba(72,108,217,0.5)]"></div>

            {/* Gradient Acronym Label */}
            <div className="font-display text-4xl xl:text-5xl font-extrabold tracking-tight mb-8 mt-12 md:mt-20">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#486CD9] to-[#2B4B9B] drop-shadow-sm">
                tDCS
              </span>
            </div>

            <div className="mb-6 transition-transform duration-500 ease-out group-hover:scale-[1.03] relative z-20">
              <img src="/what-2.png" alt="tDCS Technology" className="w-full h-auto rounded-3xl object-contain drop-shadow-sm bg-white" />
            </div>

            {/* Text */}
            <div className="relative pb-2 px-2 z-10 flex-grow">
              <h3 className="font-display text-[1.25rem] font-bold text-[#132758] mb-4 leading-tight">
                Wakes up the circuits that fall quiet.
              </h3>
              <p className="text-[#5A6B8A] text-[0.95rem] leading-relaxed">
                Gentle electrical stimulation targets the brain regions that regulate mood and focus, nudging them back into balance.
              </p>
            </div>
          </div>

          {/* Card 2: EEG */}
          <div className="flex flex-col text-center group relative z-10">
            {/* Tech Tree Horizontal Line (Connects Card 2 to Card 3) */}
            <div className="hidden md:block absolute top-[2rem] left-1/2 w-[calc(100%+2.5rem)] lg:w-[calc(100%+4rem)] h-[2px] bg-[#486CD9]/30 -z-10"></div>

            {/* Glowing Node */}
            <div className="hidden md:block absolute top-[5rem] left-1/2 w-3 h-3 rounded-full bg-white border-2 border-[#486CD9] -translate-x-1/2 -z-10 shadow-[0_0_10px_rgba(72,108,217,0.5)]"></div>

            {/* Gradient Acronym Label */}
            <div className="font-display text-4xl xl:text-5xl font-extrabold tracking-tight mb-8 mt-12 md:mt-20">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#486CD9] to-[#2B4B9B] drop-shadow-sm">
                EEG
              </span>
            </div>

            <div className="mb-6 transition-transform duration-500 ease-out group-hover:scale-[1.03] relative z-20">
              <img src="/what-3.png" alt="EEG Technology" className="w-full h-auto rounded-3xl object-contain drop-shadow-sm bg-white" />
            </div>

            {/* Text */}
            <div className="relative pb-2 px-2 z-10 flex-grow">
              <h3 className="font-display text-[1.25rem] font-bold text-[#132758] mb-4 leading-tight">
                Listens to the brain as it changes.
              </h3>
              <p className="text-[#5A6B8A] text-[0.95rem] leading-relaxed">
                Real-time sensors track brain activity thousands of times a second, so every session adjusts to what's actually happening in your head.
              </p>
            </div>
          </div>

          {/* Card 3: CET */}
          <div className="flex flex-col text-center group relative z-10">
            {/* Tech Tree Drop Line */}
            <div className="hidden md:block absolute top-[2rem] left-1/2 w-[2px] h-12 bg-[#486CD9]/30 -translate-x-1/2 -z-10"></div>
            {/* Glowing Node */}
            <div className="hidden md:block absolute top-[5rem] left-1/2 w-3 h-3 rounded-full bg-white border-2 border-[#486CD9] -translate-x-1/2 -z-10 shadow-[0_0_10px_rgba(72,108,217,0.5)]"></div>

            {/* Gradient Acronym Label */}
            <div className="font-display text-4xl xl:text-5xl font-extrabold tracking-tight mb-8 mt-12 md:mt-20">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#486CD9] to-[#2B4B9B] drop-shadow-sm">
                CET
              </span>
            </div>

            <div className="mb-6 transition-transform duration-500 ease-out group-hover:scale-[1.03] relative z-20">
              <img src="/what-4.png" alt="CET Technology" className="w-full h-auto rounded-3xl object-contain drop-shadow-sm bg-white" />
            </div>

            {/* Text */}
            <div className="relative pb-2 px-2 z-10 flex-grow">
              <h3 className="font-display text-[1.25rem] font-bold text-[#132758] mb-4 leading-tight">
                Trains the mind while it heals.
              </h3>
              <p className="text-[#5A6B8A] text-[0.95rem] leading-relaxed">
                Adaptive cognitive and emotional exercises sharpen memory, attention, and emotional control with every session.
              </p>
            </div>
          </div>

        </div>

        {/* Footer Area */}
        <div className="text-center flex flex-col items-center">
          <p className="text-gray-500 text-[1rem] mb-10 max-w-[600px] leading-relaxed">
            Every EASE session runs all three technologies together, working in perfect sync to deliver personalized brain care with precision and confidence.
          </p>
          <button className="bg-[#2B6CB0] text-white px-10 py-4 rounded-full font-semibold text-[0.95rem] hover:bg-[#1E4E8C] transition-all duration-300 shadow-[0_8px_20px_rgba(43,108,176,0.25)] hover:shadow-[0_12px_25px_rgba(43,108,176,0.35)] hover:-translate-y-1">
            Learn about our research at aiims
          </button>
        </div>

      </div>
    </section>
  );
};

export default Technologies;
