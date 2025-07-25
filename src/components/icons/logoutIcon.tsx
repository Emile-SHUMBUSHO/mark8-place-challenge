import React from 'react';

interface LogoutIconProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const LogoutIcon: React.FC<LogoutIconProps> = ({
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
        d="M10 11.75C9.95093 12.9846 8.92207 14.0329 7.54373 13.9992C7.22307 13.9913 6.82673 13.8796 6.03408 13.656C4.12641 13.1179 2.47037 12.2135 2.07304 10.1877C2 9.81533 2 9.39626 2 8.5582V7.4418C2 6.60374 2 6.1847 2.07304 5.8123C2.47037 3.78643 4.12641 2.8821 6.03408 2.34402C6.82673 2.12042 7.22307 2.00863 7.54373 2.00079C8.92207 1.96707 9.95093 3.01538 10 4.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14 8.00004H6.66667M14 8.00004C14 7.53324 12.6705 6.66106 12.3333 6.33337M14 8.00004C14 8.46684 12.6705 9.33904 12.3333 9.66671"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LogoutIcon;
