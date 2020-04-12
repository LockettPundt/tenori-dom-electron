import React, { useContext } from 'react';
import StateContext from '../context';

const WaveControls = () => {
  const [value, dispatch] = useContext(StateContext);

  const waveHandler = (e, num) => {
    if (value.wave + num > 3) {
      return;
    }
    dispatch({
      type: e.target.value,
      wave: value.wave + num < 0 ? 0 : value.wave + num,
    });
  };
  console.log('this si the wave:', value.wave);
  return (
    <>
      <p>WAVESHAPE</p>
      <button type="submit" value="ACTION_WAVE_PREVIOUS" onClick={(e) => waveHandler(e, -1)}>prev wave</button>
      <button type="submit" value="ACTION_WAVE_NEXT" onClick={(e) => waveHandler(e, 1)}>next wave</button>
    </>
  );
};

export default WaveControls;
