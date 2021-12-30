import React from 'react';
import Banner from '../Components/Banner/Banner';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';

const Contacts = () => {
    return (
        <div className="heder-content">
        <Navbar/>
        <Banner />
        <Contact />
        <Footer />
    </div>
    );
};

export default Contacts;