const Reducer = (state, action) => {
  const {
    status, id, play, currentStep, octave, wave, tempo, volume, release, modal,
  } = action;
  switch (action.type) {
    case 'ACTION_CLOSE_MODAL':
      return {
        ...state,
        modal,
      };
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

export default Reducer;
