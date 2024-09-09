export const mapPizzaSizes = {
  20: "Small",
  30: "Medium",
  40: "Large",
} as const;
export const mapPizzaTypes = {
  1: "Traditional",
  2: "Thin",
} as const;

export const pizzaSizes = Object.entries(mapPizzaSizes).map(
  ([value, name]) => ({
    name,
    value,
  })
);

export const pizzaTypes= Object.entries(mapPizzaTypes).map(
  ([value, name]) => ({
    name,
    value,
  })
);
export type PizzaSize = keyof typeof mapPizzaSizes;
export type PizzaType = keyof typeof mapPizzaTypes;
