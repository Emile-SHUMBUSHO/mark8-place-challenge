import React from 'react';

interface LinkSquareIconProps {
  width?: number;
  height?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const LinkSquareIcon: React.FC<LinkSquareIconProps> = ({
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
        d="M7.3992 2.00008C4.96653 2.00446 3.69265 2.06419 2.87855 2.87843C2 3.75712 2 5.17136 2 7.9998C2 10.8283 2 12.2425 2.87855 13.1212C3.7571 13.9999 5.17112 13.9999 7.99913 13.9999C10.8271 13.9999 12.2411 13.9999 13.1197 13.1212C13.9338 12.307 13.9935 11.0329 13.9979 8.59987"
        stroke={color1}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.704 2.33091L7.36584 8.70593M13.704 2.33091C13.3748 2.00117 11.1563 2.0319 10.6873 2.03857M13.704 2.33091C14.0334 2.66065 14.0027 4.88198 13.996 5.35159"
        stroke={color2}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LinkSquareIcon;
