// Ingredients formatting functon her e


import { getIngredientEmoji } from "../utils/getIngredient";

export const formatIngredients = (meal: any) => {
  const ingredients: string[] = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      const emoji = getIngredientEmoji(ingredient); 
      ingredients.push(`${emoji} ${measure ?? ""} ${ingredient}`);
    }
  }

  return ingredients;
};