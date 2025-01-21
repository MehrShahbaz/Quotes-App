import { createBrowserRouter } from 'react-router-dom';

import Quotes from 'components/Quote/Quotes';
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
]);
