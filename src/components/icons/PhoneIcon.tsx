import React from 'react';

interface PhoneIconProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const PhoneIcon: React.FC<PhoneIconProps> = ({
  width = 24,
  height = 24,
  color = '#C1CF16',
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
        d="M2.51845 7.96152C1.88644 6.85945 1.58127 5.95957 1.39727 5.04739C1.12512 3.69831 1.74791 2.38046 2.77963 1.53957C3.21567 1.18417 3.71553 1.3056 3.97337 1.76819L4.55549 2.81253C5.0169 3.6403 5.2476 4.05418 5.20184 4.49298C5.15609 4.93178 4.84495 5.28916 4.22269 6.00393L2.51845 7.96152ZM2.51845 7.96152C3.79771 10.1921 5.80527 12.2008 8.03844 13.4815M8.03844 13.4815C9.14051 14.1135 10.0404 14.4187 10.9526 14.6027C12.3016 14.8749 13.6195 14.2521 14.4604 13.2203C14.8158 12.7843 14.6944 12.2845 14.2318 12.0266L13.1874 11.4445C12.3596 10.9831 11.9458 10.7524 11.507 10.7981C11.0682 10.8439 10.7108 11.155 9.99604 11.7773L8.03844 13.4815Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PhoneIcon;
