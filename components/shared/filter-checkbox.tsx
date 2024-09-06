import React from "react";
import { Checkbox } from "../ui";
export interface FilterCheckboxProps {
  text: string;
  value: string;
  endAdorment?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
}

export const FilterCheckbox = ({
  text,
  value,
  onCheckedChange,
  endAdorment,
  checked,
}: FilterCheckboxProps) => {
  return (
    <div className="flex items-center gap-1">
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        className="rounded-[8px] h-6 w-6"
        id={`checkbox-${String(value)}`}
      />
      <label
        htmlFor={`checkbox-${String(value)}`}
        className="leading-none cursor-pointer flex-1"
      >
        {text}
      </label>
      {endAdorment}
    </div>
  );
};
