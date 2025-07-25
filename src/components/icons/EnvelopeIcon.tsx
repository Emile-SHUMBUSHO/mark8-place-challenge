import React from 'react';

interface EnvelopeIconProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const EnvelopeIcon: React.FC<EnvelopeIconProps> = ({
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
        d="M1.33337 4L5.94205 6.61131C7.64111 7.574 8.35897 7.574 10.058 6.61131L14.6667 4"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M1.34389 8.98377C1.38747 11.0275 1.40926 12.0493 2.16335 12.8063C2.91743 13.5632 3.96693 13.5896 6.06593 13.6423C7.35957 13.6748 8.64051 13.6748 9.93417 13.6423C12.0332 13.5896 13.0826 13.5632 13.8368 12.8063C14.5908 12.0493 14.6126 11.0275 14.6562 8.98377C14.6702 8.32664 14.6702 7.67344 14.6562 7.01631C14.6126 4.97261 14.5908 3.95077 13.8368 3.19381C13.0826 2.43686 12.0332 2.41049 9.93417 2.35775C8.64051 2.32525 7.35957 2.32525 6.06592 2.35775C3.96693 2.41048 2.91743 2.43685 2.16334 3.19381C1.40925 3.95076 1.38747 4.97261 1.34388 7.01631C1.32987 7.67344 1.32987 8.32664 1.34389 8.98377Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EnvelopeIcon;
