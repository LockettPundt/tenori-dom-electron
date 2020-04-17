import styled from 'styled-components';


export const Modal = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;

`;

export const Link = styled.a`
  text-decoration: none;
  color: rgb(255,69,0);
`;

export const Instructions = styled.div`
  font-family: 'apercuregular', 'Helvetica Neue';
  margin: 20vh auto;
  border-radius: 4px;
  padding: 16px;
  width: 640px;
  height: auto;
  background-color: black;
  color: white;
  position: relative;
  z-index: 10000;

`;

export const CloseModal = styled.a`
  background-color: black;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: 'apercuregular', 'Helvetica Neue';
  position: absolute;
  top: 16px;
  right: 24px;
  z-index: 109000;

`;
