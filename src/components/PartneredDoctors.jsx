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

const PartneredDoctors = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-24 font-sans text-gray-900 border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto">
        {/* Heading & Subheading */}
        <div className="text-center max-w-[850px] mx-auto px-4 mb-16">
          <h2 className="font-display text-4xl md:text-[3.5rem] font-bold text-[#132758] leading-[1.15] tracking-tight mb-6">
            Trusted by Doctors<br /><span className="text-[#486CD9]">Across India</span>
          </h2>
          <p className="text-[#5A6B8A] text-lg md:text-[1.1rem] leading-relaxed max-w-[700px] mx-auto">
            35+ partnered psychiatrists and neuropsychiatrists, from Delhi NCR to Pune to Hyderabad, already prescribe EASE.
          </p>
        </div>

        {/* Two Column Layout: 40% Left / 60% Right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          
          {/* Left Column (40%) - Map */}
          <div className="lg:col-span-2 w-full h-full flex justify-center items-center">
            <img 
              src="/in.svg" 
              alt="Map of India" 
              className="w-full h-auto max-h-[600px] object-contain mx-auto"
            />
          </div>

          {/* Right Column (60%) */}
          <div className="lg:col-span-3 w-full h-full flex flex-col">
            
            {/* Top Row: Find a Doctor Link */}
            <div className="w-full flex justify-end mb-8">
              <a 
                href="http://localhost:3000/doctors/"
                className="text-[#486CD9] font-semibold text-[1.05rem] flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                Find a Doctor
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>

            {/* Middle Row: Carousel */}
            <div className="flex-grow w-full overflow-hidden mt-4">
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
                    className="bg-[#f4f6f9] hover:bg-[#e4e7ec] text-[#444] text-[0.85rem] font-medium py-2 px-4 rounded-full transition-colors duration-200 cursor-pointer no-underline flex items-center"
                  >
                    {state}
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default PartneredDoctors;
