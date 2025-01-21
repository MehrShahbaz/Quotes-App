import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from 'reducer/store/store'; // Path to your real Redux store

import Authors from 'components/Authors/Authors';

test('Renders Quotes Component', () => {
  render(
    <Provider store={store}>
      <Authors />
    </Provider>
  );
  const headingElement = screen.getByText(/Authors/i);

  expect(headingElement).toBeInTheDocument();
});
