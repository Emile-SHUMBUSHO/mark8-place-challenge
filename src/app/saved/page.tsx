import ProductGrid from '@/components/product/ProductGrid';
import SavedHeroSection from '@/components/saved/SavedHeroSection';

export default function SavedPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SavedHeroSection />
        <ProductGrid />
      </div>
    </div>
  );
}
