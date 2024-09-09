"use client";
import React, { useEffect } from "react";
import { PizzaImage } from "./pizza-image";
import { Title } from "./title";
import { Button } from "../ui";
import { GroupVariants } from "./group-variants";
import {
  mapPizzaTypes,
  PizzaSize,
  pizzaSizes,
  PizzaType,
  pizzaTypes,
} from "@/shared/constants/pizza";
import { Ingredient, ProductItem } from "@prisma/client";
import { IngredientItem } from "./ingredient-item";
import { useSet } from "react-use";
import { calcTotalPizzaPrice, cn } from "@/shared/lib";

export interface ChoosePizzaFormProps {
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  items: ProductItem[];
  onClickAddCart?: VoidFunction;
  className?: string;
}

export const ChoosePizzaForm = ({
  imageUrl,
  name,
  ingredients,
  items,
  onClickAddCart,
  className,
}: ChoosePizzaFormProps) => {
  const [size, setSize] = React.useState<PizzaSize>(20);
  const [type, setType] = React.useState<PizzaType>(1);

  const [selectedIngredients, { toggle: addIngredient }] = useSet(
    new Set<number>([])
  );

  const textDetails = `${size} sm, ${mapPizzaTypes[type]} pizza`;

  const totalPrice = calcTotalPizzaPrice(
    type,
    size,
    items,
    ingredients,
    selectedIngredients
  );

  const filteredPizzasByType = items.filter((item) => item.pizzaType === type);
  const availablePizzaSizes = pizzaSizes.map((item) => ({
    ...item,
    disabled: !filteredPizzasByType.some(
      (pizza) => Number(pizza.size) === Number(item.value)
    ),
  }));

  useEffect(() => {
    const isAvailableSize = availablePizzaSizes.find(
      (item) => Number(item.value) === size && !item.disabled
    );
    const availableSize = availablePizzaSizes?.find((item) => !item.disabled);
    if (!isAvailableSize && availableSize) {
      setSize(Number(availableSize.value) as PizzaSize);
    }
  }, [type]);

  const handleClickAdd = () => {
    onClickAddCart?.();
    console.log({
      size,
      type,
      ingredients: selectedIngredients,
    });
  };
  return (
    <div className={cn(className, "flex flex-1")}>
      <PizzaImage src={imageUrl} size={size} />

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400">{textDetails}</p>

        <div className=" flex flex-col gap-3 mt-5">
          <GroupVariants
            items={availablePizzaSizes}
            value={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />
          <GroupVariants
            items={pizzaTypes}
            value={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          />
        </div>

        <div className=" bg-gray-50 rounded-md h-[420px] overflow-auto scrollbar mt-5">
          <div className="grid grid-cols-3 gap-3">
            {ingredients?.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                imageUrl={ingredient.imageUrl}
                name={ingredient.name}
                price={ingredient.price}
                active={selectedIngredients.has(ingredient.id)}
                onClick={() => addIngredient(ingredient.id)}
              />
            ))}
          </div>
        </div>
        <Button
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
          onClick={handleClickAdd}
        >
          Add {totalPrice} $
        </Button>
      </div>
    </div>
  );
};
