/* eslint-disable react/jsx-filename-extension */
import React, { useReducer } from 'react';
import { StateProvider } from './context';
import './App.css';

const App = () => {
  const initialState = {
    e1: {
      on: false,
    },
  };


  const reducer = (state, action) => {
    const { on, id } = action;
    switch (action.type) {
      case 'ACTION_TURN_OFF':
        return {
          [id]: {
            ...state,
            on,
          },
        };
      default:
        return state;
    }
  };

  return (
    <div className="App">
      <StateProvider value={useReducer(reducer, initialState)}>
        tenori-dom here we go!
      </StateProvider>
    </div>
  );
};

export default App;
