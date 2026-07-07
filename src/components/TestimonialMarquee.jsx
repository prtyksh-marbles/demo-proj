import React, { useRef, useState, useEffect } from 'react';

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
  // Only animate while the marquee is actually on screen. A 60s infinite
  // animation otherwise keeps the compositor busy forever, which pegs the CPU
  // on machines without hardware acceleration.
  const marqueeRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Ultra-compact, professional card design
  const renderCard = (item, idx) => {
    return (
      <div key={`testi-${idx}`} className="w-[320px] md:w-[380px] shrink-0 bg-[#F8FAFC] rounded-[1.5rem] p-6 md:p-8 flex flex-col justify-between border border-[#132758]/5 shadow-sm transition-transform hover:-translate-y-1 h-full">
        
        {/* Header: Stars & Avatar (Saves vertical space) */}
        <div className="flex justify-between items-start mb-5">
          <div className="flex gap-1 mt-2">
            {[1, 2, 3, 4, 5].map(star => (
              <svg key={star} viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#486CD9]">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex flex-col text-right">
              <span className="text-[#132758] font-bold text-sm leading-tight">{item.name}</span>
              <span className="text-[#5A6B8A] text-[0.65rem] md:text-xs font-medium">{item.meta}</span>
            </div>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#486CD9] shadow-sm border border-[#132758]/5 shrink-0">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            </div>
          </div>
        </div>

        {/* Text */}
        <p className="text-[#334155] text-[0.9rem] md:text-[0.95rem] leading-relaxed font-medium mb-6 flex-grow">
          "{item.text}"
        </p>

        {/* Dark Stats Box - Shrunk & Professional */}
        <div className="bg-[#132758] rounded-xl py-3 px-2 flex items-center justify-between text-white mt-auto shadow-inner">
          {item.stats.map((stat, sIdx) => (
            <div key={sIdx} className={`flex flex-col items-center justify-center flex-1 ${sIdx !== 2 ? 'border-r border-white/10' : ''}`}>
              <div className="font-bold text-lg leading-tight mb-0.5">{stat.val}</div>
              <div className="text-[#486CD9] text-[0.55rem] md:text-[0.6rem] uppercase tracking-wider font-bold text-center px-1">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    );
  };

  const renderCTACard = (idx) => (
    <div key={`cta-${idx}`} className="w-[320px] md:w-[380px] shrink-0 bg-[#052643] rounded-[1.5rem] p-8 flex flex-col items-center justify-center text-center shadow-lg transition-transform hover:-translate-y-1 relative overflow-hidden h-full">
      {/* Background pattern */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-64 h-64 text-white" fill="currentColor"><circle cx="50" cy="50" r="50"/></svg>
      </div>
      
      <p className="text-white/70 uppercase tracking-[0.2em] text-[0.65rem] font-bold mb-4 z-10">Are you a clinician?</p>
      <h3 className="font-display text-2xl md:text-3xl text-white font-bold leading-tight mb-8 z-10">
        Join the<br />Neuro<br />Revolution.
      </h3>
      <button className="bg-white text-[#052643] px-6 py-3 rounded-full font-bold text-[0.8rem] hover:bg-gray-100 transition-colors z-10 shadow-md">
        Partner with EASE
      </button>
    </div>
  );

  const cardElements = [
    ...testimonials.map((item, idx) => renderCard(item, idx)),
    renderCTACard('cta-1')
  ];

  return (
    <section className="bg-white pt-2 pb-32 font-sans overflow-hidden">
      
      {/* Custom CSS for a very slow, smooth marquee */}
      <style>
        {`
          @keyframes marquee-slow {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
          }
          .animate-marquee-slow {
            animation: marquee-slow 60s linear infinite;
            /* Promote to its own compositor layer once, so frames don't repaint */
            will-change: transform;
            backface-visibility: hidden;
          }
          @media (prefers-reduced-motion: reduce) {
            .animate-marquee-slow { animation: none; }
          }
        `}
      </style>

      {/* Marquee Wrapper */}
      <div ref={marqueeRef} className="w-full relative flex overflow-hidden group">
        {/* Static edge fades (cheaper than masking the moving content every frame) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[6%] z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[6%] z-10 bg-gradient-to-l from-white to-transparent" />

        {/* We use items-stretch so all cards match height, and our slow animation.
            Animation pauses on hover and whenever the section is scrolled off screen. */}
        <div className={`flex w-max animate-marquee-slow items-stretch gap-5 md:gap-6 py-6 hover:[animation-play-state:paused] ${inView ? '' : '[animation-play-state:paused]'}`}>
          {[...cardElements, ...cardElements].map((el, i) => React.cloneElement(el, { key: `duplicate-${i}` }))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialMarquee;
