import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Info from '../../Components/Info/Info';
import Navbar from '../../Components/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Info />
        </div>
    );
};

export default Home;