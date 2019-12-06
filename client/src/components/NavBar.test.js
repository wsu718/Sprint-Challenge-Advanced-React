import React from 'react';
import { render } from '@testing-library/react';
// import App from './App';
import NavBar from './NavBar';

test('NavBar renders', () => {
    render(<NavBar />);
});

test('Toggle renders', () => {
    const { getByTestId } = render(<NavBar />);
    getByTestId('toggle');

});