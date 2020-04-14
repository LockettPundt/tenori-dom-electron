import React, { useContext } from 'react';
import StateContext from '../context';
import {
  ControlButton, PlayIcon, StopIcon, PlayButton,
} from '../styles/Buttons';
import { ControlDiv } from '../styles/ControlDivs';

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
      play: !value.play,
    });
  };

  return (
    <ControlDiv>
      <PlayButton type="submit" onClick={(e) => playHandler(e)}>{value.play ? <PlayIcon className="fas fa-play" /> : <i className="fas fa-pause" />}</PlayButton>
      <PlayButton type="submit" onClick={(e) => stop(e)}><StopIcon className="fas fa-stop" /></PlayButton>
    </ControlDiv>
  );
};


export default PlayControl;
