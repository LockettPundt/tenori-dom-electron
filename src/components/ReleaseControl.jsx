import React, { useContext } from 'react';
import StateContext from '../context';
import { ControlButton, Icon } from '../styles/Buttons';
import { ControlDiv } from '../styles/ControlDivs';

const ReleaseControl = () => {
  const [value, dispatch] = useContext(StateContext);

  const releaseHandler = (e, num) => {
    e.preventDefault();
    dispatch({
      type: 'ACTION_CHANGE_RELEASE',
      release: value.release + num <= 0 ? 0 : value.release + num,
    });
  };

  return (
    <ControlDiv>
      <ControlButton classname="btn" onClick={(e) => releaseHandler(e, -0.1)}><i className="fas fa-minus" /></ControlButton>
      <Icon className="fas fa-ruler" />
      <ControlButton className="btn" onClick={(e) => releaseHandler(e, 0.1)}><i className="fas fa-plus" /></ControlButton>
    </ControlDiv>
  );
};

export default ReleaseControl;
