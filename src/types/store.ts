export interface Store {
  color: string;
  id: string;
  name: string;
  description: string;
  logo?: string;
  banner?: string;
  ownerId: string;
  owner?: User;
  category: string;
  rating: number;
  reviewCount: number;
  products: Product[];
  productCount: number;
  address: StoreAddress;
  contact: StoreContact;
  socialMedia?: StoreSocialMedia;
  policies: StorePolicies;
  isVerified: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface StoreAddress {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
}

export interface StoreContact {
  email: string;
  phone: string;
  website?: string;
  supportHours?: string;
}

export interface StoreSocialMedia {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
}

export interface StorePolicies {
  returns: string;
  shipping: string;
  privacy: string;
  terms: string;
}

export interface StoreStats {
  totalSales: number;
  totalOrders: number;
  averageRating: number;
  totalReviews: number;
  responseTime: number;
  joinDate: string;
}

export interface StoreFilter {
  category?: string;
  rating?: number;
  location?: string;
  isVerified?: boolean;
}

export interface StoreSearchParams {
  query?: string;
  category?: string;
  sortBy?: 'relevance' | 'rating_desc' | 'newest' | 'popular';
  page?: number;
  limit?: number;
  filters?: StoreFilter;
}

import { User } from './user';
import { Product } from './product';
