export interface CartItem {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
  selectedVariants?: SelectedVariant[];
  price: number;
  totalPrice: number;
  addedAt: string;
}

export interface SelectedVariant {
  variantId: string;
  optionName: string;
  optionValue: string;
}

export interface Cart {
  id: string;
  userId?: string;
  items: CartItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  discount: number;
  total: number;
  currency: string;
  updatedAt: string;
}

export interface AddToCartParams {
  productId: string;
  quantity: number;
  variants?: SelectedVariant[];
}

export interface UpdateCartItemParams {
  cartItemId: string;
  quantity: number;
}

export interface CartSummary {
  itemCount: number;
  subtotal: number;
  tax: number;
  shipping: number;
  discount: number;
  total: number;
  currency: string;
}

export interface ShippingCalculation {
  method: string;
  cost: number;
  estimatedDays: number;
}

export interface DiscountCode {
  code: string;
  type: "percentage" | "fixed";
  value: number;
  minOrder?: number;
  maxDiscount?: number;
  expiresAt?: string;
}

export interface AppliedDiscount {
  code: string;
  amount: number;
  type: "percentage" | "fixed";
}

import { Product } from "./product";
