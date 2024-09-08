import { useSearchParams } from "next/navigation";
import React from "react";
import { useSet } from "react-use";

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}
interface QueryFilters extends PriceProps {
  pizzaTypes: string;
  sizes: string;
  ingredients: string;
}
export interface Filters {
  sizes: Set<string>;
  pizzaTypes: Set<string>;
  selectedIngredients: Set<string>;
  prices: PriceProps;
}
interface ReturnProps extends Filters {
  setPrices: (name: keyof PriceProps, value: number) => void;
  setPizzaTypes: (value: string) => void;
  setSizes: (value: string) => void;
  setSelectedIngredients: (value: string) => void;
}
export const useFilters = (): ReturnProps => {
  const searchParams = useSearchParams() as unknown as Map<
    keyof QueryFilters,
    string
  >;
  const [selectedIngredients, { toggle: setIngredients }] = useSet(
    new Set<string>(searchParams.get("ingredients")?.split(",") || [])
  );

  const [sizes, { toggle: setSizes }] = useSet(
    new Set<string>(searchParams.get("sizes")?.split(",") || [])
  );
  const [pizzaTypes, { toggle: setPizzaTypes }] = useSet(
    new Set<string>(searchParams.get("pizzaTypes")?.split(",") || [])
  );

  const [prices, setPrice] = React.useState<PriceProps>({
    priceFrom: Number(searchParams.get("priceFrom")) || undefined,
    priceTo: Number(searchParams.get("priceTo")) || undefined,
  });
  const updatePrices = (name: keyof PriceProps, value: number) => {
    setPrice((prev)=>({
      ...prev,
      [name]: value,
    }));
  };
  return {
    sizes,
    pizzaTypes,
    selectedIngredients,
    prices,
    setPrices: updatePrices,
    setPizzaTypes,
    setSizes,
    setSelectedIngredients: setIngredients,
  };
};
