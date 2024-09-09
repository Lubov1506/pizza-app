import { ChooseProductModal } from "@/shared/components/shared";
import { prisma } from "@/prisma/prisma-client";

import { notFound } from "next/navigation";
import React from "react";
export interface PageProps {}

export default async function ProductModalPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findUnique({
    where: { id: Number(id) },
    include: {
      ingredients: true,
      items: true,
    },
  });
  if (!product) return notFound();
  return <ChooseProductModal product={product} />;
}
