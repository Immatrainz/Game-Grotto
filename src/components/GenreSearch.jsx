import React, { useState, useEffect } from "react";
import GamePopUp from "./GamePopUp.jsx";
const axios = require("axios");
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXbox,
  faPlaystation,
  faApple,
  faAndroid,
  faAppStore,
} from "@fortawesome/free-brands-svg-icons";

import { GameContext } from "./MainPage.jsx";

const GenreSearch = () => {
  const { clickedGame, setClickedGame } = React.useContext(GameContext);

  const [genre, setGenre] = useState("Action");
  const [genredList, setGenredList] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [tabStatus, setTabStatus] = useState({
    tab1: true,
    tab2: false,
    tab3: false,
    tab4: false,
    tab5: false,
  });

  const platforms = {
    Xbox: <FontAwesomeIcon icon={faXbox} size="sm" />,
    PlayStation: <FontAwesomeIcon icon={faPlaystation} size="sm" />,
    iOS: <FontAwesomeIcon icon={faAppStore} size="sm" />,
    "Apple Macintosh": <FontAwesomeIcon icon={faApple} size="sm" />,
    Android: <FontAwesomeIcon icon={faAndroid} size="sm" />,
  };

  useEffect(() => {
    getByGenre();
  }, [genre]);

  const getByGenre = () => {
    axios
      .get("/games/genre", { params: { genre: genre } })
      .then((res) => {
        setGenredList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let genreList = genredList.map((game) => {
    let gameImage = `${game.background_image}`;
    return (
      <li
        onClick={() => {
          setClickedGame(game);
        }}
        onMouseEnter={() => {
          setSelectedGame(game);
        }}
        onMouseLeave={() => {
          setSelectedGame(null);
        }}
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
  });

  const onTabClick = (e) => {
    let obj = {
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: false,
      tab5: false,
    };
    obj[e.target.id] = true;
    setTabStatus(obj);
    setGenre(e.target.text);
  };

  let index = 1;
  let tabList = ["Action", "Adventure", "Puzzle", "RPG", "Indie"].map((tab) => {
    let tabId = "tab" + index.toString();
    let tabClass = `tab ${tabStatus[tabId] ? "tab-active" : ""}`;
    index++;
    return (
      <a id={tabId} className={tabClass} onClick={onTabClick}>
        {tab}
      </a>
    );
  });

  return (
    <>
      <p className="ml-5">POPULAR GENRES</p>
      <div className="grid grid-cols-2 ">
        <div className="genre-list">
          <div className="tabs tabs-boxed">{tabList}</div>
          <div>
            <ul className="menu bg-secondary bg-slate-800">{genreList}</ul>
          </div>
        </div>
        {selectedGame !== null && (
          <div className="bg-gradient-to-r from-sky-800 to-sky-400">
            <GamePopUp selectedGame={selectedGame} />
          </div>
        )}
      </div>
    </>
  );
};

export default GenreSearch;
