import React from "react";
import { WhiteBlock } from "../white-block";
import { CheckoutProductItem } from "../checkout-product-item";
import { PizzaSize, PizzaType } from "@/shared/constants/pizza";
import { CartStateItem } from "@/shared/lib/get-cart-details";
import { getCartItemDetails } from "@/shared/lib";
export interface CheckoutCartProps {
  className?: string;
  items: CartStateItem[];
  onClickCountButton: (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => void;
  removeCartItem: (id: number) => void;
}

export const CheckoutCart = ({
  items,
  onClickCountButton,
  removeCartItem,
  className,
}: CheckoutCartProps) => {
  return (
    <WhiteBlock title="1. Order" className={className}>
      <div className="flex flex-col gap-5">
        {items.map((item) => (
          <CheckoutProductItem
            id={item.id}
            key={item.id}
            imageUrl={item.imageUrl}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            disabled={item.disabled}
            details={getCartItemDetails(
              item.ingredients,
              item.pizzaSize as PizzaSize,
              item.pizzaType as PizzaType
            )}
            onClickCountButton={(type) =>
              onClickCountButton(item.id, item.quantity, type)
            }
            onClickRemove={() => removeCartItem(item.id)}
          />
        ))}
      </div>
    </WhiteBlock>
  );
};
