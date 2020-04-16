import styled from 'styled-components';


export const AppWrap = styled.div`
  width: 70vw;
  opacity: 0.96; /* not certain on this but it's kinda neat */
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 0.2rem;
  /* padding: 0.1rem 1rem 1rem 1rem; */
  height: auto;
  margin: 4rem auto;
  @media (max-width: 1268px) {
    width: 65vw;
  }
  @media (max-width: 850px) {
    width: 83vw;
  }
  @media (max-width: 675px) {
    width: 90vw;
  }
  @media (max-width: 625px) {
    width: 100vw;
  }
  @media (max-width: 560px) {
    
  }

`;

export const Title = styled.h1`
  font-family: "Apercu Pro";
  font-size: 3vw;
`;


export const PlayWrap = styled.div`
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
  padding: 0 1rem;
  margin: 1.3rem auto;
`;

export const TenoriBody = styled.div`
  display: flex;
  position:relative;
  flex-direction: column;
  width: 100%;
  padding: 0 1rem;
  height: auto;
`;
