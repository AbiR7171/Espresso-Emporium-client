import React from 'react';
import Navbar from '../Shares/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Shares/Footer';

const Main = () => { 

      const location = useLocation();
      const splitLocation = location.pathname.split("/");
      console.log(splitLocation[1]);
    return (
        <div>
            <Navbar/>
            <Outlet/>
          <Footer/> 
        </div>
    );
};

export default Main;