

import { useState } from "react";
import { favoriteManager } from "../utils/favoriteInstance";
const RecipeCard = ({ meal }: any) => {

    const [isFav, setIsFav] = useState(
    favoriteManager.isFavorite(meal.idMeal)
  );

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

        <span className="recipe-category">
          {meal.strCategory}
        </span>
      </div>

      <div className="recipe-content">
        <h3 className="recipe-title">{meal.strMeal}</h3>
      </div>
    </div>
  );
};

export default RecipeCard;