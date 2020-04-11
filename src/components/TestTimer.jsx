import React, { useState, useContext, useEffect } from 'react';
import StateContext from '../context';

const TestTimer = () => {
  const [value, dispatch] = useContext(StateContext);
  // const [step, setStep] = useState(value.currentStep);

  useEffect(() => {
    const timer = setInterval(() => {
      if (value.play) {
        dispatch({
          type: 'ACTION_CHANGE_STEP',
          currentStep: value.currentStep === 7 ? value.currentStep -= 6 : value.currentStep += 1,
        });
      }
      console.log('step is:', value.currentStep);
    }, 1000);
    return () => clearInterval(timer);
  }, [value.play]);


  console.log('the step below the useEffect is:', value.currentStep);
  const clickHandler = (e) => {
    e.preventDefault();
    console.log('Clicked Play', !value.play);
    dispatch({
      type: 'ACTION_TOGGLE_PLAY',
      play: !value.play,
    });
    console.log('Clicked Play', !value.play);
  };

  return (
    <>
      <p>
        The current step is
        {' '}
        {value.currentStep}
      </p>
      <button type="submit" onClick={(e) => clickHandler(e)}>{value.play ? 'Stop' : 'Play'}</button>
    </>
  );
};


export default TestTimer;
