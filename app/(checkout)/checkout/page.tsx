"use client";
import {
  CheckoutCart,
  CheckoutDeliveryForm,
  CheckoutPersonalForm,
  CheckoutSidebar,
  Container,
  Title,
} from "@/shared/components/shared";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { useCart } from "@/shared/hooks";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkoutFormSchema, CheckoutFormValues } from "@/shared/constants";
import { cn } from "@/shared/lib";
import { createOrder } from "@/app/actions";
import toast from "react-hot-toast";

export interface CheckoutPageProps {
  className?: string;
}

export default function CheckoutPage({ className }: CheckoutPageProps) {
  const { totalAmount, items, updateItemQuantity, removeCartItem, loading } =
    useCart();
  const [submitting, setSubmitting] = React.useState(false);
  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      address: "",
      comment: "",
      phone: "",
    },
  });
  const onSubmit: SubmitHandler<CheckoutFormValues> = async (data) => {
    try {
      setSubmitting(true);
      const url = await createOrder(data);
      toast.success("Order created successfully", {
        icon: "👏",
      });
      if (url) {
        location.href = url;
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong", {
        icon: "🤯",
      });
    } finally {
      setSubmitting(false);
    }
  };
  const onClickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  return (
    <Container className={cn("mt-10", className)}>
      <Title className="font-extrabold text-[36px]" text="Placing an order" />

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-10">
            <div className="flex flex-col gap-10 flex-1 mb-20">
              <CheckoutCart
                loading={loading}
                items={items}
                onClickCountButton={onClickCountButton}
                removeCartItem={removeCartItem}
              />
              <CheckoutPersonalForm
                className={loading ? "opacity-40 pointer-events-none" : ""}
              />
              <CheckoutDeliveryForm
                className={loading ? "opacity-40 pointer-events-none" : ""}
              />
            </div>
            <div className="w-[450px]">
              <CheckoutSidebar
                totalAmount={totalAmount}
                loading={loading || submitting}
              />
            </div>
          </div>
        </form>
      </FormProvider>
    </Container>
  );
}
