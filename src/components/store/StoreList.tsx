'use client';

import { useState, useEffect, useCallback } from 'react';
import { Store } from '@/types/store';
import { Button } from '../ui/Button';
import StoreCard from './StoreCard';
import LoadingSpinner from '../common/LoadingSpinner';
import DownChevronIcon from '../icons/DownChevronIcon';

interface StoreListProps {
  searchQuery?: string;
  category?: string;
  className?: string;
}

export default function StoreList({
  searchQuery,
  category,
  className,
}: StoreListProps) {
  const [stores, setStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const loadStores = useCallback(
    async (append = false) => {
      setLoading(true);
      setError(null);

      try {
        const mockStores = generateMockStores(20, append ? page : 1);

        if (append) {
          setStores(prev => [...prev, ...mockStores]);
          setPage(prev => prev + 1);
        } else {
          setStores(mockStores);
          setPage(1);
        }

        setHasMore(mockStores.length === 20);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load stores');
      } finally {
        setLoading(false);
      }
    },
    [page]
  );

  useEffect(() => {
    loadStores();
  }, [searchQuery, category, loadStores]);

  const handleLoadMore = () => {
    if (!loading && hasMore) {
      loadStores(true);
    }
  };

  if (loading && stores.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-destructive mb-4">{error}</p>
        <Button onClick={() => loadStores()}>Try Again</Button>
      </div>
    );
  }

  if (stores.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No stores found.</p>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="flex flex-col gap-8">
        {stores.map(store => (
          <StoreCard key={store.id} store={store} />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center">
          <Button
            variant="outline"
            onClick={handleLoadMore}
            disabled={loading}
            className="w-auto h-12 px-8 py-2 gap-2 rounded-lg border-2 opacity-100 mt-8 transition-transform duration-300 ease-spring hover:translate-y-1 active:translate-y-0"
            size="lg"
          >
            <DownChevronIcon color="#C1CF16" width={16} height={16} />
            <span className="font-dm-sans font-extrabold text-sm leading-none tracking-normal capitalize">
              Load More
            </span>
          </Button>
        </div>
      )}
    </div>
  );
}

// Mock data generator
function generateMockStores(count: number, page: number): Store[] {
  const categories = [
    'Electronics',
    'Fashion',
    'Home & Garden',
    'Sports',
    'Books',
  ];
  const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
  const states = ['NY', 'CA', 'IL', 'TX', 'AZ'];

  const stores: Store[] = [];

  for (let i = 0; i < count; i++) {
    const id = `store-${(page - 1) * count + i + 1}`;
    const cityIndex = Math.floor(Math.random() * cities.length);

    stores.push({
      id,
      name: `Store ${id}`,
      description: `This is a great store specializing in ${categories[Math.floor(Math.random() * categories.length)].toLowerCase()}`,
      logo: `/api/placeholder/100/100`,
      banner: `/api/placeholder/400/200`,
      ownerId: `user-${Math.floor(Math.random() * 100)}`,
      category: categories[Math.floor(Math.random() * categories.length)],
      rating: Math.floor(Math.random() * 20) / 4 + 3, // 3.0 to 5.0
      reviewCount: Math.floor(Math.random() * 1000),
      products: generateMockProducts(
        Math.min(3, Math.floor(Math.random() * 5) + 1)
      ), // Generate 1-3 products per store
      productCount: Math.floor(Math.random() * 500) + 10,
      address: {
        street: `${Math.floor(Math.random() * 9999)} Main St`,
        city: cities[cityIndex],
        state: states[cityIndex],
        zipCode: `${Math.floor(Math.random() * 90000) + 10000}`,
        country: 'USA',
      },
      contact: {
        email: `contact@${id}.com`,
        phone: `(555) ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`,
      },
      policies: {
        returns: '30-day returns',
        shipping: 'Free shipping over $50',
        privacy: 'We protect your privacy',
        terms: 'Standard terms apply',
      },
      isVerified: Math.random() > 0.3,
      isActive: Math.random() > 0.1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      color: '',
    });
  }

  return stores;
}

// Helper function to generate mock products
function generateMockProducts(count: number) {
  const productNames = [
    'Wireless Headphones',
    'Smart Watch',
    'Laptop Stand',
    'Coffee Mug',
    'Desk Lamp',
    'Phone Case',
    'Bluetooth Speaker',
    'Gaming Mouse',
  ];

  const products = [];
  for (let i = 0; i < count; i++) {
    const inventory = Math.floor(Math.random() * 100) + 1;
    products.push({
      id: `product-${Date.now()}-${i}`,
      name: productNames[Math.floor(Math.random() * productNames.length)],
      description: 'A great product',
      price: Math.floor(Math.random() * 200) + 10,
      originalPrice: Math.floor(Math.random() * 300) + 50,
      images: [
        {
          id: `img-${Date.now()}-${i}`,
          url: `/api/placeholder/200/200`,
          alt: 'Product image',
          isPrimary: true,
          order: 0,
        },
      ],
      category: 'Electronics',
      storeId: '',
      inventory,
      inStock: inventory > 0,
      rating: Math.floor(Math.random() * 20) / 4 + 3,
      reviewCount: Math.floor(Math.random() * 100),
      tags: ['popular'],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
  }
  return products;
}
