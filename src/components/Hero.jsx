import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-white font-sans text-gray-900">
      {/* Background layer */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-[1] opacity-70"
        style={{ backgroundImage: "url('/cloud.png')" }}
      ></div>
      
      {/* Data Cards (Row) */}
      <div className="absolute top-[40%] left-0 w-full z-[4] pointer-events-none hidden lg:flex justify-around px-10">
         <div className="flex gap-6">
         {/* Card 1: Efficacy */}
         <motion.div
           className="w-[220px] h-[220px] p-6 flex flex-col justify-between rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl bg-white/95 border border-white/80 pointer-events-auto"
           style={{ transform: "perspective(1000px) rotateY(15deg)" }}
         >
           <div className="flex flex-col">
             <div className="text-[3rem] font-display font-bold text-[#486CD9] leading-none tracking-tighter">63.8%</div>
             <div className="text-[0.85rem] text-[#555] font-medium mt-2 leading-snug">Average reduction in<br/>depression severity</div>
           </div>
           <div className="h-[70px] w-full mt-3 flex items-end">
              <svg viewBox="0 0 100 50" className="w-full h-full stroke-[#486CD9] overflow-visible" fill="none" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                 <path d="M5 10 L30 35 L55 25 L90 45" />
                 <circle cx="90" cy="45" r="5" fill="#486CD9" />
              </svg>
           </div>
         </motion.div>

         {/* Card 2: Speed */}
         <motion.div
           className="w-[220px] h-[220px] p-6 flex flex-col justify-between rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl bg-white/95 border border-white/80 pointer-events-auto"
         
         >
           <div className="flex flex-col">
             <div className="text-[3rem] font-display font-bold text-[#486CD9] leading-none tracking-tighter">60%</div>
             <div className="text-[0.85rem] text-[#555] font-medium mt-2 leading-snug">Of patients reached<br/>clinical remission</div>
           </div>
           <div className="h-[70px] w-full mt-3 flex items-end gap-[6px]">
              <div className="flex-1 bg-[#e8edfc] rounded-t-md h-[30%]"></div>
              <div className="flex-1 bg-[#e8edfc] rounded-t-md h-[50%]"></div>
              <div className="flex-1 bg-[#e8edfc] rounded-t-md h-[70%]"></div>
              <div className="flex-1 bg-[#486CD9] rounded-t-md h-[90%] relative shadow-sm">
                 <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white border-2 border-[#486CD9] rounded-full shadow-sm"></div>
              </div>
              <div className="flex-1 bg-[#f0f0f0] rounded-t-md h-[10%] opacity-50"></div>
           </div>
         </motion.div>
         </div>

         <div className="flex gap-6">
         {/* Card 3: Longevity */}
         <motion.div
           className="w-[220px] h-[220px] p-6 flex flex-col justify-between rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl bg-white/95 border border-white/80 pointer-events-auto"
         >
           <div className="flex flex-col">
             <div className="text-[3rem] font-display font-bold text-[#00838f] leading-none tracking-tighter">33.3%</div>
             <div className="text-[0.85rem] text-[#555] font-medium mt-2 leading-snug">Improvement already<br/>visible by Day 5</div>
           </div>
           <div className="h-[70px] w-full mt-3 flex items-end">
              <svg viewBox="0 0 100 50" className="w-full h-full stroke-[#00838f] overflow-visible" fill="none" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                 <path d="M5 45 L25 15 L45 25 L65 10 L95 10" />
                 <circle cx="95" cy="10" r="5" fill="#00838f" />
              </svg>
           </div>
         </motion.div>

         {/* Card 4: Comparison */}
         <motion.div
           className="w-[220px] h-[220px] p-6 flex flex-col justify-between rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl bg-white/95 border border-white/80 pointer-events-auto"
           style={{ transform: "perspective(1000px) rotateY(-15deg)" }}
         >
           <div className="flex flex-col">
             <div className="text-[3rem] font-display font-bold text-[#00838f] leading-none tracking-tighter">10</div>
             <div className="text-[0.85rem] text-[#555] font-medium mt-2 leading-snug">Days total treatment<br/>duration (20 sessions)</div>
           </div>
           <div className="h-[70px] w-full mt-3 flex items-end gap-[12px] justify-center">
              <div className="flex flex-col justify-end items-center h-full w-[35%]">
                 <div className="w-full bg-[#e0f7fa] rounded-t-md h-[45%]"></div>
              </div>
              <div className="flex flex-col justify-end items-center h-full w-[35%]">
                 <div className="w-full bg-[#00838f] rounded-t-md h-[95%] shadow-md"></div>
              </div>
           </div>
         </motion.div>
         </div>
      </div>

      {/* Cutout Layer */}
      <motion.div 
        className="absolute top-[20vh] left-0 w-full h-full bg-center bg-contain bg-no-repeat z-[5] pointer-events-none"
        style={{ backgroundImage: "url('/new hero .png')" }}
        initial={{ opacity: 0, scale: 0.60 }}
        animate={{ opacity: 1, scale: 0.7}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      ></motion.div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-white via-white/90 to-transparent z-[6] pointer-events-none"></div>

      {/* Navbar */}
      <motion.nav 
        className="relative z-10 flex justify-between items-center px-[60px] py-[30px]"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="logo flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" className="w-8 h-8 stroke-[#486CD9]">
              <path d="M10 4L7 20M17 4L14 20M4 10h16M4 14h16" transform="rotate(-15 12 12)" />
            </svg>
            <span className="font-bold text-xl text-[#222] tracking-tight">Marbles</span>
        </div>
        <div className="flex bg-white/80 backdrop-blur-md p-1.5 rounded-[50px] gap-[5px] shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-white/40">
            <a href="#" className="no-underline text-white bg-[#486CD9] px-6 py-2.5 rounded-[40px] text-sm font-medium transition-colors duration-200">Home</a>
            <a href="#" className="no-underline text-[#555] px-6 py-2.5 rounded-[40px] text-sm font-medium transition-colors duration-200 hover:bg-gray-100">Science</a>
            <a href="#" className="no-underline text-[#555] px-6 py-2.5 rounded-[40px] text-sm font-medium transition-colors duration-200 hover:bg-gray-100">For Clinicians</a>
            <a href="#" className="no-underline text-[#555] px-6 py-2.5 rounded-[40px] text-sm font-medium transition-colors duration-200 hover:bg-gray-100">Testimonials</a>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="bg-white text-[#222] border border-gray-100 py-2.5 pr-[15px] pl-[25px] rounded-[40px] font-semibold text-sm flex items-center gap-3 cursor-pointer shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)]"
        >
            Book Demo
            <div className="bg-[#486CD9] text-white w-[26px] h-[26px] rounded-full flex justify-center items-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                <line x1="5" y1="19" x2="19" y2="5"></line>
                <polyline points="10 5 19 5 19 14"></polyline>
              </svg>
            </div>
        </motion.button>
      </motion.nav>

      {/* Hero Content */}
      <motion.div 
        className="relative z-10 text-center text-[#111] mt-[1vh] flex flex-col items-center"
        initial={{ y: 20, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
      >
        <h1 className="font-display text-[3rem] font-bold m-0 max-w-[850px] leading-[1.1] tracking-tight">
          Breakthrough Neuro Psychiatry Care.<br/><span className="text-[#486CD9]">With or Without Medication.</span>
        </h1>
        <p className="text-[1rem] font-medium text-[#444] max-w-[700px] mx-auto mt-[25px] mb-[35px] leading-[1.5]">
          In a clinical study conducted at AIIMS Delhi, patients using the EASE protocol saw rapid, clinically measured improvement. <span className="font-bold text-[#222]">India's first CDSCO-approved</span> neuromodulation device.
        </p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="bg-[#252825] text-white border-none py-2 pr-4 pl-[30px] rounded-[40px] text-sm font-semibold flex items-center gap-[15px] cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)]"
        >
            Get EASE for Home
            <div className="bg-[#486CD9] text-white w-[30px] h-[30px] rounded-full flex justify-center items-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
        </motion.button>
      </motion.div>

      {/* Bottom Stats */}
      <motion.div 
        className="absolute bottom-[40px] left-[60px] right-[60px] flex justify-between items-end z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
      >
        <a 
          href="https://youtu.be/H9sivqJIm_8?si=b6Xwwcdj83MRL17y" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-6 cursor-pointer no-underline group"
        >
            <div className="relative w-[240px] aspect-video rounded-[16px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-black/5 group-hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-shadow duration-300 shrink-0">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('/thumbnail.jpg')" }}></div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#486CD9] shadow-md group-hover:scale-110 transition-transform duration-300">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-1">
                            <path d="M5 3l14 9-14 9V3z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <span className="text-[#486CD9] text-[0.8rem] font-bold tracking-wider uppercase mb-1.5">Watch Video</span>
                <span className="text-[#222] text-[1.5rem] font-bold leading-[1.1] group-hover:text-[#486CD9] transition-colors">How EASE<br/>works</span>
                <span className="text-[#555] text-[0.95rem] font-medium mt-2 leading-snug">Discover the science<br/>behind our care</span>
            </div>
        </a>
        
        <div className="flex flex-col items-end max-w-[320px]">
            <div className="flex items-center gap-5 mb-1.5">
                <div className="flex">
                    <div className="w-10 h-10 rounded-full border-[3px] border-white ml-0 bg-[#fca5a5] bg-cover bg-center shadow-sm z-30" style={{ backgroundImage: "url('https://i.pravatar.cc/100?img=1')" }}></div>
                    <div className="w-10 h-10 rounded-full border-[3px] border-white -ml-4 bg-[#6ee7b7] bg-cover bg-center shadow-sm z-20" style={{ backgroundImage: "url('https://i.pravatar.cc/100?img=2')" }}></div>
                    <div className="w-10 h-10 rounded-full border-[3px] border-white -ml-4 bg-[#93c5fd] bg-cover bg-center shadow-sm z-10" style={{ backgroundImage: "url('https://i.pravatar.cc/100?img=3')" }}></div>
                </div>
                <h2 className="text-[2.5rem] text-[#222] m-0 font-bold tracking-tight">13,000+</h2>
            </div>
            <p className="text-[0.9rem] text-[#555] m-0 mt-1 leading-[1.5] text-right font-medium">
                Sessions completed across India.<br/>9 out of 10 patients show measurable progress.
            </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
