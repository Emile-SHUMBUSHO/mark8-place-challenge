import Image from 'next/image';
import React from 'react';

interface BrandProps {
  subtext?: string;
  className?: string;
}

const Brand: React.FC<BrandProps> = ({ subtext, className = '' }) => (
  <div
    className={`flex items-center gap-2.5 w-auto h-10 opacity-100 ${className}`}
  >
    <div
      className={`relative w-8 h-8 sm:w-10 sm:h-10 bg-gray-900 rounded-lg flex items-center justify-center opacity-100 ${className}`}
    >
      <Image
        src="/images/mark8_logo.svg"
        alt="Company Logo"
        fill
        className="object-contain"
        sizes="(max-width: 640px) 2rem, 2.5rem"
      />
    </div>
    <div className="flex flex-col gap-0">
      <span className="font-dm-sans font-bold text-base sm:text-lg leading-none tracking-normal capitalize text-gray-900">
        Mark8
      </span>
      {subtext && (
        <span className="font-dm-sans font-light text-xs leading-tight tracking-normal text-gray-500">
          {subtext}
        </span>
      )}
    </div>
  </div>
);

export default Brand;
