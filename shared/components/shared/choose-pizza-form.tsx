import { cn } from "@/shared/lib/utils";
import React from "react";
import { PizzaImage, ProductImage } from "./pizza-image";
import { Title } from "./title";
import { Button } from "../ui";
import { GroupVariants } from "./group-variants";
import {
  mapPizzaType,
  PizzaSize,
  pizzaSizes,
  PizzaType,
  pizzaTypes,
} from "@/shared/constants/pizza";
export interface ChoosePizzaFormProps {
  imageUrl: string;
  name: string;
  ingredients?: any[];
  items?: any[];
  onClickAdd: VoidFunction;
  className?: string;
}

export const ChoosePizzaForm = ({
  imageUrl,
  name,
  ingredients,
  items,
  onClickAdd,
  className,
}: ChoosePizzaFormProps) => {
  const [size, setSize] = React.useState<PizzaSize>(20);
  const [type, setType] = React.useState<PizzaType>(1);
  const textDetails = "30sn, traditional";
  const totalPrice = 25;
  return (
    <div className={cn(className, "flex flex-1")}>
      <PizzaImage src={imageUrl} size={size} />

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400">{textDetails}</p>

        <div className=" flex flex-col gap-3 mt-5">
          <GroupVariants
            items={pizzaSizes}
            value={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />
          <GroupVariants
            items={pizzaTypes}
            value={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          />
        </div>

        <Button className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
          Add {totalPrice} $
        </Button>
      </div>
    </div>
  );
};
