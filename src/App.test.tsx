import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders learn react link', () => {
  console.log('oi')
  const { getByText } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const linkElement = getByText(/Welcome to Razzle/i);
  expect(linkElement).toBeInTheDocument();
});
