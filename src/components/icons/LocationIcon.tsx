import React from 'react';

interface LocationIconProps {
  className?: string;
  width?: number;
  height?: number;
}

export const LocationIcon: React.FC<LocationIconProps> = ({ 
  className = '', 
  width = 24, 
  height = 24 
}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={width} 
      height={height} 
      viewBox="0 0 24 24" 
      fill="none"
      className={className}
    >
      <path 
        d="M21 10C21 18 12 23 12 23C12 23 3 18 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" 
        fill="url(#paint0_linear_793_4345)"
      />
      <path 
        d="M12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14Z" 
        fill="url(#paint1_linear_793_4345)"
      />
      <defs>
        <linearGradient 
          id="paint0_linear_793_4345" 
          x1="12" 
          y1="1.085" 
          x2="12" 
          y2="22.874" 
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF4867"/>
          <stop offset="1" stopColor="#E50031"/>
        </linearGradient>
        <linearGradient 
          id="paint1_linear_793_4345" 
          x1="12" 
          y1="6.021" 
          x2="12" 
          y2="13.979" 
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F2F2F2"/>
          <stop offset="1" stopColor="#DBDBDB"/>
        </linearGradient>
      </defs>
    </svg>
  );
}; 