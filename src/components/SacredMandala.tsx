import React from 'react';

interface SacredMandalaProps {
  className?: string;
  size?: number;
  strokeColor?: string;
}

export const SacredMandala: React.FC<SacredMandalaProps> = ({
  className = '',
  size = 400,
  strokeColor = '#D4AF37'
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="100" cy="100" r="96" stroke={strokeColor} strokeWidth="0.75" strokeDasharray="3 3" opacity="0.4" />
      <circle cx="100" cy="100" r="86" stroke={strokeColor} strokeWidth="1" opacity="0.6" />
      <circle cx="100" cy="100" r="76" stroke={strokeColor} strokeWidth="0.5" opacity="0.5" />
      
      {/* 12-petaled sacred lotus geometry */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 100 100)`}>
          <path
            d="M100 14 C107 42 120 70 100 100 C80 70 93 42 100 14Z"
            stroke={strokeColor}
            strokeWidth="0.75"
            fill={strokeColor}
            fillOpacity="0.03"
          />
          <circle cx="100" cy="14" r="1.5" fill={strokeColor} opacity="0.8" />
        </g>
      ))}

      {/* 8-pointed star / Sri Yantra inspired concentric triangles */}
      <polygon
        points="100,28 162,136 38,136"
        stroke={strokeColor}
        strokeWidth="0.75"
        opacity="0.5"
      />
      <polygon
        points="100,172 162,64 38,64"
        stroke={strokeColor}
        strokeWidth="0.75"
        opacity="0.5"
      />
      
      <circle cx="100" cy="100" r="46" stroke={strokeColor} strokeWidth="0.5" strokeDasharray="2 2" opacity="0.7" />
      <circle cx="100" cy="100" r="30" stroke={strokeColor} strokeWidth="1" opacity="0.8" />
      <circle cx="100" cy="100" r="12" stroke={strokeColor} strokeWidth="0.75" fill={strokeColor} fillOpacity="0.08" />
      <circle cx="100" cy="100" r="3" fill={strokeColor} opacity="0.95" />
    </svg>
  );
};

export const SpiritualLotusIcon: React.FC<{ size?: number; className?: string; color?: string }> = ({
  size = 28,
  className = '',
  color = '#B8860B'
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M24 6C24 6 18 16 18 26C18 31 20.5 35 24 38C27.5 35 30 31 30 26C30 16 24 6 24 6Z"
        fill={color}
        fillOpacity="0.25"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M19 14C19 14 10 21 10 29C10 34 14 38 20 39"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M29 14C29 14 38 21 38 29C38 34 34 38 28 39"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M12 28C12 28 6 31 6 36C6 39 10 41 16 41"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M36 28C36 28 42 31 42 36C42 39 38 41 32 41"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="24" cy="40" r="1.5" fill={color} />
    </svg>
  );
};
