import styled from 'styled-components';


export const AppWrap = styled.div`
  width: 90vw;
  opacity: 0.96; /* not certain on this but it's kinda neat */
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 0.2rem;
  /* padding: 0.1rem 1rem 1rem 1rem; */
  height: auto;
  margin: 2.3rem auto;
`;

export const Title = styled.h1`
  font-size: 3vw;
  width: 25px;
`;


export const PlayWrap = styled.div`
  font-family: 'apercuregular', 'Helvetica Neue';
  display: flex;
  width: 100%;
  padding: 0 2rem;
  
  .title  {
    align-self: flex-end;
    width: 50%;
    /* padding: 0 2rem; */
  }
  .timerAndPlay {
    display: flex;
    width: 50%;
    align-items: baseline;
    text-align: center;
    flex-direction: row-reverse;
    /* padding: 0 2rem; */
  }
  @media (max-width: 1024px) {
    padding: 0 1rem;
  }
  
`;

export const NoteGrid = styled.div`
  width: 100%;
  height: auto;
  padding: 0 1rem;
`;

export const ControlWrap = styled.section`
  display: flex;
  width: 100%;
  padding: 1rem 1rem;
  margin: 1rem auto;
`;

export const TenoriBody = styled.div`
  display: flex;
  position:relative;
  flex-direction: column;
  width: 100%;
  padding: 0 1rem;
  height: auto;
`;
