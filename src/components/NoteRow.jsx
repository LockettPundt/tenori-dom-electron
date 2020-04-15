import React from 'react';
import PropTypes from 'prop-types';
import SingleNote from './SingleNote';
import { Row } from '../styles/ControlDivs';


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

NoteRow.propTypes = {
  note: PropTypes.string.isRequired,
  freq: PropTypes.number.isRequired,
};

export default NoteRow;
