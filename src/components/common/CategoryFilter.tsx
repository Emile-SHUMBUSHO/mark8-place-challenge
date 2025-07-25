"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui/Button";

const categories = ["All", "Vectors", "Icons", "Backgrounds"];

interface CategoryFilterProps {
  onCategoryChange?: (category: string) => void;
  className?: string;
  variant?: "pills" | "sidebar";
}

export default function CategoryFilter({
  onCategoryChange,
  className = "",
  variant = "pills",
}: CategoryFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "All"
  );

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);

    if (onCategoryChange) {
      onCategoryChange(category === "All" ? "" : category);
    } else {
      const params = new URLSearchParams(searchParams);
      if (category === "All") {
        params.delete("category");
      } else {
        params.set("category", category);
      }
      router.push(`${window.location.pathname}?${params.toString()}`);
    }
  };

  if (variant === "sidebar") {
    return (
      <div className={`space-y-2 ${className}`}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedCategory === category
                ? "bg-primary text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          size="sm"
          onClick={() => handleCategoryChange(category)}
          className={`rounded-full px-4 ${
            selectedCategory === category
              ? "bg-primary text-white border-primary"
              : "border-gray-300 text-gray-700 hover:border-primary hover:text-primary"
          }`}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}
