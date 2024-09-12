import React from "react";
import { WhiteBlock } from "../white-block";
import { FormInput } from "../form";
import { Input } from "../../ui";

export interface CheckoutPersonalFormProps {
  className?: string;
}

export const CheckoutPersonalForm = ({
  className,
}: CheckoutPersonalFormProps) => {
  return (
    <WhiteBlock title="2. Your details" className={className}>
      <div className="grid grid-cols-2 gap-5">
        <Input name="firstName" className="text-base" placeholder="Name" />
        <Input name="lastName" className="text-base" placeholder="Last name" />
        <Input name="email" className="text-base" placeholder="Email" />
        <FormInput name="phone" className="text-base" placeholder="Phone" />
      </div>
    </WhiteBlock>
  );
};
