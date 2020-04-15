/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  render, fireEvent, cleanup, getAllByText,
} from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from '../App';

it('render the <App /> without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('Renders title', () => {
  const { getByText } = render(<App />);
  expect(getByText('TENORI-DOM')).toBeInTheDocument();
});
