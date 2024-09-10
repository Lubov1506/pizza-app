"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/shared/components/ui/dialog";
import {} from "@radix-ui/react-dialog";
import React from "react";
import { cn } from "@/shared/lib/utils";
import { useRouter } from "next/navigation";
import { ChooseProductForm } from "../choose-product-form";
import { IProduct } from "@/@types/prisma";
import { ChoosePizzaForm } from "../choose-pizza-form";
import { useCartStore } from "@/shared/store/cart";
import toast from "react-hot-toast";
export interface ChooseProductModalProps {
  product: IProduct;
  className?: string;
}

export const ChooseProductModal = ({
  product,
  className,
}: ChooseProductModalProps) => {
  const router = useRouter();
  const firstItem = product.items[0];
  const isPizzaForm = Boolean(firstItem.pizzaType);

  const [addCartItem, loading] = useCartStore((state) => [
    state.addCartItem,
    state.loading,
  ]);

  const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
    try {
      const itemId = productItemId ?? firstItem.id;
      await addCartItem({
        productItemId: itemId,
        ingredients,
      });

      toast.success("Product added to cart");
      router.back();
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };
  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        aria-describedby="dialog-description"
        className={cn(
          "p-0 w-[1060px] max-w-[1060px] min-h-[550px] bg-white overflow-hidden",
          className
        )}
      >
        <DialogTitle className="display-none h-0 w-0 absolute" />
        <DialogDescription className="display-none h-0 w-0 absolute" />
        {isPizzaForm ? (
          <ChoosePizzaForm
            imageUrl={product.imageUrl}
            name={product.name}
            ingredients={product.ingredients}
            onSubmit={onSubmit}
            items={product.items}
            loading={loading}
          />
        ) : (
          <ChooseProductForm
            imageUrl={product.imageUrl}
            name={product.name}
            onSubmit={onSubmit}
            price={firstItem.price}
            loading={loading}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
