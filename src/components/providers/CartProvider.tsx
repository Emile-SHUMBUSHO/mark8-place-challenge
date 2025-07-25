"use client";

import { ReactNode, createContext, useContext } from "react";
import { useCart as useCartHook } from "@/hooks/useCart";

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<ReturnType<typeof useCartHook> | null>(null);

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

export default function CartProvider({ children }: CartProviderProps) {
  const cartState = useCartHook();

  return (
    <CartContext.Provider value={cartState}>{children}</CartContext.Provider>
  );
}
