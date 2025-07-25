export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  CART: "/cart",
  SAVED: "/saved",
  STORES: "/stores",
  SEARCH: "/search",
  PRODUCT: (id: string) => `/product/${id}`,
} as const;

export const CATEGORIES = [
  "Electronics",
  "Clothing",
  "Home & Garden",
  "Sports & Outdoors",
  "Books",
  "Beauty & Health",
  "Toys & Games",
  "Automotive",
  "Food & Beverages",
  "Art & Crafts",
] as const;

export const SORT_OPTIONS = [
  { label: "Relevance", value: "relevance" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
  { label: "Rating: High to Low", value: "rating_desc" },
  { label: "Newest", value: "newest" },
  { label: "Popular", value: "popular" },
] as const;

export const PAGINATION = {
  DEFAULT_LIMIT: 20,
  MAX_LIMIT: 100,
} as const;

export const CART_STORAGE_KEY = "marketplace_cart";
export const SAVED_ITEMS_STORAGE_KEY = "marketplace_saved";
export const SEARCH_HISTORY_KEY = "marketplace_search_history";

export const ERROR_MESSAGES = {
  GENERIC: "Something went wrong. Please try again.",
  NETWORK: "Network error. Please check your connection.",
  UNAUTHORIZED: "Please log in to continue.",
  NOT_FOUND: "Item not found.",
  VALIDATION: "Please check your input and try again.",
} as const;

export const SUCCESS_MESSAGES = {
  CART_ADDED: "Item added to cart",
  CART_REMOVED: "Item removed from cart",
  SAVED_ADDED: "Item saved for later",
  SAVED_REMOVED: "Item removed from saved items",
} as const;
