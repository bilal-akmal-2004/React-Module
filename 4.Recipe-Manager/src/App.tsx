import './App.css'
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import { favoriteManager } from "./utils/favoriteInstance";
import Modal from "./components/Modal";

function App() {
  const [showFavorites, setShowFavorites] = useState(false);
  
  const [favorites, setFavorites] = useState(
    favoriteManager.getFavorites()
  );



  const openFavorites = () => {
    setFavorites(favoriteManager.getFavorites());
    setShowFavorites(true);
  };

  const removeFavorite = (id: string) => {
    favoriteManager.removeFavorite(id);
    setFavorites(favoriteManager.getFavorites());
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Recipe Manager</h1>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button onClick={openFavorites}>
          ⭐ View Favorites
        </button>
      </div>

      <SearchBar />
      <RecipeList />

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
        </Modal>
      )}
    </div>
  )
}

export default App