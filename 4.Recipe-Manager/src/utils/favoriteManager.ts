export const createFavoriteManager = () => {
  let favorites: any[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  const saveToStorage = () => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  const addFavorite = (recipe: any) => {
    if (!favorites.find((item) => item.idMeal === recipe.idMeal)) {
      favorites.push(recipe);
      saveToStorage();
    }
  };

  const removeFavorite = (id: string) => {
    favorites = favorites.filter((item) => item.idMeal !== id);
    saveToStorage();
  };

  const getFavorites = () => {
    return [...favorites]; 
  };

  const isFavorite = (id: string) => {
    return favorites.some((item) => item.idMeal === id);
  };

  return {
    addFavorite,
    removeFavorite,
    getFavorites,
    isFavorite,
  };
};