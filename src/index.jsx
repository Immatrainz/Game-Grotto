import React, { useEffect, useState, useContext } from "react";

import { createRoot } from "react-dom/client";
import Monitor from './components/Monitor.jsx';
import TopRatedGames from './components/TopRatedGames.jsx';
import NewGames from './components/NewGames.jsx';
import GenreSearch from './components/GenreSearch.jsx';
import GameModal from './components/GameModal.jsx';


const root = createRoot(document.getElementById("root"));

const GameContext = React.createContext({});

const App = () => {
  const [ clickedGame, setClickedGame ] = useState({});
  return (
    <div>
      <h1 className='header navbar bg-gradient-to-r from-indigo-950 to-indigo-600'>
        <img className='object-contain w-14 h-14' src='/assets/scream.png'></img>
        SCREAM
      </h1>
      <GameContext.Provider value={{clickedGame, setClickedGame}}>
        <NewGames />
        <TopRatedGames />
        <GenreSearch />
        <GameModal />
      </GameContext.Provider>
      <footer className="footer mt-5 p-10 bg-base-200 text-base-content">
        <div>
        <img className='object-contain w-14 h-14' src='/assets/scream.png'></img>
        <p>SCREAM Industries<br/>Reinventing game search since 2023</p>
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
  )
}

export default GameContext;
root.render(<App />);