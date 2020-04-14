import React, { useContext } from 'react';
import StateContext from '../context';
import { ControlButton, Icon } from '../styles/Buttons';
import { ControlDiv } from '../styles/ControlDivs';

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
  return (
    <ControlDiv>
      <ControlButton type="submit" value="ACTION_WAVE_PREVIOUS" onClick={(e) => waveHandler(e, -1)}><i className="fas fa-minus" /></ControlButton>
      <Icon className="fas fa-wave-square" />
      <ControlButton type="submit" value="ACTION_WAVE_NEXT" onClick={(e) => waveHandler(e, 1)}><i className="fas fa-plus" /></ControlButton>
    </ControlDiv>
  );
};

export default WaveControls;
