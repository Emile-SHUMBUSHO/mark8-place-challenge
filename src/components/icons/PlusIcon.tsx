import React from 'react';

interface PlusIconProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const PlusIcon: React.FC<PlusIconProps> = ({
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
        d="M8 3V13.6667"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.66663 8.33325H13.3333"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PlusIcon;
