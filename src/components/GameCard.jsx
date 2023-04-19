import React from 'react';

const GameCard = ({ game }) => {
  let gameImage = `${game.background_image}`;

    // {
  //   id: 5679,
  //   slug: 'the-elder-scrolls-v-skyrim',
  //   name: 'The Elder Scrolls V: Skyrim',
  //   released: '2011-11-11',
  //   tba: false,
  //   background_image: 'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
  //   rating: 4.42,
  //   rating_top: 5,
  //   ratings: [ [Object], [Object], [Object], [Object] ],
  //   ratings_count: 4304,
  //   reviews_text_count: 29,
  //   added: 14549,
  //   added_by_status: {
  //     yet: 464,
  //     owned: 8690,
  //     beaten: 3450,
  //     toplay: 368,
  //     dropped: 1209,
  //     playing: 368
  //   },
  //   metacritic: 94,
  //   playtime: 46,
  //   suggestions_count: 590,
  //   updated: '2023-04-17T20:51:34',
  //   user_game: null,
  //   reviews_count: 4347,
  //   saturated_color: '0f0f0f',
  //   dominant_color: '0f0f0f',
  //   platforms: [ [Object], [Object], [Object], [Object] ],
  //   parent_platforms: [ [Object], [Object], [Object], [Object] ],
  //   genres: [ [Object], [Object] ],
  //   stores: [ [Object], [Object], [Object], [Object] ],
  //   clip: null,
  //   tags: [
  //     [Object], [Object], [Object],
  //     [Object], [Object], [Object],
  //     [Object], [Object], [Object],
  //     [Object], [Object], [Object],
  //     [Object], [Object], [Object],
  //     [Object], [Object], [Object],
  //     [Object], [Object], [Object],
  //     [Object], [Object], [Object]
  //   ],
  //   esrb_rating: { id: 4, name: 'Mature', slug: 'mature' },
  //   short_screenshots: [
  //     [Object], [Object],
  //     [Object], [Object],
  //     [Object], [Object],
  //     [Object]
  //   ]
  // };

  return (
  <div className='top-game-card text-white'>
    <img className='object-cover object-center top-game-card-image' src={gameImage}></img>
    <div className='flex flex-col ml-2 mr-2 '>
      <p className='mt-2 font-bold'>{game.name}</p>
      <p>Rating: {game.rating}</p>
      <p>Metacritic Score: {game.metacritic}</p>
      {game.genres.map(genre => {
        return (<p className='m-1 pl-2 bg-slate-700'>{genre.name}</p>)
      })}
    </div>
  </div>
  )
}

export default GameCard;