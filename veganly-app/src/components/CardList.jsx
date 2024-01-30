import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import axios from "axios";
import { setRecipes } from "../actions/action";

function CardList({ query }) {
  const recipes = useSelector((state) => state.recipes);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_API_URL, {
          headers: {
            "x-api-key": import.meta.env.VITE_API_KEY,
          },
          params: {
            query: query,
            diet: "vegan",
          },
        });
        dispatch(setRecipes(response.data.results));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [dispatch, query]);

  return (
    <div className="grid gap-4 grid-cols-3 mt-8">
      {recipes.map((recipe) => (
        <Card key={recipe.id} image={recipe.image} title={recipe.title} id={recipe.id} />
      ))}
    </div>
  );
}

export default CardList;
