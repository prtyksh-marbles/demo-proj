import React, { useState, useEffect, useRef, useCallback, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MeetEase = () => {
  const images = ['/ease-1.png', '/ease-2.png', '/ease-3.png'];
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  /* --- Connector: real-measured line from the device image to tDCS / EEG / CET --- */
  const containerRef = useRef(null);
  const deviceRef = useRef(null);
  const techRefs = [useRef(null), useRef(null), useRef(null)]; // tDCS, EEG, CET
  const [geo, setGeo] = useState(null);

  const computeGeo = useCallback(() => {
    const container = containerRef.current;
    const device = deviceRef.current;
    if (!container || !device) return;
    const targets = techRefs.map((r) => r.current);
    if (targets.some((t) => !t)) return;

    const c = container.getBoundingClientRect();
    const d = device.getBoundingClientRect();

    // Source: bottom-center of the device image.
    const sx = d.left + d.width / 2 - c.left;
    const sy = d.bottom - c.top;

    // Targets: top-center of each acronym label.
    const pts = targets.map((t) => {
      const r = t.getBoundingClientRect();
      return { x: r.left + r.width / 2 - c.left, y: r.top - c.top };
    });

    const minX = Math.min(...pts.map((p) => p.x));
    const maxX = Math.max(...pts.map((p) => p.x));
    const minY = Math.min(...pts.map((p) => p.y));
    // Horizontal distribution bar sits a little above the highest label.
    const junctionY = minY - 44;

    setGeo({
      w: c.width,
      h: c.height,
      sx,
      sy,
      junctionY,
      minX,
      maxX,
      pts,
      gradTop: sy,
      gradBottom: Math.max(...pts.map((p) => p.y)),
    });
  }, []);

  useLayoutEffect(() => {
    computeGeo();
  }, [computeGeo, currentImg]);

  useEffect(() => {
    computeGeo();
    const ro = new ResizeObserver(() => computeGeo());
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener('resize', computeGeo);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => computeGeo());
    }
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', computeGeo);
    };
  }, [computeGeo]);

  const drawVariant = {
    hidden: { pathLength: 0, opacity: 0 },
    show: {
      pathLength: 1,
      opacity: 1,
      transition: { pathLength: { duration: 1, ease: 'easeInOut' }, opacity: { duration: 0.25 } },
    },
  };
  const nodeVariant = {
    hidden: { scale: 0, opacity: 0 },
    show: { scale: 1, opacity: 1, transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] } },
  };

  return (
    <section ref={containerRef} className="bg-white font-sans relative overflow-hidden">
      {/* Measured tech-tree connector: device image -> tDCS / EEG / CET */}
      {geo && (
        <motion.svg
          className="absolute top-0 left-0 pointer-events-none z-0"
          width={geo.w}
          height={geo.h}
          viewBox={`0 0 ${geo.w} ${geo.h}`}
          fill="none"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ staggerChildren: 0.12, delayChildren: 0.1 }}
        >
          <defs>
            <linearGradient
              id="cordGrad"
              gradientUnits="userSpaceOnUse"
              x1="0"
              y1={geo.gradTop}
              x2="0"
              y2={geo.gradBottom}
            >
              <stop offset="0%" stopColor="#486CD9" stopOpacity="0.04" />
              <stop offset="30%" stopColor="#486CD9" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#486CD9" stopOpacity="0.5" />
            </linearGradient>
            <filter id="nodeGlow" x="-80%" y="-80%" width="260%" height="260%">
              <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#486CD9" floodOpacity="0.5" />
            </filter>
          </defs>

          {/* Trunk: down from the device to the distribution bar */}
          <motion.path
            d={`M ${geo.sx} ${geo.sy} L ${geo.sx} ${geo.junctionY}`}
            stroke="url(#cordGrad)"
            strokeWidth="2"
            strokeLinecap="round"
            variants={drawVariant}
          />
          {/* Horizontal distribution bar */}
          <motion.path
            d={`M ${geo.minX} ${geo.junctionY} L ${geo.maxX} ${geo.junctionY}`}
            stroke="url(#cordGrad)"
            strokeWidth="2"
            strokeLinecap="round"
            variants={drawVariant}
          />
          {/* Drops to each technology label */}
          {geo.pts.map((p, i) => (
            <motion.path
              key={`drop-${i}`}
              d={`M ${p.x} ${geo.junctionY} L ${p.x} ${p.y}`}
              stroke="url(#cordGrad)"
              strokeWidth="2"
              strokeLinecap="round"
              variants={drawVariant}
            />
          ))}

          {/* Origin port at the device */}
          <motion.circle
            cx={geo.sx}
            cy={geo.sy}
            r="4"
            fill="#486CD9"
            filter="url(#nodeGlow)"
            variants={nodeVariant}
          />
          {/* Glowing nodes at each technology label */}
          {geo.pts.map((p, i) => (
            <motion.circle
              key={`node-${i}`}
              cx={p.x}
              cy={p.y}
              r="5"
              fill="#ffffff"
              stroke="#486CD9"
              strokeWidth="2"
              filter="url(#nodeGlow)"
              variants={nodeVariant}
            />
          ))}
        </motion.svg>
      )}

      {/* ============================= MEET EASE ============================= */}
      <div className="py-32 px-6 relative">
        {/* Top Header */}
        <div className="max-w-3xl mx-auto text-center mb-8">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-[#486CD9]/20 text-[#486CD9] text-[0.7rem] font-bold tracking-[0.15em] uppercase mb-8 bg-[#486CD9]/10 shadow-sm">
            Medically Licensed Neuromodulation
          </div>
          <h2 className="font-display text-[4rem] text-[#132758] font-medium leading-none mb-6 tracking-tight">
            Meet EASE
          </h2>
          <p className="text-[#4A5D7E] text-[1.15rem] leading-relaxed max-w-[650px] mx-auto">
            EASE is your 3-in-1 brain care wearable, seamlessly combining gentle stimulation, real-time monitoring, and cognitive exercises to help you regain mental balance.
          </p>
        </div>

        {/* Main Content (Grid) */}
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr_1fr] gap-4 items-center relative z-10">

          {/* Left Points */}
          <div className="flex flex-col gap-16 lg:pr-2">
            <div className="text-center">
              <div className="mx-auto mb-3 text-[#486CD9] flex items-center justify-center">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 opacity-80"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></svg>
              </div>
              <h3 className="text-[#486CD9] text-[1.25rem] font-semibold mb-2 tracking-tight">Targeted brain stimulation</h3>
              <p className="text-[#5A6B8A] text-[0.9rem] leading-relaxed px-2">Gentle tDCS safely targets your prefrontal cortex to pull you out of negative spirals.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-3 text-[#486CD9] flex items-center justify-center">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 opacity-80"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </div>
              <h3 className="text-[#486CD9] text-[1.25rem] font-semibold mb-2 tracking-tight">Real-time brain tracking</h3>
              <p className="text-[#5A6B8A] text-[0.9rem] leading-relaxed px-2">Hospital-grade EEG tracks your brainwaves continuously, ensuring highly precise and personalized sessions.</p>
            </div>
          </div>

          {/* Center Aura & Buttons */}
          <div className="flex flex-col items-center justify-center my-10 lg:my-0 relative">
            <div ref={deviceRef} className="relative w-full aspect-square flex justify-center items-center pointer-events-none mb-8">
               {/* The Blue Aura (#486CD9 is rgba(72,108,217)) */}
               <div className="absolute inset-0 w-[150%] h-[150%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,rgba(72,108,217,0.45)_0%,transparent_70%)] -z-10 animate-pulse" style={{ animationDuration: '4s' }}></div>

               <AnimatePresence mode="popLayout">
                 <motion.img
                   key={currentImg}
                   src={images[currentImg]}
                   alt="EASE Device"
                   className="absolute w-[125%] max-w-none h-auto object-contain drop-shadow-[0_20px_40px_rgba(40,72,170,0.15)]"
                   initial={{ opacity: 0, scale: 0.85, filter: 'blur(12px)', rotate: -5 }}
                   animate={{ opacity: 1, scale: 1, filter: 'blur(0px)', rotate: 0 }}
                   exit={{ opacity: 0, scale: 1.05, filter: 'blur(12px)', rotate: 5 }}
                   transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
                 />
               </AnimatePresence>
            </div>

            {/* Bottom Buttons - Nested */}
            <div className="flex justify-center items-center gap-4 relative z-20">
              <button className="bg-[#486CD9] text-white px-7 py-3 rounded-full font-semibold text-[0.75rem] tracking-wide hover:bg-[#3A5BBE] transition-all duration-300 flex items-center gap-2 shadow-[0_10px_20px_rgba(72,108,217,0.2)] hover:shadow-[0_15px_30px_rgba(72,108,217,0.3)] hover:-translate-y-0.5 uppercase">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/></svg>
                DISCOVER EASE
              </button>
              <button className="bg-white text-[#486CD9] border border-[#486CD9]/20 px-7 py-3 rounded-full font-semibold text-[0.75rem] tracking-wide hover:bg-[#486CD9]/5 transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5 uppercase">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                REQUEST DEMO
              </button>
            </div>
          </div>

          {/* Right Points */}
          <div className="flex flex-col gap-16 lg:pl-2">
            <div className="text-center">
              <div className="mx-auto mb-3 text-[#486CD9] flex items-center justify-center">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 opacity-80"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
              </div>
              <h3 className="text-[#486CD9] text-[1.25rem] font-semibold mb-2 tracking-tight">Guided cognitive exercises</h3>
              <p className="text-[#5A6B8A] text-[0.9rem] leading-relaxed px-2">Engage in adaptive, in-app emotional training exercises to build long-lasting mental resilience.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-3 text-[#486CD9] flex items-center justify-center">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 opacity-80"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
              </div>
              <h3 className="text-[#486CD9] text-[1.25rem] font-semibold mb-2 tracking-tight">Safe and CDSCO-approved</h3>
              <p className="text-[#5A6B8A] text-[0.9rem] leading-relaxed px-2">Clinically validated across major Indian hospitals with 13,000+ sessions successfully completed.</p>
            </div>
          </div>

        </div>
      </div>

      {/* ============================ TECHNOLOGIES ============================ */}
      <div className="py-32 px-6">
        <div className="max-w-[1150px] mx-auto">

          {/* Header - Masked with bg-white so the connector passes behind it */}
          <div className="text-center mb-24 relative z-10">
            <span className="inline-block bg-white px-6 py-2 text-[0.75rem] font-bold tracking-[0.2em] text-gray-400 uppercase mb-4 relative z-10">
              The Science Behind EASE
            </span>
            <br />
            <h2 className="inline-block bg-white px-8 py-2 font-display text-4xl md:text-[3.25rem] text-gray-900 font-bold leading-[1.1] tracking-tight max-w-[800px] mx-auto relative z-10">
              Three breakthrough technologies.<br />One connected device.
            </h2>
          </div>

          {/* 3-Column Grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mb-24 pt-4">

            {/* Card 1: tDCS */}
            <div className="flex flex-col text-center group relative z-10">
              {/* Gradient Acronym Label */}
              <div className="font-display text-4xl xl:text-5xl font-extrabold tracking-tight mb-8 mt-12 md:mt-20">
                <span ref={techRefs[0]} className="bg-clip-text text-transparent bg-gradient-to-r from-[#486CD9] to-[#2B4B9B] drop-shadow-sm">
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
              {/* Gradient Acronym Label */}
              <div className="font-display text-4xl xl:text-5xl font-extrabold tracking-tight mb-8 mt-12 md:mt-20">
                <span ref={techRefs[1]} className="bg-clip-text text-transparent bg-gradient-to-r from-[#486CD9] to-[#2B4B9B] drop-shadow-sm">
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
              {/* Gradient Acronym Label */}
              <div className="font-display text-4xl xl:text-5xl font-extrabold tracking-tight mb-8 mt-12 md:mt-20">
                <span ref={techRefs[2]} className="bg-clip-text text-transparent bg-gradient-to-r from-[#486CD9] to-[#2B4B9B] drop-shadow-sm">
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

          {/* Footer Area - Simple Meet Ease Point Style */}
          <div className="mx-auto max-w-[700px] mt-24 flex flex-col items-center text-center">
            {/* Optional SVG Icon matching the Meet Ease points */}
            <div className="mx-auto mb-4 text-[#486CD9] flex items-center justify-center">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 opacity-80"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
            </div>
            
            <h3 className="text-[#486CD9] text-[1.25rem] font-semibold mb-3 tracking-tight">
              Three breakthrough technologies working in perfect sync
            </h3>
            
            <p className="text-[#5A6B8A] text-[0.95rem] leading-relaxed px-2 mb-10 max-w-[600px]">
              Every EASE session runs tDCS, EEG, and CET simultaneously to deliver personalized brain care with precision and confidence.
            </p>
            
            <button className="bg-[#486CD9] text-white px-10 py-3.5 rounded-full font-semibold text-[0.85rem] hover:bg-[#3A5BBE] transition-all shadow-[0_8px_20px_rgba(72,108,217,0.25)] hover:shadow-[0_12px_25px_rgba(72,108,217,0.35)] hover:-translate-y-1 uppercase tracking-wide">
              Explore AIIMS Research
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MeetEase;
