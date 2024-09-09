import { Ingredient, ProductItem } from "@prisma/client";
import { mapPizzaTypes, PizzaSize, PizzaType } from "../constants/pizza";
import { calcTotalPizzaPrice } from "./calc-total-pizza-price";
interface ReturnProps {
  textDetails: string;
  totalPrice: number;
}
export const getPizzaDetails = (
    type: PizzaType,
    size: PizzaSize,
    items: ProductItem[],
    ingredients: Ingredient[],
    selectedIngredients: Set<number>
): ReturnProps => {
  const textDetails = `${size} sm, ${mapPizzaTypes[type]} pizza`;

  const totalPrice = calcTotalPizzaPrice(
    type,
    size,
    items,
    ingredients,
    selectedIngredients
  );
  return {
    textDetails,
    totalPrice,
  };
};
