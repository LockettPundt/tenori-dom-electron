import React, { useContext } from 'react';
import StateContext from '../context';

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
    <div>
      <button type="submit" onClick={(e) => playHandler(e)}>{value.play ? 'Pause' : 'Play'}</button>
      <button type="submit" onClick={(e) => stop(e)}>STOP</button>
    </div>
  );
};


export default PlayControl;
