"use client";

import { ReactNode } from "react";
import AuthProvider from "./AuthProvider";
import CartProvider from "./CartProvider";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <AuthProvider>
      <CartProvider>{children}</CartProvider>
    </AuthProvider>
  );
}
