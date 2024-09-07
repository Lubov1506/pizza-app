"use client";
import { cn } from "@/lib/utils";
import { Api } from "@/services/api-client";
import { Product } from "@prisma/client";
import { Search } from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";
import { useClickAway, useDebounce } from "react-use";
export interface SearchInputProps {
  className?: string;
}

export const SearchInput = ({ className }: SearchInputProps) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [focused, setFocused] = React.useState(false);
  const [products, setProducts] = React.useState<Product[]>([]);

  const ref = useRef(null);

  useClickAway(ref, () => setFocused(false));
  const onFocus = () => {
    setFocused(true);
  };
  useDebounce(
    async () => {
      try {
        const response = await Api.products.search(searchQuery);
        setProducts(response);
      } catch (e) {
        console.log(e);
      }
    },
    300,
    [searchQuery]
  );
  const onClickItem = () => {
    setFocused(false);
    setSearchQuery("");
    setProducts([]);
  };
  return (
    <>
      {focused && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-30 bg-black/50" />
      )}
      <div
        ref={ref}
        className={cn(
          "flex rounded-2xl flex-1 justify-between relative h-11 z-30",
          className
        )}
      >
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400 " />
        <input
          ref={ref}
          type="text"
          placeholder="Search..."
          className="bg-gray-100 pl-11 w-full outline-none rounded-2xl"
          onFocus={onFocus}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {products.length > 0 && (
          <div
            className={cn(
              "absolute w-full bg-white rounded-2xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30",
              focused && "visible opacity-100 top-12"
            )}
          >
            {products.map((product) => (
              <Link
                onClick={onClickItem}
                key={product.id}
                href={`/product/${product.id}`}
                className="flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10 "
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="rounded-sm h-8 w-8"
                />
                <span>{product.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
