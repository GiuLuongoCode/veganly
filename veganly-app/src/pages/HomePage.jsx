import Search from "../components/Search";
const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl text-blue-500 mb-4">Veganly</h1>
        <Search></Search>
        </div>
    );
}

export default HomePage;