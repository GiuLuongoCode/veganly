import { createAction } from "@reduxjs/toolkit";

export const setSearchQuery = createAction("SET_SEARCH_QUERY");
export const setRecipes = createAction("SET_RECIPES");
export const setVisible = createAction("SET_VISIBLE");
export const setRecipeDetails = createAction("SET_RECIPE_DETAILS");
export const setIsLoading = createAction("SET_LOADING");
export const setClickable = createAction("SET_CLICKABLE");
