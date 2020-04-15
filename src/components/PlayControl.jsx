import React, { useContext } from 'react';
import StateContext from '../context';
import {
  PlayIcon, StopIcon, PlayButton,
} from '../styles/Buttons';
import { PlayDiv } from '../styles/ControlDivs';

const PlayControl = () => {
  const [value, dispatch] = useContext(StateContext);

  const playHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ACTION_TOGGLE_PLAY',
      play: !value.play,
    });
  };

  const stop = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ACTION_STOP',
      currentStep: 1,
      play: value.play ? !value.play : value.play,
    });
  };

  return (
    <PlayDiv>
      <PlayButton onClick={(e) => playHandler(e)}>{value.play ? <i className="fas fa-pause" /> : <PlayIcon className="fas fa-play" />}</PlayButton>
      <PlayButton onClick={(e) => stop(e)}><StopIcon className="fas fa-stop" /></PlayButton>
    </PlayDiv>
  );
};


export default PlayControl;
