import React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import App from '../../App';

/* test('Home works as exepted', () => {
  const { getByText } = render(<App />);
  const title = getByText(/Most Popular/i);
  expect(title).toBeInTheDocument();
}); */

test('Get gifss links', async () => {
   const { container } = render(<App />)
   const gifLink = await waitForElement(() =>
      container.querySelector('.Gif-link')
   )
   expect(gifLink).toBeVisible();
})

/* test('searchForm could be used', async () => {
   render(<App />)

   const input = await screen.getByRole('textbox')

   fireEvent.change(input, {target: {value: 'Matrix'}})

   const title = await screen.findByText('Matrix')
   expect(title).toBeVisible()
}) */
