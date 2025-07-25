'use client';

import { useState } from 'react';
import { useProduct } from '@/hooks/useProducts';
import { useCart } from '@/components/providers/CartProvider';
import { Button } from '../ui/Button';
import MinusIcon from '../icons/MinusIcon';
import PlusIcon from '../icons/PlusIcon';
import CartAddIcon from '../icons/CartAddIcon';
import HeartOutlineIcon from '../icons/HeartOutlineIcon';
import HeartFilIcon from '../icons/HeartFilIcon';

interface ProductActionsProps {
  productId: string;
  className?: string;
}

export default function ProductActions({
  productId,
  className,
}: ProductActionsProps) {
  const { product, loading } = useProduct(productId);
  const { addToCart, isInCart, loading: cartLoading } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [saved, setSaved] = useState(false);

  const inCart = isInCart(productId);

  const handleAddToCart = async () => {
    if (product && !inCart) {
      await addToCart({
        productId: product.id,
        quantity,
      });
    }
  };

  const handleSaveItem = () => {
    setSaved(!saved);
    // In a real app, this would call an API to save/unsave the item
  };

  const handleBuyNow = () => {
    // In a real app, this would handle immediate purchase
    console.log('Buy now clicked');
  };

  if (loading || !product) {
    return (
      <div
        className={`bg-white rounded-lg border border-gray-200 p-6 ${className}`}
      >
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`bg-white rounded-lg border border-gray-200 p-6 space-y-6 ${className}`}
    >
      {/* Quantity Selector */}
      <div>
        <label className="font-sans font-bold text-base leading-tight tracking-normal text-gray-900 mb-3 block">
          Quantity
        </label>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            disabled={quantity <= 1}
            className="w-10 h-10 rounded-sm border border-gray-300 hover:bg-gray-50"
          >
            <MinusIcon width={16} height={16} />
          </Button>
          <div className="w-16 h-10 flex items-center justify-center bg-gray-50 rounded-sm border border-gray-300">
            <span className="font-dm-sans font-bold text-base text-gray-900">
              {quantity}
            </span>
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              setQuantity(Math.min(product.inventory, quantity + 1))
            }
            disabled={quantity >= product.inventory}
            className="w-10 h-10 rounded-sm border border-gray-300 hover:bg-gray-50"
          >
            <PlusIcon width={16} height={16} />
          </Button>
        </div>
        <p className="font-dm-sans font-light text-xs text-gray-500 mt-2">
          {product.inventory} units available
        </p>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        {/* Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          disabled={!product.inStock || inCart || cartLoading}
          className="w-full h-12 rounded-sm bg-primary hover:bg-primary/90 disabled:bg-gray-300 disabled:text-gray-500"
        >
          <div className="flex items-center justify-center gap-2">
            <CartAddIcon width={16} height={16} />
            <span className="font-dm-sans font-extrabold text-sm leading-none tracking-normal capitalize text-black">
              {cartLoading
                ? 'Adding...'
                : !product.inStock
                  ? 'Out of Stock'
                  : inCart
                    ? 'Already in Cart'
                    : `Add ${quantity} to Cart`}
            </span>
          </div>
        </Button>

        {/* Save for Later Button */}
        <Button
          variant="outline"
          onClick={handleSaveItem}
          className="w-full h-12 rounded-sm border border-gray-300 hover:bg-gray-50"
        >
          <div className="flex items-center justify-center gap-2">
            {saved ? (
              <HeartFilIcon width={16} height={16} />
            ) : (
              <HeartOutlineIcon width={16} height={16} />
            )}
            <span className="font-dm-sans font-extrabold text-sm leading-none tracking-normal capitalize text-gray-900">
              {saved ? 'Saved' : 'Save for Later'}
            </span>
          </div>
        </Button>

        {/* Buy Now Button */}
        <Button
          onClick={handleBuyNow}
          disabled={!product.inStock}
          variant="secondary"
          className="w-full h-12 rounded-sm bg-gray-100 hover:bg-gray-200 disabled:bg-gray-300 disabled:text-gray-500"
        >
          <span className="font-dm-sans font-extrabold text-sm leading-none tracking-normal capitalize text-gray-900">
            Buy Now
          </span>
        </Button>
      </div>

      {/* Additional Info */}
      <div className="border-t border-gray-200 pt-6 space-y-3">
        <div className="flex items-center gap-3">
          <span className="text-lg">🚚</span>
          <span className="font-dm-sans font-normal text-sm text-gray-600">
            Free shipping on orders over $50
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-lg">↩️</span>
          <span className="font-dm-sans font-normal text-sm text-gray-600">
            30-day return policy
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-lg">🛡️</span>
          <span className="font-dm-sans font-normal text-sm text-gray-600">
            2-year warranty included
          </span>
        </div>
      </div>
    </div>
  );
}
