import { render, screen } from '@testing-library/react';

import Quotes from 'components/Quotes/Quotes';

test('Renders Quotes COmponent', () => {
  render(<Quotes />);
  const headingElement = screen.getByText(/Quotes/i);

  expect(headingElement).toBeInTheDocument();
});
