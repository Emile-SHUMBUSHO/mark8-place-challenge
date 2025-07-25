import React from 'react';

interface DownChevronIconProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const DownChevronIcon: React.FC<DownChevronIconProps> = ({
  width = 24,
  height = 24,
  color = '#1C2834',
  className = '',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M13 1.00005C13 1.00005 8.5811 7 7 7C5.4188 7 1 1 1 1"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DownChevronIcon;
