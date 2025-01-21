import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from 'reducer/store/store'; // Path to your real Redux store

import Quotes from 'components/Quotes/Quotes';

test('Renders Quotes Component', () => {
  render(
    <Provider store={store}>
      <Quotes />
    </Provider>
  );
  const headingElement = screen.getByText(/Quotes/i);

  expect(headingElement).toBeInTheDocument();
});
