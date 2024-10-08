import { mapPizzaTypes, PizzaSize, PizzaType } from "@/shared/constants/pizza";
import { cn, getCartItemDetails } from "@/shared/lib";
import { Ingredient } from "@prisma/client";

interface Props {
  name: string;
  details: string;
  className?: string;
}

export const CartItemInfo: React.FC<Props> = ({ name,className, details }) => {
  return (
    <div className={cn('', className)}>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold flex-1 leading-6">{name}</h2>
      </div>
      {details.length > 0 && <p className="text-xs text-gray-400 w-[90%]">{details}</p>}
    </div>
  );
};
