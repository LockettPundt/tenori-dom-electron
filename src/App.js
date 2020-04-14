/* eslint-disable react/jsx-filename-extension */
import React, { useReducer } from 'react';
import { StateProvider } from './context';
import initialState from './InitialState';
import PlayControl from './components/PlayControl';
import OctaveControls from './components/OctaveControls';
import WaveControls from './components/WaveControls';
import TempoControl from './components/TempoControl';
import VolumeControl from './components/VolumeControl';
import ReleaseControl from './components/ReleaseControl';
import Timer from './components/Timer';
import NoteRow from './components/NoteRow';
import Reducer from './reducers/Reducer';
import {
  AppWrap, PlayWrap, Title, ControlWrap, TenoriBody, TestDiv,
} from './styles/App';

const App = () => (

  <StateProvider value={useReducer(Reducer, initialState)}>
    <AppWrap>
      <PlayWrap>
        <Title className="title">TENORI-DOM</Title>
        <div className="timerAndPlay">
          <Timer className="timer" />
          <PlayControl />
        </div>
      </PlayWrap>

      <TenoriBody>
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
      </TenoriBody>
      <ControlWrap>
        <OctaveControls />
        <WaveControls />
        <TempoControl />
        <VolumeControl />
        <ReleaseControl />
      </ControlWrap>

    </AppWrap>
  </StateProvider>

);

export default App;
