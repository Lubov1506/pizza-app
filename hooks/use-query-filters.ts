import { useDebounce } from "react-use";
import { Filters } from "./use-filters";
import { useRouter } from "next/navigation";
import qs from "qs";

export const useQueryFilters = (filters: Filters) => {
  const router = useRouter();
  const params = {
    ...filters.prices,
    pizzaTypes: Array.from(filters.pizzaTypes),
    sizes: Array.from(filters.sizes),
    ingredients: Array.from(filters.selectedIngredients),
  };
  useDebounce(
    () => {
      const query = qs.stringify(params, { arrayFormat: "comma" });
      router.push(`?${query}`, { scroll: false });
    },
    300,
    [filters]
  );
};
