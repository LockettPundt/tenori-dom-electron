/* eslint-disable react/jsx-filename-extension */
import React, { useReducer } from 'react';
import { StateProvider } from './context';
import './App.css';
import TestComponent from './components/TestComponent';
import initialState from './InitialState';
import TestTimer from './components/TestTimer';


const App = () => {
  const reducer = (state, action) => {
    const {
      status, id, play, currentStep,
    } = action;
    switch (action.type) {
      case 'ACTION_CHANGE_STEP':
        return {
          ...state,
          currentStep,
        };
      case 'ACTION_TOGGLE_PLAY':
        return {
          ...state,
          play,
        };
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
        <TestTimer />
        <div>
          <TestComponent id="c2" freq={65.41} step={1} />
          <TestComponent id="d2" freq={73.42} step={2} />
          <TestComponent id="e2" freq={82.41} step={3} />
          <TestComponent id="f2" freq={87.31} step={4} />
          <TestComponent id="g2" freq={98.00} step={5} />
          <TestComponent id="a2" freq={110.00} step={6} />
          <TestComponent id="b2" freq={123.47} step={7} />
        </div>

      </StateProvider>
    </div>
  );
};

export default App;
