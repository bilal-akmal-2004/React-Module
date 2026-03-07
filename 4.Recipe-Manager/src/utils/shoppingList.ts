import { formatIngredients } from "./formatIngredients";

export const createShoppingList = (recipes: any[]) => {
  const allIngredients = recipes.flatMap((meal) =>
    formatIngredients(meal)
  );

  return [...new Set(allIngredients)];
};