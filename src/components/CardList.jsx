import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { setRecipes, setIsLoading, setClickable } from "../reducers/reducers";
import Loader from "./Loader";
import axios from "axios";

function CardList({ query }) {
  const recipes = useSelector((state) => state.app.recipes);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.app.isLoading);
  const fetchRecipes = async () => {
    setTimeout(() => {
      dispatch(setIsLoading(false));
      dispatch(setClickable(true));
    }, 5000);
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

  useEffect(() => {
    fetchRecipes();
  }, [dispatch, query]);

  return (
    <>
      {isLoading && <Loader />}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
        {!isLoading &&
          recipes.map((recipe) => (
            <Card
              key={recipe.id}
              image={recipe.image}
              title={recipe.title}
              id={recipe.id}
            />
          ))}
      </div>
    </>
  );
}

export default CardList;
