import React, {useEffect} from 'react';
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
    }
  }, [clickedGame]);

  const closeModal = () => {
    setIsOpen(false);
    setClickedGame({});
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