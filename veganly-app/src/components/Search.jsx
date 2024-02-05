import CardList from "./CardList";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery, setVisible } from "../actions/action";

function Search() {
  const isVisible = useSelector((state) => state.isVisible);
  const dispatch = useDispatch();
  const searchText = useSelector((state) => state.searchQuery);

  const handleClick = (event) => {
    event.preventDefault();
    if (searchText.length > 0) {
      dispatch(setVisible(true));
    } else {
      console.log(searchText);
    }
  };

  const handleOnChange = (event) => {
    dispatch(setSearchQuery(event.target.value));
  };

  return (
    <div className="m-3 sm:m-6 lg:m-10 flex flex-col w-full">
      <form action="" className="w-full mb-2">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative flex items-center">
          <div className="absolute inset-y-0 start-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
            onChange={handleOnChange}
          />
        </div>
      </form>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-2"
        onClick={handleClick}
      >
        Search
      </button>
      {isVisible && <CardList query={searchText} className="w-full" />}
    </div>
  );
}

export default Search;
