'use client';

import { Button } from '../ui/Button';
import { Store } from '@/types/store';
import HorizontalSeparator from '../ui/HorizontalSeparator';
import HeartOutlineIcon from '../icons/HeartOutlineIcon';
import CallIcon from '../icons/callIcon';
import UserAvatarIcon from '../icons/UserAvatarIcon';
import ProductCard from '../product/ProductCard';
import RatingIcon from '../icons/ratingIcon';
import ProductsIcon from '../icons/ProductsIcon';

interface StoreCardProps {
  store: Store;
}

export default function StoreCard({ store }: StoreCardProps) {
  return (
    <div className="w-full h-auto flex flex-col rounded-md sm:rounded-lg border border-gray-300 opacity-100 cursor-pointer transition-all duration-0">
      <div className="p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between w-full opacity-100 gap-3 sm:gap-0">
        <div className="flex items-center gap-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
          <div
            className="bg-gray-200 bg-center bg-no-repeat w-8 h-8 sm:w-10 sm:h-10 rounded-md flex items-center justify-center text-white font-bold text-xs sm:text-sm"
            style={{
              backgroundImage: 'url(/images/bg_lines.png)',
              backgroundBlendMode: 'overlay',
            }}
          ></div>
          <div className="flex-1">
            <h4 className="font-dm-sans font-medium text-sm sm:text-base leading-none tracking-normal text-gray-900">
              {store.name}
            </h4>
            <p className="font-dm-sans font-light text-xs sm:text-sm leading-6 tracking-normal text-gray-500">
              {store.productCount} Products
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <Button className="bg-primary text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 h-8 sm:h-auto">
            <UserAvatarIcon
              width={14}
              height={14}
              className="sm:w-4 sm:h-4"
              color="#141C24"
            />
            <span className="font-sans font-extrabold text-xs sm:text-sm text-gray-900 leading-[100%] tracking-normal capitalize">
              View Profile
            </span>
          </Button>
          <Button
            className="rounded-sm transition-transform duration-300 ease-spring hover:translate-y-1"
            variant="outline"
            size="icon"
          >
            <CallIcon width={14} height={14} className="sm:w-4 sm:h-4" />
          </Button>
          <Button
            className="rounded-sm transition-transform duration-300 ease-spring hover:translate-y-1"
            variant="outline"
            size="icon"
          >
            <HeartOutlineIcon
              width={14}
              height={14}
              className="sm:w-4 sm:h-4"
            />
          </Button>
        </div>
      </div>

      <HorizontalSeparator className="w-full" />

      <div className="flex justify-between items-center p-3 sm:p-4 gap-4 lg:gap-6">
        <div className="space-y-3 sm:space-y-4">
          <div>
            <h2 className="font-sans font-bold text-base sm:text-lg leading-tight tracking-normal text-gray-900 mb-2">
              About
            </h2>
            <p className="font-sans font-normal text-xs sm:text-sm leading-relaxed tracking-normal text-gray-600">
              {store.description}
            </p>
          </div>

          <div>
            <h2 className="font-sans font-bold text-base sm:text-lg leading-tight tracking-normal text-gray-900 mb-2">
              Categories
            </h2>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-full border">
                Vectors
              </span>
              <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-full border">
                Icons
              </span>
              <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-full border">
                Backgrounds
              </span>
            </div>
          </div>

          <div>
            <h2 className="font-sans font-bold text-base sm:text-lg leading-tight tracking-normal text-gray-900 mb-2">
              Reviews
            </h2>
            <div className="flex items-center gap-2">
              <RatingIcon
                width={14}
                height={14}
                className="sm:w-4 sm:h-4"
                color="#FFD700"
              />
              <span className="font-sans font-medium text-xs sm:text-sm text-gray-900">
                {store.rating} ({store.reviewCount} Reviews)
              </span>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full sm:w-auto h-8 sm:h-10 px-3 sm:px-4 py-1 sm:py-2 gap-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50"
          >
            <ProductsIcon
              width={14}
              height={14}
              className="sm:w-4 sm:h-4"
              color="#C1CF16"
            />
            <span className="font-sans font-extrabold text-xs sm:text-sm leading-none tracking-normal capitalize text-gray-900">
              Explore Products
            </span>
          </Button>
        </div>
        <div>
          {store.products && store.products.length > 0 ? (
            <div className="grid grid-cols-3 gap-2">
              {store.products.slice(0, 3).map((product, index) =>
                product ? (
                  <div key={product.id || index} className="">
                    <ProductCard product={product} />
                  </div>
                ) : null
              )}
            </div>
          ) : (
            <div className="text-center py-4">
              <p className="text-xs sm:text-sm text-gray-500">
                No products available
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
