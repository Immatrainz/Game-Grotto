import React, { useEffect, useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { MainPage } from "./components/MainPage.jsx";
import GenrePage from "./components/GenrePage.jsx";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
const GenreContext = React.createContext("");

const App = () => {
  const [clickedGenre, setClickedGenre] = useState("");
  const [genreCatalog, setGenreCatalog] = useState([
    "Action",
    "Adventure",
    "Shooter",
    "RPG",
    "Indie",
    "Puzzle",
    "Platformer",
    "Racing",
    "Arcade",
  ]);

  return (
    <Router>
      <div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <GenreContext.Provider value={{ clickedGenre, setClickedGenre }}>
                <MainPage genreCatalog={genreCatalog} />
              </GenreContext.Provider>
            }
          ></Route>
          <Route
            exact
            path="/genres"
            element={
              <GenreContext.Provider value={{ clickedGenre, setClickedGenre }}>
                <GenrePage />
              </GenreContext.Provider>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default GenreContext;
root.render(<App />);
