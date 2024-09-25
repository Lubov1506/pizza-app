import React from "react";
import { WhiteBlock } from "./white-block";
import { CheckoutPriceItem } from "./checkout-price-item";
import { ArrowRight, Package, Percent, Truck } from "lucide-react";
import { Button, Skeleton } from "../ui";
import { cn } from "@/shared/lib";

const VAT = 5;
const DELIVERY_PRICE = 2;
export interface CheckoutSidebarProps {
  totalAmount: number;
  loading?: boolean;
  className?: string;
}

export const CheckoutSidebar = ({
  totalAmount,
  loading,
  className,
}: CheckoutSidebarProps) => {
  const vatPrice = totalAmount * (VAT / 100);
  const deliveryPrice = totalAmount > 0 ? DELIVERY_PRICE : 0;

  const totalPrice = totalAmount + vatPrice + deliveryPrice;
  return (
    <WhiteBlock className={cn("p-6 sticky top-4", className)}>
      <div className="flex flex-col gap-1">
        <span className="text-sl">Summary</span>
        {loading ? (
          <Skeleton className="w-44 h-11" />
        ) : (
          <span className="h-11 text-[34px] font-extrabold">
            {totalPrice.toFixed(2)} $
          </span>
        )}
      </div>

      <CheckoutPriceItem
        loading={loading}
        icon={<Package size={20} />}
        title="Cost of goods:"
        value={totalAmount.toFixed(2)}
      />
      <CheckoutPriceItem
        loading={loading}
        icon={<Percent size={20} />}
        title="Taxes:"
        value={vatPrice.toFixed(2)}
      />
      <CheckoutPriceItem
        loading={loading}
        icon={<Truck size={20} />}
        title="Delivery:"
        value={deliveryPrice}
      />

      <Button
        loading={loading}
        type="submit"
        className="w-full h-14 rounded-2xl mt-6 text-base font-bold"
      >
        Proceed to payment
        <ArrowRight className="w-5 ml-2" />
      </Button>
    </WhiteBlock>
  );
};
