import { Ingredient, ProductItem } from "@prisma/client";
import { PizzaSize, PizzaType } from "../constants/pizza";

/**
 * Function to calculate total pizza price
 *
 * @param type - type of dough
 * @param size - size of pizza
 * @param items - list of variants
 * @param ingredients - list of ingredients
 * @param selectedIngredients - list of selected ingredients
 * @returns number - total pizza price
 */

export const calcTotalPizzaPrice = (
  type: PizzaType,
  size: PizzaSize,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) => {
  const pizzaPrice =
    items.find((item) => item.pizzaType === type && item.size === size)
      ?.price || 0;
  const totalIngredientsPrice =
    ingredients
      ?.filter((ingredient) => selectedIngredients.has(ingredient.id))
      ?.reduce((acc, ingredient) => acc + ingredient.price, 0) ?? 0;
  return pizzaPrice + totalIngredientsPrice;
};
