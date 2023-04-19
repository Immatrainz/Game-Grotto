import React, {useState, useEffect} from 'react';
const axios = require('axios');
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXbox, faPlaystation, faApple, faAndroid, faAppStore } from '@fortawesome/free-brands-svg-icons';

const GenreSearch = () => {

  const [genre, setGenre] = useState('Action');
  const [ genredList, setGenredList] = useState([]);

  const platforms = {
    Xbox: <FontAwesomeIcon icon={faXbox} size='sm'/>,
    PlayStation: <FontAwesomeIcon icon={faPlaystation} size='sm'/>,
    iOS: <FontAwesomeIcon icon={faAppStore} size='sm'/>,
    'Apple Macintosh': <FontAwesomeIcon icon={faApple} size='sm'/>,
    Android: <FontAwesomeIcon icon={faAndroid} size='sm'/>,
  };

  useEffect(() => {
    getByGenre();
  }, []);

  const getByGenre = () => {
    axios.get('/products/genre', {params: {genre: genre}})
    .then(res => {
      setGenredList(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }

  let genreList = genredList.map(game => {
    let gameImage = `${game.background_image}`;
    return (
      <li><a>
        <div className='flex flex-cols h-14 gap-x-4'>
          <img className='object-cover object-center h-12 w-20' src={gameImage}></img>
          <div>
            <p className='text-sm'>{game.name}</p>
            <div className='flex flex-cols gap-x-2'>
              {game.parent_platforms.map(platform => {
                return (<p className='text-xs'>{platforms[platform.platform.name] || platform.platform.name}</p>)
              })}
            </div>
            <div className='flex flex-cols gap-x-2'>
              {game.tags.slice(1, 6).map(tag => {
                return (<p className='text-xs'>{tag.name}</p>)
              })}
            </div>
          </div>
        </div>
      </a></li>
    )
  })

  return (
    <div className='grid grid-cols-2 '>
      <div className='genre-list'>
        <div className="tabs ">
          <a className="tab tab-lifted tab-active">Action</a>
          <a className="tab tab-lifted ">Adventure</a>
          <a className="tab tab-lifted">Shooter</a>
        </div>
        <div>
          <ul className="menu">
            {genreList}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default GenreSearch;