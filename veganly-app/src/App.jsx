import "./App.css";
import Search from "./components/Search";
import RecipePage from "./pages/RecipePage";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
        </Route>
        <Route path="/recipe/:id" element={<RecipePage />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
