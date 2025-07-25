import React from 'react';

interface FilterTwoIconProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const FilterTwoIcon: React.FC<FilterTwoIconProps> = ({
  width = 16,
  height = 16,
  color = '#141C24',
  className = '',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4.90497 7.3374C3.24601 6.09707 2.06376 4.73277 1.41823 3.96578C1.2184 3.72835 1.15292 3.5546 1.11355 3.24853C0.978741 2.20053 0.911341 1.67653 1.21863 1.33827C1.52593 1 2.06936 1 3.15622 1H10.8438C11.9307 1 12.4741 1 12.7813 1.33827C13.0887 1.67653 13.0213 2.20053 12.8865 3.24854C12.8471 3.55461 12.7816 3.72836 12.5817 3.96578C11.9353 4.73375 10.7507 6.10047 9.0884 7.34233C8.938 7.45473 8.83887 7.6378 8.82047 7.84093C8.6558 9.66133 8.50393 10.6584 8.4094 11.1628C8.25687 11.9771 7.10213 12.4671 6.484 12.9042C6.11607 13.1644 5.66953 12.8547 5.62185 12.4519C5.53095 11.6841 5.35974 10.1243 5.17285 7.84093C5.15606 7.63593 5.05657 7.45073 4.90497 7.3374Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FilterTwoIcon;
