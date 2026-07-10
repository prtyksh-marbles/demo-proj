import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const DoctorCard = ({ name, title, imageSrc, logoSrc }) => {
  return (
    <div className="relative w-[340px] md:w-[380px] h-[420px] bg-[#f4f6f9] rounded-2xl overflow-hidden group cursor-pointer border border-gray-100 flex-shrink-0 transition-shadow duration-300 hover:shadow-xl">
      {/* Doctor Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-[1.03]"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />
      
      {/* Top Right Arrow Button */}
      <div className="absolute top-4 right-4 w-10 h-10 bg-black/20 backdrop-blur-md rounded-[10px] flex items-center justify-center text-white transition-colors duration-300 group-hover:bg-[#486CD9]">
        <ArrowUpRight size={20} />
      </div>

      {/* Bottom Details Row */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-white/95 backdrop-blur-xl rounded-[12px] p-3.5 flex items-center justify-between shadow-[0_8px_20px_rgba(0,0,0,0.06)] border border-white/60">
          <div className="flex flex-col max-w-[65%]">
            <h3 className="font-bold text-[#222] text-[0.95rem] leading-tight truncate">{name}</h3>
            <p className="text-[#666] text-[0.75rem] font-medium mt-1 leading-snug">
              {title}
            </p>
          </div>
          <div className="w-[55px] h-[35px] flex items-center justify-end shrink-0">
            <img 
              src={logoSrc} 
              alt="Clinic Logo" 
              className="max-w-full max-h-full object-contain grayscale opacity-70 mix-blend-multiply group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
