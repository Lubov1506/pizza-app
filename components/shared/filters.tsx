import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckBoxFiltersGroup } from "./check-box-filters-group";
export interface FiltersProps {
  className?: string;
}

export const Filters = ({ className }: FiltersProps) => {
  return (
    <div className={className}>
      <Title text="Filters" size="sm" className="mb-5 font-bold" />
      <div className="flex flex-col gap-2">
        <FilterCheckbox text="Can take" value="1" />
        <FilterCheckbox text="New" value="2" />
      </div>
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price from to</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input type="number" placeholder="1000" min={100} max={1000} />
        </div>

        <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
      </div>
      <CheckBoxFiltersGroup
        title="Ingridients"
        className="mt-5"
        limit={6}
        defaultItems={[
          { text: "Tomatos", value: "1" },
          { text: "Cheese", value: "2" },
          { text: "Sosiges", value: "3" },
          { text: "Cucumber", value: "4" },
          { text: "Sosiges", value: "5" },
          { text: "Cucumber", value: "6" },
          { text: "Tomatos", value: "1" },
          { text: "Cheese", value: "2" },
          { text: "Sosiges", value: "3" },
          { text: "Cucumber", value: "4" },
          { text: "Sosiges", value: "5" },
          { text: "Cucumber", value: "6" },
        ]}
        items={[
          { text: "Tomatos", value: "1" },
          { text: "Cheese", value: "2" },
          { text: "Sosiges", value: "3" },
          { text: "Cucumber", value: "4" },
          { text: "Sosiges", value: "5" },
          { text: "Cucumber", value: "6" },
          { text: "Tomatos", value: "1" },
          { text: "Cheese", value: "2" },
          { text: "Sosiges", value: "3" },
          { text: "Cucumber", value: "4" },
          { text: "Sosiges", value: "5" },
          { text: "Cucumber", value: "6" },
        ]}
      />
    </div>
  );
};
