import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  // variants for staggered cards
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2, // Small delay for aesthetic purposes
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2 } }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white font-sans text-gray-900">
      {/* Background layer */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-[1]"
        style={{ backgroundImage: "url('/cloud.png')" }}
      ></div>
      
      {/* Cards Carousel (3D) */}
      <motion.div 
        className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[200px] z-[4] flex justify-center items-center perspective-[1200px] [transform-style:preserve-3d]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
         {/* Card 1 */}
         <motion.div variants={cardVariants} className="absolute w-[220px] h-[130px] p-5 flex flex-col justify-between rounded-[20px] shadow-[0_15px_35px_rgba(0,0,0,0.08)] backdrop-blur-[12px] bg-gradient-to-br from-[#6b8cee] to-[#486CD9] text-white" style={{ x: -420, y: 30, z: -50, rotateY: 15, rotateZ: -4 }}>
           <div>
             <div className="text-[0.85rem] font-medium opacity-90">Therapy</div>
             <div className="text-[1.25rem] font-semibold mt-1 leading-[1.2]">Today's Session</div>
           </div>
           <div className="w-full h-[35px] rounded opacity-40" style={{ background: 'repeating-linear-gradient(90deg, white, white 4px, transparent 4px, transparent 6px)' }}></div>
         </motion.div>

         {/* Card 2 */}
         <motion.div variants={cardVariants} className="absolute w-[220px] h-[130px] p-5 flex flex-col justify-between rounded-[20px] shadow-[0_15px_35px_rgba(0,0,0,0.08)] backdrop-blur-[12px] bg-white/85 border border-white/90" style={{ x: -140, y: -10, z: 0, rotateY: 5, rotateZ: -2 }}>
           <div>
             <div className="text-[0.85rem] text-[#666] font-medium">Daily Journal</div>
             <div className="text-[1.25rem] text-[#222] font-semibold mt-1 leading-[1.2]">Routine</div>
           </div>
           <div className="w-full h-[35px] rounded opacity-80" style={{ background: 'repeating-linear-gradient(90deg, #486CD9, #486CD9 4px, transparent 4px, transparent 6px)' }}></div>
         </motion.div>

         {/* Card 3 */}
         <motion.div variants={cardVariants} className="absolute w-[220px] h-[130px] p-5 flex flex-col justify-between rounded-[20px] shadow-[0_15px_35px_rgba(0,0,0,0.08)] backdrop-blur-[12px] bg-white/85 border border-white/90" style={{ x: 140, y: -10, z: 0, rotateY: -5, rotateZ: 2 }}>
           <div>
             <div className="text-[0.85rem] text-[#666] font-medium">Grow with</div>
             <div className="text-[1.25rem] text-[#222] font-semibold mt-1 leading-[1.2]">Community</div>
           </div>
           <div className="w-full h-[35px] rounded opacity-80" style={{ background: 'repeating-linear-gradient(90deg, #486CD9, #486CD9 4px, transparent 4px, transparent 6px)' }}></div>
         </motion.div>

         {/* Card 4 */}
         <motion.div variants={cardVariants} className="absolute w-[220px] h-[130px] p-5 flex flex-col justify-between rounded-[20px] shadow-[0_15px_35px_rgba(0,0,0,0.08)] backdrop-blur-[12px] bg-white/85 border border-white/90" style={{ x: 420, y: 30, z: -50, rotateY: -15, rotateZ: 4 }}>
           <div>
             <div className="text-[0.85rem] text-[#666] font-medium">Track</div>
             <div className="text-[1.25rem] text-[#222] font-semibold mt-1 leading-[1.2]">Your Mood</div>
           </div>
           <div className="w-full h-[35px] rounded opacity-80" style={{ background: 'repeating-linear-gradient(90deg, #486CD9, #486CD9 4px, transparent 4px, transparent 6px)' }}></div>
         </motion.div>
      </motion.div>

      {/* Cutout Layer */}
      <motion.div 
        className="absolute top-[12vh] left-0 w-full h-full bg-top bg-no-repeat z-[5] pointer-events-none"
        style={{ backgroundImage: "url('/cutout.png')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      ></motion.div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-[35%] bg-gradient-to-t from-white via-white/80 to-transparent z-[6] pointer-events-none"></div>

      {/* Navbar */}
      <nav className="relative z-10 flex justify-between items-center px-[60px] py-[30px]">
        <div className="logo">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" className="w-8 h-8 stroke-white">
              <path d="M10 4L7 20M17 4L14 20M4 10h16M4 14h16" transform="rotate(-15 12 12)" />
            </svg>
        </div>
        <div className="flex bg-white/95 p-1.5 rounded-[50px] gap-[5px] shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
            <a href="#" className="no-underline text-white bg-[#486CD9] px-6 py-2.5 rounded-[40px] text-sm font-medium transition-all duration-300">Home</a>
            <a href="#" className="no-underline text-[#555] px-6 py-2.5 rounded-[40px] text-sm font-medium transition-all duration-300 hover:bg-gray-100">Testimonial</a>
            <a href="#" className="no-underline text-[#555] px-6 py-2.5 rounded-[40px] text-sm font-medium transition-all duration-300 hover:bg-gray-100">Features</a>
            <a href="#" className="no-underline text-[#555] px-6 py-2.5 rounded-[40px] text-sm font-medium transition-all duration-300 hover:bg-gray-100">About Us</a>
        </div>
        <button className="bg-white text-[#222] border-none py-2.5 pr-[15px] pl-[25px] rounded-[40px] font-semibold text-sm flex items-center gap-3 cursor-pointer shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
            Log In
            <div className="bg-[#486CD9] text-white w-[26px] h-[26px] rounded-full flex justify-center items-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                <line x1="5" y1="19" x2="19" y2="5"></line>
                <polyline points="10 5 19 5 19 14"></polyline>
              </svg>
            </div>
        </button>
      </nav>

      {/* Hero Content */}
      <motion.div 
        className="relative z-10 text-center text-white mt-[5vh] flex flex-col items-center"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="font-display text-[4.5rem] font-medium m-0 max-w-[800px] leading-[1.1] tracking-[-1px]">
          Your gentle path to healing.
        </h1>
        <p className="text-[1.15rem] font-normal max-w-[600px] mx-auto mt-[25px] mb-[35px] leading-[1.5] opacity-95">
          EASE is a safe, completely medication-free device designed to gently guide you back to feeling like yourself.
        </p>
        <button className="bg-[#252825] text-white border-none py-3 pr-4 pl-[30px] rounded-[40px] text-base font-medium flex items-center gap-[15px] cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-transform duration-200 hover:scale-105">
            Download
            <div className="bg-[#486CD9] text-white w-[26px] h-[26px] rounded-full flex justify-center items-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                <line x1="5" y1="19" x2="19" y2="5"></line>
                <polyline points="10 5 19 5 19 14"></polyline>
              </svg>
            </div>
        </button>
      </motion.div>

      {/* Bottom Stats */}
      <div className="absolute bottom-[40px] left-[60px] right-[60px] flex justify-between items-end z-10">
        <div className="flex flex-col">
            <h2 className="text-[4.5rem] text-[#2848aa] m-0 font-medium leading-[1]">99%</h2>
            <p className="text-[#444] text-[0.95rem] underline underline-offset-4 my-[15px] font-semibold">Satisfaction for our services</p>
            <div className="flex gap-3">
                {[
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>,
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>,
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>,
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>,
                  <><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></>
                ].map((iconContent, idx) => (
                  <div key={idx} className="w-[36px] h-[36px] bg-[#486CD9] rounded-full flex justify-center items-center text-white">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                        {iconContent}
                      </svg>
                  </div>
                ))}
            </div>
        </div>
        
        <div className="flex flex-col items-end max-w-[300px]">
            <div className="flex gap-1.5 mb-[25px]">
                <div className="w-2 h-2 rounded-full bg-[#486CD9]"></div>
                <div className="w-2 h-2 rounded-full bg-[#d0d0d0]"></div>
                <div className="w-2 h-2 rounded-full bg-[#d0d0d0]"></div>
            </div>
            <div className="flex items-center gap-5 mb-2.5">
                <div className="w-6 h-6">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" className="stroke-[#8ab6c4]">
                    <path d="M10 4L7 20M17 4L14 20M4 10h16M4 14h16" transform="rotate(-15 12 12)" />
                  </svg>
                </div>
                <div className="flex">
                    <div className="w-8 h-8 rounded-full border-2 border-white ml-0 bg-[#fca5a5] bg-cover bg-center"></div>
                    <div className="w-8 h-8 rounded-full border-2 border-white -ml-3 bg-[#6ee7b7] bg-cover bg-center"></div>
                    <div className="w-8 h-8 rounded-full border-2 border-white -ml-3 bg-[#93c5fd] bg-cover bg-center"></div>
                </div>
                <h2 className="text-[2.5rem] text-[#2848aa] m-0 font-medium">128K+</h2>
            </div>
            <p className="text-[0.85rem] text-[#777] m-0 mt-1.5 leading-[1.4] text-left">
                Our user community keeps growing,<br/>proof we can reach everybody hearts
            </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
