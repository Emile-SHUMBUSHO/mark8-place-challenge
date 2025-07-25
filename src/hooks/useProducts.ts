import { useState, useEffect, useCallback, useMemo } from 'react';
import {
  Product,
  ProductSearchParams,
  ProductSearchResult,
} from '@/types/product';
interface UseProductsReturn {
  products: Product[];
  loading: boolean;
  error: string | null;
  hasMore: boolean;
  total: number;
  searchProducts: (params: ProductSearchParams) => Promise<void>;
  loadMore: () => Promise<void>;
  refresh: () => Promise<void>;
}

export function useProducts(
  initialParams?: ProductSearchParams
): UseProductsReturn {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [total, setTotal] = useState(0);
  const [currentParams, setCurrentParams] = useState<ProductSearchParams>(
    initialParams || {}
  );
  const [currentPage, setCurrentPage] = useState(1);

  // Memoize initialParams to prevent unnecessary effect runs
  const memoizedInitialParams = useMemo(
    () => initialParams || {},
    [
      initialParams?.query,
      initialParams?.category,
      initialParams?.limit,
      initialParams?.sortBy,
      initialParams?.page,
      initialParams?.filters,
    ]
  );

  const searchProducts = useCallback(
    async (params: ProductSearchParams, append = false) => {
      setLoading(true);
      setError(null);
      try {
        const searchParams = {
          ...params,
          page: append ? currentPage + 1 : 1,
          limit: params.limit || 20,
        };

        const mockResult: ProductSearchResult = {
          products: generateMockProducts(
            searchParams.limit || 20,
            searchParams.page || 1
          ),
          total: 150,
          page: searchParams.page || 1,
          totalPages: Math.ceil(150 / (searchParams.limit || 20)),
          hasMore:
            (searchParams.page || 1) <
            Math.ceil(150 / (searchParams.limit || 20)),
        };

        if (append) {
          setProducts(prev => [...prev, ...mockResult.products]);
          setCurrentPage(mockResult.page);
        } else {
          setProducts(mockResult.products);
          setCurrentPage(1);
          setCurrentParams(params);
        }

        setTotal(mockResult.total);
        setHasMore(mockResult.hasMore);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Failed to fetch products'
        );
      } finally {
        setLoading(false);
      }
    },
    [currentPage]
  );

  const loadMore = useCallback(async () => {
    if (!hasMore || loading) return;
    await searchProducts(currentParams, true);
  }, [hasMore, loading, currentParams, searchProducts]);

  const refresh = useCallback(async () => {
    await searchProducts(currentParams, false);
  }, [currentParams, searchProducts]);

  // Fix: Remove searchProducts from dependencies and use memoized params
  useEffect(() => {
    const performSearch = async () => {
      setLoading(true);
      setError(null);
      try {
        const searchParams = {
          ...memoizedInitialParams,
          page: 1,
          limit: memoizedInitialParams.limit || 20,
        };

        const mockResult: ProductSearchResult = {
          products: generateMockProducts(
            searchParams.limit || 20,
            searchParams.page || 1
          ),
          total: 150,
          page: searchParams.page || 1,
          totalPages: Math.ceil(150 / (searchParams.limit || 20)),
          hasMore:
            (searchParams.page || 1) <
            Math.ceil(150 / (searchParams.limit || 20)),
        };

        setProducts(mockResult.products);
        setCurrentPage(1);
        setCurrentParams(memoizedInitialParams);
        setTotal(mockResult.total);
        setHasMore(mockResult.hasMore);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Failed to fetch products'
        );
      } finally {
        setLoading(false);
      }
    };

    performSearch();
  }, [memoizedInitialParams]);

  return {
    products,
    loading,
    error,
    hasMore,
    total,
    searchProducts,
    loadMore,
    refresh,
  };
}

interface UseProductReturn {
  product: Product | null;
  loading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
}

export function useProduct(productId: string): UseProductReturn {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProduct = useCallback(async () => {
    if (!productId) return;

    setLoading(true);
    setError(null);

    try {
      const mockProduct = generateMockProducts(1, 1)[0];
      setProduct({ ...mockProduct, id: productId });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch product');
    } finally {
      setLoading(false);
    }
  }, [productId]);

  const refresh = useCallback(async () => {
    await fetchProduct();
  }, [fetchProduct]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return {
    product,
    loading,
    error,
    refresh,
  };
}

function generateMockProducts(count: number, page: number): Product[] {
  const categories = [
    'Electronics',
    'Clothing',
    'Home & Garden',
    'Sports',
    'Books',
  ];

  const products: Product[] = [];
  const productNames = [
    'Wireless Bluetooth Headphones',
    'Organic Cotton T-Shirt',
    'Smart LED Light Bulbs',
    'Yoga Mat Pro',
    'Digital Photography Guide',
    'Gaming Mechanical Keyboard',
    'Eco-Friendly Water Bottle',
    'Home Security Camera',
    'Running Shoes Ultra',
    'Recipe Collection Book',
  ];

  for (let i = 0; i < count; i++) {
    const id = `product-${(page - 1) * count + i + 1}`;
    const nameIndex = i % productNames.length;

    products.push({
      id,
      name: productNames[nameIndex],
      description: `This is a detailed description for ${productNames[nameIndex]}. High quality product with excellent features and great value for money.`,
      price: Math.floor(Math.random() * 500) + 10,
      originalPrice:
        Math.random() > 0.7 ? Math.floor(Math.random() * 200) + 50 : undefined,
      images: [],
      category: categories[Math.floor(Math.random() * categories.length)],
      tags: ['popular', 'featured'],
      storeId: `store-${Math.floor(Math.random() * 5) + 1}`,
      rating: Math.round((Math.random() * 2 + 3) * 10) / 10,
      reviewCount: Math.floor(Math.random() * 500) + 10,
      inStock: Math.random() > 0.1,
      inventory: Math.floor(Math.random() * 100) + 5,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
  }

  return products;
}
