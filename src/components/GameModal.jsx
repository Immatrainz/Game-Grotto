import React, {useEffect} from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const GameModal = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  // useEffect(() => {
  //   if (Object.keys(clickedGame).length > 0) {
  //     setIsOpen(true);
  //   }
  // }, [clickedGame]);

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Game Modal"
      >
        <div>I am a modal</div>
      </Modal>
      </>
  )
}

export default GameModal;