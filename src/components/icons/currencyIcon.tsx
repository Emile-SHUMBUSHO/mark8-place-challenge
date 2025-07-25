import React from 'react';

interface CurrencyIconProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const CurrencyIcon: React.FC<CurrencyIconProps> = ({
  width = 16,
  height = 16,
  color = '#1C2834',
  className = '',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12.278 5.43212C12.278 3.90481 10.3627 2.66669 8.00016 2.66669C5.63761 2.66669 3.72238 3.90481 3.72238 5.43212C3.72238 6.95942 4.88905 7.80249 8.00016 7.80249C11.1113 7.80249 12.6668 8.59262 12.6668 10.568C12.6668 12.5432 10.5775 13.3334 8.00016 13.3334C5.42284 13.3334 3.3335 12.0952 3.3335 10.568"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8 1.33331V14.6666"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CurrencyIcon;
