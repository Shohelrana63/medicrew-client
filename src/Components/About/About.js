import React from 'react';
import "./About.css";
import aboutBanner from "../../Images/serviceIcon/aboutBanner.png";
import choose from "../../Images/serviceIcon/choose.png";
import doctor from "../../Images/serviceIcon/doctor.png";
import emergency from "../../Images/serviceIcon/emergency.png";
import blood from "../../Images/serviceIcon/blood.png";
import hours from "../../Images/serviceIcon/24hours.png";
import counceling from "../../Images/serviceIcon/counceling.png";
import check from "../../Images/serviceIcon/check.png";
import shop from "../../Images/serviceIcon/cart.png";
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section className="container about">
            <div className="intro">
                <div className="row">
                <div className="section-header text-center">
                        <h2 className="text-primary heading-text text-uppercase">welcome to our medicrew</h2>
                    </div>
                   <div className="col-md-6 py-4 mt-5">
                       <h2 className="text-primary heading-text text-uppercase">medicrew</h2>
                       <p>Medicrew is an Online Doctor's Consultation web Application. People can
                            pick a specific date & time and fix an appointment. The patient will be able
                            to make an appointment by looking at the details of the doctor as per his
                            choice. A doctor can review his appointments and prescribe medicine to a
                            Patient from his dashboard. There are different categories of doctors are
                            here such as Medicine, Diabetes, Thyroid & Hormone, Neonate & Child
                            Specialist, Dermatologist, Ears, Nose and Throat (ENT) Specialist,
                            Gynecologist, Neurologist and also.
                            An authenticated user can get an appointment with his desired doctor.
                            Admin can add new doctors and modify the appointment details. The
                            doctor can join meeting with patients and give a prescription. The patient
                            can see the meeting link, prescription and can add a review from his
                            dashboard. We will provide a payment gateway method that will be easier
                            for a patient to fulfill the doctor's payment. By going to our drugs store page,
                            patients will see a lot of contracted drugs store where they can buy their
                            prescribed medicine with an impressive discount.
                       </p>
                       <Link to="/contact" className="btn btn-style button-style">Cotact Us</Link>
                   </div>
                   <div className="col-md-6 py-4 mt-5">
                       <img style={{marginTop:"110px"}} src={aboutBanner} width="100%" alt="" />
                   </div>
                </div>
            </div>
            <div className="choose py-3 my-5">
                 <div className="row mt-5">
                    <div className="col-md-6 my-5">
                       <img src={choose} style={{marginTop:"30px"}} alt="" width="100%" />
                    </div>
                    <div className="col-md-6 my-5">
                        <h2 className="text-primary heading-text">Why Medicrew</h2>
                        <p> <span><img src={check} width="20" alt="" /></span> Because we’re easy to work with. We take the work seriously, but not ourselves. We’re not prickly, precious or pretentious.
                           <br /> <br /> <span><img src={check} width="20" alt="" /></span> After getting a consultation, patients can review our doctors & service in our review section.
                           <br /><br /> <span><img src={check} width="20" alt="" /></span> Single Page Application (SPA). A single-page application works in the browser and requires no page reloads and no extra time for waiting.
                           <br /><br /> <span><img src={check} width="20" alt="" /></span> We think providing exceptional customer service is our USP, our main strength.
                           <br /> <br /> <span><img src={check} width="20" alt="" /></span> We deliver Online Doctor's Consultation that are high quality, technically advanced & high performance.
                           </p>
                    </div>
                 </div>
            </div>
            <div className="medical-services">
                <div className="container py-3">
                    <div className="section-header text-center">
                        <h2 className="text-primary heading-text text-uppercase pb-4">OUR MEDICAL SERVICES</h2>
                    </div>
                    <div className="row text-center mt-5">
                        <div className="col-md-4">
                            <img src={doctor} alt="" />
                            <h5 className="text-primary style-color mt-2">PROFESSIONAL DOCTORS</h5>
                            <p class="text-secondary">Lorem ipsum dolor sit amet, consectet commodi sit veniam adipisicing.</p>
                        </div>
                        <div className="col-md-4">
                            <img src={emergency} alt="" />
                            <h5 className="text-primary style-color mt-2">EMERGENCY CARE</h5>
                            <p class="text-secondary">Lorem ipsum dolor sit amet, consectet commodi sit veniam adipisicing.</p>
                        </div>
                        <div className="col-md-4">
                            <img src={blood} alt="" />
                            <h5 className="text-primary style-color mt-2">EXCLUSIVE BLOOD BANK</h5>
                            <p class="text-secondary">Lorem ipsum dolor sit amet, consectet commodi sit veniam adipisicing.</p>
                        </div>
                        <div className="col-md-4 mt-5">
                            <img src={hours} alt="" />
                            <h5 className="text-primary style-color mt-2">24 HOURS SERVICE</h5>
                            <p class="text-secondary">Lorem ipsum dolor sit amet, consectet commodi sit veniam adipisicing.</p>
                        </div>
                        <div className="col-md-4 mt-5">
                            <img src={counceling} alt="" />
                            <h5 className="text-primary style-color mt-2">MEDICAL COUNSELING</h5>
                            <p class="text-secondary">Lorem ipsum dolor sit amet, consectet commodi sit veniam adipisicing.</p>
                        </div>
                        <div className="col-md-4 mt-5">
                            <img src={shop} alt="" />
                            <h5 className="text-primary style-color mt-2">Exclusive Medishop</h5>
                            <p class="text-secondary">Lorem ipsum dolor sit amet, consectet commodi sit veniam adipisicing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;