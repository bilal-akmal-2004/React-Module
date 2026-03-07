import Modal from "./Modal";

import { useState } from "react";
import { favoriteManager } from "../utils/favoriteInstance";
import { formatIngredients } from "../utils/formatIngredients";
import chalk from "chalk";

const RecipeCard = ({ meal }: any) => {
  const [showRecipe, setShowRecipe] = useState(false);
  const [recipe, setRecipe] = useState(formatIngredients(meal));
  const [isFav, setIsFav] = useState(favoriteManager.isFavorite(meal.idMeal));

  console.log(chalk.green(meal.strMeal));

  const toggleFavorite = () => {
    if (isFav) {
      favoriteManager.removeFavorite(meal.idMeal);
    } else {
      favoriteManager.addFavorite(meal);
    }

    setIsFav(!isFav); // force UI update
  };

  return (
    <div className="recipe-card">
      <div className="recipe-image-wrapper">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="recipe-image"
        />

        <button className="favorite-btn" onClick={toggleFavorite}>
          {isFav ? "⭐" : "☆"}
        </button>

        <span className="recipe-category">{meal.strCategory}</span>
      </div>

      <div className="recipe-content">
        <h3 className="recipe-title">{meal.strMeal}</h3>
      </div>
      <button className="recipe-button" onClick={() => setShowRecipe(true)}>
        Recipe
      </button>

      {/* modal code her e */}
      {showRecipe && (
        <Modal onClose={() => setShowRecipe(false)}>
          <h2>{meal.strMeal}</h2>
          <ol>
            {recipe.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </Modal>
      )}
    </div>
  );
};

export default RecipeCard;
