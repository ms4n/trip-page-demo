import React from "react";
import "./styles/trip-card.css";

interface InfoCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  className?: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  icon,
  label,
  value,
  className,
}) => {
  return (
    <div className={`info-card ${className || ""}`}>
      <div className="info-card-header">
        <div className="w-[20px] h-[20px] text-white">{icon}</div>
        <p className="text-[16px] text-white font-geist">{label}</p>
      </div>
      <p className="info-card-value">{value}</p>
    </div>
  );
}; 