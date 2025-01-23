import ReactDOM from 'react-dom/client';
import { ReactNotifications } from 'react-notifications-component';
import { Provider } from 'react-redux';
import store from 'reducer/store/store';

import RouterConfig from 'routes/RouterConfig';

import 'react-notifications-component/dist/theme.css';
// import reportWebVitals from "./reportWebVitals";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <ReactNotifications />
    <RouterConfig />
  </Provider>
);
