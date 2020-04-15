/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SingleNote from './SingleNote';

const Row = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  align-content: center;
  margin: 0.25rem auto;
  padding: 0.1rem;
`;


const NoteRow = (props) => {
  const {
    note, freq,
  } = props;
  const noteArray = `${note} `.repeat(15).split(' ');
  const notes = noteArray.map((item, index) => (
    <SingleNote
      key={`${note}-${index + 1}`}
      note={note}
      id={index + 1}
      freq={freq}
    />
  ));
  return (
    <Row>
      { notes }
    </Row>


  );
};


export default NoteRow;
