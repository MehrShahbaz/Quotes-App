import { Outlet } from 'react-router-dom';

const Layout = (): React.ReactElement => (
  <div>
    <div>
      <Outlet />
    </div>
  </div>
);

export default Layout;
