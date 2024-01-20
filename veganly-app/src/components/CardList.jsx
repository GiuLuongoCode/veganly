import { useEffect, useReducer, useState } from "react";
import Card from "./Card";
import axios from "axios";

const initalState = {
  data: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        data: action.payload,
      };

    case "ERROR":
      return {
        data: [],
      };

    default:
      return state;
  }
};

function CardList({ query }) {
  const [recipesRedux, dispatch] = useReducer(reducer, initalState);
  useEffect(() => {
    axios
      .get("https://api.spoonacular.com/recipes/complexSearch", {
        headers: {
          "x-api-key": "23ce25ffee0b442d8784358d06586e39",
        },
        params: {
          query: query,
          diet: "vegan",
        },
      })
      .then((res) => {
        dispatch({ type: "SUCCESS", payload: res.data.results });
      })
      .catch((err) => {
        dispatch({ type: "ERROR" });
      });
  }, []);
  return (
    <div className="grid gap-4 grid-cols-3 mt-8">
      {recipesRedux.data.map((recipe) => (
        <Card key={recipe.id} image={recipe.image} title={recipe.title}></Card>
      ))}
    </div>
  );
}

export default CardList;
