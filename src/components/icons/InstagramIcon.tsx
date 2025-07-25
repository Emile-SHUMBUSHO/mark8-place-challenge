import React from 'react';

interface InstagramIconProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const InstagramIcon: React.FC<InstagramIconProps> = ({
  width = 24,
  height = 24,
  color = '#0C0D0D',
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
        d="M1.66663 7.99996C1.66663 5.0144 1.66663 3.52162 2.59412 2.59412C3.52162 1.66663 5.0144 1.66663 7.99996 1.66663C10.9855 1.66663 12.4783 1.66663 13.4058 2.59412C14.3333 3.52162 14.3333 5.0144 14.3333 7.99996C14.3333 10.9855 14.3333 12.4783 13.4058 13.4058C12.4783 14.3333 10.9855 14.3333 7.99996 14.3333C5.0144 14.3333 3.52162 14.3333 2.59412 13.4058C1.66663 12.4783 1.66663 10.9855 1.66663 7.99996Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M11 8C11 9.65687 9.65687 11 8 11C6.34315 11 5 9.65687 5 8C5 6.34315 6.34315 5 8 5C9.65687 5 11 6.34315 11 8Z"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M11.6719 4.33337H11.6659"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default InstagramIcon;
