import React, { useEffect } from "react";
const axios = require("axios");
import Modal from "react-modal";
import { GameContext } from "../index.jsx";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

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
  overlay: { zIndex: 100 },
};

const GameModal = () => {
  const { clickedGame, setClickedGame } = React.useContext(GameContext);

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [gameDetails, setGameDetails] = React.useState({});
  const [gameTrailers, setGameTrailers] = React.useState({});

  useEffect(() => {
    if (Object.keys(clickedGame).length > 0) {
      setIsOpen(true);
      // getGameDetails();
      // getGameTrailers();
      setGameTrailers({
        480: "https://steamcdn-a.akamaihd.net/steam/apps/256676833/movie480.mp4",
        max: "https://steamcdn-a.akamaihd.net/steam/apps/256676833/movie_max.mp4",
      });
      setGameDetails({
        id: 455597,
        slug: "it-takes-two-2",
        name: "It Takes Two",
        name_original: "It Takes Two",
        description:
          "<p>Bring your favorite co-op partner and together step into the shoes of May and Cody. As the couple is going through a divorce, through unknown means their minds are transported into two dolls which their daughter, Rose, made to represent them. Now they must reluctantly find a way to get back into their bodies, a quest which takes them through the most wild, unexpected and fantastical journey imaginable.</p>\n" +
          "<p>It Takes Two further builds on Hazelight’s proven track record of making rich and engaging co-op experiences. While developing It Takes Two it has been the team’s number one priority to truly merge story and gameplay. Allowing both to influence each other guarantees a game that is as engaging to play as it is compelling to experience.</p>",
        metacritic: 88,
        metacritic_platforms: [
          [Object],
          [Object],
          [Object],
          [Object],
          [Object],
        ],
        released: "2021-03-26",
        tba: false,
        updated: "2023-04-20T01:29:14",
        background_image:
          "https://media.rawg.io/media/games/d47/d479582ed0a46496ad34f65c7099d7e5.jpg",
        background_image_additional:
          "https://media.rawg.io/media/screenshots/0da/0da98b6c57676f2f16cb6bf8818c8642.jpg",
        website: "https://hazelight.se/games/it-takes-two/",
        rating: 4.54,
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
        platforms: [[Object], [Object], [Object], [Object], [Object], [Object]],
        stores: [[Object], [Object], [Object], [Object]],
        developers: [[Object]],
        genres: [[Object], [Object], [Object]],
        tags: [
          [Object],
          [Object],
          [Object],
          [Object],
          [Object],
          [Object],
          [Object],
          [Object],
          [Object],
          [Object],
          [Object],
          [Object],
          [Object],
          [Object],
          [Object],
          [Object],
          [Object],
          [Object],
          [Object],
          [Object],
          [Object],
          [Object],
          [Object],
          [Object],
          [Object],
          [Object],
          [Object],
          [Object],
          [Object],
          [Object],
          [Object],
          [Object],
          [Object],
          [Object],
          [Object],
          [Object],
          [Object],
          [Object],
        ],
        publishers: [[Object]],
        esrb_rating: { id: 2, name: "Everyone 10+", slug: "everyone-10-plus" },
        clip: null,
        description_raw:
          "Bring your favorite co-op partner and together step into the shoes of May and Cody. As the couple is going through a divorce, through unknown means their minds are transported into two dolls which their daughter, Rose, made to represent them. Now they must reluctantly find a way to get back into their bodies, a quest which takes them through the most wild, unexpected and fantastical journey imaginable.\r\n" +
          "\r\n" +
          "It Takes Two further builds on Hazelight’s proven track record of making rich and engaging co-op experiences. While developing It Takes Two it has been the team’s number one priority to truly merge story and gameplay. Allowing both to influence each other guarantees a game that is as engaging to play as it is compelling to experience.",
      });
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

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Game Modal"
      >
        <div className="grid grid-cols-2">
          <div>
            <h1 className="text-5xl h-36">{gameDetails.name}</h1>
            <a href={gameDetails.website} target="_blank">
              Link to Game Site
            </a>
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
                      className="game-modal-image pt-5 pr-5"
                      src={ss.image}
                    ></img>
                  );
                })}
            </Carousel>
          </div>
          <div className="flex flex-col mt-5 justify-between">
            <p>{gameDetails.description_raw}</p>
            <p>Score: {gameDetails.metacritic}</p>
            <p>Average Playtime: {gameDetails.playtime} hours</p>
            <p>
              Rating: {gameDetails.esrb_rating && gameDetails.esrb_rating.name}
            </p>
            {/* <div className='flex'>Developers: {gameDetails.developers && gameDetails.developers.map(developer => {return(<p className='ml-2'>{developer.name}</p>)})}</div>
            <div className='flex'>Genres: {gameDetails.genres && gameDetails.genres.map(genre => {return(<p className='ml-2'>{genre.name}</p>)})}</div> */}
            <button className="btn">Add to Wishlist</button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default GameModal;
