import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const AIIMSStudy = () => {
  const reduce = useReducedMotion();

  // MADRS scores — bar heights are proportional to the real data (28.69 / 19.13 / 10.38).
  const bars = [
    { day: 'Day 0', score: '28.7', h: 100, cls: 'bg-gradient-to-t from-[#486CD9]/45 to-[#486CD9]/15' },
    { day: 'Day 5', score: '19.1', h: 67, delta: '↓ 33%', cls: 'bg-gradient-to-t from-[#5F82E0]/75 to-[#5F82E0]/35' },
    { day: 'Day 10', score: '10.4', h: 36, delta: '↓ 64%', strong: true, cls: 'bg-gradient-to-t from-[#8AA6FF] to-[#5B7BE0] shadow-[0_0_24px_rgba(138,166,255,0.45)]' },
  ];

  // Brain-network graphic (single SVG for pixel-precise alignment).
  const netNodes = [
    { cx: 70, cy: 26, label: 'F' },
    { cx: 34, cy: 92, label: 'E' },
    { cx: 106, cy: 92, label: 'S' },
  ];
  const netEdges = ['M70 26 Q40 55 34 92', 'M70 26 Q100 55 106 92', 'M34 92 Q70 110 106 92'];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0A1633] via-[#0D1E44] to-[#16294C] py-32 px-4 sm:px-6 font-sans">
      {/* Soft blue bloom behind the header */}
      <div className="pointer-events-none absolute top-0 left-1/2 w-[900px] h-[600px] -translate-x-1/2 -translate-y-1/3 bg-[radial-gradient(ellipse_at_center,rgba(72,108,217,0.28)_0%,transparent_65%)]"></div>

      <div className="max-w-[1100px] mx-auto relative z-10">

        {/* HEADER — eyebrow, logo, heading */}
        <div className="text-center mb-14 md:mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-[#486CD9]/30 text-[#A7BCF5] text-[0.7rem] font-bold tracking-[0.15em] uppercase mb-8 bg-[#486CD9]/15">
            Clinical Study · AIIMS Delhi
          </div>

          {/* Logo in a frosted white chip, on its own glow */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="pointer-events-none absolute inset-0 -m-8 bg-[radial-gradient(circle_at_center,rgba(72,108,217,0.45)_0%,transparent_70%)] blur-lg"></div>
              <div className="relative bg-white rounded-2xl px-7 py-5 shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
                <img src="/aiims.png" alt="AIIMS Delhi" className="h-14 md:h-16 w-auto object-contain" />
              </div>
            </div>
          </div>

          <h2 className="font-display text-4xl md:text-[3.5rem] text-white font-medium leading-[1.1] tracking-tight mb-6">
            What the AIIMS Clinical Study Found.
          </h2>
          <p className="text-[#AEBCD8] text-[1.15rem] leading-relaxed max-w-[650px] mx-auto">
            In a clinical study at AIIMS Delhi, patients using the EASE protocol saw rapid, clinically measured improvement in depression—without medication.
          </p>
          <p className="text-[#7E8DB0] text-[0.8rem] font-medium mt-5 tracking-wide">
            20 participants · 20 sessions over 10 days · scored on the MADRS clinical depression scale
          </p>
        </div>

        {/* RESULTS — hero stat + two supporting cards */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6 lg:gap-8 items-stretch">

          {/* HERO: Symptom Drop + MADRS bar chart */}
          <div className="rounded-[1.75rem] p-8 md:p-10 bg-white/5 border border-white/10 backdrop-blur-sm shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] flex flex-col group hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-1 transition-all duration-300">
            <div>
              <div className="text-white/45 font-bold text-xs tracking-[0.18em] uppercase mb-2">Average Symptom Drop</div>
              <div className="font-bold text-[4rem] md:text-[4.5rem] leading-none tabular-nums bg-gradient-to-br from-[#A9BCFF] to-[#5B7BE0] bg-clip-text text-transparent">63.8%</div>
            </div>

            {/* MADRS bar chart — heights proportional to real scores, grow on scroll */}
            <div className="w-full mt-8 mb-8 flex-grow flex flex-col justify-end">
              <div className="relative flex items-end justify-center gap-8 sm:gap-14 h-56 border-b border-white/10">
                {bars.map((b, i) => (
                  <div key={b.day} className="relative h-full w-14 sm:w-16 flex items-end">
                    {b.delta && (
                      <span
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-2 text-[#9FB4FF] font-bold text-xs tabular-nums whitespace-nowrap"
                        style={{ bottom: `${b.h}%` }}
                      >
                        {b.delta}
                      </span>
                    )}
                    <motion.div
                      className={`w-full rounded-t-xl ${b.cls}`}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${b.h}%` }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.9, delay: 0.15 * i, ease: [0.25, 0.1, 0.25, 1] }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-8 sm:gap-14 mt-3">
                {bars.map((b) => (
                  <div key={b.day} className="w-14 sm:w-16 text-center">
                    <div className={`text-xs ${b.strong ? 'text-white font-bold' : 'text-white/55 font-medium'}`}>{b.day}</div>
                    <div className={`text-[0.7rem] tabular-nums mt-0.5 ${b.strong ? 'text-[#9FB4FF] font-bold' : 'text-white/40 font-semibold'}`}>{b.score}</div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[#A6B4D4] text-[0.9rem] md:text-[0.95rem] leading-relaxed">Average drop in MADRS depression scores over the 10-day program — roughly half the benefit was already measurable by Day 5.</p>
          </div>

          {/* SUPPORTING COLUMN */}
          <div className="flex flex-col gap-6 lg:gap-8">

            {/* Remission ring */}
            <div className="rounded-[1.75rem] p-8 bg-white/5 border border-white/10 backdrop-blur-sm shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] flex-1 flex flex-col items-center text-center group hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-1 transition-all duration-300">
              <div className="relative w-28 h-28 mb-6 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90 overflow-visible" viewBox="0 0 36 36">
                  <defs>
                    <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#9FB4FF" />
                      <stop offset="100%" stopColor="#5B7BE0" />
                    </linearGradient>
                  </defs>
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="3.2" />
                  <motion.path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="url(#ringGrad)"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    className="drop-shadow-[0_0_6px_rgba(138,166,255,0.55)]"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 0.6 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, ease: 'easeInOut' }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-3xl tabular-nums">60%</span>
                </div>
              </div>
              <h3 className="text-[#8FA6EA] font-semibold text-[1.25rem] tracking-tight mb-2">Clinical Remission</h3>
              <p className="text-[#A6B4D4] text-[0.9rem] leading-relaxed">12 of 20 participants no longer met the clinical threshold for depression — two had zero measurable symptoms.</p>
            </div>

            {/* Brain networks */}
            <div className="rounded-[1.75rem] p-8 bg-white/5 border border-white/10 backdrop-blur-sm shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] flex-1 flex flex-col items-center text-center group hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-1 transition-all duration-300">
              <div className="w-28 h-28 mb-6 flex items-center justify-center">
                <svg viewBox="0 0 140 120" className="w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="netStroke" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#A9BCFF" />
                      <stop offset="100%" stopColor="#5B7BE0" />
                    </linearGradient>
                    <filter id="netGlow" x="-40%" y="-40%" width="180%" height="180%">
                      <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor="#6E8AE6" floodOpacity="0.6" />
                    </filter>
                  </defs>
                  {/* Curved edges with a gentle flowing pulse */}
                  <g fill="none" stroke="#7C97EC" strokeWidth="1.75" strokeLinecap="round" opacity="0.55">
                    {netEdges.map((d, i) => (
                      <motion.path
                        key={i}
                        d={d}
                        strokeDasharray="5 8"
                        animate={reduce ? {} : { strokeDashoffset: [26, 0] }}
                        transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
                      />
                    ))}
                  </g>
                  {/* Nodes */}
                  {netNodes.map((n) => (
                    <g key={n.label} filter="url(#netGlow)">
                      <circle cx={n.cx} cy={n.cy} r="17" fill="#486CD9" fillOpacity="0.2" stroke="url(#netStroke)" strokeWidth="2" />
                      <text x={n.cx} y={n.cy} textAnchor="middle" dominantBaseline="central" fill="#C2CFF7" fontSize="13" fontWeight="700">
                        {n.label}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>
              <h3 className="text-[#8FA6EA] font-semibold text-[1.25rem] tracking-tight mb-2">Network Rebalancing</h3>
              <p className="text-[#A6B4D4] text-[0.9rem] leading-relaxed">Helped rebalance the Focus (F), Emotion (E), and Self-Reflection (S) networks most disrupted by depression.</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AIIMSStudy;
