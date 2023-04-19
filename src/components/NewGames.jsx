import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import NewGameCard from './NewGameCard.jsx';
const axios = require('axios');

const NewGames = () => {

  const [newGames, setNewGames] = useState([]);

  useEffect(() => {
    getNewGames()
  }, []);

  let getNewGames = () => {
    axios.get('/games/new')
    .then(res => {
      //console.log(res.data);
      setNewGames(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }

  const newGamesList = newGames.map(game => {
    return (<NewGameCard game={game}/>)
  })


  return (<div className='ml-5 mt-5'>
    <p>LATEST UPDATES</p>
    <Carousel>
      {newGamesList}
    </Carousel>
  </div>)
}
export default NewGames;