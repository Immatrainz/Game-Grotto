import React from "react";
import { GameContext, GenreContext } from "../index.jsx";
const axios = require("axios");
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXbox,
  faPlaystation,
  faApple,
  faAndroid,
  faAppStore,
} from "@fortawesome/free-brands-svg-icons";

import ReactPaginate from "react-paginate";
import GameModal from "./GameModal.jsx";

const GenrePage = () => {
  const { clickedGenre, setClickedGenre } = React.useContext(GenreContext);
  const { clickedGame, setClickedGame } = React.useContext(GameContext);
  const [gamesInThatGenre, setGamesInThatGenre] = React.useState([]);

  const [pagination, setPagination] = React.useState({
    data: gamesInThatGenre,
    offset: 0,
    numberPerPage: 8,
    pageCount: 0,
    currentData: [],
  });

  React.useEffect(() => {
    getByGenre();
  }, []);

  React.useEffect(() => {
    setPagination((prevState) => ({
      ...prevState,
      pageCount: gamesInThatGenre.length / prevState.numberPerPage,
      currentData: gamesInThatGenre.slice(
        pagination.offset,
        pagination.offset + pagination.numberPerPage
      ),
    }));
  }, [pagination.numberPerPage, pagination.offset, gamesInThatGenre]);

  const handlePageClick = (event) => {
    const selected = event.selected;
    const offset = selected * pagination.numberPerPage;
    setPagination({ ...pagination, offset });
  };

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
        <h2 className="ml-3 logo">
          <span className="text-5xl">G</span>AME{"\n"}
          <span className="text-5xl">G</span>ROTTO
        </h2>
      </h1>
      <h2 className="text-white text-4xl font-bold p-5">
        {clickedGenre.toUpperCase()}
      </h2>
      <div>
        <ul className="menu bg-secondary bg-slate-800">
          {pagination.currentData &&
            pagination.currentData.map((game) => {
              let gameImage = `${game.background_image}`;
              return (
                <li
                  onClick={() => {
                    console.log(game);
                    setClickedGame(game);
                  }}
                >
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
                </li>
              );
            })}
          <ReactPaginate
            className="flex justify-between bg-blue-900"
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            pageCount={pagination.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        </ul>
      </div>
      <GameModal />
    </div>
  );
};

export default GenrePage;
