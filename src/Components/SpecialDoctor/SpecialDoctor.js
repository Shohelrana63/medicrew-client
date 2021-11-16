import React from 'react';
import { Link } from 'react-router-dom';
import Img from '../../Images/specialDctrCoverImg/specialDoctorImg.png';

const SpecialDoctor = () => {
    return (
        <section className="features-service my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-7 align-self-center">
                        <h1 className="heading-text"> Are You a Specialized Doctor ?</h1>
                        <p className="my-5" style={{ fontSize: '20px', textAlign: 'justify' }}>
                            Join Our Medicrew Team and Create your Virtual Chamber. Provide Medical
                            Consultancy via video call and expand the reach of your service. We have a strong network of
                            Bangladeshi registered doctors that you can trust.
                        </p>
                        <Link to="/contact">
                            <button className="btn btn-style button-style mb-5">Contact Us</button>
                        </Link>
                    </div>
                    <div className="col-md-5 mb-4">
                        <img className="img-fluid" src={Img} alt="doctor-need" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpecialDoctor;