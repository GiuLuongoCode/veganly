import "./App.css";
import RecipePage from "./pages/RecipePage";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <>
    <HelmetProvider>
      <Helmet>
        <title>Veganly</title>
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>
          </Route>
          <Route path="/recipe/:id" element={<RecipePage />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
    </>
  );
}

export default App;
