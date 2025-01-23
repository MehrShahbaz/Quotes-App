import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import store from 'reducer/store/store';

import Authors from 'components/Authors/Authors';
import { urls } from 'routes/urls';
import { authorURL } from 'services/urls';

const renderComponent = (): void => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Authors />
      </BrowserRouter>
    </Provider>
  );
};
const server = setupServer(
  http.get(authorURL.getAllAuthors(1), () =>
    HttpResponse.json({
      count: 10,
      totalCount: 100,
      page: 1,
      totalPages: 10,
      lastItemIndex: 10,
      results: [
        { _id: '1', name: 'Author 1', description: 'Author 1 description', bio: 'Author 1 bio', link: 'link1' },
        { _id: '2', name: 'Author 2', description: 'Author 2 description', bio: 'Author 2 bio', link: 'link2' },
      ],
    })
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// Test Cases
test('Renders Authors Component', () => {
  renderComponent();
  const headingElement = screen.getByText(/Authors/i);

  expect(headingElement).toBeInTheDocument();
});

test('Check Author Table Headers', () => {
  renderComponent();

  const nameHeader = screen.getByText(/Name/i);

  expect(nameHeader).toBeInTheDocument();

  const descriptionHeader = screen.getByText(/Description/i);

  expect(descriptionHeader).toBeInTheDocument();

  const bioHeader = screen.getByText(/Bio/i);

  expect(bioHeader).toBeInTheDocument();

  const linkHeader = screen.getByText(/Link/i);

  expect(linkHeader).toBeInTheDocument();
});

test('Check Authors Table Rows Rendered', async () => {
  renderComponent();

  const firstAuthor = await screen.findByText(/Author 1/i);
  const secondAuthor = await screen.findByText(/Author 2/i);

  expect(firstAuthor).toBeInTheDocument();
  expect(secondAuthor).toBeInTheDocument();
});

test('Check Pagination Buttons', async () => {
  renderComponent();

  const prevButton = screen.getByText(/Previous/i);
  const nextButton = screen.getByText(/Next/i);

  expect(prevButton).toBeInTheDocument();
  expect(nextButton).toBeInTheDocument();

  fireEvent.click(nextButton);
  const newAuthors = await screen.findByText(/Author 1/i);

  expect(newAuthors).toBeInTheDocument();
});

test('Check Quotes Link Navigation', () => {
  renderComponent();

  const quotesLink = screen.getByText(/Quotes/i);

  expect(quotesLink).toBeInTheDocument();
  expect(quotesLink).toHaveAttribute('href', urls.quotes);
});
