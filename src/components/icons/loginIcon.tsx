import * as React from 'react';

interface LoginIconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  className?: string;
  color?: string;
}

const LoginIcon: React.FC<LoginIconProps> = ({
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
      d="M6 4.24998C6.04907 3.01538 7.07793 1.96705 8.45627 2.00078C8.77693 2.00858 9.17327 2.12038 9.96592 2.34398C11.8736 2.88205 13.5296 3.78638 13.927 5.81225C14 6.18465 14 6.60372 14 7.44178L14 8.55818C14 9.39624 14 9.81529 13.927 10.1877C13.5296 12.2136 11.8736 13.1179 9.96592 13.656C9.17327 13.8796 8.77693 13.9914 8.45627 13.9992C7.07793 14.0329 6.04907 12.9846 6 11.75"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <path
      d="M9.33337 7.99996L2.00004 7.99996M9.33337 7.99996C9.33337 8.46676 8.00384 9.33894 7.66671 9.66663M9.33337 7.99996C9.33337 7.53316 8.00384 6.66096 7.66671 6.33329"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default LoginIcon;
