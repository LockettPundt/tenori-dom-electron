import React, { useContext, useEffect, useState } from 'react';
import StateContext from '../context';
import { Title } from '../styles/App';

const Timer = () => {
  const [value, dispatch] = useContext(StateContext);
  const [tempo, setTempo] = useState(value.tempo);


  useEffect(() => setTempo(value.tempo), [value.tempo]);
  useEffect(() => {
    const timer = setInterval(() => {
      if (value.play) {
        dispatch({
          type: 'ACTION_CHANGE_STEP',
          currentStep: value.currentStep === 16 ? value.currentStep -= 15 : value.currentStep += 1,
        });
      }
    }, tempo * 1000);
    return () => clearInterval(timer);
  }, [value.play]); // maybe the second argument is currentStep.


  return (
    <>
      <Title>{value.currentStep}</Title>
    </>
  );
};


export default Timer;
