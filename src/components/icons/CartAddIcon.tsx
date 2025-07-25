import React from 'react';

interface CartAddIconProps {
  width?: number;
  height?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const CartAddIcon: React.FC<CartAddIconProps> = ({
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
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5.83337 10.6667L11.6468 10.1822C13.4658 10.0307 13.8741 9.63333 14.0757 7.81927L14.5 4"
        stroke={color1}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4.5 4H6.16667M15.1667 4H12.8333"
        stroke={color1}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7.83337 5.66667C8.16104 6.0038 9.03324 7.33333 9.50004 7.33333M9.50004 7.33333C9.96684 7.33333 10.839 6.0038 11.1667 5.66667M9.50004 7.33333V2"
        stroke={color2}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.49996 14.6667C5.23634 14.6667 5.83329 14.0697 5.83329 13.3333C5.83329 12.597 5.23634 12 4.49996 12C3.76358 12 3.16663 12.597 3.16663 13.3333C3.16663 14.0697 3.76358 14.6667 4.49996 14.6667Z"
        stroke={color2}
        strokeWidth="1.5"
      />
      <path
        d="M11.8333 14.6667C12.5697 14.6667 13.1667 14.0697 13.1667 13.3333C13.1667 12.597 12.5697 12 11.8333 12C11.097 12 10.5 12.597 10.5 13.3333C10 14.0697 11.097 14.6667 11.8333 14.6667Z"
        stroke={color2}
        strokeWidth="1.5"
      />
      <path
        d="M5.83337 13.3333H10.5"
        stroke={color2}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M1.83337 1.33334H2.47737C3.10716 1.33334 3.65613 1.74974 3.80888 2.3433L5.79239 10.051C5.89262 10.4405 5.80684 10.8531 5.55887 11.1744L4.92146 12"
        stroke={color2}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CartAddIcon;
