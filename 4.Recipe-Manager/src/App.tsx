import "./App.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllRecipes, searchRecipes } from "./features/recipes/recipeSlice";
import type { AppDispatch } from "./app/store";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import { favoriteManager } from "./utils/favoriteInstance";
import Modal from "./components/Modal";
import { createShoppingList } from "./utils/shoppingList";
import CategoryFilter from "./components/CategoryFilter";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const [showFavorites, setShowFavorites] = useState(false);
  const [favorites, setFavorites] = useState(favoriteManager.getFavorites());
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showList, setShowList] = useState(false);

  const shoppingList = createShoppingList(favorites.slice(0, 3));

  // Fetch all recipes when app loads
  useEffect(() => {
    dispatch(fetchAllRecipes());
  }, [dispatch]);

  const openFavorites = () => {
    setFavorites(favoriteManager.getFavorites());
    setShowFavorites(true);
  };

  const removeFavorite = (id: string) => {
    favoriteManager.removeFavorite(id);
    setFavorites(favoriteManager.getFavorites());
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      // If search is empty, fetch all recipes again
      dispatch(fetchAllRecipes());
    } else {
      // Otherwise search for the query
      dispatch(searchRecipes(query));
    }
  };

  return (
    <div>
      <h1 className="main-heading-recipe-manager">Recipe Manager</h1>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button className="view-fav-btn" onClick={openFavorites}>
          ⭐ View Favorites
        </button>
      </div>

      <CategoryFilter onSelectCategory={setSelectedCategory} />
      <SearchBar onSearch={handleSearch} />
      <RecipeList category={selectedCategory} search={searchQuery} />

      {showFavorites && (
        <Modal onClose={() => setShowFavorites(false)}>
          <h2 style={{ marginBottom: "20px" }}>My Favorite Recipes</h2>

          {favorites.length === 0 ? (
            <p>No favorites saved yet.</p>
          ) : (
            <div className="favorites-grid">
              {favorites.map((meal: any) => (
                <div key={meal.idMeal} className="favorite-card">
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="favorite-image"
                  />

                  <div className="favorite-info">
                    <h4>{meal.strMeal}</h4>
                    <p>{meal.strCategory}</p>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeFavorite(meal.idMeal)}
                  >
                    ⭐
                  </button>
                </div>
              ))}
            </div>
          )}

          <h3 className="shopping-title">Shopping List</h3>

          <button
            className="dropdown-btn"
            onClick={() => setShowList(!showList)}
          >
            Shopping List {showList ? "▲" : "▼"}
          </button>

          {showList && (
            <ol className="dropdown-list">
              {shoppingList.length === 0 && <li>No content here</li>}

              {shoppingList.map((item, index) => (
                <li key={index} className="dropdown-item">
                  {item}
                </li>
              ))}
            </ol>
          )}
        </Modal>
      )}
    </div>
  );
}

export default App;
