/* eslint-disable react/jsx-filename-extension */
import React, { useReducer } from 'react';
import { StateProvider } from './context';
import './App.css';
import initialState from './InitialState';
import PlayControl from './components/PlayControl';
import OctaveControls from './components/OctaveControls';
import WaveControls from './components/WaveControls';
import TempoControl from './components/TempoControl';
import VolumeControl from './components/VolumeControl';
import ReleaseControl from './components/ReleaseControl';
import Timer from './components/Timer';
import NoteRow from './components/NoteRow';

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
          <NoteRow note="c2" freq={65.41} />
          <NoteRow note="d2" freq={73.42} />
          <NoteRow note="e2" freq={82.41} />
          <NoteRow note="f2" freq={87.31} />
          <NoteRow note="g2" freq={98.00} />
          <NoteRow note="a2" freq={110.00} />
          <NoteRow note="b2" freq={123.47} />
          <NoteRow note="c3" freq={130.81} />
          <NoteRow note="d3" freq={146.83} />
          <NoteRow note="e3" freq={164.81} />
          <NoteRow note="f3" freq={174.61} />
          <NoteRow note="g3" freq={196.00} />
          <NoteRow note="a3" freq={220.00} />
          <NoteRow note="b3" freq={246.94} />
          <NoteRow note="c4" freq={261.63} />
          <NoteRow note="d4" freq={293.66} />
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
