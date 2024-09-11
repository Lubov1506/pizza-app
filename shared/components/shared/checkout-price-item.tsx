import { cn } from "@/shared/lib";
import React from "react";
export interface CheckoutPriceItemProps {
  className?: string;
  title?: React.ReactNode;
  icon?: React.ReactNode;
  value?: string;
}

export const CheckoutPriceItem = ({
  className,
  title,
  value,
  icon,
}: CheckoutPriceItemProps) => {
  return (
    <div className={cn("flex my-4", className)}>
      <span className="flex flex-1 text-lg text-neutral-500 ">
        {icon && <div className="mr-1 flex justify-center items-center text-gray-400">{icon}</div>}
        {title}
        <div className="flex-1 border-b border-dashed border-b-stone-200 relative -top-1 mx-2" />
      </span>
      <span className="text-lg font-bold">{value}</span>
    </div>
  );
};
