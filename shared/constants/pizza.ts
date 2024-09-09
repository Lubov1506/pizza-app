export const mapPizzaSizes = {
  20: "Small",
  30: "Medium",
  40: "Large",
} as const;
export const mapPizzaType = {
  1: "Traditional",
  2: "Thin",
} as const;

export const pizzaSizes = Object.entries(mapPizzaSizes).map(
  ([name, value]) => ({
    name,
    value,
  })
);
