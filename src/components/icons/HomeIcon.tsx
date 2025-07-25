import React from 'react';

interface HomeIconProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const HomeIcon: React.FC<HomeIconProps> = ({
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
        d="M6.66669 12H9.33335"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.56757 8.80901C1.33223 7.27748 1.21455 6.51176 1.50409 5.83293C1.79363 5.15409 2.436 4.68963 3.72074 3.76072L4.68064 3.06668C6.27884 1.91112 7.07791 1.33334 7.99998 1.33334C8.92205 1.33334 9.72111 1.91112 11.3193 3.06668L12.2792 3.76072C13.564 4.68963 14.2063 5.15409 14.4958 5.83293C14.7854 6.51176 14.6677 7.27748 14.4324 8.80901L14.2317 10.1149C13.898 12.2859 13.7312 13.3715 12.9526 14.0191C12.174 14.6667 11.0358 14.6667 8.75918 14.6667H7.24078C4.9642 14.6667 3.82592 14.6667 3.04731 14.0191C2.26871 13.3715 2.10189 12.2859 1.76827 10.1149L1.56757 8.80901Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HomeIcon;
