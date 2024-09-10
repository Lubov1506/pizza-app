import { CartItemDTO } from "../services/dto/cart.dto";

export const calcCartItemPrice = (item: CartItemDTO) : number=> {
  const ingredintsPrics = item.ingredients.reduce(
    (acc, ingredient) => acc + ingredient.price,
    0
  );
  return (ingredintsPrics + item.productItem.price) * item.quantity;
};
