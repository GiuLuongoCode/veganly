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
      console.log("ERRROROROR")
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
      .get(import.meta.env.VITE_API_URL, {
        headers: {
          "x-api-key": import.meta.env.VITE_API_KEY,
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
        console.log(apiUrl)
        console.log(err)
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
