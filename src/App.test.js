import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders app without crashing', () => {
  const { getByText } = render(<App />);
  const title = getByText(/SEARCH's GIFFS/i);
  expect(title).toBeInTheDocument();
});
