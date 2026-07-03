import React from 'react';

const testimonials = [
  {
    text: "Alcohol was ruining my life, and I couldn't quit. EASE became a turning point - my cravings reduced within 20 days and the games helped sharpen my focus and memory. I slept better, felt less fatigued, and for the first time, lasting recovery felt possible.",
    name: "Pooja",
    meta: "45 · New Delhi",
    stats: [
      { val: "20", label: "Days" },
      { val: "50%", label: "Craving Drop" },
      { val: "Addiction", label: "Managed" }
    ]
  },
  {
    text: "I was constantly overthinking, tired all the time, and had no appetite or interest in anything. EASE therapy changed that. My mind calmed down, my mood lifted, and I started feeling like myself again. Soon after, I got my dream job.",
    name: "Shyam",
    meta: "28 · Indore",
    stats: [
      { val: "20", label: "Sessions" },
      { val: "64%", label: "Symptom Drop" },
      { val: "Depression", label: "Remission" }
    ]
  },
  {
    text: "My anxiety used to spike at work - racing heart, spiraling thoughts, especially during meetings & deadlines. After a few weeks with EASE, I felt a huge shift. I can focus better, feel more in control, & actually look forward to my day now.",
    name: "Karan",
    meta: "34 · Mumbai",
    stats: [
      { val: "15", label: "Sessions" },
      { val: "46%", label: "Improvement" },
      { val: "Anxiety", label: "Reduced" }
    ]
  },
  {
    text: "Life with ADHD felt like juggling endless tasks. Staying present was my biggest struggle. EASE was a turning point - the sessions were engaging and painless. My thoughts feel calmer, and I can follow through on plans. I feel more grounded and confident in myself.",
    name: "Priya",
    meta: "28 · Nagpur",
    stats: [
      { val: "15", label: "Sessions" },
      { val: "34%", label: "Focus Boost" },
      { val: "ADHD", label: "Managed" }
    ]
  }
];

const TestimonialMarquee = () => {
  // We'll combine the 4 testimonials and the CTA card into one array of items to map over, then duplicate for the marquee
  const renderCard = (item, idx) => {
    return (
      <div key={`testi-${idx}`} className="w-[380px] md:w-[450px] shrink-0 bg-[#F5F8FB] rounded-[32px] p-8 md:p-10 flex flex-col justify-between border border-gray-100 shadow-sm transition-transform hover:-translate-y-1">
        
        {/* Stars */}
        <div className="flex justify-center gap-1.5 mb-8">
          {[1, 2, 3, 4, 5].map(star => (
            <svg key={star} viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#13499E]">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          ))}
        </div>

        {/* Text */}
        <p className="text-[#334155] text-[1.05rem] md:text-[1.15rem] leading-relaxed text-center font-medium mb-10 min-h-[140px]">
          {item.text}
        </p>

        {/* Dark Stats Box */}
        <div className="bg-[#052643] rounded-2xl py-4 px-2 flex items-center justify-between text-white mb-8 shadow-inner">
          {item.stats.map((stat, sIdx) => (
            <div key={sIdx} className={`flex flex-col items-center justify-center flex-1 ${sIdx !== 2 ? 'border-r border-white/10' : ''}`}>
              <div className="font-bold text-lg">{stat.val}</div>
              <div className="text-white/70 text-[0.7rem] uppercase tracking-wide mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Avatar Area */}
        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-400">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-gray-900 font-semibold text-[1.05rem]">{item.name}</span>
            <span className="text-gray-500 text-sm">{item.meta}</span>
          </div>
        </div>

      </div>
    );
  };

  const renderCTACard = (idx) => (
    <div key={`cta-${idx}`} className="w-[380px] md:w-[450px] shrink-0 bg-[#052643] rounded-[32px] p-10 flex flex-col items-center justify-center text-center shadow-lg transition-transform hover:-translate-y-1 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 opacity-10">
        <svg viewBox="0 0 100 100" className="w-64 h-64 text-white" fill="currentColor"><circle cx="50" cy="50" r="50"/></svg>
      </div>
      
      <p className="text-white/70 uppercase tracking-[0.2em] text-xs font-bold mb-4 z-10">Are you a clinician?</p>
      <h3 className="font-display text-4xl text-white font-bold leading-tight mb-8 z-10">
        Join the<br />Neuro<br />Revolution.
      </h3>
      <button className="bg-white text-[#052643] px-8 py-3.5 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors z-10 shadow-md">
        Partner with EASE
      </button>
    </div>
  );

  const cardElements = [
    ...testimonials.map((item, idx) => renderCard(item, idx)),
    renderCTACard('cta-1')
  ];

  return (
    <section className="bg-white py-10 pb-32 font-sans overflow-hidden">
      {/* Marquee Wrapper */}
      <div className="w-full relative flex overflow-hidden group [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="flex w-max animate-marquee items-stretch gap-6 py-6 hover:[animation-play-state:paused]">
          {[...cardElements, ...cardElements].map((el, i) => React.cloneElement(el, { key: `duplicate-${i}` }))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialMarquee;
