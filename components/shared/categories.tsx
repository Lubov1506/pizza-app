import { cn } from "@/lib/utils";
import React from "react";
export interface CategoriesProps {
  className?: string;
}

const cats = ["Pizzas", "Mix", "Deserts", "Drinks", "Coktails"];
const activeIndex = 0;
export const Categories = ({}: CategoriesProps) => {
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl')}>
      {cats.map((cat, idx) => (
        <a
          href=""
          key={idx}
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            activeIndex === idx &&
              "bg-white shadow-md shadow-gray-300 text-primary"
          )}
        >
          <button>{cat}</button>
        </a>
      ))}
    </div>
  );
};
