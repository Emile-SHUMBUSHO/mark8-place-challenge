import React from 'react';

interface InformationIconProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const InformationIcon: React.FC<InformationIconProps> = ({
  width = 16,
  height = 16,
  color = '#495D69',
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
        d="M14.6668 8.00001C14.6668 4.31811 11.682 1.33334 8.00016 1.33334C4.31826 1.33334 1.3335 4.31811 1.3335 8.00001C1.3335 11.6819 4.31826 14.6667 8.00016 14.6667C11.682 14.6667 14.6668 11.6819 14.6668 8.00001Z"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M8.1613 11.3333V8.00001C8.1613 7.68574 8.1613 7.52861 8.06363 7.43094C7.96603 7.33334 7.8089 7.33334 7.49463 7.33334"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.99463 5.33334H8.00063"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default InformationIcon;
