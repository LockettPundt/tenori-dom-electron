import React, { useContext } from 'react';
import StateContext from '../context';
import { ControlButton, Icon } from '../styles/Buttons';
import { ControlDiv } from '../styles/ControlDivs';

const OctaveControls = () => {
  const [value, dispatch] = useContext(StateContext);

  const octaveHandler = (e, action, num) => {
    e.preventDefault();
    dispatch({
      type: action,
      octave: value.octave + num === 0 ? 1 : value.octave + num,
    });
  };

  return (
    <ControlDiv>
      <ControlButton className="btn" onClick={(e) => octaveHandler(e, 'ACTION_OCTAVE_DOWN', -1)}><i className="fas fa-minus" /></ControlButton>
      <Icon className="fas fa-music" />
      <ControlButton className="btn" onClick={(e) => octaveHandler(e, 'ACTION_OCTAVE_UP', 1)}><i className="fas fa-plus" /></ControlButton>
    </ControlDiv>
  );
};


export default OctaveControls;
