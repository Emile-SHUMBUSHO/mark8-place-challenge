import React from 'react';

interface StoreIconProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const StoreIcon: React.FC<StoreIconProps> = ({
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
        d="M1.97784 6.99707V10.3316C1.97784 12.2179 1.97784 13.161 2.56363 13.747C3.14942 14.3331 4.09222 14.3331 5.97784 14.3331H9.97784C11.8634 14.3331 12.8062 14.3331 13.392 13.747C13.9778 13.161 13.9778 12.2179 13.9778 10.3316V6.99707"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4.64453 11.9955H7.3112"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6.73584 5.61198C6.54786 6.29091 5.86416 7.46205 4.56516 7.63179C3.4182 7.78165 2.54828 7.28105 2.32608 7.07172C2.0811 6.90199 1.52275 6.35881 1.38602 6.01934C1.24928 5.67987 1.4088 4.94437 1.52275 4.64451L1.97826 3.32558C2.08946 2.9943 2.34978 2.21077 2.61665 1.94575C2.88353 1.68073 3.42385 1.66919 3.64624 1.66919H8.31658C9.51871 1.68618 12.1472 1.65848 12.6668 1.6692C13.1864 1.67992 13.4987 2.11548 13.5898 2.30219C14.3651 4.18007 14.6666 5.25555 14.6666 5.71382C14.5654 6.2027 14.1466 7.12452 12.6668 7.52999C11.1288 7.95139 10.2569 7.13172 9.98338 6.81712M6.10346 6.81712C6.31996 7.08299 6.99911 7.61825 7.98358 7.63179C8.96811 7.64539 9.81818 6.95852 10.1201 6.61341C10.2056 6.51157 10.3902 6.20945 10.5816 5.61198"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default StoreIcon;
