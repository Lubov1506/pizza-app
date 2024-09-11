import { CartDTO } from "../services/dto/cart.dto";
import { calcCartItemPrice } from "./calc-cart-item-price";

export interface CartStateItem {
  id: number;
  quantity: number;
  price: number;
  name: string;
  imageUrl: string;
  pizzaType?: number | null;
  pizzaSize?: number | null;
  disabled?: boolean;
  ingredients: Array<{ name: string; price: number }>;
}
interface ReturnProps {
  items: CartStateItem[];
  totalAmount: number;
}
export const getCartDetails = (data: CartDTO): ReturnProps => {
  const items = data.items.map((item) => ({
    id: item.id,
    quantity: item.quantity,
    price: calcCartItemPrice(item),
    name: item.productItem.product.name,
    imageUrl: item.productItem.product.imageUrl,
    pizzaSize: item.productItem.size,
    pizzaType: item.productItem.pizzaType,
    disabled: false,
    ingredients: item.ingredients.map(
      (ingredient) =>
        ({
          name: ingredient.name,
          price: ingredient.price,
        } as CartStateItem)
    ),
  }));
  return {
    items,
    totalAmount: data.totalAmount,
  };
};
