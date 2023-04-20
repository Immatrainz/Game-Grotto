import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import { createRoot } from "react-dom/client";
import Monitor from "./Monitor.jsx";
import TopRatedGames from "./TopRatedGames.jsx";
import NewGames from "./NewGames.jsx";
import GenreSearch from "./GenreSearch.jsx";
import GameModal from "./GameModal.jsx";

const GameContext = React.createContext({});

const MainPage = () => {
  const getByGenre = (genre) => {
    axios
      .get("/games/genre", { params: { genre: genre } })
      .then((res) => {
        setGenredList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [clickedGame, setClickedGame] = useState({});

  return (
    <div>
      <h1 className="header navbar bg-gradient-to-r from-indigo-950 to-indigo-600">
        <img
          className="object-contain w-14 h-14"
          src="/assets/scream.png"
        ></img>
        SCREAM
        <div class="dropdown">
          <label tabindex="0" class="btn m-1">
            Genres
          </label>
          <div
            tabindex="0"
            class="dropdown-content genre-dropdown card card-compact p-2 shadow bg-primary text-primary-content"
          >
            <div class="card-body">
              <h3 class="card-title">Genres</h3>

              <div className="grid grid-cols-3 gap-2">
                {[
                  "Action",
                  "Adventure",
                  "Shooter",
                  "RPG",
                  "Indie",
                  "Puzzle",
                  "Platformer",
                  "Racing",
                  "Arcade",
                ].map((genre) => {
                  return (
                    <NavLink to="/genres">
                      <button className="btn">{genre}</button>
                    </NavLink>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </h1>
      <GameContext.Provider value={{ clickedGame, setClickedGame }}>
        <NewGames />
        <TopRatedGames />
        <GenreSearch />
        <GameModal />
      </GameContext.Provider>
      <footer className="footer mt-5 p-10 bg-base-200 text-base-content">
        <div>
          <img
            className="object-contain w-14 h-14"
            src="/assets/scream.png"
          ></img>
          <p>
            SCREAM Industries
            <br />
            Reinventing game search since 2023
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export { MainPage, GameContext };
