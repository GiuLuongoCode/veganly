import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipes: [],
  searchQuery: "",
  recipeDetails: {},
  isVisible: false,
  isLoading: true,
  isClickable: true,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setRecipes: (state, action) => {
      state.recipes = action.payload;
    },
    setVisible: (state, action) => {
      state.isVisible = action.payload;
    },
    setRecipeDetails: (state, action) => {
      state.recipeDetails = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setClickable: (state, action) => {
      if (action.payload) {
        state.isClickable = true;
      } else {
        state.isClickable = false;
      }
    },
  },
});

export const {
  setSearchQuery,
  setRecipes,
  setVisible,
  setRecipeDetails,
  setIsLoading,
  setClickable,
} = appSlice.actions;

export default appSlice.reducer;
