import React from 'react';
import SearchInput from '../ui/SearchInput';
import { Button } from '../ui/Button';

interface HeroSectionProps {
  heroSearchQuery: string;
  setHeroSearchQuery: (value: string) => void;
}

export default function StoreHeroSection({
  heroSearchQuery,
  setHeroSearchQuery,
}: HeroSectionProps) {
  return (
    <div className="bg-gray-100 text-white w-full rounded-2xl py-10 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 mb-8 relative overflow-hidden opacity-100">
      <div className="relative text-center z-10">
        <h1 className="font-dm-sans font-black text-lg text-primary sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-[100%] tracking-[0] mb-8">
          Mark8{' '}
          <span className="text-gray-900 font-dm-sans font-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-[100%] tracking-[0]">
            stores
          </span>
        </h1>
        <p className="font-dm-sans font-light text-sm sm:text-base md:text-sm lg:text-base leading-6 tracking-normal mb-8 text-gray-500">
          54 Stores
        </p>
        <SearchInput
          value={heroSearchQuery}
          onChange={setHeroSearchQuery}
          theme="light"
          className="mb-8"
        />

        <div className="flex flex-wrap gap-2 justify-center">
          <Button className="bg-transparen text-gray-900 min-w-max h-7 px-5 py-2.5 rounded-full font-medium border border-gray-900 opacity-100 hover:bg-white/10">
            All
          </Button>
          <Button
            variant="outline"
            className="bg-transparent text-gray-500 min-w-max h-7 px-5 py-2.5 rounded-full font-medium border border-gray-300 opacity-100 hover:bg-white/10"
          >
            Vectors
          </Button>
          <Button
            variant="outline"
            className="bg-transparent text-gray-500 min-w-max h-7 px-5 py-2.5 rounded-full font-medium border border-gray-300 opacity-100 hover:bg-white/10"
          >
            Icons
          </Button>
          <Button
            variant="outline"
            className="bg-transparent text-gray-500 min-w-max h-7 px-5 py-2.5 rounded-full font-medium border border-gray-300 opacity-100 hover:bg-white/10"
          >
            Backgrounds
          </Button>
        </div>
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
