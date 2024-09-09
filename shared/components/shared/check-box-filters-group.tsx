"use client";
import React, { useState } from "react";
import { FilterCheckbox, FilterCheckboxProps } from "./filter-checkbox";
import { Input, Skeleton } from "../ui";

type Item = FilterCheckboxProps;

export interface CheckBoxFiltersGroupProps {
  className?: string;
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  loading?: boolean;
  searchInputPlaceholder?: string;
  onClickCheckbox?: (id: string) => void;
  defaultValue?: string[];
  selected?: Set<string>;
  name?: string;
}

export const CheckBoxFiltersGroup = ({
  className,
  title,
  items,
  defaultItems,
  defaultValue,
  limit = 5,
  searchInputPlaceholder = "Search",
  selected,
  onClickCheckbox,
  loading,
  name,
}: CheckBoxFiltersGroupProps) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  if (loading) {
    return (
      <div className={className}>
        <p className="font-bold mb-3">{title}</p>
        {...Array(limit)
          .fill(0)
          .map((_, idx) => (
            <Skeleton
              key={idx}
              className="h-6 mb-3 rounded-[8px] w-1/2"
              style={{
                width: `${Math.floor(Math.random() * (90 - 30 + 1)) + 30}%`,
              }}
            />
          ))}
        <Skeleton className="h-6 mb-3 rounded-[8px] w-1/2" />
      </div>
    );
  }
  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLowerCase())
      )
    : (defaultItems || items).slice(0, limit);
  return (
    <div className={className}>
      <p className="font-bold my-3">{title}</p>

      {showAll && (
        <div className="mb-5">
          <Input
            onChange={onChangeSearchInput}
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
          />
        </div>
      )}
      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item, idx) => (
          <FilterCheckbox
            key={idx}
            text={item.text}
            value={item.value}
            endAdorment={item.endAdorment}
            checked={selected?.has(item.value)}
            onCheckedChange={() => onClickCheckbox?.(item.value)}
            name={name}
          />
        ))}
      </div>
      {items.length > limit && (
        <div className={showAll ? "border-t border-t-neutral-100 mt-4" : "s"}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-primary mt-3"
          >
            {showAll ? "Hide" : "Show all"}
          </button>
        </div>
      )}
    </div>
  );
};
