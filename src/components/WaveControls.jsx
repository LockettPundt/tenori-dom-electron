import React, { useContext } from 'react';
import StateContext from '../context';
import { ControlButton, Icon } from '../styles/Buttons';
import { ControlDiv } from '../styles/ControlDivs';

const WaveControls = () => {
  const [value, dispatch] = useContext(StateContext);

  const waveHandler = (e, action, num) => {
    if (value.wave + num > 3) {
      return;
    }
    dispatch({
      type: action,
      wave: value.wave + num < 0 ? 0 : value.wave + num,
    });
  };
  return (
    <ControlDiv>
      <ControlButton className="btn" onClick={(e) => waveHandler(e, 'ACTION_WAVE_PREVIOUS', -1)}><i className="fas fa-minus" /></ControlButton>
      <Icon className="fas fa-wave-square" />
      <ControlButton className="btn" onClick={(e) => waveHandler(e, 'ACTION_WAVE_NEXT', 1)}><i className="fas fa-plus" /></ControlButton>
    </ControlDiv>
  );
};

export default WaveControls;
