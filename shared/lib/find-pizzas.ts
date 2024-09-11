import { prisma } from "@/prisma/prisma-client";

export interface GetSearchParams {
  query?: string;
  sortBy?: string;
  sizes?: string;
  pizzaTypes?: string;
  ingredients?: string;
  priceFrom?: string;
  priceTo?: string;
}

const DEFAULT_MIN_PRICE = 0;
const DEFAULT_MAX_PRICE = 100;
export const findPizzas = async (params: GetSearchParams) => {
  const types = params.pizzaTypes?.split(",").map(Number);
  const sizes = params.sizes?.split(",").map(Number);

  const ingredientIdArr = params.ingredients?.split(",").map(Number);

  const minPrice = params.priceFrom
    ? Number(params.priceFrom)
    : DEFAULT_MIN_PRICE;
  const maxPrice = params.priceTo ? Number(params.priceTo) : DEFAULT_MAX_PRICE;

  const categories = await prisma.category.findMany({
    include: {
      products: {
        orderBy: {
          id: "desc",
        },
        where: {
          ingredients: ingredientIdArr
            ? {
                some: {
                  id: {
                    in: ingredientIdArr,
                  },
                },
              }
            : undefined,
          items: {
            some: {
              size: {
                in: sizes,
              },
              pizzaType: {
                in: types,
              },
              price: {
                gte: minPrice,
                lte: maxPrice,
              },
            },
          },
        },
        include: {
          ingredients: true,
          items: {
            where: {
              price: {
                gte: minPrice,
                lte: maxPrice,
              },
            },
            orderBy: {
              price: "asc",
            },
          },
        },
      },
    },
  });

  return categories;
};
