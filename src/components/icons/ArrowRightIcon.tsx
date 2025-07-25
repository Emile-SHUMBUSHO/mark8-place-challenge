import React from 'react';

interface ArrowRightIconProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const ArrowRightIcon: React.FC<ArrowRightIconProps> = ({
  width = 24,
  height = 24,
  color = '#0C0D0D',
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
        d="M13.3333 8H2.66663"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 11.3333C10 11.3333 13.3333 8.87836 13.3333 7.99996C13.3333 7.12156 10 4.66663 10 4.66663"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowRightIcon;
