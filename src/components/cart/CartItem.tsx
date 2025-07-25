'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CartItem as CartItemType } from '@/types/cart';
import { useCart } from '@/components/providers/CartProvider';
import { formatPrice } from '@/lib/utils';
import { Button } from '../ui/Button';

interface CartItemProps {
  item: CartItemType;
  className?: string;
}

export default function CartItem({ item, className }: CartItemProps) {
  const { updateCartItem, removeFromCart, loading } = useCart();

  const handleQuantityChange = async (newQuantity: number) => {
    if (newQuantity <= 0) {
      await removeFromCart(item.id);
    } else {
      await updateCartItem({
        cartItemId: item.id,
        quantity: newQuantity,
      });
    }
  };

  const handleRemove = async () => {
    await removeFromCart(item.id);
  };

  const primaryImage =
    item.product.images?.find(img => img.isPrimary) || item.product.images?.[0];

  return (
    <div
      className={`bg-white rounded-xl border border-gray-200 p-4 ${className}`}
    >
      <div className="flex items-center space-x-4">
        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-sm font-medium text-gray-600">
          1
        </div>

        <Link href={`/product/${item.product.id}`}>
          <div className="w-16 h-16 relative overflow-hidden rounded-lg bg-gray-100 flex-shrink-0">
            {primaryImage ? (
              <Image
                src={primaryImage.url}
                alt={primaryImage.alt}
                fill
                className="object-cover hover:scale-105 transition-transform"
                sizes="64px"
              />
            ) : (
              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                <span className="text-xs text-gray-400">No Image</span>
              </div>
            )}
          </div>
        </Link>

        <div className="flex-1 min-w-0">
          <Link href={`/product/${item.product.id}`}>
            <h3 className="font-medium text-gray-900 hover:text-primary transition-colors line-clamp-1">
              {item.product.name}
            </h3>
          </Link>

          <div className="mt-1">
            <span className="text-lg font-semibold text-gray-900">
              {formatPrice(item.price)}
            </span>
          </div>

          {item.selectedVariants && item.selectedVariants.length > 0 && (
            <div className="mt-1">
              {item.selectedVariants.map((variant, index) => (
                <span key={index} className="text-xs text-gray-500">
                  {variant.optionName}: {variant.optionValue}
                  {index < item.selectedVariants!.length - 1 && ', '}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleQuantityChange(item.quantity - 1)}
              disabled={loading}
              className="h-8 w-8 rounded-lg"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 12H4"
                />
              </svg>
            </Button>
            <span className="text-sm font-medium w-8 text-center">
              {item.quantity}
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleQuantityChange(item.quantity + 1)}
              disabled={loading || item.quantity >= item.product.inventory}
              className="h-8 w-8 rounded-lg"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={handleRemove}
            disabled={loading}
            className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}
