'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/Button';
import ProductGrid from '@/components/product/ProductGrid';
import HeroSection from '@/components/common/HeroSection';
import SortIcon from '@/components/icons/SortIcon';
import ProductsIcon from '@/components/icons/ProductsIcon';
import FilterTwoIcon from '@/components/icons/FilterTwoIcon';
import OpenStoreSection from '@/components/common/OpenStoreSection';
import TopStore from '@/components/store/TopStore';
import LoadingSpinner from '@/components/common/LoadingSpinner';

const topStores = [
  {
    id: '1',
    name: 'Awesome Shop 1',
    productCount: 134,
    avatar: 'A',
    color: 'bg-primary',
  },
  {
    id: '2',
    name: 'Awesome Shop 2',
    productCount: 89,
    avatar: 'A',
    color: 'bg-gray-500',
  },
  {
    id: '3',
    name: 'Awesome Shop 3',
    productCount: 156,
    avatar: 'A',
    color: 'bg-primary',
  },
  {
    id: '4',
    name: 'Awesome Shop 4',
    productCount: 203,
    avatar: 'A',
    color: 'bg-gray-600',
  },
  {
    id: '5',
    name: 'Awesome Shop 5',
    productCount: 67,
    avatar: 'A',
    color: 'bg-gray-400',
  },
  {
    id: '6',
    name: 'Awesome Shop 6',
    productCount: 134,
    avatar: 'A',
    color: 'bg-primary',
  },
  {
    id: '7',
    name: 'Awesome Shop 7',
    productCount: 94,
    avatar: 'A',
    color: 'bg-gray-600',
  },
  {
    id: '8',
    name: 'Awesome Shop 8',
    productCount: 178,
    avatar: 'A',
    color: 'bg-gray-400',
  },
  {
    id: '9',
    name: 'Awesome Shop 9',
    productCount: 145,
    avatar: 'A',
    color: 'bg-primary',
  },
  {
    id: '10',
    name: 'Awesome Shop 10',
    productCount: 112,
    avatar: 'A',
    color: 'bg-gray-600',
  },
];

export default function HomePage() {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();
  const [heroSearchQuery, setHeroSearchQuery] = useState('');
  const [storeSearchQuery, setStoreSearchQuery] = useState('');

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" text="Loading your marketplace..." />
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect to login
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8">
        <HeroSection
          heroSearchQuery={heroSearchQuery}
          setHeroSearchQuery={setHeroSearchQuery}
        />
        <div className="flex items-center justify-between mb-8 w-full h-12 gap-2 opacity-100">
          <h2 className="font-dm-sans font-bold text-base leading-none tracking-normal capitalize text-gray-900 flex items-center gap-2">
            <ProductsIcon width={24} height={24} />
            <span className="font-dm-sans font-bold text-base leading-none tracking-normal capitalize">
              Recent Products (100)
            </span>
          </h2>
          <div className="flex items-center gap-2">
            <Button
              className="rounded-sm transition-transform duration-300 ease-spring hover:translate-y-1"
              variant="outline"
              size="icon"
            >
              <FilterTwoIcon width={16} height={16} />
            </Button>
            <Button
              className="rounded-sm transition-transform duration-300 ease-spring hover:translate-y-1"
              variant="outline"
              size="icon"
            >
              <SortIcon width={16} height={16} />
            </Button>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <ProductGrid />
          </div>

          <TopStore
            topStores={topStores}
            storeSearchQuery={storeSearchQuery}
            onStoreSearchChange={() => setStoreSearchQuery('')}
          />
        </div>
        <OpenStoreSection />
      </div>
    </div>
  );
}
