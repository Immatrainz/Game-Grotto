import React from "react";
import GenreContext from "../index.jsx";
import { GameContext } from "./MainPage.jsx";
const axios = require("axios");
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXbox,
  faPlaystation,
  faApple,
  faAndroid,
  faAppStore,
} from "@fortawesome/free-brands-svg-icons";

const GenrePage = () => {
  const { clickedGenre, setClickedGenre } = React.useContext(GenreContext);
  const { clickedGame, setClickedGame } = React.useContext(GameContext);
  const [gamesInThatGenre, setGamesInThatGenre] = React.useState([]);

  React.useEffect(() => {
    getByGenre();
  }, []);

  const getByGenre = () => {
    axios
      .get("/games/genrepage", { params: { genre: clickedGenre } })
      .then((res) => {
        setGamesInThatGenre(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const platforms = {
    Xbox: <FontAwesomeIcon icon={faXbox} size="sm" />,
    PlayStation: <FontAwesomeIcon icon={faPlaystation} size="sm" />,
    iOS: <FontAwesomeIcon icon={faAppStore} size="sm" />,
    "Apple Macintosh": <FontAwesomeIcon icon={faApple} size="sm" />,
    Android: <FontAwesomeIcon icon={faAndroid} size="sm" />,
  };

  return (
    <div>
      <h1 className="header navbar bg-gradient-to-r from-indigo-950 to-indigo-600">
        <img
          className="object-contain w-14 h-14"
          src="/assets/scream.png"
        ></img>
        SCREAM
      </h1>
      <h2 className="text-white text-4xl font-bold p-5">{clickedGenre}</h2>
      <div className="grid grid-cols-2">
        <ul className="menu bg-secondary bg-slate-800">
          {gamesInThatGenre.map((game) => {
            let gameImage = `${game.background_image}`;
            return (
              <li
              // onClick={() => {
              //   setClickedGame(game);
              // }}
              // onMouseEnter={() => {
              //   setSelectedGame(game);
              // }}
              // onMouseLeave={() => {
              //   setSelectedGame(null);
              // }}
              >
                <a>
                  <div className="flex flex-cols h-14 gap-x-4">
                    <img
                      className="object-cover object-center h-12 w-20"
                      src={gameImage}
                    ></img>
                    <div>
                      <p className="text-sm">{game.name}</p>
                      <div className="flex flex-cols gap-x-2">
                        {game.parent_platforms.map((platform) => {
                          return (
                            <p className="text-xs">
                              {platforms[platform.platform.name] ||
                                platform.platform.name}
                            </p>
                          );
                        })}
                      </div>
                      <div className="flex flex-cols gap-x-2">
                        {game.tags.slice(1, 6).map((tag) => {
                          return <p className="text-xs">{tag.name}</p>;
                        })}
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default GenrePage;
