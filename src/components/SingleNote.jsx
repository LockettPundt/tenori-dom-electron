/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from 'react';
import StateContext from '../context';
import {
  StopCircle, PlayCircle, ButtonOn, ButtonOff,
} from '../styles/Buttons';


const SingleNote = ({
  id, note, freq,
}) => {
  const [value, dispatch] = useContext(StateContext);

  const waves = [
    'triangle',
    'sine',
    'square',
    'sawtooth',
  ];
  const [status, setStatus] = useState(value[note][id].status);
  useEffect(() => {
    const oscPlay = async () => {
      const audioContext = new AudioContext();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      const compressor = audioContext.createDynamicsCompressor();
      const now = audioContext.currentTime;
      oscillator.type = waves[value.wave];
      oscillator.frequency.value = freq * value.octave;
      compressor.threshold.setValueAtTime(-50, audioContext.currentTime);
      compressor.knee.setValueAtTime(40, audioContext.currentTime);
      compressor.ratio.setValueAtTime(12, audioContext.currentTime);
      compressor.attack.setValueAtTime(0, audioContext.currentTime);
      compressor.release.setValueAtTime(0.25, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.00001, now + value.release);
      gainNode.gain.value = value.volume;
      oscillator.connect(gainNode)
        .connect(compressor)
        .connect(audioContext.destination);
      oscillator.start(now);
      oscillator.stop(now + value.release);
      setTimeout(() => {
        audioContext.close();
      }, now + value.release * 1000);
    };
    if (status && (id === value.currentStep) && value.play) {
      oscPlay();
    }
  }, [value.currentStep]);


  const clickHandler = (e) => {
    e.preventDefault();
    setStatus(!status);
    dispatch({
      type: 'ACTION_TOGGLE_NOTE',
      status,
    });
  };
  const on = (
    <ButtonOn className="note" type="submit" value="on" onClick={(e) => clickHandler(e)}>
      <PlayCircle className="fas fa-circle" currentStep={value.currentStep} step={id} play={value.play} />
    </ButtonOn>
  );

  const off = (
    <ButtonOff className="note" currentStep={value.currentStep} step={id} play={value.play} type="submit" value="off" onClick={(e) => clickHandler(e)}>
      <StopCircle className="fas fa-circle" currentStep={value.currentStep} step={id} play={value.play} />
    </ButtonOff>
  );

  const button = status ? on : off;

  return (
    <>
      { button }
    </>
  );
};


export default SingleNote;
