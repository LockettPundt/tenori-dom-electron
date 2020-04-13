import React, { useContext, useEffect, useState } from 'react';
import StateContext from '../context';

const TestTimer = () => {
  const [value, dispatch] = useContext(StateContext);
  const [tempo, setTempo] = useState(value.tempo);

  useEffect(() => {
    const timer = setInterval(() => {
      if (value.play) {
        dispatch({
          type: 'ACTION_CHANGE_STEP',
          currentStep: value.currentStep === 7 ? value.currentStep -= 6 : value.currentStep += 1,
        });
      }
      // console.log('step is:', value.currentStep);
    }, value.tempo * 1000);
    return () => clearInterval(timer);
  }, [value.play, value.tempo]);


  // console.log('the step below the useEffect is:', value.currentStep);
  const playHandler = (e) => {
    e.preventDefault();
    // console.log('Clicked Play', !value.play);
    dispatch({
      type: 'ACTION_TOGGLE_PLAY',
      play: !value.play,
    });
    // console.log('Clicked Play', !value.play);
  };

  const stop = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ACTION_STOP',
      currentStep: 1,
      play: !value.play,
    });
  };

  return (
    <>
      <p>
        The current step is
        {' '}
        {value.currentStep}
      </p>
      <button type="submit" onClick={(e) => playHandler(e)}>{value.play ? 'Pause' : 'Play'}</button>
      <button type="submit" onClick={(e) => stop(e)}>STOP</button>
    </>
  );
};


export default TestTimer;
