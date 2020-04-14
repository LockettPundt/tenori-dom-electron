import styled from 'styled-components';


export const ControlButton = styled.button`
  border: none;
  background-color: none;
  font-size: 1rem;
  transition: ease-in-out, color 0.3s ease-in-out;
  &:hover {
    font-size: 1.5rem;
    color: rgb(255,69,0);
    outline: none;
  }

`;

export const NoteButton = styled.button`

`;

export const PlayButton = styled.button`
  border: none;
  background-color: none;
  font-size: 1.8rem;
  padding: 0 0.7rem;
  &:focus {
    outline: none;
  }
`;

export const PlayIcon = styled.i`
  color: rgb(125, 187, 145);
`;

export const StopIcon = styled.i`
  color: rgb(255,69,0);
`;

export const Icon = styled.i`
  margin:0 0.7rem;
`;

export const ButtonOn = styled.button`
  border: none;
  color: white;
  /* width: 1.3rem;
  height: 1.3rem; */
  &:focus {
    outline: none;
  }
`;

export const ButtonOff = styled.button`
  border: none;
  color: white;
  /* width: 1.3rem;
  height: 1.3rem; */
  &:focus {
    outline: none;
  }
`;

export const PlayCircle = styled.i`
  width: 100%;
  height: auto;
  color: rgb(125, 187, 145);
  color: ${(props) => (props.step === props.currentStep && props.play ? 'rgb(38, 38, 39)' : 'rgb(125, 187, 145)')};
  font-size: 1.2rem;
  
`;
export const StopCircle = styled.i`
  width: 100%;
  height: auto;
  color: rgb(255,69,0);
  font-size: 1.2rem;
  color: ${(props) => (props.step === props.currentStep && props.play ? 'rgb(125, 187, 145)' : 'rgb(255,69,0)')};
  &:focus {
    border: none;
  }


`;
