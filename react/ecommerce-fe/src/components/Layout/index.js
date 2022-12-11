import { Link, Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import './style.css';
const Layout = () => {
  return (
    <div className='mainContainer'>
      <Header />
      <div className='containerRoutes'>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
