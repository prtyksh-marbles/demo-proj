import React, { useRef, useState, useEffect } from 'react';
import DoctorCard from './DoctorCard';

const doctors = [
  {
    id: 1,
    name: "Dr. Ninad Baste",
    title: "Psychiatrist, Mansa Clinic Pune",
    imageSrc: "/doctor-1.png",
    logoSrc: "/brand-logos/screenshot-20260703130814.png"
  },
  {
    id: 2,
    name: "Dr. Ananya Sharma",
    title: "Neuropsychiatrist, MindCare",
    imageSrc: "/doctor-2.png",
    logoSrc: "/brand-logos/screenshot-20260703130822.png"
  },
  {
    id: 3,
    name: "Dr. Rahul Verma",
    title: "Psychiatrist, Wellness Hyd",
    imageSrc: "/doctor-3.png",
    logoSrc: "/brand-logos/screenshot-20260703130831.png"
  },
  {
    id: 4,
    name: "Dr. Sneha Rao",
    title: "Clinical Psychiatrist, Care Clinic",
    imageSrc: "/doctor-4.png",
    logoSrc: "/brand-logos/screenshot-20260703130839.png"
  }
];

const states = [
  "All",
  "Andhra Pradesh",
  "Chandigarh",
  "Delhi",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Karnataka",
  "Maharashtra",
  "Telangana",
  "Uttar Pradesh",
  "Uttarakhand"
];

const PartneredDoctors = () => {
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

  const doctorElements = doctors.map((doc) => (
    <div key={doc.id} className="shrink-0">
      <DoctorCard 
        name={doc.name}
        title={doc.title}
        imageSrc={doc.imageSrc}
        logoSrc={doc.logoSrc}
      />
    </div>
  ));

  return (
    <section className="bg-white py-24 font-sans text-gray-900 border-t border-gray-100 overflow-hidden">
      
      {/* Custom CSS for a very slow, smooth marquee */}
      <style>
        {`
          @keyframes marquee-doctors {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
          }
          .animate-marquee-doctors {
            animation: marquee-doctors 40s linear infinite;
            will-change: transform;
            backface-visibility: hidden;
          }
          @media (prefers-reduced-motion: reduce) {
            .animate-marquee-doctors { animation: none; }
          }
        `}
      </style>

      {/* Heading & Subheading */}
      <div className="text-center max-w-[850px] mx-auto px-4 mb-16">
        <h2 className="font-display text-4xl md:text-[3.5rem] font-bold text-[#132758] leading-[1.15] tracking-tight mb-6">
          Trusted by Doctors<br /><span className="text-[#486CD9]">Across India</span>
        </h2>
        <p className="text-[#5A6B8A] text-lg md:text-[1.1rem] leading-relaxed max-w-[700px] mx-auto">
          35+ partnered psychiatrists and neuropsychiatrists, from Delhi NCR to Pune to Hyderabad, already prescribe EASE.
        </p>
        <div className="mt-8 flex justify-center">
          <a 
            href="/doctors" 
            className="inline-block bg-[#486CD9] text-white px-10 py-3.5 rounded-full font-semibold text-[0.85rem] hover:bg-[#3A5BBE] transition-all shadow-[0_8px_20px_rgba(72,108,217,0.25)] hover:shadow-[0_12px_25px_rgba(72,108,217,0.35)] hover:-translate-y-1 uppercase tracking-wide"
          >
            Find a Doctor
          </a>
        </div>
      </div>

      {/* Middle Row: Animated Marquee (Full Width) */}
      <div ref={marqueeRef} className="w-full relative flex overflow-hidden mb-12">
        
        {/* Edge fades for seamless look */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[5%] z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[5%] z-10 bg-gradient-to-l from-white to-transparent" />

        {/* Marquee Track */}
        <div className={`flex w-max animate-marquee-doctors items-stretch gap-6 py-2 hover:[animation-play-state:paused] ${inView ? '' : '[animation-play-state:paused]'}`}>
          {[...doctorElements, ...doctorElements].map((el, i) => React.cloneElement(el, { key: `duplicate-${i}` }))}
        </div>
        
      </div>
      
      {/* Bottom Row: State Buttons */}
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="text-center mb-6">
          <p className="text-[#5A6B8A] font-medium text-[0.95rem]">
            Or find an EASE partnered clinic in your state
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2.5">
          {states.map((state) => (
            <a 
              key={state}
              href="#"
              className="bg-[#f4f6f9] hover:bg-[#e4e7ec] text-[#444] text-[0.85rem] font-medium py-2 px-5 rounded-full transition-colors duration-200 cursor-pointer no-underline flex items-center"
            >
              {state}
            </a>
          ))}
        </div>
      </div>

    </section>
  );
};

export default PartneredDoctors;
