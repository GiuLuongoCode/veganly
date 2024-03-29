import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setRecipeDetails, setIsLoading } from "../reducers/reducers";
import Loader from "../components/Loader";

const RecipePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const recipeDetails = useSelector((state) => state.app.recipeDetails);
  const isLoading = useSelector((state) => state.app.isLoading);
  const fetchRecipeDetails = async () => {
    dispatch(setIsLoading(true));
    setTimeout(() => {
      dispatch(setIsLoading(false));
    }, 10000);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_API_RECIPE_DETAIL}${id}${
          import.meta.env.VITE_API_RECIPE_DETAIL
        }`,
        {
          headers: {
            "x-api-key": import.meta.env.VITE_API_KEY,
          },
        }
      );
      dispatch(
        setRecipeDetails({
          title: response.data.title,
          image: response.data.image,
          description: response.data.summary,
        })
      );
    } catch (error) {
      console.error("Error fetching recipe details:", error);
    }
  };
  useEffect(() => {
    fetchRecipeDetails();
  }, [dispatch, id]);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col justify-center items-center">
            <h3 className="font-bold text-xl text-blue-600">
              {recipeDetails.title}
            </h3>
            <img
              src={recipeDetails.image}
              alt="Recipe Image"
              className="w-full"
            />
          </div>
          <div>
            <div
              dangerouslySetInnerHTML={{ __html: recipeDetails.description }}
            ></div>
          </div>
        </div>
      )}
    </>
  );
};

export default RecipePage;
