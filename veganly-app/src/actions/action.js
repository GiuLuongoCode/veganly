export const setSearchQuery = (query) => ({
  type: "SET_SEARCH_QUERY",
  payload: query,
});

export const setRecipes = (recipes) => ({
  type: "SET_RECIPES",
  payload: recipes,
});

export const setVisible = (isVisible) => ({
  type: "SET_VISIBLE",
  payload: isVisible,
});

export const setRecipeDetails = (recipe) => ({
  type: "SET_RECIPE_DETAILS",
  payload: recipe,
})
