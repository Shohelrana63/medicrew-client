import React from 'react';
import Covid19 from '../Components/Covid-19/Covid19';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';

const Covid = () => {
    return (
        <div className="heder-content">
            <Navbar/>
            <Covid19 />
            <Footer />
        </div>
    );
};

export default Covid;