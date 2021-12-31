import React from 'react';
import ReactCalender from './Calender';
import appointmentBanner from '../../Images/banner/ap.png';
import './Appointment.css';
const AppointmentSection = ({handleChange}) => {
    
    return (
        <div className="appointment-section">
        <div className="container">
            <div className="row" style={{height:"100vh"}}>
                <div className="col-md-6 align-self-end">
                    <div className="calender-area">
                        <h4 className="text-uppercase heading-text style-color">Select Your Desire Date:</h4>
                        <ReactCalender handleChange={handleChange}/>
                    </div>
                </div>

                <div className="col-md-6 align-self-center">
                    <img className="img" 
                     src={appointmentBanner} 
                    alt="banner" width="100%" />
                </div>
            </div>
        </div>
    </div>
    );
};

export default AppointmentSection;