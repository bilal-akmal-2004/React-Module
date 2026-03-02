import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import RecipeCard from "./RecipeCard";

const RecipeList = () => {
  const { meals, loading, error } = useSelector(
    (state: RootState) => state.recipes
  );

  if (loading) return <p className="status-message">Loading...</p>;
  if (error) return <p className="status-message error">Error: {error}</p>;
  if (!meals.length) return <p className="status-message">No recipes found.</p>;

  return (
    <div className="recipe-list">
      {meals.map((meal: any) => (
        <RecipeCard key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
};

export default RecipeList;