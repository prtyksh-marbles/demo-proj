import React from 'react';
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

const PartneredDoctorsBottom = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0A1633] via-[#0D1E44] to-[#16294C] py-24 font-sans">
      
      {/* Soft blue bloom behind the header */}
      <div className="pointer-events-none absolute top-0 left-1/2 w-[900px] h-[600px] -translate-x-1/2 -translate-y-1/3 bg-[radial-gradient(ellipse_at_center,rgba(72,108,217,0.25)_0%,transparent_65%)]"></div>

      {/* Heading & Subheading */}
      <div className="relative z-10 text-center max-w-[850px] mx-auto px-4 mb-16">
        <h2 className="font-display text-4xl md:text-[3.5rem] font-medium text-white leading-[1.15] tracking-tight mb-6">
          Trusted by Doctors<br /><span className="text-[#8AA6FF]">Across India</span>
        </h2>
        <p className="text-[#AEBCD8] text-lg md:text-[1.1rem] leading-relaxed max-w-[700px] mx-auto">
          35+ partnered psychiatrists and neuropsychiatrists, from Delhi NCR to Pune to Hyderabad, already prescribe EASE.
        </p>
      </div>

      {/* Two Column Layout: 60% Left / 40% Right */}
      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center px-6 md:px-12 lg:px-24">
        
        {/* Left Column (60%) - Map */}
        <div className="lg:col-span-3 w-full flex justify-center items-center">
          <img 
            src="/in.svg" 
            alt="Map of India" 
            className="w-full h-auto object-contain mx-auto drop-shadow-[0_0_20px_rgba(138,166,255,0.15)]"
          />
        </div>

        {/* Right Column (40%) */}
        <div className="lg:col-span-2 w-full flex flex-col">
          
          {/* Middle Row: Carousel */}
          <div className="w-full overflow-hidden">
            <div className="flex gap-6 overflow-x-auto pb-8 pt-2 px-2 -mx-2 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {doctors.map((doc) => (
                <div key={doc.id} className="snap-start shrink-0">
                  <DoctorCard 
                    name={doc.name}
                    title={doc.title}
                    imageSrc={doc.imageSrc}
                    logoSrc={doc.logoSrc}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Bottom Row: State Buttons */}
          <div className="w-full mt-2">
            <div className="flex flex-wrap gap-2.5">
              {states.map((state) => (
                <a 
                  key={state}
                  href="#"
                  className="bg-white/10 hover:bg-white/20 text-[#C2CFF7] hover:text-white border border-white/10 text-[0.85rem] font-medium py-2 px-5 rounded-full transition-colors duration-200 cursor-pointer no-underline flex items-center backdrop-blur-sm"
                >
                  {state}
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PartneredDoctorsBottom;
