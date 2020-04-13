import React, { useContext } from 'react';
import StateContext from '../context';


const TempoControl = () => {
  const [value, dispatch] = useContext(StateContext);

  const tempoHandler = (e, num) => {
    e.preventDefault();
    dispatch({
      type: e.target.value,
      tempo: value.tempo + num <= 0 ? 0.1 : value.tempo + num,
    });
  };
  console.log('current tempo is: ', value.tempo);
  return (
    <div>
      <p>TEMPO</p>
      <button type="submit" value="ACTION_TEMPO_DOWN" onClick={(e) => tempoHandler(e, 0.1)}>DOWN</button>
      <button type="submit" value="ACTION_TEMPO_UP" onClick={(e) => tempoHandler(e, -0.1)}>UP</button>
    </div>
  );
};


export default TempoControl;
