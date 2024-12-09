import React from "react";
import "./styles/AccommodationCard.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

interface AccommodationCardProps {
  images: string[];
  title: string;
  description: string;
}

export const AccommodationCard: React.FC<AccommodationCardProps> = ({
  images,
  title,
  description,
}) => {
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

  return (
    <div className="accommodation-card">
      <div className="accommodation-card-image-container">
        <Carousel
          setApi={setApi}
          className="w-full h-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="h-full">
            {images.map((image, index) => (
              <CarouselItem key={index} className="basis-full h-full">
                <div
                  className="accommodation-card-image"
                  style={{ backgroundImage: `url(${image})` }}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Carousel Position Indicators */}
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`carousel-dot ${index === current ? "active" : ""}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="accommodation-card-text">
        <h3 className="accommodation-card-title">{title}</h3>
        <p className="accommodation-card-description">{description}</p>
      </div>
    </div>
  );
};
