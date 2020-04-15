import React, { useContext } from 'react';
import StateContext from '../context';
import { ControlButton, Icon } from '../styles/Buttons';
import { ControlDiv } from '../styles/ControlDivs';

const TempoControl = () => {
  const [value, dispatch] = useContext(StateContext);

  const tempoHandler = (e, action, num) => {
    e.preventDefault();
    dispatch({
      type: action,
      tempo: value.tempo + num <= 0 ? 0.1 : value.tempo + num,
    });
  };
  return (
    <ControlDiv>
      <ControlButton className="btn" onClick={(e) => tempoHandler(e, 'ACTION_TEMPO_DOWN', 0.1)}><i className="fas fa-minus" /></ControlButton>
      <Icon className="far fa-clock" />
      <ControlButton className="btn" onClick={(e) => tempoHandler(e, 'ACTION_TEMPO_UP', -0.1)}><i className="fas fa-plus" /></ControlButton>
    </ControlDiv>
  );
};


export default TempoControl;
