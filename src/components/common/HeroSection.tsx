import React from 'react';
import SearchInput from '../ui/SearchInput';
import { Button } from '../ui/Button';

interface HeroSectionProps {
  heroSearchQuery: string;
  setHeroSearchQuery: (value: string) => void;
}

export default function HeroSection({
  heroSearchQuery,
  setHeroSearchQuery,
}: HeroSectionProps) {
  return (
    <div className="bg-[#1C2834] text-white w-full rounded-2xl py-10 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 mb-8 relative overflow-hidden opacity-100">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative text-center">
        <h1 className="font-dm-sans font-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-[100%] tracking-[0] mb-8">
          Welcome to{' '}
          <span className="text-primary font-dm-sans font-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-[100%] tracking-[0]">
            Mark8
          </span>
        </h1>

        <p className="font-dm-sans font-light text-sm sm:text-base md:text-sm lg:text-base leading-6 tracking-normal mb-8 text-gray-300">
          12,932 Products
        </p>
        <SearchInput
          value={heroSearchQuery}
          onChange={setHeroSearchQuery}
          theme="dark"
          className="mb-8"
        />

        <div className="flex flex-wrap gap-2 justify-center">
          <Button className="bg-transparen text-white min-w-max h-7 px-5 py-2.5 rounded-full font-medium border opacity-100 hover:bg-white/10">
            All
          </Button>
          <Button
            variant="outline"
            className="bg-transparent text-white/30 min-w-max h-7 px-5 py-2.5 rounded-full font-medium border border-white/30 opacity-100 hover:bg-white/10"
          >
            Vectors
          </Button>
          <Button
            variant="outline"
            className="bg-transparent text-white/30 min-w-max h-7 px-5 py-2.5 rounded-full font-medium border border-white/30 opacity-100 hover:bg-white/10"
          >
            Icons
          </Button>
          <Button
            variant="outline"
            className="bg-transparent text-white/30 min-w-max h-7 px-5 py-2.5 rounded-full font-medium border border-white/30 opacity-100 hover:bg-white/10"
          >
            Backgrounds
          </Button>
        </div>
      </div>
    </div>
  );
}
