import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import RecipeCard from "./RecipeCard";

type Props = {
  category: string;
  search: string;
};

const RecipeList = ({ category, search }: Props) => {
  const { meals, loading, error } = useSelector(
    (state: RootState) => state.recipes,
  );

  // filtering recipes accordin to the category selected by user
  let filteredMeals = meals;

  // category filter
  if (category !== "All") {
    filteredMeals = filteredMeals.filter(
      (meal: any) => meal.strCategory === category,
    );
  }

  // search filter
  if (search.trim() !== "") {
    filteredMeals = filteredMeals.filter((meal: any) =>
      meal.strMeal.toLowerCase().includes(search.toLowerCase()),
    );
  }

  if (loading) return <p className="status-message">Loading...</p>;
  if (error) return <p className="status-message error">Error: {error}</p>;
  if (!filteredMeals.length)
    return <p className="status-message">No recipes found.</p>;

  return (
    <div className="recipe-list">
      {filteredMeals.map((meal: any) => (
        <RecipeCard key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
};

export default RecipeList;
