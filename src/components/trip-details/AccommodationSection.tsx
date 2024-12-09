import React from "react";
import { AccommodationCard } from "./AccommodationCard";
import "./styles/AccommodationSection.css";

interface Accommodation {
  title: string;
  location: string;
  description: string;
  images: string[];
  roomType: string;
  startDate: string;
  endDate: string;
}

interface AccommodationSectionProps {
  accommodation: Accommodation[];
}

export const AccommodationSection: React.FC<AccommodationSectionProps> = ({ accommodation }) => {
  return (
    <div className="accommodation-section">
      <h2 className="accommodation-section-title">Accommodation</h2>
      <div className="accommodation-cards-container">
        {accommodation && accommodation.map((place, index) => (
          <AccommodationCard
            key={index}
            images={place.images}
            title={`${place.title}, ${place.location}`}
            description={`${place.description}`}
          />
        ))}
      </div>
    </div>
  );
};
