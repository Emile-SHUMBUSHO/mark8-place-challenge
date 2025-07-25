'use client';

import StoreList from '@/components/store/StoreList';
import { useState } from 'react';
import OpenStoreSection from '@/components/common/OpenStoreSection';
import StoreHeroSection from '@/components/store/StoreHeroSection';

export default function StoresPage() {
  const [heroSearchQuery, setHeroSearchQuery] = useState('');
  return (
    <div className="w-full mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8">
      <StoreHeroSection
        heroSearchQuery={heroSearchQuery}
        setHeroSearchQuery={setHeroSearchQuery}
      />
      <StoreList />
      <OpenStoreSection />
    </div>
  );
}
