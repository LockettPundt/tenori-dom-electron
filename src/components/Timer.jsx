import React, { useContext, useEffect, useState } from 'react';
import StateContext from '../context';


const Timer = () => {
  const [value, dispatch] = useContext(StateContext);
  const [tempo, setTempo] = useState(value.tempo);


  useEffect(() => setTempo(value.tempo), [value.tempo]);
  useEffect(() => {
    const timer = setInterval(() => {
      if (value.play) {
        dispatch({
          type: 'ACTION_CHANGE_STEP',
          currentStep: value.currentStep === 7 ? value.currentStep -= 6 : value.currentStep += 1,
        });
      }
    }, tempo * 1000);
    return () => clearInterval(timer);
  }, [value.play, tempo]); // maybe the second argument is currentStep.


  return (
    <div>
      <p>{value.currentStep}</p>
    </div>
  );
};


export default Timer;
