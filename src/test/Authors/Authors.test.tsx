import { ReactNotifications } from 'react-notifications-component';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { server } from 'mocks/server';
import store from 'reducer/store/store';

import Authors from 'components/Authors/AuthorTable/Authors';
import { urls } from 'routes/urls';

const renderComponent = (): void => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Authors />
        <ReactNotifications />
      </BrowserRouter>
    </Provider>
  );
};

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

  const serialNumber = screen.getByText(/Sr./i);

  expect(serialNumber).toBeInTheDocument();

  const nameHeader = screen.getByText(/Name/i);

  expect(nameHeader).toBeInTheDocument();

  const descriptionHeader = screen.getByText(/Description/i);

  expect(descriptionHeader).toBeInTheDocument();

  const quotesCount = screen.getByText(/Quotes Count/i);

  expect(quotesCount).toBeInTheDocument();
});

test('Check Authors Table Rows Rendered', async () => {
  renderComponent();

  const linkElement = await screen.findByTestId('author-link-0');

  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveTextContent('Author 1');
  expect(linkElement).toHaveAttribute('href', '/authors/author-1');

  const firstAuthor = await screen.findByText(/Author 1 description/i);

  expect(firstAuthor).toBeInTheDocument();

  const firstAuthorCount = await screen.findByTestId('author-count-0');

  expect(firstAuthorCount).toBeInTheDocument();
  expect(firstAuthorCount).toHaveTextContent('10');
});

test('Check Pagination Buttons on First page', async () => {
  renderComponent();

  const prevButton = screen.getByText(/Previous/i);
  const nextButton = screen.getByText(/Next/i);

  expect(prevButton).toBeInTheDocument();
  expect(prevButton).toBeDisabled();

  expect(nextButton).toBeInTheDocument();
  expect(nextButton).toBeEnabled();
});

test('Check Pagination Next Button', async () => {
  renderComponent();

  const prevButton = screen.getByText(/Previous/i);
  const nextButton = screen.getByText(/Next/i);

  fireEvent.click(nextButton);

  expect(prevButton).toBeInTheDocument();
  expect(prevButton).toBeEnabled();

  expect(nextButton).toBeInTheDocument();
  expect(nextButton).toBeEnabled();
});

test('Check Pagination Previous Button', async () => {
  renderComponent();

  const prevButton = screen.getByText(/Previous/i);
  const nextButton = screen.getByText(/Next/i);

  fireEvent.click(nextButton);
  await fireEvent.click(prevButton);

  expect(prevButton).toBeInTheDocument();
});

test('Check Quotes Link Navigation', () => {
  renderComponent();

  const quotesLink = screen.getByRole('link');

  expect(quotesLink).toBeInTheDocument();
  expect(quotesLink).toHaveAttribute('href', urls.quotes);
});

test('Check out of bound Page Number in URL', () => {
  window.history.pushState({}, 'Test Page', '/authors?page=999');
  renderComponent();

  const prevButton = screen.getByText(/Previous/i);

  expect(prevButton).toBeDisabled();
});
