'use client';

import { useCart } from '@/components/providers/CartProvider';
import { formatPrice } from '@/lib/utils';
import { Button } from '../ui/Button';
import { Dialog, DialogContent, DialogTitle } from '../ui/dialog';
import { useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import CurrencyIcon from '../icons/currencyIcon';
import DeleteIcon from '../icons/deleteIcon';
import HeartOutlineIcon from '../icons/HeartOutlineIcon';
import HeartFilIcon from '../icons/HeartFilIcon';
import InformationIcon from '../icons/informationIcon';
import MinusIcon from '../icons/MinusIcon';
import PlusIcon from '../icons/PlusIcon';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartModal({ isOpen, onClose }: CartModalProps) {
  const { cart, getItemCount } = useCart();
  const itemCount = getItemCount();
  const [isSaveForLater, setIsSaveForLater] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-2xl w-full max-h-[90vh] p-0 flex flex-col rounded-xs"
        showCloseButton={false}
      >
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center gap-2">
            <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
              <X width={20} height={20} />
            </button>
            <DialogTitle className="font-sans font-bold text-base sm:text-lg leading-[100%] tracking-normal text-gray-900 capitalize">
              My Cart ({itemCount})
            </DialogTitle>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-sm hover:bg-gray-50"
              onClick={() => setIsSaveForLater(!isSaveForLater)}
            >
              {isSaveForLater ? (
                <HeartFilIcon color={'#C1CF16'} width={16} height={16} />
              ) : (
                <HeartOutlineIcon color={'#141C24'} width={16} height={16} />
              )}
              <span className="font-sans font-bold text-sm text-gray-900">
                Save Cart For Later
              </span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-sm p-4">
              <DeleteIcon />
            </Button>
          </div>
        </div>

        <div className="px-6 py-3 bg-gray-100">
          <div className="flex items-center gap-2">
            <InformationIcon />
            <span className="font-sans font-medium text-sm sm:text-base leading-[100%] tracking-normal text-gray-700">
              By proceeding you won&apos;t be charged yet
            </span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4 min-h-0">
          {!cart || cart.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <div className="text-6xl mb-4">🛒</div>
              <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
              <p className="text-gray-500 mb-6">
                Add some products to get started
              </p>
              <Button onClick={onClose}>Continue Shopping</Button>
            </div>
          ) : (
            <div className="space-y-4 pb-4">
              {cart.items.map((item, index) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl border border-gray-200 p-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-sm font-medium text-gray-600">
                      {index + 1}
                    </div>

                    <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                      {item.product.images?.[0] ? (
                        <Image
                          src={item.product.images[0].url}
                          alt={item.product.images[0].alt}
                          width={64}
                          height={64}
                          className="object-cover"
                          sizes="64px"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                          <span className="text-xs text-gray-400">
                            No Image
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex-1">
                      <h3 className="font-sans font-bold text-sm sm:text-base leading-[100%] tracking-normal text-gray-900 capitalize">
                        {item.product.name}
                      </h3>
                      <p className="font-sans font-medium text-sm sm:text-base leading-[100%] tracking-normal text-gray-900 mt-1">
                        {formatPrice(item.price)}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-sm"
                      >
                        <MinusIcon />
                      </Button>
                      <Button
                        size="icon"
                        className="rounded-sm bg-gray-100 px-6 text-gray-900"
                      >
                        {item.quantity}
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-sm"
                      >
                        <PlusIcon />
                      </Button>

                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-sm"
                      >
                        <DeleteIcon />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart && cart.items.length > 0 && (
          <div className="border-t p-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-sans font-light text-sm sm:text-base leading-6 tracking-normal text-gray-600">
                  Total:
                </span>
                <div className="font-sans font-bold text-2xl text-gray-900">
                  {formatPrice(cart.total)}
                </div>
              </div>

              <Button size="lg" className="bg-primary rounded-md">
                <CurrencyIcon />
                <span className="font-sans font-bold text-sm sm:text-base tracking-normal text-gray-900 capitalize">
                  Checkout
                </span>
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
