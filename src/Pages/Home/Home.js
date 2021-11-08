import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Department from '../../Components/Department/Department';
import Info from '../../Components/Info/Info';
import Navbar from '../../Components/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Info />
            <Department />
        </div>
    );
};

export default Home;