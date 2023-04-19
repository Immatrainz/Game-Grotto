import React, { useEffect, useState } from "react";

import { createRoot } from "react-dom/client";
import Monitor from './components/Monitor.jsx';
import TopRatedGames from './components/TopRatedGames.jsx';
import NewGames from './components/NewGames.jsx';
import GenreSearch from './components/GenreSearch.jsx';

const root = createRoot(document.getElementById("root"));

const App = () => {

  return (
    <div>
      <h1 className='header navbar bg-gradient-to-r from-indigo-950 to-indigo-600'>
        SCREAM
      </h1>
      <NewGames />
      <TopRatedGames />
      <GenreSearch />
    </div>
  )
}

root.render(<App />);