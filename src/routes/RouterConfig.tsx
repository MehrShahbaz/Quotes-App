import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from 'screens/Home';

import Quotes from 'components/Quote/Quotes';
import ErrorPage from 'components/shared/ErrorPage';

import { urls } from './urls';

const RouterConfig = (): JSX.Element => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path={urls.home} element={<Quotes />} />
        {/* <Route path={`${urls.products}/:productId`} element={<ProductDetails />} /> */}
        <Route path={urls.quotes} element={<Quotes />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </Router>
);

export default RouterConfig;
