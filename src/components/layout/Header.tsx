'use client';

import Link from 'next/link';
import Navigation from './Navigation';
import { useState } from 'react';
import { Button } from '../ui/Button';
import { useCart } from '@/components/providers/CartProvider';
import StoreIcon from '../icons/StoreIcon';
import SearchIcon from '../icons/SearchIcon';
import CartIcon from '../icons/CartIcon';
import HeartOutlineIcon from '../icons/HeartOutlineIcon';
import Brand from './Brand';
import CartModal from '../cart/CartModal';
import UserMenu from '../common/UserMenu';

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getItemCount } = useCart();
  const itemCount = getItemCount();

  return (
    <>
      <header className="sticky top-0 z-40 w-full max-w-full h-17 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 opacity-100">
        <div className="w-full mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-2.5">
          <div className="flex h-12 items-center justify-between">
            <div className="flex items-center gap-10 w-auto h-12 opacity-100">
              <Brand subtext="By Awesomity Lab" />
              <Navigation />
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <SearchIcon className="w-4 h-4 opacity-100 cursor-pointer hover:scale-110 transition-transform duration-200 ease-spring" />
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hidden lg:flex items-center gap-1 relative"
                    onClick={() => setIsCartOpen(true)}
                  >
                    <CartIcon className="w-4 h-4 opacity-100" />
                    <span className="font-dm-sans font-normal text-xs leading-none tracking-normal capitalize">
                      My Cart
                    </span>
                    {itemCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-primary text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                        {itemCount}
                      </span>
                    )}
                  </Button>
                </div>
                <Link href="/saved">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hidden lg:flex items-center gap-1"
                  >
                    <HeartOutlineIcon className="w-4 h-4 opacity-100" />
                    <span className="font-dm-sans font-normal text-xs leading-none tracking-normal capitalize">
                      Saved
                    </span>
                  </Button>
                </Link>
              </div>
              <div className="hidden lg:flex items-center gap-2 w-auto h-12 px-8 py-2 rounded-lg border-2 border-gray-300 opacity-100 transition-all duration-300 ease-in-out hover:shadow-md">
                <span className="font-dm-sans font-extrabold text-sm leading-none tracking-normal capitalize w-auto h-auto opacity-100">
                  Open A Store
                </span>
                <StoreIcon className="w-4 h-4 opacity-100" color="#C1CF16" />
              </div>
              <UserMenu />
            </div>
          </div>
        </div>
      </header>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
