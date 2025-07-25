export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: ProductImage[];
  category: string;
  tags: string[];
  storeId: string;
  store?: Store;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  inventory: number;
  variants?: ProductVariant[];
  specifications?: ProductSpecification[];
  createdAt: string;
  updatedAt: string;
}

export interface ProductImage {
  id: string;
  url: string;
  alt: string;
  isPrimary: boolean;
  order: number;
}

export interface ProductVariant {
  id: string;
  name: string;
  options: VariantOption[];
  price?: number;
  inventory?: number;
  sku?: string;
}

export interface VariantOption {
  name: string;
  value: string;
}

export interface ProductSpecification {
  name: string;
  value: string;
  category?: string;
}

export interface ProductFilter {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
  inStock?: boolean;
  storeId?: string;
  tags?: string[];
}

export interface ProductSearchParams {
  query?: string;
  category?: string;
  sortBy?:
    | "relevance"
    | "price_asc"
    | "price_desc"
    | "rating_desc"
    | "newest"
    | "popular";
  page?: number;
  limit?: number;
  filters?: ProductFilter;
}

export interface ProductSearchResult {
  products: Product[];
  total: number;
  page: number;
  totalPages: number;
  hasMore: boolean;
}

import { Store } from "./store";
