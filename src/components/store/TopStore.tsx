import React from 'react';
import StoreIcon from '../icons/StoreIcon';
import { Button } from '../ui/Button';
import LinkSquareIcon from '../icons/LinkSquareIcon';
import SearchIcon from '../icons/SearchIcon';
import FilterOneIcon from '../icons/FilterOneIcon';
import ChevronRightIcon from '../icons/ChevronRightIcon';

interface Store {
  id: string;
  name: string;
  productCount: number;
  avatar: string;
  color: string;
}

interface TopStoreProps {
  storeSearchQuery: string;
  onStoreSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  topStores: Store[];
}

const TopStore: React.FC<TopStoreProps> = ({
  storeSearchQuery,
  onStoreSearchChange,
  topStores,
}) => (
  <aside className="w-full lg:w-80">
    <div className="bg-white rounded-xl border border-gray-200">
      <div className="flex items-center justify-between p-4">
        <h3 className="font-bold text-gray-900 flex items-center gap-4">
          <StoreIcon color="#C1CF16" width={24} height={24} />{' '}
          <span className="font-dm-sans font-bold text-base leading-none tracking-normal capitalize">
            Top 10 Stores
          </span>
        </h3>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-gray-600"
        >
          <LinkSquareIcon
            width={16}
            height={16}
            color1="#141C24"
            color2="#141C24"
          />
        </Button>
      </div>
      <div className="relative w-full p-4 bg-[#F7F8FB] overflow-hidden">
        <div
          className="absolute inset-0 bg-[#F7F8FB] opacity-10 z-0"
          style={{
            backgroundImage: 'url(/images/bg_lines.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="relative z-10">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md h-12 flex items-center gap-2 rounded-lg bg-white border border-gray-200 px-4 py-0 opacity-100 relative">
            <SearchIcon
              color="#141C24"
              width={16}
              height={16}
              className="absolute left-4 top-1/2 -translate-y-1/2"
            />
            <input
              type="text"
              placeholder="Search a store"
              value={storeSearchQuery}
              onChange={onStoreSearchChange}
              className="w-full h-full bg-transparent outline-none border-none pl-6 pr-10 font-montserrat font-normal text-xs leading-6 tracking-normal placeholder-placeholder-store placeholder:font-montserrat placeholder:font-normal placeholder:text-xs placeholder:leading-6 placeholder:tracking-normal"
            />
            <FilterOneIcon
              color="#495D69"
              width={16}
              height={16}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </div>
      <div className="p-2">
        {topStores.map((store, index) => (
          <div
            key={index}
            className="flex items-center gap-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer p-3"
          >
            <div
              className={`bg-cover bg-center bg-no-repeat w-10 h-10 rounded-md flex items-center justify-center text-white font-bold text-sm ${store.color}`}
              style={{
                backgroundImage: 'url(/images/bg_lines.png)',
                backgroundBlendMode: 'overlay',
              }}
            ></div>
            <div className="flex-1">
              <h4 className="font-dm-sans font-medium text-sm leading-none tracking-normal text-gray-900">
                {store.name}
              </h4>
              <p className="font-dm-sans font-light text-xs leading-6 tracking-normal text-gray-500">
                {store.productCount} Products
              </p>
            </div>
            <ChevronRightIcon width={16} height={16} color="#DBDBDB" />
          </div>
        ))}
      </div>
    </div>
  </aside>
);

export default TopStore;
