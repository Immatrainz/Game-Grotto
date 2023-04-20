import React, {useEffect} from 'react';
const axios = require('axios');
import Modal from 'react-modal';
import GameContext from '../index.jsx';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '90%',
    height: '90%',
    transform: 'translate(-50%, -50%)',
  },
};

const GameModal = () => {
  const { clickedGame, setClickedGame } = React.useContext(GameContext);

  const [modalIsOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    if (Object.keys(clickedGame).length > 0) {
      setIsOpen(true);
      getGameDetails();
    }
  }, [clickedGame]);

  const closeModal = () => {
    setIsOpen(false);
    setClickedGame({});
  }

  let getGameDetails = () => {
    axios.get('/games/details', {params: {id: clickedGame.id}})
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Game Modal"
      >
        <h1>{clickedGame.name}</h1>
      </Modal>
    </>
  )
}

export default GameModal;