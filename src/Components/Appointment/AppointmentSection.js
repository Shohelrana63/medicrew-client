import React from 'react';
import ReactCalender from './Calender';
import appointmentBanner from '../../Images/banner/appointment-banner.png';
import './Appointment.css';
const AppointmentSection = ({handleChange}) => {
    
    return (
        <div className="appointment-section">
        <div className="container">
            <div className="row" style={{height:"100vh"}}>
                <div className="col-md-6  align-self-end">
                    <div className="calender-area pr-md-5 mr-md-5">
                        <h3 className="text-uppercase heading-text mb-4 style-color">Select Your Desire Date:</h3>
                        <ReactCalender handleChange={handleChange}/>
                    </div>
                </div>

                <div className="col-md-6 align-self-center">
                    <img className="img" 
                     src={appointmentBanner} 
                    alt="banner" width="110%" />
                </div>
            </div>
        </div>
    </div>
    );
};

export default AppointmentSection;