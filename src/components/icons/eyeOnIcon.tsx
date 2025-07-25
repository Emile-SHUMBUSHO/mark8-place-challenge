import * as React from 'react';

interface EyeOnIconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  className?: string;
  color?: string;
}

const EyeOnIcon: React.FC<EyeOnIconProps> = ({
  width = 16,
  height = 16,
  className,
  color = '#0C0D0D',
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
      d="M14.3627 7.36337C14.5654 7.64757 14.6667 7.78971 14.6667 8.00004C14.6667 8.21037 14.5654 8.35251 14.3627 8.63671C13.452 9.91377 11.1262 12.6667 8.00004 12.6667C4.87389 12.6667 2.54811 9.91377 1.6374 8.63671C1.43471 8.35251 1.33337 8.21037 1.33337 8.00004C1.33337 7.78971 1.43471 7.64757 1.6374 7.36337C2.54811 6.08633 4.87389 3.33337 8.00004 3.33337C11.1262 3.33337 13.452 6.08633 14.3627 7.36337Z"
      stroke={color}
      strokeWidth={1.5}
    />
    <path
      d="M10 8C10 6.8954 9.1046 6 8 6C6.8954 6 6 6.8954 6 8C6 9.1046 6.8954 10 8 10C9.1046 10 10 9.1046 10 8Z"
      stroke={color}
      strokeWidth={1.5}
    />
  </svg>
);

export default EyeOnIcon;
