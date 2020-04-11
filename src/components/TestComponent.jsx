/* eslint-disable no-loop-func */
import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
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
  const [currentStep, setCurrentStep] = useState(1);
  const timer = () => (currentStep === 7 ? currentStep(1) : setCurrentStep(currentStep + 1));


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
    const gainNode = audioContext.createGain();


    // const reverb = async () => {
    //   const convolver = audioContext.createConvolver();
    //   const osc = audioContext.createOscillator();
    //   osc.frequency.value = freq;
    //   convolver.buffer = audioContext.decodeAudioData(osc);
    //   return convolver;
    // };

    // const verb = reverb();
    oscillator.connect(gainNode);
    oscillator.type = 'triangle';
    oscillator.frequency.value = freq;
    // oscillator.connect(verb);
    gainNode.connect(audioContext.destination);
    if (!status) {
      oscillator.start();
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 4);
      oscillator.stop(now + 5);
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
