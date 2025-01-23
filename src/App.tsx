import Loader from 'components/shared/Loader';

import HomePage from './screens/Home';

const App = (): React.ReactElement => (
  <>
    <Loader />
    <HomePage />
  </>
);

export default App;
