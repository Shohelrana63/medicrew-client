import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Doctors/Doctors.css';

const Doctor = ({ doctorData }) => {
    const { img, category, name, education, designation, department, hospital } = doctorData;
    const [descriptionCollapse, setDescriptionCollapse] = useState(false);
    const showMore = () => {
        setDescriptionCollapse(true);
    };
    const showLess = () => {
        setDescriptionCollapse(false);
    };

    return (
        <div className="single-doctor">
            <img className="img-fluid doctor-image" src={img} alt="doctor" />
            <div className="doctor-description">
                <p className="doctor-category">{category}</p>
                <h4 className="doctor-name">{name}</h4>
                <span className="doctor-education">{descriptionCollapse ? education : education.substr(0, 80)}</span>
                {education.length > 80 ? descriptionCollapse ? (
                    <span onClick={showLess} className="collapse-btn">
                        See Less
                    </span>
                ) : (
                    <span onClick={showMore} className="collapse-btn">
                        See More
                    </span>
                ) : (
                    <span> </span>
                )}
                <h6 className="mt-4">{designation}</h6>
                <h6 className="department">{department}</h6>
                <h6 className="hospital">{hospital}</h6>
                <div className="text-center">
                    <Link to="/appointment">
                        <button className="btn btn-style button-style mt-3">
                            <FontAwesomeIcon icon={faCalendarCheck} className="book-icon" /> Book Appointment
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Doctor;