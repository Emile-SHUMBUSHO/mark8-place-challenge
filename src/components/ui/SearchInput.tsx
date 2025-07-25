import React from 'react';
import { cn } from '@/lib/utils';
import SearchIcon from '../icons/SearchIcon';
import FilterOneIcon from '../icons/FilterOneIcon';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  theme?: 'dark' | 'light';
}

export default function SearchInput({
  value,
  onChange,
  placeholder = 'What are you looking for?',
  className = '',
  theme = 'dark',
}: SearchInputProps) {
  const isDark = theme === 'dark';

  return (
    <div
      className={cn(
        'w-full max-w-lg sm:max-w-xl md:max-w-2xl mx-auto',
        className
      )}
    >
      <div className="relative flex items-center gap-2 h-12 opacity-100">
        <SearchIcon
          color="#C1CF16"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-100"
        />
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
          className={cn(
            'w-full h-12 px-10 pr-16 rounded-lg border-0 font-dm-sans font-normal text-sm leading-none tracking-normal focus:ring-2 focus:ring-primary focus:outline-none',
            isDark
              ? 'bg-[#232E39] text-white placeholder-gray-400'
              : 'bg-gray-200 text-gray-900 placeholder-gray-500'
          )}
        />
        <FilterOneIcon
          color={isDark ? '#9CA3AF' : '#141C24'}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-100"
        />
      </div>
    </div>
  );
}
