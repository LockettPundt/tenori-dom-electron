import styled from 'styled-components';


export const AppWrap = styled.div`
  width: 55%;
  background-color: white;
  display: flex;
  flex-direction: column;
  /* padding: 0.1rem 1rem 1rem 1rem;; */
  height: 80%;
  margin:  20px auto;
  @media (max-width: 1268px) {
    width: 80%;
  }
  @media (max-width: 720px) {
    width: 85%;
  }
  @media (max-width: 600px) {
    width: 90%;
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
  max-width: 100%;
  height: auto;
  

`;

export const ControlWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  width : 100%;
`;

export const TenoriBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`;
