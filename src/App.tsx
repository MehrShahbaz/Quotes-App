import CustomNavbar from 'components/Navbar/Navbar';
import Loader from 'components/shared/Loader';

import HomePage from './screens/Home';

const App = (): JSX.Element => (
  <div>
    <CustomNavbar />
    <Loader />
    <HomePage />
  </div>
);

export default App;
