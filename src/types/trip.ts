export interface TripData {
  // Basic Trip Info
  title: string;
  category: string;
  media: {
    type: "video" | "image";
    src: string;
  }[];

  // Trip Logistics
  dates: {
    start: string;
    end: string;
    displayText: string;
  };
  groupSize: {
    count: number;
    displayText: string;
  };
  spotsLeft: number;

  // Host Information
  host: {
    name: string;
    image: string;
    bio?: string;
  };

  // Meals Information
  meals: {
    breakfast: number;
    lunch: number;
    dinner: number;
    displayText: string;
  };

  // Spotlight Events
  spotlightEvents: {
    title: string;
    image: string;
    description?: string;
  }[];

  // Itinerary
  itinerary: {
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
  }[];

  // Amenities
  amenities: {
    included: {
      icon: string;
      title: string;
      description: string;
    }[];
    notIncluded: {
      icon: string;
      title: string;
      description: string;
    }[];
    addOns: {
      icon: string;
      title: string;
      description: string;
      price?: number;
    }[];
  };

  // Accommodation
  accommodation: {
    title: string;
    location: string;
    description: string;
    images: string[];
    roomType: string;
  }[];

  // FAQs
  faqs: {
    experience: {
      question: string;
      answer: string;
    }[];
    general: {
      question: string;
      answer: string;
    }[];
  };

  // Pricing
  pricing: {
    original: number;
    sale: number;
    bookingAmount: number;
    currency: string;
  };
}
