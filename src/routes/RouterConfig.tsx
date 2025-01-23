import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from 'screens/Home';

import AuthorDetails from 'components/Authors/AuthorDetails/AuthorDetails';
import Authors from 'components/Authors/AuthorTable/Authors';
import Quotes from 'components/Quotes/Quotes';
import ErrorPage from 'components/shared/ErrorPage';

import { urls } from './urls';

const RouterConfig = (): React.ReactElement => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path={urls.home} element={<Quotes />} />
        <Route path={urls.quotes} element={<Quotes />} />
        <Route path={urls.author} element={<Authors />} />
        <Route path={`${urls.author}/:authorSlug`} element={<AuthorDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </Router>
);

export default RouterConfig;
