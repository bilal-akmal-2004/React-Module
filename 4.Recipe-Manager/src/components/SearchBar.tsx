import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchRecipes } from "../features/recipes/recipeSlice";
import type { AppDispatch } from "../app/store";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = () => {
    if (!query.trim()) return;
    dispatch(searchRecipes(query));
  };

 return (
  <div className="search-container">
    <input
      className="search-input"
      type="text"
      placeholder="Search recipes..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
    <button className="search-button" onClick={handleSearch}>
      Search
    </button>
  </div>
);
};

export default SearchBar;