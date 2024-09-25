'use server';
import { prisma } from "@/prisma/prisma-client";
import { CheckoutFormValues } from "@/shared/constants/checkout-form-schema";
import { OrderStatus } from "@prisma/client";

export const createOrder = async (data: CheckoutFormValues) => {
    
  const token = "123";
  await prisma.order.create({
    data: {
      token,
      fullName: data.firstName + " " + data.lastName,
      email: data.email,
      phone: data.phone,
      address: data.address,
      comment: data.comment,
      totalAmount: 65,
      status: OrderStatus.PENDING,
      items: [],
    },
  });
  return 'https://chatgpt.com/';
};
