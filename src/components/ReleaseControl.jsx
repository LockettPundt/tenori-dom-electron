import React, { useContext } from 'react';
import StateContext from '../context';

const ReleaseControl = () => {
  const [value, dispatch] = useContext(StateContext);

  const releaseHandler = (e, num) => {
    e.preventDefault();
    dispatch({
      type: 'ACTION_CHANGE_RELEASE',
      release: value.release + num <= 0 ? 0 : value.release + num,
    });
  };

  return (
    <div>
      <p>RELEASE</p>
      <button type="submit" onClick={(e) => releaseHandler(e, -0.1)}>-</button>
      <button type="submit" onClick={(e) => releaseHandler(e, 0.1)}>+</button>
    </div>
  );
};

export default ReleaseControl;
