import { cn } from "@/lib/utils";
import React from "react";
export interface ProductImageProps {
  src: string;
  className?: string;
  size?:number;
}

export const ProductImage = ({
  src,
  className,
  size = 20,
}: ProductImageProps) => {
  return (
    <div className={cn("relative flex items-center justify-center flex-1 w-full", className)}>
      <img
        src={src}
        alt="logo"
        className={cn(
          "relative left-2 top-2 transition-all z-10 duration-300",
          {
            "w-[300px] h-[300px]": size === 20,
            "w-[400px] h-[400px]": size === 30,
            "w-[500px] h-[500px]": size === 40,
          }
        )}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-gray-200 w-[450px] h-[450px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-gray-200 w-[370px] h-[370px]"></div>
    </div>
  );
};
