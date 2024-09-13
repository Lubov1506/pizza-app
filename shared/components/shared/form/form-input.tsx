import React from "react";
import { RequiredSymbol } from "../required-symbol";
import { Input } from "../../ui";
import { ClearButton } from "../clear-button";
import { ErrorText } from "../error-text";
import { useFormContext } from "react-hook-form";
import { cn } from "@/shared/lib";

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
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const value = watch(name);
  const error = errors[name]?.message as string

  const onClickClear = () => {
    setValue(name, "", {shouldValidate: true});
  };
  return (
    <div className={cn('relative pb-1',className)}>
      {label && (
        <p className="font-medium mb-1">
          {label}
          {required && <RequiredSymbol />}
        </p>
      )}

      <div className="relative">
        <Input className="h-12 text-md placeholder:opacity-50" {...register(name)} {...props} />
        {value && <ClearButton onClick={onClickClear} />}
      </div>
      {error && <ErrorText text={error} />}
    </div>
  );
};
