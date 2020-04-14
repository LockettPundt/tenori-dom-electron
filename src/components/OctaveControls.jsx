import React, { useContext } from 'react';
import StateContext from '../context';
import { ControlButton, Icon } from '../styles/Buttons';
import { ControlDiv } from '../styles/ControlDivs';

const OctaveControls = () => {
  const [value, dispatch] = useContext(StateContext);

  const octaveHandler = (e, num) => {
    e.preventDefault();
    dispatch({
      type: e.target.value,
      octave: value.octave + num === 0 ? 1 : value.octave + num,
    });
  };

  return (
    <ControlDiv>


      <ControlButton type="submit" value="ACTION_OCTAVE_DOWN" onClick={(e) => octaveHandler(e, -1)}><i className="fas fa-minus" /></ControlButton>
      <Icon className="fas fa-music" />
      <ControlButton type="submit" value="ACTION_OCTAVE_UP" onClick={(e) => octaveHandler(e, 1)}><i className="fas fa-plus" /></ControlButton>


    </ControlDiv>
  );
};


export default OctaveControls;
