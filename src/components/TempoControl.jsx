import React, { useContext } from 'react';
import StateContext from '../context';
import { ControlButton, Icon } from '../styles/Buttons';
import { ControlDiv } from '../styles/ControlDivs';

const TempoControl = () => {
  const [value, dispatch] = useContext(StateContext);

  const tempoHandler = (e, num) => {
    e.preventDefault();
    dispatch({
      type: e.target.value,
      tempo: value.tempo + num <= 0 ? 0.1 : value.tempo + num,
    });
  };
  return (
    <ControlDiv>

      <ControlButton type="submit" value="ACTION_TEMPO_DOWN" onClick={(e) => tempoHandler(e, 0.1)}><i className="fas fa-minus" /></ControlButton>
      <Icon className="far fa-clock" />
      <ControlButton type="submit" value="ACTION_TEMPO_UP" onClick={(e) => tempoHandler(e, -0.1)}><i className="fas fa-plus" /></ControlButton>
    </ControlDiv>
  );
};


export default TempoControl;
