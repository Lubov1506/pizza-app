import {
  Container,
  GroupVariants,
  PizzaImage,
  Title,
} from "@/shared/components/shared";
import { prisma } from "@/prisma/prisma-client";

import { notFound } from "next/navigation";
import React from "react";
export interface PageProps {}

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findUnique({
    where: { id: Number(id) },
  });
  if (!product) return notFound();
  return (
    <Container className="flex flex-col my-10">
      <div className="flex flex-1">
        <PizzaImage src={product.imageUrl} size={40} className="" />
        <div className="w-[490px] bg-[#FCFCFC] p-7">
          <Title
            text={product.name}
            size="md"
            className="font-extrabold mb-1"
          />
          <p className="rext-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A,
            deserunt eum officia saepe ratione ducimus amet, nam ullam .
          </p>
          <GroupVariants
            selectedValue="2"
            items={[
              {
                name: "sm",
                value: "1",
              },
              {
                name: "md",
                value: "2",
              },
              {
                name: "lg",
                value: "3",
              },
            ]}
          />
        </div>
      </div>
    </Container>
  );
}
