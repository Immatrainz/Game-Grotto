import React, { useEffect } from "react";
const axios = require("axios");
import Modal from "react-modal";
import { NavLink } from "react-router-dom";
import { GameContext } from "../index.jsx";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useAuth0 } from "@auth0/auth0-react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "90%",
    height: "90%",
    backgroundColor: "#424452",
    boxShadow: "4px 5px 1px #9E9E9E",
    transform: "translate(-50%, -50%)",
  },
  overlay: { zIndex: 9000 },
};

const GameModal = () => {
  const { isAuthenticated, isLoading, user } = useAuth0();
  const { clickedGame, setClickedGame } = React.useContext(GameContext);

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [gameDetails, setGameDetails] = React.useState({});
  const [gameTrailers, setGameTrailers] = React.useState({});
  const [added, setAdded] = React.useState(false);
  const [justAdded, setJustAdded] = React.useState(false);

  useEffect(() => {
    if (Object.keys(clickedGame).length > 0) {
      setIsOpen(true);
      getIfAdded();
      if (clickedGame.id === 34857384573607) {
        setGameTrailers({});
        setGameDetails({
          id: 34857384573607,
          slug: "coding-sim",
          name: "Coding Simulator",
          name_original: "It Takes Two",
          description: "<p>Just Coding.</p>",
          metacritic: 100,
          metacritic_platforms: [
            [Object],
            [Object],
            [Object],
            [Object],
            [Object],
          ],
          released: "2023-04-20",
          tba: false,
          updated: "2023-04-20T01:29:14",
          background_image: "/assets/codingsim.png",
          background_image_additional:
            "https://media.rawg.io/media/screenshots/0da/0da98b6c57676f2f16cb6bf8818c8642.jpg",
          website: "https://hazelight.se/games/it-takes-two/",
          rating: 5,
          rating_top: 5,
          ratings: [[Object], [Object], [Object], [Object]],
          reactions: {
            1: 9,
            3: 3,
            5: 2,
            6: 1,
            7: 4,
            8: 10,
            9: 2,
            10: 1,
            11: 1,
            12: 1,
          },
          added: 3853,
          added_by_status: {
            yet: 194,
            owned: 1934,
            beaten: 899,
            toplay: 515,
            dropped: 123,
            playing: 188,
          },
          playtime: 10,
          screenshots_count: 19,
          movies_count: 0,
          creators_count: 1,
          achievements_count: 55,
          parent_achievements_count: 19,
          reddit_url: "",
          reddit_name: "",
          reddit_description: "",
          reddit_logo: "",
          reddit_count: 0,
          twitch_count: 120,
          youtube_count: 1000000,
          reviews_text_count: 27,
          ratings_count: 1029,
          suggestions_count: 793,
          alternative_names: [],
          metacritic_url:
            "https://www.metacritic.com/game/playstation-5/it-takes-two",
          parents_count: 0,
          additions_count: 1,
          game_series_count: 0,
          user_game: null,
          reviews_count: 1056,
          saturated_color: "0f0f0f",
          dominant_color: "0f0f0f",
          parent_platforms: [[Object], [Object], [Object], [Object]],
          platforms: [
            [Object],
            [Object],
            [Object],
            [Object],
            [Object],
            [Object],
          ],
          stores: [[Object], [Object], [Object], [Object]],
          developers: [{ name: "Not Xiao Wen" }],
          genres: [
            { name: "Action" },
            { name: "Adventure" },
            { name: "RPG" },
            { name: "Puzzle" },
          ],
          tags: [[Object], [Object], [Object], [Object], [Object], [Object]],
          publishers: [[Object]],
          esrb_rating: {
            id: 2,
            name: "Everyone 10+",
            slug: "everyone-10-plus",
          },
          clip: null,
          description_raw: "Just Coding.",
        });
      } else {
        setGameTrailers({});
        getGameDetails();
        getGameTrailers();
      }
    }
  }, [clickedGame]);

  const closeModal = () => {
    setIsOpen(false);
    setClickedGame({});
  };

  let getGameDetails = () => {
    axios
      .get("/games/details", { params: { id: clickedGame.id } })
      .then((res) => {
        console.log(res.data);
        setGameDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let getGameTrailers = () => {
    axios
      .get("/games/trailers", { params: { id: clickedGame.id } })
      .then((res) => {
        console.log(res.data);
        setGameTrailers(res.data[0].data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let getIfAdded = () => {
    axios
      .get("/wishlist/game", { params: { id: clickedGame.id } })
      .then((res) => {
        console.log(res.data);
        if (res.data === false) {
          setAdded(false);
        } else {
          setAdded(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleWishlistClick = () => {
    axios
      .post("/wishlist", { game: clickedGame })
      .then((res) => {
        console.log("successfully posted");
        getIfAdded();
        setJustAdded(true);
        setTimeout(() => {
          setJustAdded(false);
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Game Modal"
      >
        {justAdded && (
          <div
            className="alert alert-success shadow-lg absolute"
            style={{ width: 1250 + "px" }}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6 "
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Added to Wishlist!</span>
            </div>
          </div>
        )}
        <div className="grid grid-cols-2">
          <div>
            <h1 className="text-5xl h-36">{gameDetails.name}</h1>
            {gameDetails.id === 34857384573607 ? (
              <NavLink to="/codingsim">
                <p>Play now!</p>
              </NavLink>
            ) : (
              <a href={gameDetails.website} target="_blank">
                Link to Game Site
              </a>
            )}
            <div className="w-[550px]">
              <Carousel showThumbs={false}>
                {Object.keys(gameTrailers).length === 0 ? (
                  <img
                    className="game-modal-image object-contain"
                    src={gameDetails.background_image}
                  ></img>
                ) : (
                  <video
                    className="game-modal-image"
                    src={gameTrailers.max}
                    controls="controls"
                    autoPlay={true}
                  />
                )}
                {clickedGame.short_screenshots &&
                  clickedGame.short_screenshots.slice(1).map((ss) => {
                    return (
                      <img
                        className="game-modal-image object-contain pt-5 pr-5"
                        src={ss.image}
                      ></img>
                    );
                  })}
              </Carousel>
            </div>
          </div>
          <div className="flex flex-col mt-5 justify-between">
            <p>{gameDetails.description_raw}</p>
            <p>Score: {gameDetails.metacritic}</p>
            <p>
              Rating: {gameDetails.esrb_rating && gameDetails.esrb_rating.name}
            </p>
            <div className="flex">
              Developers:{" "}
              {gameDetails.developers &&
                gameDetails.developers.map((developer) => {
                  return <p className="ml-2">{developer.name}</p>;
                })}
            </div>
            <div className="flex">
              Genres:{" "}
              {gameDetails.genres &&
                gameDetails.genres.map((genre) => {
                  return <p className="ml-2">{genre.name}</p>;
                })}
            </div>
            {isAuthenticated ? (
              added ? (
                <button className="btn btn-disabled">Already Added</button>
              ) : (
                <button onClick={handleWishlistClick} className="btn">
                  Add to Wishlist
                </button>
              )
            ) : (
              <button className="btn btn-disabled">
                Login to add to Wishlist!
              </button>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default GameModal;
