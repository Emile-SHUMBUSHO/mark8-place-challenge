import ProductDetails from '@/components/product/ProductDetails';
import ProductImage from '@/components/product/ProductImage';
import ProductActions from '@/components/product/ProductActions';
import Link from 'next/link';
import ArrowLeftIcon from '@/components/icons/ArrowLeftIcon';
import ChevronRightIcon from '@/components/icons/ChevronRightIcon';
import HomeIcon from '@/components/icons/HomeIcon';
import { Button } from '@/components/ui/Button';
import CallIcon from '@/components/icons/callIcon';

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b">
        <div className="w-full mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link
              href="/"
              className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <HomeIcon width={16} height={16} />
              <span className="font-dm-sans font-normal text-xs leading-none tracking-normal">
                Home
              </span>
            </Link>
            <ChevronRightIcon
              width={16}
              height={16}
              className="text-gray-400"
            />
            <Link
              href="/search?category=products"
              className="font-dm-sans font-normal text-xs leading-none tracking-normal text-gray-600 hover:text-gray-900 transition-colors"
            >
              Products
            </Link>
            <ChevronRightIcon
              width={16}
              height={16}
              className="text-gray-400"
            />
            <Link
              href="/search?category=vectors"
              className="font-dm-sans font-normal text-xs leading-none tracking-normal text-gray-600 hover:text-gray-900 transition-colors"
            >
              Vectors
            </Link>
            <ChevronRightIcon
              width={16}
              height={16}
              className="text-gray-400"
            />
            <span className="font-dm-sans font-medium text-xs leading-none tracking-normal text-gray-900">
              Product {id}
            </span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-6 sm:py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            href="/search"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeftIcon width={16} height={16} />
            <span className="font-dm-sans font-medium text-sm leading-none tracking-normal">
              Back to Products
            </span>
          </Link>
        </div>

        {/* Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Product Image */}
          <div>
            <ProductImage productId={id} />
          </div>

          {/* Product Details & Actions */}
          <div className="space-y-6">
            <ProductDetails productId={id} />
            <ProductActions productId={id} />
          </div>
        </div>

        {/* Store Information */}
        <div className="mb-12">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <span className="font-dm-sans font-bold text-lg text-gray-900">
                    A
                  </span>
                </div>
                <div>
                  <h3 className="font-sans font-bold text-base sm:text-lg leading-tight tracking-normal text-gray-900">
                    Store Info: Awesome Shop 1
                  </h3>
                  <p className="font-dm-sans font-normal text-sm text-gray-600">
                    Premium quality products and excellent service
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                className="flex items-center gap-2 h-10 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50"
              >
                <CallIcon width={16} height={16} color="#495D69" />
                <span className="font-dm-sans font-extrabold text-sm leading-none tracking-normal capitalize text-gray-900">
                  Contact Store
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* You might also like */}
        <div className="mb-12">
          <h2 className="font-sans font-bold text-xl sm:text-2xl leading-tight tracking-normal text-gray-900 mb-6">
            You might also like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Mock product cards - in a real app, these would be fetched based on the current product */}
            {[1, 2, 3, 4].map(item => (
              <div
                key={item}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="aspect-square bg-gray-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-dm-sans font-medium text-sm text-gray-500">
                      Product {item}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-dm-sans font-medium text-sm text-gray-900 mb-2">
                    Product {item}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="font-dm-sans font-bold text-base text-gray-900">
                      9,000 Rwf
                    </span>
                    <span className="font-dm-sans font-light text-sm text-gray-500 line-through">
                      12,000 Rwf
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90 h-8 px-3 rounded-sm"
                    >
                      <span className="font-dm-sans font-extrabold text-xs text-black">
                        Add To Cart
                      </span>
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      ♡
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
          <h2 className="font-sans font-bold text-xl sm:text-2xl leading-tight tracking-normal text-gray-900 mb-4">
            <span className="text-primary">Open</span> your Store
          </h2>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your Email"
              className="flex-1 h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none font-dm-sans text-sm"
            />
            <Button className="h-12 px-6 bg-primary hover:bg-primary/90 rounded-lg">
              <span className="font-dm-sans font-extrabold text-sm text-black">
                Submit →
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
