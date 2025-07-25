'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import UserAvatarIcon from '../icons/UserAvatarIcon';
import DownChevronIcon from '../icons/DownChevronIcon';
import VerticalSeparator from '../ui/VerticalSeparator';
import SettingsIcon from '../icons/settingsIcon';
import LogoutIcon from '../icons/logoutIcon';
import HeadsetIcon from '../icons/headsetIcon';
import CartIcon from '../icons/CartIcon';
import InformationIcon from '../icons/informationIcon';
import { useAuth } from '@/hooks/useAuth';

const mockUser = {
  name: 'Yves Honore B.',
  email: 'yveshonore@awesomity.rw',
  avatar: 'Y',
};

const menuItems = [
  {
    icon: 'user',
    label: 'My Account',
    href: '/account',
  },
  {
    icon: 'cart',
    label: 'My Orders',
    href: '/orders',
  },
  {
    icon: 'help',
    label: 'Help',
    href: '/help',
  },
  {
    icon: 'information',
    label: 'About',
    href: '/about',
  },
  {
    icon: 'settings',
    label: 'Settings',
    href: '/settings',
  },
];

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter();
  const { logout } = useAuth();

  const renderIcon = (icon: string) => {
    if (icon === 'settings') {
      return <SettingsIcon width={16} height={16} color="#495D69" />;
    }
    if (icon === 'help') {
      return <HeadsetIcon width={16} height={16} color="#495D69" />;
    }
    if (icon === 'user') {
      return <UserAvatarIcon width={16} height={16} />;
    }
    if (icon === 'cart') {
      return <CartIcon width={16} height={16} />;
    }
    if (icon === 'information') {
      return <InformationIcon width={16} height={16} color="#495D69" />;
    }
    return <span className="text-lg">{icon}</span>;
  };

  const handleMenuItemClick = (href: string) => {
    setIsOpen(false);
    router.push(href);
  };

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await logout();
      setIsOpen(false);
      router.push('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <div className="w-auto h-10 sm:h-12 px-2 sm:px-3 gap-1 sm:gap-2 rounded-md sm:rounded-lg border border-gray-300 flex items-center opacity-100 cursor-pointer transition-all duration-0">
          <UserAvatarIcon width={24} height={24} />
          <VerticalSeparator />
          <DownChevronIcon width={12} height={6} />
        </div>
      </PopoverTrigger>

      <PopoverContent
        className="w-80 p-0 rounded-xs rounded-br-md rounded-bl-md"
        align="end"
        sideOffset={8}
      >
        <div className="flex items-center gap-3 p-4">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            <span className="font-sans font-bold text-lg text-gray-900">
              {mockUser.avatar}
            </span>
          </div>
          <div className="flex-1">
            <h3 className="font-sans font-medium text-base text-gray-900">
              {mockUser.name}
            </h3>
            <p className="font-sans font-normal text-sm text-gray-500">
              {mockUser.email}
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 mx-4" />

        <div className="py-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => handleMenuItemClick(item.href)}
              disabled={isLoggingOut}
            >
              {renderIcon(item.icon)}
              <span className="font-sans font-medium text-sm text-gray-900">
                {item.label}
              </span>
            </button>
          ))}
        </div>

        <div className="border-t border-gray-200 mx-4" />

        <div className="p-2">
          <button
            className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleLogout}
            disabled={isLoggingOut}
          >
            <LogoutIcon width={16} height={16} color="#495D69" />
            <span className="font-sans font-medium text-sm text-gray-900">
              {isLoggingOut ? 'Logging out...' : 'Logout'}
            </span>
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
