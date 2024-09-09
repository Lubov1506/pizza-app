import React from "react";
import { Checkbox } from "../ui";
export interface FilterCheckboxProps {
  text: string;
  value: string;
  endAdorment?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
  name?: string;
}

export const FilterCheckbox = ({
  text,
  value,
  onCheckedChange,
  endAdorment,
  checked,
  name
}: FilterCheckboxProps) => {
  return (
    <div className="flex items-center gap-1">
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        className="rounded-[8px] h-6 w-6"
        id={`checkbox-${String(value)}-${name}`}
      />
      <label
        htmlFor={`checkbox-${String(value)}-${name}`}
        className="leading-none cursor-pointer flex-1"
      >
        {text}
      </label>
      {endAdorment}
    </div>
  );
};
