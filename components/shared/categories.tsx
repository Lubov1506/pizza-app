'use client';
import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import React from "react";
export interface CategoriesProps {
  className?: string;
}

const cats = [
  {id:1, name: 'Pizzas'},
  {id:2, name: 'Mix'},
  {id:3, name: 'Drinks'},
  {id:4, name: 'Deserts'},
  {id:5, name: 'Coktails'},
]
export const Categories = ({}: CategoriesProps) => {
  const activeCategoryId = useCategoryStore((state) => state.activeId);
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl')}>
      {cats.map(({name, id}, idx) => (
        <a
          href={`/#${name}`}
          key={idx}
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            activeCategoryId === id &&
              "bg-white shadow-md shadow-gray-300 text-primary"
          )}

        >
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};
