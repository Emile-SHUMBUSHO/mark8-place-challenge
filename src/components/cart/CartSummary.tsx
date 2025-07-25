"use client";

import { useState } from "react";
import { useCart } from "@/components/providers/CartProvider";
import { formatPrice } from "@/lib/utils";
import { Button } from "../ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { Input } from "../ui/Input";

interface CartSummaryProps {
  className?: string;
}

export default function CartSummary({ className }: CartSummaryProps) {
  const { cart } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  if (!cart || cart.items.length === 0) {
    return (
      <Card className={className}>
        <CardContent className="p-6 text-center">
          <p className="text-muted-foreground">Your cart is empty</p>
        </CardContent>
      </Card>
    );
  }

  const handleApplyPromo = () => {
    // Mock promo code application
    if (promoCode.toLowerCase() === "save10") {
      setPromoApplied(true);
    }
  };

  const itemCount = cart.items.reduce(
    (count, item) => count + item.quantity,
    0
  );

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Item Count */}
        <div className="flex justify-between text-sm">
          <span>Items ({itemCount})</span>
          <span>{formatPrice(cart.subtotal)}</span>
        </div>

        {/* Promo Code */}
        <div className="space-y-2">
          <div className="flex space-x-2">
            <Input
              placeholder="Promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="flex-1"
            />
            <Button
              variant="outline"
              onClick={handleApplyPromo}
              disabled={promoApplied || !promoCode}
            >
              Apply
            </Button>
          </div>
          {promoApplied && (
            <p className="text-sm text-green-600">
              Promo code applied! 10% off
            </p>
          )}
        </div>

        <div className="border-t pt-4 space-y-2">
          {/* Subtotal */}
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>{formatPrice(cart.subtotal)}</span>
          </div>

          {/* Discount */}
          {cart.discount > 0 && (
            <div className="flex justify-between text-sm text-green-600">
              <span>Discount</span>
              <span>-{formatPrice(cart.discount)}</span>
            </div>
          )}

          {/* Shipping */}
          <div className="flex justify-between text-sm">
            <span>Shipping</span>
            <span>
              {cart.shipping > 0 ? formatPrice(cart.shipping) : "Free"}
            </span>
          </div>

          {/* Tax */}
          <div className="flex justify-between text-sm">
            <span>Tax</span>
            <span>{formatPrice(cart.tax)}</span>
          </div>
        </div>

        {/* Total */}
        <div className="border-t pt-4">
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>{formatPrice(cart.total)}</span>
          </div>
        </div>

        {/* Checkout Button */}
        <Button className="w-full" size="lg">
          Proceed to Checkout
        </Button>

        {/* Additional Info */}
        <div className="text-xs text-muted-foreground space-y-1">
          <p>• Free shipping on orders over $50</p>
          <p>• Secure checkout with SSL encryption</p>
          <p>• 30-day return policy</p>
        </div>
      </CardContent>
    </Card>
  );
}
