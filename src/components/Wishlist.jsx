import React from "react";
import GameModal from "./GameModal.jsx";
import { GameContext } from "../index.jsx";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
const axios = require("axios");
import {
  faXbox,
  faPlaystation,
  faApple,
  faAndroid,
  faAppStore,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wishlist = () => {
  const [wishList, setWishList] = React.useState([]);
  const { clickedGame, setClickedGame } = React.useContext(GameContext);

  const platforms = {
    Xbox: <FontAwesomeIcon icon={faXbox} size="sm" />,
    PlayStation: <FontAwesomeIcon icon={faPlaystation} size="sm" />,
    iOS: <FontAwesomeIcon icon={faAppStore} size="sm" />,
    "Apple Macintosh": <FontAwesomeIcon icon={faApple} size="sm" />,
    Android: <FontAwesomeIcon icon={faAndroid} size="sm" />,
  };

  React.useEffect(() => {
    getMyWishlist();
  }, []);

  const getMyWishlist = () => {
    axios
      .get("/wishlist")
      .then((res) => {
        setWishList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
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
        <div className="ml-5 mr-5">
          <h1 className="text-4xl font-bold pt-5 pb-5">WISHLIST</h1>
          <ul className="menu bg-secondary bg-slate-800">
            {wishList.map((game) => {
              let gameImage = `${game.background_image}`;
              return (
                <li
                  onClick={() => {
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
          </ul>
        </div>
        <GameModal />
      </div>
    </div>
  );
};

export default withAuthenticationRequired(Wishlist);
