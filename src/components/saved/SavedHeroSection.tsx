import React from 'react';

export default function SavedHeroSection() {
  return (
    <div className="bg-gray-100 text-white w-full rounded-2xl py-10 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 mb-8 relative overflow-hidden opacity-100">
      <div className="relative text-center z-10">
        <h1 className="text-gray-900 font-dm-sans font-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-[100%] tracking-[0] mb-8">
          Saved Products
        </h1>
        <p className="font-dm-sans font-light text-sm sm:text-base md:text-sm lg:text-base leading-6 tracking-normal mb-8 text-gray-500">
          4 Saved
        </p>
      </div>
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/images/bg_lines.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>
    </div>
  );
}
