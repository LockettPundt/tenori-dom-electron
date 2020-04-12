import React, { useContext, useEffect } from 'react';
import StateContext from '../context';

const Controls = () => {
  const [value, dispatch] = useContext(StateContext);

  return (
    <>
      <p>Here are the controls...</p>
    </>
  );
};


export default Controls;
