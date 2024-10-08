import { cn } from "@/shared/lib/utils";
import { CircleCheck } from "lucide-react";
import React from "react";
export interface IngredientsProps {
  imageUrl: string;
  name: string;
  price: number;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export const IngredientItem = ({
  imageUrl,
  name,
  price,
  active,
  onClick,
  className,
}: IngredientsProps) => {
  return (
    <div
      className={cn(
        "flex items-center flex-col p-1 rounded-md w-32 text-center relative cursor-pointer shadow-md bg-white",
        {
          "border border-primary": active,
        },
        className
      )}
      onClick={onClick}
    >
      {active && (
        <CircleCheck className="absolute top-2 right-2 text-primary" />
      )}
      <img src={imageUrl} width={110} height={110} alt={name} />
      <span className="text-sx mb1">{name}</span>
      <span className="font-bold">{price} $</span>
    </div>
  );
};
