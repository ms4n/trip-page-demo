import React, { useState, useEffect, useRef } from "react";
import {
  Calendar,
  ChevronDown,
  Plane,
  Users,
  MapPin,
  Car,
  Utensils,
  Camera,
} from "lucide-react";
import { cn } from "../../lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Badge } from "../ui/badge";

interface ItineraryDay {
  day: number;
  month: string;
  title: string;
  badges?: {
    label: string;
    bgColor?: string;
  }[];
  activities: {
    icon: string;
    title: string;
    description: string;
    included: boolean;
    images?: string[];
  }[];
}

interface ItineraryItemProps {
  day: ItineraryDay;
  isExpanded?: boolean;
  onToggle?: () => void;
}

interface ItineraryContentProps {
  activity: {
    icon: string;
    title: string;
    description: string;
    included: boolean;
    images?: string[];
  };
}

const Separator = () => {
  return <div className="h-[1px] w-full bg-white/10 my-6" />;
};

const ItineraryContent: React.FC<ItineraryContentProps> = ({ activity }) => {
  // Map string icon names to components
  const iconMap: { [key: string]: React.ReactNode } = {
    plane: <Plane className="w-5 h-5" strokeWidth={1.5} />,
    users: <Users className="w-5 h-5" strokeWidth={1.5} />,
    mapPin: <MapPin className="w-5 h-5" strokeWidth={1.5} />,
    car: <Car className="w-5 h-5" strokeWidth={1.5} />,
    utensils: <Utensils className="w-5 h-5" strokeWidth={1.5} />,
    camera: <Camera className="w-5 h-5" strokeWidth={1.5} />,
  };

  return (
    <div className="flex flex-col justify-center items-start gap-2 self-stretch">
      <div className="text-white/60">
        {iconMap[activity.icon]}
      </div>
      <div className="flex justify-between items-center w-full">
        <h4 className="text-white font-geist text-[16px] font-normal leading-[150%]">
          {activity.title}
        </h4>
        {activity.included && <Badge variant="itinerary">included</Badge>}
      </div>
      <p className="text-white/60 font-geist text-[12px] font-normal leading-[20px] self-stretch">
        {activity.description}
      </p>
      {activity.images && activity.images.length > 0 && (
        <div className="flex items-center gap-3 mt-3">
          {activity.images.map((image, index) => (
            <LazyLoadImage
              key={index}
              src={image}
              alt={`${activity.title} - Image ${index + 1}`}
              effect="blur"
              className="w-[108px] h-[116px] rounded-[12px] object-cover bg-lightgray"
              wrapperClassName="w-[108px] h-[116px]"
            />
          ))}
        </div>
      )}
    </div>
  );
};

