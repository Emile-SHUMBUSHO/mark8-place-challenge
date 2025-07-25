import React from "react";

interface FilterOneIconProps {
  color?: string;
  width?: number | string;
  height?: number | string;
  className?: string;
}

export default function FilterOneIcon({
  color = "white",
  width = 16,
  height = 16,
  className = "",
}: FilterOneIconProps) {
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
        d="M4.66663 14V12"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.3334 14V10"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.3334 4V2"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.66663 6V2"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.66663 12C4.04537 12 3.73475 12 3.48971 11.8985C3.16301 11.7632 2.90345 11.5036 2.76812 11.1769C2.66663 10.9319 2.66663 10.6213 2.66663 10C2.66663 9.37873 2.66663 9.06813 2.76812 8.82307C2.90345 8.4964 3.16301 8.2368 3.48971 8.10147C3.73475 8 4.04537 8 4.66663 8C5.28788 8 5.59851 8 5.84354 8.10147C6.17024 8.2368 6.42981 8.4964 6.56513 8.82307C6.66663 9.06813 6.66663 9.37873 6.66663 10C6.66663 10.6213 6.66663 10.9319 6.56513 11.1769C6.42981 11.5036 6.17024 11.7632 5.84354 11.8985C5.59851 12 5.28788 12 4.66663 12Z"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M11.3334 8C10.7121 8 10.4015 8 10.1564 7.89853C9.82977 7.7632 9.57017 7.5036 9.43484 7.17693C9.33337 6.93187 9.33337 6.62125 9.33337 6C9.33337 5.37875 9.33337 5.06812 9.43484 4.82309C9.57017 4.49639 9.82977 4.23682 10.1564 4.10149C10.4015 4 10.7121 4 11.3334 4C11.9546 4 12.2652 4 12.5103 4.10149C12.837 4.23682 13.0966 4.49639 13.2319 4.82309C13.3334 5.06812 13.3334 5.37875 13.3334 6C13.3334 6.62125 13.3334 6.93187 13.2319 7.17693C13.0966 7.5036 12.837 7.7632 12.5103 7.89853C12.2652 8 11.9546 8 11.3334 8Z"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
}
