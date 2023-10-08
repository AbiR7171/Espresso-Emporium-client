import React from 'react';
import Navbar from '../../Shares/Navbar';
import Banner from './Banner';
import BanSection from './BanSection';
import Popular from './Popular';
import FollowOn from './FollowOn';
import Footer from '../../Shares/Footer';

const Home = () => {
    return (
        <div>
            <Banner/>
            <BanSection/>
            <Popular/>
            <FollowOn/>
        </div>
    );
};

export default Home;