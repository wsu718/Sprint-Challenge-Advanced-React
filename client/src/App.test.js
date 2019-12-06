import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import PlayerList from './components/PlayerList'

test('App renders without crashing', () => {
  render(<App />);
});

test('Copy in app renders', () => {
  const { getByText } = render(<App />);
  getByText(/soccer star searches/i);
});



