import React from 'react';

interface MinusIconProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const MinusIcon: React.FC<MinusIconProps> = ({
  width = 24,
  height = 24,
  color = '#0C0D0D',
  className = '',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M13.3333 8.33325H2.66663"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MinusIcon;
