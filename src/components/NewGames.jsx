import React, { useEffect, useState, useContext } from "react";
import { GameContext } from "../index.jsx";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import NewGameCard from "./NewGameCard.jsx";
const axios = require("axios");

const NewGames = () => {
  const [newGames, setNewGames] = useState([]);
  const { clickedGame, setClickedGame } = useContext(GameContext);

  useEffect(() => {
    getNewGames();
  }, []);

  let getNewGames = () => {
    axios
      .get("/games/new")
      .then((res) => {
        //console.log(res.data);
        setNewGames(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const newGamesList = newGames.map((game) => {
    return <NewGameCard game={game} />;
  });

  return (
    <div className="ml-5 mt-5">
      <p>LATEST UPDATES</p>
      <GameContext.Provider value={{ clickedGame, setClickedGame }}>
        <Carousel>{newGamesList}</Carousel>
      </GameContext.Provider>
    </div>
  );
};
export default NewGames;
