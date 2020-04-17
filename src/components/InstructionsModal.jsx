/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from 'react';
import StateContext from '../context';
import {
  Modal, Instructions, CloseModal, Link,
} from '../styles/Modal';

const InstructionsModal = () => {
  const [value, dispatch] = useContext(StateContext);

  const clickHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ACTION_CLOSE_MODAL',
      modal: false,
    });
  };

  return (
    <Modal>
      <Instructions>
        <p>
          Welcome to Tenori-DOM, a Tenori-On inspired React Project! For more information
          about Tenori-On, go
          {' '}
          <Link href="https://en.wikipedia.org/wiki/Yamaha_Tenori-on" target="_blank" rel="noopener noreferrer">HERE.</Link>
          The instrument
          is played by pressing the buttons, which will turn green once activated, and pushing play!
          You can change the sound of the notes with the controls below. It's an exploratory instrument,
          so find your own way and have fun!
          {' '}
          <CloseModal onClick={(e) => clickHandler(e)}><i className="far fa-window-close" /></CloseModal>
        </p>

      </Instructions>
    </Modal>
  );
};

export default InstructionsModal;
