/* eslint-disable no-loop-func */
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
  // console.log(props);
  const { id, freq, step } = props;
  const [status, setStatus] = useState(value[id].status);
  // const [currentStep, setCurrentStep] = useState(value.currentStep);


  useEffect(() => {
    console.log('the current step is', value.currentStep, 'the component step is: ', step);

    if (status && step === value.currentStep && value.play) {
      const audioContext = new AudioContext();
      const now = audioContext.currentTime;

      const oscillator = audioContext.createOscillator();
      oscillator.type = 'triangle';
      oscillator.frequency.value = freq;
      const gainNode = audioContext.createGain();

      const compressor = audioContext.createDynamicsCompressor();
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + value.release);

      oscillator.connect(gainNode);
      gainNode.connect(compressor);
      console.log('triggered');
      oscillator.start();
      compressor.connect(audioContext.destination);
      oscillator.stop(now + value.release);
    }
  }, [value.currentStep]);

  const clickHandler = (e) => {
    e.preventDefault();
    setStatus(!status);
    // console.log('passing the dispatch this value: ', !status);
    dispatch({
      type: 'ACTION_TOGGLE_NOTE',
      status,
      id,
    });
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
