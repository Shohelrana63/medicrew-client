import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import "./Info.css";

const infoData = [
    {
        title: 'Opnening Hours',
        description: 'We are open 7 hours(10AM - 5PM)',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Dhanmondi 8/A, Dhaka',
        icon: faMapMarkerAlt,
        background: 'dark'
    },
    {
        title: 'Call us now',
        description: '01704690563',
        icon: faPhone,
        background: 'primary'
    },
]
const Info = () => {
    return (
        <div className="info-section mt-5">
            <div className="container">
                <div className="row">
                    {
                        infoData.map((info) =>
                            <InfoCard info={info} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Info;