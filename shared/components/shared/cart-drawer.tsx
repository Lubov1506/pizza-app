"use client";
import React, { useEffect } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Link from "next/link";
import { Button } from "../ui";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CartDrawerItem } from "./cart-drawer-item";
import { useCartStore } from "@/shared/store/cart";
import { cn, getCartItemDetails } from "@/shared/lib";
import { PizzaSize, PizzaType } from "@/shared/constants/pizza";
import Image from "next/image";
import { Title } from "./title";

export interface CartDrawerProps {
  children: React.ReactNode;
  className?: string;
}

export const CartDrawer: React.FC<React.PropsWithChildren<CartDrawerProps>> = ({
  children,
  className,
}: CartDrawerProps) => {
  const [
    items,
    totalAmount,
    fetchCartItems,
    updateItemQuantity,
    removeCartItem,
  ] = useCartStore((state) => [
    state.items,
    state.totalAmount,
    state.fetchCartItems,
    state.updateItemQuantity,
    state.removeCartItem,
  ]);
  useEffect(() => {
    fetchCartItems();
  }, []);
  const onClickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        className={cn("flex flex-col justify-between pb-0 bg-[#f4f1ee]", {
          "pt-0": !totalAmount,
        })}
      >
        <SheetDescription className="absolute invisible w-0 h-0">
          SheetDescription
        </SheetDescription>
        <SheetTitle className="absolute invisible w-0 h-0"></SheetTitle>
        {totalAmount > 0 && (
          <SheetHeader>
            <SheetTitle>
              In basket&ensp;
              <span className="font-bold">
                {items.length} {items.length === 1 ? "item" : "items"}
              </span>
            </SheetTitle>
          </SheetHeader>
        )}

        {!totalAmount && (
          <div className="flex-1 flex flex-col items-center w-72 mx-auto justify-center">
            <Image
              width={120}
              height={120}
              src="/assets/images/empty-box.png"
              alt="empty box"
            />
            <Title
              text="Your cart is empty"
              size="sm"
              className="text-center my-2 font-bold"
            />
            <p className="text-center text-neutral-500 mb-5">
              Add some items to your cart and they will appear here
            </p>
            <SheetClose>
              <Button className="w-56 h-12 text-base" size="lg">
                <ArrowLeft className="w-5 mr-2" />
                Continue shopping
              </Button>
            </SheetClose>
          </div>
        )}
        {totalAmount > 0 && (
          <>
            <div className="-mx-6 mt-5 overflow-auto flex-1">
              {items.map((item) => (
                <div className="mb-2" key={item.id}>
                  <CartDrawerItem
                    id={item.id}
                    imageUrl={item.imageUrl}
                    details={getCartItemDetails(
                      item.ingredients,
                      item.pizzaSize as PizzaSize,
                      item.pizzaType as PizzaType
                    )}
                    disabled={item.disabled}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    onClickCountButton={(type) =>
                      onClickCountButton(item.id, item.quantity, type)
                    }
                    onClickRemove={() => removeCartItem(item.id)}
                  />
                </div>
              ))}
            </div>

            <SheetFooter className="-mx-6 bg-white p-8">
              <div className="w-full">
                <div className="flex mb-4">
                  <span className="flex flex-1 text-neutral-500 text-lg">
                    Summary
                    <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
                  </span>
                  <span className="text-lg font-bold">{totalAmount} $</span>
                </div>
                <Link href={"/cart"}>
                  <Button type="submit" className="w-full h-12 text-base">
                    Place an order
                    <ArrowRight className="w-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};
