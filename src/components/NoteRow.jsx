/* eslint-disable max-len */
import React from 'react';
import SingleNote from './SingleNote';


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
    <div>
      { notes }
    </div>


  );
};


export default NoteRow;
