import React from "react";
import { WhiteBlock } from "../white-block";
import { DeliveryInput, FormInput, FormTextarea } from "../form";
import { Controller, useFormContext } from "react-hook-form";
import { ErrorText } from "../error-text";
export interface CheckoutDeliveryFormProps {
  className?: string;
}

export const CheckoutDeliveryForm = ({
  className,
}: CheckoutDeliveryFormProps) => {
  const { control } = useFormContext();

  return (
    <WhiteBlock title="3. Delivery" className={className}>
      <div className="flex gap-5 flex-col">
        <Controller
          name="address"
          control={control}
          render={({ field, fieldState }) => (
            <div className="relative">
              <DeliveryInput onChange={field.onChange} />
              {fieldState.error && (
                <ErrorText text={fieldState.error.message as string} />
              )}
            </div>
          )}
        />

        <FormTextarea
          label="Comment"
          name="comment"
          rows={5}
          className="text-base placeholder:opacity-50"
          placeholder="Comment for order"
        />
      </div>
    </WhiteBlock>
  );
};
