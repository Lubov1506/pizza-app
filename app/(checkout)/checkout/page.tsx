import {
  CheckoutPriceItem,
  Container,
  Title,
  WhiteBlock,
} from "@/shared/components/shared";
import { Button, Input, Textarea } from "@/shared/components/ui";
import { ArrowRight, Package, Percent, Truck } from "lucide-react";
import React from "react";
export interface CheckoutPageProps {
  className?: string;
}

export default function CheckoutPage({ className }: CheckoutPageProps) {
  return (
    <Container className="mt-10">
      <Title className="font-extrabold text-[36px]" text="Placing an order" />

      <div className="flex gap-10">
        <div className="flex flex-col gap-10 flex-1 mb-20">
          <WhiteBlock title="1. Order">Order</WhiteBlock>
          <WhiteBlock title="2. Your details">
            <div className="grid grid-cols-2 gap-5">
              <Input
                name="firstName"
                className="text-base"
                placeholder="Name"
              />
              <Input
                name="lastName"
                className="text-base"
                placeholder="Last name"
              />
              <Input name="email" className="text-base" placeholder="Email" />
              <Input name="phone" className="text-base" placeholder="Phone" />
            </div>
          </WhiteBlock>
          <WhiteBlock title="3. Delivery">
            <div className="flex gap-5 flex-col">
              <Input
                name="address"
                className="text-base"
                placeholder="Type address..."
              />
              <Textarea
                rows={5}
                className="text-base"
                placeholder="Comment for order"
              />
            </div>
          </WhiteBlock>
        </div>

        <div className="w-[450px]">
          <WhiteBlock className="p-6 sticky top-4">
            <div className="flex flex-col gap-1">
              <span className="text-sl">Summary</span>
              <span className="text-[34px] font-extrabold">50 $</span>
            </div>

            <CheckoutPriceItem
              icon={<Package size={20} />}
              title="Cost of goods:"
              value="50 $"
            />
            <CheckoutPriceItem
              icon={<Percent size={20} />}
              title="Taxes:"
              value="1 $"
            />
            <CheckoutPriceItem
              icon={<Truck size={20} />}
              title="Delivery:"
              value="2 $"
            />

            <Button
              type="submit"
              className="w-full h-14 rounded-2xl mt-6 text-base font-bold"
            >
              Proceed to payment
              <ArrowRight className="w-5 ml-2" />
            </Button>
          </WhiteBlock>
        </div>
      </div>
    </Container>
  );
}
