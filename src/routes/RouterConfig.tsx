import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from 'screens/Home';

import Authors from 'components/Authors/Authors';
import Quotes from 'components/Quotes/Quotes';
import ErrorPage from 'components/shared/ErrorPage';

import { urls } from './urls';

const RouterConfig = (): JSX.Element => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path={urls.home} element={<Quotes />} />
        {/* <Route path={`${urls.products}/:productId`} element={<ProductDetails />} /> */}
        <Route path={urls.quotes} element={<Quotes />} />
        <Route path={urls.author} element={<Authors />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </Router>
);

export default RouterConfig;
