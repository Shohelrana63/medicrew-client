import React from 'react';
import Footer from '../Components/Footer/Footer';
import MediShop from '../Components/MediShop/MediShop';
import Navbar from '../Components/Navbar/Navbar';

const MediShops = () => {
    return (
        <div>
            <Navbar/>
            <MediShop/>
            <Footer/>
        </div>
    );
};

export default MediShops;