'use client';

import { useProduct } from '@/hooks/useProducts';
import { formatPrice } from '@/lib/utils';
import { Badge } from '../ui/Badge';
import LoadingSpinner from '../common/LoadingSpinner';
import RatingIcon from '../icons/ratingIcon';
import HeartOutlineIcon from '../icons/HeartOutlineIcon';
import HeartFilIcon from '../icons/HeartFilIcon';
import { Button } from '../ui/Button';
import { useState } from 'react';

interface ProductDetailsProps {
  productId: string;
  className?: string;
}

export default function ProductDetails({
  productId,
  className,
}: ProductDetailsProps) {
  const { product, loading, error } = useProduct(productId);
  const [isSaved, setIsSaved] = useState(false);

  if (loading) {
    return (
      <div className="flex justify-center py-8">
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="text-center py-8">
        <p className="font-dm-sans font-medium text-sm text-red-600">
          Failed to load product details
        </p>
      </div>
    );
  }

  const handleSaveToggle = () => {
    setIsSaved(!isSaved);
    // In a real app, this would call an API to save/unsave the item
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Product Header */}
      <div>
        {/* Product Title & Save Button */}
        <div className="flex items-start justify-between mb-4">
          <h1 className="font-sans font-black text-xl sm:text-2xl lg:text-3xl leading-[100%] tracking-normal text-gray-900 flex-1 mr-4">
            {product.name}
          </h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleSaveToggle}
            className="flex-shrink-0"
          >
            {isSaved ? (
              <HeartFilIcon width={20} height={20} />
            ) : (
              <HeartOutlineIcon width={20} height={20} />
            )}
          </Button>
        </div>

        {/* Rating & Stock Status */}
        <div className="flex items-center flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-2">
            <RatingIcon width={16} height={16} color="#FFD700" />
            <span className="font-dm-sans font-medium text-sm text-gray-900">
              {product.rating.toFixed(1)}
            </span>
            <span className="font-dm-sans font-light text-sm text-gray-500">
              ({product.reviewCount} Reviews)
            </span>
          </div>
          <Badge
            variant={product.inStock ? 'default' : 'destructive'}
            className={`px-3 py-1 text-xs font-medium ${
              product.inStock
                ? 'bg-green-100 text-green-800 border-green-200'
                : 'bg-red-100 text-red-800 border-red-200'
            }`}
          >
            {product.inStock ? 'IN STOCK' : 'OUT OF STOCK'}
          </Badge>
        </div>

        {/* Price */}
        <div className="mb-6">
          <div className="flex items-baseline gap-3">
            <span className="font-dm-sans font-black text-2xl sm:text-3xl leading-[100%] tracking-normal text-gray-900">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="font-dm-sans font-light text-lg leading-[100%] tracking-normal text-gray-500 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Product Information */}
      <div className="space-y-6">
        {/* Description */}
        <div>
          <h3 className="font-sans font-bold text-base sm:text-lg leading-tight tracking-normal text-gray-900 mb-3">
            Description
          </h3>
          <p className="font-dm-sans font-normal text-sm sm:text-base leading-relaxed tracking-normal text-gray-600">
            {product.description}
          </p>
        </div>

        {/* Category */}
        <div>
          <h3 className="font-sans font-bold text-base sm:text-lg leading-tight tracking-normal text-gray-900 mb-3">
            Category
          </h3>
          <Badge
            variant="outline"
            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border border-gray-300"
          >
            {product.category}
          </Badge>
        </div>

        {/* Tags */}
        {product.tags && product.tags.length > 0 && (
          <div>
            <h3 className="font-sans font-bold text-base sm:text-lg leading-tight tracking-normal text-gray-900 mb-3">
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-300"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Specifications */}
        {product.specifications && product.specifications.length > 0 && (
          <div>
            <h3 className="font-sans font-bold text-base sm:text-lg leading-tight tracking-normal text-gray-900 mb-3">
              Specifications
            </h3>
            <div className="bg-gray-50 rounded-lg p-4 space-y-3">
              {product.specifications.map((spec, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0"
                >
                  <span className="font-dm-sans font-medium text-sm text-gray-900">
                    {spec.name}
                  </span>
                  <span className="font-dm-sans font-normal text-sm text-gray-600">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Product Details */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-dm-sans font-medium text-gray-900">
                Inventory:
              </span>
              <span className="font-dm-sans font-normal text-gray-600 ml-2">
                {product.inventory} units
              </span>
            </div>
            <div>
              <span className="font-dm-sans font-medium text-gray-900">
                Product ID:
              </span>
              <span className="font-dm-sans font-normal text-gray-600 ml-2">
                {product.id}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
