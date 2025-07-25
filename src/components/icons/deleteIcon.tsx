import React from 'react';

interface DeleteIconProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const DeleteIcon: React.FC<DeleteIconProps> = ({
  width = 16,
  height = 16,
  color = '#EE4545',
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
        d="M13 3.66666L12.5869 10.3501C12.4813 12.0576 12.4285 12.9114 12.0005 13.5253C11.7889 13.8287 11.5165 14.0849 11.2005 14.2773C10.5614 14.6667 9.706 14.6667 7.99513 14.6667C6.28208 14.6667 5.42553 14.6667 4.78603 14.2766C4.46987 14.0838 4.19733 13.8272 3.98579 13.5232C3.55792 12.9084 3.5063 12.0534 3.40307 10.3435L3 3.66666"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M2 3.66668H14M10.7038 3.66668L10.2487 2.72783C9.9464 2.10418 9.7952 1.79236 9.53447 1.59788C9.47667 1.55474 9.4154 1.51637 9.35133 1.48314C9.0626 1.33334 8.71607 1.33334 8.023 1.33334C7.31253 1.33334 6.95733 1.33334 6.66379 1.48942C6.59873 1.52402 6.53665 1.56394 6.47819 1.60879C6.21443 1.81114 6.06709 2.13438 5.77241 2.78085L5.36861 3.66668"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default DeleteIcon;
