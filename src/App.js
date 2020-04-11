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
          <TestComponent id="c2" freq={65.41} />
          <TestComponent id="d2" freq={73.42} />
          <TestComponent id="e2" freq={82.41} />
          <TestComponent id="f2" freq={87.31} />
          <TestComponent id="g2" freq={98.00} />
          <TestComponent id="a2" freq={110.00} />
          <TestComponent id="b2" freq={123.47} />
        </div>
        <div>
          <TestComponent id="c3" freq={130.81} />
          <TestComponent id="d3" freq={146.83} />
          <TestComponent id="e3" freq={164.81} />
          <TestComponent id="f3" freq={174.61} />
          <TestComponent id="g3" freq={196.00} />
          <TestComponent id="a3" freq={220.00} />
          <TestComponent id="b3" freq={246.94} />
        </div>
      </StateProvider>
    </div>
  );
};

export default App;
