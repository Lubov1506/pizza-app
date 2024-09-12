import React from "react";
import { WhiteBlock } from "../white-block";
import { Input, Textarea } from "../../ui";
export interface CheckoutDeliveryFormProps {
  className?: string;
}

export const CheckoutDeliveryForm = ({
  className,
}: CheckoutDeliveryFormProps) => {
  return (
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
  );
};
