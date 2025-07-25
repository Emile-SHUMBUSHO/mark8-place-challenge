import { ReactNode } from "react";
import CategoryFilter from "../common/CategoryFilter";

interface SidebarProps {
  children?: ReactNode;
  showCategories?: boolean;
}

export default function Sidebar({
  children,
  showCategories = true,
}: SidebarProps) {
  return (
    <aside className="w-64 space-y-6">
      {showCategories && (
        <div className="rounded-lg border bg-card p-4">
          <h3 className="font-semibold mb-3">Categories</h3>
          <CategoryFilter />
        </div>
      )}

      <div className="rounded-lg border bg-card p-4">
        <h3 className="font-semibold mb-3">Price Range</h3>
        <div className="space-y-2">
          <input type="range" min="0" max="1000" className="w-full" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>$0</span>
            <span>$1000+</span>
          </div>
        </div>
      </div>

      <div className="rounded-lg border bg-card p-4">
        <h3 className="font-semibold mb-3">Ratings</h3>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <label key={rating} className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-sm">{rating} stars & up</span>
            </label>
          ))}
        </div>
      </div>

      {children}
    </aside>
  );
}
