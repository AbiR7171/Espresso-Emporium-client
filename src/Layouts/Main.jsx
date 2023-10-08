import React from 'react';
import Navbar from '../Shares/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shares/Footer';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;