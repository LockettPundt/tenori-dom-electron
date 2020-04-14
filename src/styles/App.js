import styled from 'styled-components';

export const TestDiv = styled.div`
  background-color: green;

`;
export const AppWrap = styled.div`
  width: 60%;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 0.2rem;
  padding: 0.1rem 1rem 1rem 1rem;;
  height: auto;
  margin: 1rem auto;
  @media (max-width: 1268px) {
    width: 75vw;
  }
  @media (max-width: 720px) {
    width: 85%;
  }
  @media (max-width: 600px) {
    width: 100vw;
  }


`;

export const Title = styled.h1`
  font-family: "Apercu Pro";
  font-size: 3vw;
`;


export const PlayWrap = styled.div`
  display: flex;
  width: 100%;
  
  .title  {
    align-self: flex-end;
    width: 50%;
    padding: 0 1rem;
  }
  .timerAndPlay {
    display: flex;
    width: 50%;
    align-items: baseline;
    text-align: center;
    flex-direction: row-reverse;
    padding: 0 1rem;
  }
  
`;

export const NoteGrid = styled.div`
  width: 100%;
  height: auto;
`;

export const ControlWrap = styled.div`
  display: flex;
  width : 50%;
  justify-content: center;
  margin: 1rem auto;
  max-width: 50%;
`;

export const TenoriBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`;
