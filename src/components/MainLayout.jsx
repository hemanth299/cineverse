import {Outlet} from 'react-router-dom';
import Navs from './Navs';
import AppTitle from './AppTitle';
function MainLayout() {
  return (
    <div>
      <AppTitle/>
      <Navs />
      <Outlet />
    </div>
  );
}
export default MainLayout;