import React from "react";
import { Badge } from "../ui/badge";
import {
  Calendar,
  Users,
  Utensils,
  Compass,
  HeadphoneOff,
  MoveRight,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "../ui/carousel";
import "./styles/TripDetails.css";
import { TripInfoCard } from "./TripInfoCard";
import { SpotlightSection } from "./SpotlightSection";
import { AmenitiesSection } from "./AmenitiesSection";
import { PricingSection } from "./PricingSection";
import { ItinerarySection } from "./ItinerarySection";
import { SpotsLeft } from "./SpotsLeft";
import { AccommodationSection } from "./AccommodationSection";
import { FAQSection } from "./FAQSection";
import useTrip from "../../hooks/useTrip";
import { useParams } from "react-router-dom";
import sampleTrip from "../../data/sampleTrip.json";

export const TripDetails: React.FC = () => {
  const { hostName, tripSlug } = useParams<{ hostName: string; tripSlug: string }>();
  console.log('TripDetails rendered with hostName:', hostName, 'tripSlug:', tripSlug);
  // Mocking the hook logic for demo purposes
  const trip = sampleTrip;
  const loading = false;
  const error = null;
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  console.log('Current component state:', { trip, loading, error });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <div className="text-center">
          <div className="mb-4">Loading trip details...</div>
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white mx-auto"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <div className="text-center">
          <div className="text-red-500 mb-2">Error loading trip</div>
          <div className="text-sm opacity-75">{error.message}</div>
        </div>
      </div>
    );
  }

  if (!trip) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <div className="text-center">Trip not found</div>
      </div>
    );
  }

  return (
    <div className="group relative w-full min-h-screen flex flex-col background">
      {/* Media Section - Only at Top */}
      <div className="relative w-full h-[55vh] overflow-hidden">
        <Carousel
          className="w-full h-full"
          setApi={setApi}
          opts={{
            loop: true,
            align: "center",
          }}
        >
          <CarouselContent className="h-full">
            {trip.media.map((item, index) => (
              <CarouselItem key={index} className="basis-full h-full">
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    className="w-full h-full object-cover"
                    autoPlay
                    playsInline
                    muted
                    loop
                    preload="auto"
                  />
                ) : (
                  <img
                    src={item.src}
                    alt="Trip Media"
                    className="w-full h-full object-cover"
                  />
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Gradient Overlay - Only for Media Section */}
        <div
          className="absolute inset-x-0 bottom-0 h-full w-full pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 60%, rgba(0, 0, 0, 1) 100%)",
          }}
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 bg-black">
        <div className="px-4 -mt-8 relative">
          {/* Navigation Dots and Headphone */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex space-x-2">
              {trip.media.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-[2px] transition-colors ${
                    index === current ? "bg-white" : "bg-white/30"
                  }`}
                  onClick={() => api?.scrollTo(index)}
                />
              ))}
            </div>
            <HeadphoneOff className="w-5 h-5 text-white/50" strokeWidth={2} />
          </div>

          {/* Title and Badge */}
          <div className="flex flex-row items-center justify-between mb-4">
            <h2 className="trip-card-title" style={{ margin: 0 }}>{trip.title}</h2>
            <Badge variant="secondary" className="category-badge" style={{ margin: 0 }}>
              <Compass className="w-4 h-4 text-white" strokeWidth={1.5} />
              <span className="text-sm font-medium">{trip.category}</span>
            </Badge>
          </div>

          {/* Info Cards */}
          <div>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <TripInfoCard
                icon={
                  <Calendar className="w-[18px] h-[18px]" strokeWidth={1.25} />
                }
                label="Dates"
                value={trip.dates.displayText}
              />
              <TripInfoCard
                icon={
                  <Users className="w-[18px] h-[18px]" strokeWidth={1.25} />
                }
                label="Group size"
                value={trip.groupSize.displayText}
              />
            </div>
            <TripInfoCard
              icon={
                <Utensils className="w-[18px] h-[18px]" strokeWidth={1.25} />
              }
              label="Meals"
              value={trip.meals.displayText}
            />
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden pb-20">
            <div className="pl-2 py-7 flex items-center justify-between">
              <div>
                <p className="text-white text-[16px] font-geist font-medium leading-[120%] tracking-[-0.32px] opacity-90 mb-2">
                  Travel with {trip.host.name}
                </p>
                <p className="text-white text-[12px] font-geist font-medium leading-[120%] tracking-[-0.24px] opacity-60 flex items-center gap-1">
                  <span className="flex items-center">Know more</span>{" "}
                  <MoveRight className="w-4 h-4" strokeWidth={1.5} />
                </p>
              </div>
              <img
                src={trip.host.image}
                alt={trip.host.name}
                className="w-16 h-16 rounded-xl object-cover mr-2"
              />
            </div>

            {/* Spotlight Events Section */}
            <SpotlightSection events={trip.spotlightEvents} />

            {/* Spots Left Section */}
            <SpotsLeft spotsLeft={trip.spotsLeft} />

            {/* Itinerary Section */}
            <ItinerarySection itinerary={trip.itinerary} />

            {/* Amenities Section */}
            <AmenitiesSection amenities={trip.amenities} />

            {/* Accommodation Section */}
            <AccommodationSection 
              accommodation={trip.accommodations.map(acc => ({
                ...acc,
                startDate: trip.dates.start,
                endDate: trip.dates.end
              }))} 
            />

            {/* FAQ Section */}
            <FAQSection faqs={trip.faqs} />

            {/* Pricing Section */}
            <PricingSection pricing={trip.pricing} />
          </div>
        </div>
      </div>
    </div>
  );
};
