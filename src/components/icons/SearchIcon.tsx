import React from 'react';

interface SearchIconProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const SearchIcon: React.FC<SearchIconProps> = ({
  width = 24,
  height = 24,
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
        d="M11.6666 11.6667L14.6666 14.6667"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3334 7.33334C13.3334 4.01964 10.6471 1.33334 7.33337 1.33334C4.01967 1.33334 1.33337 4.01964 1.33337 7.33334C1.33337 10.6471 4.01967 13.3333 7.33337 13.3333C10.6471 13.3333 13.3334 10.6471 13.3334 7.33334Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SearchIcon;
