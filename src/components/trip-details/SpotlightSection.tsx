import React from "react";

interface SpotlightEvent {
  title: string;
  image: string;
  description?: string;
}

interface EventCardProps {
  event: SpotlightEvent;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => (
  <div className="flex flex-col items-center flex-1 min-w-0 rounded-xl border border-dashed border-white/[0.08] bg-[#141414]">
    <div
      className="w-full h-[212px] bg-lightgray bg-center bg-cover bg-no-repeat rounded-t-xl"
      style={{ backgroundImage: `url(${event.image})` }}
    />
    <div className="flex justify-center items-center gap-2 self-stretch px-2 py-4 min-w-0">
      <span className="text-white text-[16px] font-geist font-medium leading-[110%] tracking-[-0.32px] opacity-90 truncate">
        {event.title}
      </span>
    </div>
  </div>
);

interface SpotlightSectionProps {
  events: SpotlightEvent[];
}

export const SpotlightSection: React.FC<SpotlightSectionProps> = ({ events }) => {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-4">
        <h3
          className="text-white text-[24px] font-inter font-medium leading-[100%] tracking-[-0.96px]"
          style={{ textShadow: "0px 4px 12px rgba(0, 0, 0, 0.10)" }}
        >
          Spotlight events
        </h3>
      </div>

      <div className="flex flex-col items-center gap-4 w-full">
        <div className="grid grid-cols-2 gap-4 w-full max-w-full">
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};
