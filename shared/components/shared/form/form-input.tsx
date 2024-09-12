import React from "react";
import { RequiredSymbol } from "../required-symbol";
import { Input } from "../../ui";
import { ClearButton } from "../clear-button";
import { ErrorText } from "../error-text";

export interface FormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  required?: boolean;
  className?: string;
}

export const FormInput = ({
  name,
  label,
  required,
  className,
  ...props
}: FormInputProps) => {
  // const {} = useFormContext();
  return (
    <div className={className}>
      {label && (
        <p className="font-medium mb-2">
          {label}
          {required && <RequiredSymbol />}
        </p>
      )}

      <div className="relative">
        <Input className="h-12 text-md" {...props} />
        <ClearButton />
      </div>
      <ErrorText text="This field is required" />
    </div>
  );
};
