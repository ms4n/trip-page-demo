import React from "react";

interface PricingSectionProps {
  pricing: {
    original: number;
    sale: number;
    bookingAmount: number;
    currency: string;
  };
}

export const PricingSection: React.FC<PricingSectionProps> = ({ pricing }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center items-center border-t border-white/10 bg-black/49 backdrop-blur-[20px] z-50">
      <div className="flex w-full max-w-[390px] px-8 pt-4 pb-8 justify-between items-center">
        {/* Pricing Section */}
        <div className="flex w-[119px] flex-col items-start gap-1 flex-shrink-0">
          {/* Current Price */}
          <div className="flex items-start gap-1">
            <span className="text-white font-inter text-[16px] font-semibold leading-[120%] tracking-[-0.48px]">
              {pricing.currency}{pricing.sale.toLocaleString()}
            </span>
            {pricing.original !== pricing.sale && (
              <span className="text-[#B3B3B3] font-inter text-[14px] font-semibold leading-[120%] tracking-[-0.42px] line-through">
                {pricing.currency}{pricing.original.toLocaleString()}
              </span>
            )}
          </div>
          {/* Booking Price */}
          <span className="text-white/40 font-inter text-[12px] font-semibold leading-[120%] tracking-[-0.36px] whitespace-nowrap">
            Book for only {pricing.currency}{pricing.bookingAmount.toLocaleString()}
          </span>
        </div>

        {/* Reserve Button */}
        <button className="flex px-6 py-3 justify-center items-center gap-2 rounded-xl bg-[#E4F7F0] shadow-[0px_3px_0px_0px_#46FFC7,0px_-4px_12px_0px_rgba(255,255,255,0.18)_inset,0px_2px_2px_0px_rgba(255,255,255,0.05)_inset]">
          <span className="text-[#054531] font-geist text-[16px] font-semibold leading-[100%] tracking-[-0.48px] mix-blend-plus-darker">
            Reserve a spot
          </span>
        </button>
      </div>
    </div>
  );
};
