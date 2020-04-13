import React, { useContext } from 'react';
import StateContext from '../context';

const OctaveControls = () => {
  const [value, dispatch] = useContext(StateContext);

  const octaveHandler = (e, num) => {
    e.preventDefault();
    dispatch({
      type: e.target.value,
      octave: value.octave + num === 0 ? 1 : value.octave + num,
    });
  };
  // console.log(value.octave);

  return (
    <>
      <p>OCTAVE</p>
      <div>
        <button type="submit" value="ACTION_OCTAVE_DOWN" onClick={(e) => octaveHandler(e, -1)}>octave DOWN</button>
        <button type="submit" value="ACTION_OCTAVE_UP" onClick={(e) => octaveHandler(e, 1)}>octave UP</button>
      </div>

    </>
  );
};


export default OctaveControls;
