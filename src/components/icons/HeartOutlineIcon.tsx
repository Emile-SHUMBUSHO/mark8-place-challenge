import React from 'react';

interface HeartOutlineIconProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const HeartOutlineIcon: React.FC<HeartOutlineIconProps> = ({
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
        d="M12.9751 2.66277C11.1873 1.56615 9.62697 2.00807 8.68964 2.71201C8.30524 3.00064 8.11311 3.14495 8.00004 3.14495C7.88697 3.14495 7.69484 3.00064 7.31044 2.71201C6.37312 2.00807 4.81277 1.56615 3.025 2.66277C0.678753 4.10196 0.147854 8.84993 5.55973 12.8556C6.59052 13.6185 7.10591 14 8.00004 14C8.89417 14 9.40957 13.6185 10.4404 12.8556C15.8522 8.84993 15.3213 4.10196 12.9751 2.66277Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default HeartOutlineIcon;
