import React, { useContext } from 'react';
import StateContext from '../context';


const VolumeControl = () => {
  const [value, dispatch] = useContext(StateContext);

  const volumeHandler = (e, num) => {
    e.preventDefault();
    dispatch({
      type: 'ACTION_CHANGE_VOLUME',
      volume: value.volume + num <= 0 ? 0 : value.volume + num,
    });
  };
  return (
    <div>
      <p>VOLUME</p>
      <button type="submit" onClick={(e) => volumeHandler(e, -0.1)}>-</button>
      <button type="submit" onClick={(e) => volumeHandler(e, 0.1)}>+</button>
    </div>
  );
};

export default VolumeControl;
