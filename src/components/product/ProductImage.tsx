'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useProduct } from '@/hooks/useProducts';
import LoadingSpinner from '../common/LoadingSpinner';

interface ProductImageProps {
  productId: string;
  className?: string;
}

export default function ProductImage({
  productId,
  className,
}: ProductImageProps) {
  const { product, loading } = useProduct(productId);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (loading) {
    return (
      <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
        <LoadingSpinner />
      </div>
    );
  }

  if (!product || !product.images || product.images.length === 0) {
    return (
      <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
        <span className="font-dm-sans font-medium text-sm text-gray-500">
          No image available
        </span>
      </div>
    );
  }

  const selectedImage = product.images[selectedImageIndex];

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Main Image */}
      <div className="aspect-square relative overflow-hidden rounded-lg border border-gray-200 bg-white">
        <Image
          src={selectedImage.url}
          alt={selectedImage.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          className="object-cover transition-transform duration-300 hover:scale-105"
          priority={selectedImageIndex === 0}
        />

        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-red-600 text-white px-4 py-2 rounded-lg">
              <span className="font-dm-sans font-bold text-sm leading-none tracking-normal">
                OUT OF STOCK
              </span>
            </div>
          </div>
        )}

        {/* Image Navigation Arrows (if multiple images) */}
        {product.images.length > 1 && (
          <>
            {selectedImageIndex > 0 && (
              <button
                onClick={() => setSelectedImageIndex(selectedImageIndex - 1)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}
            {selectedImageIndex < product.images.length - 1 && (
              <button
                onClick={() => setSelectedImageIndex(selectedImageIndex + 1)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}
          </>
        )}
      </div>

      {/* Thumbnail Gallery */}
      {product.images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {product.images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setSelectedImageIndex(index)}
              className={`aspect-square relative overflow-hidden rounded-lg border-2 transition-all ${
                selectedImageIndex === index
                  ? 'border-primary ring-2 ring-primary/20'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                sizes="150px"
                className="object-cover"
              />
              {selectedImageIndex === index && (
                <div className="absolute inset-0 bg-primary/10"></div>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Image Info */}
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-center justify-between text-sm">
          <span className="font-dm-sans font-medium text-gray-900">
            Image {selectedImageIndex + 1} of {product.images.length}
          </span>
          {selectedImage.alt && (
            <span className="font-dm-sans font-normal text-gray-600 truncate ml-4">
              {selectedImage.alt}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
