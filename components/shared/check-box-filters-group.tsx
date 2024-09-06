"use client";
import React, { useState } from "react";
import { FilterCheckbox, FilterCheckboxProps } from "./filter-checkbox";
import { Input } from "../ui";

type Item = FilterCheckboxProps;

export interface CheckBoxFiltersGroupProps {
  className?: string;
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
}

export const CheckBoxFiltersGroup = ({
  className,
  title,
  items,
  defaultItems,
  defaultValue,
  limit = 5,
  searchInputPlaceholder = "Search",
  onChange,
}: CheckBoxFiltersGroupProps) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLowerCase())
      )
    : defaultItems?.slice(0, limit);
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
      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scroolbar">
        {list.map((item, idx) => (
          <FilterCheckbox
            key={idx}
            text={item.text}
            value={item.value}
            endAdorment={item.endAdorment}
            checked={false}
            onCheckedChange={(ids) => console.log(ids)}
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
