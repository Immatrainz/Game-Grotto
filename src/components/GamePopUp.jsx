import React from "react";

const GamePopUp = ({ selectedGame }) => {
  return (
    <div>
      <h2 className="pl-7 text-2xl h-12">{selectedGame.name}</h2>
      <div className="grid grid-cols-2 gap-3">
        <img
          className="pl-7 pb-5 h-60 w-90 object-cover object-center "
          src={selectedGame.background_image}
        ></img>
        <div className="">
          <p>Score: {selectedGame.rating}</p>
          <p>
            Rating: {selectedGame.esrb_rating && selectedGame.esrb_rating.name}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 pl-7 gap-1">
        {selectedGame.short_screenshots.slice(1).map((ss) => {
          return <img className="mb-2 w-60 h-24" src={ss.image}></img>;
        })}
      </div>
    </div>
  );
};

export default GamePopUp;
