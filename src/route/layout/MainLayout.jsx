import { Outlet } from 'react-router-dom'
import Navbar from '../../component/header/Navbar';

const MainLayout = () => {
    return (
        <div>
         <div className='mx-auto'>
         <Navbar></Navbar> 
          </div> 
          <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;