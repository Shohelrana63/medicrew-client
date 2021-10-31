import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./InfoCard.css";

const InfoCard = ({ info }) => {
    return (
        <div className="col-md-4 text-white info-card">
            <div className={`d-flex rounded justify-content-center info-container info-${info.background}`}>

                <FontAwesomeIcon className="info-icon" icon={info.icon} />

                <div >
                    <h6>{info.title}</h6>
                    <p className="small">{info.description}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;