"use client";
import {
  CheckoutCart,
  CheckoutDeliveryForm,
  CheckoutPersonalForm,
  CheckoutProductItem,
  CheckoutSidebar,
  Container,
  FormInput,
  Title,
  WhiteBlock,
} from "@/shared/components/shared";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input, Textarea } from "@/shared/components/ui";
import { useCart } from "@/shared/hooks";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
export interface CheckoutPageProps {
  className?: string;
}

export default function CheckoutPage({ className }: CheckoutPageProps) {
  const { totalAmount, items, updateItemQuantity, removeCartItem } = useCart();

  const form = useForm({
    resolver: zodResolver(),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      address: "",
      comment: "",
      phone: "",
    },
  });
  const onClickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  return (
    <Container className="mt-10">
      <Title className="font-extrabold text-[36px]" text="Placing an order" />

      <div className="flex gap-10">
        <div className="flex flex-col gap-10 flex-1 mb-20">
          <CheckoutCart
            items={items}
            onClickCountButton={onClickCountButton}
            removeCartItem={removeCartItem}
          />
          <CheckoutPersonalForm />
          <CheckoutDeliveryForm />
        </div>

        <div className="w-[450px]">
          <CheckoutSidebar totalAmount={totalAmount} />
        </div>
      </div>
    </Container>
  );
}
