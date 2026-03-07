import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface RecipeState {
  meals: any[];
  loading: boolean;
  error: string | null;
}

const initialState: RecipeState = {
  meals: [],
  loading: false,
  error: null,
};

// Fetch all recipes (for initial load and "All" category)
export const fetchAllRecipes = createAsyncThunk(
  "recipes/fetchAll",
  async () => {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );

    if (!response.ok) {
      throw new Error("Failed to fetch recipes");
    }

    const data = await response.json();
    return data.meals || [];
  }
);

// Search by name
export const searchRecipes = createAsyncThunk(
  "recipes/search",
  async (query: string) => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch recipes");
    }

    const data = await response.json();
    return data.meals || [];
  }
);

const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle fetchAllRecipes
      .addCase(fetchAllRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.meals = action.payload;
      })
      .addCase(fetchAllRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })
      // Handle searchRecipes
      .addCase(searchRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.meals = action.payload;
      })
      .addCase(searchRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default recipeSlice.reducer;