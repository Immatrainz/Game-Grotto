import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import { createRoot } from "react-dom/client";
import TopRatedGames from "./TopRatedGames.jsx";
import NewGames from "./NewGames.jsx";
import GenreSearch from "./GenreSearch.jsx";
import GameModal from "./GameModal.jsx";
import LoginButton from "./Login.jsx";
import LogoutButton from "./Logout.jsx";
import { GenreContext, GameContext } from "../index.jsx";
import { useAuth0 } from "@auth0/auth0-react";

const MainPage = ({ genreCatalog }) => {
  const { isAuthenticated, isLoading, user } = useAuth0();
  const { clickedGenre, setClickedGenre } = useContext(GenreContext);
  const { clickedGame, setClickedGame } = useContext(GameContext);

  const handleGenreClick = (e) => {
    console.log(e.target.innerHTML);
    setClickedGenre(e.target.innerHTML);
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <h1 className="header navbar bg-gradient-to-r from-indigo-950 to-indigo-600">
        <img
          className="object-contain w-14 h-14"
          src="/assets/scream.png"
        ></img>
        <h2 className="ml-3 logo">
          <span className="text-5xl">G</span>AME{"\n"}
          <span className="text-5xl">G</span>ROTTO
        </h2>
        <div class="dropdown ml-2 mr-5">
          <label tabindex="0" class="btn m-1 bg-blue-950">
            Genres
          </label>
          <div
            tabindex="0"
            class="dropdown-content genre-dropdown card card-compact p-2 shadow bg-primary text-primary-content"
          >
            <div class="card-body">
              <h3 class="card-title">Genres</h3>

              <div className="grid grid-cols-3 gap-2">
                {genreCatalog.map((genre) => {
                  return (
                    <NavLink to="/genres">
                      <button onClick={handleGenreClick} className="btn w-72">
                        {genre}
                      </button>
                    </NavLink>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {isAuthenticated && (
          <NavLink to="/wishlist">
            <button className="btn bg-blue-950">Wishlist</button>
          </NavLink>
        )}
        <div className="navbar-nav ml-auto">
          {isAuthenticated ? (
            <div className="flex gap-4">
              <p className="self-center">{user.name}</p> <LogoutButton />
            </div>
          ) : (
            <LoginButton />
          )}
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
            Game Grotto
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

export default MainPage;
