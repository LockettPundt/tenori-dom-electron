import React, { useContext } from 'react';
import StateContext from '../context';
import { ControlButton, Icon } from '../styles/Buttons';
import { ControlDiv } from '../styles/ControlDivs';

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
    <ControlDiv>
      <ControlButton type="submit" onClick={(e) => volumeHandler(e, -0.1)}><i className="fas fa-minus" /></ControlButton>
      <Icon className="fas fa-volume-up" />
      <ControlButton type="submit" onClick={(e) => volumeHandler(e, 0.1)}><i className="fas fa-plus" /></ControlButton>
    </ControlDiv>
  );
};

export default VolumeControl;
