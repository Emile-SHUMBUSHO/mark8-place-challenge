import React from 'react';

interface ChevronRightIconProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const ChevronRightIcon: React.FC<ChevronRightIconProps> = ({
  width = 24,
  height = 24,
  color = '#DBDBDB',
  className = '',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.00003 1C1.00003 1 5 3.94593 5 5C5 6.05413 1 9 1 9"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronRightIcon;
