import { useFormContext } from "react-hook-form";
import React from "react";
import { Textarea } from "@/shared/components/ui/textarea";
import { ClearButton } from "../clear-button";
import { ErrorText } from "../error-text";
import { RequiredSymbol } from "../required-symbol";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  name: string;
  label?: string;
  required?: boolean;
}

export const FormTextarea: React.FC<Props> = ({
  className,
  name,
  label,
  required,
  ...props
}) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const errorText = errors?.[name]?.message as string;

  const text = watch(name);

  const onClickClear = () => {
    setValue(name, "");
  };

  return (
    <div className={className}>
      <p className="font-medium mb-2">
        {label} {required && <RequiredSymbol />}
      </p>
      <div className="relative">
        <Textarea
          className="h-12 text-md placeholder:opacity-50 resize-none"
          {...register(name)}
          {...props}
        />
        {Boolean(text) && <ClearButton onClick={onClickClear} />}
      </div>
      {errorText && (
        <ErrorText text={errorText} />
      )}
    </div>
  );
};
