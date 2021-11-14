import React from 'react';
import "./Banner.css";
import banner from "../../Images/banner/banner-img.png";
const Banner = () => {
    return (
        <div className="banner-section">
            <div className="container">
                <div style={{ height: '90vh' }} className="row align-items-center">
                    <div className="col-md-5">
                        <h1 className="banner-title">
                            Doctor's Chamber  <br /> on Video Call
                        </h1>
                        <p className="my-4">Book video call appointments with the bangladesies most qualified specialist doctors in their private chambers.</p>
                        <button className="btn btn-style button-style">Make Appointment</button>
                    </div>
                    <div className="col-md-7 banner-img">
                        <img src={banner} alt="banner-img" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;