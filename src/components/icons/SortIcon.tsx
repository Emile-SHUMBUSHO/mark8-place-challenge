import React from 'react';

interface SortIconProps {
  width?: number;
  height?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const SortIcon: React.FC<SortIconProps> = ({
  width = 24,
  height = 24,
  color1 = '#141C24',
  color2 = '#0C0D0D',
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
        d="M2.66663 9.33334H5.61402C6.23409 9.33334 6.54412 9.33334 6.62671 9.52007C6.70929 9.70687 6.49833 9.93087 6.0764 10.3789L3.65123 12.9544C3.22931 13.4025 3.01834 13.6265 3.10093 13.8133C3.18351 14 3.49355 14 4.11361 14H6.66663"
        stroke={color1}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.66663 6L4.07034 2.87018C4.33053 2.29006 4.46061 2 4.66663 2C4.87264 2 5.00273 2.29006 5.26291 2.87018L6.66663 6"
        stroke={color1}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.6667 13.3333V2.66666M11.6667 13.3333C11.1999 13.3333 10.3277 12.0038 10 11.6667M11.6667 13.3333C12.1335 13.3333 13.0057 12.0038 13.3333 11.6667"
        stroke={color2}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SortIcon;
