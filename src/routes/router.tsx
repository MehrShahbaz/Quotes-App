import { createBrowserRouter } from 'react-router-dom';

import Authors from 'components/Authors/AuthorTable/Authors';
import Quotes from 'components/Quotes/QuotesTable/Quotes';
import ErrorPage from 'components/shared/ErrorPage';

import { urls } from './urls';

export const router = createBrowserRouter([
  {
    path: urls.home,
    element: <Quotes />,
    errorElement: <ErrorPage />,
  },
  {
    path: urls.quotes,
    element: <Quotes />,
  },
  {
    path: urls.author,
    element: <Authors />,
  },
]);
