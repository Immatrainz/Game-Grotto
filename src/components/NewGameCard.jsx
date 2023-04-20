import React, { useState } from "react";
import { GameContext } from "./MainPage.jsx";

const NewGameCard = ({ game }) => {
  const [mainImage, setMainImage] = useState(game.background_image);
  const { clickedGame, setClickedGame } = React.useContext(GameContext);

  return (
    <div
      className="new-game-card grid grid-cols-3"
      onClick={() => {
        setClickedGame(game);
      }}
    >
      <img className="col-span-2 new-game-image" src={mainImage}></img>
      <div className=" flex flex-col ml-5">
        <div className="place-self-start">
          <h1 className="text-3xl font-bold">{game.name}</h1>
        </div>
        {game.genres.map((genre) => {
          return (
            <p className="m-1 pl-2 w-60 bg-gradient-to-r from-blue-400 to-blue-800 text-white">
              {genre.name}
            </p>
          );
        })}
        <div className="grid grid-cols-2 grid-rows-2 gap-2 mt-2 w-80">
          {game.short_screenshots.slice(1).map((ss) => {
            return (
              <div
                className="w-40 h-24"
                onMouseEnter={() => {
                  setMainImage(ss.image);
                }}
                onMouseLeave={() => {
                  setMainImage(game.background_image);
                }}
              >
                <img
                  className="w-40 h-24 object-cover object-center"
                  src={ss.image}
                ></img>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewGameCard;
