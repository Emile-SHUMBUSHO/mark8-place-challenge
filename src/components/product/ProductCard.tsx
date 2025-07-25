'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Product } from '@/types/product';
import { Button } from '../ui/Button';
import { formatPrice } from '@/lib/utils';
import { useCart } from '@/components/providers/CartProvider';
import { motion, AnimatePresence } from 'framer-motion';
import HeartOutlineIcon from '../icons/HeartOutlineIcon';
import CartAddIcon from '../icons/CartAddIcon';
import HeartFillIcon from '../icons/HeartFilIcon';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({
  product,
  className = '',
}: ProductCardProps) {
  const { addToCart, isInCart } = useCart();
  const [isSaved, setIsSaved] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showAdded, setShowAdded] = useState(false);
  const inCart = isInCart(product.id);

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!inCart && !isLoading) {
      setIsLoading(true);
      try {
        await addToCart({
          productId: product.id,
          quantity: 1,
        });
        setShowAdded(true);
        setTimeout(() => setShowAdded(false), 1500);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleToggleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSaved(!isSaved);
  };

  const hasDiscount =
    product.originalPrice && product.price < product.originalPrice;

  return (
    <div
      className={`bg-white w-full h-auto min-h-80 rounded-2xl border opacity-100 overflow-hidden hover:shadow-md transition-shadow duration-200 ${className}`}
    >
      <Link href={`/product/${product.id}`}>
        <div className="aspect-square relative bg-gray-100">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat flex items-center justify-center opacity-10"
            style={{
              backgroundImage: 'url(/images/bg_lines.png)',
              backgroundBlendMode: 'overlay',
            }}
          ></div>
        </div>
      </Link>

      <div className="p-4 flex justify-between items-center relative">
        <div>
          <Link href={`/product/${product.id}`}>
            <h3 className="font-dm-sans font-medium text-sm leading-none tracking-normal text-gray-900 hover:text-primary transition-colors line-clamp-2 mb-2">
              {product.name}
            </h3>
          </Link>

          <div className="flex items-center gap-2 mb-2">
            <span className="font-dm-sans font-bold text-base leading-none tracking-normal capitalize text-primary">
              {formatPrice(product.price)}
            </span>
            {hasDiscount && product.originalPrice && (
              <span className="font-dm-sans font-bold text-sm leading-none tracking-normal capitalize line-through text-gray-500">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            className="rounded-sm"
            variant="outline"
            size="icon"
            onClick={handleToggleSave}
          >
            {isSaved ? (
              <HeartFillIcon color={'#C1CF16'} width={16} height={16} />
            ) : (
              <HeartOutlineIcon color={'#141C24'} width={16} height={16} />
            )}
          </Button>
          <Button
            className="rounded-sm"
            variant="outline"
            size="icon"
            onClick={handleAddToCart}
            disabled={!product.inStock || inCart || isLoading}
          >
            <CartAddIcon
              color1={'#141C24'}
              color2={'#0C0D0D'}
              width={16}
              height={16}
            />
          </Button>
        </div>
        <AnimatePresence>
          {showAdded && (
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 60, opacity: 0 }}
              transition={{
                type: 'spring',
                mass: 1,
                stiffness: 600,
                damping: 15,
              }}
              className="absolute left-1/2 bottom-6 -translate-x-1/2 z-20 bg-primary text-black font-bold px-6 py-2 rounded-lg shadow-lg"
            >
              Added!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
