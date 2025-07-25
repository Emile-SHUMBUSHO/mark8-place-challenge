import React from 'react';

interface CartIconProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const CartIcon: React.FC<CartIconProps> = ({
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
        d="M5.33337 10.6667L11.1468 10.1822C12.9658 10.0307 13.3741 9.63333 13.5757 7.81927L14 4"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4 4H14.6667"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3.99996 14.6667C4.73634 14.6667 5.33329 14.0697 5.33329 13.3333C5.33329 12.597 4.73634 12 3.99996 12C3.26358 12 2.66663 12.597 2.66663 13.3333C2.66663 14.0697 3.26358 14.6667 3.99996 14.6667Z"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M11.3333 14.6667C12.0697 14.6667 12.6667 14.0697 12.6667 13.3333C12.6667 12.597 12.0697 12 11.3333 12C10.597 12 10 12.597 10 13.3333C10 14.0697 10.597 14.6667 11.3333 14.6667Z"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M5.33337 13.3333H10"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M1.33337 1.33334H1.97737C2.60716 1.33334 3.15613 1.74974 3.30888 2.3433L5.29239 10.051C5.39262 10.4405 5.30684 10.8531 5.05887 11.1744L4.42146 12"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CartIcon;
