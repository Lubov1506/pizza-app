import { Ingredient } from "@prisma/client";
import { mapPizzaTypes, PizzaSize, PizzaType } from "../constants/pizza";

export const getCartItemDetails = (
  pizzaSize: PizzaSize,
  pizzaType: PizzaType,
  ingredients: Ingredient[]
) => {
  const details = [];

  if (pizzaSize && pizzaType) {
    const typeName = mapPizzaTypes[pizzaType];
    details.push(`${typeName} ${pizzaSize} см`);
  }

  if (ingredients) {
    details.push(...ingredients.map((ingredient) => ingredient.name));
  }
  return details.join(", ");
};
