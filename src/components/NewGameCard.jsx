import React, {useState} from 'react';

const NewGameCard = ({game}) => {

  const [ mainImage, setMainImage ] = useState(game.background_image);


  return (
    <div className='new-game-card grid grid-cols-3'>
      <img className='col-span-2 new-game-image' src={mainImage}></img>
      <div className='place-self-start ml-5'>
        <h1 className='text-4xl font-bold'>{game.name}</h1>
        {game.genres.map(genre => {
          return (<p className='m-1 pl-2 bg-slate-700 text-white'>{genre.name}</p>)
        })}
        <div className='grid grid-cols-2 grid-rows-2 gap-2 mt-2'>
          {game.short_screenshots.slice(1).map(ss => {
            return (<div onMouseEnter={() => {setMainImage(ss.image)}} onMouseLeave={() => {setMainImage(game.background_image)}}><img className=' w-40 h-24 object-cover object-center' src={ss.image}></img></div>)
          })}
        </div>
      </div>
    </div>
  )
}

export default NewGameCard;