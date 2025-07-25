'use client';

import { useProducts } from '@/hooks/useProducts';
import { Button } from '../ui/Button';
import ProductCard from './ProductCard';
import LoadingSpinner from '../common/LoadingSpinner';
import DownChevronIcon from '../icons/DownChevronIcon';

interface ProductGridProps {
  searchQuery?: string;
  category?: string;
  className?: string;
}

export default function ProductGrid({
  searchQuery,
  category,
  className,
}: ProductGridProps) {
  const { products, loading, error, loadMore } = useProducts({
    query: searchQuery,
    category,
    limit: 20,
  });

  const testProducts = [
    {
      id: 'test-1',
      name: 'Product 1',
      description: 'High-quality product with excellent features',
      price: 9000,
      originalPrice: 15000,
      images: [],
      category: 'Electronics',
      tags: ['popular', 'featured'],
      storeId: 'store-1',
      rating: 4.5,
      reviewCount: 128,
      inStock: true,
      inventory: 25,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'test-2',
      name: 'Product 2',
      description: 'Comfortable and sustainable product',
      price: 9000,
      originalPrice: 15000,
      images: [],
      category: 'Clothing',
      tags: ['eco-friendly', 'popular'],
      storeId: 'store-2',
      rating: 4.8,
      reviewCount: 89,
      inStock: true,
      inventory: 50,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'test-3',
      name: 'Product 3',
      description: 'Smart product with advanced features',
      price: 5000,
      originalPrice: 8000,
      images: [],
      category: 'Home & Garden',
      tags: ['smart-home', 'featured'],
      storeId: 'store-3',
      rating: 4.3,
      reviewCount: 67,
      inStock: true,
      inventory: 15,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'test-4',
      name: 'Product 4',
      description: 'Professional grade product',
      price: 9000,
      originalPrice: 12000,
      images: [],
      category: 'Sports',
      tags: ['professional'],
      storeId: 'store-1',
      rating: 4.6,
      reviewCount: 156,
      inStock: true,
      inventory: 30,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'test-5',
      name: 'Product 5',
      description: 'Innovative design and functionality',
      price: 9000,
      originalPrice: 13000,
      images: [],
      category: 'Electronics',
      tags: ['innovative'],
      storeId: 'store-2',
      rating: 4.4,
      reviewCount: 203,
      inStock: true,
      inventory: 18,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'test-6',
      name: 'Product 6',
      description: 'Premium quality and durability',
      price: 5000,
      originalPrice: 7000,
      images: [],
      category: 'Home & Garden',
      tags: ['premium'],
      storeId: 'store-3',
      rating: 4.7,
      reviewCount: 94,
      inStock: true,
      inventory: 22,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'test-7',
      name: 'Product 5',
      description: 'Innovative design and functionality',
      price: 9000,
      originalPrice: 12000,
      images: [],
      category: 'Electronics',
      tags: ['innovative'],
      storeId: 'store-2',
      rating: 4.4,
      reviewCount: 203,
      inStock: true,
      inventory: 18,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'test-8',
      name: 'Product 6',
      description: 'Premium quality and durability',
      price: 9000,
      originalPrice: 12000,
      images: [],
      category: 'Home & Garden',
      tags: ['premium'],
      storeId: 'store-3',
      rating: 4.7,
      reviewCount: 94,
      inStock: true,
      inventory: 22,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'test-9',
      name: 'Product 5',
      description: 'Innovative design and functionality',
      price: 5000,
      originalPrice: 8000,
      images: [],
      category: 'Electronics',
      tags: ['innovative'],
      storeId: 'store-2',
      rating: 4.4,
      reviewCount: 203,
      inStock: true,
      inventory: 18,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];

  const displayProducts = products.length > 0 ? products : testProducts;

  const initialDisplayProducts = displayProducts.slice(0, 9);

  if (loading && initialDisplayProducts.length === 0) {
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
        <Button onClick={() => window.location.reload()}>Try Again</Button>
      </div>
    );
  }

  if (initialDisplayProducts.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No products found.</p>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {initialDisplayProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center">
        <Button
          variant="outline"
          onClick={loadMore}
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
    </div>
  );
}
