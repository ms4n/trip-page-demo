import React from "react";
import "./styles/trip-card.css";

interface AmenityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const AmenityCard: React.FC<AmenityCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="amenity-card">
      <div className="text-white/60">{icon}</div>
      <h4 className="text-white font-geist text-[16px] font-normal leading-[150%] self-stretch">
        {title}
      </h4>
      <p className="text-white font-geist text-[16px] font-normal leading-[150%]">
        {description}
      </p>
    </div>
  );
}; 