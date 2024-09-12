"use client";
import { cn } from "@/shared/lib";
import React from "react";
import * as CartItem from "./cart-item-details";
import { CartItemProps } from "./cart-item-details/cart-item-details.types";
import { CountButton } from "./count-button";
import { TrashIcon } from "lucide-react";

export interface CartDrawerItemProps extends CartItemProps {
  onClickCountButton?: (type: "plus" | "minus") => void;
  onClickRemove?: () => void;
  className?: string;
}

export const CartDrawerItem = ({
  imageUrl,
  name,
  details,
  className,
  quantity,
  disabled,
  onClickCountButton,
  onClickRemove,
  price,
}: CartDrawerItemProps) => {
  return (
    <div
      className={cn(
        "flex bg-white p-5 gap-6",
        { "opacity-50 pointer-events-none": disabled },
        className
      )}
    >
      <CartItem.Image src={imageUrl} />
      <div className="flex-1">
        <CartItem.Info name={name} details={details} />

        <hr className="my-3" />
        <div className="flex items-center justify-between">
          <CountButton onClick={onClickCountButton} value={quantity} />

          <div className="flex gap-3 items-center">
            <CartItem.Price value={price} />
            <TrashIcon
              onClick={onClickRemove}
              className="text--gray-400 hover:text-gray-600 cursor-pointer"
              size={16}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
