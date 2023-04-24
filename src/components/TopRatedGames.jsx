import React, { useEffect, useState } from "react";
const axios = require("axios");
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import GameCard from "./GameCard.jsx";
import { GameContext } from "../index.jsx";

const TopRatedGames = () => {
  const [topGames, setTopGames] = useState([]);
  const { clickedGame, setClickedGame } = React.useContext(GameContext);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    getTopRated();
  }, []);

  const getTopRated = () => {
    axios
      .get("/games/top")
      .then((data) => {
        console.log(data.data);
        setTopGames(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let topGameList = topGames.map((game) => {
    return <GameCard game={game} />;
  });

  return (
    <div className="m-5">
      <h1>POPULAR</h1>
      <GameContext.Provider value={{ clickedGame, setClickedGame }}>
        <Carousel
          autoPlay={true}
          autoPlaySpeed={2000}
          swipeable={true}
          draggable={true}
          responsive={responsive}
        >
          {topGameList}
        </Carousel>
      </GameContext.Provider>
    </div>
  );
};

export default TopRatedGames;
