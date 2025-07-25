import * as React from 'react';

interface SquareLockIconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  className?: string;
  color?: string;
}

const SquareLockIcon: React.FC<SquareLockIconProps> = ({
  width = 16,
  height = 16,
  className,
  color = '#C1CF16',
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M9.66071 10.3334H9.66671M6.33337 10.3334H6.33935"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.84517 12.5631C2.99509 13.6767 3.91738 14.549 5.03973 14.6006C5.98414 14.644 6.94349 14.6667 7.99996 14.6667C9.05643 14.6667 10.0158 14.644 10.9602 14.6006C12.0826 14.549 13.0048 13.6767 13.1548 12.5631C13.2526 11.8365 13.3333 11.0917 13.3333 10.3333C13.3333 9.57493 13.2526 8.8302 13.1548 8.10353C13.0048 6.99 12.0826 6.11766 10.9602 6.06606C10.0158 6.02265 9.05643 6 7.99996 6C6.94349 6 5.98414 6.02265 5.03973 6.06606C3.91738 6.11766 2.99509 6.99 2.84517 8.10353C2.74733 8.8302 2.66663 9.57493 2.66663 10.3333C2.66663 11.0917 2.74733 11.8365 2.84517 12.5631Z"
      stroke={color}
      strokeWidth={1.5}
    />
    <path
      d="M5 6.00004V4.33337C5 2.67652 6.34315 1.33337 8 1.33337C9.65687 1.33337 11 2.67652 11 4.33337V6.00004"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SquareLockIcon;
