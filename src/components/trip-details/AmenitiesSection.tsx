import React, { useState } from "react";
import { Bed, Utensils, Grip } from "lucide-react";

interface Amenity {
  icon: string;
  title: string;
  description: string;
  price?: number;
}

interface AmenitiesData {
  included: Amenity[];
  notIncluded: Amenity[];
  addOns: Amenity[];
}

interface AmenityCardProps {
  amenity: Amenity;
}

const AmenityCard: React.FC<AmenityCardProps> = ({ amenity }) => {
  // Map string icon names to components
  const iconMap: { [key: string]: React.ReactNode } = {
    bed: <Bed className="w-5 h-5 text-white/60" strokeWidth={1.5} />,
    utensils: <Utensils className="w-5 h-5 text-white/60" strokeWidth={1.5} />,
  };

  return (
    <div className="flex flex-col justify-center items-start gap-2 self-stretch rounded-lg shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)]">
      <div className="text-white/60">{iconMap[amenity.icon] || <Grip className="w-5 h-5" strokeWidth={1.5} />}</div>
      <h4 className="text-white/60 font-geist text-[16px] font-normal leading-[150%] self-stretch">
        {amenity.title}
      </h4>
      <p className="text-white font-geist text-[16px] font-normal leading-[150%]">
        {amenity.description}
      </p>
      {amenity.price && (
        <p className="text-white/60 font-geist text-[14px] font-normal leading-[150%]">
          Additional cost: ₹{amenity.price}
        </p>
      )}
    </div>
  );
};

interface AmenitiesSectionProps {
  amenities: AmenitiesData;
}

export const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({ amenities }) => {
  const [activeTab, setActiveTab] = useState<'included' | 'notIncluded' | 'addOns'>('included');

  const currentAmenities = amenities[activeTab];

  return (
    <div className="mt-8 mb-8">
      <h3 className="text-white font-geist text-[24px] font-medium leading-[120%] tracking-[-0.48px] opacity-95">
        Amenities
      </h3>
      <div className="flex items-center gap-4 self-stretch mt-7">
        <button 
          className={`flex justify-center items-center gap-2 px-4 py-2 rounded-lg ${
            activeTab === 'included' ? 'bg-white' : 'bg-[#171717]'
          }`}
          onClick={() => setActiveTab('included')}
        >
          <span className={`font-geist text-[16px] font-medium leading-[120%] tracking-[-0.32px] ${
            activeTab === 'included' ? 'text-[#0B0B0B] opacity-95' : 'text-white opacity-60'
          }`}>
            Included
          </span>
        </button>
        <button 
          className={`flex justify-center items-center gap-2 px-4 py-2 rounded-lg ${
            activeTab === 'notIncluded' ? 'bg-white' : 'bg-[#171717]'
          }`}
          onClick={() => setActiveTab('notIncluded')}
        >
          <span className={`font-geist text-[16px] font-medium leading-[120%] tracking-[-0.32px] ${
            activeTab === 'notIncluded' ? 'text-[#0B0B0B] opacity-95' : 'text-white opacity-60'
          }`}>
            Not Included
          </span>
        </button>
        <button 
          className={`flex justify-center items-center gap-2 px-4 py-2 rounded-lg ${
            activeTab === 'addOns' ? 'bg-white' : 'bg-[#171717]'
          }`}
          onClick={() => setActiveTab('addOns')}
        >
          <span className={`font-geist text-[16px] font-medium leading-[120%] tracking-[-0.32px] ${
            activeTab === 'addOns' ? 'text-[#0B0B0B] opacity-95' : 'text-white opacity-60'
          }`}>
            Add-ons
          </span>
        </button>
      </div>
      <div className="mt-9">
        {currentAmenities.map((amenity, index) => (
          <React.Fragment key={index}>
            <AmenityCard amenity={amenity} />
            {index < currentAmenities.length - 1 && (
              <div className="h-[1px] bg-white/10 my-4" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
