/* eslint-disable react/jsx-filename-extension */
import React, { useReducer } from 'react';
import { StateProvider } from './context';
import './App.css';
import TestComponent from './components/TestComponent';
import initialState from './InitialState';
import PlayControl from './components/PlayControl';
import OctaveControls from './components/OctaveControls';
import WaveControls from './components/WaveControls';
import TempoControl from './components/TempoControl';
import VolumeControl from './components/VolumeControl';
import ReleaseControl from './components/ReleaseControl';
import Timer from './components/Timer';

const App = () => {
  const reducer = (state, action) => {
    const {
      status, id, play, currentStep, octave, wave, tempo, volume, release,
    } = action;
    switch (action.type) {
      case 'ACTION_CHANGE_RELEASE':
        return {
          ...state,
          release,
        };
      case 'ACTION_CHANGE_VOLUME':
        return {
          ...state,
          volume,
        };
      case 'ACTION_TEMPO_DOWN':
        return {
          ...state,
          tempo,
        };
      case 'ACTION_TEMPO_UP':
        return {
          ...state,
          tempo,
        };
      case 'ACTION_WAVE_NEXT':
        return {
          ...state,
          wave,
        };
      case 'ACTION_WAVE_PREVIOUS':
        return {
          ...state,
          wave,
        };
      case 'ACTION_OCTAVE_DOWN':
        return {
          ...state,
          octave,
        };
      case 'ACTION_OCTAVE_UP':
        return {
          ...state,
          octave,
        };
      case 'ACTION_STOP':
        return {
          ...state,
          currentStep,
          play,
        };
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
        <Timer />
        <PlayControl />
        <div>
          <TestComponent id="c2" freq={65.41} step={1} />
          <TestComponent id="d2" freq={73.42} step={2} />
          <TestComponent id="e2" freq={82.41} step={3} />
          <TestComponent id="f2" freq={87.31} step={4} />
          <TestComponent id="g2" freq={98.00} step={5} />
          <TestComponent id="a2" freq={110.00} step={6} />
          <TestComponent id="b2" freq={123.47} step={7} />
        </div>
        <OctaveControls />
        <WaveControls />
        <TempoControl />
        <VolumeControl />
        <ReleaseControl />
      </StateProvider>
    </div>
  );
};

export default App;
