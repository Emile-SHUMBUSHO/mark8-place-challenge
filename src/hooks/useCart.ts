import { useState, useEffect, useCallback } from "react";
import {
  Cart,
  CartItem,
  AddToCartParams,
  UpdateCartItemParams,
} from "@/types/cart";
import { CART_STORAGE_KEY } from "@/lib/constants";

interface UseCartReturn {
  cart: Cart | null;
  addToCart: (params: AddToCartParams) => Promise<void>;
  removeFromCart: (cartItemId: string) => Promise<void>;
  updateCartItem: (params: UpdateCartItemParams) => Promise<void>;
  clearCart: () => void;
  getItemCount: () => number;
  isInCart: (productId: string) => boolean;
  loading: boolean;
  error: string | null;
}

export function useCart(): UseCartReturn {
  const [cart, setCart] = useState<Cart | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      } else {
        setCart(createEmptyCart());
      }
    } catch (err) {
      console.error("Failed to load cart from localStorage:", err);
      setCart(createEmptyCart());
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (cart) {
      try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
      } catch (err) {
        console.error("Failed to save cart to localStorage:", err);
      }
    }
  }, [cart]);

  const createEmptyCart = (): Cart => ({
    id: Math.random().toString(36).substr(2, 9),
    items: [],
    subtotal: 0,
    tax: 0,
    shipping: 0,
    discount: 0,
    total: 0,
    currency: "USD",
    updatedAt: new Date().toISOString(),
  });

  const calculateCartTotals = (items: CartItem[]): Partial<Cart> => {
    const subtotal = items.reduce((sum, item) => sum + item.totalPrice, 0);
    const tax = subtotal * 0.08; // 8% tax rate
    const shipping = subtotal > 50 ? 0 : 9.99; // Free shipping over $50
    const total = subtotal + tax + shipping;

    return { subtotal, tax, shipping, total };
  };

  const addToCart = useCallback(async (params: AddToCartParams) => {
    setLoading(true);
    setError(null);

    try {
      // In a real app, you'd fetch product details from API
      // For now, we'll create a mock product
      const mockProduct = {
        id: params.productId,
        name: "Product Name",
        price: 29.99,
        images: [],
        category: "Electronics",
        tags: [],
        storeId: "store-1",
        rating: 4.5,
        reviewCount: 100,
        inStock: true,
        inventory: 10,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        description: "Product description",
      };

      setCart((prevCart) => {
        if (!prevCart) return null;

        const existingItemIndex = prevCart.items.findIndex(
          (item) => item.productId === params.productId
        );

        let newItems: CartItem[];

        if (existingItemIndex >= 0) {
          // Update existing item quantity
          newItems = [...prevCart.items];
          newItems[existingItemIndex] = {
            ...newItems[existingItemIndex],
            quantity: newItems[existingItemIndex].quantity + params.quantity,
            totalPrice:
              (newItems[existingItemIndex].quantity + params.quantity) *
              mockProduct.price,
          };
        } else {
          // Add new item
          const newItem: CartItem = {
            id: Math.random().toString(36).substr(2, 9),
            productId: params.productId,
            product: mockProduct,
            quantity: params.quantity,
            selectedVariants: params.variants,
            price: mockProduct.price,
            totalPrice: mockProduct.price * params.quantity,
            addedAt: new Date().toISOString(),
          };
          newItems = [...prevCart.items, newItem];
        }

        const totals = calculateCartTotals(newItems);

        return {
          ...prevCart,
          items: newItems,
          ...totals,
          updatedAt: new Date().toISOString(),
        };
      });
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to add item to cart"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const removeFromCart = useCallback(async (cartItemId: string) => {
    setLoading(true);
    setError(null);

    try {
      setCart((prevCart) => {
        if (!prevCart) return null;

        const newItems = prevCart.items.filter(
          (item) => item.id !== cartItemId
        );
        const totals = calculateCartTotals(newItems);

        return {
          ...prevCart,
          items: newItems,
          ...totals,
          updatedAt: new Date().toISOString(),
        };
      });
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to remove item from cart"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const updateCartItem = useCallback(async (params: UpdateCartItemParams) => {
    setLoading(true);
    setError(null);

    try {
      setCart((prevCart) => {
        if (!prevCart) return null;

        const newItems = prevCart.items.map((item) => {
          if (item.id === params.cartItemId) {
            return {
              ...item,
              quantity: params.quantity,
              totalPrice: item.price * params.quantity,
            };
          }
          return item;
        });

        const totals = calculateCartTotals(newItems);

        return {
          ...prevCart,
          items: newItems,
          ...totals,
          updatedAt: new Date().toISOString(),
        };
      });
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to update cart item"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const clearCart = useCallback(() => {
    setCart(createEmptyCart());
  }, []);

  const getItemCount = useCallback(() => {
    return cart?.items.reduce((count, item) => count + item.quantity, 0) || 0;
  }, [cart]);

  const isInCart = useCallback(
    (productId: string) => {
      return cart?.items.some((item) => item.productId === productId) || false;
    },
    [cart]
  );

  return {
    cart,
    addToCart,
    removeFromCart,
    updateCartItem,
    clearCart,
    getItemCount,
    isInCart,
    loading,
    error,
  };
}
