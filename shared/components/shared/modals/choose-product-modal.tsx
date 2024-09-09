"use client";
import { Dialog, DialogContent, DialogTitle } from "@/shared/components/ui/dialog";
import {} from "@radix-ui/react-dialog";
import React from "react";
import { Product } from "@prisma/client";
import { cn } from "@/shared/lib/utils";
import { useRouter } from "next/navigation";
import { ChooseProductForm } from "../choose-product-form";
import { Title } from "../title";
import { IProduct } from "@/@types/prisma";
import { ChoosePizzaForm } from "../choose-pizza-form";
export interface ChooseProductModalProps {
  product: IProduct;
  className?: string;
}

export const ChooseProductModal = ({
  product,
  className,
}: ChooseProductModalProps) => {
  const router = useRouter();
  const isPizzaForm = Boolean(product.items[0].pizzaType);
  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
          className
        )}
      >
        {isPizzaForm ? (
          <ChoosePizzaForm
            imageUrl={product.imageUrl}
            name={product.name}
            onClickAdd={() => router.back()}
          />
        ) : (
          <ChooseProductForm
            imageUrl={product.imageUrl}
            name={product.name}
            onClickAdd={() => router.back()}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
