"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/shared/components/ui/dialog";
import React from "react";
import { cn } from "@/shared/lib/utils";
import { useRouter } from "next/navigation";
import { IProduct } from "@/@types/prisma";
import { ProductForm } from "../product-form";
export interface ChooseProductModalProps {
  product: IProduct;
  className?: string;
}

export const ChooseProductModal = ({
  product,
  className,
}: ChooseProductModalProps) => {
  const router = useRouter();
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
        <ProductForm product={product} onSubmit={() => router.back()} />
      </DialogContent>
    </Dialog>
  );
};
