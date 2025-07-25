import React from 'react';

interface CallIconProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const CallIcon: React.FC<CallIconProps> = ({
  width = 16,
  height = 16,
  color = '#141C24',
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
        d="M2.51833 7.96161C1.88632 6.85954 1.58115 5.95966 1.39714 5.04748C1.125 3.6984 1.74779 2.38055 2.7795 1.53966C3.21555 1.18426 3.7154 1.30569 3.97325 1.76828L4.55537 2.81262C5.01678 3.64039 5.24748 4.05427 5.20172 4.49307C5.15596 4.93187 4.84483 5.28925 4.22256 6.00402L2.51833 7.96161ZM2.51833 7.96161C3.79759 10.1922 5.80514 12.2009 8.03832 13.4816M8.03832 13.4816C9.14038 14.1136 10.0403 14.4188 10.9525 14.6028C12.3015 14.8749 13.6194 14.2521 14.4603 13.2204C14.8157 12.7844 14.6943 12.2845 14.2317 12.0267L13.1873 11.4445C12.3595 10.9831 11.9457 10.7525 11.5069 10.7982C11.0681 10.8439 10.7107 11.1551 9.99592 11.7773L8.03832 13.4816Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CallIcon;
