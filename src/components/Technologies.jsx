import React from 'react';

const Technologies = () => {
  return (
    <section className="bg-white py-32 px-6 font-sans">
      <div className="max-w-[1150px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-24">
          <p className="text-[0.75rem] font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">
            The Science Behind EASE
          </p>
          <h2 className="font-display text-4xl md:text-[3.25rem] text-gray-900 font-bold leading-[1.1] tracking-tight max-w-[800px] mx-auto">
            Three breakthrough technologies.<br />One connected device.
          </h2>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mb-24">
          
          {/* Card 1: tDCS */}
          <div className="flex flex-col text-center group">
            <div className="mb-8 transition-transform duration-500 ease-out group-hover:scale-[1.03]">
              <img src="/what-2.png" alt="tDCS Technology" className="w-full h-auto rounded-3xl object-contain drop-shadow-sm" />
            </div>
            <h3 className="font-display text-[1.35rem] font-semibold text-gray-900 mb-4 leading-tight px-4">
              <span className="text-[#486CD9] block mb-2 uppercase tracking-[0.15em] text-[0.75rem] font-bold">tDCS</span>
              Wakes up the circuits that fall quiet.
            </h3>
            <p className="text-gray-500 text-[0.95rem] leading-relaxed px-4">
              Gentle electrical stimulation targets the brain regions that regulate mood and focus, nudging them back into balance, with nothing invasive and no surgery involved.
            </p>
          </div>

          {/* Card 2: EEG */}
          <div className="flex flex-col text-center group">
            <div className="mb-8 transition-transform duration-500 ease-out group-hover:scale-[1.03]">
              <img src="/what-3.png" alt="EEG Technology" className="w-full h-auto rounded-3xl object-contain drop-shadow-sm" />
            </div>
            <h3 className="font-display text-[1.35rem] font-semibold text-gray-900 mb-4 leading-tight px-4">
              <span className="text-[#486CD9] block mb-2 uppercase tracking-[0.15em] text-[0.75rem] font-bold">EEG</span>
              Listens to the brain as it changes.
            </h3>
            <p className="text-gray-500 text-[0.95rem] leading-relaxed px-4">
              Real-time sensors track brain activity thousands of times a second, so every session adjusts to what's actually happening in your head, not a fixed routine.
            </p>
          </div>

          {/* Card 3: CET */}
          <div className="flex flex-col text-center group">
            <div className="mb-8 transition-transform duration-500 ease-out group-hover:scale-[1.03]">
              <img src="/what-4.png" alt="CET Technology" className="w-full h-auto rounded-3xl object-contain drop-shadow-sm" />
            </div>
            <h3 className="font-display text-[1.35rem] font-semibold text-gray-900 mb-4 leading-tight px-4">
              <span className="text-[#486CD9] block mb-2 uppercase tracking-[0.15em] text-[0.75rem] font-bold">CET</span>
              Trains the mind while it heals.
            </h3>
            <p className="text-gray-500 text-[0.95rem] leading-relaxed px-4">
              Adaptive cognitive and emotional exercises sharpen memory, attention, and emotional control, getting smarter about you with every session.
            </p>
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
