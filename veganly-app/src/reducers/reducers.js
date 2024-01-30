// reducers.js
const initialState = {
  recipes: [],
  searchQuery: "",
  isVisible: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEARCH_QUERY":
      return {
        ...state,
        searchQuery: action.payload,
      };
    case "SET_RECIPES":
      return {
        ...state,
        recipes: action.payload,
      };
    case "SET_VISIBLE":
      return {
        ...state,
        isVisible: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
