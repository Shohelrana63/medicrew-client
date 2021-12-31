import React from 'react';
import { Link } from 'react-router-dom';
import contactBanner from '../Images/banner/contactBanner.png';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';

const Contacts = () => {
    return (
        <div className="heder-content">
            <Navbar/>
            <div className="banner-section">
                <div className="container">
                    <div style={{ height: '90vh' }} className="row align-items-center">
                        <div className="col-md-5">
                            <h1 className="banner-title">
                                Doctor's Chamber  <br /> on Video Call
                            </h1>
                            <p className="my-4">Book video call appointments with the bangladesies most qualified specialist doctors in their private chambers.</p>
                            <Link to="/appointment" className="btn btn-style button-style">Make Appointment</Link>
                        </div>
                        <div className="col-md-7 banner-img">
                            <img src={contactBanner} alt="banner-img" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div >
            <Contact />
            <Footer />
        </div>
    );
};

export default Contacts;