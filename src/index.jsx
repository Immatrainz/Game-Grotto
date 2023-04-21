import React, { useEffect, useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import MainPage from "./components/MainPage.jsx";
import GenrePage from "./components/GenrePage.jsx";
import Wishlist from "./components/Wishlist.jsx";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
const GenreContext = React.createContext("");
const GameContext = React.createContext({});

const App = () => {
  const [clickedGame, setClickedGame] = useState({});
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
              <GameContext.Provider value={{ clickedGame, setClickedGame }}>
                <GenreContext.Provider
                  value={{ clickedGenre, setClickedGenre }}
                >
                  <MainPage genreCatalog={genreCatalog} />
                </GenreContext.Provider>
              </GameContext.Provider>
            }
          ></Route>
          <Route
            exact
            path="/genres"
            element={
              <GameContext.Provider value={{ clickedGame, setClickedGame }}>
                <GenreContext.Provider
                  value={{ clickedGenre, setClickedGenre }}
                >
                  <GenrePage />
                </GenreContext.Provider>
              </GameContext.Provider>
            }
          ></Route>
          <Route exact path="/wishlist" element={<Wishlist />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export { GenreContext, GameContext };
root.render(<App />);
