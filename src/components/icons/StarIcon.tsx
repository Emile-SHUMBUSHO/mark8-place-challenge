import React from 'react';

interface StarIconProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const StarIcon: React.FC<StarIconProps> = ({
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
        d="M8.8184 1.96279L9.9916 4.32859C10.1516 4.65791 10.5782 4.9738 10.9382 5.03429L13.0646 5.3905C14.4245 5.61902 14.7445 6.61373 13.7645 7.595L12.1114 9.2618C11.8314 9.54407 11.6781 10.0885 11.7647 10.4783L12.2381 12.5417C12.6113 14.1749 11.7514 14.8067 10.3183 13.9531L8.32513 12.7635C7.9652 12.5484 7.37193 12.5484 7.00527 12.7635L5.01218 13.9531C3.58567 14.8067 2.7191 14.1681 3.09239 12.5417L3.56567 10.4783C3.65233 10.0885 3.49901 9.54407 3.21904 9.2618L1.56589 7.595C0.592666 6.61373 0.905966 5.61902 2.26581 5.3905L4.39225 5.03429C4.74554 4.9738 5.17216 4.65791 5.33214 4.32859L6.50533 1.96279C7.14527 0.679072 8.18513 0.679072 8.8184 1.96279Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default StarIcon;
