"use client";

import { useCart } from "@/components/providers/CartProvider";
import { formatPrice } from "@/lib/utils";
import { Button } from "../ui/Button";
import CartItem from "./CartItem";
import { Badge } from "../ui/Badge";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export default function CartDrawer({
  isOpen,
  onClose,
  className,
}: CartDrawerProps) {
  const { cart, getItemCount } = useCart();
  const itemCount = getItemCount();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 h-full w-full max-w-md bg-background shadow-xl z-50 transform transition-transform duration-300 ${className}`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center space-x-2">
              <h2 className="text-lg font-semibold">Shopping Cart</h2>
              {itemCount > 0 && <Badge variant="secondary">{itemCount}</Badge>}
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              ✕
            </Button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {!cart || cart.items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center p-8">
                <div className="text-6xl mb-4">🛒</div>
                <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
                <p className="text-muted-foreground mb-6">
                  Add some products to get started
                </p>
                <Button onClick={onClose}>Continue Shopping</Button>
              </div>
            ) : (
              <div className="p-4 space-y-4">
                {cart.items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart && cart.items.length > 0 && (
            <div className="border-t p-4 space-y-4">
              {/* Totals */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal ({itemCount} items)</span>
                  <span>{formatPrice(cart.subtotal)}</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span>
                    {cart.shipping > 0 ? formatPrice(cart.shipping) : "Free"}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span>Tax</span>
                  <span>{formatPrice(cart.tax)}</span>
                </div>

                <div className="border-t pt-2">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>{formatPrice(cart.total)}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <Button className="w-full" size="lg">
                  Checkout
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    onClose();
                    // Navigate to cart page
                  }}
                >
                  View Cart
                </Button>
              </div>

              {/* Free shipping notice */}
              {cart.subtotal < 50 && (
                <div className="text-xs text-center text-muted-foreground">
                  Add {formatPrice(50 - cart.subtotal)} more for free shipping
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
