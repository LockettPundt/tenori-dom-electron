/* eslint-disable react/jsx-filename-extension */
import React, { useReducer } from 'react';
import { StateProvider } from './context';
import './App.css';
import TestComponent from './components/TestComponent';


const App = () => {
  const initialState = {
    a1: {
      status: false,
      paused: true,
    },
    a2: {
      status: false,
      paused: true,
    },
    a3: {
      status: false,
      paused: true,
    },
    a4: {
      status: false,
      paused: true,
    },
  };


  const reducer = (state, action) => {
    const { status, id } = action;
    switch (action.type) {
      case 'ACTION_TOGGLE_NOTE':
        return {
          ...state,
          [id]: {
            status,
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
        <TestComponent id="a1" freq={261.63} />
        <TestComponent id="a2" freq={293.66} />
        <TestComponent id="a3" freq={349.23} />
        <TestComponent id="a4" freq={493.88} />
      </StateProvider>
    </div>
  );
};

export default App;
