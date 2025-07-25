'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HomeIcon from '../icons/HomeIcon';
import StoreIcon from '../icons/StoreIcon';

const navigationItems = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Stores', href: '/stores', icon: StoreIcon },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-10 w-auto h-12 opacity-100">
      {navigationItems.map(item => {
        const isActive = pathname === item.href;
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-2 px-3 py-2 text-xs font-medium transition-colors`}
          >
            <span
              className={
                isActive
                  ? 'text-primary opacity-100'
                  : 'text-gray-600 hover:text-gray-900 opacity-100'
              }
            >
              <Icon
                className="w-4 h-4"
                color={isActive ? '#C1CF16' : undefined}
              />
            </span>
            <span
              className={
                isActive
                  ? 'font-dm-sans font-bold text-xs leading-none tracking-normal capitalize text-gray-900'
                  : 'font-dm-sans font-normal text-xs leading-none tracking-normal capitalize text-gray-900 hover:text-gray-900'
              }
            >
              {item.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
