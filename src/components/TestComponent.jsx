import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import StateContext from '../context';


const ButtonOn = styled.button`
  background-color: green;
  color: white;
`;

const ButtonOff = styled.button`
  background-color: red;
  color: white;
`;


const TestComponent = (props) => {
  const [value, dispatch] = useContext(StateContext);

  const { id, freq } = props;
  const [status, setStatus] = useState(value[id].status);
  // const [selected, setSelected] = useState(false);

  // console.log('this is the value from test component.', value[id].status);
  // console.log('this is the status in a state hook', status);


  const clickHandler = (e) => {
    e.preventDefault();
    setStatus(!status);
    console.log('passing the dispatch this value: ', !status);
    dispatch({
      type: 'ACTION_TOGGLE_NOTE',
      status,
      id,
    });
    const audioContext = new AudioContext();
    const now = audioContext.currentTime;
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'triangle';
    oscillator.frequency.value = freq;
    oscillator.connect(audioContext.destination);
    oscillator.connect(audioContext.destination);
    if (!status) {
      oscillator.start();
      oscillator.stop(now + 1);
    }
    console.log(value);
  };
  const on = <ButtonOn type="submit" value="on" onClick={(e) => clickHandler(e)}>ON</ButtonOn>;

  const off = (
    <ButtonOff type="submit" value="off" onClick={(e) => clickHandler(e)}>
      OFF
    </ButtonOff>
  );

  const toggle = status ? on : off;
  return (
    <>
      {toggle}
    </>
  );
};


export default TestComponent;