const ItineraryItem: React.FC<ItineraryItemProps> = ({
  day,
  isExpanded = false,
  onToggle,
}) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isExpanded && itemRef.current) {
      const yOffset = -100;
      const element = itemRef.current;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  }, [isExpanded]);

  return (
    <motion.div
      ref={itemRef}
      layout="position"
      transition={{
        layout: { duration: 0.15, ease: [0.4, 0, 0.2, 1] },
      }}
      className="flex flex-col justify-center items-start self-stretch rounded-[16px] bg-black p-0 overflow-hidden will-change-transform"
      style={{
        transform: "translate3d(0,0,0)",
      }}
    >
      <div className="flex w-full">
        <motion.div
          layout="position"
          transition={{
            layout: { duration: 0.15, ease: [0.4, 0, 0.2, 1] },
          }}
          className={cn(
            "flex flex-col justify-center items-center w-[65px] min-w-[65px] py-[8px]",
            isExpanded ? "bg-[#159256]" : "bg-[#F5F5F5] rounded-l-[16px]"
          )}
        >
          <motion.div
            layout="position"
            transition={{
              layout: { duration: 0.15, ease: [0.4, 0, 0.2, 1] },
            }}
            className="flex flex-col items-center w-full"
          >
            {isExpanded ? (
              <>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1 }}
                  className="text-white/70 font-geist text-[10px] font-medium leading-[120%] tracking-[-0.2px]"
                >
                  F
                </motion.span>
                <motion.span
                  layout
                  className="text-white/90 font-geist text-[20px] font-medium leading-[120%] tracking-[-0.4px]"
                >
                  {day.day}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1 }}
                  className="text-white/70 font-geist text-[10px] font-medium leading-[120%] tracking-[-0.2px]"
                >
                  {day.month}
                </motion.span>
              </>
            ) : (
              <>
                <motion.span
                  layout
                  className="text-black/90 font-geist text-[17px] font-medium leading-[100%] tracking-[-0.34px]"
                >
                  {day.day}
                </motion.span>
                <motion.span
                  layout
                  className="text-black font-geist text-[10px] font-medium leading-[120%] tracking-[-0.2px] opacity-60"
                >
                  {day.month}
                </motion.span>
              </>
            )}
          </motion.div>
        </motion.div>
        <motion.div
          layout
          transition={{
            layout: { duration: 0.15, ease: [0.4, 0, 0.2, 1] },
          }}
          className={cn(
            "flex flex-[1_0_0] p-4 bg-[#121212]",
            isExpanded ? "flex-col items-start" : "flex-col items-start"
          )}
        >
          <div className="flex flex-col w-full gap-2">
            <div className="flex justify-between items-center w-full">
              <motion.span
                layout
                transition={{
                  layout: { duration: 0.15, ease: [0.4, 0, 0.2, 1] },
                }}
                className={cn(
                  "text-white/90 font-geist font-medium tracking-[-0.36px]",
                  isExpanded
                    ? "text-[20px] font-semibold tracking-[-0.4px] leading-normal"
                    : "text-[18px] leading-[28px]"
                )}
              >
                {day.title}
              </motion.span>
              <motion.button
                layout
                transition={{
                  layout: { duration: 0.15, ease: [0.4, 0, 0.2, 1] },
                }}
                onClick={onToggle}
                className={cn(
                  "flex items-center gap-1 shrink-0 ml-4",
                  isExpanded
                    ? "p-2 bg-[#1E1E1E] rounded-lg"
                    : "flex items-center gap-1"
                )}
              >
                <AnimatePresence>
                  {!isExpanded && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.1 }}
                      className="text-white/60 font-geist text-[12px] font-semibold tracking-[-0.24px]"
                    >
                      Expand
                    </motion.span>
                  )}
                </AnimatePresence>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{
                    duration: 0.15,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                >
                  <ChevronDown
                    className="w-4 h-4 text-white/60"
                    strokeWidth={1.5}
                  />
                </motion.div>
              </motion.button>
            </div>
            {day.badges && day.badges.length > 0 && (
              <div className="flex items-start gap-[7px]">
                {day.badges.map((badge, index) => (
                  <Badge
                    key={index}
                    variant="activity"
                    className="whitespace-nowrap overflow-hidden text-ellipsis"
                    style={
                      badge.bgColor
                        ? { backgroundColor: badge.bgColor }
                        : undefined
                    }
                  >
                    {badge.label}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.15,
                ease: "linear",
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.15,
                ease: "linear",
              },
            }}
            className="flex flex-col justify-center items-start w-full bg-[#121212] px-4 pb-4 pt-5 overflow-hidden will-change-transform"
            style={{
              transform: "translate3d(0,0,0)",
            }}
          >
            {day.activities.map((activity, index) => (
              <React.Fragment key={index}>
                <ItineraryContent activity={activity} />
                {index < day.activities.length - 1 && <Separator />}
              </React.Fragment>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

interface ItinerarySectionProps {
  itinerary: ItineraryDay[];
}

export const ItinerarySection: React.FC<ItinerarySectionProps> = ({ itinerary }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="my-8">
      <div className="flex items-center gap-5">
        <h3 className="text-white text-[24px] font-geist font-medium leading-[120%] tracking-[-0.48px] opacity-80">
          Itinerary
        </h3>
        <div
          className="flex items-center justify-center gap-1 px-2 py-1 rounded-lg border border-dashed border-black/[0.46] bg-[#312406]"
          style={{ width: "148px" }}
        >
          <Calendar
            className="w-4 h-4 text-white opacity-80"
            strokeWidth={1.5}
            fill="currentColor"
          />
          <span className="text-white text-[14px] font-geist font-medium leading-[120%] tracking-[-0.28px] opacity-80">
            13th - 20th Aug
          </span>
        </div>
      </div>

      {/* Itinerary Items */}
      <div className="mt-[29px] flex flex-col gap-4">
        {itinerary.map((day, index) => (
          <ItineraryItem
            key={index}
            day={day}
            isExpanded={expandedIndex === index}
            onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};
