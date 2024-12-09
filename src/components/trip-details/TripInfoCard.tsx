import React from "react";
import "./styles/TripDetails.css";

interface TripInfoCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  className?: string;
}

export const TripInfoCard: React.FC<TripInfoCardProps> = ({
  icon,
  label,
  value,
  className,
}) => {
  return (
    <div className={`info-card ${className || ""}`}>
      <div className="info-card-header">
        <div className="w-[20px] h-[20px] text-white/90">{icon}</div>
        <p className="text-[16px] text-white/90 font-geist font-medium leading-[110%] tracking-[-0.32px]">{label}</p>
      </div>
      <p className="info-card-value">{value}</p>
    </div>
  );
};
